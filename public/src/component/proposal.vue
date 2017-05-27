<template id="proposal">
    <div >
        <div class="feedback">
            <textarea placeholder="你好，我是产品经理小珺，欢迎给我们提出产品的使用感受和建议！" />
            <span>不少于8字!</span>
        </div>
        <div class="feedback_btn">
            <a class="weui-btn weui-btn_primary">提交</a>
        </div>




    </div>
</template>
<style>
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
<script type="text/javascript">
    var proposal={
        template:'#proposal'
    }
    module.exports=proposal
</script>


