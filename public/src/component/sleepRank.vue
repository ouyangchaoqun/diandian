<template id="sleepRank">
    <div class="clock_box sleep_rank_box" :class="{clock_boxNight:isNight}" style="position: relative;">
        <div v-title>{{sleepRank_title}}</div>
        <!--新增打卡失败场景-->
        <div class="record_loseBox weui-mask weui-animate-fade-in" v-show="isLose" @click="hideLoseBox()">
            <div class="diglog_lose" :class="{'morning_lose':!isNight,'night_lose':isNight}">
                <div class="title_lose">错过打卡</div>
                <div class="record_time">
                    打卡时间：<template v-if="!isNight">{{MORNING_FROM_TIME}}-{{MORNING_END_TIME}}</template>
                    <template v-if="isNight">{{NIGHT_FROM_TIME}}-{{NIGHT_END_TIME}}</template> </div>
                <div class="lose_bottom" :class="{'morning_bottom':!isNight,'night_bottom':isNight}" @click="set()">
                    设置提醒
                </div>
            </div>
            <img class="close_btn" src="../images/close_loseBox.png" alt="">
        </div>
        <div class="myshare" v-show="isShowShareTip" @click="share()">
        </div>
        <v-scroll :on-refresh="onRefresh" :isNotRefresh="true" :on-infinite="onInfinite" :isPageEnd="isPageEnd"
                  :isShowMoreText="isShowMoreText">
            <div class="day_or_night">
                <div v-if="isNight" class="btn day_rank" @click="goDayRank()">
                    <img src="../images/morning_rank_btn.png" alt="">
                </div>
                <div v-if="!isNight" class="btn night_rank" @click="goNightRank()">
                    <img src="../images/night_rank_btn.png" alt="">
                </div>

            </div>
            <div class="addIcon_sleepRank">
                <img src="../images/addIcon_sleepRank.png" alt="">
                <span>{{user.coinAmount}}</span>
            </div>
            <div class="ranks_boxl">
                <v-showLoad v-if="showLoad"></v-showLoad>
                <div class="clock_top" :class="{clock_topNight:isNight}">
                    <div class="hot" v-if="!isClickFace&&!isGuest"></div>
                    <div class="share2" @click="share" style="display: none;">分享</div>
                    <div class="clock_head">

                        <img @click="goRecordCount()" :src="user.faceUrl" alt="">
                    </div>
                    <div class="clock_count" v-show="!isNight">
                        <div class="clock_lists">
                            <div>
                                <p>起床时间</p>
                                <div>{{myFirst.time}}</div>
                            </div>
                            <div>
                                <p>连续早起</p>
                                <div>{{continueDay}}<span class="clock_listsDay">天</span></div>
                            </div>
                            <div>
                                <p>累计早起</p>
                                <div>{{allDay}}<span class="clock_listsDay">天</span></div>
                            </div>
                        </div>
                        <div class="clock_ratio">{{date}}共有{{allCount}}人陪我早起</div>
                    </div>
                    <div class="clock_count clock_countNight" v-show="isNight">
                        <div class="clock_lists clock_listsNight">
                            <div>
                                <p>睡觉时间</p>
                                <div>{{myFirst.time}}</div>
                            </div>
                            <div>
                                <p>连续早睡</p>
                                <div>{{continueDay}}<span class="clock_listsDay">天</span></div>
                            </div>
                            <div>
                                <p>累计早睡</p>
                                <div>{{allDay}}<span class="clock_listsDay">天</span></div>
                            </div>
                        </div>
                        <div class="clock_ratio">{{date}}共有{{allCount}}人陪我早睡</div>
                    </div>
                </div>


                <div class="clock_tab" v-show="!isGuest" :class="{clock_tabNight:isNight}" style="position: relative;">
                    <div class="tab_title clock_tabActive ">好友排行</div>
                    <div class="tab_title tab_title_middle">总排行</div>
                    <div class="tab_title tab_title_right" @click="tip()">设置提醒</div>
                    <div class="tabMove"></div>
                </div>

                <a @click="fabulousList" class="weui-tabbar__item tab" style="padding: 0"
                   v-show="user&&currUser&&user.id==currUser.id&&notice.count">
                    <div class="notice_box notice_box_p">
                        <div class="notice">
                            <img class="notice_friend" v-if="notice.count&&notice.user!=null"
                                 :src="wxFaceUrl(notice.user.faceUrl)"/>
                            <div>{{notice.count}} 条新消息</div>
                            <img class="goNotice" src="../images/iconjt.png" alt="">
                        </div>
                    </div>
                </a>

                <div class="rank_Bgbox" :class="{box_padding_bottom:showBottomBtnType}">
                    <div class="rank_box gomiddle">
                        <div class="clock_rank" :class="'clock_rank'+boxid" v-for="boxid in [1,2]">
                            <div class="rank_list me_rank"
                                 :class="{rank_listNight:isNight,has_content:user&&currUser&&user.id==currUser.id&&myFirst.rank!=''||(!(user&&currUser&&user.id==currUser.id)&&myFirst.content!=null&&myFirst.content!='')}">

                                <span class="rank_cup" :class="{rank_cupNight:isNight}">
                                    <template v-if="boxid!=3">{{myFirst.rank}}</template>
                                    <template v-if="boxid==3&&myFirst.content!=null&&myFirst.content!=''">{{myFirst.rank}}</template>
                                </span>
                                <div class="rank_main">
                                    <img class="rank_headImg" :src="wxFaceUrl(user.faceUrl)" alt="">
                                    <div class="rank_name">
                                        <div class="rank_NickName" :class="{line32:myFirst.rank==''}">{{cutNickName(user.nickName)}}</div>
                                        <div @click="addComment(myFirst.id)" class="addLy"
                                             v-if="user&&currUser&&user.id==currUser.id&&(myFirst.content==null||myFirst.content=='')&&myFirst.rank!=''">
                                            互道{{sleepNameShort}}安或留言
                                        </div>
                                        <div class="addMessage" v-if="myFirst.content!=null&&myFirst.content!=''">
                                            {{myFirst.content}}
                                        </div>
                                        <div></div>
                                    </div>
                                    <div class="clock_time" v-if="myFirst.rank!=''"
                                         :class="{no_record:myFirst.careCount==null}">{{myFirst.time}}
                                    </div>
                                    <div class="clock_time" v-if="myFirst.rank==''"
                                         :class="{no_record:myFirst.careCount==null}">{{myFirst.notRecordTxt}}
                                    </div>
                                </div>
                                <div class="rank_right" :class="{rank_rightNight:isNight}">
                                    <div class="care_icon" :class="{care_active:user&&currUser&&user.id==currUser.id}"
                                         v-if="myFirst.careCount!=null" @click.stop="fabulousList()">
                                        <span>{{myFirst.careCount||0}}</span>
                                        <img :src="myFirst.careImg" alt="" :class="{heartUp:myFirst.hit}">
                                    </div>
                                </div>
                            </div>
                            <ul>
                                <li class="rank_list "
                                    :class="{rank_listNight:isNight,has_content:rankList.content!=null&&rankList.content!=''}"
                                    v-for="(rankList,index) in rankLists"><!--v-show="rankList.userId!=user.id" -->

                                    <span class="rank_cup" :class="{rank_cupNight:isNight}">{{index+1}}</span>
                                    <div class="rank_main rank_border" :class="{rank_borderNight:isNight}">
                                        <img class="rank_headImg" :src="wxFaceUrl(rankList.faceUrl)" alt="">
                                        <div class="rank_name">
                                            <div class="rank_NickName">{{cutNickName(rankList.nickName)}}<span class="continue_day addMessage" style="margin-left: 0.35rem">+<span>{{rankList.totalDays}}</span>天</span></div>
                                            <!--<div class="continue_day addMessage">累计打卡<span>{{rankList.totalDays}}</span>天</div>-->
                                            <div class="addMessage">{{rankList.content}}</div>
                                        </div>
                                        <div class="clock_time">{{rankList.time}}</div>
                                    </div>
                                    <div class="rank_right" :class="{rank_rightNight:isNight}">
                                        <div @click.stop="addCare(rankList,index)" class="care_icon">
                                            <span>{{rankList.careCount||0}}</span>
                                            <img :src="rankList.careImg" alt="" :class="{heartUp:rankList.hit}">
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <a class="share" @click="addCareAll()" v-if="canCareAll">关心所有人</a>
                            <a class="share" @click="createinvite()" v-if="boxid==1&&typeId==2">点击生成好友邀请卡</a>
                        </div>


                    </div>
                </div>
            </div>


        </v-scroll>
        <div id="output" class="output" style="display: none"></div>
        <div id="follow" style="display: none">
            <div class="dialog_follow">
                <div class="img"><img :src="user.faceUrl"></div>
                <div class="ewm">

                </div>
                <div class="text">
                    长按关注"{{user.nickName}}"<br>
                    开启{{sleepName}}健康生活
                </div>
            </div>
        </div>
        <div class="join_rank" @click="followOrRecord" v-show="showBottomBtnType">{{showBottomBtnText}}</div>
    </div>
