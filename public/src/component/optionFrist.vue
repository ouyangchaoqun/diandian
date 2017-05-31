<template id="optionFrist">
    <div class="optionFrist_box">
        <img class="optionjt" src="../images/jt.gif" alt="">
       添加图片
    </div>
</template>

<script type="text/javascript">

    var optionFrist={
        template:'#optionFrist'
    };
    export default {
        data() {
            return {

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
        left:12px;
    }
</style>



