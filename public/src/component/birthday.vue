<template id="birthday">
    <div class="birthday_box">
        <div v-title>生日祝福</div>
        <v-showLoad v-if="showLoad"></v-showLoad>

        <div class="page_one">
            <div class="top_info">
                <div class="head"><img :src="birthdayUser.faceUrl"></div>
                <div class="txt">{{birthdayTxt}} | {{constellation.name}}</div>
                <div class="txt2" v-if="user==null">{{birthdayUser.nickName | shortName(8)}}</div>
                <div class="txt2" v-if="user!=null&&user.id!=birthdayUserId">{{birthdayUser.nickName | shortName(8)}}
                </div>
                <div class="txt2" v-if="user!=null&&user.id==birthdayUserId">亲爱的 {{birthdayUser.nickName |
                    shortName(8)}}<br>祝你生日快乐，天天开心！
                </div>
                <div class="happy"></div>
                <div class="happy_top"></div>
            </div>
            <div class="mid_counts">
                <div class="heart">
                    <div class="over"></div>
                    <div class="wave">
                        <div class="img1"></div>
                        <div class="img2"></div>

                    </div>
                </div>
                <div class="step" v-for="step in steps">
                    <span class="text" v-if="step.num!=0">{{step.num}}</span>
                    <span class="point_reach" :class="{reach:step.isReach}"></span>
                    <span class="point_small"><i></i><i></i><i></i><i></i></span>
                </div>

            </div>
            <div class="clear"></div>

            <!--<div class="tip">点赞送生日祝福</div>-->
            <!--<div class="count">{{count}}</div>-->
            <div class="heart_a">

            </div>
            <div class="heart_click_Box">
                <div  class="heart_click_btn redPacket_box" >
                    <div class="btn" v-if="(user!=null&&user.id!=birthdayUserId)||user==null" @click="goRedPacket()">
                        <div class="redPacket_btn">
                            <img src="../images/redPacket_btn.png" alt="">
                        </div>
                        <div class="text">
                            <template v-if="(user!=null&&user.id!=birthdayUserId)||user==null">发红包</template>
                            <template v-if="user!=null&&user.id==birthdayUserId">{{formatMyMoney(getCount.redPacket.amount)}}</template>
                        </div>
                    </div>
                    <div class="addTipCount"><img src="../images/brith_money.png" alt="">

                        {{getCount.redPacket.userCount}}个好友红包
                    </div>
                </div>
                <div class="heart_click_btn" >

                    <div class="btn" v-if="(user!=null&&user.id!=birthdayUserId)||user==null" @click="addHeart">
                        <div class="heart_btn">
                            <img src="../../dist/heart_w.png" alt="">
                        </div>
                        <div class="text">
                            <template v-if="(user!=null&&user.id!=birthdayUserId)||user==null">点赞</template>
                            <template v-if="user!=null&&user.id==birthdayUserId">{{getCount.care.careCount}}</template>
                        </div>
                    </div>
                    <div class="addTipCount">
                        <img src="../images/brith_zan.png" alt="">
                        {{getCount.care.userCount}}个好友祝福
                    </div>
                </div>
                <!--新增一键答谢-->
                <div class="addThanksBtn_box" v-if="user!=null&&user.id==birthdayUserId">
                    <div  class="addThanksBtn" @click="goThanks()">一键答谢</div>
                </div>

            </div>
            <div style="clear: both"></div>
            <!--新增红包部分-->

            <!--发红包弹窗-->
            <div  class="redPacket_mask" v-show="redPackFlag"  @touchmove.prevent>
                <div class="redPacket_dialog" >
                    <div class="close" @click="hideRedPacket()" ></div>
                    <div class="redPacket_top">
                        <img class="flower_style" src="../images/redPackTopBg.png" alt="">
                    </div>
                    <div class="redPacket_input" @click.stop>
                        <input type="number" placeholder="红包金额" v-model="moneyValue" @input="moneyValueChange()" pattern="/^(((\d|[1-9]\d)(\.\d{1,2})?)|200|200.0|200.00)$/">
                        <span>元</span>
                    </div>
                    <ul class="money_list" @click.stop>
                        <li>
                            <div class="redPack_item">
                                <div class="money_item">1.68</div>
                                <div class="money_meaning">一路发财</div>
                            </div>
                            <div class="redPack_item">
                                <div class="money_item">5.20</div>
                                <div class="money_meaning">我爱你</div>
                            </div>
                            <div class="redPack_item">
                                <div class="money_item">6.66</div>
                                <div class="money_meaning">一帆风顺</div>
                            </div>
                        </li>
                        <li>
                            <div class="redPack_item">
                                <div class="money_item">8.88</div>
                                <div class="money_meaning">发发发</div>
                            </div>
                            <div class="redPack_item">
                                <div class="money_item">9.99</div>
                                <div class="money_meaning">长长久久</div>
                            </div>
                            <div class="redPack_item">
                                <div class="money_item">13.14</div>
                                <div class="money_meaning">一生一世</div>
                            </div>
                        </li>
                    </ul>
                    <div class="redPacket_sub" @click.stop="goPay()">塞钱进红包</div>
                    <div class="redPacket_bottom">
                        <div>-<span>生日红包温馨提示</span>-</div>
                        <p>发红包时每人单笔最大限额为{{MAX_MONEY}}元</p>
                        <p>您给寿星发送生日红包后</p> <p>“好一点”将会消息通知寿星领取红包</p>
                    </div>
                </div>
            </div>
            <!--点赞-->

            <div class="bottom_tip" v-if="user!=null&&user.id!=birthdayUserId">
                <div class="text" @click="share()" ><img :src="user.faceUrl"/>
                    您为他发了{{parseFloat((senderCount.redPacket||0)).toFixed(2)}}元红包，点了{{senderCount.careCount}}个赞
                </div>
            </div>
            <div id="follow" style="display: none">
                <div class="dialog_follow">
                    <div class="img"><img :src="birthdayUser.faceUrl"></div>
                    <div class="ewm">

                    </div>
                    <div class="text">
                        长按关注"{{birthdayUser.nickName}}"<br>
                        送上生日祝福
                    </div>
                </div>
            </div>
            <div id="follow2" style="display: none">
                <div class="dialog_follow">
                    <div class="img smill"><img src="../images/smill.jpg"></div>
                    <div class="ewm">

                    </div>
                    <div class="text">
                        长按关注“好一点”<br>记录生日，记录心情
                    </div>
                </div>
            </div>
            <div id="output" class="output" style="display: none"></div>
            <div class="myshare" v-show="isShowShareTip" @click="share()">
            </div>
        </div>
        <div class="page_two">
            <div id="friends">
                <div class="friend_list">
                    <div class="top">祝福<span v-if="(user!=null&&user.id!=birthdayUserId)||user==null">他</span><span v-if="user!=null&&user.id==birthdayUserId">我</span>的人</div>
                    <ul>
                        <li v-for="(item,index) in  friendList" v-if="item.userId!=0"
                            class="has_content" :class="{no_has_content:!(item.content&&item.content!=null&&item.content!='')}">
                            <template v-if="item.userId!=0">
                                <i class="item_index">{{index+1}}</i>
                                <img class="faceImg" :src="item.faceUrl"/>
                                <div class="info">
                                    <div class="name">{{item.nickName | shortName(8)}}</div>
                                    <span><font v-if="item.count>0">送了{{item.count}}个赞 </font><font v-if="item.totalAmount>0&&item.count>0">，</font><font v-if="item.totalAmount>0">发了{{parseFloat(item.totalAmount||0).toFixed(2)}}元红包</font></span>
                                    <div class="content" v-show="item.content&&item.content!=null&&item.content!=''">
                                        {{item.content}}
                                    </div>
                                    <div class="content submitContent" @click="submitContent"
                                         v-show="!(item.content&&item.content!=null&&item.content!='')&&user&&user.id==item.userId">
                                        送祝福
                                    </div>
                                </div>


                                <div class="clear"></div>

                            </template>
                            <template v-else=""><img src="../images/birthday/wxfriend.png"/>微信好友<span>{{item.count}}个赞</span>
                            </template>
                            <div class="addThanksImg" v-show="item.isThanked==1">
                                <img style="width:2.35rem;" src="../images/addNewThanks.gif" alt="">
                            </div>
                        </li>
                    </ul>
                </div>

            </div>
            <div class="goInfo" @click="goInfo" v-if="user!=null&&user.id!=birthdayUserId">我也要记录生日</div>
            <div class="addText_style" v-if="user!=null&&user.id==birthdayUserId">
                <div style="padding-top: 1.6471rem;">-<span>生日红包温馨提示</span>-</div>
                <p>好友给您发生日红包后，好一点将会消息通知您</p>
                <p>您可在好一点-个人中心查看收到的红包金额，并可提现到微信钱包！</p>
            </div>
        </div>

    </div>
