<template id="friendsCount">
    <div >
        <div class="weui-cells friendsCount_box">
            <span class="friendsCount_cell">A</span>
            <a href="" class="weui-cell weui-cell_access">
                <div class="weui-cell__hd">
                    <img class="img_frinedsCount" src="../images/13.jpg" alt="">
                </div>
                <div class="weui-cell__bd name_friendsCount">阿龙</div>
                <div class="weui-cell__ft"></div>
            </a>
            <a href="" class="weui-cell weui-cell_access">
                <div class="weui-cell__hd">
                    <img class="img_frinedsCount" src="../images/13.jpg" alt="">
                </div>
                <div class="weui-cell__bd name_friendsCount">阿龙</div>
                <div class="weui-cell__ft"></div>
            </a>

        </div>
        <div class="weui-cells friendsCount_box">
            <span class="friendsCount_cell">A</span>
            <a href="" class="weui-cell weui-cell_access">
                <div class="weui-cell__hd">
                    <img class="img_frinedsCount" src="../images/13.jpg" alt="">
                </div>
                <div class="weui-cell__bd name_friendsCount">阿龙</div>
                <div class="weui-cell__ft"></div>
            </a>
            <a href="" class="weui-cell weui-cell_access">
                <div class="weui-cell__hd">
                    <img class="img_frinedsCount" src="../images/13.jpg" alt="">
                </div>
                <div class="weui-cell__bd name_friendsCount">阿龙</div>
                <div class="weui-cell__ft"></div>
            </a>

        </div>
        
    </div>
</template>
<style>
    .friendsCount_box{
        margin-top: 25px;
        overflow: inherit;
    }
    .friendsCount_cell{
        color: #666666;
        font-size: 14px;
        position: absolute;
        top:-22px;
        left:15px;
    }
    .img_frinedsCount{
        width:40px;
        height: 40px;
        display: block;
        border-radius: 5px;
    }
    .name_friendsCount{
        color: #333333;
        font-size: 14px;
        margin-left:13px;
    }
</style>
<script type="text/javascript">
    var friendsCount={
        template:'#friendsCount'
    }
    module.exports=friendsCount
</script>


