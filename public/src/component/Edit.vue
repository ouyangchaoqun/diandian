<template id="Edit">
    <div>
        <div class="edit_box">
            <textarea  placeholder="这一刻的心情......（8个字以上）" maxlength="140"></textarea>
            <div class="edit_loc">点击获取所在位置
                <img src="../images/dz_nor.gif" alt="">
            </div>
            <span class="edit_num">140</span>
        </div>
        <div class="edit_option">
            <router-link to="/myCenter/myIndex/Edit/optionFrist"><img class="optionFrist" src="../images/zp_nor.gif" alt=""></router-link>
            <router-link to="/myCenter/myIndex/Edit/optionSecond"><img class="optionSecond" src="../images/bq_nor.gif" alt=""></router-link>
            <router-link to="/myCenter/myIndex/Edit/optionThird"><img class="optionThird" src="../images/gxtp_nor.gif" alt=""></router-link>
            <div><img class="optionFourth" src="../images/nmgk.gif" alt=""></div>
            <div><button class="option_five weui-btn weui-btn_mini weui-btn_primary" >发布</button></div>

        </div>
        <router-view></router-view>
    </div>
</template>

<script type="text/javascript">

    var Edit={
        template:'#Edit'
    };
    export default {
        data() {
            return {

            }
        }
    }

</script>
<style>
.edit_box{
    height:210px;
    background: #ffffff;
    width: 100%;
    position: relative;
    padding:16px 0 10px 0;
    margin-bottom: 1px;
}
.edit_box textarea{
    height:200px;
    width: 90%;
    outline: none;
    border:0;
    width:90%;
    resize: none;
    margin: 0 auto;
    display: block;
    color: #999999;
    font-size: 15px;
}
    .edit_loc{
        width: 110px;
        height: 26px;
        border:1px solid #dcdcdc;
        font-size: 12px;
        color: #949292;
        line-height: 26px;
        position: absolute;
        bottom:10px;
        left:15px;
        padding-left:30px;
        border-radius: 15px;
    }
    .edit_loc img{
        position: absolute;
        display: block;
        width: 14px;
        top: 4px;
        left:10px;
    }
    .edit_num{
        font-size: 12px;
        color: #999999;
        position: absolute;
        right:15px;
        bottom: 15px;
    }
    .edit_option{
        height:37px;
        background: #ffffff;
        padding-top: 15px;
        padding-left: 20px;
        padding-right: 15px;
        position: relative;
    }

    .edit_option img{
        display: block;
        float: left;
    }
    .optionFrist{
        width:23px;
        height:20px;
        margin-right:36px;
    }
    .optionSecond{
        width:23px;
        height:23px;
        margin-right: 36px;
    }
    .optionThird{
        width: 23px;
        height:21px;
        margin-right: 36px;
    }
    .optionFourth{
        width:67px;
        height: 23px;
        margin-right:46px;
    }
    .option_five{
        height: 30px;
        width: 60px;
        font-size: 13px;
        display: block;
        line-height: 30px;
        margin-top: -5px;
    }



</style>



