<template id="rankList">
    <div class="rankList_box">
        <div v-title>我的心情指数</div>
        <div class="mid_line1"></div>
        <div class="mid_line2"></div>
        <div class="tabs">
            <a hidefocus="true" class="active">好友互动</a>
            <a hidefocus="true" class="yyyyyy">心情记录</a>
            <a hidefocus="true">新增好友</a>
        </div>
        <div class="swiper-container moodCount_box" style="width: 100%">
            <div class="swiper-wrapper">

                <!--关心排行-->
                <div class="swiper-slide">
                    <template v-if="useCare.length>0">
                    <div class="my_rank" :class="useCare.addClassName">
                        <div class="rank_index">
                            <span v-if=" useCare[0].row !=undefined&&  useCare[0].row>=0">{{useCare[0].row}}</span>
                        </div>
                        <div class="rank_face">
                            <img :src="wxFaceUrl(useCare[0].faceUrl)"/>
                        </div>
                        <div class="rank_name">{{useCare[0].nickName| shortName(7)}}</div>
                        <div class="rank_value">{{useCare[0].count}}次</div>


                    </div>
                    </template>
                    <template v-if="!useCare.length>0">
                        <div class="my_rank">
                            <div class="rank_index">
                                <span ></span>
                            </div>
                            <div class="rank_face">
                                <img :src="user.faceUrl"/>
                            </div>
                            <div class="rank_name">{{user.nickName | shortName(7)}}</div>
                            <div class="rank_value">0次</div>
                        </div>
                    </template>
                    <ul>
                        <li class="rank_list" v-for="(rank,index) in cares" :key="index" :class="rank.addClassName">
                            <div class="rank_index">
                                <span v-if="index>=0">{{ index+1}}</span>
                            </div>
                            <div class="rank_face">
                                <img :src="wxFaceUrl(rank.faceUrl)"/>
                            </div>
                            <div class="rank_name">{{rank.nickName| shortName(7)}}</div>
                            <div class="rank_value">{{rank.count}}次</div>
                        </li>
                    </ul>

                </div>

                <!--活跃度排行-->
                <div class="swiper-slide">
                    <template v-if="useActive.length>0">
                        <div class="my_rank" :class="useActive.addClassName">
                            <div class="rank_index">
                                <span v-if="useActive[0].row !=undefined&&useActive[0].row>=0">{{useActive[0].row}}</span>
                            </div>
                            <div class="rank_face">
                                <img :src="wxFaceUrl(useActive[0].faceUrl)"/>
                            </div>
                            <div class="rank_name">{{useActive[0].nickName| shortName(7)}}</div>
                            <div class="rank_data">{{useActive[0].count}}次</div>
                        </div>
                    </template>
                    <template v-if="useActive.length<=0">
                        <div class="my_rank">
                            <div class="rank_index">
                                <span ></span>
                            </div>
                            <div class="rank_face">
                                <img :src="user.faceUrl"/>
                            </div>
                            <div class="rank_name">{{user.nickName | shortName(7)}}</div>
                            <div class="rank_data">0次</div>
                        </div>
                    </template>
                    <ul>
                        <li class="rank_list" v-for="(rank,index) in activePerson" :key="index"
                            :class="rank.addClassName">
                            <div class="rank_index">
                                <span v-if="index>=0">{{ index+1}}</span>
                            </div>
                            <div class="rank_face">
                                <img :src="wxFaceUrl(rank.faceUrl)"/>
                            </div>
                            <div class="rank_name">{{rank.nickName | shortName(7)}}</div>
                            <div class="rank_data">{{rank.count}}次</div>
                        </li>
                    </ul>

                </div>
                <!--新增好友排行-->
                <div class="swiper-slide">
                    <template v-if="useFriend.length>0">
                    <div class="my_rank" :class="useFriend.addClassName">
                        <div class="rank_index">
                            <span class="img"></span>
                            <span v-if="useFriend[0].row !=undefined&&useFriend[0].row>=0">{{useFriend[0].row}}</span>
                        </div>
                        <div class="rank_face">
                            <img :src="wxFaceUrl(useFriend[0].faceUrl)"/>
                        </div>
                        <div class="rank_name">{{useFriend[0].nickName| shortName(7)}}</div>
                        <div class="rank_data">{{useFriend[0].newfriend}}位</div>
                    </div>
                    </template>
                    <template v-if="useFriend.length<=0">
                        <div class="my_rank">
                            <div class="rank_index">
                                <span ></span>
                            </div>
                            <div class="rank_face">
                                <img :src="user.faceUrl"/>
                            </div>
                            <div class="rank_name">{{user.nickName | shortName(7)}}</div>
                            <div class="rank_data">0位</div>
                        </div>
                    </template>
                    <ul>
                        <li class="rank_list" v-for="(rank,index) in friends" :key="index" :class="rank.addClassName">
                            <div class="rank_index">
                                <span v-show="index>=0">{{ index+1}}</span>
                            </div>
                            <div class="rank_face">
                                <img :src="wxFaceUrl(rank.faceUrl)"/>
                            </div>
                            <div class="rank_name">{{rank.nickName| shortName(7)}}</div>
                            <div class="rank_data">{{rank.newfriend}}位</div>
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
                activePerson: [],
                cares: [],
                friends: [],
                useActive: [],
                useCare: [],
                useFriend: [],
                type: "w",
                value: "2017-28"
            }
        },
        props:{
            user:{
                type:Object
            }
        },
        filters:{
            shortName:function(value,len){
                return xqzs.shortname(value,len);
            }
        },
        mounted: function () {
            let _this = this;
            _this.type=this.$route.params.Type;
            _this.value=this.$route.params.Value;
            console.log(_this.type)
            console.log(_this.value)
            _this.$nextTick(function () {
                var tabsSwiper = new Swiper('.moodCount_box', {
                    speed: 500,
                    onSlideChangeStart: function () {
                        $(".tabs .active").removeClass('active');
                        $(".tabs a").eq(tabsSwiper.activeIndex).addClass('active');
                    }
                });
                $(".tabs a").on('touchstart mousedown', function (e) {

                    console.log("touchstart");
                    e.preventDefault()
                    $(".tabs .active").removeClass('active');
                    $(this).addClass('active');
                    tabsSwiper.slideTo($(this).index());
                });

                $(".tabs a").click(function (e) {
                    console.log("click  ");
                    e.preventDefault();
                });
            });

            //获取活跃排行
            _this.$http.get(web.API_PATH + "rank/get/record/mood/_userId_/10/" + _this.type + "?times=" + _this.value)
                    .then(function (response) {
                        if (response.body.status == 1) {
                            //获取自己的排行
                            _this.useActive = response.body.data.userRank;
                            console.log("1111111111")
                            if(response.body.data.userRank.length>0){
                                _this.useActive.addClassName = "first_" + response.body.data.userRank[0].row;
                            }

                            //获取所有排行
                            _this.activePerson = response.body.data.allUserRank;
                            for (let i = 0; i < _this.activePerson.length; i++) {
                                _this.activePerson[i].addClassName = "first_" + (i + 1);

                                _this.$set(_this.activePerson, i, _this.activePerson[i])
                            }
                        }
                    })
            //获取关注排行
            ///http://api.m.xqzs.cn/api/v1/rank/get/care/mood/1267/10/w/2017-28
            _this.$http.get(web.API_PATH + "rank/get/care/mood/_userId_/10/" + _this.type + "/" + _this.value)
                    .then(function (data) {
                        if (data.body.status == 1) {
                            //获取自己的排行
                            _this.useCare = data.body.data.myCareRank;
                            console.log(data.body.data.myCareRank);
                            console.log("2222222222222")
                            if(data.body.data.myCareRank.length>0){
                                _this.useCare.addClassName = "first_" + data.body.data.myCareRank[0].row;
                            }

                            //获取所有排行

                            _this.cares = data.body.data.allCareRank;
                            for (let i = 0; i < _this.cares.length; i++) {
                                _this.cares[i].addClassName = "first_" + (i + 1);
                                _this.$set(_this.cares, i, _this.cares[i])
                            }
                            console.log( _this.cares)
                        }
                    })
            //获取新增好友的排名
            //http://api.m.xqzs.cn/api/v1/rank/get/relation/1267/10/w/2017-28
            //api/v1/rank/get/relation/1267/10/w/2017-28


            _this.$http.get(web.API_PATH + "rank/get/relation/_userId_/10/" + _this.type + "/" + _this.value)
                    .then(function (response) {
                        if (response.body.status == 1) {
                            //获取自己的排行
                            _this.useFriend = response.body.data.myNewFriendRank;
                            console.log("3333333333")
                            if(response.body.data.myNewFriendRank.length>0){
                                _this.useFriend.addClassName = "first_" + response.body.data.myNewFriendRank[0].row;
                            }

                            //获取所有排行
                            _this.friends = response.body.data.allNewFriendRank;
                            for (let i = 0; i < _this.friends.length; i++) {
                                _this.friends[i].addClassName = "first_" + (i + 1);

                                _this.$set(_this.friends, i, _this.friends[i])
                            }
                        }
                    })



            xqzs.wx.setConfig(_this);
        },
        methods: {
            wxFaceUrl: function (faceUrl) {
                return xqzs.mood.wxface(faceUrl);
            }
        }
    }
