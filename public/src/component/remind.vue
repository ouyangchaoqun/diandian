<template id="remind">
    <div>
        <div class="remind">
            <span>提醒功能</span>
            <input type="checkbox" class="weui-switch switchFlag">
        </div>
        <div class="remind" @click = "tap">
            <span>时间设定</span>
            <div>
                <span>{{hour}}</span>:
                <span>{{minute}}</span>
            </div>
        </div>


    </div>
</template>
<script type="text/javascript">
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
            tap:function () {
                console.log(111)
            }
        }
    }
    //module.exports=remind
</script>
<style>
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


