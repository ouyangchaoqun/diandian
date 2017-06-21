<template id="positionList">
    <!--positionList-->
    <div class="positionList_box">
        <div>{{address}}</div>
        <ul>
            <li class="locList" @click="selectloc(-2)">
                <div class="noShow">不显示位置</div>
                <i v-bind:class="{'weui-icon-success-no-circle':true,'loc_checked':location.selecindex==-2}"></i>
            </li>
            <li class="locList" @click="selectloc(-1)">
                <div class="city">{{location.city.name}}</div>
                <i v-bind:class="{'weui-icon-success-no-circle':true,'loc_checked':location.selecindex==-1}"></i>
            </li>
            <li class="locList" v-for="(address,index) in location.nearpois" v-bind:key="index" @click="selectloc(index)">
                <div>
                    <p class="address">{{address.name}}</p>
                    <p class="addressDetails">{{address.address}}</p>
                </div>
                <i v-bind:class="{'weui-icon-success-no-circle':true,'loc_checked':location.selecindex==index}"></i>
            </li>
        </ul>
    </div>
    <!--positionList end-->
</template>
<style>
    /*positionList*/
    .positionList_box{
        overflow-y: auto;
    }
    .locList{
        height:50px;
        margin-bottom: 1px;
        background: #ffffff;
        line-height: 50px;
        padding:0 10px;
    }
    .locList div{
        float: left;
    }
    .locList i{
        float: right;
        margin-top:13px;
        display: none;
    }
    .locList .loc_checked{
        display: block;
    }
    .noShow{
        font-size: 14px;
        color: #516591;
    }
    .city{
        font-size: 14px;
        color: #333333;
    }
    .address{
        font-size: 14px;
        color: #333333;
        line-height: 35px;
    }
    .addressDetails{
        font-size: 12px;
        color: #999999;
        line-height: 5px;
    }
    /*positionList end*/
</style>
<script type="es6">
    import Bus from './bus.js';
    window['geocoder'] = null;
    var positionList = {
        template: '#positionList'
    }
    export default {
        data(){
            return {
                location:{
                    selecindex:-2,
                    city:{},
                    nearpois:[]
                }
            };
        },
        methods: {
            //positionList
            getUrlLoc: function () {
                return {
                    latitude: this.$route.query.latitude,
                    longitude: this.$route.query.longitude
                };
            },
            getaddresscallback: function (result) {
                var that = this;
                var emptyaddress = '所在位置';

                var city = result.detail.addressComponents.city;
                var nearPois = result.detail.nearPois;

                that.location.city = {name:city};
                that.location.nearpois = nearPois;
            },
            selectloc:function (i) {
                this.location.selecindex = i;
                //$('#txt_address').val(this.getaddress(i));
                Bus.$emit('selectaddress', this.getaddress(i));
                this.$router.back();
                //this.$router.push({path:'/positionList?latitude='+latitude+'&longitude='+longitude});
            },
            getaddress:function (ix) {
                if(ix < -1)
                    return '';
                else if(ix < 0){
                    return this.location.city.name;
                }else{
                    return this.location.nearpois[ix].name;
                }
            }
            //positionList
        },
        mounted: function () {
            //positionList
            let that = this;
            window['geocoder'] = new qq.maps.Geocoder({
                complete : function(result){

                    that.getaddresscallback(result);
                }
            });

            var loc = that.getUrlLoc();
            var latLng = new qq.maps.LatLng(loc.latitude, loc.longitude);
            window['geocoder'].getAddress(latLng);

            $('.positionList_box').height($('body').height());
            //positionList  end
            xqzs.wx.setConfig(that);
        }
    }
</script>