<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,height=device-height,inital-scale=1.0,maximum-scale=1.0,user-scalable=no;">
  <title>心情指数</title>
  <link rel="stylesheet" type="text/css" href="https://res.wx.qq.com/open/libs/weui/1.1.2/weui.min.css"/>
  <link rel="stylesheet" type="text/css" href="src/css/common.css"/>
  <link rel="stylesheet" href="https://cdn.staticfile.org/Swiper/3.4.2/css/swiper.min.css">
  <script  src="https://cdn.staticfile.org/jquery/3.0.0/jquery.min.js"></script>
  <script src="https://cdn.staticfile.org/vue/2.2.6/vue.min.js"></script>
  <script src="https://cdn.staticfile.org/vue-resource/1.3.1/vue-resource.min.js"></script>
  <script src="https://cdn.staticfile.org/vue-router/2.4.0/vue-router.min.js"></script>
   <script src="https://cdn.staticfile.org/Swiper/3.3.1/js/swiper.jquery.min.js"></script>
   <script src="https://cdn.staticfile.org/Swiper/3.4.2/js/swiper.min.js"></script>
  <script src="https://res.wx.qq.com/open/libs/weuijs/1.0.0/weui.min.js"></script>
  <script src="https://res.wx.qq.com/open/js/jweixin-1.2.0.js" type="text/javascript"></script>
  <script src="http://map.qq.com/api/js?v=2" charset="utf-8"></script>
</head>
<body>
<div id="app">

</div>
<script>
    var web={};

    web.BASE_PATH2="<?=env("BASE_PATH")?>";
    web.BASE_PATH="<?=env("BASE_PATH")?>";
    web.API_PATH=web.BASE_PATH2+"api/";
    web.IMG_PATH="/dist/";
    console.log=function () {
        return false;
    }

</script>
<script src="/src/js/cookie.js"></script>
<script src="/src/js/xqzs.js?v=2017061201"></script>
<script src="/src/js/xqzs.face.js"></script>
<script src="/dist/build.js"></script>
</body>
</html>
