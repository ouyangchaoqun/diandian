<template id="myIndex">

    <div style="position: relative">
        <v-showLoad v-if="showLoad"></v-showLoad>
        <div v-title>我的主页</div>
        <v-scroll :on-refresh="onRefresh" :on-infinite="onInfinite" class="innnn" :isPageEnd="isPageEnd" :isShowMoreText="isShowMoreText">
            <div class="myIndex_box">
                <div class="banner index_banner">
                    <img src="../images/indexBanner1.jpg" alt="">
                    <router-link to="/me" class="headBox">
                        <div class="userHeaderImg">
                            <img :src="user.faceUrl" alt="">
                        </div>
                    </router-link>
                    <div class="addName">{{user.nickName}}</div>
                </div>
                <v-indexCount :mmm="aaa"></v-indexCount>
                <ul class="centerClass">
                    <li class="centerClassItem classGetup" @click="goGetupCount()">
                        <div class="classImg getUpImg"></div>
                        <div class="classItem_top">
                            早起打卡
                            <img src="../images/me_btn_right.png" alt="">
                        </div>
                        <div class="class_title">
                            <div class="class_titleTop">
                                <span>起床时间</span>
                                <div class="class_info">
                                    <div>一</div>
                                    <div>二</div>
                                    <div>三</div>
                                    <div>四</div>
                                    <div>五</div>
                                    <div>六</div>
                                    <div>日</div>
                                </div>
                            </div>
                            <div class="class_titleBottom">
                                <span style="height:0.88235rem;">{{classGetup&&classGetup.today.shorttime}}</span>
                                <div class="class_info" style="height:0.588235rem;">
                                    <div v-for="item in classGetup.list">
                                        <template v-if="item.shorttime!=''">{{item.shorttime}}</template>
                                        <template v-if="item.weekix<=classGetup.today.weekix&&item.shorttime==''">
                                            <img src="../images/norecord.png" alt="">
                                        </template>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </li>
                    <li class="centerClassItem classCalendar" @click="gonewCalendar()">
                        <div class="classImg rlImg"></div>
                        <div class="classItem_top">
                            心情日历
                            <img src="../images/me_btn_right.png" alt="">
                        </div>
                        <div class="class_title">
                            <div class="class_titleTop">
                                <span>今日心情</span>
                                <div class="class_info">
                                    <div>一</div>
                                    <div>二</div>
                                    <div>三</div>
                                    <div>四</div>
                                    <div>五</div>
                                    <div>六</div>
                                    <div>日</div>
                                </div>
                            </div>
                            <div class="class_titleBottom">
                                <span>
                                    <img :src="todayMood.smailUrl" alt="">
                                </span>
                                <div class="class_info">
                                    <div v-for="item in moodList">
                                        <template v-if="item.weekix<=todayMood.weekix">
                                            <img :src="item.smailUrl" alt="">
                                        </template>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </li >
                    <li class="centerClassItem classHabit" @click="goHabit()">
                        <div class="classImg xgImg"></div>
                        <div class="classItem_top">
                            健康习惯
                            <img src="../images/me_btn_right.png" alt="">
                        </div>
                        <div class="class_title">
                            <div class="class_titleTop">
                                <span>今日完成</span>
                                <div class="class_info">
                                    <div>一</div>
                                    <div>二</div>
                                    <div>三</div>
                                    <div>四</div>
                                    <div>五</div>
                                    <div>六</div>
                                    <div>日</div>
                                </div>
                            </div>
                            <div class="class_titleBottom">
                                <span style="height:0.88235rem;">{{classHabit&&classHabit.today.finishNum}}</span>
                                <div class="class_info" style="bottom:-2px;">
                                    <div v-for="item in classHabit.list">
                                        <template v-if="item.finishNum!=0">
                                            <img src="../images/habitf.png" alt="">
                                        </template>
                                        <template v-if="item.finishNum==0&&classHabit.today.weekix>=item.weekix">
                                            <img src="../images/habitnof.png" alt="">
                                        </template>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </li>
                    <li class="centerClassItem lastClassItem" @click="goStepInfo()">
                        <div class="classImg sportImg"></div>
                        <div class="classItem_top">
                            运动步数
                            <img src="../images/me_btn_right.png" alt="">
                        </div>
                        <div class="class_title">
                            <div class="class_titleTop">
                                <span>今日步数</span>
                                <div class="class_info">
                                    <div>一</div>
                                    <div>二</div>
                                    <div>三</div>
                                    <div>四</div>
                                    <div>五</div>
                                    <div>六</div>
                                    <div>日</div>
                                </div>
                            </div>
                            <div class="class_titleBottom">
                                <span style="height:0.88235rem;">{{classStep&&stepChange(classStep.today.step)}}</span>
                                <div class="class_info">
                                    <div v-for="item in classStep.list">
                                        <template v-if="classStep.today.weekix>=item.weekix">{{stepChange(item.step)}}</template>
                                        <template v-if="classStep.today.weekix<item.weekix"></template>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </li>
                </ul>
                <div style="height: 0.588235rem;background: rgba(238,238,238,1)"></div>
                <div class="moodList_title">
                    <div>
                        <div class="classImg"></div>
                        心情说说
                    </div>

                </div>
                <div class="myMood_list" v-for="( item,index)  in downdata" :key="index" v-show="!item.hide" >
                    <img class="moodImg" :src="item.moodValueUrl" alt="">
                    <div class="moodImg_right">
                        <div class="moodState" :class="item.moodValueStyle">{{item.moodValueText}}
                            <!--<img class="addCj" :src="item.scense.src" alt="">  <i>{{item.scense.text}}</i>-->
                        </div>
                        <template v-if="canEdit(item)">
                            <router-link :to="item.editLink" class="editMood" replace>
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
                                    <img :src="pic.smallUrl" :data-bigPic="pic.bigUrl"  :data-w="item.pics.length>1?pic.picwidth:''"
                                         :data-h="item.pics.length>1?pic.picheight:''"   :class="{hw:pic.picwidth>pic.picheight&&item.pics.length==1,hh:pic.picwidth<=pic.picheight&&item.pics.length==1}" :style="pic.styleObject"
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

                                    <span class="followCount">{{item.replycount}}</span>
                                    <img class="followtype" src="../images/comments.png" alt="">

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

    import Bus from './bus.js';
    import chart from "./chart.vue"
    import banner from "./banner.vue"
    import showLoad from "./showLoad.vue"
    import calendarTemplate from './calendarTemplate.vue'
    import calendarPopup from './calendarPopup.vue'
    import indexCount from './indexCount.vue'
    var myIndex = {
        template: '#myIndex'
    };
    export default {
        data() {
            return {
               arrLength:'',
                showLoad:false,
                counter: 1, //默认已经显示出15条数据 count等于一是让从16条开始加载
                num: 10,  // 一次显示多少条
                pageStart: 0, // 开始页数
                pageEnd: 0, // 结束页数
                isPageEnd:false,
                isShowMoreText:true,
                listdata: [], // 下拉更新数据存放数组
                downdata: [],  // 上拉更多的数据存放数组
                currTime: xqzs.dateTime.getTimeStamp(),
                topImg: xqzs.mood.getTopImg(),
                chartData: [
                    {"days": ["1月1", "2", "3", "4", "5", "6", "7"], "moods": [3, 5, 9, 6, 4, 3, 5]},
                    {"days": ["1月8", "9", "10", "11", "12", "13", "14"], "moods": [1, 3, 7, 6, 4, 2, 6]},
                    {"days": ["1月15", "16", "17", "18", "19", "20", "21"], "moods": [7, 8, 9, 0, 4, 0, 5]},
                    {"days": ["1月22", '23', "24", "25", "26", "27", "28"], "moods": [5, 1, 2, 3, 4, 5, 6]}

                ],
                aaa:'',
                activeIndex:0,
                classGetup:'',
                classCalendar:'',
                classHabit:'',
                classStep:'',
                moodList:'',
                todayMood:''
            }
        },
        props:{
            user:{
                type:Object
            }
        },
        filters: {
            shortName: function (value, len) {
                return xqzs.shortname(value, len);
            }
        },
        methods: {
            goGetupCount:function () {
              this.$router.push('/getUpStatistics?type=2')
            },
            gonewCalendar:function () {
              this.$router.push('/newCalendar')
            },
            goHabit:function () {
                this.$router.push("/habit")
            },
            goStepInfo:function () {
                this.$router.push("/stepStatistics")
            },
            stepChange:function (n) {
                if(n>=10000){
                    n = parseInt(n/1000) + 'k';
                }
                return n;
            },
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
                            let reply = response.data.data.reply;
                            reply.content=vm.emojiContent(reply.content)
                            vm.downdata[index].commentList.push(reply);
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
                //显示loding
                this.showLoad = true;
                vm.$http.get(web.API_PATH + 'mood/query/user/page/_userId_/' + 1 + "/" + vm.num).then((response) => {
                    vm.downdata = response.data.data.rows;
                    if(vm.downdata) {
                        console.log(vm.downdata)
                        console.log(vm.downdata[0].userId)
                        this.aaa = vm.downdata[0].userId;
                        vm.downdata = xqzs.mood.initMoodsData(vm.downdata, false, vm.user.id);
                    }
                    console.log(vm.downdata);
                    vm.$nextTick(function () {
                        myResizePicture();//渲染完成
                        //消失loding
                        this.showLoad = false;
                    })
                    if (vm.downdata.length <vm.num) {
                        vm.isPageEnd=true;
                    }

                }, (response) => {
                    console.log('error');
                    //消失loding
                    this.showLoad = false;
                });
            },
            onRefresh(done) {
                this.counter=1;
                this.isPageEnd=false;
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
                    this.arrLength = arr.length;

                    for (; i < arr.length; i++) {
                        vm.downdata.push(arr[i]);
                    }

                    vm.$nextTick(function () {
                        myResizePicture();//渲染完成
                    });

                    if (arr.length <vm.num) {
                        vm.isPageEnd=true;
                    }

                    done() // call done
                }, (response) => {
                    console.log('error');
                });
            },
            formatContent: function (item) {
                var before=  "<div style='font-size: 12px; color:#999; margin-top: 3px;'>[ 在"+item.scense.text+"方面 ]</div>";
                var before2=  "在"+item.scense.text+"方面：";
                if(item.content!=''&&item.content!=null&&item.content!=undefined){
                    return   xqzs.face.parse(item.content) + before;
                }else{
                    return before;
                }

            },
            getWeekClass:function () {
                let _this = this;
                _this.$http.get(web.API_PATH+'user/index/week/_userId_').then(function (data) {
                    var res = data.data.data
                    console.log(res)
                    _this.classGetup = res.getUp;
                    _this.classCalendar = res.mood;
                    console.log(_this.classCalendar.today)
                    _this.todayMood = res.mood.today;
                    let todayfaceIndex = 0;
                    if( _this.todayMood.moodValue){
                        todayfaceIndex =  _this.todayMood.moodValue;
                    }else {
                        todayfaceIndex = 0;
                        _this.todayMood.moodValue = 0;
                    }
                    _this.todayMood.smailUrl = web.IMG_PATH + "list_mood_0" + todayfaceIndex + ".png";
                    _this.$set( _this.todayMood)
                    console.log( _this.todayMood)


                    _this.classHabit = res.habits;
                    _this.classStep = res.weRun;
                    let faceIndex = 0;
                    _this.moodList =  res.mood.list;
                    for(let i = 0;i<_this.moodList.length;i++){
                        if(_this.moodList[i].moodValue){
                            faceIndex = _this.moodList[i].moodValue;
                        }else{
                            faceIndex = 0;
                            _this.moodList[i].moodValue= 0;
                        }
                        _this.moodList[i].smailUrl = web.IMG_PATH + "list_mood_0" + faceIndex + ".png";
                        _this.$set(_this.moodList,i,_this.moodList[i]);
                    }
                })
            }

        },
        mounted: function () {
            let addmood = this.$route.query.addmood;
            if(addmood==="true"){
                setTimeout(function () {
                    xqzs.coin.addAminate(xqzs.coin.constant.ADD_MOOD_TYPE);
                },200)
            }


            var _this = this;
            _this.getWeekClass();
            _this.activeCalendarIndex  = _this.$route.query.activeIndex;
            let scrollFromEdit = _this.$route.query.scroll;
            if(scrollFromEdit==1){
                setTimeout(function () {
                    $(".innnn").stop().animate({"scrollTop": 230},800)
                },600)

            }

            if(_this.$route.query.month!=undefined) {
                let date = new Date();
                let _month = date.getMonth();
                let count = _month - parseInt(_this.$route.query.month);
                for(let i=0;i<=count;i++){
                    Bus.$emit('oldMonthClick')
                }
            }

            this.getList();

            _this.$http.get(web.API_PATH + 'mood/get/user/mood/week/_userId_')
                .then((data) => {
                console.log(data)
                    if (data.data.status === 1) {
                        for (let i = 0; i < data.data.data.length; i++) {
                            let week = {days: [], moods: []};
                            for (let j = 0; j < data.data.data[i].length; j++) {
                                week.days.push(data.data.data[i][j].day);
                                week.moods.push(data.data.data[i][j].value);
                            }
                            _this.$set(_this.chartData, i, week)
                        }
                    }
                })
                .catch((response) => {
                });
            xqzs.wx.setConfig(_this,false,xqzs.wx.shareConfig.center);

        },
        components: {
            'v-scroll': scroll, "v-chart": chart,
            "v-banner": banner,'v-showLoad':showLoad,
            'v-calendarTemplate':calendarTemplate,'v-calendarPopup':calendarPopup,
            'v-indexCount':indexCount
        },

    }

    import scroll from './lib/scroll.vue';

