<template id="rankList">
    <div class="rankList_box">
        <div v-title>本周Top100</div>
        <div class="mid_line1"></div>
        <div class="mid_line2"></div>
        <div class="rankList_tabs">
            <a hidefocus="true" class="rankList_tabs_active">好友互动</a>
            <a hidefocus="true">心情记录</a>
            <a hidefocus="true">新增好友</a>
        </div>
        <div class="swiper-container rankSwiper" style="width: 100%">
            <div class="swiper-wrapper">

                <!--关心排行-->
                <div class="swiper-slide">
                    <template v-if="useCare.length>0">
                        <div class="my_rank" :class="useCare.addClassName">
                            <div class="rank_index">
                                <span v-if=" useCare[0] !=undefined&&  useCare[0].row>=0">{{useCare[0].row}}</span>
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
                                <span></span>
                            </div>
                            <div class="rank_face">
                                <img :src="user.faceUrl"/>
                            </div>
                            <div class="rank_name">{{user.nickName | shortName(7)}}</div>
                            <div class="rank_value">0次</div>
                        </div>
                    </template>
                    <ul class="bottom_margin">
                        <li class="rank_list" v-for="(rank,index) in cares" :key="index" :class="rank.addClassName" v-if="useCare[0] ==undefined||(useCare[0] !=undefined&& useCare[0].row!=index+1)">
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
                    <div class="memo">备注：好友互动数 = 好友对我心情的点赞/拥抱数 + 我对好友心情的点赞/拥抱数</div>
                </div>
                <!--活跃度排行-->
                <div class="swiper-slide ">
                    <template v-if="useActive.length>0">
                        <div class="my_rank" :class="useActive.addClassName">
                            <div class="rank_index">
                                <span v-if="useActive[0] !=undefined&&useActive[0].row>=0">{{useActive[0].row}}</span>
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
                                <span></span>
                            </div>
                            <div class="rank_face">
                                <img :src="user.faceUrl"/>
                            </div>
                            <div class="rank_name">{{user.nickName | shortName(7)}}</div>
                            <div class="rank_data">0次</div>
                        </div>
                    </template>
                    <ul class="bottom_margin">
                        <li class="rank_list" v-for="(rank,index) in activePerson" :key="index"
                            :class="rank.addClassName" v-if="useActive[0] ==undefined||(useActive[0] !=undefined&&useActive[0].row!=index+1)">
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
                <div class="swiper-slide ">
                    <template v-if="useFriend.length>0">
                        <div class="my_rank" :class="useFriend.addClassName">
                            <div class="rank_index">
                                <span class="img"></span>
                                <span v-if="useFriend[0] !=undefined&&useFriend[0].row>=0">{{useFriend[0].row}}</span>
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
                                <span></span>
                            </div>
                            <div class="rank_face">
                                <img :src="user.faceUrl"/>
                            </div>
                            <div class="rank_name">{{user.nickName | shortName(7)}}</div>
                            <div class="rank_data">0位</div>
                        </div>
                    </template>
                    <ul class="bottom_margin">
                        <li class="rank_list" v-for="(rank,index) in friends" :key="index" :class="rank.addClassName"  v-if="useFriend[0] ==undefined||(useFriend[0] !=undefined&&useFriend[0].row!=index+1)">
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
        props: {
            user: {
                type: Object
            }
        },
        filters: {
            shortName: function (value, len) {
                return xqzs.shortname(value, len);
            }
        },
        mounted: function () {
            let _this = this;
            var minHeight = $(window).height()-$('.rankList_tabs').height();
            $(".swiper-slide").css('height',minHeight)
            _this.type = this.$route.params.Type;
            _this.value = this.$route.params.Value;
            var minHeight = $(window).height()-$('.rankList_tabs').height();
            $(".rankSwiper").css('min-height',minHeight-15)
            console.log(_this.type)
            console.log(_this.value)
            _this.$nextTick(function () {
                var rankSwiper = new Swiper('.rankSwiper', {
                    speed: 500,
                    onSlideChangeStart: function () {
                        $(".rankList_tabs .rankList_tabs_active").removeClass('rankList_tabs_active');
                        $(".rankList_tabs a").eq(rankSwiper.activeIndex).addClass('rankList_tabs_active');


                    },
                    onSlideChangeEnd:function (swiper) {
                        $(".swiper-slide").each(function (i) {
                            if(swiper.activeIndex==i){
                                $(".rankSwiper").css('height',$(this).height())
                                console.log('end'+$(".rankSwiper").height())
                            }

                        })
                    }
                });
                $(".rankList_tabs a").on('click', function (e) {
                    e.preventDefault()
                    $(".rankList_tabs .rankList_tabs_active").removeClass('rankList_tabs_active');
                    $(this).addClass('rankList_tabs_active');
                    rankSwiper.slideTo($(this).index());
                });
            });

            //获取活跃排行
            _this.$http.get(web.API_PATH + "rank/get/record/mood/_userId_/100/" + _this.type + "?times=" + _this.value)
                .then(function (response) {
                    if (response.body.status == 1) {
                        //获取自己的排行
                        _this.useActive = response.body.data.userRank;
                        console.log("1111111111")
                        if (response.body.data.userRank.length > 0) {
                            // _this.useActive.addClassName = "first_" + response.body.data.userRank[0].row;
                        }

                        //获取所有排行
                        _this.activePerson = response.body.data.allUserRank;
                        for (let i = 0; i < _this.activePerson.length; i++) {
                            // _this.activePerson[i].addClassName = "first_" + (i + 1);

                            _this.$set(_this.activePerson, i, _this.activePerson[i])
                        }

                    }
                })
            //获取关注排行
            ///http://api.m.xqzs.cn/api/v1/rank/get/care/mood/1267/10/w/2017-28
            _this.$http.get(web.API_PATH + "rank/get/care/mood/_userId_/100/" + _this.type + "/" + _this.value)
                .then(function (data) {
                    if (data.body.status == 1) {
                        //获取自己的排行
                        _this.useCare = data.body.data.myCareRank;
                        console.log(data.body.data.myCareRank);
                        console.log("2222222222222")
                        if (data.body.data.myCareRank.length > 0) {
                            // _this.useCare.addClassName = "first_" + data.body.data.myCareRank[0].row;
                        }

                        //获取所有排行

                        _this.cares = data.body.data.allCareRank;
                        for (let i = 0; i < _this.cares.length; i++) {
                            //_this.cares[i].addClassName = "first_" + (i + 1);
                            _this.$set(_this.cares, i, _this.cares[i])
                        }
                        console.log(_this.cares)
                    }
                })
            //获取新增好友的排名
            //http://api.m.xqzs.cn/api/v1/rank/get/relation/1267/10/w/2017-28
            //api/v1/rank/get/relation/1267/10/w/2017-28


            _this.$http.get(web.API_PATH + "rank/get/relation/_userId_/100/" + _this.type + "/" + _this.value)
                .then(function (response) {
                    if (response.body.status == 1) {
                        //获取自己的排行
                        _this.useFriend = response.body.data.myNewFriendRank;
                        if (response.body.data.myNewFriendRank.length > 0) {
                            //_this.useFriend.addClassName = "first_" + response.body.data.myNewFriendRank[0].row;
                        }

                        //获取所有排行
                        _this.friends = response.body.data.allNewFriendRank;
                        for (let i = 0; i < _this.friends.length; i++) {
                            // _this.friends[i].addClassName = "first_" + (i + 1);

                            _this.$set(_this.friends, i, _this.friends[i])
                        }
                    }
                })

            if(_this.user)xqzs.wx.shareConfig.rank.imgUrl=_this.user;
            xqzs.wx.setConfig(_this,false,xqzs.wx.shareConfig.rank);
        },
        methods: {
            wxFaceUrl: function (faceUrl) {
                return xqzs.mood.wxface(faceUrl);
            }
        }
    }
