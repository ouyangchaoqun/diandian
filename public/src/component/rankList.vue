<template id="rankList">
    <div class="rankList_box">
        <div v-title>我的心情指数</div>
        <div class="mid_line1"></div>
        <div class="mid_line2"></div>
        <div class="tabs">
            <a href="#" hidefocus="true" class="active">活跃</a>
            <a href="#" hidefocus="true">关心</a>
            <a href="#" hidefocus="true">新增好友</a>
        </div>
        <div class="swiper-container moodCount_box">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <div class="my_rank"></div>
                    <ul>
                        <li class="rank_list" v-for="(active,index) in activePerson" :key="index" :class="active.addClassName" >
                            <div class="rank_index">
                                <span class="img"></span>
                                <span v-if="index>2">{{ index+1}}.</span>
                               </div>
                            <div class="rank_face">
                                <img src="../images/face1.png"/>
                            </div>
                            <div class="rank_name">{{active.name}}</div>
                            <div class="rank_data" >连续记录{{active.value}}条</div>
                        </li>
                    </ul>
                </div>
                <div class="swiper-slide">
                    <div class="my_rank">
                        <div class="rank_index" :class="sd.addClassName">
                            <span class="img"></span>
                            <span v-if="sd.index>2">{{sd.index}}.</span>
                        </div>
                        <div class="rank_face">
                            <img src="../images/face1.png"/>
                        </div>
                        <div class="rank_name">{{sd.name}}</div>
                        <div class="rank_value" >{{sd.value}}</div>
                        <div class="rank_img"><img src="../images/mood_icon_dianz_pre.png"/></div>
                    </div>
                    <ul>
                        <li class="rank_list" v-for="(active,index) in activePerson" :key="index" :class="active.addClassName" >
                            <div class="rank_index">
                                <span class="img"></span>
                                <span v-if="index>2">{{ index+1}}.</span>
                            </div>
                            <div class="rank_face">
                                <img src="../images/face1.png"/>
                            </div>
                            <div class="rank_name">{{active.name}}</div>
                            <div class="rank_value" >{{active.value}}</div>
                            <div class="rank_img"><img src="../images/mood_icon_dianz_pre.png"/></div>
                        </li>
                    </ul>

                </div>
                <div class="swiper-slide">
                    <div class="my_rank">123123</div>
                    <ul>
                        <li class="rank_list" v-for="(active,index) in activePerson" :key="index" :class="active.addClassName" >
                            <div class="rank_index">
                                <span class="img"></span>
                                <span v-if="index>2">{{ index+1}}.</span>
                            </div>
                            <div class="rank_face">
                                <img src="../images/face1.png"/>
                            </div>
                            <div class="rank_name">{{active.name}}</div>
                            <div class="rank_data" >新增加好友{{active.value}}人</div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script type="text/javascript">

    var rankList = {
        template: '#rankList'
    }
    export default {
        data() {
            return {
                activePerson: [
                    {name: '江湖里有位陈公子' ,value:15},
                    {name: 'xiaof',value:12},
                    {name: '赵四',value:10},
                    {name: '尼古拉斯',value:8},
                    {name: '小冯',value:7},
                    {name: '陈小刚',value:6}
                ],
                cares: [],
                friends: [],
                sd:""
            }
        },
        mounted: function () {
            let _this = this;

            for(let i =0 ; i< _this.activePerson.length; i++){
                 _this.activePerson[i].addClassName = "first_"+(i+1);
                _this.activePerson[i].index=i+1;
                _this.$set( _this.activePerson,i , _this.activePerson[i])
            }
           // _this.activePerson= _this.activePerson
                for(let i=0;i<_this.activePerson.length;i++){
                    if(_this.activePerson[i].name=='xiaof'){
                       _this.sd=_this.activePerson[i];
                    }
                    else{

                    }
                }
            console.log(_this.sd);

            var tabsSwiper = new Swiper('.moodCount_box', {
                speed: 500,
                onSlideChangeStart: function () {
                    $(".tabs .active").removeClass('active');
                    $(".tabs a").eq(tabsSwiper.activeIndex).addClass('active');
                }
            });
            $(".tabs a").on('touchstart mousedown', function (e) {
                e.preventDefault()
                $(".tabs .active").removeClass('active');
                $(this).addClass('active');
                tabsSwiper.slideTo($(this).index());
            });

            $(".tabs a").click(function (e) {
                e.preventDefault();
            });
            xqzs.wx.setConfig(_this);
        }
    }
