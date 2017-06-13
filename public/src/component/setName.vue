<template id="setName">
    <div class="setName_box">
        <div class="setName">设置备注名</div>
        <input type="text" placeholder="添加备注名" ref="name">
        <div class="me_bottom">
            <div class="weui-btn weui-btn_primary" @click="setMemoName()"> 提交</div>
        </div>
    </div>
</template>

<script type="text/javascript">

    var setName={
        template:'#setName'
    };
    export default {
        data() {
            return {
                friendId:this.$route.query.friendId
            }
        },
        methods: {
            setMemoName:function () {
                let _this=this;
                let v = _this.$refs.name.value;
                console.log(v)

                if(v!==""){
                    _this.$http.post(web.API_PATH+'user/save/memo/name/_userId_/'+_this.friendId,{memoName:v}).then(response => {
                        if(response.data.status===1){
                            _this.$router.back(-1)
                        }
                    }, response => {
                        // error
                    });
                }

            }
        }



    }

</script>
<style>
.setName{
    color: #909090;
    font-size: 16px;
    padding:16px;
}
    .setName_box input{
        height:50px;
        line-height: 50px;
        color: #333333;
        font-size: 16px;
        width:100%;
        padding-left: 15px;
        outline: none;
        border:0;
    }
    .me_bottom{
        margin-top:30px;
        padding:0 15px;
    }
/*.setName_box input::-webkit-input-placeholder { !* WebKit browsers*!
    　　color:#909090;
    　　}
.setName_box input:-moz-placeholder {  !* Mozilla Firefox 4 to 18*!
    　　color:#909090;
    　　}
.setName_box input::-moz-placeholder {  !* Mozilla Firefox 19+*!
    　　color:#909090;
    　　}
.setName_box input:-ms-input-placeholder { !* Internet Explorer 10+*!
    　　color:#909090;
}*/
</style>



