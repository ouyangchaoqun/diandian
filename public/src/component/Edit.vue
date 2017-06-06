<template id="Edit">
    <div>
        <div class="edit_box">
            <textarea id="edit_mood" placeholder="这一刻的心情......（8个字以上）" maxlength="140"></textarea>
            <router-link to="/positionList" class="edit_loc" @click = "getLoc()">点击获取所在位置
                <img src="../images/dz_nor.png" alt="">

            </router-link>
            <span class="edit_num">140</span>
        </div>
        <div class="edit_option">
            <div>
                <router-link to="/myCenter/myIndex/Edit/optionFrist"><img class="optionFrist" src="../images/zp_nor.png" alt=""></router-link>
                <img class="optionjt" src="../images/jt.gif" alt="" >
            </div>
            <div>
                <router-link to="/myCenter/myIndex/Edit/optionSecond"><img class="optionSecond" src="../images/bq_nor.png" alt="" style="margin-top: -0.3rem"></router-link>
                <img class="optionjt" src="../images/jt.gif" alt="" >
            </div>
            <div>
                <router-link to="/myCenter/myIndex/Edit/optionThird"><img class="optionThird" src="../images/gxtp_nor.png" alt=""></router-link>
                <img class="optionjt" src="../images/jt.gif" alt="" >
            </div>

            <div><div class="optionFourth">匿名公開</div></div>
            <div><button class="option_five weui-btn weui-btn_mini weui-btn_primary weui-btn_disabled" id= "publishBtn">发布</button></div>

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
        },
        methods:{
            getLoc:function () {
                wx.getLocation({
                    type: 'wgs84', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
                    success: function (res) {
                        var latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
                        var longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。
                        var speed = res.speed; // 速度，以米/每秒计
                        var accuracy = res.accuracy; // 位置精度
                        console.log(latitude,longitude)
                    },
                    cancel: function (res) {
                        alert('用户拒绝授权获取地理位置');
                    }
                });
               console.log('获取经纬度')
            }
        },
        mounted:function () {
            $('.edit_option div').click(function () {
                $('.optionjt').removeClass('optionjtFlag')
                $(this).children('img').addClass('optionjtFlag')
            });
            $('.optionFrist').click(function () {
                $('.optionFrist').attr('src','../images/zp_pre.png')
                $('.optionSecond').attr('src','/dist/bq_nor.png')
                $('.optionThird').attr('src','/dist/gxtp_nor.png')
            })
            $('.optionSecond').click(function () {
                $('.optionSecond').attr('src','/dist/bq_pre.png')
                $('.optionFrist').attr('src','/dist/zp_nor.png')
                $('.optionThird').attr('src','/dist/gxtp_nor.png')

            })
            $('.optionThird').click(function () {
                $('.optionThird').attr('src','/dist/gxtp_pre.png')
                $('.optionFrist').attr('src','/dist/zp_nor.png')
                $('.optionSecond').attr('src','/dist/bq_nor.png')
            })

            $('.optionFourth').click(function () {
                var fourthText =  $('.optionFourth').text()
                if(fourthText == '匿名公開'){$('.optionFourth').text('不公開')}else{$('.optionFourth').text('匿名公開')}
                console.log($('#edit_mood').val().length)
            });
            var publishLen = $('#edit_mood').val().length
            console.log(publishLen)

            $('#publishBtn').click(function () {
                var Edit_mood = $('#edit_mood').val()
                console.log(111)
            })

        }
    }




</script>
<style>
.edit_box{
    height:19.5rem;
    background: #ffffff;
    width: 100%;
    position: relative;
    padding:1.6rem 0 1rem 0;
    margin-bottom: 1px;
}
#edit_mood{
    height:16.6rem;
    width: 90%;
    outline: none;
    width:90%;
    resize: none;
    border:0;
    margin: 0 auto;
    display: block;
    color: #999999;
    font-size: 1.5rem;
    overflow: hidden;
}
    .edit_loc{
        width: 131px;
        height: 26px;
        border:1px solid #dcdcdc;
        font-size: 12px;
        color: #949292;
        line-height: 26px;
        position: absolute;
        bottom:1rem;
        left:1.5rem;
        padding-right:10px;
        border-radius: 15px;
        display: block;
    }
    .edit_loc img{
        float: left;
        display: block;
        width: 14px;
        margin-top: 4px;
        margin-left:10px;
        margin-right:5px;
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
        position: relative;
    }

    .edit_option img{
        display: block;
        margin: 0 auto;
    }
    .optionFrist{
        width:2rem;
    }
    .optionSecond{
        width:2.4rem;
    }
    .optionThird{
        width: 2.3rem;
    }
    .optionFourth{
        width:7rem;
        font-size: 12px;
        color: #999999;
        border:1px solid #dcdcdc;
        margin: 0 auto;
        text-align: center;
        height:2rem;
        line-height: 2rem;
        border-radius: 8px;
    }
    .option_five{
        margin-top: -0.3rem;
        height:2.5rem;
        width:6rem;
        margin-left: 2rem;
    }
     .edit_option .optionjt{
         position: absolute;
         left:50%;
         margin-left:-1.2rem;
         width:2.4rem;
         bottom:-2px;
        visibility: hidden;
    }
    .edit_option .optionjtFlag{
        visibility: visible;
    }





</style>



