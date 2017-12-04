<template>
    <div class="coin_address">
        <div v-title>收货地址</div>
        <div class="box">
            <div class="item">
                <span>收货人</span>
                <div class="con"><input type="text" placeholder="请输入收货人名字" id="userName" v-model:value="address.userName" > </div>
            </div>
            <div class="item">
            <span>手机号码</span>
            <div class="con"><input type="text" placeholder="收货人的电话，方便联系" id="mobile" v-model:value="address.mobile"> </div>
        </div>
            <div class="item" id="localCity" @click="areaPicker()">
                <span>地址</span>
                <div class="showdL area">
                    <span id="address_ts" v-if="!(provinceName&&cityName&&areaName)">请选择地址</span>
                    <span v-if="provinceName">{{provinceName}}</span>
                    <span v-if="cityName">{{cityName}}</span>
                    <span v-if="areaName">{{areaName}}</span>

                </div>
                <div style="clear: both"></div>
                <div class="line"></div>
            </div>
            <div class="item addess">
                <span>详细地址</span>
                <div class="con"><textarea type="text"  id="address"  placeholder="请输入街道、门派等详细地址信息">{{address.address}}</textarea> </div>
             </div>
            <div  @click="submit()">
                <a class="submit_btn">提交</a>
            </div>

        </div>



    </div>
</template>
<script>

    export default {
        data() {
            return {
                defaultCity: '[330000, 330100, 330102]',
                provinceName: '',
                cityName: '',
                areaName: '',
                provinceId: '',
                cityId: '',
                areaId: '',
                address:{}
            }
        },
        mounted:function () {
            this.getAddress();
        },
        methods: {
            submit:function () {

                let _this=this;
                let word= "添加";
                if(address&&address!={}){
                    word= "修改";
                }
                let provinceId =_this.provinceId;
                let cityId =_this.cityId;
                let areaId =_this.areaId;
                let userName =_this.address.userName;
                let mobile =_this.address.mobile;
                let address =$("#address").val();

                if(!userName){
                    xqzs.weui.tip("请填写收件人姓名");
                    return ;
                }
                if(!mobile){
                    xqzs.weui.tip("请填写手机号");
                    return ;
                }
                if(!(provinceId&&cityId&&areaId)){
                    xqzs.weui.tip("请填写地址");
                    return ;
                }

                if(!address){
                    xqzs.weui.tip("请填写详细地址");
                    return ;
                }

                let data  ={
                    userId:'--',
                    provinceId:provinceId,
                    cityId:cityId,
                    areaId:areaId,
                    userName:userName,
                    mobile:mobile,
                    address:address,
                };
                _this.$http.post(web.API_PATH + 'coin/add/address',data)
                    .then(function (res) {

                        xqzs.weui.toast("success",word+"成功", function () {
                            _this.$router.go(-1);
                        })

                    });

            },
            getAddress:function () {

                let _this=this;
                _this.$http({
                    method: 'GET',
                    type: "json",
                    url: web.API_PATH + 'coin/get/address/_userId_',
                }).then(function (data) {//es5写法
                    if (data.data.data !== null) {
                        _this.address = eval(data.data.data);
                        if( _this.address.province) _this.provinceName =  _this.address.province;
                        if( _this.address.city) _this.cityName =  _this.address.city;
                        if( _this.address.area) _this.areaName =  _this.address.area;
                        if( _this.address.provinceId) _this.provinceId =  _this.address.provinceId;
                        if( _this.address.cityId) _this.cityId =  _this.address.cityId;
                        if( _this.address.areaId) _this.areaId =  _this.address.areaId;
                        _this.defaultCity = [_this.provinceId, _this.cityId, _this.areaId];
                    }
                }, function (error) {
                    //error
                });
            },
            areaPicker: function () {
                let _this = this;
                $.get('/src/js/city.json', function (data) {
                    weui.picker(data, {
                        depth: 3,
                        defaultValue: _this.defaultCity,
                        onChange: function onChange(result) {

                        },
                        onConfirm: function onConfirm(result) {

                            if (result[0]) {
                                _this.provinceId = result[0].value;
                                _this.provinceName = result[0].label;
                            }
                            if (result[1]) {
                                _this.cityId = result[1].value;
                                _this.cityName = result[1].label;
                            }
                            if (result[2]) {
                                _this.areaId = result[2].value;
                                _this.areaName = result[2].label;
                            } else {
                                _this.areaId = '';
                                _this.areaName = '';
                            }
                            $("#address_ts").html('')

                        },
                        id: 'cascadePicker'
                    });
                });

            },
        }
    }


</script>
<style>
    .coin_address{ background: #Fff}
    .coin_address .box{ margin: 0.88235rem;}
    .coin_address .box .item{ height: 3.058823529411765rem; border-bottom: 1px solid  #eee; line-height:3.058823529411765rem; }
    .coin_address .box .item>span{ display: inline-block; float:left; width:5.882352941176471rem;color:#333 ; font-size: 0.9411764705882353rem; font-weight: bold; }
    .coin_address .box .item .con{ height: 100% ; color:#666}
    .coin_address .box .item .con input{ height:2rem; border: none;outline:none; font-size: 0.9411764705882353rem;  }
    .coin_address .box .submit_btn{ background: #E7972F; border-radius: 0.2rem; height:2.588235294117647rem;  line-height: 2.588235294117647rem; color:#fff ;text-align: center ; margin: 0 10%; display: block; margin-top: 2rem; }
    .coin_address .box .addess{ height: auto}
    .coin_address .box .addess textarea{ height:2rem; line-height: 1rem; font-size: 0.9411764705882353rem; width: 70%; border: none ; outline: none; margin-top: 1rem;}
</style>