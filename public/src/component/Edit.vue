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
            <div>
                <router-link to="/myCenter/myIndex/Edit/optionFrist"><img class="optionFrist" src="../images/zp_nor.gif" alt=""></router-link>
            </div>
            <div>
                <router-link to="/myCenter/myIndex/Edit/optionSecond"><img class="optionSecond" src="../images/bq_nor.gif" alt=""></router-link>
            </div>
            <div>
                <router-link to="/myCenter/myIndex/Edit/optionThird"><img class="optionThird" src="../images/gxtp_nor.gif" alt=""></router-link>
            </div>

            <div><img class="optionFourth" src="../images/nmgk.gif" alt=""></div>
            <div><button class="option_five weui-btn weui-btn_mini weui-btn_primary weui-btn_disabled" >发布</button></div>

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
    height:17.5rem;
    background: #ffffff;
    width: 100%;
    position: relative;
    padding:1.6rem 0 1rem 0;
    margin-bottom: 1px;
}
.edit_box textarea{
    height:16.6rem;
    width: 90%;
    outline: none;
    border:0;
    width:90%;
    resize: none;
    margin: 0 auto;
    display: block;
    color: #999999;
    font-size: 1.5rem;
}
    .edit_loc{
        width: 10rem;
        height: 2.6rem;
        border:0.1rem solid #dcdcdc;
        font-size: 12px;
        color: #949292;
        line-height: 2.6rem;
        position: absolute;
        bottom:1rem;
        left:1.5rem;
        padding-left:3rem;
        border-radius: 1.5rem;
    }
    .edit_loc img{
        position: absolute;
        display: block;
        width: 1.4rem;
        top: .4rem;
        left:1rem;
    }
    .edit_num{
        font-size: 12px;
        color: #999999;
        position: absolute;
        right:1.5rem;
        bottom: 1.5rem;
    }
    .edit_option{
        height:3.7rem;
        background: #ffffff;
        padding-top: 1.5rem;
        display: flex;
        padding-left: 1rem;
    }
    .edit_option div{
        flex-grow: 1;
    }

    .edit_option img{
        display: block;
        margin: 0 auto;
    }
    .optionFrist{
        width:1.9rem;
    }
    .optionSecond{
        width:1.9rem;
    }
    .optionThird{
        width: 1.9rem;
    }
    .optionFourth{
        width:5.58rem;
    }
    .option_five{
        margin-top: -0.3rem;
        height:2.5rem;
        width:6rem;
        margin-left: 2rem;
    }



</style>



