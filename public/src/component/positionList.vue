<template id="positionList">
    <div>
        <div>
            地理位置
        </div>
        <a class="loc"><em></em></a>
        <div class="locpage">
            <ul class="loclist"></ul>
        </div>
    </div>
</template>
<script type="es6">
    window['geocoder'] = null;
    var positionList = {
        template: '#positionList'
    }
    export default {
        data(){
            return {
            };
        },
        methods: {
            getUrlLoc: function () {
                return {
                    latitude: this.$route.query.latitude,
                    longitude: this.$route.query.longitude
                };
            },
            getaddresscallback: function (result) {
                var emptyaddress = '所在位置';

                var city = result.detail.addressComponents.city;
                var nearPois = result.detail.nearPois;
                var locpage = $('.locpage');
                var data = [];
                data.push('<li class="loclist1" data-address="" data-showaddress="' + emptyaddress + '"><a href="javascript:void(0)">不显示位置</a>'
                    + '</li>');
                data.push('<li class="loclist2" data-address="' + city + '" data-showaddress="' + city + '"><a href="javascript:void(0)">' + city + '</a></li>');
                for (var i = 0, l = nearPois.length; i < l; i++) {
                    data.push('<li class="locother" data-address="' + city + '·' + nearPois[i].name + '" data-showaddress="' + nearPois[i].name + '"><div class="locother1">' + nearPois[i].name
                        + '</div><div class="locother2">' + nearPois[i].address + '</div><span></span></li>');
                }
                $('.loclist').html(data.join(''));
                //选择默认
                var selectaddress = $('.loc em').html();
                if (selectaddress == '') {
                    selectaddress = emptyaddress;
                }
                $('.loclist li', locpage).each(function () {
                    var showaddress = $(this).data('showaddress');
                    if (selectaddress == showaddress) {
                        var dom = $(this);
                        if ($(this).hasClass('locother')) {
                            dom = $('.locother1', dom);
                        }
                        dom.append('<span class="weui-icon-success-no-circle" style="font-size: 18px;"></span>');
                        return false;
                    }
                })
                locpage.css('display', 'block');
            }
        },
        mounted: function () {
            let that = this;
            window['geocoder'] = new qq.maps.Geocoder({
                complete : function(result){

                    that.getaddresscallback(result);
                }
            });

            var loc = that.getUrlLoc();
            var latLng = new qq.maps.LatLng(loc.latitude, loc.longitude);
            window['geocoder'].getAddress(latLng);
        }
    }
</script>