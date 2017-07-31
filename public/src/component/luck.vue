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
	.luck .bottom_info{ font-size: 0.76470588rem;; margin:2.3rem 15px 0;}

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
                    {CZS:"丑牛",title:"贵人指引，抢占先机",content:"这个月的运势依然畅旺，工作得心应手，而且很可能有贵人指引相助，可收事半功倍之效！<div class='br'></div>在这段期间最重要的，是必须当机立断，抢夺先机，这样才可稳操胜券；慎勿犹豫失机而被人捷足先登，咎由自取。<div class='br'></div>财星高照，财源广进；但横财切勿过贪，以免最终得不偿失！此外，月尾并需慎防受骗破财。<div class='br'></div>健康尚可，但在公共场所必须密切注意清洁卫生，以免患上传染病。这个月易得人缘，亦易与异性擦出感情火花。"},
                    {CZS:"寅虎",title:"得道多助，脱颖而出",content:"因有「扳鞍」吉星坐镇在命宫中，这个月的运势大吉大利，气势如虹！创意特别丰富，写工作能力特强，纵有困阻，亦可迎刃而解。<div class='br'></div>在这段期间最重要的，是要心无旁骛地专心工作，切勿分心，亦切勿受人唆摆而三心两意，以免自乱阵脚而自误前程。财星高照，这个月适宜投资创业将会大有可为！但可惜横财反复，忍手为宜。<div class='br'></div>健康大有起色，但必须小心照顾小孩的健康安全。这个月易得人缘，感情亦大有进展。"},
                    {CZS:"卯兔",title:"稳打稳扎，知足常乐",content:"这个月的运势略有起色，但仍将会有不少阻滞，暂时仍未可松懈下来，以免阴沟里翻船。<div class='br'></div>工作进展尚算畅顺，但可惜仍会受人事纷争困扰！在这段期间最重要的，是必须沉着应变，稳打稳扎，先求能确保屹立不倒，然后再随图后计。<div class='br'></div>财运略有改善，正财收入转趋稳定，但横财依然低迷，故此切勿妄贪非份之财，请紧记知足常乐这古训。感情出现转机，必须好好珍惜，这个月健康尚可，但仍需提防水险。"},
                    {CZS:"辰龙",title:"小人作梗，低调免祸",content:"这个月的运势每下愈况，因有「六害」凶星照命，故此容易招惹小人，非但工作进展因而诸多阻滞，而且还很可能断送事业前途，故此切勿掉以轻心！<div class='br'></div>在这期间最重要的，是必须敬小人而远之，远离是非圈；并需尽量保持低调，以免招人妒忌而惹祸。<div class='br'></div>财运依然低沉不振，钱财易泄，必须严格量入为出，以免出现经济危机！并需慎防堕入金钱陷阱。这个月健康欠佳，身心俱疲，必须尽量多休养睡眠，以免积劳成疾。"},
					{CZS:"巳蛇",title:"时来运转，多劳多得",content:"因为命宫中吉星拱照，这个月的运势大吉大利，是全年最畅旺的其中一个月份！属蛇的人若不想今年空无所获，便必须好好把握这难得的好时机！<div class='br'></div>在这地段期间最重要的，是要量力而为，稳中求胜；暂时仍不宜大举出击，以免因为阵脚未稳而一蹶不振。财星一高照，财运亨通，可惜多是易来易去的浮财；若不注意量入为出，便难以积聚。<div class='br'></div>健康良好，但需小心注意家中小孩的安康，感情生活多姿多彩，但切勿太放纵任性。"},
                    {CZS:"午马",title:"推陈出新，勇于尝试",content:"这个月因为命宫中有众多吉星高照，故此气势如虹，有如日正中天，晴空万里任翱翔；正是大展身手，力争上游的大好时机！<div class='br'></div>在这段期间最重要的，是不要墨守成规，应该因应时势来推行改革，勇于尝试，很可能因而创出一片新天地。财运大为好转，若要投资、创业或置业，这个月将有利可图；而且会幸运中奖。<div class='br'></div>健康良好，但易受牙齿及口腔疾病困扰，应该尽早延医诊治。远离酒色，慎防过度放纵而惹下孽缘。"},
                    {CZS:"未羊",title:"钱财易泄，慎保安康",content:"这个月因为命宫中有众多凶星混杂，故此运势每下愈况。工作进展有如逆水行舟，易退而难非进；而且人事纷争有増无已，真有如雪上加霜！<div class='br'></div>在这段期间最重要的，是身处逆境中更要激起斗心，坚持到底，切勿轻易放弃，以免前功尽废。财运依然低迷不振，钱财易泄难聚，这个月将会有不少额外开支，很可能因大失预算而出现经济危机。<div class='br'></div>健康易出问题，必须密切注意心脏和血压的保养；并需注意交通安全，慎保安康。"},
                    {CZS:"申猴",title:"奋发向上，力创新猷",content:"因为命宫中吉星高照，灾星消退，故此晦气尽消，气象一新，晴空万里任翱翔。<div class='br'></div>工作困阻消除，处理业务得心应手，而且得道多助，正是奋发向上的大好时机！在这段期间最重要的，是要打铁趁热，必须乘时奋发向上，以免被人捷足先登！<div class='br'></div>并且切戒墨守成规，应该因应时势变化而作出变通调整，这样才可适者生存。财运亨通，财源广进，投资有利可图。社交应酬繁忙，很可能有一段难忘的邂逅，好好珍惜机缘。"},
                    {CZS:"酉鸡",title:"是非缠身，感情易变",content:"这个月的运势虽然略为回升，但可惜仍会有诸多阻滞；幸而倘若能小心从事，便不会成为大患！<div class='br'></div>工作方面将会有不少投诉需要处理，而且亦会因小人挑拨离间而是非缠身，在这段期间最重要的，是必须忍辱负重，采取以和为贵的手段来息事宁人，以免投诉及是非愈演愈烈而愈难以收拾。<div class='br'></div>财运略有起色，但横财勿贪！并需及早积谷防饥为宜。感情易起风波，必须小心维系，尽量避免因小事争吵，以免感情出现裂痕。"},
                    {CZS:"戌狗",title:"实事求是，改善不足",content:"这个月运势略为回稳，虽然仍会有些困阻，但工作上大致回复正轨，而且人事纷争亦将逐渐平息，正是休养生息的时机，以便养精蓄锐准备下一轮的冲刺。<div class='br'></div>在这段期间最重要的，是要实事求是，冷静客观地看清自己的不足之处，及早加以改善，以迎接未来的挑战。财运虽略有起色，但仍不是投资的好时机，暂以忍手为宜。<div class='br'></div>健康大有起色，但必须远离烟酒及毒品。这个月易与异性擦出感情火花，甜蜜温馨。"},
                    {CZS:"亥猪",title:"欲速则不达，切勿急进",content:"因有「吞陷」凶星照命，这个月的运势甚为崎岖，风雨飘摇，切勿轻举妄动，以免一子错而满盘皆落索！<div class='br'></div>在这段期间最重要的，是要慎防被相熟的人出卖，以致工作或经济成果被暗中侵吞掠夺，徒劳无功！此外，并需慎防商业圈套。<div class='br'></div>财运急剧逆转，正财横财俱不宜憧憬，必须尽量节省开支，以免现金周转困难。健康并无大碍，但需密切注意家居安全，特别要注意防火和防盗。感情进展有如逆水行舟，易退难进。"}
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
