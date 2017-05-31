<template id="privacy">
    <div class="top20_box" >
        <div class="privacy">
            <span>不看好友的心情记录</span>
            <input type="checkbox" class="weui-switch switchFlag">
        </div>
        <div class="privacy">
            <span>不让好友看我的心情记录</span>
            <input type="checkbox" class="weui-switch switchFlag">
        </div>
    </div>
</template>
<style>
    .privacy{
        height:50px;
        background: #fff;
        margin-bottom: 1px;
        padding:0 15px;
        line-height: 50px;
    }
    .privacy span{
        font-size: 15px;
        color: #333333;
    }
</style>
<script type="text/javascript">
    var privacy={
        template:'#privacy'
    }
    /*module.exports=privacy*/
</script>


