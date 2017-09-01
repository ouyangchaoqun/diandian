<template id="luck">
    <div class="luck">
        <div v-title>星座运势</div>
        <div v-if="hasBirthday">
            <div class="title">

                <div class="addTitleBox">
                    <div class="xs_pic">
                        <img :src="constellation.pic">
                    </div>
                    <div class="addInfo">
                        <div class="info">{{constellation.name}}<i class="main_txt">（{{constellation.times}}）</i></div>
                    </div>
                </div>
                <div class="title_header">
                    <div class="addTitle_top">本月运势</div>
                    <div class="addTime">（{{nowYear}}.{{nowMonth}}.1-{{nowMonth}}.{{lastDay}}）</div>
                </div>
            </div>
            <div class="addMainbg">
                <img class="startMoveBg" src="../images/startMove.png" alt="">
                <div class="main_content" v-for="item in  constellation.data">
                    <div>
                        <div class="xz">
                            <div class="xz_pic"><img :src="item.pic"></div>
                            <div class="xz_ys">{{item.name}}</div>
                            <div class="xz_zs" v-if="item.color!=''&&item.color!=null"><img src="../../dist/constellation/star1.png" class="onimg" :color="item.color"  v-for="n in item.index"><img
                                    src="../../dist/constellation/star0.png" v-for="n in 5-item.index"></div>
                        </div>
                        <div class="xz_content">{{item.content}}</div>
                    </div>
                </div>
                <div class="xz_introduce">说明：广泛的星座运势并不会具体针对关联到个人运势，仅够娱乐参考）</div>
            </div>
            <div class="addEwmBox" v-if="!user||(user&&theUser&&user.id!=theUser.id)">
                <img src="../images/addEwm_top.png" alt="">
                <div class="addEwmtext">长按二维码关注“心情指数”后,<br/>回复“运势”查看本月星座运势</div>
                <div class="ewm"></div>
            </div>

            <!--<div class="goInfo" v-if="user!=null" @click="share()">分享我的星座运势</div>-->
            <!--<div class="goInfo" v-if="user!=null">我的星座运势（已关注查自己）</div>-->
            <!--<div class="goInfo"  @click="follow()">分享（未关注）</div>-->
            <div class="myshare" v-show="isShowShareTip" @click="share()"></div>
            <div id="follow2" style="display: none">
                <div class="dialog_follow">
                    <div class="img" v-if="theUser"><img :src="theUser.faceUrl"></div>
                    <div class="ewm">
                    </div>
                    <div class="text" v-if="theUser">
                        长按关注“{{theUser.nickName}}”<br>记录你的心情
                    </div>
                </div>
            </div>
            <div id="output" class="output" style="display: none"></div>
        </div>
        <div v-if="!hasBirthday" class="form_birthday">
            <img class="Bstart" src="../images/Bstart.png" alt="">
            <div class="form_input">
                <div class="input_top">输入出生年月，立即测算本月运程</div>
                <ul class="input_tab">
                    <li  :class="{input_tabActive:!isLunar}" @click.stop="lutSelect(0)">阳历</li>
                    <li :class="{input_tabActive:isLunar}" @click.stop="lutSelect(1)">阴历</li>


                </ul>
                <div class="inputItem" v-if="isLunar" @click="showDate()">
                        <div class="left">出生年月：</div>
                        <div class="showdL right" v-if="birthday!=''">
                            {{yearN}}{{monthN}}{{dayN}}
                        </div>
                        <div class="showdL right" v-if="birthday==''">
                            年/月/日
                        </div>
                </div>
                <div class="inputItem" v-if="!isLunar" @click="showDate()">
                    <div class="left">出生年月：</div>
                    <div class="showdL right">
                        {{year}}年{{month}}月{{day}}日
                    </div>
                </div>
                <div class="btn_action" @click="lookLuck()">查看星座运势</div>
            </div>

        </div>

    </div>
