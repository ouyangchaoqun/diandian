<template id="personal">
    <div class="personal_box">
        <div class="list0">
            <span>昵称</span>
            <input type="text" class="nickName" onfocus="this.value=''"  v-model:value="user.nickName" placeholder="填写昵称">
        </div>
        <div class="list0 list02" @click="updateHeadpic()">
            <span>更新头像</span>
            <a>
                <img src="../images/goto.jpg" alt="">
            </a>
        </div>
        <router-link to="/me/personal/validate">
            <div class="list0 list02">
                <img src="../images/goto.jpg" alt="">
                <span>绑定手机号</span><span class="mobile">{{user.mobile}}</span>

            </div>
        </router-link>
        <div class="list0">
            <span>姓名</span>
            <input type="text" class="realName" v-model:value="user.realName" onfocus="this.value=''" placeholder="还未填写（如张三）">
        </div>
        <div class="list0 list02" @click="showDate()">
            <span>生日</span>
            <div class="showdL" v-if="birthday">
                <span>{{year}}年 </span>
                <span>{{month}}月 </span>
                <span>{{day}}日 </span>
            </div>
            <div class="showdL" v-else>
                请选择日期
            </div>

        </div>
        <div class="list0 box"  id="localCity" @click="areaPicker()">
            <span>所在地区</span>
            <div class="showdL">
                <span>中国</span>
                <span>{{provinceName}}</span>
                <span>{{cityName}}</span>
                <span>{{areaName}}</span>
            </div>

        </div>
        <div class="list0">
            <span>详细地址</span>
            <input type="text" class="address" v-model:value="user.address"  placeholder="还未填写">
        </div>
        <div class="list03" @click="msgSubmit()">
            <a  class="weui-btn weui-btn_primary">提交</a>
        </div>
    </div>
</template>
<script type="text/javascript">
    var personal={
        template:'#personal'
    }
    export default {
        data() {
            return {
                birthday:'',
                user:'',
                year:'',
                month:'',
                day:'',
                defaultCity:'[330000, 330100, 330102]',
                provinceName:'',
                cityName:'',
                areaName:'',
                provinceId:'',
                cityId:'',
                areaId:''

            }
        },
        mounted: function () {
            let _this = this;

            //用户信息
            this.$http({
                method: 'GET',
                type: "json",
                url: web.API_PATH + 'user/find/by/user/Id/_userId_',
            }).then(function (data) {//es5写法
                if (data.data.data !== null) {

                    _this.user = eval(data.data.data);
                    _this.birthday= _this.user.birthday;
                    if(_this.birthday){
                        let date=_this.birthday.split(',');
                        _this.year=date[0];
                        _this.month=date[1];
                        _this.day=date[2];
                    }
                    _this.provinceName=_this.user.provinceName;
                    _this.cityName=_this.user.cityName;
                    _this.areaName=_this.user.areaName;
                    _this.provinceId=_this.user.provinceId;
                    _this.cityId=_this.user.cityId;
                    _this.areaId=_this.user.areaId;
                    _this.defaultCity=[_this.provinceId,_this.cityId,_this.areaId];
                }
            }, function (error) {
                //error
            });



        },
        methods:{
            showDate:function () {
                let _this = this;
                weui.datePicker({
                    start: 1990,
                    end: new Date().getFullYear(),

                    onChange: function (result) {
                    },
                    onConfirm: function (result) {
                            _this.year=result[0].value;
                            _this.month=result[1].value;
                            _this.day=result[2].value;
                            _this.birthday=result[0].value+','+result[1].value+','+result[2].value;

                    }
                });
            },
            areaPicker:function () {
                let _this = this;
                $.get('/src/js/city.json',function(data){
                    weui.picker(data, {
                        depth: 3,
                        defaultValue:  _this.defaultCity,
                        onChange: function onChange(result) {

                        },
                        onConfirm: function onConfirm(result) {
                            _this.provinceId=result[0].value;
                            _this.cityId=result[1].value;
                            _this.areaId=result[2].value;
                            _this.provinceName =result[0].label;
                            _this.cityName = result[1].label;
                            _this.areaName = result[2].label;

                        },
                        id: 'cascadePicker'
                    });
                });

            },
            updateHeadpic:function () {
                let _this = this;
                _this.$http({
                    method: 'POST',
                    url: web.API_PATH + 'user/update/user/headpic/_userId_',
                }).then(function (data) {//es5写法
                    if (data.data.status !== null) {
                            xqzs.weui.toast("success", "更新成功",function(){

                            });
                    }
                }, function (error) {
                    //error
                });

            },
            msgSubmit:function () {
                let _this = this;
                let nick=$('.nickName').val();
                let realName=$('.realName').val();
                let address=$('.address').val();
                let msg={
                        "id": _this.user.id,
                        "realName": realName,
                        "nickName": nick,
                        "birthday": _this.birthday,
                        "countryId": 0,
                        "provinceId": _this.provinceId,
                        "cityId": _this.cityId,
                        "areaId": _this.areaId,
                        "address":address
                };
                console.log(msg);
                _this.$http.post(web.API_PATH + 'user/update',msg)
                        .then(
                                (response)=>{
                    xqzs.weui.toast("success", "修改成功", function () {
                })
            }
                );


            }

        }
    }
</script>
<style>
.personal_box{
    height:100%;
    background: #f5f5f5;
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
.list0 .mobile{
    float:right;
    font-size: 15px;
    color:#999;
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
    color:#999;
}
.showdL span{
    margin-left:5px;
    color:#999;
}
.list03{
    border:0;
    margin-top:44px;
    background: #eeeeee;
    padding:0 10px;
}




</style>