</script>
<style>
    .centerClassItem .classImg.getUpImg{
        background: url(../images/index_btn_get_up.png) no-repeat #ffefcb center;
        background-size: 1.4rem 1.4rem;
        border:0.03rem  solid #ffb700;
    }
    .centerClassItem .classImg.rlImg{
        background: url(../images/class_btn_rl.png) no-repeat rgba(251,208,190,1) center;
        background-size: 1.2rem ;
        border:0.03rem  solid rgba(255,102,51,1);
    }
    .centerClassItem .classImg.xgImg{
        background: url(../images/index_btn_habit.png) no-repeat #def3cd center;
        background-size: 1.03rem ;
        border: 0.03rem solid #71c06d;
    }
    .centerClassItem .classImg.sportImg{
        background: url(../images/class_btn_sport.png) no-repeat rgba(214,251,229,1) center;
        background-size: 1rem ;
        border: 0.03rem solid rgba(133,215,166,1);
    }
    .moodList_title{
        height:4.35rem;
        background: #fff;
        line-height: 4.35rem;
        border-bottom: 1px solid rgba(238,238,238,1);
        padding-left: 15%;
        color:rgba(51,51,51,1);
        font-size: 0.88235rem;
    }
    .moodList_title>div{
        position: relative;
    }
    .moodList_title .classImg{
        width: 2rem;
        height: 2rem;
        border-radius: 0.7rem;
        position: absolute;
        left: -2.6rem;
        top: 1.176471rem;
        background: url("../images/mood_btn_class.png") no-repeat rgba(219,244,251,1) center;
        border:0.03rem solid rgba(30,190,250,1);
        background-size: 1rem;
    }
    .myIndex_box .index_banner{
        height:8.8235rem;
    }
    .index_banner img{
        height:100%;
    }
    .moodState i {
        font-size: 12px;
        color: #999;
        font-style: normal;
    }

   .myMood_list .moodContext {
       -webkit-user-select:text !important;;
       -moz-user-select:text !important;;
       -khtml-user-select:text !important;
       user-select:text !important;
    }

    .moodPhotoList img.hw{ width: 10.05882352941176rem !important; height: auto !important}
    .moodPhotoList img.hh{ height: 10.58823529411765rem !important; width: auto !important}




</style>