</template>
<style>
    .addTitle_top{
        color: #fff;
        font-size: 14px;
    }
    .addTime{
        font-size: 12px;
    }
    .form_birthday{
        height:100%;
        width:100%;
        background: url("../images/startLogin.jpg") no-repeat;
        position: relative;
    }
    .Bstart{
        width:4.76rem;
        height:5.18rem;
        display: block;
        position: absolute;
        top: 2rem;
        left:50%;
        margin-left: -2.38rem;
    }
    .form_input{
        background: #fff;
        height: 18.32rem;
        width: 17.65rem;
        border-radius: 5px;
        position: absolute;
        top: 8.9rem;
        left:50%;
        padding-top: 2.18rem;
        margin-left:-8.825rem;
    }
    .input_tab{
        display: flex;
        width:6.8rem;
        height:1.588rem;
        margin:0 auto;
        font-size: 14px;
        line-height:1.588rem;
        overflow: hidden;
        border-radius: 5px;
        border:1px solid #a8a8a8;
        margin-bottom: 2rem;
    }
    .input_tab li{
        flex-grow: 1;
        text-align: center;
        color: #999;
    }
    .input_tab .input_tabActive{
        background: #795fb0;
        color: #fff;
        border-color: #795fb0;
    }
    .title_header{
        font-size: 15px;
        text-align: center;
        color: #fff;
    }
    .addEwmBox{
        background: #fff;
        height: 9.83rem;
        width:100%;
        padding-top: 1.47rem;
        position: relative;
    }
    .addEwmBox img{
        display: block;
        margin:0 auto;
        width:90%;
    }
    .addEwmtext{
        font-size:11px;
        color: #4e1f6a ;
        text-align: center;
        margin:0 auto;
        position: absolute;
        top:0.6rem;
        left:50%;
        margin-left:-85px;
    }
    .addTitleBox{
        position: absolute;
        left:50%;
        top:0.88rem;
        margin-left:-70px;
    }
    .addInfo{
        color: #fff;
        float: left;
        margin-left: 10px;
        margin-top: 0.88rem;
    }
    .addMainbg{
        background: url("../images/startBg.png") no-repeat;
        background-size:cover ;
        position: relative;
        overflow: hidden;
    }

    .startMoveBg{
        position: absolute;
        top:0;
        left:100%;
        height:100%;
        transform: rotate(-10deg);
        -webkit-transform: rotate(-10deg);
        animation: startMove 1.5s linear 5s infinite;
        -webkit-animation:startMove 1.5s linear 5s infinite;
    }
    @keyframes startMove {
        0% {
           left:80%;
            top:-30%;
        }
        100% {

            left:-80%;
           top:30%;
        }
    }
    
    .dialog_follow {
        width: 66%;
        background: #fff;
        border-radius: 10px;
        overflow: hidden;
        height: 20.47058823529412rem;
        position: absolute;
        top: 50%;
        margin-top: -10.23529411764706rem;
        left: 17%;
        z-index: 10001;
    }

    .dialog_follow img {
        width: 100%
    }

    .dialog_follow .img {
        height: 11rem;
        overflow: hidden
    }

    .dialog_follow .text {
        text-align: center;
        font-size: 0.8235294117647059rem;
        line-height: 1.5
    }
    .img.smill img {
        width: 10rem;
        height: 10rem;
        margin: 0 auto
    }
    .dialog_follow .img.smill {
        background: #01af00;
        text-align: center;
        height: 10rem;
    }
    .ewm {

        position: absolute;
        left: 50%;
        margin-left: -55px;
        top:4rem;
    }

    .ewm .output {
        width: 100%;
        height: 100%
    }
    .myshare {
        background: url(../../dist/birthday/share.png) no-repeat center top rgba(0, 0, 0, 0.9);
        background-position: 2.5rem 3.5rem;
        background-size: 80%;
        height: 100%;
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 10001;
    }
    .goInfo{
        background: #0BB20C;
        color: #fff;
        text-align: center;
        padding: 4px 12px;
        width: 60%;
        display: block;
        margin: 12px auto;
        font-size: 0.8823529411764706rem;
        margin-bottom: 26px;
        border-radius: 8px;
    }
    .dialog_follow {
        width: 66%;
        background: #fff;
        border-radius: 10px;
        overflow: hidden;
        height: 20.47058823529412rem;
        position: absolute;
        top: 50%;
        margin-top: -10.23529411764706rem;
        left: 17%;
        z-index: 10001;
    }

    .dialog_follow img {
        width: 100%
    }

    .dialog_follow .img {
        height: 11rem;
        overflow: hidden
    }

    .dialog_follow .text {
        text-align: center;
        font-size: 0.8235294117647059rem;
        line-height: 1.5
    }
    .xs_pic {
        position: relative;
        height:2.94rem;
        width:2.94rem;
        border-radius: 50%;
        border:1.5px solid #bc75f9;
        overflow: hidden;
        background: #fff;
        float: left;
    }
    .xs_pic img{
        display: block;
        width:1.76rem;
        height:2rem;
        display: block;
        position: absolute;
        top: 50%;
        margin-top:-1rem;
        left:50%;
        margin-left:-0.88rem;
    }

    .luck {
        font-size: 0.8823529rem;
        color: #333;
        position: relative;
        background: rgba(238, 238, 238, 1);
    }

    .luck .title {
        background: url(../images/startHeader.jpg) no-repeat;
        background-size: 100% 100%;
        height: 4.23rem;
        width: 100%;
        margin: 0 auto;
        position: relative;
        padding-top: 4.65rem;
    }

    .luck .info {
        font-size: 18px;
    }

    .luck .info span {
        font-size: 17px;
        font-weight: bold
    }

    .luck .main_txt {
        line-height: 1;
        font-size: 11px;
        font-style: normal;
        margin-left: 0.4rem;
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
        line-height: 1.6;
        background-size: 100%;
        border-bottom: 1px solid rgba(238,238,238,0.2);
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
        height: 2.35rem;
        line-height: 2.35rem;
        border-radius: 1.1rem;
        background: rgba(121,95,176,1);
        text-align: center;
        color: #fff;
        font-size: 0.94rem;
        width: 15rem;
        margin: 0 auto;
    }

    .luck .input_top {
        text-align: center;
        color: #999999;
        width: 100%;
        line-height: 1rem;
        font-size: 13px;
        margin-bottom: 2.7rem;
    }

    .luck .inputItem {
        width: 15rem;
        margin: 0 auto;
        height: 2.588rem;
        background: rgba(121,95,176,0.1);
        line-height: 2.588rem;
        border-radius: 5px;
        margin-bottom: 3.8rem;
    }

    .luck .inputItem .left {
        float: left;
        margin-left: 1.176rem;
    }

    .luck .inputItem .right {
        float: left;
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
        height: 3rem;
    }

    .xz div {
        float: left;
    }

    .xz_content {

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
        margin-left: 1.18rem;
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
        color:#fff;
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
        margin-right:2px;
    }

    .xz_content {
        padding: 0.4rem 1.18rem 1.3rem 1.18rem;
        color: #fff;
        font-size: 0.82rem;
    }
    .xz_introduce{
        padding: 1.7rem 1.18rem 1.88rem 1.18rem;
        font-size: 0.71rem;
        color: #fff;
    }
