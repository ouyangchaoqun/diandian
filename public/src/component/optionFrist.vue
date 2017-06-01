<template id="optionFrist">
    <div class="optionFrist_box">
        <img class="optionjt" src="../images/jt.gif" alt="">
        <img class="optionAdd" src="../images/tjzp.gif" alt="" @click="showAction()">
        <div :class="{'weui-mask':maskFlag}" @click = "hideAction()"></div>
        <div :class="{'weui-actionsheet':true,'weui-actionsheet_toggle':activeFlag}">
            <div class="weui-actionsheet__menu">
                <div class="weui-actionsheet__cell">拍照</div>
                <div class="weui-actionsheet__cell">从手机相册选择</div>
            </div>
            <div class="weui-actionsheet__action">
                <div class="weui-actionsheet__cell" @click = "hideAction()">取消</div>
            </div>
        </div>


    </div>
</template>

<script type="text/javascript">

    var optionFrist={
        template:'#optionFrist'
    };
    export default {
        data() {
            return {
                maskFlag:false,
                activeFlag:false
            }
        },
        methods:{
            showAction:function () {
                this.maskFlag = true
                this.activeFlag = true
            },
            hideAction:function () {
                this.activeFlag = false
                this.maskFlag = false
            }
        }

    }

</script>
<style>
    .optionFrist_box{
        position: relative;
        padding-top:20px;
        padding-left:15px;
    }
    .optionjt{
        position: absolute;
        top:-10px;

    }
    .optionFrist_box .optionjt{
        left:0.8rem;
    }
    .optionAdd{
        height: 53px;
        width:53px;

    }
    .weui-actionsheet__cell{
        font-size: 16px;
        color: #545454;
        height: 49px;
        line-height: 49px;
        padding:0;
    }
    .weui-mask{
        background: rgba(0,0,0,0.4);
    }
</style>



