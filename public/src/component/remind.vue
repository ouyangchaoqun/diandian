<template id="remind">
    <div class="top20_box">
        <div class="remind">
            <span>提醒功能</span>
            <input type="checkbox" class="weui-switch switchFlag">
        </div>
        <div class="remind" @click = "showTime()"> <!--TODO-->
            <span>时间设定</span>
            <div>
                <span>{{hour}}</span>:
                <span>{{minute}}</span>
            </div>
        </div>
        <a href="" class="me_bottom weui-btn weui-btn_primary">提交</a>

    </div>
</template>
<style>
    .top20_box{
        padding-top:20px;
    }
    .remind{
        height:50px;
        padding:0 15px;
        background:#fff;
        margin-bottom: 1px;
        line-height: 50px;
    }
    .switchFlag{
        float: right;
    }
    .remind span{
        font-size: 15px;
        color:#333333;
    }
    .remind switch{
        float: right;
    }
    .remind div{
        float: right;
    }
    .remind div span{
        margin-right: 4px;
    }
</style>
<script type="text/javascript">
    import weui from "../js/weui"
    var remind={
        template:'#remind'
    };
    export default {
        data() {
            return {
                hour: '10',
                minute:"20"
            }
        },
        methods:{
            showTime:function () {
                weui.datePicker({
                    start: 1990,
                    end: new Date().getFullYear(),
                    onChange: function (result) {
                        console.log(result);
                    },
                    onConfirm: function (result) {
                        console.log(result[1].value);
                    }
                });
            }
        }
    }
    //module.exports=remind
</script>



