<template id="setName">
    <div class="setName_box">
        <div class="setName">设置备注名</div>
        <input type="text" placeholder="添加备注名">
        <div class="me_bottom">
            <a href="" class="weui-btn weui-btn_primary"> 提交</a>
        </div>
    </div>
</template>

<script type="text/javascript">

    var setName={
        template:'#setName'
    };
    export default {
        data() {
            return {

            }
        }
    }

</script>
<style>
.setName{
    color: #909090;
    font-size: 16px;
    margin-top: 20px;
    margin-left: 15px;
}
    .setName_box input{
        height:44px;
        line-height: 44px;
        color: #333333;
        font-size: 16px;
        width:100%;
        padding-left: 15px;
    }
</style>



