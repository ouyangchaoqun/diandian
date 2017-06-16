<template id="myIndex">

    <div style="position: relative">
        <div v-title>我的主页</div>
        <v-scroll :on-refresh="onRefresh" :on-infinite="onInfinite">
            <div class="myIndex_box">
                <div class="banner index_banner">
                    <v-banner></v-banner>
                    <router-link to="/me" class="headBox">
                        <div class="userHeaderImg">
                            <img :src="user.faceUrl" alt="">
                        </div>

                    </router-link>

                </div>
                <!--banner end -->

                <div class="chart_box">
                    <v-chart :chartData="chartData"></v-chart>
                </div>

                <div class="myMood_list" v-for="( item,index)  in downdata" :key="index" v-show="!item.hide">

                    <img class="moodImg" :src="item.moodValueUrl" alt="">
                    <div class="moodImg_right">
                        <div class="moodState" :class="item.moodValueStyle">{{item.moodValueText}}

                            <!--<img class="addCj" :src="item.scense.src" alt="">  <i>{{item.scense.text}}</i>-->

                        </div>

                        <template v-if="canEdit(item)">
                            <router-link :to="item.editLink" class="editMood">
                                20分钟内可以补充文字和图片
                                <img src="../images/bianji.png" alt="">
                            </router-link>
                        </template>

                        <template><!--v-if=" (item.content!=''&& item.content!=null)  "-->
                            <div class="moodContext" v-html="formatContent(item)">
                            </div>
                        </template>
                        <template v-if="item.haspicture">
                            <div class="moodPhotoLists">
                                <div class="moodPhotoList" v-for="pic in item.pics">
                                    <img :src="pic.smallUrl" :data-bigPic="pic.bigUrl" :data-w="pic.picwidth"
                                         :data-h="pic.picheight" :style="pic.styleObject"
                                         @click="showBigImg(item.pics,pic)">
                                </div>
                                <div v-if="item.funnypics.length > 0" class="moodFunnPicList">
                                    <div class="moodFunnyPic" v-for="gif in item.funnypics">
                                        <img :src="gif.picpath" data-type="notresize" :data-w="gif.picwidth"
                                             :data-h="gif.picheight"/>
                                    </div>
                                </div>
                            </div>
                        </template>
                        <div class="moodLoc" v-if="item.address!=''&& item.address!=null">{{item.address}}</div>
                        <div class="moodTime">
                            <span>{{item.outTime}}</span>
                            <span v-if="canRevoke(item)"
                                  class="btn_del" @click="revoke(item.id,index)">撤回</span>
                            <span v-if="canClear(item)" class="btn_del"
                                  @click="empty(item.id,index)">删除</span>
                            <div class="moodFollow" @click="showComment(item.id,index)">

                                <div style="float: right;margin-left: 12px;">
                                    <template v-if="(item.content!==null&& item.content!=='')">
                                        <span class="followCount">{{item.replycount}}</span>
                                        <img class="followtype" src="../images/comments.png" alt="">
                                    </template>
                                </div>
                                <div style="float: right;">
                                    <span class="followCount">{{item.careCount}}</span>
                                    <img class="followtype" :src="item.careImg" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="show_box" v-if="item.hasComments && item.isShowComment">
                        <div class="arraw"></div>
                        <div class="show_top" v-if="item.careList.length>0">
                            <img class="show_img1" :src="item.careImg"/>
                            <img v-for="care in item.careList" :src="care.faceUrl"/>
                        </div>

                        <div class="line_comment" v-if="item.commentList.length>0&&item.careList.length>0"></div>

                        <ul class="show_bottom" v-if="item.commentList.length>0">
                            <img class="show_img2" src="../images/comments.png"/>
                            <li v-for="(comment,commentIndex) in item.commentList" :key="commentIndex"
                                :data-replyid="comment.id" :data-moodid="item.id"
                                :data-userid="comment.fromuserid" data-ajaxresult="hasface"
                                @click="commentOrDel(comment.fromuserid,comment.id,index,commentIndex)">
                                <img class="show_bottom_img" :src="comment.from_faceUrl">
                                <div class="show_bottom_text">
                                    <div class="reply_author">
                                        <a class="pname other" href="javascript:;">{{comment.from_nickName |
                                            shortName(7)}}</a>
                                    </div>
                                    <div class="reply_content">
                                        <template v-if="comment.tomoodreplyid>0">
                                            <span class="text_comment">回复</span><a class="pname other"
                                                                                   href="javascript:;">{{comment.to_nickName
                                            | shortName(7)}}：</a>
                                        </template>
                                        <span class="text_comment">{{emojiContent(comment.content)}}</span>
                                    </div>
                                </div>
                            </li>

                        </ul>
                    </div>


                </div>


            </div>

        </v-scroll>
    </div>


</template>

