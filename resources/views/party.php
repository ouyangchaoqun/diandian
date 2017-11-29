
<!doctype html>
<html>
<head>
    <meta charset="UTF-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="renderer" content="webkit">

    <script  src="https://cdn.staticfile.org/jquery/3.0.0/jquery.min.js"></script>
    <style>
        *{ padding: 0; margin: 0}
        body{ height: 100%}
        body .main{ height: 100%; color:#333 ; width: 100%; position: relative; overflow: hidden;background: url(src/party/036d.jpg) no-repeat #000 center top;     background-size: cover;}
        .main .list{   height: 70%; overflow:hidden; padding:30px 60px; margin: 40px 0; margin-top: 120px; padding-bottom: 0;}
        .main .list .img{ border: 5px solid #fff; border-radius: 50%; height: 120px; width: 120px; overflow: hidden}
        .main .list .img img{ width: 100%}
        .main .list .item { float:left; position: relative; margin-right: 30px;    height: 176px;}
        .main .list .item .order{ height: 24px; line-height: 24px; background: #fff; border-radius: 15px; text-align: center;position: absolute;top:110px;left:50%; width: 60px; margin-left: -30px;}
        .main .list .item .text{ color:#fff; text-align: center; line-height: 32px;}
        .cover{height: 100%; width: 100%; position: fixed; top:0; left:0; display: none;}
        .cover.view { display: block; -webkit-animation:vp 0.5s 8s ease forwards; -moz-animation:0.5s 8s ease forwards ;}
        .cover .bg { background: url(src/party/036d.jpg) no-repeat  center top;     background-size: cover;height: 100%; width: 100%;
            -webkit-filter: blur(10px);
            opacity: 0.9;
            -webkit-animation: pmp 8s 0s ease forwards;
        }

        .main .list .item.big{    -webkit-animation: big 4s 0s ease forwards;}
        @-webkit-keyframes big{
            0%{-webkit-transform: scale(0.1);opacity:0;}
            10%{-webkit-transform: scale(1.3);opacity:1;}
            20%{-webkit-transform: scale(1);opacity:1;}
            100%{-webkit-transform: scale(1);opacity:1;}

        }


        .cover  .bbb {-webkit-animation: vg 6.5s 1s ease forwards;
            -moz-animation: 6.5s 1s ease forwards;
            border-radius: 100%;
            top: 50%;
            left: 50%;
            margin: -350px 0 0 -350px;
            width: 700px;
            height: 700px;
            position: absolute;
            z-index: 4; background: url(src/party/bbb.png) no-repeat;
        }

        @-webkit-keyframes pmp{
            0%{opacity:0;}
            10%{opacity:0.9;}
            90%{opacity:0.9;}
            100%{opacity:0;}
        }
        @-webkit-keyframes vv{
            0%{-webkit-transform: scale(0.1);opacity:0;}
            10%{-webkit-transform: scale(1.5);opacity:1;}
            20%{-webkit-transform: scale(1);opacity:1;}
            90%{-webkit-transform: scale(1);opacity:1;}
            100%{-webkit-transform: scale(0);opacity:0;}
        }
        @-webkit-keyframes vp{
            0%{-webkit-transform: scale(1);opacity:1;}
            100%{-webkit-transform: scale(1);opacity:0;}
        }
        @-webkit-keyframes vg{
            0%{-webkit-transform: rotate(0);opacity:0;}
            10%{-webkit-transform: rotate(0);opacity:1;}
            90%{-webkit-transform: rotate(60deg);opacity:1;}
            100%{-webkit-transform: rotate(70deg);opacity:0;}
        }

        .user{ height: 400px; width: 300px; margin-left: -150px; margin-top: -200px; position: absolute; left:50%; top:50%; z-index: 5;-webkit-animation: vv 8s 0s ease forwards;}
        .user .img{ width: 280px; height: 280px; border: 10px solid #fff; border-radius: 50%; overflow: hidden}
        .user .img img{ width: 100%;}
        .user .order{ height: 28px; line-height: 28px; background: #fff; border-radius: 14px; text-align: center;position: absolute;top:268px;left:50%; width: 60px; margin-left: -30px;}
        .user .text{ color:#fff; text-align: center; line-height: 32px;}
        .user .text2{ color:#fff; text-align: center; line-height: 48px; font-size: 24px; font-weight: bold}


        .foot{ position: fixed; bottom:0px; left:0; width:  100%; z-index: 1035;}
        .foot .right{ color:#fff; font-size: 13px; width: 240px; float:right; margin-right: 40px;}
        .foot .right .btn{    float: left;
            width: 50px;
            list-style: none;
            text-align: center;
            padding: 0; border-radius: 6px; padding-top: 6px; padding-bottom: 6px; margin: 0 3px; margin-bottom: 8px;}
        .foot .right .btn:hover{ background: rgba(0,0,0,0.4); cursor: pointer}
        .foot .right .btn img{ display: block; width: 35px; margin: 0 auto;}

        .foot  .middle{ background: url(src/party/opened.png) no-repeat; width: 68px; height: 29px; position: absolute; bottom:0;left:50%; margin-left: -34px; }
        .foot  .middle.closed{background: url(src/party/chosed.png) no-repeat;}

        .foot .down{
            -webkit-animation: down 0.8s 0s ease forwards;
        }

        @keyframes down {
            0% {
                transform: translate3d(0%, 0, 0);
                -webkit-transform: translate3d(0%, 0, 0);
            }

            100% {
                transform: translate3d( 0,100%, 0);
                -webkit-transform: translate3d( 0,100%,0);
            }
        }
        .foot .up{
            -webkit-animation: up 0.8s 0s ease forwards;
        }

        @keyframes up {
            0% {
                transform: translate3d( 0,100%, 0);
                -webkit-transform: translate3d( 0,100%,0);

            }

            100% {
                transform: translate3d(0%, 0, 0);
                -webkit-transform: translate3d(0%, 0, 0);
            }
        }



        .top { position: absolute; top:0; left:0;z-index: 1000;
            width: 100%;}
        .top .down{
            -webkit-animation: tdown 0.8s 0s ease forwards;
        }

        @keyframes tdown {
            0% {
                transform: translate3d(0%, -100%, 0);
                -webkit-transform: translate3d(0%, -100%, 0);
            }

            100% {
                transform: translate3d( 0,0%, 0);
                -webkit-transform: translate3d( 0,0%,0);
            }
        }
        .top .up{
            -webkit-animation: tup 0.8s 0s ease forwards;
        }
        @keyframes tup {
            0% {
                transform: translate3d( 0,0%, 0);
                -webkit-transform: translate3d( 0,0%,0);
            }
            100% {
                transform: translate3d(0%, -100%, 0);
                -webkit-transform: translate3d(0%, -100%, 0);
            }
        }
        .top .left{ float:left; font-size: 35px; color:#fff; margin-left: 80px; padding-top:50px; line-height: 1; text-shadow:  0 2px 4px rgba(0, 0, 0, 0.4)}
        .top .right{ float:right;}
        .top .right img{ width: 100px; height: 100px; margin-right: 80px; margin-top:60px;}


        .ewm{ background: rgba(0,0,0,0.9); height: 0%; width: 100%; position: fixed; z-index: 1004; overflow: hidden}
        .ewm .close{ background: url(src/party/screen_icons.png) no-repeat; height: 50px; float:right;
            width:50px; cursor: pointer}
        .ewm .img{ width: 300px; height: 300px; position: absolute; left:50%; top:50%; margin-left: -150px; margin-top: -150px;}
        .ewm .img img{ width: 100%; height: 100%}
        .ewm .title { color:#fff; font-size: 40px; text-align: center; width: 100%; margin-top: 20px;}
        .messages{ width: 100%; position: absolute; z-index: 1001; top:120px; left:0; height:75%}
        .messages .item { width: 100%; position: absolute; top:75%;left:100%; text-shadow:     0 1px 2px rgba(0, 0, 0, 0.3)}
        .messages .item .img{ height: 48px; width: 48px; border-radius: 50%; border: 3px solid #fff;
            overflow: hidden; float:left; box-shadow: 0 0 0px 3px rgba(0,0,0,0.15) }
        .messages .item .img img{ width: 100%; height: 100%;}
        .messages .item .txt{ float:left; width: 80%; color:#fff; font-size: 16px; margin-left: 12px}
        .messages .item .txt .user_name span{ font-size: 12px;}
        .messages .item .txt  .content{ font-size: 30px; font-weight: 500}




        /*抽奖*/


        li{
            list-style: none;
        }
        .ul_box li div{ text-align: center; font-size: 20px; color:#fff; line-height: 120px; position: relative}
        .ul_box li div .nick_name{ position: absolute; bottom:0; background: rgba(255,255,255,0.8); color:#666; line-height: 24px; height: 24px; width: 100%; display: block; font-size: 14px;}
        .ul_box li{
            overflow: hidden;
            float: left;
            width:120px;
            height:120px;
            border: 5px solid #fff;
            border-radius: 5px;
            box-shadow: 0 0 5px 3px rgba(0,0,0,0.15);
            margin:5px 3.5px 0 3px;
        }
        .light{
            position: absolute;
        }
        .light li{
            width:30px;
            height:30px;
            background: url(src/party/chou/light1.png) no-repeat 0 0;
            opacity: 1;
        }
        .light1{
            left:48px;
        }
        .light2{
            bottom:0;
        }
        .light3{
            top:25px;
        }
        .light3 li{
            margin-top: 10px;
        }
        .light1 li{
            float: left;
            margin-right: 10px;
        }
        .light4{
            right:0
        }
        img{
            display: block;
        }
        .prize-Incontent img{
            width: 120px;
            height: 120px;
            border-radius: 5px;
        }
        .prize{
            width: 796px;
            height: 420px;
            background-size: 796px 420px;
            background: url(src/party/chou/prize-content1.png) no-repeat;
            box-shadow: 0 0 100px 10px rgb(105,3,0);
            position: absolute;
            top: 50%;
            left: 50%;
            margin-left: -390px;
            margin-top: -230px;
            border-radius: 30px;
        }
        .flag{
            position: absolute;
            right: -84px;
            -webkit-transform-origin: center 70%;
            -moz-transform-origin: center 70%;
            -ms-transform-origin: center 70%;
            cursor:pointer;
        }
        .flagMove{
            animation: flagMove 1s ease-in-out forwards;
            transition-property: all;
        }
        .prize-Incontent{
            width: 684px;
            height: 330px;
            margin: 0 auto;
            position: relative;
            top: 131px;
        }
        @keyframes flagMove{
            0%{

            }
            50%{
                transform: rotateX(160deg);
            }
            100%{

            }
        }
        .scroll{
            animation: scroll;
            animation-fill-mode: none;
            animation-duration: 2s;
            animation-iteration-count: infinite;
            animation-timing-function: linear;
        }
        @keyframes scroll{
            0%{
                transform: translateY(0);
            }
            100%{
                transform: translateY(-100%);
            }
        }
        .bottom{
            display: flex;
            height:40px;
            line-height: 40px;
            color:#fff;
            font-size: 16px;
            text-align: center;
            width:100%;
            position: absolute;
            bottom:-100px;
        }
        .bottom div{
            border-radius: 8px;
            background: url(src/party/chou/prize-barBg.png);
            width:30%;
            margin : 0 2%;
        }
        select{
            width:100px;
            height:28px;
            line-height: 28px;
            cursor: pointer;
            color:#666;
            font-size: 16px;
        }
        .light .disappear{
            animation: disappear 0.8s linear forwards;
            -webkit-animation:disappear 0.8s linear forwards;
            transition-property:all;
            -webkit-transition-property:all;
        }
        .light .appear{
            animation: appear 0.8s linear forwards;
            -webkit-animation:appear 0.8s linear forwards;
            transition-property:all;
            -webkit-transition-property:all;
        }
        @-webkit-keyframes disappear{
            0%{
                background:	url('src/party/chou/single-light2.png') center center no-repeat;
                opacity: 1;
            }
            100%{
                background: url('src/party/chou/light1.png') center center no-repeat;
                opacity: 1;
            }
        }
        @-moz-keyframes disappear{
            0%{
                background:	url('img/single-light2.png') center center no-repeat;
                opacity: 1;
            }
            100%{
                background: url('src/party/chou/light1.png') center center no-repeat;
                opacity: 1;
            }
        }
        @keyframes disappear{
            0%{
                background:	url('src/party/chou/single-light2.png') center center no-repeat;
                opacity: 1;
            }
            100%{
                background: url('src/party/chou/light1.png') center center no-repeat;
                opacity: 1;
            }
        }
        @-webkit-keyframes appear{
            0%{
                background:	url('src/party/chou/light1.png') center center no-repeat;
            }
            100%{
                background: url('src/party/chou/single-light2.png') center center no-repeat;
                opacity: 1;
            }
        }
        @-moz-keyframes appear{
            0%{
                background:	url('src/party/chou/light1.png') center center no-repeat;
            }
            100%{
                background: url('src/party/chou/single-light2.png') center center no-repeat;
                opacity: 1;
            }
        }
        @keyframes appear{
            0%{
                background:	url('src/party/chou/light1.png') center center no-repeat;
            }
            100%{
                background: url('src/party/chou/single-light2.png') center center no-repeat;
                opacity: 1;
            }
        }
        .chou{background: url(src/party/chou/042d.jpg) no-repeat; background-size: cover; height: 100%; width: 100%}
    </style>
</head>
<body >

<div class="ewm">
    <div class="close"></div>
    <div class="title">关注微信，进入签到</div>

    <div class="img">
        <img src="http://7xik7r.com1.z0.glb.clouddn.com/1509417069005.jpg">
    </div>
</div>
<div class="top">
    <div class="left" id="xcTitle"></div>
    <div class="right"><img src="http://7xik7r.com1.z0.glb.clouddn.com/1509417069005.jpg"></div>
</div>

<div class="main sign">
    <div class="list">
    </div>
    <div class="cover">

    </div>




    <div class="messages">
        <div class="item">
            <div class="img"><img src="src/party/0.jpg"> </div>
            <div class="txt">
                <div class="user_name">打开了<span>10:25:55</span></div>
                <div class="content">晚上必须中奖！</div>
            </div>
        </div>

    </div>






</div>

<div class="chou" style="display: none;">
    <div class="prize">
        <ul class="light light1">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
        <ul class="light light3 light4">
            <li ></li>
            <li ></li>
            <li ></li>
            <li ></li>
            <li ></li>
            <li ></li>
            <li ></li>
            <li ></li>
            <li ></li>
        </ul>
        <ul class="light light1 light2">
            <li ></li>
            <li ></li>
            <li ></li>
            <li ></li>
            <li ></li>
            <li ></li>
            <li ></li>
            <li ></li>
            <li ></li>
            <li ></li>
            <li ></li>
            <li ></li>
            <li ></li>
            <li ></li>
            <li ></li>
            <li ></li>
            <li ></li>
            <li ></li>
        </ul>
        <ul class="light light3">
            <li ></li>
            <li ></li>
            <li ></li>
            <li ></li>
            <li ></li>
            <li ></li>
            <li ></li>
            <li ></li>
            <li ></li>
        </ul>

        <img class="flag" src="src/party/chou/sideBox-hand.png" alt="" />
        <div class="prize-Incontent">
            <ul class="ul_box">
                <li>
                    <div>
                        名
                    </div>
                </li>
                <li>
                    <div>
                        单
                    </div>
                </li>
                <li>
                    <div>
                        加
                    </div>
                </li>
                <li>
                    <div>
                        载
                    </div>
                </li>
                <li>
                    <div>
                        中
                    </div>
                </li>

            </ul>
        </div>
        <div class="bottom">
            <div class="count">当前已中奖人数：<span>5</span></div>
            <div>设置奖项：
                <select name="" id="lotteryItem" onchange="showValue1(this.value)">

                </select>
            </div>
            <div>
                设置抽取人数：
                <select id="setNum" onchange="showValue2(this.value)">
                    <option value="请选择" style="display: none;">请选择</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5" selected>5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select>
            </div>
        </div>
    </div>

</div>

<div class="foot">
    <div class="left"></div>
    <div class="middle"></div>
    <div class="right">

        <div class="sign btn" onclick="sign();"><img src="src/party/sign.png">签到</div>
        <div class="raffle btn" onclick="cj();"><img src="src/party/gift.png">抽奖</div>
        <div class="message btn" onclick="tm()"><img src="src/party/message.png">弹幕</div>
        <div class="full btn"  onClick="requestFullScreen(document.documentElement)"><img src="src/party/icons-002.png">全屏</div>

    </div>
</div>
<script>
    var web={};
    web.BASE_PATH= 'http://192.168.31.55/' //"<?=env("BASE_PATH")?>";
    web.API_PATH=web.BASE_PATH+"api/";
    var xcId= '<?=$xcId?>';
    var lotteryId= '<?=$lotteryId?>';
//
    getXcDetail();
    function   getXcDetail(){
        $.ajax({
            dataType: 'JSON',
            url: web.API_PATH+"xianchang/get/xc/"+xcId,
            success: function (json) {
                $("#xcTitle").html(json.data.title)

            }
        })
    }


    resizeHeight()
    function resizeHeight() {
        $(".main,.chou").height($(document).height());
    }


    var open=true;
    $(".foot  .middle").click(function () {
        open = !open ;
        $(" .foot .right, .foot .left").removeClass("down").removeClass("up");
        $(" .top .right, .top .left").removeClass("down").removeClass("up");
        if(!open){

            $(this).addClass("closed")
            $(" .top .right, .top .left").addClass("up");
            $(" .foot .right, .foot .left").addClass("down");
        }else{
            $(this).removeClass("closed")
            $(" .top .right, .top .left").addClass("down");
            $(" .foot .right, .foot .left").addClass("up");
        }

    });


//    签到

    var cover= $(".cover");
    var signing=[];
    var signInterval=setInterval(function () {
        getSignUsers()
        ;},800);


    var isUsersFirst=true;
    var oldUserLength=0;
    var userOrder = 0;
    var isSignLogin=false;
    function getSignUsers() {
        if(isSignLogin){
            return ;
        }
        isSignLogin=true;
        $.ajax({
            dataType: 'JSON',
            url: web.API_PATH+"xianchang/get/users/"+xcId,
            success: function (json) {
                isSignLogin=false;

               if(isUsersFirst){
                   isUsersFirst=false;
                   oldUserLength=json.data.length;
                   console.log("dddddddddddddddddddddddd");
                    let arr = json.data;
                   for(var i=json.data.length-1;i>=0;i--){
                       userOrder++;
                       $(".list").prepend('<div class="item big">' +
                           '            <div class="img"><img src="' + json.data[i].faceUrl + '"></div>' +
                           '            <div class="order">' + userOrder + '</div>' +
                           '            <div class="text">' + json.data[i].nickName + '</div>' +
                           '        </div>');
                       arr.splice(i, 1);

                   }
                   signing =arr;
                 }else{
                   if(oldUserLength<json.data.length){
                       var  oldUserLength2=oldUserLength
                       oldUserLength=json.data.length;
                       console.log("oldUserLength+"+oldUserLength2);
                       var arr = json.data;
                       for(var i =0;i<oldUserLength2;i++){
                           arr.splice(0, 1)
                       }

                       console.log(arr)
                       signing = signing.concat( arr );

                   }

               }
               console.log(oldUserLength    )




            }
        })
    }
    setInterval(function () {
        if(signing.length>0){
            userOrder++;
            cover.removeClass("view");
            setTimeout(function () {
                cover.addClass("view");
                var html  =
                '<div class="bg"></div>' +
                '        <div class="bbb"></div>' +
                '        <div class="user">' +
                '            <div class="img"><img src="'+signing[0].faceUrl+'"></div>' +
                '            <div class="order">'+userOrder+'</div>' +
                '            <div class="text">'+signing[0].nickName+'</div>' +
                '            <div class="text2">'+signing[0].nickName+'</div>' +
                '        </div>';
                cover.html(html);
            },80)
            setTimeout(function () {
                $(".list").prepend('<div class="item big">' +
                    '            <div class="img"><img src="'+signing[0].faceUrl+'"></div>' +
                    '            <div class="order">'+userOrder+'</div>' +
                    '            <div class="text">'+signing[0].nickName+'</div>' +
                    '        </div>');
                signing.splice(0, 1);
            },4918)


        }

        },5000
    );

    function cj() {
        $(".main.sign").hide()
        $(".chou").show();
        clearInterval(signInterval);
    }
    cj();
    function  sign() {
        $(".main.sign").show()
        $(".chou").hide()
        signInterval=setInterval(function () {
            getSignUsers()
            ;},800);
    }

    //全屏退出全屏
    var fullScreen=false;
    function requestFullScreen(element) {
        if(fullScreen){
            exitFull();
            return ;
        }
        fullScreen=!fullScreen;
        // 判断各种浏览器，找到正确的方法
        var requestMethod = element.requestFullScreen || //W3C
            element.webkitRequestFullScreen || //Chrome等
            element.mozRequestFullScreen || //FireFox
            element.msRequestFullScreen; //IE11
        if (requestMethod) {
            requestMethod.call(element);
        }
        else if (typeof window.ActiveXObject !== "undefined") {//for Internet Explorer
            var wscript = new ActiveXObject("WScript.Shell");
            if (wscript !== null) {
                wscript.SendKeys("{F11}");
            }
        }
        setTimeout(function () {
            resizeHeight()
        },100)
    }
    function exitFull() {
        fullScreen=!fullScreen;
        // 判断各种浏览器，找到正确的方法
        var exitMethod = document.exitFullscreen || //W3C
            document.mozCancelFullScreen || //Chrome等
            document.webkitExitFullscreen || //FireFox
            document.webkitExitFullscreen; //IE11
        if (exitMethod) {
            exitMethod.call(document);
        }
        else if (typeof window.ActiveXObject !== "undefined") {//for Internet Explorer
            var wscript = new ActiveXObject("WScript.Shell");
            if (wscript !== null) {
                wscript.SendKeys("{F11}");
            }
        }
        setTimeout(function () {
            resizeHeight()
        },100)
    }
    var isShowEwm=false;
    $(" .top .right img").click(function () {
        isShowEwm=!isShowEwm;
        $(".ewm").animate({height:'100%'},300)
    })
    $(".ewm .close").click(function () {
        isShowEwm=!isShowEwm;
        $(".ewm").animate({height:'0%'},300)
    });



    var cookie = {
        set: function (name, value, days) {
            var d = new Date;
            d.setTime(d.getTime() + 24 * 60 * 60 * 1000 * days);
            window.document.cookie = name + "=" + value + ";path=/;expires=" + d.toGMTString();
        },
        setNoexpires:function (name, value) {
            window.document.cookie = name + "=" + value + ";path=/;";
        },
        get: function (name) {
            var v = window.document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
            return v ? v[2] : null;
        },
        delete: function (name) {
            this.set(name, '', -1);
        }
    };


//    弹幕 2
    var messageId = cookie.get("lastmessageId")||0;
    var isLoadingMessage=false;
    function messageGet() {

        if(isLoadingMessage){
            return ;
        }
        isLoadingMessage=true;
        $.ajax({
            dataType: 'JSON',
            url: web.API_PATH+"xianchang/get/message/"+xcId+"/1/"+messageId,
            success: function (json) {
                isLoadingMessage=false;
                if(json.data.length==0){return; }
                messageId=json.data[0].messageId;
                cookie.set("lastmessageId",messageId,1);
                var rndTop=Math.random()*100;
                var rndSteep=Math.random()*20000+10000;
                var html = ' <div class="item" id="messageId_'+messageId+'" style="top:'+rndTop+'%;">' +
                    '            <div class="img"><img src="'+json.data[0].faceUrl +'"></div>' +
                    '            <div class="txt">' +
                    '                <div class="user_name">'+json.data[0].nickName+'<span>'+formatTime(json.data[0].addTime)+'</span></div>' +
                    '                <div class="content">'+json.data[0].message+'</div>' +
                    '            </div>' +
                    '        </div>';
                $(".messages").append(html)

                $("#messageId_"+messageId).stop().animate({left:"-40%"},rndSteep)

            }
        })
    }
    function  formatTime  ( time) {
        time = time * 1000;
        var now = new Date(time);
        var year = now.getFullYear();
        var month = now.getMonth() + 1;
        var date = now.getDate();
        var hour = now.getHours();
        var minute = now.getMinutes();
        var second = now.getSeconds();
        if (month < 10) month = "0" + month;
        if (date < 10) date = "0" + date;
        if (hour < 10) hour = "0" + hour;
        if (minute < 10) minute = "0" + minute;
        if (second < 10) second = "0" + second;
        return  hour + ":" + minute + ":" + second;
    }

    var isInterval=false;
    var interval=null;

    function  tm () {
        if(isInterval){
            clearInterval(interval);
        }else{
               interval=   setInterval(function () {
                messageGet()
            } ,1000)
        }
        isInterval=!isInterval
    }





    //获取抽奖详情
    var prices=[];
    var pricesIndex=0;
    $.ajax({
        dataType: 'JSON',
        url: web.API_PATH+"xianchang/get/lottery/"+lotteryId,
        success: function (json) {
            prices = json.data.prices;
            for(var i=0;i<prices.length;i++){
                $("#lotteryItem").append('<option value="'+i+'">'+ prices[i].prize +'</option>');
            }
            if(prices.length>0){
                getCanLotteryUsers(prices[pricesIndex].lotteryItemId)
            }
        }
    });
    //获取可以抽奖用户
    var canLotteryUsers=[];
    function getCanLotteryUsers(lotteryItemId,callback) {
        $.ajax({
            dataType: 'JSON',
            url: web.API_PATH+"xianchang/get/lottery/users/"+xcId+"/"+lotteryId+"/"+lotteryItemId,
            success: function (json) {
                canLotteryUsers=json.data;
                if(canLotteryUsers.length<5){
                    showValue2(5)
                }
                initCanLotteryUsers(callback);
            }
        })
    }

    function  initCanLotteryUsers(callback) {

        $(".prize-Incontent li div").each(function (i) {
            $(this).html('')
            for(var j=i;j<canLotteryUsers.length;j++){
                $(this).append('<img src="'+canLotteryUsers[j].faceUrl+'" />')
            }
            for(var k =0;k<i;k++){
                $(this).append('<img src="'+canLotteryUsers[k].faceUrl+'" />')
            }
        });
        if(typeof (callback)=='function'){
            callback()
        }
    }

    



    //    抽奖
    //console.log(parseInt(Math.random()*54))
    setInterval(function(){
        $('.light li').eq(parseInt(Math.random()*54)).addClass('appear')
        $('.light li').eq(parseInt(Math.random()*54)).removeClass('appear')
        $('.light li').eq(parseInt(Math.random()*54)).addClass('disappear')
        $('.light li').eq(parseInt(Math.random()*54)).removeClass('disappear')
    },100)
    var flag = function(){
        $('.flag').addClass('flagMove')
        setTimeout(function(){
            $('.flag').removeClass('flagMove')
        },1000)
    }
    var start = function(o){
        flag();
        getCanLotteryUsers(prices[pricesIndex].lotteryItemId,function () {
            $('.prize-Incontent div').addClass('scroll')
            $("#setNum").attr("disabled","disabled");
            o.unbind('click').bind('click',function(){end(o)})
        })
    }
    

    var end = function(o){
        flag();
        o.unbind('click')
        var l = $('.prize-Incontent div').length;

        //设置中奖人
        var lotteryUsersIndex=[];

        for(let i = 0;i<l;i++){
            lotteryUsersIndex.push(getx(lotteryUsersIndex));

        }

        //
//
//        中奖上传
        var userIds='';
        for(var j=0;j<lotteryUsersIndex.length;j++){
            userIds +=canLotteryUsers[lotteryUsersIndex[j]].userId+",";
        }
        userIds =   userIds.substr(0,userIds.length-1);
        console.log(userIds)

        $.ajax({
            dataType: 'JSON',
            type:"POST",
            data:{userIds:userIds},
            url: web.API_PATH+"xianchang/post/lottery/user/"+xcId+"/"+lotteryId+"/"+prices[pricesIndex].lotteryItemId,
            success: function (json) {


                for(let i = 0;i<l;i++){
                setTimeout(function(){
                    $('.prize-Incontent div').eq(i).removeClass('scroll');
                    $('.prize-Incontent div').eq(i).html("<img src='"+canLotteryUsers[lotteryUsersIndex[i]].faceUrl+"'/>" +
                        "<span class='nick_name'>"+canLotteryUsers[lotteryUsersIndex[i]].nickName.substring(0,8)+"</span>")

                        canLotteryUsers.splice(lotteryUsersIndex[i],1);

                }, 1000*i);
                }

            }
        })


         setTimeout(function(){
            o.bind('click',function(){start(o)})
            $("#setNum").removeAttr("disabled");
        }, 1000*(l-1))
    }

    function getx(lotteryUsersIndex){
        for(var i=0;i>-1;i++){
            var flag = true;
            var num = parseInt(canLotteryUsers.length*Math.random());
            for(var i in lotteryUsersIndex){
                if(lotteryUsersIndex[i] == num){
                    flag= false;
                    break;
                }
            }
            if(flag == true){
                console.log(num);
                return num;
            }
        }
    }


    
    function showValue1(i){
        console.log("pricesIndex:"+i)
        pricesIndex=i;
        getCanLotteryUsers(prices[i].lotteryItemId)
    }

    function showValue2(i){

        if(canLotteryUsers.length<i){
            i=canLotteryUsers.length;
        }
            $('.count span').text(i)
            $('.ul_box li').remove()
            for(var j=0;j<i;j++){
                $('.ul_box').append(
                    '<li>'
                    +'<div>'
                    +'</div>'
                    +'</li>'
                );
            }
            initCanLotteryUsers();
            var w = $('.ul_box li').outerWidth(true)
            console.log(w)
            if(i<=5){
                $('.prize-Incontent').css('top','131px')
                $('.ul_box').css({'left':'50%','margin-left':-w/2*i+'px','position':'absolute'})
            }else{
                $('.prize-Incontent').css('top','80px')
                $('.ul_box').css({'position':'static','margin-left':'0'})
            }


    }
    $('.flag').click(function(){
        start($(this));
    })


</script>
</body>

</html>