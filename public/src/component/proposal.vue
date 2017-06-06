<template id="proposal">
    <div class="proposal_box">
        <div class="feedback">
            <textarea placeholder="你好，我是产品经理小珺，欢迎给我们提出产品的使用感受和建议！"  ref="content" />
            <span>不少于8字!</span>
        </div>
        <div class="feedback_btn">
            <a class="weui-btn weui-btn_primary" @click="onSubmit()">提交</a>
        </div>


    </div>



</template>

<style>
    .proposal_box{
        background: #f5f5f5;
    }

    .feedback{
        padding:20px;
        font-size:15px;
        color:#999999;
        position: relative;
        height:180px;
        background:#fff;
    }

    .feedback textarea{
        height:150px;
        width:100%;
        outline: none;
        border:0;
        resize: none;
        font-size:15px;
        color:#999999;
    }
    .feedback span{
        position:absolute;
        right:20px;
        bottom:20px;
    }
    .feedback_btn{
        padding:0 20px;
        margin-top:34px;
    }
</style>
<script type="es6">

    var proposal={
        template:'#proposal'
    }

    export default {
        data() {
            return {

            }
        },
        methods:{
            onSubmit:function () {
                let _this = this;
                this.$http.put(web.API_PATH+'base/feedback/add',{"content":_this.$refs.content.value,"userId":null}).then(response => {
                    xqzs.weui.toast("success","提交成功",function () {
                        window.location.href="/#me"
                    })
                }, response => {
                    // error
                });



            }
        }
    }

</script>


