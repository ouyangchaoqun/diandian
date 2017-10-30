<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>支付</title>
    <meta name="viewport"
          content="width=device-width,height=device-height,inital-scale=1.0,maximum-scale=1.0,user-scalable=no;">

    <script src="https://cdn.staticfile.org/jquery/3.0.0/jquery.min.js"></script>

    <script src="https://res.wx.qq.com/open/libs/weuijs/1.1.1/weui.min.js"></script>
    <script src="https://res.wx.qq.com/open/js/jweixin-1.2.0.js" type="text/javascript"></script>
</head>
<body>


<div class="check_pay_red">
    确认已经付款，点击返回
</div>
<style>
    .check_pay_red{ position: absolute; top:45%; margin-top: -22px; left:10%;font-size: 15px; text-align: center; height: 44px; width: 80%; border-radius: 22px; background: #0BB20C; line-height: 44px; color:#fff;  }
    .check_pay_red:active{background: #0b8e0c; }
</style>
<script>


    var appId = "<?=$_GET["appId"]?>";
    var timeStamp = "<?=$_GET["timeStamp"]?>";
    var nonceStr = "<?=$_GET["nonceStr"]?>";
    var package = "<?=$_GET["package"]?>";
    var signType = "<?=$_GET["signType"]?>";
    var paySign = "<?=$_GET["paySign"]?>";
    var reurl = "<?=$_GET["reurl"]?>";

    console.log(reurl);

    var pay = {

        onBridgeReady: function (config) {

            WeixinJSBridge.invoke(
                'getBrandWCPayRequest', config,
                function (res) {
                    // 使用以下方式判断前端返回,微信团队郑重提示：res.err_msg将在用户支付成功后返回    ok，但并不保证它绝对可靠。
                    if (res.err_msg == "get_brand_wcpay_request:ok") {
                        window.location.replace(reurl)
                    }else{
                        window.location.replace(reurl)
                    }
                }
            );
        },

        pay: function () {
            var _this = this;

            var config = {
                appId: appId,
                timeStamp: timeStamp,
                nonceStr: nonceStr,
                package: package,
                signType: signType,
                paySign: paySign
            };
            console.log("11111")
            console.log(config)
            if (typeof window.WeixinJSBridge == "undefined") {
                $(document).on('WeixinJSBridgeReady', function () {
                    _this.onBridgeReady(config)
                });
            } else {
                _this.onBridgeReady(config)
            }


        }

    }
    $(".check_pay_red").click(function () {
        alert(reurl)
        window.location.replace(reurl)
    })

    $(document).ready(function () {
        pay.pay();

    });


</script>


</body>
</html>