</script>
<style>
    .swiper-slide{ overflow: auto}
    .rankList_box {
        width: 100%;
        height: 100%;
        background-color: #f4f4f8;
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

    .rankList_tabs {
        height: 50px;
        width: 100%;
        background: #f4f4f8;
        border-bottom: 1px solid #e5e5e5;

    }

    .bottom_margin {
        margin-bottom: 15px;
    }
    .memo{ font-size: 13px; color:#333;  margin: 15px;  text-align: left;}

    .rankList_tabs a {
        display: block;
        float: left;
        width: 33.33%;
        color: #a8a7a7;
        text-align: center;
        line-height: 51.5px;
        font-size: 15px;
        text-decoration: none;
    }

    .rankList_tabs a.rankList_tabs_active {
        color: #09bb07;
        position: relative
    }

    .rankList_tabs a.rankList_tabs_active:after {
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
        border-top: 15px #f4f4f8 solid;
        width: 100%;
        background-color: #ffffff;
        height: 60px;
        border-bottom: 15px #f4f4f8 solid;
        position: relative;
    }

    .rankList_box  .rank_list {
        width: 100%;
        background-color: #ffffff;
        height: 59px;
        position: relative;
    }

    .rankList_box .rank_list:after {
        content: " ";
        width: 100%;
        height: 1px;
        position: absolute;
        right: 0;
        bottom: 0;
        background-color: #eeeeee;
    }

    .rankList_box .rank_list:last-child:after {
        content: "";
        display: none;
    }

    .rankList_box .rank_index {
        font-size: 16px;
        position: absolute;
        left: 4%;
        top: 18px;
        color: #666;
        font-family: "PingFangSC-Regular";
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

    .rankList_box .rank_name {
        font-size: 14px;
        position: absolute;
        top: 20px;
        left: 27%;
    }

    .rank_data {
        font-size: 15px;
        color: #666666;
        position: absolute;
        right: 4%;
        top: 18px;
    }

    .rank_value {
        color: #666666;
        font-size: 15px;
        position: absolute;
        right: 4%;
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