</script>
<style>
    .rankList_box {
        width: 100%;
        height: 100%;
        background-color: #f4f4f8;
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
        height: 60px;
        border-bottom: 15px #f4f4f8 solid;
        position: relative;
    }

    .rank_list {
        width: 100%;
        background-color: #ffffff;
        height: 59px;
        position: relative;
    }

    .rank_list:after {
        content: " ";
        width: 100%;
        height: 1px;
        position: absolute;
        right: 0;
        bottom: 0;
        background-color: #eeeeee;
    }

    .rank_list:last-child:after {
        content: "";
        display: none;
    }

    .rank_index {
        font-size: 16px;
        position: absolute;
        left: 4%;
        top: 18px;
    }

    .first_1 .img {
        background: url("../images/zb_jb1.png") no-repeat;
        width: 17px;
        height: 22.5px;
        background-size: 100% 100%;
        position: absolute;
        left: 4%;
    }

    .first_2 .img {
        background: url("../images/zb_jb2.png") no-repeat;
        width: 17px;
        height: 22.5px;
        background-size: 100% 100%;
        position: absolute;
        left: 4%;
    }

    .first_3 .img {
        background: url("../images/zb_jb3.png") no-repeat;
        width: 17px;
        height: 22.5px;
        background-size: 100% 100%;
        position: absolute;
        left: 4%;
    }

    .rank_face {
        width: 40px;
        height: 40px;
        position: absolute;
        top: 10px;
        left: 12.4%;
    }

    .rank_face img {
        width: 100%;
        border-radius: 5px;
    }

    .rank_name {
        font-size: 14px;
        position: absolute;
        top: 20px;
        left: 27%;
    }

    .rank_data {
        font-size: 15px;
        color: #666666;
        position: absolute;
        right: 10%;
        top: 13px;
    }
    .rank_value {
        color: #666666;
        font-size: 15px;
        position: absolute;
        right: 10%;
        top: 18px;
    }

    .rank_img {
        font-size: 14px;
        color: #666666;
        position: absolute;
        right: 6.8%;
        top: 14px;
    }

    .rank_img img {
        width: 15px;
    }
</style>