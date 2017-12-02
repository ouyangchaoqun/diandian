<template>
    <div class="coin_address">
        <div v-title>收货地址</div>
        <div class="box">
            <div class="item">
                <span>收货人</span>
                <div class="con"><input type="text" placeholder="请输入收货人名字"> </div>
            </div>
            <div class="item">
            <span>手机号码</span>
            <div class="con"><input type="text" placeholder="收货人的电话，方便联系"> </div>
        </div>
            <div class="item" id="localCity" @click="areaPicker()">
                <span>地址</span>
                <div class="showdL area">
                    <span id="address_ts">请选择地址</span>
                    <span v-if="provinceName">{{provinceName}}</span>
                    <span v-if="cityName">{{cityName}}</span>
                    <span v-if="areaName">{{areaName}}</span>

                </div>
                <div style="clear: both"></div>
                <div class="line"></div>
            </div>
            <div class="item addess">
                <span>详细地址</span>
                <div class="con"><textarea type="text" placeholder="请输入街道、门派等详细地址信息"></textarea> </div>
             </div>
            <div  @click="msgSubmit()">
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
            }
        },
        mounted:function () {




        },
        methods: {
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