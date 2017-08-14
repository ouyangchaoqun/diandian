<template id="luck">
    <div class="luck">
        <div v-title>本月运势</div>
        <div v-if="hasBirthday">
            <div class="title"><img class="xs_pic" :src="constellation.pic"></div>
            <div class="info">{{constellation.name}}</div>
            <div class="main_txt">{{constellation.times}}</div>
            <!--<div class="main_txt"><span>{{time.year}}-{{time.month}}-01 - {{time.year}}-{{time.month}}-{{time.solarMonthDays}}</span></div>-->
            <div class="main_content" v-for="item in  constellation.data">
                <div style="background: #fff;">
                    <div class="xz">
                        <div class="xz_pic"><img src="../../dist/constellation/ys_love.png"></div>
                        <div class="xz_ys">{{item.name}}运势</div>
                        <div class="xz_zs"><img src="../../dist/constellation/star1.png" class="onimg" :color="item.color"  v-for="n in item.index"><img
                                src="../../dist/constellation/star0.png" v-for="n in 5-item.index"></div>
                    </div>
                    <div class="xz_content">{{item.content}}</div>
                </div>
            </div>
        </div>
        <div v-if="!hasBirthday">
            <div class="title"></div>
            <div class="input_top">输入姓名和出生年月，立即测算本月运程</div>
            <div class="input_box">
                <div class="inputItem">
                    <div class="left">您的姓名：</div>
                    <div class="inputName right">
                        <input class="realName" v-model="user.realName" placeholder="还未填写（如张三）">
                    </div>
                </div>
                <div class="inputItem" @click="showDate()">
                    <div class="left">出生年月：</div>
                    <div class="showdL right" v-show="hasBirthday">
                        <span>{{year}}年 </span>
                        <span>{{month}}月 </span>
                        <span>{{day}}日 </span>
                    </div>
                    <div class="showdL right" v-show="!hasBirthday">
                        年／月／日
                    </div>
                    <div class="down"></div>
                </div>
            </div>
            <div class="btn_action" @click="lookLuck()">查看运势</div>
        </div>

    </div>
