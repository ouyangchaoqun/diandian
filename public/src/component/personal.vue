<template id="personal">
    <div class="personal_box">
        <div class="list0">
            <span>昵称</span>
            <input type="text" placeholder="填写昵称">
        </div>
        <div class="list0 list02">
            <span>更改头像</span>
            <a href="">
                <img src="../images/goto.jpg" alt="">
            </a>
        </div>
        <router-link to="/mood">
            <div class="list0 list02">
                <span>绑定手机号</span>
                <img src="../images/goto.jpg" alt="">
            </div>
        </router-link>
        <div class="list0">
            <span>姓名</span>
            <input type="text" placeholder="还未填写（如张三）">
        </div>
        <div class="list0 list02" @click="showDate()">
            <span>生日</span>
            <div class="showdL">
                <span>{{year}}</span>
                <span>{{month}}</span>
                <span>{{day}}</span>
            </div>
        </div>
        <div class="list0">
            <span>所在地区</span>
            <div class="showdL">
                <span>中国</span>
                <span>浙江省</span>
                <span>杭州市</span>
                <span>滨江区</span>
            </div>
        </div>
        <div class="list0">
            <span>详细地址</span>
            <input type="text" placeholder="还未填写">
        </div>
        <div class="list03">
            <a href="" class="weui-btn weui-btn_primary">提交</a>
        </div>
    </div>
</template>
<script type="text/javascript">
    import weui from "../js/weui"
    var personal={
        template:'#personal'
    }
    export default {
        data() {
            return {
                year:'',
                month:'',
                day:''
            }
        },
        methods:{
            showDate:function () {
                var _this = this
                weui.datePicker({
                    start: 1990,
                    end: new Date().getFullYear(),

                    onChange: function (result) {
                        console.log(result);
                    },
                    onConfirm: function (result) {
                        console.log(result);
                            _this.year=result[0].value,
                            _this.month=result[1].value,
                            _this.day=result[2].value
                    }
                });
            }
        }
    }
</script>
<style>
.personal_box{
    height:100%;
    background: #eeeeee;
    padding-top: 20px;
}

.list0{
    background:#fff;
    height:60px;
    margin-bottom: 1px;
    line-height:60px;
    padding:0 10px;
}
.list0 input{
    margin: 0;
}
.list02{
    margin-bottom: 10px;
}
.list0 span{
    float: left;
    color:#333333;
    font-size: 15px;
}
.list0 input{
    float: right;
    font-size: 14px;
    color:#999999;
    height: 60px;
    text-align: right;
}
.list0 img{
    width:20PX;
    height:20px;
    float: right;
    margin-top:20px;
}
.showdL{
    float: right;
}
.showdL span{
    margin-left:5px;
}
.list03{
    border:0;
    margin-top:44px;
    background: #eeeeee;
    height:100%;
    padding:0 10px;
}


</style>


