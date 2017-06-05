<template id="optionThird">
    <div class="optionThird_box">

        <div class="notOpen">此功能暂未开放</div>
    </div>
</template>

<script type="text/javascript">

    var optionThird={
        template:'#optionThird'
    };
    export default {
        data() {
            return {

            }
        }
    }

</script>
<style>
    .optionThird_box{
        position: relative;
    }
    .optionThird_box .optionjt{
        left:10rem;
    }
    .notOpen{
        height:30px;
        line-height: 30px;
        width:300px;
        background: #ffffff;
        position: absolute;
        top:150px;
        left:50%;
        margin-left:-150px;
        font-size: 14px;
        border-radius: 5px;
        text-align: center;
        color: #333333;
    }
</style>



