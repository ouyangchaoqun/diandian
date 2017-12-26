<template lang="html">
<div class="weui-tabbar" id="tabs">
    <a  @click="home()" class="weui-tabbar__item tab " :class="{tabOn:tab=='home'}" >
        <span  class="calendarImg tab_icon"></span>
        <p class="weui-tabbar__label"  >首页</p>
    </a>
    <a class="weui-tabbar__item tab" @click="friendMoods()" :class="{tabOn:tab=='friendMoods'}">
        <span   class="friendsImg tab_icon"></span>
        <p class="weui-tabbar__label"  >心情说说</p>
        <span v-show="hasNewFirendMood" class="hasnew" :style="newFirendMoodStyle"></span>
    </a>

    <a   @click="more()" class="weui-tabbar__item  tab" :class="{tabOn:tab=='more'}">
        <span  class="moreImg tab_icon"></span>
        <p class="weui-tabbar__label" >健康测试</p>
        <span v-show="!isMoreHotPointClicked" class="hasnew" :style="newFirendMoodStyle" ></span>
    </a>

    <a class="weui-tabbar__item tab" @click="me()"   :class="{tabOn:tab=='me'}">
        <span  class="meImg tab_icon"></span>
        <p class="weui-tabbar__label" >我的</p>
        <span v-show="hasNewPerfect" class="hasnew" :style="newPerfectStyle"></span>
    </a>

</div>
</template>

<script type="es6">


    export default {

        data() {
            return {
                newMoodCount:0,
                LOCAL_DB_KEY_MOOD_COUNT:'local_db_key_mood_count',
                isMoreHotPointClicked:false,
                hasNewFirendMood:false,
                newFirendMoodStyle:'',
                hasNewPerfect:false,
                newPerfectStyle:'',
            }
        },
        props: {
            tab: 'home',
        },
        mounted: function () {
            let _this=this;
            _this.getFriendLastMood();
            _this.getNewPerfect();
            _this.checkMoreHot();

        },
        updated:function () {
            this.initDom()
        },
        methods: {
            initDom:function () {
                $(".weui-tabbar").height(xqzs.equipment.tabHeight())
            },
            checkMoreHot:function () {
                this.isMoreHotPointClicked=  xqzs.localdb.get(xqzs.localdb.keys.MORE_HOT_POINT_CLICKED_KEY);
                let container = $('#tabs .tab:eq(0)');
                let right = (container.width() - 32) / 2;
                this.newFirendMoodStyle = 'right:' + right + 'px';
            },
            getFriendLastMood:function () {
                let _this=this;
                let oldMoodCount=xqzs.localdb.get(_this.LOCAL_DB_KEY_MOOD_COUNT);
                _this.$http.get(web.API_PATH + "mood/query/all/page/0/1/1?lastId=0&lastAdId=0")
                    .then(function (bt) {
                        if (bt && bt.data.status == 1) {
                            let newMoodCount = bt.data.data.total;
                            _this.newMoodCount=newMoodCount;
                            if (oldMoodCount != newMoodCount) {
                                _this.hasNewFirendMood = true;
                                let container = $('#tabs .tab:eq(0)');
                                let right = (container.width() - 32) / 2;
                                _this.newFirendMoodStyle = 'right:' + right + 'px';
                            }
                        }
                    })
            },
            getNewPerfect:function () {
                var infokey = 'perfectinfo';
                if(xqzs.version.isshow(infokey)){
                    this.hasNewPerfect=true;
                    var container = $('#tabs .tab:eq(0)');
                    var right = (container.width() - 32) / 2;
                    this.newPerfectStyle = 'right:'+right+'px';
                }
            },

            home:function () {
                this.$router.push("/")
            },
            friendMoods:function () {
                let _this=this;
                xqzs.localdb.set(_this.LOCAL_DB_KEY_MOOD_COUNT,  _this.newMoodCount);
                this.hasNewFirendMood = false;

                setTimeout(function () {
                    _this.$router.push("/friendsMoods")
                },2)

            },
            me:function () {
                this.hasNewPerfect = false;
                this.$router.push("/me")
            },
            more:function () {

                this.$router.push("/more")
            }

        }
    }
</script>

<style>

    #tabs {
        z-index:10000;
        background: #fff;

        border-top:1px solid #ddd;padding-top:1px;
        overflow: hidden;
    }
    #tabs:before{  display: none }
    #tabs .weui-tabbar__label{ color:#777}
    .tab .hasnew{position:absolute;background-color:#ff0000;border-radius: 50%;top:1px;height: 8px !important;width: 8px!important;}
    .tab img{
        height: 24px;  width:24px;
    }

    .tab{position: relative; padding-top: 0 !important;}
    #tabs a .tab_icon{ background: url(../../images/tab_icons2.png) no-repeat; background-size: 116px; height: 27px; width: 29px; display: inline-block; margin-top: 1px;}
    #tabs a .tab_icon.calendarImg { background-position: 0 -29px}
    #tabs a .tab_icon.friendsImg{ background-position: -29px -29px}
    #tabs a .tab_icon.moreImg{ background-position: -58px -29px}
    #tabs a .tab_icon.meImg{ background-position: -87px -29px}

   #tabs a.tabOn span.calendarImg { background-position: 0  0px}
   #tabs a.tabOn span.friendsImg{ background-position: -29px 0px}
   #tabs a.tabOn span.moreImg{ background-position: -58px 0px}
  #tabs a.tabOn span.meImg{ background-position: -87px 0px}
   #tabs a.tabOn .weui-tabbar__label{ color:#00bd00}
</style>