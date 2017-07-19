<template id="proposal">
    <div class="proposal_box">
        <div v-title>有奖征集</div>
        <div class="feedback">
            <textarea placeholder="有奖征集" v-model="proposalCon"  ref="content" @input="listenProposal"/>
            <span :class="{redmax:isOutMaxLen}">字数小于200字</span>
        </div>

        <div class="list0 list_top">
            <span>姓名</span>
            <input type="text" class="name" v-model="contactname"  placeholder="选填" maxlength="8">
        </div>

        <div class="list0 list_top">
            <span>手机号码</span>
            <input type="text" class="mobile" v-model="mobile"   placeholder="选填" maxlength="11">
        </div>


        <div class="feedback_btn">
            <a :class="{'weui-btn':true,'weui-btn_primary':true,'weui-btn_disabled':feedbackFlag}"  @click="onSubmit()">提交</a>
        </div>


    </div>



</template>

<style>
    .proposal_box{
        background: #f4f4f8;
    }

    .feedback{
        padding:15px;
        font-size:15px;
        color:#999999;
        position: relative;
        height:180px;
        background:#fff;
    }

    .feedback textarea{
        height:150px;
        width:100%;
        outline: none;
        border:0;
        resize: none;
        font-size:16px;
        color:#333333;
    }
    .feedback span{
        position:absolute;
        right:15px;
        bottom:10px;
        font-size: 14px;
    }
    .feedback_btn{
        padding:0 15px;
        margin-top:30px;
    }
    .redmax{ color:red}

    .list0:first-child{margin-top: 12px;}

    .list_top:before,.list_top:after{ width: 100%; content: " ";   background:#eee; display: block; height: 1px; overflow: hidden; position: absolute; top:0; left: 0; }
    .list_top:after{ bottom: 0; top:inherit}

    .list0{
        background:#fff;
        height: 44px;
        line-height: 44px;
        padding:0 15px;
        position: relative;
        margin:8px 0;
    }
    .list0 input{
        margin: 0;
    }

    .list0 span{
        float: left;
        color:#333333;
        font-size: 15px;
    }

    .list0 input{
        float: right;
        font-size: 16px;
        color:#999999;
        height: 44px;
        text-align: right;
        border:0;
        outline: none;
    }
    .list0 input::-webkit-input-placeholder{
        color: #999;
    }
    .list0 input:-moz-placeholder{
        color: #999;
    }
    .list0 input::-moz-placeholder{
        color: #999;
    }
    .list0 input:-ms-input-placeholder{
        color: #999;
    }
    .list0 img{
        width:16PX;
        position: absolute;
        top:14px;
        right: 15px;
    }
</style>
<script type="text/javascript">

    var collect={
        template:'#collect'
    }

    export default {
        data() {
            return {
                feedbackFlag:true,
                user:{},
                mobile:"",
                contactname:"",
                isOutMaxLen:false
            }
        },
        methods:{
            onSubmit:function () {
                let _this = this;
                if(_this.feedbackFlag==false){
                    this.$http.put(web.API_PATH+'base/feedback/add',{"content":_this.$refs.content.value,"userId":null,"contactname":_this.contactname,"mobile":_this.mobile}).then(response => {
                        xqzs.weui.toast("success","提交成功",function () {

                        })
                    }, response => {
                        // error
                    });

                }
            },
            listenProposal:function () {

                var length = this.proposalCon.length;
                console.log(length)
                if(length>=1&&length<200){
                    this.feedbackFlag = false
                }else{
                    this.feedbackFlag = true
                }
                if(length<200){
                    this.isOutMaxLen=false;
                }else{
                    this.isOutMaxLen=true;
                }
            }
        },
        mounted:function () {
            var _this= this;
            this.$http({
                method: 'GET',
                type: "json",
                url: web.API_PATH + 'user/find/by/user/Id/_userId_',
            }).then(function (data) {//es5写法
                if (data.data.data !== null) {
                    _this.user = eval(data.data.data);
                    _this.mobile=_this.user.mobile;
                    _this.contactname=_this.user.realName;
                }
            }, function (error) {
                //error
            });

             xqzs.wx.setConfig(this);
        }
    }

</script>


