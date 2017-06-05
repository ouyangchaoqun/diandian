<template id="careDetail">
    <div class="careDetail_box">
        <div class="myMood_list careborder">
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
                    <span>06-03</span>
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
            <div class="show_box">
                <div class="arraw"></div>
                <div class="show_top">
                    <img class="show_img1" src="../images/list_dianz_pre.png"/>
                    <img src="../images/13.jpg" alt="">
                    <img src="../images/13.jpg" alt="">
                    <img src="../images/13.jpg" alt="">
                </div>
                <ul class="show_bottom">
                    <img class="show_img2" src="../images/comments.png"/>
                    <li>
                        <img class="show_bottom_img " src="../images/13.jpg">
                        <div class="show_bottom_text">
                            <div class="reply_author">
                                <a class="pname other" href="javascript:;">小洪</a>
                            </div>
                            <div class="reply_content">
                                <span class="text_comment">回复</span><a class="pname other" href="javascript:;">小明</a>
                                <span class="text_comment">666666666</span>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<style>
    .careborder{
        border-bottom: 1px solid #f5f5f5;
    }
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