</template>
<style>
    /*新增积分*/
    .addIcon_sleepRank{
        position: absolute;
        top:3rem;
        left:1rem;
    }
    .addIcon_sleepRank img{
        width:0.88235rem;
        display: inline-block;
    }
    .addIcon_sleepRank span{
        color:#ffaa00;
        font-size: 0.76471rem;
        vertical-align: text-top;
        display: inline-block;
    }
    /*新增打卡失败*/
    .sleep_rank_box .record_loseBox{z-index:10001 !important;}
    .sleep_rank_box .record_loseBox .diglog_lose{width:17.647rem;height:17.647rem;position: absolute;top:20%;left:50%;margin-left: -8.8235rem;text-align: center;padding:0}
    .sleep_rank_box .morning_lose{background: url("../images/morning_lose.png") no-repeat;background-size: 100% 100%;color:rgba(51,51,51,1);}
    .sleep_rank_box .night_lose{background: url("../images/night_lose.png") no-repeat;background-size: 100% 100%;color:rgba(255,255,255,1)}
    .sleep_rank_box .title_lose{font-size: 1.176471rem;line-height: 1;width:100%;position: absolute;top:46%;}
    .sleep_rank_box .record_time{font-size: 0.8235rem;line-height: 1;position: absolute;width:100%;top:58%;}
    .sleep_rank_box .diglog_lose p{font-size: 0.76471rem;text-align: left;line-height: 1.35rem;padding:0 0.88235rem}
    .sleep_rank_box .lose_bottom{width:66%;height:2.35rem;font-size: 0.88235rem;color:rgba(252,252,247,1);line-height: 2.4rem;position: absolute;bottom:8%;left:50%;margin-left: -33%;border-radius: 1.176471rem;}
    .sleep_rank_box .morning_bottom{background: rgba(251,184,40,1);}
    .sleep_rank_box .night_bottom{background: rgba(68,60,97,1);}
    .sleep_rank_box .morning_bottom:active{background:#d69c21;}
    .sleep_rank_box .night_bottom:active{background: #37314f;}
    .sleep_rank_box .close_btn{display: block;width:1.471rem;position: absolute; bottom: 25%; left: 50%;margin-left: -0.7355rem;}
    .day_or_night{
        position: absolute;
        display: flex;
        right:0.88235rem;
        z-index: 1000;
        top:2.35rem;
        transform: rotateY(0deg);

    }
    .day_or_night_rotate{
        transform: rotateY(180deg);
        transition: all 1s;
    }
    .day_or_night img {
        display: block;
        width:2.1176471rem;
    }


    .line32{ line-height: 2.35rem !important;}
    .share:active{
        background: #ECECEC;
    }
    .care_active:active {
        background: #f1f1f1
    }

    .clock_time.no_record {
        right: -10px
    }

    .join_rank {
        position: fixed;
        bottom: 0;
        left: 0;
        height: 2.588235294117647rem;
        width: 100%;
        display: block;
        line-height: 2.588235294117647rem;
        background: #0BB20C;
        color: #fff;
        text-align: center;
        font-size: 0.88rem;
    }

    .join_rank:active {
        background: #0b9c0c
    }

    .yo-scroll {
        background: none !important
    }

    .isMatch {
        background: #eee !important;
    }

    .clock_rank {
        width: 50%;
        float: left;
    }

    .clock_box {
        height: 100%;
        background: #e2f4fe;
    }

    .clock_boxNight {
        background: #5f5975;
    }

    .clock_top {
        padding: 2.471rem 0.88235rem 0 0.88235rem;
        position: relative;
        color: #666666;

    }

    .clock_top .share2 {
        position: absolute;
        right: 0.9rem;
        top: 2.48rem;
        width: 3.6rem;
        height: 1.6rem;
        line-height: 1.6rem;
        background: #0BB20C;
        color: #fff;
        border-bottom-left-radius: 0.8rem;
        text-align: center;
        z-index: 1000;
        font-size: 0.8rem
    }

    .clock_top .share2:active {
        background: #0b8d0c;
    }

    .clock_topNight {
        color: #f4f4f7;
    }

    .clock_count {
        background: url("../images/zaoqi.jpg") no-repeat;
        background-size: 100% 100%;
        height: 11.03rem;
        position: relative;
        box-shadow: 0px 5px 10px 0 rgba(51, 51, 51, 0.6);
    }

    .clock_countNight {
        background: url("../images/zaoshui.jpg") no-repeat;
        background-size: 100% 100%;
        box-shadow: 0px 5px 10px 0px rgba(51, 51, 51, 1);
    }

    .clock_head {
        width: 3.53rem;
        height: 3.53rem;
        border-radius: 50%;
        overflow: hidden;
        position: absolute;
        top: 0.88235rem;
        left: 50%;
        margin-left: -30px;
        box-shadow: rgba(24, 24, 24, 0.38) 0px 2.5px 5px;
        z-index: 1;
    }
    .clock_head:active{ opacity: 0.8}

    .clock_top .hot {
        height: 10px;
        width: 10px;
        background: red;
        border-radius: 50%;
        position: absolute;
        left: 50%;
        top: 1.2rem;
        margin-left: 1.2rem;
        z-index: 10000;
    }

    .clock_head img {
        width: 3.53rem;
        height: 3.53rem;
    }

    .clock_lists {
        display: -webkit-box;
        display: -webkit-flex;
        display: flex;
        position: absolute;
        top: 3.8235rem;
        width: 100%;
        font-size: 1.235rem;
        line-height: 1.294rem;
    }

    .clock_lists > div {
        -webkit-box-flex: 1;
        -webkit-flex: 1;
        flex: 1;
        text-align: center;
    }

    .clock_lists p {
        font-size: 0.8235rem;
        color: #807e7e;
        line-height: 0.88235rem;
        margin-bottom: 1rem;
    }

    .clock_lists > div, .clock_lists p, .clock_ratio {
        color: #fff
    }

    .clock_listsDay {
        font-size: 0.88235rem;
    }

    .clock_listsNight p {
        color: #e9e9ec;
    }

    .clock_ratio {
        width: 100%;
        text-align: center;
        font-size: 0.7059rem;
        position: absolute;
        bottom: 1.7647rem;
    }

    .clock_tab {
        width: 16rem;
        height: 2rem;
        margin: 0 auto;
        margin-top: 1.1765rem;
        border-radius: 1rem;
        text-align: center;
        font-size: 0.8235rem;
        line-height: 2rem;
        border: 1px solid #fff;
        color: #333;
    }

    .clock_tab .tab_title {
        z-index: 100;
        position: absolute;
        width:33.333%;
        height: 2rem;
    }

    .clock_tab .tab_title_right {
        left: 66.6666%;
    }

    .clock_tab .tab_title_middle {
        left: 33.333%;
    }

    .clock_tabNight > div {
        color: #fff;
    }

    .tabMove {
        height: 100%;
        width: 33.333%;
        background: #fff;
        border-radius: 1rem;
        position: absolute;
        left: 33.333%;
        top: -1px;
        z-index: 1;
        border: 1px solid #fff;
        transition: transform .5s;
        -webkit-transition: transform .5s;
    }

    .tab_goleft {

        transform: translate3d(-100%, 0, 0);
        -webkit-transform: translate3d(-100%, 0, 0);
    }

    .tab_goMiddle {
        transform: translate3d(0, 0, 0);
        -webkit-transform: translate3d(0, 0, 0);
    }

    .tab_goRight {
        transform: translate3d(100%, 0, 0);
        -webkit-transform: translate3d(100%, 0, 0);
    }

    .clock_tabNight .clock_tabActive {
        color: #333;
    }

    .clock_box .rank_list:last-of-type {
        border-bottom: 0;
    }

    .clock_box .rank_list {
        background: #fff;
        display: flex;
        border-bottom: 0.06rem solid #eee;
        padding: 0.565rem 0;
        width: 100%;
        position: relative;
        line-height: 2.35rem;
    }

    .has_content.rank_list {
        line-height: 1.2rem;
    }

    .rank_listNight {
        /*background: rgba(255,255,255,0.2);*/
    }

    .rank_cup {
        width: 1rem;
        font-family: PingFangSC-Regular;
        font-size: 0.94118rem;
        color: #666;
        text-align: center;
        height: 0.71rem;
        line-height: 0.71rem;
        margin: 0.88235rem 0.88235rem 0 0.88235rem;
    }

    .rank_cupNight {
        color: #333;
    }

    .me_rank {
        margin-bottom: 0.88235rem;
    }

    .rank_main {
        display: flex;

        width: 76.4%;
        position: relative;
    }

    .rank_NickName {
        font-size: 0.8235rem;
        color: #333;

    }

    .addLy {
        font-size: 0.70588rem;
        color: #066EA4;
        display: inline;
    }

    .continue_day span{   color: #ffaa00;   }

    .addLy:active {
        background: #eee;

    }

    .addMessage {
        font-size: 0.70588rem;
        color: #7C7B7B;
        width: 13.5rem
    }

    .rank_border {

    }

    .rank_borderNight {

    }

    .rank_main img.rank_headImg {
        height: 40px !important;
        width: 40px !important;
        display: block;
        border-radius: 0.294rem;
        margin-right: 0.88235rem;
    }

    .clock_box .rank_right {
        position: absolute;
        right: 0;
        top: 0;
    }

    .clock_time {
        font-size: 0.88235rem;
        color: #666;

        position: absolute;
        right: 18px;
        top: 0;
     }

    .care_icon {
        padding: 0.8rem 0.88235rem 0.85rem  1.8rem
    }

    .clock_box .rank_right img {
        display: block;
        width: 0.9412rem;
        height: 0.88235rem;
    }

    .clock_box .rank_right span {
        line-height: 0.7647rem;
        font-size: 0.7059rem;
        color: #999;
        display: block;
        text-align: center;
        margin-bottom: 0.2941rem;
    }

    .rank_rightNight span {
        color: #ccc;
    }

    .goleft {
        -webkit-transition: transform .5s;
        transition: transform .5s;
        /*margin-left: -100%;*/
        -webkit-transform: translate3d(0%, 0, 0);
        transform: translate3d(0%, 0, 0)
    }

    .gomiddle {
        -webkit-transition: transform .5s;
        transition: transform .5s;
        /*margin-left: -100%;*/
        -webkit-transform: translate3d(-50%, 0, 0);
        transform: translate3d(-50%, 0, 0)
    }

    .goright {
        -webkit-transition: transform .5s;
        transition: transform .5s;
        /* margin-left: 0%;*/
        -webkit-transform: translate3d(-66.666%, 0, 0);
        transform: translate3d(-66.666%, 0, 0)
    }

    .rank_Bgbox {
        width: 100%;
        overflow: hidden;
        margin-bottom: 0.88235rem;
    }

    .rank_Bgbox.box_padding_bottom {
        margin-bottom: 2.88235rem;
    }

    .rank_box {
        width: 200%;
        margin-top: 0.88235rem
    }

    .rank1Color {
        color: #ffc800;
    }

    .rank2Color {
        color: #c3c1c1;
    }

    .rank3Color {
        color: #c27502;
    }

    .ranks_boxl .notice_box {
        background: none;
        border-bottom: none;
    }

   .sleep_rank_box .notice_box_p {
        padding: 16px 0;
        padding-bottom: 0
    }

    .notice {
        height: 40px;
        width: 180px;
        background: #393939;
        border-radius: 5px;
        margin: 0 auto;

    }

    .notice:active {
        background: #1f1f1f
    }

    .notice_friend {
        height: 32px;
        width: 32px;
        float: left;
        margin-left: 5px;
        margin-top: 5px;
        display: block;
    }

    .notice div {
        float: left;
        height: 40px;
        line-height: 40px;
        color: #fff;
        margin-left: 32px;
        font-size: 13px;
    }

    .notice .goNotice {
        width: 16px;
        height: 16px;
        display: block;
        float: right;
        margin-right: 14px;
        margin-top: 12px;
    }

    .notice img {
        height: 30px;
        width: 30px;
    }

    .dialog_follow {
        width: 66%;
        background: #fff;
        border-radius: 10px;
        overflow: hidden;
        height: 20.47058823529412rem;
        position: absolute;
        top: 50%;
        margin-top: -10.23529411764706rem;
        left: 17%;
        z-index: 10001;
    }

    .dialog_follow img {
        width: 100%
    }

    .dialog_follow .img {
        height: 11rem;
        overflow: hidden
    }

    .dialog_follow .text {
        text-align: center;
        font-size: 0.8235294117647059rem;
        line-height: 1.5
    }

    .ewm {
        width: 4.329411764705882rem;
        height: 4.329411764705882rem;
        border: 1px solid #ffcdcd;
        margin: 0.8rem auto;
        margin-bottom: 0.65rem;
        padding: 2px;
    }

    .ewm .output {
        width: 100%;
        height: 100%
    }

    .myshare {
        background: url(../images/share.png?v=2) no-repeat center top rgba(0, 0, 0, 0.9);
        background-position: 2.5rem 3.5rem;
        background-size: 80%;
        height: 100%;
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 10001;
    }


</style>
<script type="text/javascript">
    import showLoad from './showLoad.vue';
    import scroll from './lib/scroll.vue';
    import Bus from './bus.js';

    var sleepRank = {
        template: '#sleepRank'
    }
    export default {
        components: {
            'v-showLoad': showLoad,
            'v-scroll': scroll
        },
        data() {
            return {
                canCareAll:false,
                careAllIndex:0,
                isClickFace: false,
                sleepNameShort: "早",
                sleepName: "早起",
                notice: {count: 0},
                FIRST_PAGE_NUM: 100,
                STEP_PAGE_NUM: 20,
                myFirst: {rank: "", time: "--:--", notRecordTxt: "还未打卡"},
                rankLists: [],
                isNight: false,
                continueDay: 0,
                allDay: 0,
                earlyPre: 0,
                allCount: 0,
                clock_careCount: 0,
                sleepRank_title: '',
                swipersettime: null,
                showLoad: false,
                date: "",
                counter: 1,
                isPageEnd: false,
                num: 100,
                typeId: '',
                time: '',
                clockDay: '',
                clockMonth: '',
                clockYear: '',
                rankUrl: "",
                rankType: 1,
                isLoading: false,
                careUserId: 0, //通过连接点击过来 跳到指定的用户
                isShowMoreText: true,
                sleepId: '',
                userid: 0,
                isGuest: false,
                user: {},
                currUser: false,
                isShowShareTip: false,
                showBottomBtnType: 0,
                showBottomBtnText: "",
                isLogin: false,
                isLose:false,
                MORNING_FROM_TIME: '5:00',
                MORNING_END_TIME: '10:00',
                NIGHT_FROM_TIME: '20:00',
                NIGHT_END_TIME: '23:59',
            }
        },

        beforeCreate: function () {
            console.log("beforeCreate")

        },
        mounted: function () {
            let _this=this;
            this.typeId = this.$route.query.type;
            let checkin = this.$route.query.checkin;
            if(checkin==="true"){
                setTimeout(function () {
                    xqzs.coin.addAminate(_this.typeId);
                },200)
            }
            this.initData();
            this.$nextTick(function () {
                if((cookie.get('record_lose')=='true'&&cookie.get('loseBox_frist')=='true')||(cookie.get('record_lose_night')=='true'&&cookie.get('loseBox_frist_night')=='true')){
                    this.initSleepConfig();
                    let cookieYear = new Date().getFullYear().toString();
                    let cookieMonth = new Date().getMonth().toString();
                    let cookieDay = new Date().getDate().toString();
                    var endTimeStamp = Math.round(new Date(cookieYear,cookieMonth,cookieDay,23,59,0).getTime()/1000);
                    let nowTimeStamp=Math.round(new Date().getTime()/1000);
                    let CookieExpire = (endTimeStamp-nowTimeStamp)/60/60/24;
                    this.isLose = true;
                    cookie.set('record_lose','false',CookieExpire)
                    cookie.set('record_lose_night','false',CookieExpire)
                }
            })


        },
        watch:{
            // shopNo改变时重新加载
            typeId:function(typeId){
                this.initData();
            }
        },
        methods: {
            set:function () {
                this.$router.push('/me/subscribe')
            },
            hideLoseBox:function () {
                this.isLose = false
            },
            initSleepConfig:function () {
                let _this=this;
                //是否打卡
                _this.$http({
                    method: 'GET',
                    type: "json",
                    url: web.API_PATH + "record/sleep/get/is/record/_userId_",
                }).then(function (data) {
                    if (data.body.status == 1) {
                        _this.isGetUp = data.body.data.isGetUp;
                        _this.isGoBed = data.body.data.isGoBed;
                        _this.goBedId = data.body.data.goBedId;
                        _this.getUpId = data.body.data.getUpId;

                        _this.MORNING_FROM_TIME = data.body.data.getUpConfig.starttime;
                        _this.MORNING_END_TIME = data.body.data.getUpConfig.endtime;
                        _this.NIGHT_FROM_TIME = data.body.data.goBedConfig.starttime;
                        _this.NIGHT_END_TIME = data.body.data.goBedConfig.endtime;
                    }
                }, function (error) {

                });
            },
            tip:function () {
                this.$router.push('/me/subscribe')
            },
              initData:function () {
                let _this = this;
                $('.rank_box').removeClass('goleft').removeClass('goright').removeClass("gomiddle")
                $('.tabMove').removeClass('tab_goleft').removeClass('tab_goRight').removeClass("tab_goMiddle");
                $('.clock_tab .clock_tabActive').removeClass('clock_tabActive');
                $('.tabMove').addClass('tab_goleft');
                $('.rank_box').addClass('goleft')

                $(".clock_tab .tab_title:first-child").addClass('clock_tabActive');


                _this.canCareAll=false;
                _this.careAllIndex=0;
                _this.isClickFace= false;
                _this.sleepNameShort= "早";
                _this.sleepName= "早起";
                _this.notice= {count: 0};
                _this.FIRST_PAGE_NUM= 100;
                _this.STEP_PAGE_NUM= 20;
                _this.myFirst={rank: "", time: "--:--", notRecordTxt: "还未打卡"};
                _this.rankLists= [];
                _this.isNight= false;
                _this.continueDay= 0;
                _this.allDay= 0;
                _this.earlyPre= 0;
                _this.allCount= 0;
                _this.clock_careCount= 0;
                _this.sleepRank_title= '';
                _this.swipersettime= null;
                _this.showLoad= false;
                _this.date= "";
                _this.counter= 1;
                _this.isPageEnd= false;
                _this.num= 100;
                _this.time= '';
                _this.clockDay= '';
                _this.clockMonth= '';
                _this.clockYear= '';
                _this.rankUrl= "";
                _this.rankType= 1;
                _this.isLoading= false;
                _this.careUserId= 0; //通过连接点击过来 跳到指定的用户
                _this.isShowMoreText= true;
                _this.sleepId= '';
                _this.userid= 0;
                _this.isGuest= false;
                _this.user= {};
                _this.currUser= false;
                _this.isShowShareTip= false;
                _this.showBottomBtnType= 0;
                _this.showBottomBtnText= "";
                _this.isLogin=false;


                this.showLoad = true;
                if (web.guest) _this.isGuest = true;

                if (xqzs.localdb.get("rank_click_head_face") == 'true') {
                    this.isClickFace = true;
                }


                _this.careUserId = _this.$route.query.careUserId;
                if (_this.$route.query.userid) {
                    _this.userid = _this.$route.query.userid;
                }
                let userIdStr = "_userId_";
                if (_this.userid) {
                    userIdStr = _this.userid;
                }
                  let yesYear =  _this.$route.query.year;
                  let yesMonth =  _this.$route.query.month;
                  let yesDay =  _this.$route.query.date;

                _this.time = new Date();
                _this.clockDay = yesDay||_this.time.getDate();
                _this.clockMonth = yesMonth||_this.time.getMonth() + 1;
                _this.clockYear = yesYear||_this.time.getFullYear();
                let guestUrl = "";
                if (web.guest) {
                    guestUrl = "?guest=true"
                }


                if (_this.typeId == 3) {
                    _this.sleepName = "早睡"
                    _this.sleepNameShort = "晚"
                }


                //总排行
                var typeId = _this.typeId;

                if (typeId == 3) {
                    this.isNight = true;
                    this.sleepRank_title = "早睡排行";
                } else {
                    this.sleepRank_title = "早起排行";
                }


                //修改排行榜类型
                $('.clock_tab .tab_title').on('click', function () {

                    let domThis = this;

                    $('.rank_box').removeClass('goleft').removeClass('goright').removeClass("gomiddle")
                    $('.tabMove').removeClass('tab_goleft').removeClass('tab_goRight').removeClass("tab_goMiddle");


                    $('.clock_tab .clock_tabActive').removeClass('clock_tabActive');
                    setTimeout(function () {
                        $(domThis).addClass('clock_tabActive')
                    }, 150)



                    switch ($(this).index()) {
                        case 0:  //左边
                            $('.tabMove').addClass('tab_goleft');
                            $('.rank_box').addClass('goleft')
                            _this.changeRankType(1);
                            break;
                        case 1: //中间
                            $('.tabMove').addClass('tab_goMiddle');
                            $('.rank_box').addClass('gomiddle')
                            _this.changeRankType(2);
                            break;
                        case 2:    //右边
                            $('.tabMove').addClass('tab_goRight');
                            $('.rank_box').addClass('goright')
                            _this.changeRankType(3);
                            break
                    }


                })


                //获取查询用户信息

                this.$http({
                    method: 'GET',
                    type: "json",
                    url: web.API_PATH + 'user/find/by/user/Id/' + userIdStr + '' + guestUrl,
                }).then(function (data) {//es5写法
                    if (data.data.data !== null) {
                        _this.user = data.data.data;
                        //二维码
                        _this.$http.get(web.API_PATH + 'user/get/qr/code/' + _this.user.id + guestUrl).then(function (data) {//es5写法
                            $("#output").empty();
//                        console.log(xqzs.string.toUtf8(data.body.data));
                            if(data.body.data&&data.body.data!='')
                                $('#output').qrcode({
                                    width: 100, height: 100,
                                    text: xqzs.string.toUtf8(data.body.data), background: "#ffffff",
                                    foreground: "red"
                                });

                        }, function (error) {

                        });

                        _this.$http.get(web.API_PATH + 'sleep/daily/info/' + _this.user.id + '/' + _this.typeId + guestUrl).then(data => {
                            if (data.data.status === 1) {
                                _this.allDay = data.data.data.allDays;
                                _this.continueDay = data.data.data.continueDays;
                                _this.allCount = data.data.data.userNum;


                                let date = new Date(data.data.data.time * 1000);
                                if (data.data.data.time && data.data.data.time != null) {
                                    _this.date = date.getFullYear() + "年" + (  date.getMonth() + 1) + "月" + date.getDate() + "日，"
                                }

                                xqzs.wx.setConfig(this, function () {
                                    let sleepName = "早起";
                                    if (_this.typeId == 3) {
                                        sleepName = "早睡"
                                    }

                                    let title = "坚持" + sleepName + "，遇见更好自己";
                                    let desc = "我已经连续" + _this.continueDay + "天" + sleepName + "，" + _this.date + sleepName + "排行全国第 " + data.data.data.rank + " 名！";
                                    if (data.data.data.time == null) {
                                        desc = "我要从明天开始，加入21天" + sleepName + "计划，挑战自己！";
                                    }



                                    var config = {
                                        imgUrl: _this.user.faceUrl,
                                        title: "坚持早睡早起，遇见更好的自己",
                                        desc: '参与早睡早起打卡计划，培养自律，让生活更好一点！',
                                        link: web.BASE_PATH + "guest/#/sleepRank?type=" + _this.typeId + "&userid=" + _this.user.id,
                                    };
                                    weshare.init(wx, config, function () {
                                    }, function () {
                                    })
                                });
                            }
                        });


                    }
                    _this.getCurrUser();
                }, function (error) {
                    _this.getCurrUser();
                });
            },

            autoShare:function () {
                let _this=this;
                let type=_this.typeId;
                //打卡成功 判断
                if(this.myFirst.rank!=''&&type==2){
                    //获取cookie 数据
                    let date=new Date();
                    let year= date.getFullYear();

                    let cookieKey="auto_share_week_one_not_night_"+year+"_"+now_week+"_"+type
                    let autoShareCookie= cookie.get(cookieKey);
                    if(autoShareCookie&&autoShareCookie==1){
                        //本周已经分享过了
                    }else{
                        cookie.set(cookieKey,1,15);
                        _this.share();
                    }
                }






            },
            goDayRank:function(){

                if (this.typeId == 3) {
                    this.typeId=2;
                }
            },
            goNightRank:function () {
                if (this.typeId == 2) {
                    this.typeId=3;
                }
            },
            createinvite: function () {
                let _this = this;
                _this.showLoad = true;

                this.$http({
                    method: 'GET',
                    type: "json",
                    url: web.API_PATH + 'wei/xin/create/check/in/invite/card/_userId_/' + _this.typeId
                }).then(function (bt) {
                    if (bt.body.status == 1) {
                        xqzs.weui.dialog({
                            title: '邀请卡已经发送',
                            msg: '前往公众号查看，邀请好友一起参加早起计划',
                            submitText: '查看',
                            submitFun: function () {
                                try {
                                    WeixinJSBridge.call('closeWindow');
                                } catch (e) {
                                }
                            }
                        })

                    }
                    _this.showLoad = false;
                })
            },

            getCurrUser: function () {
                let _this = this;
                //获取当前用户
                this.$http({
                    method: 'GET',
                    type: "json",
                    url: web.API_PATH + 'user/find/by/user/Id/_userId_',
                }).then(function (data) {//es5写法
                    if (data.data.data !== null && data.data.data != undefined) {
                        _this.currUser = data.data.data;
                        _this.isLogin = true;
                    }

                    if(_this.currUser.id==25||_this.currUser.id==27||_this.currUser.id==1656||_this.currUser.id==818||_this.currUser.id==1658||_this.currUser.id==424||_this.currUser.id==1007||_this.currUser.id==3696||_this.currUser.id==30||_this.currUser.id==32){
                        _this.canCareAll=true;

                    }

                    this.$http.get(web.API_PATH + "user/get/judge/relation/" + this.currUser.id + "/" + this.user.id).then((response) => {
                        let isFriend = false;
                        if (response.data.status == 1) {
                            if (response.data.data == 1) {
                                isFriend = true;
                            }
                        }


                        //是否显示底部按钮逻辑
                        let showButtomBtn = 0;
                        if (web.guest) {
                            if (_this.currUser && _this.user) {
                                if (_this.currUser.id == _this.user.id) {//本人不显示
                                    showButtomBtn = 0;
                                } else { //他人显示
                                    if (isFriend) {  //好友关系显示
                                        showButtomBtn = 1;
                                    } else {//非好友关系显示
                                        showButtomBtn = 3;
                                    }
                                }
                            } else if (!_this.currUser) {   //未关注显示
                                showButtomBtn = 2;
                            }
                        }
                        _this.showBottomBtnType = showButtomBtn;
                        let sleepName = "早起";
                        if (_this.typeId == 3) {
                            sleepName = "早睡"
                        }
                        if (showButtomBtn == 1) {
                            _this.showBottomBtnText = "我的" + sleepName + "计划"
                        } else if (showButtomBtn == 2) {
                            _this.showBottomBtnText = "我也加入" + sleepName + "计划"
                        } else if (showButtomBtn == 3) {
                            _this.showBottomBtnText = "一起参与" + sleepName + "计划"
                        }


                    }, (response) => {

                    });


                    _this.getRankList();
                }, function (error) {
                    _this.getRankList();
                });
            },

            initCareImg: function (item, firstTop) {
                let isRedHeart = false;
                if (!this.isLogin) {  //未登录直接判断关心数量
//                    console.log("notlogin")
                    if (item.careCount && item.careCount > 0) {
                        isRedHeart = true;
                    }
                } else { //登录判断自己是否关心过
//                    console.log("login")
                    if (item.caremy && item.caremy > 0) {
                        isRedHeart = true;
                    }
                }
                if (firstTop) {
                    if (item.careCount && item.careCount > 0 && this.user && this.currUser && this.user.id == this.currUser.id) {
                        isRedHeart = true;
                    }
                }
                if (isRedHeart) {
                    item.careImg = web.IMG_PATH + "/mood_icon_dianz_pre.png";
                } else {
                    item.careImg = web.IMG_PATH + "/mood_icon_dianz_nor.png";
                }
//                console.log(item);
                return item;
            },

            follow: function () { //关注
                let _this = this;
                xqzs.weui.dialogCustom($("#follow").html())
                var mycanvas1 = document.getElementsByTagName('canvas')[0];
                var img = xqzs.image.convertCanvasToImage(mycanvas1);
                $('.ewm').html('')
                $('.ewm').append(img);
            },
            followOrRecord: function () {

                if (this.currUser && this.currUser != undefined && this.currUser != null && this.currUser != {}) {
                    //登录但不是好友
                    this.$http.get(web.API_PATH + "user/get/judge/relation/" + this.currUser.id + "/" + this.user.id).then((response) => {
                        let isFriend = false;
                        if (response.data.status == 1) {
                            if (response.data.data == 1) {
                                isFriend = true;
                            }
                        }
                        if (isFriend) {
                            this.$router.push("/record")
                        } else {
                            this.follow()
                        }

                    }, (response) => {
                        this.follow()
                    });
                } else {
                    this.follow()
                }
            },
            share: function () {
                this.isShowShareTip = !this.isShowShareTip;
            },
            getNotice: function (sleepId) {

                let _this = this;

                //关心提醒
                _this.$http({
                    method: 'GET',
                    type: "json",
                    url: web.API_PATH + 'sleep/query/new/notice/' + sleepId + '/' + _this.typeId + '/_userId_',
                }).then(function (data) {
//                    console.log(data)
                    if (data.data.status == 1) {
                        _this.notice = data.data.data;

                    }
                }, function (error) {
                    //error
                });
            },
            changeRankType: function (v) {

                let _this = this;
                _this.num = _this.FIRST_PAGE_NUM;
                _this.isPageEnd = false;
                _this.isShowMoreText = true;
                _this.counter = 1;

                this.rankType = v;
                _this.getRankList()
            },
            getRankList: function () {

                let vm = this;
                let userIdStr = "_userId_";

                if (vm.userid) {
                    userIdStr = vm.userid;
                }
                let url1 = web.API_PATH + "sleep/daily/relation/rank/page/" + vm.typeId + "/" + userIdStr + "/" + vm.num + "/" + vm.clockDay + "/" + vm.clockMonth + "/" + vm.clockYear + "/" + vm.counter;
                let url2 = web.API_PATH + "sleep/daily/rank/page/" + vm.typeId + "/" + userIdStr + "/" + vm.num + "/" + vm.clockDay + "/" + vm.clockMonth + "/" + vm.clockYear + "/" + vm.counter;
                let url3 = web.API_PATH + "sleep/daily/rank/page/comment/" + vm.typeId + "/" + userIdStr + "/" + vm.num + "/" + vm.clockDay + "/" + vm.clockMonth + "/" + vm.clockYear + "/" + vm.counter;


                switch (vm.rankType) {
                    case 1:
                        this.rankUrl = url1;
                        break;
                    case 2:
                        this.rankUrl = url2;
                        break;
                    case 3:
                        this.rankUrl = url3;
                        break;
                }


                this.rankUrl = this.rankUrl + "?";
                if (web.guest) {
                    this.rankUrl = this.rankUrl + "guest=true"
                }

                //判断是否有当前用户
                if (vm.currUser) {
                    this.rankUrl = this.rankUrl + "&visitorId=" + vm.currUser.id
                }


                console.log(vm.isLoading);
                console.log(vm.isPageEnd);
                if (vm.isLoading || vm.isPageEnd) {
                    return;
                }

                if (vm.counter == 1) {
                    vm.showLoad = true;
                }

                vm.isLoading = true;
                vm.$http.get(vm.rankUrl).then((response) => {
                    vm.showLoad = false;
                    vm.isLoading = false;
//                    console.log(response)
                    if(vm.counter==1&&response.data.status==20001){
                        vm.rankLists = [];
                    }
                    if(response.data.status==20001){
                        return;
                    }


                    if (response.data.data.userRank && response.data.data.userRank.content != null) {
                        response.data.data.userRank.content = xqzs.face.parseEmoji(response.data.data.userRank.content);
                    }

                    vm.myFirst = response.data.data.userRank || vm.myFirst;

                    vm.autoShare();

                    vm.myFirst = vm.initCareImg(vm.myFirst, true);


                    if (vm.myFirst.id != undefined) {
                        vm.getNotice(vm.myFirst.id);
                        vm.sleepId = vm.myFirst.id
                    } else {
//                        console.log("undefined")
                    }


                    let arr = response.data.data.allRank;
//                    console.log("console.log(arr.length)")
//                    console.log(vm.num)
                    if (arr.length < vm.num) {
                        vm.isPageEnd = true;
                        vm.isShowMoreText = false
                    }
                    Bus.$emit("scrollMoreTextInit", vm.isShowMoreText);

                    for (let i = 0; i < arr.length; i++) {
                        arr[i] = vm.initCareImg(arr[i]);
                        if (arr[i].content != null) {
                            arr[i].content = xqzs.face.parseEmoji(arr[i].content);
                        }


                    }


                    if (vm.counter == 1) {
                        vm.rankLists = arr;
                        vm.num = vm.STEP_PAGE_NUM;
                    } else {
                        vm.rankLists = vm.rankLists.concat(arr);
                    }
                    if (arr.length == 0) return;


                    //判断是否从提醒页面到 那么定位到 这个用户
                    if (vm.careUserId != 0 && vm.careUserId != null && vm.careUserId != undefined) {
                        let isMatch = false;
                        for (let i = 0; i < vm.rankLists.length; i++) {
                            if (vm.rankLists[i].userId == parseInt(vm.careUserId)) {
                                isMatch = true;
                                vm.rankLists[i].isMatch = true;
                                vm.$set(vm.rankLists, i, vm.rankLists[i]);
                                break;
                            }
                        }

                        if (isMatch) {
                            //匹配到滚动到指定位置

                            vm.$nextTick(function () {
                                let top = $(".isMatch").offset().top;


                                $('.yo-scroll').animate({
                                    scrollTop: top - ($(document).height() - $(".isMatch").height()) + 29
                                }, 1000);
                            })

                        } else {
                            //匹配不到加载下一页
                            vm.getRankList()
                        }

                    }
                    if (vm.counter == 1) {
                        vm.counter = 5
                    }
                    vm.counter = vm.counter + 1;

                }, (response) => {
                    vm.isLoading = false;
                    vm.showLoad = false;
                });

            },
            onInfinite(done) {
                this.getRankList();
                done() // call done
            },
            addComment: function (sleepId) {
                let vm = this;
                xqzs.mood.actionSheetEdit("取消", "发送", function (v) {
//                    console.log(v)
                    vm.$http.put(web.API_PATH + 'sleep/reply/_userId_/' + sleepId, {content: v}).then(response => {
                        if (response.data.status === 1) {
                            vm.myFirst.content = v;
//                            console.log(vm.rankType);
                            if (vm.rankType == 3) {
                                vm.showLoad = false;
                                vm.isPageEnd = false;
                                vm.isLoading = false;
                                vm.num = vm.FIRST_PAGE_NUM;
                                vm.isShowMoreText = true;
                                vm.counter = 1;
                                vm.getRankList();
                            }


                        }


                    }, response => {

                    });


                }, function (v) {

                }, '最多35个字', 35)
            },
            wxFaceUrl: function (faceUrl) {
                return xqzs.mood.wxface(faceUrl);
            },

            //页面跳转
            goRecordCount: function () {
                if (web.guest == true) {
                } else {
                    xqzs.localdb.set("rank_click_head_face", "true")
                    this.$router.push("/getUpStatistics?type=" + this.typeId);
                }

            },

            addCareAll:function () {
                let _this= this;
                let list = _this.rankLists;

                if(parseInt(_this.careAllIndex)> list.length-1){
                    return  '';
                }
                _this.addCare(list[_this.careAllIndex],_this.careAllIndex,true)


            },
            addCare: function (item,index,isCareAll) {
                let _this = this;
                //如果没有关注公众号则弹出二维码
                if (!_this.currUser) {
                    _this.follow()
                    return;
                }
                let list = _this.rankLists;

                if (item.caremy == 0 || item.caremy == undefined) {
                    _this.$http.put(web.API_PATH + 'mood/care/add', {
                        "moodId": null,
                        "userId": null,
                        'type': item.type,
                        'withId': item.id
                    }).then(response => {
                        if (response.data.status === 1) {
                            list[index].careCount = response.data.data;
                            list[index].caremy = 1;
                            list[index].hit = true;
                            list[index] = _this.initCareImg(list[index])
                            _this.$set(_this.rankLists, index, list[index]);
                            //更新顶部信息

                            if (list[index].id == _this.myFirst.id) {
                                _this.myFirst.caremy = 1;
                                _this.myFirst.hit = true;
                                _this.myFirst = _this.initCareImg(_this.myFirst, true);
                                _this.myFirst.careCount = response.data.data;
                            }
                            if(isCareAll){
                                _this.careAllIndex=parseInt(_this.careAllIndex)+1;
                                _this.addCareAll();

                            }
                        }
                    });
                }else{
                    if(isCareAll){
                        _this.careAllIndex=parseInt(_this.careAllIndex)+1;
                        _this.addCareAll();

                    }
                }
                list[index].caremy = 1;
                list[index].hit = true;
                list[index] = _this.initCareImg(list[index])
                _this.$set(_this.rankLists, index, list[index]);
            },
            cutNickName: function (nickName) {
                if (!nickName) {
                    return '';
                }
                var len = 5;
                if (nickName.length <= len) {
                    return nickName;
                }
                return nickName.substr(0, 5) + '..';
            },
            fabulousList: function () {

                var _this = this;
                if (this.user && this.currUser && this.user.id == this.currUser.id) {

                    this.$router.push('/fabulous?sleepId=' + _this.sleepId + '&type=' + _this.typeId)
                } else if (this.isGuest && this.currUser) {
                    if (!this.myFirst.type) {
                        this.myFirst.type = this.typeId;
                    }

                    _this.addCare(this.myFirst)
                }

            },


        }

    }
</script>



