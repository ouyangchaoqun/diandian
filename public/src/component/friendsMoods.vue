<template >

    <div style="position: relative" class="friends_moods">
        <!--<div class="weui-toast">
            <i class="weui-icon-success-no-circle weui-icon_toast"></i>
            <p class="weui-toast__content">已完成</p>
        </div>-->
        <v-showLoad v-if="showLoad"></v-showLoad>
        <div v-title>心情说说</div>
        <v-tab tab="friendMoods"></v-tab>
        <v-scroll :on-refresh="onRefresh" :on-infinite="onInfinite" :isPageEnd="isPageEnd" :isShowMoreText="isShowMoreText" :cutHeight="cutHeight">
            <div class="friends_box">

                <!--beforeChange-->
                <!--<div class="friend_header">-->
                    <!--<router-link to="/treeHole">你知道“小树洞”的故事吗？</router-link>-->
                <!--</div>-->
                <div class="friends_mood" v-for="( item,index)  in downdata" :key="index">

                    <!--beforeChange-->
                    <!--<img class="friendHeaderImg" :src="item.randomFaceUrl" alt="">-->
                    <!--beforeChangeEnd-->


                    <!--change-->
                    <img class="friendHeaderImg" :src="item.randomFaceUrl" v-if="item.isFriend==1||item.isAd==1" alt="">
                    <img class="friendHeaderImg" :src="item.faceUrl" v-else-if="item.isFriend!=1||item.isMyself==1" alt="">
                    <!--changeEnd-->

                    <div class="friendState">
                        <span class="mood_state" :class="item.moodValueStyle"><span :class="{bluecolor:item.isAd==1}" :style="item.typeFaceColor">
                            <template v-if="item.isAd==1">{{item.moodValueText}}</template>
                            <template v-else-if="item.isFriend==1"><font class="happy_txt_color">我的朋友</font></template>
                            <template v-else-if="item.userId==user.id"><font class="unhappy_txt_color">我自己</font></template>
                            <template v-else  ><font class="bluecolor">朋友的朋友</font></template>

                        </span></span>
                        <!--<img class="addCj" :src="item.scense.src" alt="">  <i>{{item.scense.text}}</i>-->

                        <p class="mood_text" v-html="formatContent(item.content)"></p>
                        <ul class="friendImgList" v-if="item.haspicture">
                                 <li   v-for="pic in item.pics">
                                    <img :src="pic.smallUrl" :data-bigPic="pic.bigUrl" :data-w="item.pics.length>1?pic.picwidth:''"
                                         :data-h="item.pics.length>1?pic.picheight:''"   :class="{hw:pic.picwidth>pic.picheight&&item.pics.length==1,hh:pic.picwidth<=pic.picheight&&item.pics.length==1}"
                                       :style="pic.styleObject"
                                         @click="showBigImg(item.pics,pic)">
                                </li>

                            <li v-if="item.funnypics&&item.funnypics.length > 0" class="moodFunnPicList">
                                <div class="moodFunnyPic" v-for="gif in item.funnypics">
                                    <img :src="gif.picpath" data-type="notresize" :data-w="gif.picwidth" :data-h="gif.picheight"/>
                                </div>
                            </li>

                        </ul>
                        <div class="friendsLoc" v-if="item.address" v-html="item.address"></div>
                        <div class="stateBottom">
                            <div class="time">{{item.outTime}}</div>
                            <div class="time_right">
                                <div style="float: left;position: relative" @touchstart="flyStart(index,item)" @touchend="flyOver()">
                                    <span class="frined_zan">{{item.careCount}}</span>
                                    <div class="heart_cover"></div>
                                    <img class="time_rightimg1 img" :src="item.careImg" alt=""  :class="{heartUp:item.hit}">
                                    <img  v-if="item.flyhearts"  v-for="ii in item.flyhearts" :src="item.flyhearts&&item.moodValue>4?'http://oss.xqzs.cn/xqzs/mini/program/index_heart_on.png':'/dist/mood_icon_baob_pre.png'"  class="fly_heart " :class="('start'+ii.rnd)" />

                                </div>

                                <div style="float: left;margin-left: 14px;"  >
                                    <span class="frined_com">{{item.replycount}}</span>
                                    <img class="time_rightimg2" src="../images/comments.png" @click="addComment(0,index)" alt="" >
                                </div>

                            </div>
                        </div>

                        <div class="commont_box" v-if="item.replies&&item.replies.length>0">
                            <div class="arrow"></div>
                            <div class="friend_commont"  v-for="(reply,replyIndex) in item.replies" :key="replyIndex" @click="commentOrDel(reply.fromuserid,reply.id,index,replyIndex)"  v-if="!reply.isDel&&replyIndex<3">
                                <a href="javascript:;">
                                    <span class="name" v-if="reply.tomoodreplyid==0||reply.tomoodreplyid==null">
                                        <template v-if="reply.fromuserid==item.userId">作者</template><template v-if="reply.fromuserid!=item.userId">{{reply.from_nickName | shortName(7)}}</template>：</span><template v-if="reply.tomoodreplyid!=0&&reply.tomoodreplyid!=null"><span class="name"><template v-if="reply.fromuserid==item.userId">作者</template><template v-if="reply.fromuserid!=item.userId">{{reply.from_nickName | shortName(7)}}</template></span>回复<span class="name"><template v-if="reply.touserid==item.userId">作者</template><template v-else>{{reply.to_nickName | shortName(7)}}</template>：</span></template><span class="commont">{{reply.content}}</span>
                                </a>
                            </div>
                            <div class="friend_commont"  v-for="(reply,replyIndex) in item.replies" :key="replyIndex" @click="commentOrDel(reply.fromuserid,reply.id,index,replyIndex)"  v-if="!reply.isDel&&replyIndex>2&&item.showAll">
                                <a href="javascript:;">
                                <span class="name" v-if="reply.tomoodreplyid==0||reply.tomoodreplyid==null">
                                    <template v-if="reply.fromuserid==item.userId">作者</template><template v-if="reply.fromuserid!=item.userId">{{reply.from_nickName | shortName(7)}}</template>：</span><template v-if="reply.tomoodreplyid!=0&&reply.tomoodreplyid!=null"><span class="name"><template v-if="reply.fromuserid==item.userId">作者</template><template v-if="reply.fromuserid!=item.userId">{{reply.from_nickName | shortName(7)}}</template></span>回复<span class="name"><template v-if="reply.touserid==item.userId">作者</template><template v-else>{{reply.to_nickName | shortName(7)}}</template>：</span></template><span class="commont">{{reply.content}}</span>
                                </a>
                            </div>
                            <div v-if="item.replies&&item.replies.length>3" class="showOthercom" @click="showOther(index)">{{item.showordown}}</div>
                        </div>
                    </div>
                </div>



            </div>
        </v-scroll>
    </div>