</template>
<style>
    .xs_pic {
        position: absolute;
        left: 50%;
        margin-left: -30.25px;
        top: 5.705rem;
        margin-top: -37.5px;
    }

    .luck {
        font-size: 0.8823529rem;
        color: #333;
        position: relative;
        background: rgba(238, 238, 238, 1);
    }

    .luck .title {
        background: url(../../dist/constellation/timg.jpg) no-repeat;
        background-size: 100% 100%;
        height: 5.705rem;
        width: 100%;
        margin: 0 auto;
    }

    .luck .info {
        text-align: center;
        padding-top: 3.38rem;
        font-size: 1.76rem;
        color: darkorchid;
        line-height: 1;
        background: #fff;
    }

    .luck .info span {
        font-size: 17px;
        font-weight: bold
    }

    .luck .main_txt {
        text-align: center;
        padding-top: 0.70rem;
        color: #ff50fb;
        line-height: 1;
        background: #fff;
        padding-bottom: 0.70rem;
    }

    .luck .main_txt span {
        margin: 1px;
        background: #b49781;
        border-radius: 4px;;
        display: block;
        height: 1.676470rem;
        line-height: 1.676470rem;
        color: #fff;
        padding: 0 0.6176470rem;
    }

    .luck .main_content {
        margin-top: 1.17647rem;
        line-height: 1.6;
        background-size: 100%;
    }

    .luck .main_content .br {
        display: block;
        margin-bottom: 10px;
    }

    .luck .bottom_info {
        font-size: 0.76470588rem;;
        margin: 2.3rem 15px 1.1rem;
    }

    .luck .input_box {
        height: 9.52941181rem;
        width: 17.6470588rem;
        position: relative;
        margin: 0 auto;
        margin-top: 2.66176470585rem;
        background: url(../images/luck/input_bg.png);
        background-size: 100%;
        padding-top: 1.7941176rem;
    }

    .luck .input_box:before {
        content: " ";
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        height: 0.9117647rem;
        background: url(../images/luck/input_top.png) no-repeat;
        background-size: 100%;
        width: 100%
    }

    .luck .input_box:after {
        content: " ";
        display: block;
        position: absolute;
        bottom: 0px;
        left: 0;
        height: 0.9117647rem;
        background: url(../images/luck/input_bottom.png) no-repeat #fffcf9 bottom;
        background-size: 100%;
        width: 100%;
    }

    .luck .btn_action {
        position: relative;
        height: 2.58823529411rem;
        line-height: 2.58823529411rem;
        border-radius: 1.176470588rem;
        background: #bc3b38;
        text-align: center;
        color: #fff;
        font-size: 1rem;
        font-weight: bold;
        width: 13.32529411rem;
        margin: 0 auto;
        margin-top: 3rem;
    }

    .luck .input_top {
        margin-top: 2.558823rem;
        text-align: center;
        color: #bc3b38;
        width: 100%;
        line-height: 1rem;
    }

    .luck .inputItem {
        border-bottom: 1px solid #cba98d;
        width: 76%;
        margin: 0 auto;
        height: 2.617647rem;
        line-height: 2.617647rem;
    }

    .luck .inputItem .left {
        float: left;
    }

    .luck .inputItem .right {
        float: left;
        width: 64%
    }

    .luck .inputItem .realName {
        background: none;
        font-size: 1rem;
        width: 100%
    }

    .luck .inputItem {
        position: relative
    }

    .xz {
        position: relative;
        height: 3.235rem;
        border-bottom: 1px solid #eee;
    }

    .xz div {
        float: left;
    }

    .xz_content {
        height: 4.94rem;
    }

    .luck .down {
        width: 16px;
        background: url(../images/me_jt.png);
        height: 16px;
        transform: rotate(90deg);
        background-size: 100%;
        position: absolute;
        right: 0.4rem;
        top: 0.9rem;
    }

    .xz_pic {
        width: 1.56rem;
        height: 1.56rem;
        margin-left: 0.82rem;
        margin-top: 0.85rem;
    }

    .xz_pic img {
        width: 100%;
        height: 100%;
    }

    .xz_ys {
        font-size: 0.88rem;
        margin-left: 0.82rem;
        margin-top: 1.147rem;
        line-height: 1;
    }

    .xz_zs {
        font-size: 0.88rem;
        margin-left: 0.88rem;
        margin-top: 1.147rem;
        line-height: 1;
    }

    .xz_zs img {
        width: 0.88rem;
        height: 0.94rem;
    }

    .xz_content {
        padding: 0.82rem 0.64rem;
    }

</style>


