<template id="interview">
    <div class="interview_box  " :class="interviewBoxClass">
        <v-showLoad v-if="showLoad||loading"></v-showLoad>
        <div class="inter_pic " v-show="!loading">
            <div class="inter_face"><img :src="wxFaceUrl(currUser.faceUrl)"/></div>
            <div class="inter_name ">{{currUser.nickName | shortName(7) }}</div>
            <div class="inter_text ">向 /您/ 推/ 荐</div>
            <div class="inter_xq">心情指数</div>
            <div class="inter_an">
                <div class="inter_code"><img :src="qrCodePath"/></div>
                <div class="inter_zw"><img :src="pic_num"/>
                    <p>长按识别二维码</p>
                </div>
            </div>
            <div class="inter_tj">
                <p class="inter_left">这个工具很不错</p>
                <p class="inter_right">推荐给你哦!</p>
            </div>
        </div>
        <div class="inter_prompt" v-show="!loading">
            <div class="inter_btn weui-btn weui-btn_primary" @click="resetInter()" v-if="isUser">重新生成邀请卡</div>
            <div class="inter_hint">
                <h1>邀请卡操作提示</h1>
                <p>1. 长按保存图片，发送给微信好友或分享至朋友圈</p>
                <p>2. 或点击右上角分享当前专属邀请页给好友或分享至朋友圈</p>
                <p>3. 点击「重新生成」可更新邀请卡</p>
            </div>
        </div>
    </div>
</template>
<script>
    import showLoad from "./showLoad.vue"

    var interview = {
        template: '#interview'
    };


    export default {

        data() {
            return {
                showLoad: false,
                pic_num: '',
                qrCodePath: '', interviewBoxClass: '',
                bgType: '',
                isUser: false,
                currUser: {},
                userName:"",
                loading:true
            }
        },
        props: {
            user: {
                type: Object
            }
        },
        watch: {

            user: function (data) {
                let _this = this;
                var openId = _this.$route.query.openId;
                if (openId == data.openId) {
                    _this.isUser = true;
                }
                else {
                    _this.isUser = false;
                }
            }
        },
        mounted: function () {
            let __this = this;
            var w = $(".inter_pic").width()
            var h = 860 * w / 540;
            $(".inter_pic").height(h);
            var openId = __this.$route.query.openId;
            __this.$http({
                method: 'GET',
                type: "json",
                url: web.API_PATH + 'user/find/by/open/Id/'+openId,
            }).then(function (data) {//es5写法
                if (data.data.data !== null) {
                    __this.currUser = eval(data.data.data);
                    console.log(data.data.data)
                }
            }, function (error) {
                //error
            });

            //获取背景type ，二维码
            //http://api.m.xqzs.cn/api/v1/user/query/sharepage/oHE8_uPavJLfKgtMo3OTdTx0ZNkg
            __this.$http.get(web.API_PATH + "user/query/sharepage/" + openId)
                    .then(function (bt) {
                        if (bt && bt.data.status == 1) {
                            __this.qrCodePath = bt.data.data.qrcodepath;
                            __this.bgType = bt.data.data.bgtype;
                            __this.interviewBoxClass = "interview_box" + __this.bgType;
                            __this.pic_num = web.IMG_PATH + "interview/" + __this.bgType + ".png";
                            __this.loading =false;
                        }
                    })


        },
        methods: {

            resetInter: function () {
                var _this = this;
                _this.showLoad = true;
                var new_num = Math.ceil(Math.random() * 12);
                if (_this.bgType == new_num) {
                    _this.resetInter();
                    return;
                }
                _this.bgType = new_num;


                //重置获取背景type
                //http://api.m.xqzs.cn/api/v1/user/sharepage/26/5
                _this.$http.put(web.API_PATH + "user/sharepage/_userId_/" + _this.bgType)
                        .then(function (bt) {
                            if (bt && bt.data.status == 1) {
                                _this.showLoad = false;
                                var stl = "interview_box" + _this.bgType;
                                console.log(stl);
                                for (let i = 1; i < 13; i++) {
                                    $(".interview_box").removeClass("interview_box" + i);
                                }
                                if (_this.bgType != 0) {

                                    $(".interview_box").addClass(stl);
                                    _this.pic_num = web.IMG_PATH + 'interview/' + _this.bgType + ".png";
                                    console.log(_this.pic_num);

                                }
                                else {
                                    _this.pic_num = web.IMG_PATH + 'interview/' + "1.png";
                                }
                            }
                        })


            },
            wxFaceUrl: function (faceUrl) {
                return xqzs.mood.wxface(faceUrl);
            }


        },
        components: {
            'v-showLoad': showLoad
        }


    }


