<template id="friendSet">
    <div>
        <div class="friendSetList1">
            <img class="friendSetImg" src="../images/13.jpg" alt="">
            <div class="friendnickname">
                <div class="nickname">多久</div>
                <div class="Remarks">备注：</div>
            </div>
        </div>
        <router-link to="/me/friendsCount/friendSet/setName" class="setRemarks setList">
            <div>设置备注名</div>
            <img  src="../images/goto.jpg" alt="">
        </router-link>
        <div class="setList">
            <div>特别关心</div>
            <input type="checkbox" class="weui-switch setFlag">
        </div>
        <div class="setList">
            <div>不看他的心情记录</div>
            <input type="checkbox" class="weui-switch setFlag">
        </div>
        <div class="setList setListLast">
            <div>不让TA看我的心情记录</div>
            <input type="checkbox" class="weui-switch setFlag">
        </div>
    </div>
</template>

<script type="text/javascript">

    var friendSet={
        template:'#friendSet'
    };
    export default {
        data() {
            return {
                hour: '10',
                minute:"20"
            }
        }
    }
    //module.exports=remind
</script>
<style>
    .friendSetList1{
        height:60px;
        padding:10px 15px;
        background: #ffffff;
        margin-top:15px;
    }
    .friendSetImg{
        height: 60px;
        width: 60px;
        border-radius: 5px;
        float: left;
    }
    .friendnickname{
        float: left;
        margin-left:15px;
        padding-top: 5px;
    }
    .nickname{
        font-size: 15px;
        color: #333333;
        margin-bottom: 5px;
    }
    .Remarks{
        font-size: 12px;
        color: #868686;
    }
    .setList{
        height: 44px;
        background: #ffffff;
        line-height: 44px;
        color: #333333;
        font-size: 15px;
        display: block;
        padding:0 15px;
        position: relative;
        margin-top: 17px;
    }
    .setList img{
        position:absolute;
        height:20px;
        width:20px;
        display:block;
        right:20px;
        top:50%;
        margin-top:-10px;
    }
    .setListLast{
        margin-top: 1px;
    }
    .setFlag{
        position: absolute;
        right:15px;
        top:0;
        margin-top: 7px;
    }
</style>