</template>
<style>
    .addThanksBtn_box{padding-bottom: 4.5rem;padding-top: 1rem;}
    .addThanksBtn{width:32%;height:2.35rem;line-height: 2.4rem;background: rgba(255,102,102,1);font-size: 0.88235rem;color:rgba(245,245,245,1);text-align: center;border-radius: 2.35rem;margin: 0 auto;box-shadow: 0px 3px 10px 0px rgba(255,102,102,0.8);}
    .addThanksImg{position: absolute;right:-10%;}
    .addTipCount{color:rgba(144,73,59,1);font-size: 0.6471rem;line-height: 1;position: absolute;top:-1.5rem;width:130%;overflow: hidden;text-overflow: ellipsis;white-space: nowrap}
    .addTipCount img{width:12px;display: inline-block;float: left;margin-right: 0.235rem;}
    .redPacket_mask{z-index: 1005;
        position: fixed;

        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.6);

        -webkit-animation: fadeIn ease .3s forwards;
        animation: fadeIn ease .3s forwards;
        -webkit-tap-highlight-color: rgba(0,0,0,0);
    }
    .redPacket_dialog{width:90%;height:90%;background: #fff;border-radius: 0.88235rem;position: absolute;top:5%;left:5%; overflow-y: auto}
    .redPacket_dialog .close{ background: url(../images/coin_close.png) no-repeat; width:1rem; height: 1rem; background-size: 1rem; position: absolute; top:1rem; right:1rem}
    .redPacket_top{padding-top:0.6471rem;padding-bottom: 0.88235rem;}
    .flower_style{width:6.76471rem;display: block;margin:0 auto}
    .redPacket_input{width:30%;margin:0 auto;border-bottom: 1px solid rgba(255,57,58,1);padding-bottom: 0.6471rem;position: relative;}
    .redPacket_input input{width:100%;border:0;outline: none;line-height: 1.176471rem;text-align: center;font-size: 1.235rem;color:rgba(255,57,58,1)}
    ::-webkit-input-placeholder { /* WebKit browsers */
        color:   rgba(255,57,58,0.2);
    }

    .redPacket_input span{position: absolute;color:rgba(255,57,58,1);font-size: 0.88235rem;right:-1.5rem;line-height: 1;top:50%;margin-top:-0.441175rem;}
    .money_list{padding: 1.88235rem 1.0588235rem 0.588235rem 1.0588235rem;}
    .money_list li{display: flex; display: -webkit-flex;margin-bottom: 0.88235rem;height:3.1176471rem;}
    .money_list .money_item{font-size: 0.941176471rem;line-height: 1;padding:0.5rem 0;}
    .money_list .money_meaning{font-size: 0.70588235rem;line-height: 1;}
    .money_list li>div{flex: 1;text-align: center;border:1px solid rgba(255,102,102,1);color:rgba(255,57,58,1);}
    .money_list li>div.redPackChecked{background: rgba(255,57,58,1);color:rgba(255,255,255,1);}
    .money_list li>div:nth-of-type(2){margin:0 0.88235rem;}
    .redPacket_sub{width:35%;line-height: 2.4rem;color:rgba(255,255,255,1);text-align: center;font-size: 0.88235rem;border-radius: 1.176471rem;margin: 0 auto;background: rgba(255,57,58,1);}
    .redPacket_sub:active{background: rgb(235, 56, 57);}
    .redPacket_bottom{ margin-top:1rem; width:100%;}
    .redPacket_bottom div{font-size: 0.76471rem;line-height: 1;margin-bottom: 0.941rem;text-align: center;color: rgba(0,0,0,1);}
    .redPacket_bottom div span{color:rgba(51,51,51,1);margin: 0 0.5rem}
    .redPacket_bottom p{text-align: center;color:rgba(135,133,133,1);font-size: 0.588235rem;line-height: 1rem;}
    .send_red_packet{
        background: url(../images/send_red_packet.png) no-repeat #f01d1d ; background-position: 0 0.6rem; background-size: 100%; height:4rem; width: 3rem ; border-radius: 0.8rem; ; font-size: 0.7rem; font-weight: bold; text-align: center; color:#fff; line-height: 6rem; overflow: hidden; position: fixed; right:1rem; bottom:1rem; z-index: 10000;top:68%;
    }
    .send_red_packet:active{background: url(../images/send_red_packet.png) no-repeat #bf1a1a; background-size: 100%; background-position: 0 0.6rem;}
    .birthday_box{
        background: rgba(255,255,255,1);
    }
    .page_one {
        width: 100%;
        /*height: 100%*/
        background: #fbf6eb;
    }
    .page_two{
        background: url("../images/brithday_page_two.png") no-repeat ;
        background-size: 100%;
        margin-top: -3rem;
        padding-top: 3rem;
        /*padding-bottom: 2rem;*/
    }

    .birthday_box .down {
        background: url(../images/down.png) no-repeat;
        height: 0.7352941176470588rem;
        width: 1.176470588235294rem;
        background-size: 1.176470588235294rem;
        transform: rotate(180deg);
        -webkit-transform: rotate(180deg);
        position: absolute;
        bottom: 10px;
        left: 50%;
        margin-left: -0.5882352941176471rem;
        animation: down 1s linear infinite;
        -webkit-animation: down 1s linear infinite;

    }

    @keyframes down {
        0% {
            transform: translate3d(0%, 0, 0) rotate(180deg);
            -webkit-transform: translate3d(0%, 0, 0) rotate(180deg);
        }
        100% {
            transform: translate3d(0, 10px, 0) rotate(180deg);
            -webkit-transform: translate3d(0, 10px, 0) rotate(180deg);
        }

    }

    .goInfo {
        color: rgba(255,57,58,1);
        text-align: center;
        width: 34%;
        display: block;
        margin: 12px auto;
        font-size: 0.8823529411764706rem;
        border-radius: 1.176471rem;
        border:1px solid rgba(244,76,76,1);
        line-height:2.35rem;
    }

    .img.smill img {
        width: 10rem;
        height: 10rem;
        margin: 0 auto
    }

    .dialog_follow .img.smill {
        background: #01af00;
        text-align: center;
        height: 10rem;
    }

    .clear {
        clear: both;
    }

    .friend_list {
        border-radius: 6px;
        overflow: hidden;
        height: 100%;
        margin: 0 auto;
        margin-bottom: 1rem;
        background: #fff;
    }

    .friend_list .top {
        color: rgba(255,57,58,1);
        text-align: center;
        line-height: 1;
        margin-bottom: 2rem;
        font-size:1.1176471rem ;
    }

    .friend_list .top:before {
        content: " ";
        background: url(../images/line-h.png) no-repeat;
        width: 0.6176470588235294rem;
        height: 0.8529411764705882rem;
        display: inline-block;
        background-size: 0.6176470588235294rem;
        vertical-align: middle;
        margin-right: 12px;
    }

    .friend_list .top:after {
        content: " ";
        background: url(../images/line-h.png) no-repeat;
        width: 0.6176470588235294rem;
        height: 0.8529411764705882rem;
        display: inline-block;
        background-size: 0.6176470588235294rem;
        vertical-align: middle;
        margin-left: 12px;
        transform: rotate(180deg);
        -webkit-transform: rotate(180deg);
    }

    .friend_list ul {
        margin:0 auto;
        width: 77%;
    }

    .friend_list ul li {
        width: 100%;
        min-height: 3.5rem;
        line-height: 3.5rem;
        border-bottom: 0.0588235294117647rem solid #eee;
        color: #333;
        font-size: 0.8823529411764706rem;
        clear: both;
        position: relative;
        display: flex;
        margin-bottom: 0.88235rem;
    }
    .friend_list ul li:last-child{ border-bottom: none}
    .friend_list ul li.no_has_content{
        min-height: 3.1rem;
    }

    .item_index{
        position: absolute;
        left:0;
        font-style: normal;
        font-size: 0.8235rem;
        color:rgba(153,153,153,1);
        line-height: 1;
        top:0.8235rem;
    }

    .clear {
        clear: both
    }


    .friend_list ul li .faceImg {
        display: block;
        width: 2.294rem;
        height: 2.294rem;
        margin-left: 1.176471rem;
        border-radius: 50%;
    }


    .friend_list .has_content {
        line-height: 22px !important
    }
    .has_content .info{
        padding:0 0.70588rem;
    }
    .has_content .info span{
        color:rgba(255,57,58,1);
        font-size: 0.70588rem;
        line-height: 1;
    }
    .has_content .name{
        color:rgba(54,54,54,1);
        font-size: 0.88235rem;
        line-height: 1;
    }


    .friend_list .content {
        font-size: 0.72rem;
        color: #777;
        margin-bottom: 0.3529411764705882rem;
        line-height: 1rem;
        margin-top: 4px;
    }

    .submitContent {
        color: dodgerblue !important;
    }

    .myshare {
        background: url(../images/birthday/birthdayshare.png) no-repeat center top rgba(0, 0, 0, 0.9);
        background-position: 2.5rem 3.5rem;
        background-size: 80%;
        height: 100%;
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 10001;
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

    .bottom_tip {
        text-align: center;
        margin-top:6.5rem;
        padding-bottom: 3.8rem;
    }

    .bottom_tip .text {
        background: #e8dcbc;
        height: 1.647058823529412rem;
        line-height: 1.647058823529412rem;
        display: inline-block;
        padding: 0 6px;
        padding-right: 12px;
        border-radius: 0.823529411764706rem;
        font-size: 0.6470588235294118rem;
        color: #8e664d;

    }
    .addText_style{
        color:rgba(162,101,87,1);
        text-align: center;
        background: url("../images/addText_style_bg.png") no-repeat;
        width:100%;
        height:6.294rem;
        background-size: 100% 100%;
    }
    .addText_style span{
        color:rgba(144,73,59,1);
        font-size: 0.76471rem;
        margin:0 0.411rem;
        line-height: 1;
        margin-bottom: 0.88235rem;
    }
    .addText_style p{
        font-size: 0.6471rem;
        line-height: 1rem;
    }

    .bottom_tip .text img {
        height: 1rem;
        width: 1rem;
        border-radius: 50%;
        vertical-align: middle;
        margin-top: -0.22rem;
    }

    .bottom_tip .text span {
        display: inline-block;
        margin-left: 6px
    }


    .birthday_box .top_info {
        padding-top: 4.8rem;
        height: 14.2rem;
        background: url(../images/birthday/top_bg.png) top center no-repeat;
        background-size: 94%;
        position: relative;
    }

    .birthday_box .top_info .happy {
        position: absolute;
        top: 3.8rem;
        left: 50%;
        margin-left: -6.75rem;
        width: 13.5rem;
        height: 5.823529411764706rem;
        background: url(../images/birthday/happy_birthday.png) no-repeat;
        background-size: 100%;
        z-index: 101
    }

    .birthday_box .top_info .happy_top {
        position: absolute;
        top: 1.4rem;
        left: 50%;
        margin-left: -2.426470588235294rem;
        width: 4.852941176470588rem;
        height: 4.088235294117647rem;
        background: url(../images/birthday/happy_top.png) no-repeat;
        background-size: 100%;
        z-index: 100
    }

    .birthday_box .top_info .head {
        border: 2px solid #e3d2b1;
        height: 7.0588235rem;
        width: 7.0588235rem;
        border-radius: 50%;
        overflow: hidden;
        margin: 0 auto;
    }

    .birthday_box .top_info .txt {
        font-size: 0.7058823529411765rem;
        color: #84726b;
        text-align: center;
        margin-top: 0.6rem;
    }

    .birthday_box .top_info .txt2 {
        font-size: 1.058823529411765rem;
        color: #914951;;
        text-align: center
    }

    .birthday_box .top_info .head img {
        width: 100%;
        height: 100%;
    }

    .tip {
        text-align: center;
        margin-top: 2.5rem;
        font-size: 0.6470588235294118rem;
        line-height: 0.7058823529411765rem;
        color: #836f63;
        z-index: 1002;
        position: absolute;
        width: 100%;
    }

    .tip:before {
        content: " ";
        display: inline-block;
        background: url(../images/birthday/tip_img.png);
        height: 0.7058823529411765rem;
        width: 0.7058823529411765rem;
        background-size: 100% 100%;
        vertical-align: middle;
        margin-right: 4px;
    }

    .count {
        margin-top: 3.87rem;
        text-align: center;
        color: #804a52;
        font-size: 1.117647058823529rem;
    }

    .birthday_box .mid_counts {
        width: -webkit-max-content;
        width: -moz-max-content;
        width: max-content;
        position: relative;
        margin: 0 auto;

    }

    .birthday_box .mid_counts .step {
        height: 20px;
        width: auto;
        float: left;
        text-align: center;
        position: relative;
    }

    .birthday_box .mid_counts .step .text {
        position: absolute;
        left: 0;
        top: -26px;
        font-size: 12px;
        color:#444
    }

    .birthday_box .mid_counts .step:nth-child(2) .text {
        left: 2px;
    }

    .birthday_box .mid_counts .step:nth-child(3) .text {
        left: -2px;
    }

    .birthday_box .mid_counts .step:nth-child(4) .text {
        left: -5px;
    }

    .birthday_box .mid_counts .step:nth-child(7) .text {
        left: -5px;
    }

    .birthday_box .mid_counts .step:nth-child(8) .text {
        left: -9px;
    }

    .birthday_box .mid_counts .step:nth-child(9) .text {
        left: -9px;
    }

    .birthday_box .mid_counts .step .point_reach {
        display: block;
        height: 0.47058823rem;
        width: 0.47058823rem;
        border: 1px solid #836f63;
        border-radius: 50%;
        float: left;
    }

    .birthday_box .mid_counts .step .point_reach.reach {
        border: 1px solid #dc3934;
        background: #dc3934;
    }

    .birthday_box .mid_counts .step .point_small {
        line-height: 1;
        float: left
    }

    .birthday_box .mid_counts .step .point_small i {
        float: left;
        background: #836f63;
        display: block;
        height: 0.14705882352rem;
        width: 0.14705882352rem;
        border-radius: 50%;
        margin: 0 0.18rem;
        line-height: 1;
        margin-top: 0.15rem;
    }

    .mid_counts:after {
        display: block;
        clear: both;
        content: " "
    }

    .birthday_box .mid_counts .step:last-child i {
        display: none
    }

    .heart {
        position: absolute;
        width: 4rem;
        height: 3.4rem;
        overflow: hidden;
        background: url(../images/birthday/heart_bg.png);
        background-size: 100% 100%;
        left: 50%;
        margin-left: -2rem;
        top: -1.1rem;
        z-index: 1;

    }

    .heart .over {
        background: url(../images/birthday/heart_over.png);
        background-size: 100% 100%;
        height: 100%;
        width: 100%;
        z-index: 100;
        position: absolute;
        top: 0;
        left: 0
    }

    .heart .wave {
        position: absolute;
        top: 100%;
        left: 0;
        height: 100%;
        width: 100%;
        z-index: 10;
    }

    .heart .wave .img1, .heart .wave .img2, .heart .wave .img3 {
        position: absolute;
        top: 0;
        left: 0;
        background: url(../images/birthday/wave.png) top center repeat-x;
        height: 4.352941176470588rem;
        width: 78235.29411764706rem;
        background-size: 2.588235294117647rem;;
    }

    .heart .wave .img1 {
        background: url(../images/birthday/wave.png) top center repeat-x;
        background-size: 2.235294117647059rem;
    }

    .heart .wave .img3 {
        background: url(../images/birthday/wave.png) top center repeat-x;
        background-size: 18px;
        opacity: 0.3;
        animation: wave_move2 37600s linear;
        -webkit-animation: wave_move2 37600s linear;;
        margin-left: -60px;
        margin-top: 3px;
    }

    .heart .wave .img2 {
        margin-top: 2px;
        opacity: 0.6;
        animation: wave_move2 36400s linear;
        -webkit-animation: wave_move2 36400s linear;;
        margin-left: -100px;
    }

    .heart .wave .img1 {
        opacity: 0.6;
        animation: wave_move 36000s linear;
        -webkit-animation: wave_move 36000s linear;
    }

    @keyframes wave_move {
        0% {
            transform: translate3d(-50%, 0, 0);
            -webkit-transform: translate3d(-50%, 0, 0);
        }
        100% {
            transform: translate3d(0, 0, 0);
            -webkit-transform: translate3d(0, 0, 0);
        }

    }

    @keyframes wave_move2 {
        0% {
            transform: translate3d(-50%, 0, 0);
            -webkit-transform: translate3d(-50%, 0, 0);
        }
        100% {
            transform: translate3d(0%, 0, 0);
            -webkit-transform: translate3d(0%, 0, 0);
        }
    }

    .heart_a div {
        position: absolute;
        background: url(../images/birthday/click_heart.png) no-repeat;
        height: 1.294117647058824rem;
        width: 1.294117647058824rem;
        background-size: 100% 100%
    }

    .heart_a .a_1 {
        animation: heart_move1 2s linear;
        -webkit-animation: heart_move1 2s linear;
        animation-fill-mode: forwards;
        height: 1rem;
        width: 1rem
    }

    .heart_a .a_2 {
        animation: heart_move2 2.5s linear;
        -webkit-animation: heart_move2 2.5s linear;
        animation-fill-mode: forwards;
        height: 1.2rem;
        width: 1.2rem
    }

    .heart_a .a_3 {
        animation: heart_move3 3.5s linear;
        -webkit-animation: heart_move3 3.5s linear;
        animation-fill-mode: forwards;
        height: 1.3rem;
        width: 1.3rem
    }

    .heart_a .a_4 {
        animation: heart_move4 1.5s linear;
        -webkit-animation: heart_move4 1.5s linear;
        animation-fill-mode: forwards;
        height: 1.4rem;
        width: 1.4rem
    }

    .heart_a .a_5 {
        animation: heart_move4 3.5s linear;
        -webkit-animation: heart_move4 3.5s linear;
        animation-fill-mode: forwards;
        height: 1.6rem;
        width: 1.6rem
    }

    @keyframes heart_move1 {
        0% {
            opacity: 1;
            transform: translate3d(8.18rem, 6.42rem, 0) rotate(0deg);
            -webkit-transform: translate3d(8.18rem, 6.42rem, 0) rotate(0deg);

        }
        10% {

            transform: translate3d(7.18rem,5.42rem, 0) rotate(-7deg);
            -webkit-transform: translate3d(7.18rem,5.42rem, 0) rotate(-7deg);
        }
        40% {
            transform: translate3d(5.18rem, 4.88rem, 0) rotate(17deg);
            -webkit-transform: translate3d(5.18rem, 4.88rem, 0) rotate(17deg);
        }
        60% {
            opacity: 0.7;
            transform: translate3d(2.18rem, 3.88rem, 0) rotate(-4deg);
            -webkit-transform: translate3d(2.18rem, 3.88rem, 0) rotate(-4deg);
        }
        80% {
            transform: translate3d(0.8rem, 1.8rem, 0) rotate(18deg);
            -webkit-transform: translate3d(0.8rem, 1.8rem, 0) rotate(18deg);
        }

        100% {
            transform: translate3d(1.56rem, 0, 0) rotate(0deg);
            -webkit-transform: translate3d(1.56rem, 0, 0) rotate(0deg);
            opacity: 0;
            display: none;

        }
    }

    @keyframes heart_move2 {
        0% {
            opacity: 1;
            transform: translate3d(8.18rem, 6.42rem, 0) rotate(0deg);;
            -webkit-transform: translate3d(8.18rem, 6.42rem, 0) rotate(0deg);;
        }

        11% {

            transform: translate3d(8.18rem,5.88rem, 0) rotate(10deg);
            -webkit-transform: translate3d(8.18rem,5.88rem, 0) rotate(10deg);
        }
        40% {
            transform: translate3d(6.18rem, 4.68rem, 0) rotate(12deg);
            -webkit-transform: translate3d(6.18rem, 4.62rem, 0) rotate(12deg);
        }
        60% {
            opacity: 0.4;
            transform: translate3d(4.18rem, 3.88rem, 0) rotate(13deg);
            -webkit-transform: translate3d(4.18rem, 3.88rem, 0) rotate(13deg);
        }
        80% {
            transform: translate3d(2.8rem, 1.8rem, 0) rotate(-18deg);
            -webkit-transform: translate3d(2.8rem, 1.8rem, 0) rotate(-18deg);
        }

        100% {
            transform: translate3d(1.56rem, 0, 0) rotate(0deg);
            -webkit-transform: translate3d(1.56rem, 0, 0) rotate(0deg);
            opacity: 0;
            display: none;
        }
    }

    @keyframes heart_move3 {
        0% {
            opacity: 1;
            transform: translate3d(8.18rem, 6.42rem, 0) rotate(-4deg);
            -webkit-transform: translate3d(8.18rem, 6.42rem, 0) rotate(-4deg);
        }
        12% {

            transform: translate3d(7.1rem,5.2rem, 0) rotate(-4deg);
            -webkit-transform: translate3d(7.1rem, 5.2rem, 0) rotate(-4deg);
        }
        40% {
            transform: translate3d(5.8rem, 4.4rem, 0) rotate(-14deg);
            -webkit-transform: translate3d(5.8rem, 4.4rem, 0) rotate(-14deg);
        }
        60% {
            opacity: 0.6;
            transform: translate3d(3.3rem, 3.6rem, 0) rotate(14deg);
            -webkit-transform: translate3d(3.3rem, 3.6rem, 0) rotate(14deg);
        }
        80% {
            transform: translate3d(1.7rem, 1.8rem, 0) rotate(-10deg);
            -webkit-transform: translate3d(1.7rem, 1.8rem, 0) rotate(-10deg);
        }

        100% {
            transform: translate3d(1.56rem, 0, 0) rotate(0deg);
            -webkit-transform: translate3d(1.56rem, 0, 0) rotate(0deg);
            opacity: 0;
            display: none;
        }
    }

    @keyframes heart_move4 {
        0% {
            transform: translate3d(8.18rem, 6.42rem, 0) rotate(14deg);
            -webkit-transform: translate3d(8.18rem,6.42rem, 0) rotate(14deg);
        }
        12% {

            transform: translate3d(6.8rem, 5.68rem, 0) rotate(14deg);;
            -webkit-transform: translate3d(6.8rem, 5.68rem, 0) rotate(14deg);;
        }
        40% {
            transform: translate3d(5.1rem, 5.4rem, 0) rotate(-10deg);;
            -webkit-transform: translate3d(5.1rem, 5.4rem, 0) rotate(-10deg);
        }
        60% {
            opacity: 0.4;
            transform: translate3d(3.9rem, 3.6rem, 0) rotate(-10deg);
            -webkit-transform: translate3d(3.9rem, 3.6rem, 0) rotate(-10deg);
        }
        80% {
            transform: translate3d(1.4rem, 1.8rem, 0) rotate(5deg);
            -webkit-transform: translate3d(1.4rem, 1.8rem, 0) rotate(5deg);
        }

        100% {
            transform: translate3d(1.56rem, 0, 0);
            -webkit-transform: translate3d(1.56rem, 0, 0);
            opacity: 0;
            display: none;
        }
    }

    @keyframes heart_move5 {
        0% {
            opacity: 1;
            transform: translate3d(8.18rem, 6.42rem, 0) rotate(-14deg);
            -webkit-transform: translate3d(8.18rem, 6.42rem, 0) rotate(-14deg);
        }
        14% {

            transform: translate3d(4.18rem, 5.28rem, 0) rotate(-14deg);
            -webkit-transform: translate3d(4.18rem, 5.28rem, 0) rotate(-14deg);
        }
        40% {
            transform: translate3d(3.18rem, 4.4rem, 0) rotate(14deg);
            -webkit-transform: translate3d(3.18rem, 4.4rem, 0) rotate(14deg);
        }
        60% {
            opacity: 0.3;
            transform: translate3d(2.18rem, 3.6rem, 0) rotate(14deg);
            -webkit-transform: translate3d(2.18rem, 3.6rem, 0) rotate(14deg);
        }
        80% {
            transform: translate3d(1.7rem, 1.8rem, 0) rotate(-7deg);
            -webkit-transform: translate3d(1.7rem, 1.8rem, 0) rotate(-7deg);
        }

        100% {
            transform: translate3d(1.56rem, 0, 0) rotate(0deg);
            -webkit-transform: translate3d(1.56rem, 0, 0) rotate(0deg);
            opacity:0;
            display: none;
        }
    }

    .heart_a {
        height: 8rem;
        width: 4.5rem;
        position: absolute;
        left: 50%;
        margin-left: -2.25rem;
        top: 18rem;
        z-index: 1001;
    }
    .heart_click_Box{
        position: relative;
        padding-top: 4.4rem;
    }

    .heart_click_btn {
        height: 4.529411764705882rem;
        width: 4.529411764705882rem;
        border-radius: 50%;
        position: absolute;
        right: 15%;
        margin-left: -2.264705882352941rem
    }

    .redPacket_box{
        right: auto;
        left:15%;
        margin-left: 0;
    }
    .redPacket_box .btn:active{background: #d33b3a !important }
    .heart_click_btn .btn:active {
        background: rgb(193, 144, 98);
    }

    .heart_click_btn:active .heart_btn {
        opacity: 0.6
    }

    .heart_click_btn .text {
        color: #fff;
        text-align: center;
        font-size: 0.8235294117647059rem;
    }
    .redPacket_btn img{
        width:1.0588235rem;
        display: block;
        margin: 0 auto;
        margin-bottom: 0.294rem;
    }
    .heart_click_Box .redPacket_box .btn{
        background: #dd3c3b;

    }
    .heart_click_Box .btn{
        height:100%;
        border-radius: 50%;
        background:rgba(210,159,114,1) ;
    }
    .redPacket_btn{
        padding-top: 1rem;
    }
    .heart_btn {
        margin: 0 auto;
        padding-top: 1rem;
        margin-bottom: 0.294rem;
    }
    .heart_btn img{
        height: 1.117647058823529rem;
        width: 1.294117647058824rem;
        display: block;
        margin: 0 auto;
    }


</style>
<script src="../js/qrcode.min.js"></script>

<script type="es6">
    let funny = {
        template: '#birthday'
    };

    import showLoad from './showLoad.vue';

    export default {
        data() {
            return {
                MAX_CARE_COUNT: 10,
                steps: [
                    {num: 1, isReach: false},
                    {num: 21, isReach: false},
                    {num: 52, isReach: false},
                    {num: 0, isReach: false},
                    {num: 0, isReach: false},
                    {num: 88, isReach: false},
                    {num: 168, isReach: false},
                    {num: 520, isReach: false}
                ],
                showLoad: false,
                count: 0,
                random: 1,
                per: 0,
                birthday: null,
                constellation: {},
                birthdayTxt: "",
                birthdayUser: {},
                user: null,
                birthdayUserId: 0,
                isGuest: false,
                isShowShareTip: false,
                friendList: [],
                isFriendListShow: false,
                myCareCount: 0,
                myCareId: 0,
                hasMyContent: false,
                adding: false,
                redPackFlag:false,
                getCount:{
                    care:{},
                    redPacket:{}
                },
                senderCount:{},
                moneyValue:null,
                MAX_MONEY:200,
                MIN_MONEY:1,
                thanksImg:['url(/dist/img_step2.png) no-repeat','url(/dist/img_step3.png) no-repeat','url(/dist/img_step4.png) no-repeat'],
                isThanks:false,
            }
        },
        filters: {
            shortName: function (value, len) {
                return xqzs.shortname(value, len);
            }
        },
        components: {
            'v-showLoad': showLoad
        },
        methods: {
            formatMyMoney:function (v) {
                if(v>1000){
                    return  parseInt(v||0);
                }else{
                    return  parseFloat(v||0).toFixed(2);
                }

            },
            sendRedPacket:function () {
                xqzs.eventLog.visit('birthdaysendredpacket')
                xqzs.weui.tip("该功能暂未开放！",function () {

                })
            },
            goPay:function () {
                let _this = this;

                let  message = "生日快乐！"
                if($(".redPack_item.redPackChecked .money_meaning").length>0){
                    message=$(".redPack_item.redPackChecked .money_meaning").html();
                }
                let msg = {
                    'userId':'',//發紅包用戶
                    'amount':_this.moneyValue,
                    'message':message
                }
                console.log(msg)
                _this.$http.put(web.API_PATH + 'birthday/red/packet/send/'+_this.birthdayUserId,msg).then(function (res) {
                    let config = res.data.data;
                    console.log(res)
                    let url = web.BASE_PATH + "wxpay.php?appId=" + config.appId + "&timeStamp=" + config.timeStamp + "&nonceStr=" + config.nonceStr + "&package=" + config.package + "&signType=" + config.signType + "&paySign=" + config.paySign + "&reurl=" + encodeURIComponent(window.location.href + "&start=1");
                    window.location.href = url
                })
            },
            goRedPacket:function () {
                let _this = this;

                if(!(this.user&&this.user.id)){
                    this.follow();
                    return;
                }

                if(_this.birthdayUserId==this.user.id){
                    xqzs.weui.tip("快邀请好友给自己发红包");
                }else{
                    _this.redPackFlag = true;
                }

            },
            hideRedPacket:function () {
                let _this = this;
                _this.redPackFlag = false;
            },
            submitContent: function () {
                let _this = this;
                if (_this.hasMyContent) {
                    xqzs.weui.tip("每人最多点" + _this.MAX_CARE_COUNT + "个赞，邀请好友一起点赞", function () {

                    });
                    return;
                }
                console.log(this.myCareId)
                xqzs.mood.actionSheetEdit("", "发送", function (v) {

                    //添加祝福
                    _this.$http.put(web.API_PATH + 'birthday/reply/_userId_/' + _this.myCareId, {"content": v}).then(response => {
                        if (response.data.status === 1) {
                            xqzs.weui.toast("success", "祝福成功！", function () {

                            })
                            _this.friends();

                        }
                    });


                }, function () {

                }, "送上你的祝福（20个字内）", 20)
            },

            friends: function () {
                let _this = this;
                let data2 = '?userId=_userId_';
                if (web.guest) {
                    data2 = data2 + '&guest=true'
                }


                //点赞好友列表 +总数


                _this.$http.get(web.API_PATH + 'birthday/get/care/users/' + _this.birthdayUserId + data2).then(function (data) {//es5写法
                    if (data.body.status == 1) {
                        let count = 0;
                        for (let i = 0; i < data.body.data.length; i++) {
                            count += data.body.data[i].count;
                        }
                        _this.count = count;
                        console.log(_this.count);
                        _this.friendList = data.body.data.reverse();
                        for (let i = 0; i < _this.friendList.length; i++) {

                            if (_this.friendList[i].content && _this.friendList[i].content != null && _this.friendList[i].content != '') {
                                if(_this.friendList[i].content&&_this.friendList[i].content!='') _this.friendList[i].content = xqzs.face.parseEmoji(  _this.friendList[i].content )
                            }

                            _this.$set(_this.friendList,i ,_this.friendList[i]);

                            if (_this.user && _this.user != null && _this.friendList[i].userId == _this.user.id) {
                                _this.myCareId = _this.friendList[i].birthdayCareId;
                                _this.myCareCount = _this.friendList[i].count;
                                if (_this.friendList[i].content && _this.friendList[i].content != null && _this.friendList[i].content != '') {
                                    _this.hasMyContent = true;
                                }
                                console.log(_this.friendList[i])
                            }

                        }
                        _this.reach();

                    }
                }, function (error) {
                });
//                xqzs.weui.dialogCustom($("#friends").html())
            },
            goInfo: function () {

                if (this.user) {
                    this.$router.push("/me/personal");
                } else {
                    this.follow2();
                }
            },
            follow2: function () {

                let _this = this;
                xqzs.weui.dialogCustom($("#follow2").html())
                var mycanvas2 = document.getElementsByTagName('canvas')[0];
                var img = xqzs.image.convertCanvasToImage(mycanvas2);
                $('.ewm').html('')
                $('.ewm').append(img);


            },
            follow: function () { //关注
                let _this = this;
                xqzs.weui.dialogCustom($("#follow").html())
                var mycanvas1 = document.getElementsByTagName('canvas')[0];
                var img = xqzs.image.convertCanvasToImage(mycanvas1);
                $('.ewm').html('')
                $('.ewm').append(img);

            },
            convertCanvasToImage: function (canvas) {
                //新Image对象，可以理解为DOM
                var image = new Image();
                // canvas.toDataURL 返回的是一串Base64编码的URL，当然,浏览器自己肯定支持
                // 指定格式 PNG
                image.src = canvas.toDataURL("image/png");
                return image;
            },
            toUtf8: function (str) {
                var out, i, len, c;
                out = "";
                len = str.length;
                for (i = 0; i < len; i++) {
                    c = str.charCodeAt(i);
                    if ((c >= 0x0001) && (c <= 0x007F)) {
                        out += str.charAt(i);
                    } else if (c > 0x07FF) {
                        out += String.fromCharCode(0xE0 | ((c >> 12) & 0x0F));
                        out += String.fromCharCode(0x80 | ((c >> 6) & 0x3F));
                        out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F));
                    } else {
                        out += String.fromCharCode(0xC0 | ((c >> 6) & 0x1F));
                        out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F));
                    }
                }
                return out;
            },

            share: function () {
                this.isShowShareTip = !this.isShowShareTip;
            },
            addHeart: function () {
                let that = this;
                let random = 1 + parseInt(Math.random() * 5);
                if (that.myCareCount && that.myCareCount >= that.MAX_CARE_COUNT) {
                    that.submitContent()
                    return;
                }
                if (this.random == random) {
                    this.addHeart()
                    return;
                }
                $(".heart_a").append("<div class='a_" + random + "'></div>");
                if (this.adding || this.showLoad) {
                    return;
                }


                // http://api.m.xqzs.cn/api/v1/birthday/add/care/1275/1273
                let userId = 0;
                if (that.user) {
                    userId = that.user.id;
                } else {
                    this.follow();
                    return;
                }

                let data = {};
                if (web.guest) {
                    data = {guest: true}
                }

                this.adding = true;
                that.$http.put(web.API_PATH + "birthday/add/care/" + that.birthdayUserId + "/" + userId, data)
                    .then(function (bt) {
                        if (bt.data && bt.data.status == 1) {
                            that.count++;
                            that.myCareCount++;
                            that.random = random;
                            that.adding = false;
                            that.reach();
                            if (that.myCareCount && that.myCareCount == that.MAX_CARE_COUNT) {
                                xqzs.weui.tip("再点一次你就可以送祝福了", function () {
                                });
                            }

                            that.friends();
                            that.getSender();
                            that.getReceiver();
                        }
                    });

            },
            getSender:function () {
                let _this = this;
                let  data ='';
                if (web.guest) {
                    data =  '?guest=true'
                }
                let userId="_userId_";
                if( !(_this.user&& _this.user.id)){
                    userId=0;
                }
                _this.$http.get(web.API_PATH+'birthday/get/info/by/sender/'+_this.birthdayUserId+'/'+userId+data).then(function (data) {
                    console.log(data.data.data)
                    _this.senderCount = data.data.data;
                })
            },
            getReceiver:function () {
                let _this = this;
                let  data ='';
                if (web.guest) {
                    data =  '?guest=true'
                }
                _this.$http.get(web.API_PATH+'birthday/get/info/by/receiver/'+_this.birthdayUserId+data).then(function (data) {
                    console.log(data.data.data)
                    _this.getCount.care= data.data.data.care;
                    _this.getCount.redPacket= data.data.data.redPacket;
                    console.log(_this.getCount.care.careCount+'**********')
                })
            },
            moneyValueChange:function () {
                let _this=this;
                console.log(this.moneyValue);
                if(this.moneyValue>this.MAX_MONEY){
                    this.moneyValue = this.MAX_MONEY;
                    xqzs.weui.tip("不能超过最大值！")
                }
                if(this.moneyValue<this.MIN_MONEY){
                    this.moneyValue = this.MIN_MONEY;
                    xqzs.weui.tip("不能低于最小值！")
                }
                $('.redPack_item').each(function (i) {
                    let money = $(this).find(".money_item").html();
                    console.log(money)
                    $(this).removeClass('redPackChecked')
                    if(money==_this.moneyValue){
                        $(this).addClass('redPackChecked')
                    }
                });

            },
            reach: function () {
                //遍历到达位置
                console.log("bearbearreachbearbearbear")
                for (let i = 0; i < this.steps.length; i++) {
                    if (this.steps[i].num <= this.count) {
                        this.steps[i].isReach = true;
                    }
                }

                for (let i = 0; i < this.steps.length; i++) {
                    if (!this.steps[i].isReach && this.steps[i].num != 0) {
                        let last = this.count;
                        let stepLength = this.steps[i].num
                        if (i != 0) {
                            let before = this.steps[i - 1].num;
                            if (before == 0) before = this.steps[i - 2].num;
                            if (before == 0) before = this.steps[i - 3].num;

                            last = this.count - before;
                            stepLength = this.steps[i].num - before;

                            if (this.count == this.steps[i - 1].num) {
                                last = stepLength;
                                console.log(this.count + "reaaaa" + stepLength)
                            }
                        }
                        console.log(last + "reaaaa" + stepLength)

                        // this.per = last / stepLength * 100;
                        break;
                    }
                }

                if (this.count >= this.steps[this.steps.length - 1].num) {
                    //  this.per = 108;
                }



                //自己判断
                if(this.user!=null&&this.user.id==this.birthdayUserId){ //自己
                    this.per = this.count / this.steps[this.steps.length-1].num * 100;
                    if(this.per >100)this.per=100;
                }else{
                    this.per = this.myCareCount / this.MAX_CARE_COUNT * 100;
                }

                $(".heart .wave").css({top: 100 - (this.per) + "%"});

            },
            goThanks:function () {
                let _this = this;
                let friendsId = [];
                console.log(_this.friendList)
                for(let i = 0;i<_this.friendList.length;i++){
                    if(_this.friendList[i].isThanked){

                    }else{
                        friendsId.push(_this.friendList[i].userId);
                    }

                }
                console.log(friendsId)
                let msg = {
                    'thanksUsers' : friendsId.join(',')
                }
                console.log(msg)
                _this.$http.post(web.API_PATH+'birthday/set/thanks/_userId_',msg).then(function (res) {
                    console.log(res)
                    let $_time = 0;
                    for(let i = 0;i<_this.friendList.length;i++){
                        if(_this.friendList[i].isThanked){

                        }else{
                            $_time+=500;
                            setTimeout(function () {
                                _this.friendList[i].isThanked = 1;
                                _this.$set(_this.friendList,i,_this.friendList[i])
                            },$_time)

                        }

                    }
                })

            }
        }
        ,

        mounted: function () {
            var winWidth = $(window).width();
            var winHeight = $(window).height();
            console.log(winWidth)
            let _this = this;
            this.showLoad = true;
            //当前生日用户


            let data = '?friendId=_userId_';
            if (web.guest) {
                this.isGuest = true;
                data = data + '&guest=true'
            }

            let userId = _this.$route.query.userId;
            this.birthdayUserId = userId;
            if (userId) {
                _this.$http({
                    method: 'GET',
                    type: "json",
                    url: web.API_PATH + 'user/find/by/user/Id/memo/' + userId  + data,
                }).then(function (data) {//es5写法

                    if (data.data.data !== null) {

                        _this.birthdayUser = data.data.data;
                        _this.birthday = _this.birthdayUser.birthday;
                        xqzs.wx.setConfig(this, function () {
                            var config = {
                                imgUrl: web.BASE_PATH + web.IMG_PATH + "/birthday/birthday_share3.jpg",
                                title: '生日祝福',
                                desc: "今天是“" + _this.birthdayUser.nickName + '”生日，快来送个祝福吧！',
                                link: web.BASE_PATH + "/guest/#/birthday?userId=" + _this.birthdayUserId,
                            };
                            weshare.init(wx, config)
                        });

                        if (_this.birthday) {
                            let date = _this.birthday.split(',');
                            _this.year = date[0];
                            _this.month = date[1];
                            _this.day = date[2];
                            _this.birthdayTxt = "阳历 " + _this.month + "月" + _this.day + "号";
                            if (_this.birthdayUser.isLunar == 1) {

                                _this.birthdayTxt = "农历 " + calendar.toChinaMonth(parseInt(_this.month)) + calendar.toChinaDay(_this.day);
                            }


                            _this.constellation = xqzs.constellation.array[xqzs.constellation.getIndex(_this.month, _this.day)];
                        }

                    }
                }, function (error) {
                    //error
                });

            }


            //当前用户
            _this.$http.get(web.API_PATH + 'user/find/by/user/Id/_userId_').then(function (data) {//es5写法

                if (data.body == '' || data.data.status != 1) {

                } else {
                    _this.user = data.data.data;
                    //我的点赞数量
                    if (_this.user && _this.birthdayUserId != _this.user.userId) {
                        _this.$http.get(web.API_PATH + 'birthday/get/care/count/' + _this.birthdayUserId + "/_userId_").then(function (data) {//es5写法
                            console.log(data)
                            if (data.body.status == 1) {
                                _this.myCareCount = data.body.data.count;
                            }
                        }, function (error) {
                        });
                    }

                }
                _this.friends();
                _this.getSender();
                _this.showLoad = false;
            }, function (error) {
                _this.friends();
                _this.getSender();
            });

            data = '?userId=_userId_';
            if (web.guest) {
                this.isGuest = true;
                data = data + '&guest=true'
            }


            //二维码
            _this.$http.get(web.API_PATH + 'birthday/get/qr/code/' + this.birthdayUserId + data).then(function (data) {//es5写法
                $("#output").empty();
                console.log(_this.toUtf8(data.body.data));
                $('#output').qrcode({
                    width: 100, height: 100,
                    text: _this.toUtf8(data.body.data), background: "#ffffff",
                    foreground: "red"
                });

            }, function (error) {

            });
            _this.getReceiver()
        },
        updated:function () {
            let _this = this
            $('.redPack_item').on('click',function(){
                $('.redPack_item').removeClass('redPackChecked')
                $(this).addClass('redPackChecked')
                _this.moneyValue = $(this).find($('.money_item')).text();
            })
        },

    }
</script>
