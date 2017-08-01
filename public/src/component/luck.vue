<template id="luck">
	<div class="luck">
		<div v-title>本月运势</div>
		<div v-if="hasBirsday">
			<div class="title"></div>
			<div class="info">亲爱的 <span>{{user.realName}}</span>， 您2017年8月份的运势</div>
			<div class="main_txt"><span>{{data[index].title}}</span></div>
			<div class="main_content" v-html="data[index].content"></div>
			<div class="bottom_info">说明：本站测试项目主要根据中华传统周易学或民间流传的占卜法制定，测试结果仅供娱乐参考。</div>
		</div>
		<div v-if="!hasBirsday">
			<div class="title"></div>
			<div class="input_top">输入姓名和出生年月，立即测算本月运程</div>
			<div class="input_box">
				<div class="inputItem" >
					<div class="left">您的姓名：</div>
					<div class="inputName right">
						<input class="realName"   v-model="user.realName"  placeholder="还未填写（如张三）" >
					</div>
				</div>
				<div class="inputItem" @click="showDate()">
					<div class="left">出生年月：</div>
					<div class="showdL right" v-show="birthday">
						<span>{{year}}年 </span>
						<span>{{month}}月 </span>
						<span>{{day}}日 </span>
					</div>
					<div class="showdL right" v-show="!birthday">
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
	.luck{ font-size: 0.8823529rem; color:#333; position: relative; background: #fffcf9}
	.luck .title{ background: url(../images/luck/title.png) no-repeat; background-size: 100% 100%; height:3.970588rem; width: 16.3235294117rem; margin: 0 auto; margin-top: 1.5rem;}

	.luck .info{margin: 0 15px; margin-top: 1.17647rem;     text-align: center;}
	.luck .info span{ font-size: 17px; font-weight: bold}
	.luck .main_txt{ margin: 0 15px;  border: 1px solid #b49781 ;border-radius: 4px;;margin-top: 0.4rem;    text-align: center; }
	.luck .main_txt span{ margin: 1px;  background: #b49781 ; border-radius: 4px;; display: block ; height: 1.676470rem; line-height: 1.676470rem; color:#fff; padding: 0 0.6176470rem;}
	.luck .main_content{ margin: 15px; margin-top: 1.17647rem;   line-height: 1.6; position: relative; padding: 1.35241rem 1.058823rem; background: url(../images/luck/content_bg.png); background-size: 100%; }
	.luck .main_content .br{ display: block; margin-bottom: 10px;}
	.luck .main_content:before{ content: " "; display: block; position: absolute; top:0; left:0; height:1.1470588rem; background: url(../images/luck/content_top.png) no-repeat; background-size: 100%; width: 100% }
	.luck .main_content:after{ content: " "; display: block; position: absolute; bottom:-1px;left:0;height:1.1470588rem; background: url(../images/luck/content_bottom.png) no-repeat; background-size: 100%; width: 100%}
	.luck .bottom_info{ font-size: 0.76470588rem;; margin:2.3rem 15px 1.1rem;}

	.luck .input_box{ height: 9.52941181rem; width: 17.6470588rem; position: relative; margin: 0 auto;  margin-top: 2.66176470585rem; background: url(../images/luck/input_bg.png); background-size: 100%; padding-top: 1.7941176rem;}
	.luck .input_box:before{ content: " "; display: block; position: absolute; top:0; left:0; height:0.9117647rem; background: url(../images/luck/input_top.png) no-repeat; background-size: 100%; width: 100% }
	.luck .input_box:after{ content: " "; display: block; position: absolute; bottom:0px;left:0;height:0.9117647rem; background: url(../images/luck/input_bottom.png) no-repeat #fffcf9 bottom; background-size: 100%; width: 100%;}

	.luck .btn_action{
	  position: relative;  height: 2.58823529411rem;line-height: 2.58823529411rem; border-radius: 1.176470588rem; background: #bc3b38; text-align: center ; color:#fff; font-size: 1rem;font-weight: bold; width: 13.32529411rem; margin: 0 auto; margin-top: 3rem;	}
	.luck .input_top{  margin-top:2.558823rem; text-align: center ; color:#bc3b38; width: 100%; line-height: 1rem;}
	.luck .inputItem{border-bottom: 1px solid #cba98d; width: 76%; margin: 0 auto; height: 2.617647rem; line-height: 2.617647rem;}
	.luck .inputItem .left{ float: left;}
	.luck .inputItem .right{ float: left;width: 64% }
	.luck .inputItem .realName{ background: none; font-size: 1rem; width: 100% }
	.luck .inputItem { position: relative}
	.luck .down{ width: 16px; background: url(../images/me_jt.png); height: 16px; transform:rotate(90deg) ; background-size: 100%; position: absolute; right:0.4rem; top:0.9rem; }


</style>


<script type="text/javascript">
	var luck={
		template:'#luck'
	};
    export default {
        data() {
            return {
                birthday:'',
                user:'',
                year:'',
                month:'',
                day:'',
                hasBirsday:false,
                data:[
					{CZS:"子鼠",title:"先发制人，打铁趁热",content:"这个月因有「地解」吉星照命，故可逢凶化吉，运势大吉大利！工作困阻一一消除，而且困扰多时的人事纷争亦烟消云散，可以重新走上正轨。<div class='br'></div>在这一段期间最重要的，是要抢占先机，尽量争取先发制人，打铁趁热才可稳操胜券！<div class='br'></div>切勿太过犹豫，以免坐失良机而后悔莫及，财星高照，这个月财运亨通，正财收入丰足，而且会有不少意外收入，但切忌贪得无厌。<div class='br'></div>这个月易与异性投缘，情投意合，但切勿因而耽误了公事。"},
                    {CZS:"丑牛",title:"力争上游，公正无私",content:"因为「将星」吉星坐镇在命宫中，故此这个月的运势有如日中天，气势如虹！工作进展畅顺，而且小人也会畏避退缩，正是力争上游的大好时机！<div class='br'></div>在这段期间最重要的，是处事待人必须公正无私，对事不对人，尽量令人心悦诚服，这将会对事业发展有意想不到的帮助！<div class='br'></div>财运亨通，正财收入丰厚，可作多元化投资，有利可图！但需小心看管钱财，以免有盗窃之灾。健康良好，但切勿沉迷酒色或沾染麻醉毒品。"},
                    {CZS:"寅虎",title:"循规蹈矩，留有余地",content:"这个月的运势反复向上，虽然月初仍会有诸多波折，但月中开始便会渐入佳境，工作进展出现峰回路转的情况！<div class='br'></div>在这段期间最重要的，是脚踏实地去处事，循规蹈矩，千万不可行险侥幸！尽量避免以下犯上，以免自陷困境！此外请紧记凡事必须留有余地，切勿咄咄逼人。<div class='br'></div>财运虽然略有起色，但暂时仍不宜投资赌博，以免白白浪费钱财。健康平平，出门在外必须密切注意人身安全，远离险地，切勿掉以轻心。"},
                    {CZS:"卯兔",title:"劳碌奔波，慎防水险",content:"因为命宫中凶星混杂，这个月的运势甚为崎岖，不如意事将会接连而来，应先有心理准备，以免猝不及防而一败涂地。工作劳碌奔波，而且备受指责排挤！<div class='br'></div>在这段期间最重要的，是必须多些主动与人沟通，主动示好，消除隔膜，以免误会愈积愈深。因有「浮沉」凶星照命，警示这个月必须慎防水险，欺山莫欺水，切勿掉以轻心。<div class='br'></div>财星破损，这个月投资及赌博均可免则免！并需慎防受骗破财，以免损失惨重。"},
                    {CZS:"辰龙",title:"强敌环伺，慎防侵吞",content:"因有「暴败」凶星出现在命宫中，这个月的运势变得崎岖不平，故此千万不可轻举妄动，以免一失足便难再翻身。工作压力沉重，而且强敌环伺，形势恶劣！<div class='br'></div>在这段期间最重要的是暂时宜守不宜攻，采取守势来保存实力，直等到有利时机才再发挥出来！财星破损，钱财易泄难聚；除了理财需加倍小心之外，并需慎防被人侵吞钱财，以致空无所有。<div class='br'></div>感情易起风波，要尽量避免恶言相向。月中需密切注意交通安全。"},
					{CZS:"巳蛇",title:"易惹官非，保持低调",content:"这个月的运势反复向上，因有「华盖」凶星照命，警示容量惹事生非，以致工作进展迟缓，拖泥带水！<div class='br'></div>在这段期间最重要的，是尽量保持低调，切勿自以为是，独断独行，以免因而导致众叛亲离；此外，并必须奉公守法，慎防官非。<div class='br'></div>财运似是而非，重大投资应尽量避免，以免焦头烂额，而横财更是绝对不宜强求；此外，请记紧切勿借贷，以免泥足深陷。健康虽无大碍，但仍需多休养生息，并应到医院作定期检查。"},
                    {CZS:"午马",title:"小心理财，带眼识人",content:"这个月的运势略为回落，虽然偶有困阻，但只要小心从事，便不会出现大问题；但可惜容易受人瞒骗，或甚至侵吞钱财！<div class='br'></div>在这段期间最重要的，是必须带眼识人，凡事不能只看表面，以免被表面迷惑而作出错误判断；请紧记害人之心不可有，但防人之心不可无。<div class='br'></div>这个月钱财容易大量往外流泄，故此理财必须加倍小心谨慎，尽量做到量入为出。健康并无大碍，但需密切注意家居安全。感情出现冷战，尽量避免决裂。"},
                    {CZS:"未羊",title:"易招小人，慎防官非",content:"因有「囚狱」凶星照命，这个月的运势急剧逆转；工作进展往往遭受阻挠破坏，而且特别容易招惹小人是非、或甚至引起官非诉讼！<div class='br'></div>在这段期间最重要的，是必须洁身自爱，切勿受人诱惑而同流合污！此外，对小人必须敬而远之，以免受其株连。财星破损，财运一落千丈；横财切勿强求，以免因贪而变贫！<div class='br'></div>此外，月尾很可能要破财挡灾。健康欠佳，慎防患上传染病。感情方面需慎防小人从中破坏，切勿随便轻信谣言。"},
                    {CZS:"申猴",title:"奋发向上，力创新猷",content:"因为命宫中吉星高照，灾星消退，故此晦气尽消，气象一新，晴空万里任翱翔。<div class='br'></div>工作困阻消除，处理业务得心应手，而且得道多助，正是奋发向上的大好时机！在这段期间最重要的，是要打铁趁热，必须乘时奋发向上，以免被人捷足先登！<div class='br'></div>并且切戒墨守成规，应该因应时势变化而作出变通调整，这样才可适者生存。财运亨通，财源广进，投资有利可图。社交应酬繁忙，很可能有一段难忘的邂逅，好好珍惜机缘。"},
                    {CZS:"酉鸡",title:"慎防圈套，安全第一",content:"这个月因为命宫凶星混杂，故此运势欠佳，必须保持警惕戒备，以防横祸飞来！工作环境复杂多变，前景暧昧不明。<div class='br'></div>在这段期间最重要的，是必须冷眼旁观，带眼识人，慎防误踏别人的圈套。这个月健康欠佳，切勿过分劳累，以免积劳成疾！<div class='br'></div>此外，因有「剑锋」凶星出现在命宫中，警示这个月易惹血光之灾，必须远离刀剑斧锯等利器，以免意外受伤，财星破损，理财必须加倍小心谨慎，以免钱财大量流泄不止。"},
                    {CZS:"戌狗",title:"带眼识人，慎防水险",content:"这个月的运势依然崎岖，工作进展仍会有诸多阻滞，必须步步为营，切勿轻举妄动！<div class='br'></div>在这期间最重要的，是要带眼识人，凡事不可太过轻信别人，一定要问个清楚，以免被人蒙蔽欺骗！此外，并需改善人缘，以免被人孤立，财运依然低沉不振，所以理财仍需加倍小心，以免钱财大量流泄不止！这个月切勿借贷，或替人担保借贷，否则便会后患无穷。<div class='br'></div>健康尚可，但请紧记慎防水险，游泳及钓鱼均需密切注意安全。"},
                    {CZS:"亥猪",title:"沟通包容，居安思危",content:"这个月的运势略为回升，但仍然相当波动，故此工作进展并不畅顺，必须提高警惕，以应付突然而来的变化；并应避免与同事产生误会、或甚至引发摩擦冲突！<div class='br'></div>在这段期间最重要的，是切勿与人斤斤计较，必须多些沟通，多写包容。财运大有起色，将会有多方面的收入；但必须居安思危，及早积谷防饥，以免年尾出现经济困难。<div class='br'></div>健康平平，努力工作之余，必须尽量多休息，以免肝脏受损。月尾密切注意家居安全。"}
				],
				index:0,MIN_YEAR : 1891,
                MAX_YEAR : 2100,
                lunarInfo : [
                    [0,2,9, 21936], [6,1,30, 9656], [0,2,17, 9584], [0,2,6, 21168], [5,1,26,43344], [0,2,13,59728],
                    [0,2,2, 27296], [3,1,22,44368], [0,2,10,43856], [8,1,30,19304], [0,2,19,19168], [0,2,8, 42352],
                    [5,1,29,21096], [0,2,16,53856], [0,2,4, 55632], [4,1,25,27304], [0,2,13,22176], [0,2,2, 39632],
                    [2,1,22,19176], [0,2,10,19168], [6,1,30,42200], [0,2,18,42192], [0,2,6, 53840], [5,1,26,54568],
                    [0,2,14,46400], [0,2,3, 54944], [2,1,23,38608], [0,2,11,38320], [7,2,1, 18872], [0,2,20,18800],
                    [0,2,8, 42160], [5,1,28,45656], [0,2,16,27216], [0,2,5, 27968], [4,1,24,44456], [0,2,13,11104],
                    [0,2,2, 38256], [2,1,23,18808], [0,2,10,18800], [6,1,30,25776], [0,2,17,54432], [0,2,6, 59984],
                    [5,1,26,27976], [0,2,14,23248], [0,2,4, 11104], [3,1,24,37744], [0,2,11,37600], [7,1,31,51560],
                    [0,2,19,51536], [0,2,8, 54432], [6,1,27,55888], [0,2,15,46416], [0,2,5, 22176], [4,1,25,43736],
                    [0,2,13, 9680], [0,2,2, 37584], [2,1,22,51544], [0,2,10,43344], [7,1,29,46248], [0,2,17,27808],
                    [0,2,6, 46416], [5,1,27,21928], [0,2,14,19872], [0,2,3, 42416], [3,1,24,21176], [0,2,12,21168],
                    [8,1,31,43344], [0,2,18,59728], [0,2,8, 27296], [6,1,28,44368], [0,2,15,43856], [0,2,5, 19296],
                    [4,1,25,42352], [0,2,13,42352], [0,2,2, 21088], [3,1,21,59696], [0,2,9, 55632], [7,1,30,23208],
                    [0,2,17,22176], [0,2,6, 38608], [5,1,27,19176], [0,2,15,19152], [0,2,3, 42192], [4,1,23,53864],
                    [0,2,11,53840], [8,1,31,54568], [0,2,18,46400], [0,2,7, 46752], [6,1,28,38608], [0,2,16,38320],
                    [0,2,5, 18864], [4,1,25,42168], [0,2,13,42160], [10,2,2,45656], [0,2,20,27216], [0,2,9, 27968],
                    [6,1,29,44448], [0,2,17,43872], [0,2,6, 38256], [5,1,27,18808], [0,2,15,18800], [0,2,4, 25776],
                    [3,1,23,27216], [0,2,10,59984], [8,1,31,27432], [0,2,19,23232], [0,2,7, 43872], [5,1,28,37736],
                    [0,2,16,37600], [0,2,5, 51552], [4,1,24,54440], [0,2,12,54432], [0,2,1, 55888], [2,1,22,23208],
                    [0,2,9, 22176], [7,1,29,43736], [0,2,18, 9680], [0,2,7, 37584], [5,1,26,51544], [0,2,14,43344],
                    [0,2,3, 46240], [4,1,23,46416], [0,2,10,44368], [9,1,31,21928], [0,2,19,19360], [0,2,8, 42416],
                    [6,1,28,21176], [0,2,16,21168], [0,2,5, 43312], [4,1,25,29864], [0,2,12,27296], [0,2,1, 44368],
                    [2,1,22,19880], [0,2,10,19296], [6,1,29,42352], [0,2,17,42208], [0,2,6, 53856], [5,1,26,59696],
                    [0,2,13,54576], [0,2,3, 23200], [3,1,23,27472], [0,2,11,38608], [11,1,31,19176],[0,2,19,19152],
                    [0,2,8, 42192], [6,1,28,53848], [0,2,15,53840], [0,2,4, 54560], [5,1,24,55968], [0,2,12,46496],
                    [0,2,1, 22224], [2,1,22,19160], [0,2,10,18864], [7,1,30,42168], [0,2,17,42160], [0,2,6, 43600],
                    [5,1,26,46376], [0,2,14,27936], [0,2,2, 44448], [3,1,23,21936], [0,2,11,37744], [8,2,1, 18808],
                    [0,2,19,18800], [0,2,8, 25776], [6,1,28,27216], [0,2,15,59984], [0,2,4, 27424], [4,1,24,43872],
                    [0,2,12,43744], [0,2,2, 37600], [3,1,21,51568], [0,2,9, 51552], [7,1,29,54440], [0,2,17,54432],
                    [0,2,5, 55888], [5,1,26,23208], [0,2,14,22176], [0,2,3, 42704], [4,1,23,21224], [0,2,11,21200],
                    [8,1,31,43352], [0,2,19,43344], [0,2,7, 46240], [6,1,27,46416], [0,2,15,44368], [0,2,5, 21920],
                    [4,1,24,42448], [0,2,12,42416], [0,2,2, 21168], [3,1,22,43320], [0,2,9, 26928], [7,1,29,29336],
                    [0,2,17,27296], [0,2,6, 44368], [5,1,26,19880], [0,2,14,19296], [0,2,3, 42352], [4,1,24,21104],
                    [0,2,10,53856], [8,1,30,59696], [0,2,18,54560], [0,2,7, 55968], [6,1,27,27472], [0,2,15,22224],
                    [0,2,5, 19168], [4,1,25,42216], [0,2,12,42192], [0,2,1, 53584], [2,1,21,55592], [0,2,9, 54560]
                ],
            }
        },
        props:{
            user:{
                type:Object
            }
        },
        mounted: function () {

			let _this= this;

			if( _this.user.birthday!=null){
                _this.initBD();
			}else{
                console.log(" null ")
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
		filters:{
			shortName:function(value,len){
				return xqzs.shortname(value,len);
			}
		},
		methods:{

            initBD:function () {
                let _this= this;
                console.log(_this.user)
                _this.birthday= _this.user.birthday;
                if(_this.birthday){
                    let date=_this.birthday.split(',');
                    _this.year=date[0];
                    _this.month=date[1];
                    _this.day=date[2];
                }

                if(_this.user.birthday!=null&&_this.user.birthday!=''){
                    let timeSplit= _this.user.birthday.split(",");
                    _this.hasBirsday=true;
                    let  time = _this.toLunar(timeSplit[0],parseInt(timeSplit[1]),timeSplit[2]);
                    console.log(time)
                    _this.index=  _this.getIndex(time[0])
                }else {
                    _this.hasBirsday=false;
                }
            },
            getIndex:function (year) {
                var ss=year-1864+1;//设定1864为初始年份
				return ss%12;
            },

            showDate:function () {
                let _this = this;
                weui.datePicker({
                    start: 1949,
                    defaultValue: [1988, 1, 1],
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
            lookLuck:function () {
                let _this = this;
                let realName=$('.realName').val();

                if( _this.birthday==''||  _this.birthday==null||realName==''){
					xqzs.weui.toast("fail","请填写姓名及生日");
					return ;
				}

                let msg={
                    "id": _this.user.id,
                    "realName": realName,
                    "birthday": _this.birthday
                };
                console.log(msg);
                _this.$http.post(web.API_PATH + 'user/update',msg)
                    .then(
                        (response)=>{
                            _this.user.birthday= _this.birthday;
                            _this.user.realName= realName;
                            _this.initBD();
                        }
                    );


            },

            //是否闰年
            isLeapYear : function(year) {
                return ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0));
            },
            //天干地支年
            lunarYear : function(year) {
                var gan = ['庚', '辛', '壬', '癸', '甲', '乙', '丙', '丁', '戊', '己'],
                    zhi = ['申', '酉', '戌', '亥', '子', '丑', '寅', '卯', '辰', '巳', '午', '未'],
                    str = year.toString().split("");
                return gan[str[3]] + zhi[year % 12];
            },
            //生肖年
            zodiacYear : function(year) {
                var zodiac = ['猴', '鸡', '狗', '猪', '鼠', '牛', '虎', '兔', '龙', '蛇', '马', '羊'];
                return zodiac[year % 12];
            },
            //公历月份天数
            //@param year 阳历-年
            //@param month 阳历-月
            solarMonthDays : function(year, month) {
                var FebDays = this.isLeapYear(year) ? 29 : 28;
                var monthHash = ['', 31, FebDays, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
                return monthHash[month];
            },
            //农历月份天数
            lunarMonthDays : function(year, month) {
                var monthData = this.lunarMonths(year);
                return monthData[month - 1];
            },
            //农历月份天数数组
            lunarMonths : function(year) {
                var yearData = this.lunarInfo[year - this.MIN_YEAR];
                var leapMonth = yearData[0];
                var bit = (+yearData[3]).toString(2);
                var months = [];
                for (var i = 0; i < bit.length; i++) {
                    months[i] = bit.substr(i, 1);
                }

                for (var k = 0, len = 16 - months.length; k < len; k++) {
                    months.unshift('0');
                }

                months = months.slice(0, (leapMonth == 0 ? 12 : 13));
                for (var i = 0; i < months.length; i++) {
                    months[i] = +months[i] + 29;
                }
                return months;
            },
            //农历每年的天数
            //@param year 农历年份
            lunarYearDays : function(year) {
                var monthArray = this.lunarYearMonths(year);
                var len = monthArray.length;
                return (monthArray[len-1] == 0 ? monthArray[len-2] : monthArray[len-1]);
            },
            //
            lunarYearMonths : function(year) {
                var monthData = this.lunarMonths(year);
                var res = [];
                var temp = 0;
                var yearData = this.lunarInfo[year - this.MIN_YEAR];
                var len = (yearData[0] == 0 ? 12 : 13);
                for (var i = 0; i < len; i++) {
                    temp = 0;
                    for (var j = 0; j <= i; j++) {
                        temp += monthData[j];
                    }
                    res.push(temp);
                }
                return res;
            },
            //获取闰月
            //@param year 农历年份
            leapMonth : function(year){
                var yearData = this.lunarInfo[year - this.MIN_YEAR];
                return yearData[0];
            },
            //计算农历日期与正月初一相隔的天数
            betweenLunarDays : function(year, month, day) {
                var yearMonth = this.lunarMonths(year);
                var res = 0;
                for (var i = 1; i < month; i++) {
                    res += yearMonth[i-1];
                }
                res += day - 1;
                return res;
            },
            //计算2个阳历日期之间的天数
            //@param year 阳历年
            //@param month
            //@param day
            //@param l_month 阴历正月对应的阳历月份
            //@param l_day  阴历初一对应的阳历天
            betweenSolarDays : function(year, month, day, l_month, l_day) {
                var time1 = new Date(year +"-"+ month +"-"+ day).getTime(),
                    time2 = new Date(year +"-"+ l_month +"-"+ l_day).getTime();
                return Math.ceil((time1-time2)/24/3600/1000);
            },
            //根据距离正月初一的天数计算阴历日期
            //@param year 阳历年
            //@param between 天数
            lunarByBetween : function(year, between) {
                var lunarArray = [], yearMonth = [], t = 0, e = 0, leapMonth = 0, m = '';
                if (between == 0) {
                    t = 1;
                    e = 1;
                    m = '正月';
                } else {
                    year = between > 0 ? year : (year - 1);
                    yearMonth = this.lunarYearMonths(year);
                    leapMonth = this.leapMonth(year);
                    between  = between > 0 ? between : (this.lunarYearDays(year) + between);
                    for (var i = 0; i < 13; i++) {
                        if (between == yearMonth[i]) {
                            t = i + 2;
                            e = 1;
                            break;
                        } else if (between < yearMonth[i]) {
                            t = i + 1;
                            e = between - ((yearMonth[i-1]) ? yearMonth[i-1] : 0) + 1;
                            break;
                        }
                    }

                    m = (leapMonth != 0 && t == leapMonth + 1)
                        ? ('闰'. this.chineseMonth(t-1))
                        : this.chineseMonth(((leapMonth != 0 && leapMonth + 1 < t) ? (t - 1) : t));
                }
                lunarArray.push(year, t, e); //年 月 日
                lunarArray.push(this.lunarYear(year),
                    this.zodiacYear(year),
                    m,
                    this.chineseNumber(e)); //天干地支年 生肖年 月份 日
                lunarArray.push(leapMonth); //闰几月
                return lunarArray;
            },
            //中文月份
            chineseMonth : function(month) {
                var monthHash = ['', '正月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '冬月', '腊月'];
                return monthHash[month];
            },
            //中文日期
            chineseNumber : function(num) {
                var dateHash = ['', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十'];
                var res;
                if (num <= 10) {
                    res = '初'+ dateHash[num];
                } else if (num > 10 && num < 20) {
                    res = '十'+ dateHash[num-10];
                } else if (num == 20) {
                    res = "二十";
                } else if (num > 20 && num < 30) {
                    res = "廿"+ dateHash[num-20];
                } else if (num == 30) {
                    res = "三十";
                }
                return res;
            },
            //转换农历
            toLunar : function(year, month, day) {
                var yearData = this.lunarInfo[year - this.MIN_YEAR];
                if (year == this.MIN_YEAR && month <= 2 && day <= 9) {
                    return [1891, 1, 1, '辛卯', '兔', '正月', '初一'];
                }
                return this.lunarByBetween(year, this.betweenSolarDays(year, month, day, yearData[1], yearData[2]));
            },
            //转换公历
            //@param year 阴历-年
            //@param month 阴历-月，闰月处理：例如如果当年闰五月，那么第二个五月就传六月，相当于阴历有13个月
            //@param date 阴历-日
            toSolar : function(year, month, day) {
                var yearData = this.lunarInfo[year - this.MIN_YEAR];
                var between = this.betweenLunarDays(year, month, day);
                var ms = new Date(year +"-" + yearData[1] +"-"+ yearData[2]).getTime();
                var s = ms + between * 24 * 60 * 60 * 1000;
                var d = new Date();
                d.setTime(s);
                year = d.getFullYear();
                month = d.getMonth() + 1;
                day  = d.getDate();
                return [year, month, day];
            }
		}
    }



    var Lunar = {

    };
</script>
