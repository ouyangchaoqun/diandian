
<!doctype html>
<html>
<head>
    <meta charset="UTF-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="renderer" content="webkit">

    <script  src="https://cdn.staticfile.org/jquery/3.0.0/jquery.min.js"></script>
    <style>
        *{ padding: 0; margin: 0}
        body{ background: url(src/party/036d.jpg) no-repeat #000 center top;     background-size: cover;height: 100%}
        body .main{ height: 100%; color:#333 ; position: relative; overflow: hidden}
        .main .list{   height: 80%; overflow:hidden; padding:120px 80px;}
        .main .list .img{ border: 5px solid #fff; border-radius: 50%; height: 120px; width: 120px; overflow: hidden}
        .main .list .img img{ width: 100%}
        .main .list .item { float:left; position: relative; margin-right: 30px;}
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
            10%{-webkit-transform: scale(1.5);opacity:1;}
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


        .bottom{ position: fixed; bottom:0px; left:0; width:  100%; z-index: 1000;}
        .bottom .right{ color:#fff; font-size: 13px; width: 240px; float:right; margin-right: 40px;}
        .bottom .right .btn{    float: left;
            width: 50px;
            list-style: none;
            text-align: center;
            padding: 0; border-radius: 6px; padding-top: 6px; padding-bottom: 6px; margin: 0 3px; margin-bottom: 8px;}
        .bottom .right .btn:hover{ background: rgba(0,0,0,0.4); cursor: pointer}
        .bottom .right .btn img{ display: block; width: 35px; margin: 0 auto;}

        .bottom  .middle{ background: url(src/party/opened.png) no-repeat; width: 68px; height: 29px; position: absolute; bottom:0;left:50%; margin-left: -34px; }
        .bottom  .middle.closed{background: url(src/party/chosed.png) no-repeat;}

        .bottom .down{
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
        .bottom .up{
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
        .top .left{ float:left; font-size: 35px; color:#fff; margin-left: 80px; padding-top:50px; line-height: 1}
        .top .right{ float:right;}
        .top .right img{ width: 100px; height: 100px; margin-right: 80px; margin-top:60px;}


        .ewm{ background: rgba(0,0,0,0.9); height: 0%; width: 100%; position: fixed; z-index: 1004; overflow: hidden}
        .ewm .close{ background: url(src/party/screen_icons.png) no-repeat; height: 50px; float:right;
            width:50px; cursor: pointer}
        .ewm .img{ width: 300px; height: 300px; position: absolute; left:50%; top:50%; margin-left: -150px; margin-top: -150px;}
        .ewm .img img{ width: 100%; height: 100%}
        .ewm .title { color:#fff; font-size: 40px; text-align: center; width: 100%; margin-top: 20px;}
        .messages{ width: 100%; position: absolute; z-index: 1001; top:120px; left:0; height:75%}
        .messages .item { width: 100%; position: absolute; top:75%;left:100%}
        .messages .item .img{ height: 48px; width: 48px; border-radius: 50%; border: 3px solid #fff;
            overflow: hidden; float:left; }
        .messages .item .txt{ float:left; width: 80%; color:#fff; font-size: 16px; margin-left: 12px}
        .messages .item .txt .user_name span{ font-size: 12px;}
        .messages .item .txt  .content{ font-size: 20px; font-weight: bold}
        .

    </style>
</head>
<body >
<div class="main">

    <div class="ewm">
        <div class="close"></div>
        <div class="title">关注微信，进入签到</div>

        <div class="img">
            <img src="http://7xik7r.com1.z0.glb.clouddn.com/1509417069005.jpg">
        </div>
    </div>
    <div class="top">
        <div class="left">某某活动现场</div>
        <div class="right"><img src="http://7xik7r.com1.z0.glb.clouddn.com/1509417069005.jpg"></div>
    </div>
    <div class="list">


    </div>
    <div class="cover">
        <div class="bg"></div>
        <div class="bbb"></div>
        <div class="user">
            <div class="img"><img src="src/party/0.jpg"></div>
            <div class="order">1</div>
            <div class="text">最快的的</div>
            <div class="text2">最快的的</div>
        </div>
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




    <div class="bottom">
        <div class="left"></div>
        <div class="middle"></div>
        <div class="right">

            <div class="sign btn"><img src="src/party/sign.png">签到</div>
            <div class="raffle btn"><img src="src/party/gift.png">抽奖</div>
            <div class="message btn" onclick="tm()"><img src="src/party/message.png">弹幕</div>
            <div class="full btn"  onClick="requestFullScreen(document.documentElement)"><img src="src/party/icons-002.png">全屏</div>

        </div>
    </div>

</div>



<script>
    $(".main").height($(document).height());


    var open=true;
    $(".bottom  .middle").click(function () {
        open = !open ;
        $(" .bottom .right, .bottom .left").removeClass("down").removeClass("up");
        $(" .top .right, .top .left").removeClass("down").removeClass("up");
        if(!open){

            $(this).addClass("closed")
            $(" .top .right, .top .left").addClass("up");
            $(" .bottom .right, .bottom .left").addClass("down");
        }else{
            $(this).removeClass("closed")
            $(" .top .right, .top .left").addClass("down");
            $(" .bottom .right, .bottom .left").addClass("up");
        }

    });


    var cover= $(".cover");
    setInterval(function () {
            cover.removeClass("view");
            setTimeout(function () {
                cover.addClass("view");
            },80)
            setTimeout(function () {
                $(".list").prepend('<div class="item big">' +
                    '            <div class="img"><img src="src/party/0.jpg"></div>' +
                    '            <div class="order">1</div>' +
                    '            <div class="text">最快的的</div>' +
                    '        </div>')
            },8000)
        },8000
    )



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
            $(".main").height($(document).height());
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
            $(".main").height($(document).height());
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
    })

    var messageId = 1;
    function messageGet() {
        messageId++;
        var rndTop=Math.random()*100;
        var rndSteep=Math.random()*20000+10000;
        var html = ' <div class="item" id="messageId_'+messageId+'" style="top:'+rndTop+'%;">' +
            '            <div class="img"><img src="src/party/0.jpg"></div>' +
            '            <div class="txt">' +
            '                <div class="user_name">打开了<span>10:25:55</span></div>' +
            '                <div class="content">晚上必须中奖！</div>' +
            '            </div>' +
            '        </div>';
        $(".messages").append(html)

        $("#messageId_"+messageId).stop().animate({left:"-40%"},rndSteep)

    }


    var isInterval=false;
    var interval=null;

    function  tm () {
        if(isInterval){
            clearInterval(interval);
        }else{
               interval=   setInterval(function () {
                messageGet()
            } ,300)
        }
        isInterval=!isInterval
    }
    



</script>
</body>

</html>