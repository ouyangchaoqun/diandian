<template id="birthday">
    <div class="birthday_box">
        <div class="top_info">
            <div class="head"><img :src="birthdayUser.faceUrl"></div>
            <div class="txt">{{birthdayTxt}} | {{constellation.name}}</div>
            <div class="txt2">{{birthdayUser.nickName}}</div>
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
        <div class="tip">点赞送生日祝福</div>
        <div class="count">{{count}}</div>
        <div class="heart_a">

        </div>
        <div class="heart_click_btn" @click="addHeart">

            <div class="btn">
                <div class="heart_btn"></div>
                <div class="text">点赞</div>
            </div>

        </div>
        <div class="bottom_tip">
            <div class="text" @click="share()" v-if="user!=null&&user.id!=birthdayUserId"><img src="user.faceUrl"/>您点了15次赞，邀请好友一起点赞</div>
            <div class="text" @click="share()" v-if="user!=null&&user.id==birthdayUserId"><span></span>分享生日的快乐</div>
            <div class="text" @click="follow()"  v-if="user==null"  ><span></span>关注心情指数，让他知道你在送祝福</div>
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
        <div id="output" class="output" style="display: none"></div>
    </div>
</template>
<style>
    .clear {
        clear: both
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
        margin-top: 7rem;
        color: #8e664d
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

    .birthday_box {
        background: #fbf6eb
    }

    .birthday_box .top_info {
        padding-top: 4.8rem;
        height: 13.2rem;
        background: url(../../dist/birthday/top_bg.png) top center no-repeat;
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
        background: url(../../dist/birthday/happy_birthday.png) no-repeat;
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
        background: url(../../dist/birthday/happy_top.png) no-repeat;
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
        margin-top: 2rem;
        font-size: 0.6470588235294118rem;
        line-height: 0.7058823529411765rem;
        color: #836f63;
    }

    .tip:before {
        content: " ";
        display: inline-block;
        background: url(../../dist/birthday/tip_img.png);
        height: 0.7058823529411765rem;
        width: 0.7058823529411765rem;
        background-size: 100% 100%;
        vertical-align: middle;
        margin-right: 4px;
    }

    .count {
        margin-top: 0.8rem;
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
        width: 3.6470588rem;
        height: 3.176470588rem;
        overflow: hidden;
        background: url(../../dist/birthday/heart_bg.png);
        background-size: 100% 100%;
        left: 50%;
        margin-left: -1.8235294rem;
        top: -1rem;
        z-index: 1;
    }

    .heart .over {
        background: url(../../dist/birthday/heart_over.png);
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
        width: 100%
    }

    .heart .wave .img1, .heart .wave .img2 {
        position: absolute;
        top: 0;
        left: 0;
        background: url(../../dist/birthday/wave.png);
        height: 4.352941176470588rem;
        width: 78235.29411764706rem
    }

    .heart .wave .img2 {
        opacity: 0.5;
        animation: wave_move2 8200s infinite;
        -webkit-animation: wave_move2 8200s infinite;;
        margin-left: -100px;
    }

    .heart .wave .img1 {
        animation: wave_move 8000s infinite;
        -webkit-animation: wave_move 8000s infinite;
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
        background: url(../../dist/birthday/click_heart.png) no-repeat;
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
        height: 1.5rem;
        width: 1.5rem
    }

    @keyframes heart_move1 {
        0% {

            opacity: 1;
            transform: translate3d(1.56rem, 10rem, 0) rotate(0deg);
            -webkit-transform: translate3d(1.56rem, 10rem, 0) rotate(0deg);

        }
        20% {
            transform: translate3d(1rem, 8rem, 0) rotate(-7deg);
            -webkit-transform: translate3d(1rem, 8rem, 0) rotate(-7deg);
        }
        40% {
            transform: translate3d(0.2rem, 6rem, 0) rotate(17deg);
            -webkit-transform: translate3d(0.2rem, 6rem, 0) rotate(17deg);
        }
        60% {
            opacity: 0.7;
            transform: translate3d(1.3rem, 4rem, 0) rotate(-4deg);
            -webkit-transform: translate3d(1.3rem, 4rem, 0) rotate(-4deg);
        }
        80% {
            transform: translate3d(0.8rem, 2rem, 0) rotate(18deg);
            -webkit-transform: translate3d(0.8rem, 2rem, 0) rotate(18deg);
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
            transform: translate3d(1.56rem, 10rem, 0) rotate(0deg);;
            -webkit-transform: translate3d(1.56rem, 10rem, 0) rotate(0deg);;
        }

        20% {
            transform: translate3d(2rem, 8rem, 0) rotate(10deg);
            -webkit-transform: translate3d(2rem, 8rem, 0) rotate(10deg);
        }
        40% {
            transform: translate3d(2.2rem, 6rem, 0) rotate(12deg);
            -webkit-transform: translate3d(2.2rem, 6rem, 0) rotate(12deg);
        }
        60% {
            opacity: 0.4;
            transform: translate3d(2.3rem, 4rem, 0) rotate(13deg);
            -webkit-transform: translate3d(2.3rem, 4rem, 0) rotate(13deg);
        }
        80% {
            transform: translate3d(2.8rem, 2rem, 0) rotate(-18deg);
            -webkit-transform: translate3d(2.8rem, 2rem, 0) rotate(-18deg);
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
            transform: translate3d(1.56rem, 10rem, 0) rotate(-4deg);
            -webkit-transform: translate3d(1.56rem, 10rem, 0) rotate(-4deg);
        }
        20% {
            transform: translate3d(1.1rem, 8rem, 0) rotate(-4deg);
            -webkit-transform: translate3d(1.1rem, 8rem, 0) rotate(-4deg);
        }
        40% {
            transform: translate3d(0.8rem, 6rem, 0) rotate(-14deg);
            -webkit-transform: translate3d(0.8rem, 6rem, 0) rotate(-14deg);
        }
        60% {
            opacity: 0.6;
            transform: translate3d(0.3rem, 4rem, 0) rotate(14deg);
            -webkit-transform: translate3d(0.3rem, 4rem, 0) rotate(14deg);
        }
        80% {
            transform: translate3d(1.7rem, 2rem, 0) rotate(-10deg);
            -webkit-transform: translate3d(1.7rem, 2rem, 0) rotate(-10deg);
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
            opacity: 1;
            transform: translate3d(1.56rem, 10rem, 0) rotate(14deg);
            -webkit-transform: translate3d(1.56rem, 10rem, 0) rotate(14deg);
        }
        20% {
            transform: translate3d(2.8rem, 8rem, 0) rotate(14deg);;
            -webkit-transform: translate3d(2.8rem, 8rem, 0) rotate(14deg);;
        }
        40% {
            transform: translate3d(3.1rem, 6rem, 0) rotate(-10deg);;
            -webkit-transform: translate3d(3.1rem, 6rem, 0) rotate(-10deg);
        }
        60% {
            opacity: 0.4;
            transform: translate3d(1.9rem, 4rem, 0) rotate(-10deg);
            -webkit-transform: translate3d(1.9rem, 4rem, 0) rotate(-10deg);
        }
        80% {
            transform: translate3d(1.4rem, 2rem, 0) rotate(5deg);
            -webkit-transform: translate3d(1.4rem, 2rem, 0) rotate(5deg);
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
            transform: translate3d(1.56rem, 10rem, 0) rotate(-14deg);
            -webkit-transform: translate3d(1.56rem, 10rem, 0) rotate(-14deg);
        }
        20% {
            transform: translate3d(1rem, 8rem, 0) rotate(-14deg);
            -webkit-transform: translate3d(1rem, 8rem, 0) rotate(-14deg);
        }
        40% {
            transform: translate3d(0.2rem, 6rem, 0) rotate(14deg);
            -webkit-transform: translate3d(0.2rem, 6rem, 0) rotate(14deg);
        }
        60% {
            opacity: 0.3;
            transform: translate3d(1.4rem, 4rem, 0) rotate(14deg);
            -webkit-transform: translate3d(1.4rem, 4rem, 0) rotate(14deg);
        }
        80% {
            transform: translate3d(1.7rem, 2rem, 0) rotate(-7deg);
            -webkit-transform: translate3d(1.7rem, 2rem, 0) rotate(-7deg);
        }

        100% {
            transform: translate3d(1.56rem, 0, 0) rotate(0deg);
            -webkit-transform: translate3d(1.56rem, 0, 0) rotate(0deg);
            opacity: 0;
            display: none;
        }
    }

    .heart_a {
        height: 10rem;
        width: 4.5rem;
        position: absolute;
        left: 50%;
        margin-left: -2.25rem;
        top: 17rem;
        z-index: 1001;
    }

    .heart_click_btn {
        height: 4.529411764705882rem;
        width: 4.529411764705882rem;
        border-radius: 50%;
        background: #dd3c3b;
        position: absolute;
        top: 26rem;
        left: 50%;
        margin-left: -2.264705882352941rem
    }

    .heart_click_btn .text {
        color: #fff;
        text-align: center;
        font-size: 0.8235294117647059rem;
    }

    .heart_btn {
        background: url(../../dist/birthday/heart_w.png) no-repeat;
        background-size: 1.2941176rem;
        height: 1.117647058823529rem;
        width: 1.294117647058824rem;
        margin: 0 auto;
        margin-top: 1rem;
    }


</style>
<script src="../js/qrcode.min.js"></script>

<script type="es6">
    let funny = {
        template: '#birthday'
    };

    export default {
        data() {
            return {
                steps: [
                    {num: 1, isReach: false},
                    {num: 99, isReach: false},
                    {num: 520, isReach: false},
                    {num: 0, isReach: false},
                    {num: 0, isReach: false},
                    {num: 999, isReach: false},
                    {num: 1314, isReach: false},
                    {num: 9999, isReach: false}
                ],
                count: 0,
                random: 1,
                per: 0,
                birthday: null,
                constellation: {},
                birthdayTxt: "",
                birthdayUser: {},
                user: null,
                birthdayUserId: 0
            }
        },


        methods: {
            follow: function () { //关注
                let _this = this;
                xqzs.weui.dialogCustom($("#follow").html())
                var mycanvas1=document.getElementsByTagName('canvas')[0];
                var img=_this.convertCanvasToImage(mycanvas1);
                $('.ewm').html('')
                $('.ewm').append(img);

            },
            convertCanvasToImage:function(canvas) {
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
                let config = {
                    title: 'hello world',
                    desc: '心情，心情指数，日子有大有小，心情能暖共知！关注本微信公众号，心情不好的说说，随时记录、查看自己和朋友的心情！',
                    link: 'http://m.xqzs.cn/',
                    imgUrl: ''
                };
                weshare.init(wx, config, function () {
                    //成功
                }, function () {

                })
            },
            addHeart: function () {
                let random = 1 + parseInt(Math.random() * 5);
                if (this.random == random) {
                    this.addHeart()
                    return;
                }

                this.count++;

                this.random = random;
                $(".heart_a").append("<div class='a_" + random + "'></div>");
                this.reach();
                $(".heart .wave").css({top: 100 - (this.per + 16) + "%"});

            },
            reach: function () {
                //遍历到达位置
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
                            last = this.count - this.steps[i - 1].num;
                            stepLength = this.steps[i].num - this.steps[i - 1].num
                        }
                        console.log(last + "reaaaa" + this.steps[i].num)

                        this.per = last / stepLength * 100;
                        break;
                    }
                }
                console.log(this.per)
            }
        },

        mounted: function () {
            let _this = this;


            //当前生日用户
            let data = '';
            if (web.guest) {


                data = "?guest=true";
                _this.$http.get(web.BASE_PATH+"/wx/index?reurl=/" ).then(function (data) {//es5写法
                    console.log("333333")
                    console.log(data)

                }, function (error) {

                });
            }
            let userId = _this.$route.query.userId;
            this.birthdayUserId = userId;
            if (userId) {
                _this.$http({
                    method: 'GET',
                    type: "json",
                    url: web.API_PATH + 'user/find/by/user/Id/' + userId + data,
                }).then(function (data) {//es5写法
                    if (data.data.data !== null) {
                        _this.birthdayUser = data.data.data;
                        this.birthday = this.birthdayUser.birthday;

                        if (_this.birthday) {
                            let date = _this.birthday.split(',');
                            _this.year = date[0];
                            _this.month = date[1];
                            _this.day = date[2];
                            _this.birthdayTxt = _this.month + "月" + _this.day + "号";
                            _this.constellation = xqzs.constellation.array[xqzs.constellation.getIndex(_this.month, _this.day)];
                        }
                        _this.reach();
                    }
                }, function (error) {
                    //error
                });

            }


            //当前用户
            _this.$http.get(web.API_PATH + 'user/find/by/user/Id/_userId_').then(function (data) {//es5写法
                console.log(data)
                if (data.body == '') {

                } else {
                    _this.user = data.data.data;
                }
            }, function (error) {
                console.log("333333")
            });

            //二维码
            _this.$http.get(web.API_PATH + 'birthday/get/qr/code/' + this.birthdayUserId).then(function (data) {//es5写法
                $("#output").empty();
                console.log(_this.toUtf8( data.body.data));
                $('#output').qrcode({width: 100, height: 100,
                    text:_this.toUtf8( data.body.data), background: "#ffffff",
                    foreground: "red"  });

            }, function (error) {

            });

            xqzs.wx.setConfig(this);
        }
    }
</script>
