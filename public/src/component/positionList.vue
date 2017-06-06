<template id="positionList">
    <div class="positionList_box">
        <ul>
            <li class="locList">
                <div class="noShow">不显示位置</div>
                <i class="weui-icon-success-no-circle loc_checked"></i>
            </li>
            <li class="locList">
                <div class="city">杭州</div>
                <i class="weui-icon-success-no-circle"></i>
            </li>
            <li class="locList">
                <div>
                    <p class="address">聚光中心</p>
                    <p class="addressDetails">浙江省杭州市滨江区阡陌路</p>
                </div>
                <i class="weui-icon-success-no-circle"></i>
            </li>
        </ul>
    </div>
</template>
<style>
    .positionList_box{
        overflow-y: auto;
    }
    .locList{
        height:50px;
        margin-bottom: 1px;
        background: #ffffff;
        line-height: 50px;
        padding:0 10px;
    }
    .locList div{
        float: left;
    }
    .locList i{
        float: right;
        margin-top:13px;
        display: none;
    }
    .locList .loc_checked{
        display: block;
    }
    .noShow{
        font-size: 14px;
        color: #516591;
    }
    .city{
        font-size: 14px;
        color: #333333;
    }
    .address{
        font-size: 14px;
        color: #333333;
        line-height: 35px;
    }
    .addressDetails{
        font-size: 12px;
        color: #999999;
        line-height: 5px;
    }
</style>
<script type="text/javascript">
    var positionList = {
        template: '#positionList'
    }
    export default {
        data() {
            return {

            }
        },
        mounted:function () {
            $('.locList').click(function () {
                $('.locList i').removeClass('loc_checked')
                $(this).children('i').addClass('loc_checked')
            })
        }
    }
</script>