<script>


    import chart from "./chart.vue"
    import banner from "./banner.vue"
    import scroll from './lib/scroll.vue';
    var myIndex = {
        template: '#myIndex'
    };
    export default {
        data() {
            return {
                user: {},
                counter: 1, //默认已经显示出15条数据 count等于一是让从16条开始加载
                num: 10,  // 一次显示多少条
                pageStart: 0, // 开始页数
                pageEnd: 0, // 结束页数
                listdata: [], // 下拉更新数据存放数组
                downdata: [],  // 上拉更多的数据存放数组
                currTime: xqzs.dateTime.getTimeStamp(),
                topImg: xqzs.mood.getTopImg(),
                chartData: [
                    {"days": ["1月1", "2", "3", "4", "5", "6", "7"], "moods": [3, 5, 9, 6, 4, 3, 5]},
                    {"days": ["1月8", "9", "10", "11", "12", "13", "14"], "moods": [1, 3, 7, 6, 4, 2, 6]},
                    {"days": ["1月15", "16", "17", "18", "19", "20", "21"], "moods": [7, 8, 9, 0, 4, 0, 5]},
                    {"days": ["1月22", '23', "24", "25", "26", "27", "28"], "moods": [5, 1, 2, 3, 4, 5, 6]}

                ]
            }
        },
        filters: {
            shortName: function (value, len) {
                return xqzs.shortname(value, len);
            }
        },
        methods: {
            canEdit: function (mood) {
                return xqzs.mood.canEdit(mood);
            },
            canClear: function (mood) {
                return xqzs.mood.canClear(mood);
            },
            canRevoke: function (mood) {
                return xqzs.mood.canRevoke(mood);
            },
            emojiContent: function (c) {
                return xqzs.face.parseEmoji(c);
            },
            commentOrDel: function (userId, id, index, commentIndex) {
                let vm = this;
                if (userId === vm.user.id) {
                    vm._delComment(id, index, commentIndex);
                } else {
                    vm.addComment(id, index, commentIndex);
                }
            },
            _delComment(id, index, commentIndex){
                let vm = this;
                xqzs.weui.actionSheet("删除我的评论?", "删除", function () {
                    ///删除操作
                    let url = web.API_PATH + "mood/reply/_userId_/" + id;
                    vm.$http.delete(url)
                        .then((data) => {
                            if (data.data.status === 1) {
                                vm.downdata[index].commentList[commentIndex].isDel = true;
                                vm.$set(vm.downdata, index, vm.downdata[index])
                            } else {
                                xqzs.weui.toast("fail", "删除失败", function () {
                                });
                            }
                        })
                        .catch((response) => {

                        });


                }, function () {
                    //取消
                })
            },
            addComment(id, index, commentIndex){
                let vm = this;
                xqzs.mood.actionSheetEdit("取消", "发送", function (v) {
                    vm.$http.put(web.API_PATH + 'mood/reply/add', {
                        "moodId": vm.downdata[index].id,
                        "userId": null,
                        "replyId": id,
                        "content": v
                    }).then(response => {
                        if (response.data.status === 1) {
                            xqzs.weui.toast("success", "提交成功", function () {
                            });
                            vm.downdata[index].commentList.push(response.data.data.reply);
                            vm.$set(vm.downdata, index, vm.downdata[index])
                            console.log(response.data.data.reply)
                        }
                    }, response => {
                        // error
                    });
                    console.log(v)

                }, function (v) {
                    console.log(v)
                    //取消
                }, "回复 " + xqzs.shortname(vm.downdata[index].commentList[commentIndex].from_nickName, 7))
            },
            showComment: function (id, $index) {
                let vm = this;
                if (vm.downdata[$index].isShowComment) {
                    vm.downdata[$index].isShowComment = false;
                    vm.$set(vm.downdata, $index, vm.downdata[$index]);
                } else {
                    if (vm.downdata[$index].isAsk !== true) {

                        vm.$http.get(web.API_PATH + 'mood/care/query/comment/' + id).then((data) => {
                            vm.downdata[$index].isAsk = true;

                            if (data.data.status === 1) {

                                if (data.data.data.care.length > 0 || data.data.data.reply.length > 0) {
                                    vm.downdata[$index].hasComments = true;

                                    vm.downdata[$index].careList = data.data.data.care;
                                    vm.downdata[$index].commentList = data.data.data.reply;
                                    vm.downdata[$index].isShowComment = true;


                                }

                            }
                            console.log(data.data.data);
                            vm.$set(vm.downdata, $index, vm.downdata[$index]);
                        }, (response) => {
                            console.log('error');
                        });
                    }
                    vm.downdata[$index].isShowComment = true;
                    vm.$set(vm.downdata, $index, vm.downdata[$index]);
                }


            },

            empty: function (id, $index) {
                let vm = this;
                xqzs.weui.dialog("", "确定删除吗？", function () {

                }, function () {
                    vm._empty(id, $index);
                })
            },
            _empty: function (id, $index) {
                let vm = this;
                let url = web.API_PATH + "mood/clean/content/_userId_/" + id
                vm.$http.delete(url)
                    .then((data) => {
                        if (data.data.status === 1) {
                            vm.downdata[$index].content = '';
                            vm.downdata[$index].haspicture = 0;
                            vm.downdata[$index].pics = [];
                            vm.downdata[$index].funnypics = [];
                            vm.$set(vm.downdata, $index, vm.downdata[$index])
                        } else {
                            xqzs.weui.toast("fail", "删除失败", function () {
                            });
                        }
                    })
                    .catch((response) => {

                    });

            },
            revoke: function (id, $index) {
                let vm = this;
                xqzs.weui.dialog("", "确定撤回吗？", function () {

                }, function () {
                    vm._revoke(id, $index);
                })
            },
            _revoke: function (id, $index) {
                let vm = this;
                let url = web.API_PATH + "mood/_userId_/" + id
                vm.$http.delete(url, {emulateJSON: true})
                    .then((data) => {
                        if (data.data.status === 1) {
                            vm.downdata[$index].hide = true;
                            vm.$set(vm.downdata, $index, vm.downdata[$index]);
                            xqzs.weui.toast("success", "撤回成功", function () {
                            });
                        } else {
                            xqzs.weui.toast("fail", "撤回失败", function () {
                            });
                        }
                        console.log(data);
                    })
                    .catch((data) => {

                    });

            },
            showBigImg: function (list, curr) {

                var current = curr.bigUrl;
                var $data = [];
                for (var i = 0; i < list.length; i++) {
                    $data.push(list[i].bigUrl);
                }

                wx.previewImage({
                    current: current, // 当前显示图片的http链接
                    urls: $data // 需要预览的图片http链接列表
                });

            },

            getList(){
                let vm = this;
                vm.$http.get(web.API_PATH + 'mood/query/user/page/_userId_/' + 1 + "/" + vm.num).then((response) => {
                    vm.downdata = response.data.data.rows;
                    vm.downdata = xqzs.mood.initMoodsData(vm.downdata, false, vm.user.id);
                    console.log(vm.downdata);
                    vm.$nextTick(function () {
                        myResizePicture();//渲染完成
                    })
                }, (response) => {
                    console.log('error');
                });
            },
            onRefresh(done) {
                this.getList();
                done() // call done
            },
            onInfinite(done) {
                let vm = this;
                vm.$http.get(web.API_PATH + 'mood/query/user/page/_userId_/' + (vm.counter + 1) + "/" + vm.num).then((response) => {
                    vm.counter++;
                    vm.pageEnd = vm.num * vm.counter;
                    vm.pageStart = vm.pageEnd - vm.num;
                    let arr = response.data.data.rows;
                    let i = 0;
                    let end = vm.pageEnd;
                    arr = xqzs.mood.initMoodsData(arr);
                    for (; i < arr.length; i++) {
                        vm.downdata.push(arr[i]);
                    }
                    vm.$nextTick(function () {
                        myResizePicture();//渲染完成
                    });
                    if (arr.length === 0) {
                        this.$el.querySelector('.load-more').style.display = 'none';
                        this.$el.querySelector('.load-finish').style.display = 'block';
                        return;
                    }

                    done() // call done
                }, (response) => {
                    console.log('error');
                });
            },
            formatContent: function (item) {
                var before=  "[ 在"+item.scense.text+"方面 ]";
                if(item.content!=''&&item.content!=null&&item.content!=undefined){
                    return before + "，"+ xqzs.face.parse(item.content);
                }else{
                    return before;
                }

            }

        },
        mounted: function () {
            let _this = this;


            this.$http({
                method: 'GET',
                type: "json",
                url: web.API_PATH + 'user/find/by/user/Id/_userId_',
            }).then(function (data) {//es5写法
                if (data.data.data !== null) {
                    _this.user = eval(data.data.data);
                    this.getList();
                }
                console.log(_this.user);
            }, function (error) {
                //error
            });


            _this.$http.get(web.API_PATH + 'mood/get/user/mood/week/_userId_')
                .then((data) => {
                    if (data.data.status === 1) {
                        for (let i = 0; i < data.data.data.length; i++) {
                            let week = {days: [], moods: []};
                            for (let j = 0; j < data.data.data[i].length; j++) {
                                week.days.push(data.data.data[i][j].day);
                                week.moods.push(data.data.data[i][j].value);
                            }

                            _this.$set(_this.chartData, i, week)


                        }


                        /*console.log( _this.chartData)*/
                    }
                })
                .catch((response) => {

                });
        },
        components: {
            'v-scroll': scroll, "v-chart": chart, "v-banner": banner
        },
        beforeDestroy: function () {
            xqzs.weui.removeWhenPageChange()
        }
    }


</script>
<style>
    .moodState i {
        font-size: 12px;
        color: #999;
        font-style: normal;
    }

    .line_comment {
        height: 1px;
        background: #eee;
    }


</style>