<script type="text/javascript">
    var luck = {
        template: '#luck'
    };
    export default {
        data() {
            return {
                birthday: '',
                user: '',
                year: '',
                month: '',
                day: '',
                hasBirthday: false,
                index: 0,
                MIN_YEAR: 1891,
                MAX_YEAR: 2100,
                constellation: {data: []},
                time: {year: 2017, month: 8}

            }
        },
        props: {
            user: {
                type: Object
            }
        },
        mounted: function () {

            let _this = this;

            if (_this.user.birthday != null) {
                _this.initBD();
            } else {
                this.$http({
                    method: 'GET',
                    type: "json",
                    url: web.API_PATH + 'user/find/by/user/Id/_userId_',
                }).then(function (data) {//es5写法
                    if (data.data.data !== null) {
                        _this.user = eval(data.data.data);
                        _this.initBD();
                    }
                }, function (error) {
                    //error
                });
            }

            xqzs.wx.setConfig(_this);
        },
        filters: {
            shortName: function (value, len) {
                return xqzs.shortname(value, len);
            }
        },
        methods: {
            solarMonthDays: function (year, month) {
                let FebDays = this.isLeapYear(year) ? 29 : 28;
                let monthHash = ['', 31, FebDays, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
                return monthHash[month];
            },
            //是否闰年
            isLeapYear: function (year) {
                return ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0));
            },
            initBD: function () {
                let _this = this;

                _this.birthday = _this.user.birthday;
                if (_this.birthday) {
                    let date = _this.birthday.split(',');
                    _this.year = date[0];
                    _this.month = date[1];
                    _this.day = date[2];
                }
                let date = new Date();
                let year = date.getFullYear();
                let month = date.getMonth() + 1;
                _this.time = {year: year, month: month, solarMonthDays: _this.solarMonthDays(year, month)};

                let constellation = xqzs.constellation.array[xqzs.constellation.getIndex(_this.month, _this.day)];

                this.$http({
                    method: 'GET',
                    type: "json",
                    url: web.API_PATH + 'constellation/get/' + year + '/' + month + '/' + constellation.id,
                }).then(function (data) {//es5写法
                    console.log(data)
                    if (data.data.status == 1) {
                        constellation.data = data.data.data;
                        _this.constellation = constellation;


                        _this.$nextTick(function () {

                            $(".onimg").each(function () {
                                let __=$(this);
                                _this.changeImageColor(
                                    '/dist/constellation/star1.png', //'http://127.0.0.1:5555/images/app/mc_forum_main_bar_button1_h.png',
                                    __.attr("color"), //'#f51ca6',
                                    function (data) {
                                        __.attr("src",data)
                                        console.log(data);
                                    }
                                )
                            })

                        })


                    }
                }, function (error) {
                    //error
                });


                if (_this.user.birthday != null && _this.user.birthday != '') {
                    _this.hasBirthday = true;

                } else {

                    _this.hasBirthday = false;
                }
            },

            showDate: function () {
                let _this = this;
                let defaultValue = [1988, 1, 1];
                if (_this.hasBirthday) {
                    let date = _this.birthday.split(',');
                    defaultValue = [date[0], date[1], date[2]];
                }
                weui.datePicker({
                    start: 1949,
                    defaultValue: defaultValue,
                    end: new Date().getFullYear(),

                    onChange: function (result) {
                    },
                    onConfirm: function (result) {
                        _this.year = result[0].value;
                        _this.month = result[1].value;
                        _this.day = result[2].value;
                        _this.birthday = result[0].value + ',' + result[1].value + ',' + result[2].value;

                    }
                });
            },
            lookLuck: function () {
                let _this = this;
                let realName = $('.realName').val();

                if (_this.birthday == '' || _this.birthday == null || realName == '') {
                    xqzs.weui.toast("fail", "请填写姓名及生日");
                    return;
                }

                let msg = {
                    "id": _this.user.id,
                    "realName": realName,
                    "birthday": _this.birthday
                };
                console.log(msg);
                _this.$http.post(web.API_PATH + 'user/update', msg)
                    .then(
                        (response) => {
                            _this.user.birthday = _this.birthday;
                            _this.user.realName = realName;
                            _this.initBD();
                        }
                    );


            },


            /**
             * 根据主题颜色修改图片颜色
             * @param  {[type]}   imgUrl    图片url
             * @param  {[type]}   rgb_color 主题颜色
             * @param  {Function} callback  返回值 返回base64
             * @return {[type]}             [description]
             */
            changeImageColor: function (imgUrl, rgb_color, callback) {
                var img = new Image();
                img.src = imgUrl;
                //计算对应的通道值
                rgb_color = rgb_color || '#727272';
                var newR = parseInt('0x' + rgb_color.substr(1, 2));
                var newG = parseInt('0x' + rgb_color.substr(3, 2));
                var newB = parseInt('0x' + rgb_color.substr(5, 2));
                //图片加载后进行处理
                img.onload = function () {
                    var width = img.width,
                        height = img.height,
                        canvas = document.createElement('canvas'),
                        ctx = canvas.getContext('2d');
                    canvas.width = width;
                    canvas.height = height;
                    // 将源图片复制到画布上
                    ctx.drawImage(img, 0, 0, width, height);
                    // 获取画布的像素信息
                    var imageData = ctx.getImageData(0, 0, width, height);
                    // 对像素集合中的单个像素进行循环，每个像素是由4个通道组成，所以要注意
                    var i = 0;
                    while (i < imageData.data.length) {

                        var r = imageData.data[i++],
                            g = imageData.data[i++],
                            b = imageData.data[i++],
                            a = imageData.data[i++];
                        //计算透明度//判断是否透明

                        imageData.data[i - 4] = newR;
                        imageData.data[i - 3] = newG;
                        imageData.data[i - 2] = newB;
                        imageData.data[i - 1] = a;

                    }
                    // 将修改后的代码复制回画布中
                    ctx.putImageData(imageData, 0, 0);
                    // 图片导出为 png 格式
                    var type = 'png';
                    var imgData = canvas.toDataURL(type);
                    // console.log(imgData); // 生成base64
                    callback && callback(imgData);
                };
            }

        }
    }


</script>