</template>

<script type="text/javascript">
    import scroll from './lib/scroll.vue';
    import tab from './lib/tab.vue';
    import showLoad from './showLoad.vue';
    import Bus from './bus.js';
    var  timeOutHeart;
    export default {
        data() {
            return {
                pageNo: 1, //默认已经显示出15条数据 count等于一是让从16条开始加载
                pageSize: 10,  // 一次显示多少条
                lastId:0,
                lastAdId:0,
                downdata: [],  // 上拉更多的数据存放数组
                isLoading:false,
                showAll:false,
                showLoad:false,
                isPageEnd:false,
                isShowMoreText:true,
                cutHeight:50
            }
        },
        props:{
            user:{
                type:Object
            }
        },
        filters:{
            shortName:function(value,len){
                return xqzs.shortname(value,len);
            }
        },
        methods: {

            flyStart:function (index,mood) {

                console.log(index)
                let _this = this;
                _this.addCare(mood,index);
                if(mood.userId !=_this.user.id) {
                    let list = this.downdata;
                    let item = list[index];
                    item.flyhearts = [];
                    for (let i = 0; i < 5; i++) {
                        item.flyhearts.push({rnd: i});
                    }
                    _this.$set(_this.downdata, index, item);
                     timeOutHeart = setInterval(function () {
                         _this.rndFlyHeart(item, index)

                    }, 500)
                }
            },

            rndFlyHeart:function (item,index) {
                let _this=this;
                let rnd = parseInt(Math.random()*5);
                console.log(typeof item.flyhearts)
                if(typeof item.flyhearts !='object'){
                    item.flyhearts=[];
                }
                item.flyhearts.push({rnd:rnd});
                rnd = parseInt(Math.random()*5);
                item.flyhearts.push({rnd:rnd});
                rnd = parseInt(Math.random()*5);
                item.flyhearts.push({rnd:rnd});
                _this.$set(_this.downdata,index,item);
            },

            flyOver:function () {
                console.log("end")
                if(timeOutHeart){
                    clearInterval(timeOutHeart)
                }
            },



            showOther(ix){

                this.downdata[ix].showAll = !this.downdata[ix].showAll;
                console.log(this.downdata[ix].showAll)


                this.downdata[ix].showordown=  this.downdata[ix].showAll?"收起":"查看全部";
                this.$set(this.downdata,ix ,this.downdata[ix]);
                console.log(this.downdata);

            },
            getList(done){
                if(typeof done == 'function'){
                    done()
                }
                let vm = this;
                if( this.isLoading||this.isPageEnd){return }
                //显示loding
                this.showLoad = true;
                this.isLoading=true;

                vm.$http.get(web.API_PATH + 'mood/query/all/page/_userId_/' + vm.pageNo + "/" + vm.pageSize +"?lastId=" + vm.lastId +"&lastAdId="+vm.lastAdId).then((response) => {  //friend
                    //消失loding
                    vm.showLoad = false;
                    vm.isLoading=false;
                    if(vm.pageNo==1){
                        vm.downdata = response.data.data.rows;
                    }else{
                        vm.downdata = vm.downdata.concat( response.data.data.rows)
                    }


                     var maxid = vm.lastId,minid= vm.lastAdId;
                    for(var i=0,l=response.data.data.rows.length;i<l;i++){

                        if(response.data.data.rows[i].id<0){
                            minid = response.data.data.rows[i].id
                        }else{
                            maxid = response.data.data.rows[i].id;
                        }
                    }

                    vm.lastId = maxid ;
                    vm.lastAdId = minid ;


                    vm.downdata = xqzs.mood.initMoodsData(vm.downdata,false,vm.user.id);
                    console.log(vm.downdata);
                    vm.$nextTick(function () {
                        myResizePicture($(".friends_mood"),"friendImgList","li");//渲染完成
                    })

                    if (vm.downdata.length <vm.pageSize) {
                        vm.isPageEnd=true;
                    }
                    vm.pageNo= vm.pageNo+1;
                }, (response) => {
                    console.log('error');
                    //消失loding
                   this.showLoad = false;
                });

            },
            onRefresh(done) {
                this.pageNo=1;
                this.isPageEnd=false;
                this.lastId = 0 ;
                this.lastAdId = 0 ;
                this.getList(done);

            },
            onInfinite(done) {
                this.getList(done);
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
            addCare:function (mood,index) {
                let _this = this;
                if(mood.userId !=_this.user.id){
                    _this.$http.put(web.API_PATH+'mood/care/add',{"moodId":mood.id,"userId":null}).then(response => {
                        if(response.data.status===1){

                            _this.downdata[index].caremy=_this.user.id;
                            _this.downdata[index].hit=true;
                            _this.downdata[index].careCount= response.data.data;

                           _this.$set(_this.downdata, index, _this.downdata[index]);



                            _this.downdata =  xqzs.mood.initMoodsData(_this.downdata,false,_this.user.id);
                            console.log( _this.downdata)

                        }
                    });
                }
            },
            commentOrDel:function (userId,replyId,index,replyIndex) {


                let vm = this;
                console.log(userId);
                console.log(vm.user.id);
                if(userId==vm.user.id){
                    vm._delComment(replyId,index,replyIndex);
                }else{
                    vm.addComment(replyId,index,replyIndex);
                }
            },
            _delComment(replyId,index,replyIndex){
                let vm = this;
                xqzs.weui.actionSheet("删除我的评论?","删除",function () {
                    ///删除操作
                    let url  = web.API_PATH+ "mood/reply/_userId_/"+replyId;
                    vm.$http.delete(url)
                        .then((data) => {
                            if (data.data.status === 1) {

                               vm.downdata[index].replies.splice(replyIndex,1);


                                vm.downdata[index].replycount=  vm.downdata[index].replycount-1;
                                vm.$set(vm.downdata, index, vm.downdata[index])
                            } else {
                                xqzs.weui.toast("fail", "删除失败", function () {
                                });
                            }
                        })
                        .catch((response) => {

                        });


                },function () {
                    //取消
                })
            },
            addComment(replyId,index,replyIndex){
                let vm = this;
                let replyorcomment='评论';
                let edithoder="";
                console.log(replyIndex)
                 if(replyIndex!==undefined&&replyIndex>=0) {
                     replyorcomment='回复';
                     if(vm.downdata[index].replies[replyIndex].fromuserid ===vm.downdata[index].userId ){
                        edithoder="作者";
                    }else{
                        edithoder= xqzs.shortname(vm.downdata[index].replies[replyIndex].from_nickName,7);
                    }

                }
                xqzs.mood.actionSheetEdit("取消","发送",function (v) {
                    vm.$http.put(web.API_PATH+'mood/reply/add',{"moodId":vm.downdata[index].id,"userId":null,"replyId":replyId,"content":v}).then(response => {
                        if(response.data.status===1){


                            if(response.data.data.reply.touserid===vm.downdata[index].userId){
                                response.data.data.reply.to_nickName= "作者";
                            }
                            vm.downdata[index].replycount = response.data.data.mood.replycount;
                            let reply = response.data.data.reply;
                            reply.content= xqzs.face.parseEmoji(reply.content);
                            vm.downdata[index].replies.push(reply);
                            vm.$set(vm.downdata, index, vm.downdata[index])
                         }


                    }, response => {
                        // error
                    });
                    console.log(v)

                },function (v) {

                    //取消
                },replyorcomment+' '  + edithoder)
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
            formatContent:function (c) {
                return xqzs.face.parse(c);
            }

        },
        created: function () {
            let _this = this;
            _this.getList();
            xqzs.wx.setConfig(_this,false,xqzs.wx.shareConfig.friendMood);

        },
        updated:function () {
            Bus.$emit("scrollHeightInit", xqzs.equipment.tabHeight()+2);
        },
        components: {
            'v-scroll': scroll,
            'v-showLoad':showLoad,
            'v-tab':tab,
        },
        beforeDestroy: function () {
            xqzs.weui.removeWhenPageChange()
        }
    }


</script>
<style>
.showOthercom{
    font-size: 13px;
    color: #5e61a2;
    margin-top: 10px;
}

.showOthercom.adlink{ margin-bottom: 0; padding-top: 2px; padding-bottom: 8px; padding-right: 30px;}
.showOthercom .link{ background:url(../images/friends_moods_ad_link.png) ; height: 12px; width: 12px;
    display: inline-block; background-size: 12px;vertical-align: middle ; margin-left: 3px;}

    .friend_header {
        border-bottom: 1px solid #eee;
        padding: 15px;
        background: #fff;
    }

    .friend_header a {
        height: 30px;
        line-height: 30px;
        text-align: center;
        background: #ebeceb;
        margin: 0 auto;
        font-size: 14px;
        border: 1px solid rgba(0, 0, 0, 0.2);
        border-color: #ebeceb;
        border-radius: 5px;
        color: #666666;
        display: block;
    }
    .friend_header a:active{
        background: rgba(0, 0, 0, 0.2);
    }

.friends_mood {
        margin-bottom: 0px;
        border-bottom: 1px solid #eee;
        background: #ffffff;
        padding: 10px 12px;


    }

.friends_mood .mood_text{
    -webkit-user-select:text !important;;
    -moz-user-select:text !important;;
    -khtml-user-select:text !important;
    user-select:text !important;
}

.bluecolor{ color:#5e61a2}
    .friendHeaderImg {
        width: 44px;
        height: 44px;
        display: block;
        border-radius: 4px;
        float: left;
    }

    .friendState {
        margin-left: 56px;
    }

    .mood_state {
        font-size: 14px;
        margin-bottom: 1px;
        display: block;
        line-height: 24px;
    }

    .mood_text {
        border-radius: 4px;
        word-wrap: break-word;
        word-break: break-all;
        overflow: hidden;
        font-size: 14px;
        line-height: 21px;
        color: #333333;
        padding: 4px 16px 8px 0;
        /*letter-spacing: 0.03rem;*/
    }

    .stateBottom {
        height: 17px;
        font-size: 12px;
    }

    .stateBottom .time {
        font-size: 12px;
        color: #999999;
        float: left;
        line-height: 18px
    }

    .time_right {
        color: #999999;
        float: right;
    }

    .friendsLoc {
        font-size: 12px;
        color: #516591;
        line-height: 20px;
        margin-bottom: 6px;
    }



    .heart_cover{   width:14px; height: 20px; position: absolute; top:0;right:0;}
    .time_right img ,.time_right .img {
        width:14px;
        vertical-align: middle;
        margin-top: 3px !important;
        margin-bottom: 4px; background-size: 14px;
        -webkit-touch-callout:none;
        -webkit-user-select:none;
        -moz-user-select:none;
        -ms-user-select:none;
        user-select:none;
    }
    .time_right .frined_zan ,.time_right .frined_com{
        vertical-align: middle;
    }

    .friendImgList {
        overflow: hidden;
        margin-bottom: 9px;
        margin-top: 2px;
    }

    .friendImgList.two li{
        width: 7.058823529411765rem;
        height:5.647058823529412rem;
    }

    .friendImgList.one li {
        width: 100%;
        height: auto;
    }

    .friendImgList img.hw{ width: 10.05882352941176rem !important; height: auto !important}
    .friendImgList img.hh{ height: 10.58823529411765rem !important; width: auto !important}


    .friendImgList li {
        float: left;
        margin-right: 0.2941176470588235rem;
        width: 4.6rem;
        height: 4.6rem;
        overflow: hidden;
        position: relative;
    } 
    .friendImgList img {
        display: block;
    }
    .commont_box {
        padding: 5px 10px 5px 10px;
        background: #f9f9f9;
        border-radius: 2.5px;
        position: relative;
        margin-top: 15px !important;
        clear: both;
        display: -webkit-box;
        white-space: normal!important;
        text-overflow: ellipsis;
        word-wrap: break-word;
        -webkit-box-orient: vertical;
    }
    .commont_box :nth-of-type(2){
        margin-top: 0;
    }

.friends_moods  .arrow {
        width: 12px;
        height: 12px;
        background: #f9f9f9;
        position: absolute;
        left: 20px;
        top: -6px;
        transform: rotate(45deg);
    }

    .friend_commont {
        margin-top: 5px;
        font-size: 13px;
        color: #333;
        line-height: 19px;

    }
    .friend_commont:last-child{
        margin-bottom: 2px;
    }

    .friend_commont a{
        -webkit-tap-highlight-color: rgba(0,0,0,.2);
        width:100%;
        color: #333;
        display: block;
    }
  .friends_moods  .name {
        color: #5e61a2;
        font-size: 13px;
        font-weight: bold;

    }
.friends_moods .commont {
        font-size: 13px;
        color: #333333;
    }
.friends_moods .addCj{
        height: 16px;
        vertical-align: middle;
        margin-top: -3px;
        margin-left: 5px;
        display: inline-block;
    }
    .mood_state i{
        font-size: 12px;
        color: #999;
        font-style: normal;
    }

.stateBottom .time_right .fly_heart { height:15px;  width:16px;  position: absolute;top:0px; background-size: 15px; }


.stateBottom .time_right   .fly_heart.start1{
    animation: fly_height1 1.5s forwards linear;
}
.stateBottom  .time_right    .fly_heart.start2{
    animation: fly_height2 1.8s forwards linear;
}
.stateBottom   .time_right   .fly_heart.start3{
    animation: fly_height3 1.3s forwards linear;
}
.stateBottom  .time_right  .fly_heart.start4{
    animation: fly_height4 3s forwards linear;
}
.stateBottom  .time_right  .fly_heart.start0{
    animation: fly_height5 2.5s  forwards linear;
}


@-webkit-keyframes fly_height15 {
    0% {
        opacity: 1;
    }
    100% {
        opacity: 0;
        transform: translate3d(-3rem, -6rem, 0) scale(1);
        -webkit-transform: translate3d(-3rem, -6rem, 0) scale(1);
    }
}
@keyframes fly_height1{
    0%{
        opacity: 1;
        transform: translate3d(0, 0, 0)   scale(1);
        -webkit-transform: translate3d(0,0, 0)   scale(1);
    }
    100%{
        opacity: 0;
        transform: translate3d(-9rem, -1rem, 0)   scale(1);
        -webkit-transform: translate3d(-9rem, -1rem, 0)   scale(1);
    }
}
@keyframes fly_height2{
    0%{
        opacity: 1;
    }
    100%{
        opacity: 0;
        transform: translate3d(-1rem, -9rem, 0)   scale(1);
        -webkit-transform: translate3d(-1rem, -9rem, 0)   scale(1);
    }
}
@keyframes fly_height3{
    0%{
        opacity: 1;
    }
    100%{
        opacity: 0;
        transform: translate3d(-4rem, -3rem, 0)   scale(1);
        -webkit-transform:  translate3d(-4rem, -3rem, 0)   scale(1);
    }
}
@keyframes fly_height4{
    0%{
        opacity: 1;
    }
    100%{
        opacity: 0;
        transform: translate3d(-6rem, -2rem, 0)   scale(1);
        -webkit-transform: translate3d(-6rem, -2rem, 0)   scale(1);
    }
}
@keyframes fly_height5 {
    0% {
        opacity: 1;
    }
    100% {
        opacity: 0;
        transform: translate3d(-3rem, -6rem, 0) scale(1);
        -webkit-transform: translate3d(-3rem, -6rem, 0) scale(1);
    }
}

</style>