</style>

<script src="../js/qrcode.min.js"></script>
<script type="text/javascript">
    var luck = {
        template: '#luck'
    };
    export default {
        data() {
            return {
                birthday: '',
                year: '',
                month: '/',
                day: '/',
                nowYear:'',
                nowMonth:'',
                lastDay:'',
                hasBirthday: null,
                index: 0,
                MIN_YEAR: 1891,
                MAX_YEAR: 2100,
                constellation: {data: []},
                time: {year: 2017, month: 8},
                isShowShareTip:false,
                theUserId:0,
                theUser:null,user:null,
                isLunar: 0,
                lunarDateData:[],
                isLeapMonth:false


            }
        },
        mounted: function () {
            let _this=this;
            var nowDate = new Date();
            _this.nowYear = nowDate.getFullYear();
            _this.nowMonth = nowDate.getMonth()+1;
            _this.lastDay = calendar.solarDays(_this.nowYear,_this.nowMonth);
            if(this.$route.query.userid){
                _this.theUserId=this.$route.query.userid
            }else{
                _this.theUserId="_userId_";
            }

            this.lunarDateData=xqzs.dateTime.getLunarData(1949,2017)

            let data = '';
            if (web.guest) {
                this.isGuest = true;
                data = "?guest=true";

            }
            let userId = _this.$route.query.userid;
            console.log(userId)
            _this.$http({
                method: 'GET',
                type: "json",
                url: web.API_PATH + 'user/find/by/user/Id/' + userId + data,
            }).then(function (data) {//es5写法
                console.log(data)
                if (data.data.data !== null) {
                    _this.theUser = data.data.data;



                    _this.birthday = _this.theUser.birthday;
                    if (_this.birthday) {
                        let date = _this.birthday.split(',');
                        _this.year = date[0];
                        _this.month = date[1];
                        _this.day = date[2];
                        if( _this.theUser.isLunar==1||_this.theUser.isLunar==2){
                            _this.isLunar=true;
                            _this.yearN = date[0]+'年';
                            _this.monthN =  calendar.toChinaMonth(date[1]);
                            if(_this.theUser.isLunar==2) {
                                _this.isLeapMonth=true;
                                _this.monthN= "闰"+ _this.monthN;
                            }
                            _this.dayN = calendar.toChinaDay(date[2]);
                        }

                    }
                    _this.initBD();




                }
            }, function (error) {
                //error
            });
            _this.$http.get(web.API_PATH + 'user/get/qr/code/' + _this.theUserId + data).then(function (data) {//es5写法
                console.log(data)
                $("#output").empty();
                $('#output').qrcode({
                    width: 110, height: 110,
                    text: xqzs.string.toUtf8(data.data.data), background: "#ffffff",
                    foreground: "#000"
                });
                setTimeout(function () {
                    var mycanvas2 = document.getElementsByTagName('canvas')[0];
                    console.log(mycanvas2) ;
                    var img = xqzs.image.convertCanvasToImage(mycanvas2);
                    $('.ewm').html('')
                    $('.ewm').append(img);
                },1000)

            }, function (error) {

            });
            this.$http({
                method: 'GET',
                type: "json",
                url: web.API_PATH + 'user/find/by/user/Id/_userId_',
            }).then(function (data) {//es5写法
                if (data.data.data !== null) {
                    _this.user=data.data.data;
                }
            }, function (error) {
                //error
            });
            xqzs.wx.setConfig(_this);
        },
        filters: {
            shortName: function (value, len) {
                return xqzs.shortname(value, len);
            }
        },
        methods: {
            share: function () {
                this.isShowShareTip = !this.isShowShareTip;
            },


//            follow:function () {
//                let _this = this;
//                xqzs.weui.dialogCustom($("#follow2").html())
//                var mycanvas2 = document.getElementsByTagName('canvas')[0];
//                console.log(mycanvas2) ;
//                var img = xqzs.image.convertCanvasToImage(mycanvas2);
//                $('.ewm').html('')
//                $('.ewm').append(img);
//            },

            initBD: function () {
                let _this = this;

                if (_this.theUser.birthday != null && _this.theUser.birthday != '') {
                    _this.hasBirthday = true;

                } else {

                    _this.hasBirthday = false;
                }

                _this.birthday = _this.theUser.birthday;
                if (_this.birthday) {
                    let date = _this.birthday.split(',');
                    _this.year = date[0];
                    _this.month = date[1];
                    _this.day = date[2];
                }


                //转阳历
                if(_this.theUser.isLunar){
                    let date = _this.birthday.split(',');
                    let solar=  calendar.lunar2solar(parseInt(date[0]),parseInt(date[1]),parseInt(date[2]),_this.isLeapMonth); //阳历
                    _this.birthday= solar.cYear+","+solar.cMonth+"," +solar.cDay ; //阳历
                    _this.year = solar.cYear;
                    _this.month = solar.cMonth;
                    _this.day = solar.cDay;



                }



                let date = new Date();
                let year = date.getFullYear();
                let month = date.getMonth() + 1;
                _this.time = {year: year, month: month};


                if(_this.month==""||_this.day==""){return }

                let constellation = xqzs.constellation.array[xqzs.constellation.getIndex(_this.month, _this.day)];


                let data = '';
                if (web.guest) {
                    this.isGuest = true;
                    data = "?guest=true";

                }

                this.$http({
                    method: 'GET',
                    type: "json",
                    url: web.API_PATH + 'constellation/get/' + year + '/' + month + '/' + constellation.id +data ,
                }).then(function (data) {//es5写法
                    console.log(data)
                    if (data.data.status == 1) {
                        constellation.data = data.data.data;
                        _this.constellation = constellation;


                        xqzs.wx.setConfig(this, function () {
                            wx.showAllNonBaseMenuItem();
                            var config = {

                                imgUrl:_this.constellation.pic,
                                title: _this.constellation.name+'本月运势',
                                desc: _this.constellation.name+'本月（'+_this.nowMonth+'.1-'+_this.nowMonth+'.'+_this.lastDay+'）运势已新鲜出炉，快来围观吧~',
                                link: web.BASE_PATH + "guest/#/constellationLuck?year="+_this.nowYear+"&month="+_this.nowMonth+"&userid="+_this.theUserId,
                            };
                            weshare.init(wx, config,function(){},function () {

                            })
                        });




                        _this.$nextTick(function () {

                            $(".onimg").each(function () {
                                let __=$(this);
                                _this.changeImageColor(
                                    '/dist/constellation/star1.png', //'http://127.0.0.1:5555/images/app/mc_forum_main_bar_button1_h.png',
                                    __.attr("color"), //'#f51ca6',
                                    function (data) {
                                        __.attr("src",data)
                                    }
                                )
                            })

                        })


                    }
                }, function (error) {
                    //error
                });



            },

            lutSelect:function (v) {
                let _this= this;
                if(v==0){
                    if( !this.isLunar) return ;

                    if(this.birthday&&this.birthday!=''){
                        let date = this.birthday.split(',');
                        let solar=  calendar.lunar2solar(parseInt(date[0]),parseInt(date[1]),parseInt(date[2]),_this.isLeapMonth); //阳历
                        this.birthday= solar.cYear+","+solar.cMonth+"," +solar.cDay ; //阳历
                        console.log(solar)
                        _this.year = solar.cYear;
                        _this.month = solar.cMonth;
                        _this.day = solar.cDay;
                    }
                    this.isLunar=false;

                }else if(v==1){
                    if( this.isLunar) return ;
                    this.isLunar=true;
                    if(this.birthday&&this.birthday!=''){
                        let date = this.birthday.split(',');
                        let lunar=  calendar.solar2lunar(date[0],date[1],date[2]); //农历
                        console.log(lunar)
                        this.birthday= lunar.lYear+","+lunar.lMonth+"," +lunar.lDay  //农历
                        _this.isLeapMonth=lunar.isLeap;
                        _this.yearN =  lunar.lYear+"年";
                        _this.monthN = lunar.IMonthCn;
                        _this.dayN =lunar.IDayCn;
                        _this.year = lunar.lYear;
                        _this.month = lunar.lMonth;
                        _this.day = lunar.lDay;
                        if(lunar.isLeap){
                            _this.month = lunar.lMonth+"_1";
                        }
                    }


                }
            },

            showDate: function () {
                let _this = this;
                let defaultValue = [1988, 1, 1];
                if (_this.hasBirthday) {
                    let date = _this.birthday.split(',');
                    defaultValue = [date[0], date[1], date[2]];
                }
                console.log(this.lunarDateData)
                if (this.isLunar) {

                    weui.picker(  this.lunarDateData, {
                        depth: 3,
                        defaultValue: defaultValue,
                        id:"id"+Math.random(),
                        onChange: function (result) {
                            console.log(result);
                        },
                        onConfirm: function (result) {


                            _this.yearN = result[0].label;
                            _this.monthN = result[1].label;
                            _this.dayN = result[2].label;

                            console.log(  _this.monthN);

                            //闰月
                            let monthValue =  result[1].value;


                            if(typeof(monthValue)=="string"&&monthValue.indexOf("_")){
                                _this.isLeapMonth=true;
                                monthValue=result[1].value.split("_")[0];
                            }else{
                                _this.isLeapMonth=false;
                            }


                            _this.year = result[0].value;
                            _this.month = result[1].value;
                            _this.day = result[2].value;


                            _this.birthday = result[0].value + ',' +monthValue + ',' + result[2].value;
                        },
                    });

                } else {
                    weui.datePicker({
                        start: 1949,
                        defaultValue: defaultValue,
                        end: new Date().getFullYear(),
                        id:"id"+Math.random(),
                        onChange: function (result) {
                        },
                        onConfirm: function (result) {
                            _this.year = result[0].value;
                            _this.month = result[1].value;
                            _this.day = result[2].value;


                            _this.birthday = result[0].value + ',' + result[1].value + ',' + result[2].value;

                        }
                    });
                }
            },
            lookLuck: function () {
                let _this = this;
                let realName = $('.realName').val();

                if (_this.birthday == '' || _this.birthday == null) {
                    xqzs.weui.toast("fail", "请填写生日");
                    return;
                }

                let msg = {
                    "id": _this.user.id,
                    "birthday": _this.birthday,
                    "isLunar":_this.isLunar?_this.isLeapMonth?2:1:0
                };
                console.log(msg);
                _this.$http.post(web.API_PATH + 'user/update', msg)
                    .then(
                        (response) => {
                            console.log( _this.birthday)
                            _this.theUser.birthday = _this.birthday;
                            _this.theUser.isLunar = _this.isLunar;
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