</script>
<style>

    .interview_box {
        background-color: #ffffff;
    }

    .inter_pic {
        margin-top: 2%;
        margin-left: auto;
        margin-right: auto;
        background: url("../../dist/interview/1.jpg") no-repeat;
        background-size: 100%;
        width: 78%;
        position: relative;
    }

    .inter_face {
        border-radius: 50%;
        width: 15%;
        margin: 0 auto;
        padding-top: 14%;
        font-size: 0;
    }

    .inter_face img {
        width: 100%;
        border: #ffffff 4px solid;
        border-radius: 50%;
    }

    .inter_name {
        font-size: 0.705rem;
        color: #7880a2;
        text-align: center;
        margin-top: 3%;
    }

    .inter_text {
        font-size: 0.645rem;
        color: #7880a2;
        text-align: center;
        margin-top: 1%;
    }

    .inter_xq {
        color: #7880a2;
        text-align: center;
        margin-top: 20%;
        font-size: 0.88rem;
    }

    .inter_an {
        width: 78%;
        margin: 0 auto;
        overflow: hidden;
        top: 61.2%;
        position: absolute;
        left: 50%;
        margin-left: -39%;
    }

    .inter_code {
        position: absolute;;
        width: auto;
        margin-left: 20%;
        z-index: 600;
        height: 100%;
        top: -50%;
    }

    .inter_code img {
        height: 200%;
    }

    .inter_zw {
        float: left;
        width: 38%;
        text-align: center;
        margin-left: 50%;
    }

    .inter_zw img {
        width: 35%;
        margin-top: 4%;
    }

    .inter_zw p {
        color: #7880a2;
        font-size: 0.47rem;
        font-weight: bold;
        margin-top: -2%;
    }

    .inter_tj {
        width: 49.8%;
        margin: 0 auto;
        position: absolute;
        bottom: 5%;
        left: 50%;
        margin-left: -24.8%;
    }

    .inter_tj p {
        font-style: oblique;
        color: #d173af;
        font-size: 0.65rem;
    }

    .inter_right {
        text-align: right;
        margin-right: 20%;
    }

    .inter_left {
        text-align: left;
        margin-left: 10%;
    }

    .inter_prompt {
        margin-top: 4%;
    }

    .inter_btn {
        margin: 0px 5%;
        font-size: 15px;
    }

    .inter_hint {
        margin: 0px 5%;
    }

    .inter_hint h1 {
        font-size: 15px;
        margin: 3.24% 0;
    }

    .inter_hint p {
        font-size: 12px;
        color: #666666;

    }

    .interview_box2 .inter_pic {
        margin-top: 2%;
        margin-left: auto;
        margin-right: auto;
        background: url("../../dist/interview/2.jpg") no-repeat;
        background-size: 100%;
        width: 78%;
        position: relative;
        box-shadow: #ffd3f4 0px 0px 0px;

    }

    .interview_box2 .inter_face {
        border-radius: 50%;
        width: 18.82%;
        margin-left: 7.6%;
        padding-top: 27.6%;
        font-size: 0;
    }

    .interview_box2 .inter_face img {
        width: 100%;
        border: 0px;
        border-radius: 50%;
        box-shadow: #ffd3f4 0px 0px 0px;
    }

    .interview_box2 .inter_name {
        font-size: 12px;
        color: #333333;
        height: 7px;
        margin: 0;
        text-align: left;
        position: absolute;
        font-weight: bold;
        left: 29.3%;
        top: 19.2%;
    }

    .interview_box2 .inter_text {
        font-size: 11px;
        color: #333333;
        height: 11px;
        text-align: left;
        position: absolute;
        font-weight: bold;
        left: 29.3%;
        top: 24%;
        margin: 0;
    }

    .interview_box2 .inter_xq {
        color: #333333;
        text-align: center;
        margin-top: 28%;
        font-size: 0.88rem;
        font-weight: bold;
        font-family: "PingFangSC-Medium";
    }

    .interview_box2 .inter_an {
        width: 86%;
        overflow: hidden;
        margin-top: 26%;
        position: absolute;
        left: 50%;
        margin-left: -43%;
    }

    .interview_box2 .inter_code {
        float: left;
        width: 28.5%;
        text-align: right;
        margin-left: 20%;
    }

    .interview_box2 .inter_code img {
        height: 200%;
    }

    .interview_box2 .inter_zw {
        float: left;
        text-align: center;
        width: 40%;
    }

    .interview_box2 .inter_zw img {
        width: 50%;
    }

    .interview_box2 .inter_zw p {
        color: #333333;
        font-size: 0.47rem;
        font-weight: bold;
        margin-left: 4%;
        margin-top: -3.1%;
    }

    .interview_box2 .inter_tj {
        width: 49.8%;
        margin: 0 auto;
        position: absolute;
        top: 3%;
        left: 50%;
        bottom: auto;

    }

    .interview_box2 .inter_tj p {
        font-style: oblique;
        color: #000000;
        font-size: 0.588rem;
    }

    .interview_box2 .inter_right {
        text-align: right;
        margin-right: 10%;
    }

    .interview_box2 .inter_left {
        text-align: left;
        margin-left: 20%;
    }

    .interview_box3 .inter_pic {
        margin-top: 2%;
        margin-left: auto;
        margin-right: auto;
        background: url("../../dist/interview/3.jpg") no-repeat;
        background-size: 100%;
        width: 78%;
        position: relative;
        box-shadow: #ffd3f4 0px 0px 0px;

    }

    .interview_box3 .inter_face {
        border-radius: 50%;
        width: 18%;
        margin: 0 auto;
        padding-top: 15%;
        font-size: 0;

    }

    .interview_box3 .inter_face img {
        width: 100%;
        border-radius: 50%;
        box-shadow: #333333 -2px 0px 8px;
        box-shadow: #333333 2px 0px 8px;
        border: 0px;

    }

    .interview_box3 .inter_name {
        font-size: 0.70rem;
        color: #333333;
        height: 7px;
        text-align: center;
        margin-top: 5%;
    }

    .interview_box3 .inter_text {
        font-size: 0.647rem;
        color: #7d7c7c;
        text-align: center;
        margin-top: 5%;
    }

    .interview_box3 .inter_xq {
        color: #333333;
        text-align: center;
        margin-top: 15%;
        font-size: 0.88rem;
    }

    .interview_box3 .inter_an {
        width: 78%;
        margin: 0 auto;
        overflow: hidden;
        margin-top: 22%;
        position: absolute;
        left: 50%;
        margin-left: -39%;
    }

    .interview_box3 .inter_code {
        float: left;
        width: 23.5%;
        text-align: right;
        margin-left: 20%;
    }

    .interview_box3 .inter_code img {
        height: 200%;
    }

    .interview_box3 .inter_zw {
        float: left;
        width: 43%;
        text-align: center;
        margin-left: 45%;
    }

    .interview_box3 .inter_zw img {
        width: 34%;
        margin-top: 2%;
    }

    .interview_box3 .inter_zw p {
        color: #666666;
        font-size: 0.47rem;
        font-weight: bold;
        margin-left: 4%;
        margin-top: -4%;
    }

    .interview_box3 .inter_tj {
        width: 100%;
        position: absolute;
        bottom: 38%;
        text-align: center;
        left: auto;
        margin: 0;
    }

    .interview_box3 .inter_tj p {
        font-style: oblique;
    }

    .interview_box3 .inter_right {
        color: #333333;
        font-size: 0.8rem;
        display: inline;
        margin: 0;
    }

    .interview_box3 .inter_left {
        color: #7d7c7c;
        line-height: 1.3rem;
        display: inline;
        margin: 0;
    }

    .interview_box4 .inter_pic {
        margin-top: 2%;
        margin-left: auto;
        margin-right: auto;
        background: url("../../dist/interview/4.jpg") no-repeat;
        background-size: 100%;
        width: 78%;
        position: relative;
        box-shadow: #ffd3f4 0px 0px 0px;

    }

    .interview_box4 .inter_face {
        border-radius: 50%;
        width: 17%;
        margin: 0 auto;
        padding-top: 53.5%;
        font-size: 0;
    }

    .interview_box4 .inter_face img {
        width: 100%;
        border: 0;
        border-radius: 50%;
        box-shadow: #ffd3f4 0px 0px 0px;
    }

    .interview_box4 .inter_name {
        font-size: 0.70rem;
        color: #2e4d3c;
        height: 7px;
        text-align: center;
        margin-top: 2%;
    }

    .interview_box4 .inter_text {
        font-size: 0.647rem;
        color: #2e4d3c;

        text-align: center;
        margin-top: 5%;
    }

    .interview_box4 .inter_xq {
        text-indent: -9999px
    }

    .interview_box4 .inter_xq:after {
        content: " ";
        display: block;
        height: 8.5%;
        width: 36%;
        background: url("../../dist/interview/xqzs.png") no-repeat;
        position: absolute;
        text-align: center;
        margin-left: -18%;
        left: 50%;
        margin-top: -10%;
        background-size: 100%;
    }

    .interview_box4 .inter_xq {
        color: #2e4d3c;
        text-align: center;
        margin-top: 9%;
        font-size: 1.2rem;
    }

    .interview_box4 .inter_an {
        width: 78%;
        overflow: hidden;
        margin-top: 20%;
        position: absolute;
        left: 50%;
        margin-left: -39%;
    }

    .interview_box4 .inter_code {
        float: left;
        width: 25%;
        margin-left: 20%;
    }

    .interview_box4 .inter_code img {
        height: 200%;
    }

    .interview_box4 .inter_zw {
        float: left;
        text-align: center;
        width: 36%;
        margin-left: 50%;
    }

    .interview_box4 .inter_zw img {
        width: 45%;
        margin: 0;
    }

    .interview_box4 .inter_zw p {
        color: #333333;
        font-size: 0.47rem;
        font-weight: bold;
        margin-top: -2%;
    }

    .interview_box4 .inter_tj {
        width: 100%;
        text-align: center;
        position: absolute;
        bottom: 6%;
        left: auto;
        margin: 0;
    }

    .interview_box4 .inter_tj p {
        font-style: oblique;

    }

    .interview_box4 .inter_right {
        color: #333333;
        margin: 0;
        font-size: 0.64rem;
        display: inline;
    }

    .interview_box4 .inter_left {
        display: inline;
        color: #333333;
        margin: 0;
        font-size: 0.588rem;

    }

    .interview_box6 .inter_pic {
        margin-top: 2%;
        margin-left: auto;
        margin-right: auto;
        background: url("../../dist/interview/6.jpg") no-repeat;
        background-size: 100%;
        width: 78%;
        position: relative;
        box-shadow: #ffd3f4 0px 0px 0px;

    }

    .interview_box6 .inter_face {
        border-radius: 50%;
        width: 18%;
        margin: 0 auto;
        padding-top: 20.5%;
        font-size: 0;

    }

    .interview_box6 .inter_face img {
        width: 100%;
        border-radius: 50%;
        box-shadow: #333333 -2px 0px 8px;
        box-shadow: #333333 2px 0px 8px;
        border: 2px solid #ffffff;

    }

    .interview_box6 .inter_name {
        font-size: 12px;
        color: #ffffff;
        height: 7px;
        text-align: center;
        margin-top: 1%;
    }

    .interview_box6 .inter_text {
        font-size: 11px;
        color: #ffffff;
        height: 11px;
        text-align: center;
        margin-top: 5%;
    }

    .interview_box6 .inter_xq {
        color: #ffffff;
        text-align: center;
        margin-top: 19.5%;
        font-size: 0.88rem;
    }

    .interview_box6 .inter_an {
        width: 78%;

        overflow: hidden;
        margin-top: 13%;
        position: absolute;
        left: 50%;
        margin-left: -39%;
    }

    .interview_box6 .inter_code {
        float: left;
        width: 22%;
        margin-left: 21%;
    }

    .interview_box6 .inter_code img {
        height: 200%;
    }

    .interview_box6 .inter_zw {
        float: left;
        text-align: center;
        width: 40%;
        margin-left: 46%;

    }

    .interview_box6 .inter_zw img {
        width: 38%;
        margin-top: 0;
    }

    .interview_box6 .inter_zw p {
        color: #7880a2;
        font-size: 0.47rem;
        font-weight: normal;
        margin-top: -5%;
    }

    .interview_box6 .inter_tj {
        width: 100%;
        position: absolute;
        bottom: 12%;
        left: auto;
        margin: 0;
        text-align: center;
    }

    .interview_box6 .inter_tj p {
        font-style: oblique;
    }

    .interview_box6 .inter_right {
        display: inline;
        color: #7980a2;
        font-size: 0.8rem;
        margin: 0;
    }

    .interview_box6 .inter_left {
        display: inline;
        color: #7980a2;
        line-height: normal;
        margin: 0;
    }

    .interview_box7 .inter_pic {
        margin-top: 2%;
        margin-left: auto;
        margin-right: auto;
        background: url("../../dist/interview/7.jpg") no-repeat;
        background-size: 100%;
        width: 78%;
        position: relative;
        box-shadow: #ffd3f4 0px 0px 0px;

    }

    .interview_box7 .inter_face {
        border-radius: 50%;
        width: 16%;
        margin: 0 auto;
        padding-top: 24.8%;
        margin-left: 42.9%;
        font-size: 0;

    }

    .interview_box7 .inter_face img {
        width: 100%;
        border-radius: 50%;
        box-shadow: #333333 -0px 0px 0px;
        box-shadow: #333333 0px 0px 0px;
        border: 0;

    }

    .interview_box7 .inter_name {
        font-size: 12px;
        color: #ffffff;
        height: 7px;
        text-align: center;
        margin-top: 6%;
    }

    .interview_box7 .inter_text {
        font-size: 11px;
        color: #ffffff;
        height: 11px;
        text-align: center;
        margin-top: 5%;
    }

    .interview_box7 .inter_xq {
        color: #ffffff;
        text-align: center;
        margin-top: 15.5%;
        font-size: 0.70rem;
    }

    .interview_box7 .inter_an {
        width: 82%;
        overflow: hidden;
        margin-top: 26%;
        position: absolute;
        left: 50%;
        margin-left: -44%;
    }

    .interview_box7 .inter_code {
        position: absolute;;
        width: auto;
        margin-left: 20%;
        z-index: 600;
        height: 100%;
        top: -50%;
    }

    .interview_box7 .inter_code img {
        height: 200%;

    }

    .interview_box7 .inter_zw {
        float: left;
        text-align: center;
        width: 40%;
        margin-left: 50%;

    }

    .interview_box7 .inter_zw img {
        width: 50%;
        margin-top: 4%;
    }

    .interview_box7 .inter_zw p {
        color: #999999;
        font-size: 0.47rem;
        font-weight: normal;
        margin-top: -3.1%;
    }

    .interview_box7 .inter_tj {
        width: 100%;
        position: absolute;
        bottom: 0%;
        left: auto;
        margin: 0;
        text-align: center;
    }

    .interview_box7 .inter_tj p {
        font-style: oblique;
    }

    .interview_box7 .inter_right {
        margin: 0px;
        display: inline;
        color: #666666;
        font-size: 0.8rem;
    }

    .interview_box7 .inter_left {
        color: #666666;
        display: inline;
        font-size: 0.647rem;
        margin: 0;
    }

    .interview_box8 .inter_pic {
        margin-top: 2%;
        margin-left: auto;
        margin-right: auto;
        background: url("../../dist/interview/8.jpg") no-repeat;
        background-size: 100%;
        width: 78%;
        position: relative;
        box-shadow: #ffd3f4 0px 0px 0px;

    }

    .interview_box8 .inter_face {
        border-radius: 50%;
        width: 17%;
        margin-left: 9.6%;
        padding-top: 4.6%;
        font-size: 0;
    }

    .interview_box8 .inter_face img {
        width: 100%;
        border: 0px;
        border-radius: 50%;
        box-shadow: #ffd3f4 0px 0px 0px;
    }

    .interview_box8 .inter_name {
        font-size: 0.705rem;
        color: #333333;
        height: 7px;
        margin: 0;
        text-align: left;
        position: absolute;
        font-weight: bold;
        left: 29.3%;
        top: 4.1%;
    }

    .interview_box8 .inter_text {
        font-size: 0.647rem;
        color: #333333;
        height: 11px;
        text-align: left;
        position: absolute;
        font-weight: bold;
        left: 29.3%;
        top: 8.1%;
        margin: 0;
    }

    .interview_box8 .inter_xq {

        text-align: center;
        margin-top: 24%;
        text-indent: -9999px;
        margin-left: 27%;
        width: 46%;
        height: 10%;
        background: url("../../dist/interview/xqzs1.png") no-repeat;
        background-size: 100%;
    }

    .interview_box8 .inter_an {
        width: 86%;
        overflow: hidden;
        margin-top: 18%;
        position: absolute;
        left: 50%;
        margin-left: -43%;
    }

    .interview_box8 .inter_code {
        float: left;
        width: 29%;
        text-align: right;
        margin-left: 18%;
    }

    .interview_box8 .inter_code img {
        height: 200%;
    }

    .interview_box8 .inter_zw {
        float: left;
        width: 40%;
        text-align: center;

    }

    .interview_box8 .inter_zw img {
        width: 50%;
        margin: 0;
    }

    .interview_box8 .inter_zw p {
        color: #666666;
        font-size: 0.47rem;
        font-weight: normal;
    }

    .interview_box8 .inter_tj {
        width: 52%;
        position: absolute;
        bottom: 57%;
        left: 50%;
        height: 5%;
        margin-left: -12.8%;
        background: url("../../dist/interview/gj.png");
        background-size: 100%;
    }

    .interview_box8 .inter_tj p {
        font-style: oblique;
        color: #d9d7d7;

    }

    .interview_box8 .inter_right {
        float: right;
        width: 53%;
        text-align: left;
        font-size: 0.8rem;
        display: none;
    }

    .interview_box8 .inter_left {
        width: 31%;
        text-align: right;
        float: left;
        line-height: 1.3rem;
        margin-left: -5%;
        display: none;
    }

    .interview_box5 .inter_pic {
        margin-top: 2%;
        margin-left: auto;
        margin-right: auto;
        background: url("../../dist/interview/5.jpg") no-repeat;
        background-size: 100%;
        width: 78%;
        position: relative;
        box-shadow: #ffd3f4 0px 0px 0px;

    }

    .interview_box5 .inter_face {
        border-radius: 50%;
        width: 17%;
        margin-left: 9%;
        padding-top: 18%;
        font-size: 0;
    }

    .interview_box5 .inter_face img {
        width: 100%;
        border: 0px;
        border-radius: 50%;
        box-shadow: #ffd3f4 0px 0px 0px;
    }

    .interview_box5 .inter_name {
        font-size: 0.705rem;
        color: #666666;
        margin: 0;
        position: absolute;
        left: 29.3%;
        top: 12.6%;
        font-weight: normal;
    }

    .interview_box5 .inter_text {
        font-size: 0.647rem;
        color: #666666;
        height: 11px;
        position: absolute;
        left: 29.3%;
        top: 19.1%;
        margin: 0;
        font-weight: normal;
    }

    .interview_box5 .inter_xq {
        color: #666666;
        position: absolute;
        left: 29.3%;
        top: 12.5%;
        font-size: 0.705rem;
        font-family: normal;
        font-weight: normal;
    }

    .interview_box5 .inter_tj {
        width: 69%;
        position: absolute;
        bottom: 63.5%;
        left: 29.3%;
        margin: 0;
    }

    .interview_box5 .inter_tj p {
        font-style: oblique;
        color: #666666;
        font-size: 0.647rem;
    }

    .interview_box5 .inter_right {
        display: inline;
        margin: 0;

    }

    .interview_box5 .inter_left {
        margin: 0;
        display: inline;

    }

    .interview_box5 .inter_an {
        width: 82%;
        overflow: hidden;
        top: 52%;
        position: absolute;
        left: 50%;
        margin-left: -44%;
    }

    .interview_box5 .inter_code {
        position: absolute;;
        width: auto;
        margin-left: 22%;
        z-index: 600;
        height: 100%;
        top: -50%;
    }

    .interview_box5 .inter_code img {
        height: 190%;

    }

    .interview_box5 .inter_zw {
        float: left;
        text-align: center;
        width: 40%;
        margin-left: 50%;

    }

    .interview_box5 .inter_zw img {
        width: 45%;
        margin: 3% 21% 0 21%;
    }

    .interview_box5 .inter_zw p {
        color: #666666;
        font-size: 0.52rem;
        font-weight: bold;
        margin-top: -1%;
        margin-left: -1%;
    }

    .interview_box9 {
        background: url("../../dist/interview/9.jpg") no-repeat;
        background-size: 100% 100%;
    }

    .interview_box9 .inter_pic {
        margin: 0;
        width: 78%;
        background: none;
        position: static;
        box-shadow: #ffd3f4 0px 0px 0px;
    }

    .interview_box9 .inter_face {
        border-radius: 50%;
        width: 12%;
        margin-top: 0;
        padding-top: 0;
        position: absolute;
        top: 26%;
        font-size: 0;
        left: 44%;
    }

    .interview_box9 .inter_face img {
        width: 100%;
        border-radius: 50%;
        box-shadow: #333333 -0px 0px 0px;
        box-shadow: #333333 0px 0px 0px;
        border: 0px;

    }

    .interview_box9 .inter_name {
        font-size: 0.648rem;
        color: #0ba98e;
        height: 7px;
        position: absolute;
        top: 30.5%;
        text-align: center;
        width: 100%;
    }

    .interview_box9 .inter_text {
        font-size: 0.57rem;
        color: #0ba98e;
        height: 11px;
        position: absolute;
        top: 33.5%;
        width: 100%;
        text-align: center;
    }

    .interview_box9 .inter_xq {
        position: absolute;
        top: 47.2%;
        margin-top: 0%;
        color: #0ba98e;;
        font-size: 0.88rem;
        width: 100%;
        text-align: center;
    }

    .interview_box9 .inter_an {
        width: 78%;
        overflow: hidden;
        position: absolute;
        top: 60%;
        left: 50%;
    }

    .interview_box9 .inter_code {
        float: left;
        width: 19%;
        margin-left: 30%;
    }

    .interview_box9 .inter_code img {
        height: 200%;
    }

    .interview_box9 .inter_zw {
        float: left;
        text-align: center;
        width: 27%;
    }

    .interview_box9 .inter_zw img {
        width: 41%;
        margin: 0;
    }

    .interview_box9 .inter_zw p {
        color: #666666;
        font-size: 0.47rem;
        font-weight: bold;
        margin-top: -4%;
    }

    .interview_box9 .inter_tj {
        width: 100%;
        position: absolute;
        top: 18%;
        text-align: center;
        left: auto;
        bottom: auto;
        margin: 0;
    }

    .interview_box9 .inter_tj p {
        font-style: normal;
        color: #d8f5f0;

    }

    .interview_box9 .inter_right {
        width: auto;
        display: inline;
        margin: 0;
        font-size: 0.70rem;
    }

    .interview_box9 .inter_left {
        margin: 0;
        width: auto;
        display: inline;
        padding: 0;
        font-size: 0.588rem;
    }

    .interview_box9 .inter_btn {
        margin: 0px 5%;
        font-size: 15px;
        position: absolute;
        bottom: 2%;
        width: 90%;
        color: #ffffff;
        background-color: #009999;
    }

    .interview_box9 .inter_btn:active {
        margin: 0px 5%;
        font-size: 15px;
        position: absolute;
        bottom: 2%;
        width: 90%;
        color: #ffffff;
        background-color: #138699;
    }

    .interview_box9 .inter_hint {
        margin: 0px 14.5%;
        position: absolute;
        bottom: 12%;
        width: 73%;

    }

    .interview_box9 .inter_hint h1 {
        font-size: 0.70rem;
        font-weight: 500;
        color: #000000;
        margin: 0;
    }

    .interview_box9 .inter_hint p {
        font-size: 0.647rem;
        color: #666666;

    }

    .interview_box9 .inter_prompt {
        margin: 0;
    }

    .interview_box10 {
        background: url("../../dist/interview/10.jpg") no-repeat;
        background-size: 100% 100%;

    }

    .interview_box10 .inter_pic {
        margin: 0;
        width: 78%;
        background: none;
        position: static;
        box-shadow: #ffd3f4 0px 0px 0px;

    }

    .interview_box10 .inter_face {
        border-radius: 50%;
        width: 17.1%;
        margin-top: 0;
        padding-top: 0;
        position: absolute;
        top: 23%;
        font-size: 0;
        left: 10%;
    }

    .interview_box10 .inter_face img {
        width: 100%;
        border: 0px;
        border-radius: 50%;
        box-shadow: #ffd3f4 0px 0px 0px;
    }

    .interview_box10 .inter_name {
        font-size: 0.705rem;
        color: #c8a17a;
        height: 7px;
        margin: 0;
        text-align: left;
        position: absolute;
        font-weight: bold;
        left: 31%;
        top: 26.8%;
    }

    .interview_box10 .inter_text {
        font-size: 0.647rem;
        color: #c8a17a;
        height: 11px;
        text-align: left;
        position: absolute;
        font-weight: bold;
        left: 31%;
        top: 30%;
        margin: 0;
    }

    .interview_box10 .inter_xq {
        color: #c8a17a;
        position: absolute;
        left: 35%;
        top: 43%;
        margin-top: 0%;
        font-size: 1.764rem;
        font-family: 华文新魏;
    }

    .interview_box10 .inter_an {
        width: 80%;
        overflow: hidden;
        top: 60%;
        position: absolute;
        left: 50%;
        margin-left: -40%;
    }

    .interview_box10 .inter_code {
        float: left;
        width: 20%;
        margin-left: 25%;
    }

    .interview_box10 .inter_code img {
        height: 200%;
    }

    .interview_box10 .inter_zw {
        float: left;
        text-align: center;
        width: 30%;
        margin-left: 50%;

    }

    .interview_box10 .inter_zw img {
        width: 42%;
        margin: 0;
    }

    .interview_box10 .inter_zw p {
        color: #666666;
        font-size: 0.47rem;
        font-weight: normal;
        margin-left: 2%;
        margin-top: -2%

    }

    .interview_box10 .inter_tj {
        width: 100%;
        position: absolute;
        top: 8.5%;
        margin: 0;
        left: auto;
        bottom: auto;
        text-align: center;
    }

    .interview_box10 .inter_tj p {
        color: #ffffff;
        font-size: 1.05rem;
        font-family: 华文新魏;
        font-style: normal;
    }

    .interview_box10 .inter_right {
        display: inline;
        margin: 0;

    }

    .interview_box10 .inter_left {
        display: inline;
        margin: 0;

    }

    .interview_box10 .inter_btn {
        margin: 0px 7%;
        font-size: 0.70rem;
        position: absolute;
        bottom: 2%;
        width: 86%;
    }

    .interview_box10 .inter_hint {
        margin: 0px 7%;
        position: absolute;
        bottom: 12%;
    }

    .interview_box10 .inter_hint h1 {
        font-size: 0.88rem;
        margin: 0;
        color: #000000;
        font-weight: 500;
    }

    .interview_box10 .inter_hint p {
        font-size: 0.705rem;
        color: #666666;
    }

    .interview_box10 .inter_prompt {
        margin-top: 6%;
    }

    .interview_box11 {
        background: url("../../dist/interview/11.jpg") no-repeat;
        background-size: 100% 100%;

    }

    .interview_box11 .inter_pic {
        margin: 0;
        width: 78%;
        background: none;
        position: static;
        box-shadow: #ffd3f4 0px 0px 0px;

    }

    .interview_box11 .inter_face {
        border-radius: 50%;
        width: 10%;
        margin-top: 0;
        padding-top: 0;
        position: absolute;
        top: 12.8%;
        font-size: 0;
        left: 19.9%;
    }

    .interview_box11 .inter_face img {
        width: 100%;
        border: 0px;
        border-radius: 50%;
        box-shadow: #ffd3f4 0px 0px 0px;
    }

    .interview_box11 .inter_name {
        font-size: 0.705rem;
        color: #ffffff;
        height: 7px;
        margin: 0;
        text-align: left;
        position: absolute;
        font-weight: bold;
        left: 32.5%;
        top: 13.8%;
    }

    .interview_box11 .inter_text {
        font-size: 0.647rem;
        color: #ffffff;
        height: 11px;
        text-align: left;
        position: absolute;
        font-weight: bold;
        left: 32.5%;
        top: 16.2%;
        margin: 0;
    }

    .interview_box11 .inter_xq {
        color: #9ed758;
        position: absolute;
        left: 35%;
        top: 27%;
        margin-top: 0%;
        font-size: 1.05rem;
        width: 23%;
        height: 5%;
        padding: 7.55% 0.5%;
        border: 10px #9ed758 solid;
        border-radius: 50%;

    }

    .interview_box11 .inter_an {
        width: 80%;
        overflow: hidden;
        top: 61.5%;
        position: absolute;
        left: 50%;
        margin-left: -40%;
    }

    .interview_box11 .inter_code {
        float: left;
        width: 18.2%;
        margin-left: 26%;
    }

    .interview_box11 .inter_code img {
        height: 175%;
    }

    .interview_box11 .inter_zw {
        float: left;
        text-align: center;
        width: 40%;
        margin-left: 43%;
    }

    .interview_box11 .inter_zw img {
        width: 27%;
        margin: 0%;
    }

    .interview_box11 .inter_zw p {
        color: #666666;
        font-size: 0.47rem;
        font-weight: normal;
        margin-top: -2%;

    }

    .interview_box11 .inter_tj {
        width: 100%;
        position: absolute;
        top: 47.5%;
        text-align: center;
        bottom: auto;
        margin: 0;
        left: auto;
    }

    .interview_box11 .inter_tj p {
        color: #999999;
        font-size: 0.645rem;
        font-family: PingFangSC-Regular;
        font-style: normal;
    }

    .interview_box11 .inter_right {
        display: inline;
        margin: 0;
    }

    .interview_box11 .inter_left {
        display: inline;
        margin: 0;
    }

    .interview_box11 .inter_btn {
        margin: 0px 7%;
        font-size: 0.70rem;
        position: absolute;
        background-color: #9ed758;
        bottom: 2%;
        width: 86%;
    }

    .interview_box11 .inter_hint {
        margin: 0px 7%;
        position: absolute;
        bottom: 10%;
    }

    .interview_box11 .inter_hint h1 {
        font-size: 0.88rem;
        margin: 2%;
        color: #ffffff;
        font-weight: 500;
    }

    .interview_box11 .inter_hint p {
        font-size: 0.7rem;
        color: #ffffff;
    }

    .interview_box11 .inter_prompt {
        margin-top: 6%;
    }

    .interview_box12 {
        background: url("../../dist/interview/12.jpg") no-repeat;
        background-size: 100% 100%;
    }

    .interview_box12 .inter_pic {
        margin: 0;
        width: 78%;
        background: none;
        position: static;
        box-shadow: #ffd3f4 0px 0px 0px;
    }

    .interview_box12 .inter_face {
        border-radius: 50%;
        width: 12%;
        margin-top: 0;
        padding-top: 0;
        position: absolute;
        top: 6.8%;
        font-size: 0;
        left: 44%;
    }

    .interview_box12 .inter_face img {
        width: 100%;
        border-radius: 50%;
        box-shadow: #333333 -0px 0px 0px;
        box-shadow: #333333 0px 0px 0px;
        border: 0px;

    }

    .interview_box12 .inter_name {
        font-size: 0.648rem;
        color: #333333;
        height: 7px;
        position: absolute;
        top: 12%;
        text-align: center;
        width: 100%;
    }

    .interview_box12 .inter_text {
        font-size: 0.57rem;
        color: #333333;
        height: 11px;
        position: absolute;
        top: 15%;
        width: 100%;
        text-align: center;
    }

    .interview_box12 .inter_xq {
        position: absolute;
        left: 22%;
        top: 48%;
        margin-top: 0%;
        color: #333333;
        font-size: 0.88rem;
        margin-left: auto;
        margin-right: auto;
        width: 54%;
        border-bottom: #f3f3f1 solid 2px;
    }

    .interview_box12 .inter_an {
        width: 78%;
        overflow: hidden;
        position: absolute;
        top: 55.5%;
        left: 50%;
    }

    .interview_box12 .inter_code {
        float: left;
        width: 19%;
        margin-left: 27%;
    }

    .interview_box12 .inter_code img {
        height: 200%;
    }

    .interview_box12 .inter_zw {
        float: left;
        text-align: center;
        width: 31%;
    }

    .interview_box12 .inter_zw img {
        width: 41.5%;
        margin-top: 5%;

    }

    .interview_box12 .inter_zw p {
        color: #666666;
        font-size: 0.47rem;
        font-weight: bold;
        margin-top: -4%;
    }

    .interview_box12 .inter_tj {
        width: 100%;
        position: absolute;
        top: 25%;
        text-align: center;
        left: auto;
        bottom: auto;
        margin: 0;
    }

    .interview_box12 .inter_tj p {
        font-style: normal;
        color: #666666;
        font-size: 0.647rem;

    }

    .interview_box12 .inter_right {
        width: auto;
        display: inline;
        margin: 0;
    }

    .interview_box12 .inter_left {
        margin: 0;
        width: auto;
        display: inline;
        padding: 0;
    }

    .interview_box12 .inter_btn {
        margin: 0px 5%;
        font-size: 15px;
        position: absolute;
        bottom: 2%;
        width: 90%;
        color: #ffffff;
        background-color: #000000;
    }

    .interview_box12 .inter_btn:active {
        margin: 0px 5%;
        font-size: 15px;
        position: absolute;
        bottom: 2%;
        width: 90%;
        color: #ffffff;
        background-color: #666666;
    }

    .interview_box12 .inter_hint {
        margin: 0px 7.5%;
        position: absolute;
        bottom: 10%;

    }

    .interview_box12 .inter_hint h1 {
        font-size: 0.88rem;
        margin: 3.24% 0;
        font-weight: 500;
        color: #000000;
    }

    .interview_box12 .inter_hint p {
        font-size: 0.705rem;
        color: #666666;

    }

    .interview_box12 .inter_prompt {
        margin-top: 6%;
    }
</style>