<template id="interview_1">
    <div class="interview_box">
        <div class="inter_pic">
            <div class="inter_face"><img src="../images/arder.png"/> </div>
            <div class="inter_name ">CCC</div>
            <div class="inter_text ">向/您/推/荐</div>
            <div class="inter_xq" >心情指数</div>
            <div class="inter_an">
                <div class="inter_code"><img src="../images/interview/二维码.png"/></div>
                <div class="inter_zw"><img src="../images/interview/1.png"/></div>
            </div>
        </div>
        <div>
            <div class="inter_btn"></div>
            <div calss="inter_hint"></div>
        </div>
    </div>
    </template>
<script>


    var interview_1 = {
        template: '#interview_1'
    };


    export default {

        data() {
            return {

            }
        },
        mounted:function () {
            var w= $(".inter_pic").width()
            console.log(w)
            var  h= 863 *  w/583 ;
            $(".inter_pic").height(h);
        }



    }




</script>
<style>
    .interview_box{
        background-color: #ffffff;
    }
    .inter_pic{
        margin-top: 40.5px;
        margin-left: auto;
        margin-right: auto;
        background:url("../images/interview/1.jpg") no-repeat;
        background-size: 100% ;
        width: 80%;
    }
    .inter_face{
        border-radius: 50%;
        width:15% ;
        margin: 0 auto;
        padding-top:6.9%;
        font-size: 0;
    }
    .inter_face img{ width: 100%}

    .inter_name{
        font-size: 12px;
        color: #7880a2;
        height: 7px;
        text-align: center;
        margin-top: 5%;
    }
    .inter_text{
        font-size:11px;
        color: #7880a2;
        height: 11px;
        text-align: center;
        margin-top: 5%;
    }
    .inter_xq{
        color: #7880a2;
        text-align: center;
        margin-top: 18%;
        font-size: 15px;
    }
    .inter_an{
        width: 80%;
        margin: 0 auto;
        overflow: hidden;
        margin-top: 20%;
    }
    .inter_code{
        float: left;
        width: 50%;
        text-align: right;
    }
    .inter_code img{
        width: 50%;
    }

    .inter_zw{
        float: right;
        text-align: left;
        width: 50%;
    }
    .inter_zw img{
        width: 50%;
    }
</style>