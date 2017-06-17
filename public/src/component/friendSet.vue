<template id="friendSet">
    <div class="friendSet">
        <div v-title>好友设置</div>
        <div class="friendSetList1">
            <img class="friendSetImg" :src="user.faceUrl" alt="" @click ="bigFace()">
            <div class="friendnickname">
                <div class="nickname" v-if="user.memoName&&user.memoName!=''">{{user.memoName | shortName(12) }}</div>
                <div class="nickname" v-if="!user.memoName||user.memoName==''">{{user.nickName | shortName(12) }}</div>
                <div class="Remarks" v-if="user.memoName&&user.memoName!=''">昵称：{{user.nickName | shortName(12) }}</div>
                <div class="Remarks" v-if="!user.memoName||user.memoName==''">备注：</div>

            </div>
        </div>
        <div class="weui-cells">
            <router-link :to="memoNameLink" class="weui-cell weui-cell_access">

                <div class="weui-cell__bd">
                    <div>设置备注名</div>
                </div>
                <div class="weui-cell__ft"></div>
            </router-link>
        </div>

        <div class="setList">
            <div>特别关心</div>
            <input type="checkbox" class="weui-switch setFlag" :checked="isSpecial" @change="special($event)"   >
        </div>
        <div class="setList">
            <div>不看他的心情记录</div>
            <input type="checkbox" class="weui-switch setFlag"  :checked="isNotLookFriend" @change="lookFriend($event)"  >
        </div>
        <div class="setList setListLast">
            <div>不让TA看我的心情记录</div>
            <input type="checkbox" class="weui-switch setFlag"  :checked="isNotLookMe"   @change="lookMe($event)">
        </div>
    </div>
</template>

<script type="text/javascript">

    var friendSet = {
        template: '#friendSet'
    };
    export default {
        data() {
            return {
                hour: '10',
                minute: "20",
                user: {},
                isNotLookFriend:false,
                isNotLookMe:false,
                memoNameLink:null,
                isSpecial:false

            }
        },


        mounted: function () {
            let _this = this;
            let friendId = this.$route.query.friendId;
            console.log(friendId);
            //用户信息
            this.$http({
                method: 'GET',
                type: "json",
                url: web.API_PATH + 'user/find/friend/set/_userId_/'+friendId,
            }).then(function (data) {//es5写法
                if (data.data.data !== null) {
                    //console.log(data);
                    _this.user = eval(data.data.data);
                    if(_this.user.isSpecial==1){
                        _this.isSpecial=true;
                    }else{
                        _this.isSpecial=false;
                    }
                    _this.isNotLookFriend = !_this.user.isLookFriend;
                    _this.isNotLookMe = !_this.user.isLookMe;
                    _this.memoNameLink= "/me/friendsCount/friendSet/setName/?friendId="+_this.user.userId;
                    console.log(   _this.user);
                }
            }, function (error) {
                //error
            });
        },
        filters:{
            shortName:function(value,len){
                return xqzs.shortname(value,len);
            }
        },
        methods: {
            bigFace:function () {
                var _this= this;
                wx.previewImage({
                    current: _this.user.faceUrl, // 当前显示图片的http链接
                    urls: [_this.user.faceUrl] // 需要预览的图片http链接列表
                });
            },
            special:function ($event) {
                let _this = this;
//                console.log($event.target.checked);
                _this.isSpecial = $event.target.checked;
                let flag;
                if(_this.isSpecial==true){flag=0};
                if(_this.isSpecial==false){flag=1};
                _this.$http.post(web.API_PATH+'user/set/friend/special/_userId_/'+_this.user.userId+"/"+flag).then(response => {
                    if(response.data.status===1){

                    }
                }, response => {
                    // error
                });
            },

            lookMe: function ($event) {
                let _this = this;
                _this.isNotLookMe = $event.target.checked;
                let flag;
                if(_this.isNotLookMe===true){flag=1}
                if(_this.isNotLookMe===false){flag=0}

                _this.$http.post(web.API_PATH+'user/set/friend/look/me/_userId_/'+_this.user.userId+"/"+flag).then(response => {
                    if(response.data.status===1){

                    }
                }, response => {
                    // error
                });
            },
            lookFriend: function ($event) {
                let _this = this;
                _this.isNotLookFriend = $event.target.checked;
                let flag;
                if(_this.isNotLookFriend===true){flag=1}
                if(_this.isNotLookFriend===false){flag=0}
                _this.$http.post(web.API_PATH+'user/set/friend/look/friend/_userId_/'+_this.user.userId+"/"+flag).then(response => {
                    if(response.data.status===1){

                    }
                }, response => {
                    // error
                });
            }
        }
    }
    //module.exports=remind
</script>
<style>
    .friendSet .weui-cells{ margin-top: 15px;}
    .friendSet .weui-cell{  font-size: 15px;}

    .friendSetList1 {
        height: 60px;
        padding: 10px 15px;
        background: #ffffff;
        margin-top: 12px;
        position: relative;
    }

    .friendSetImg {
        height: 60px;
        width: 60px;
        border-radius: 5px;
        float: left;
    }

    .friendnickname {
        float: left;
        margin-left: 13px;
        padding-top: 6px;
    }

    .friendSet .nickname {
        font-size: 16px;
        color: #333333;
        line-height: 18px;
        margin-bottom: 8px;
    }

    .Remarks {
        font-size: 14px;
        color: #868686;
    }

    .setList {
        height: 44px;
        background: #ffffff;
        line-height: 44px;
        color: #333333;
        font-size: 15px;
        display: block;
        padding: 0 15px;
        position: relative;
        margin-top: 15px;
    }
    .setList:before,.setList:after,.friendSetList1:before,.friendSetList1:after{ width: 100%; content: " ";   background:#eee; display: block; height: 1px; overflow: hidden; position: absolute; top:0; left: 0; }
    .setList:after,.friendSetList1:after{ top:inherit; bottom: 0 }
    .setListLast:before{ display: none}
    .setList img {
        position: absolute;
        height: 20px;
        width: 20px;
        display: block;
        right: 20px;
        top: 50%;
        margin-top: -10px;
    }

    .setListLast {
        margin-top: 0px;
        border-top:1px solid #eee;
    }

    .setFlag {
        position: absolute;
        right: 15px;
        top: 0;
        margin-top: 7px;
    }
</style>



