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
    import weui from "../js/weui"
    var friendsCount={
        template:'#friendsCount'
    }

    export default {
        data() {
            return {
                friend_s:null,
                friend_g:null
            }
        },
        mounted: function () {
            let _this = this;

            //用户信息
            this.$http({
                method: 'GET',
                url: web.API_PATH + 'user/query/friend/by/user/id/[userId]',
            }).then(function (data) {
                if (data.data.data !== null) {
                    _this.friend_g=eval(data.data.data.generalFriends);
                    _this.friend_s=eval(data.data.data.specialFriends);
                    console.log(_this.friend_g);
                    console.log(_this.friend_s);
                }

            }, function (error) {
            });

        },

        methods: {
            createInviteCard:function(){
                let _this = this;
                    this.$http.post(web.API_PATH + 'user/save/user/remind',{remindTime:_this.hour+":"+_this.minute,userId:"",id:""},{emulateJSON: true})
                            .then(
                                    (response)=>{
                                        xqzs.weui.toast("success", "修改成功", function () {
                                            window.location.href = "#/"
                                        })
                                    }
                            );

            }
        }
    }
    //module.exports=friendsCount
</script>


