<template id="careDetail">
    <div class="careDetail_box">
        <div class="myMood_list">
            <img class="moodImg" src="../images/list_mood_01.png" alt="">

            <div class="moodImg_right">
                <div class="moodState">不开心</div>
                <div class="moodContext">内容文本</div>
                <div class="moodPhotoLists">
                    <div class="moodPhotoList" >
                        <img src="../images/imglist1.jpg" alt="">
                    </div>
                </div>
                <div class="moodLoc">杭州市</div>
                <div class="moodTime">
                    <span>08:10</span>
                    <span class="btn_del">删除</span>
                    <div class="moodFollow">
                        <span class="followCount">1</span>
                        <img class="followtype" src="../images/list_dianz_pre.png" alt="">
                        <span class="followCount">0</span>
                        <img class="followtype" src="../images/comments.png" style="width: 18px;margin-top: 3px;" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
    .careDetail_box{
        background: #ffffff;
        height:100%;
    }
</style>
<script type="text/javascript">
    var careDetail={
        template:'#careDetail'
    };
    export default {
        data() {
            return {

            }
        }
    }




</script>