</script>
<style>
    .rankList_box {
        width: 100%;
        height: 100%;
        background-color: #ffffff;
    }

    .tabs {
        height: 50px;
        width: 100%;
        background: #f8f8f8;
        border-bottom: 1px solid #e5e5e5;
    }

    .mid_line1 {
        position: absolute;
        width: 0.5px;
        height: 19px;
        border-left: 1px rgba(168, 167, 167, 0.37) solid;
        left: 33.33%;
        top: 16.5px;
    }

    .mid_line2 {
        left: 66.66%;
        width: 0.5px;
        height: 19px;
        border-left: 1px rgba(168, 167, 167, 0.37) solid;
        top: 16.5px;
        position: absolute;
    }

    .tabs {
        height: 50px;
        width: 100%;
        background: #f4f4f8;
        border-bottom: 1px solid #e5e5e5;

    }

    .tabs a {
        display: block;
        float: left;
        width: 33.33%;
        color: #a8a7a7;
        text-align: center;
        line-height: 51.5px;
        font-size: 15px;
        text-decoration: none;
    }

    .tabs a.active {
        color: #09bb07;
        position: relative
    }

    .tabs a.active:after {
        content: " ";
        height: 2.5px;
        overflow: hidden;
        width: 100%;
        display: block;
        position: absolute;
        background: #09bb07;
        bottom: 0;
        left: 0
    }

    .my_rank {
        border-top: 10px #f4f4f8 solid;
        width: 100%;
        background-color: #ffffff;
        height: 50px;
        border-bottom: 15px #f4f4f8 solid;
        position: relative;
    }

    .rank_list {
        width: 100%;
        background-color: #ffffff;
        height: 49px;
        position: relative;
    }
    .rank_list:after {
        content: " ";
        width: 87.4%;
        height: 1px;
        position: absolute;
        right: 0;
        bottom: 0;
        background-color:#eeeeee ;
    }
    .rank_list:last-child:after{ content: "";display: none;
    }
    .rank_index{
        font-size: 16px;
        position: absolute;
        left: 4%;
        top: 13px;
    }
    .first_1  .img {
        background: url("../images/zb_jb1.png") no-repeat;
        width: 17px;
        height: 22.5px;
        background-size:100% 100% ;
        position: absolute;
        left: 4%;
    }
    .first_2  .img {
        background: url("../images/zb_jb2.png") no-repeat;
        width: 17px;
        height: 22.5px;
        background-size:100% 100% ;
        position: absolute;
        left: 4%;
    }
    .first_3  .img {
        background: url("../images/zb_jb3.png") no-repeat;
        width: 17px;
        height: 22.5px;
        background-size:100% 100% ;
        position: absolute;
        left: 4%;
    }
    .rank_face{
        width: 29px;
        height: 29px;
        position: absolute;
        top:10px;
        left: 12.4%;
    }
    .rank_face img{
       width: 100%;
    }
    .rank_name{
        font-size: 14px;
        position: absolute;
        top:15px;
        left: 24.8%;
    }
    .rank_data{
        font-size: 14px;
        color: #666666;
        position: absolute;
        left: 71.6%;
        top:14px;
    }
    .first_1  .rank_data{
        color: #ffc800;
    }
    .first_2  .rank_data{
        color:#c3c1c1;
    }
    .first_3  .rank_data{
        color: #c27502;
    }
    .rank_value{
        font-size: 24px;
        color: #666666;
        position: absolute;
        right: 17.8%;
        top:4px;
    }
    .first_1  .rank_value{
        color: #ffc800;
    }
    .first_2  .rank_value{
        color:#c3c1c1;
    }
    .first_3  .rank_value{
        color: #c27502;
    }
    .rank_img{
        font-size: 14px;
        color: #666666;
        position: absolute;
        right: 6.8%;
        top:14px;
    }
    .rank_img img{
        width: 15px;
    }
</style>