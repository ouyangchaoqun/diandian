<template id="testQuestions">
    <div class="testQuestions">
        <v-showLoad v-if="!htmlover"></v-showLoad>
        <div v-show="htmlover">
            <div class="testQuestions_process"><span>{{activeIndex}}</span><span>/{{allNum}}</span></div>
            <div class="weui-progress testQuestions_top">
                <div class="weui-progress__bar">
                    <div class="weui-progress__inner-bar js_progress initWidth"></div>
                </div>
            </div>
            <div class="swiper-container question_box">
                <div class="swiper-wrapper">
                    <div class="swiper-slide swiper-no-swiping" v-for="(quest,questIndex) in questLists" >
                        <div class="question_style">
                            <div class="question_content">{{questIndex+1}}、{{quest.title}}</div>
                            <div class="question_img" v-if="quest.image"><img :src="quest.image" /></div>
                            <ul class="question_option">
                                <li class="nextOption" v-for="(item,index) in optionItem" v-if="quest['item'+item.val]" @click.stop="nextOption(quest.id,index)">
                                    <img class="optionItem" :src="item.src" alt=""><span class="optionHtml">{{quest['item'+item.val]}}</span>
                                    <label class="questLabel">
                                        <input class="questRadio" type="radio" v-if="quest.checkIndex==index" checked :name="'questRadio'+quest.id">
                                        <input class="questRadio" type="radio" v-if="quest.checkIndex!=index"  :name="'questRadio'+quest.id">
                                        <span class="questRadioInput" @click.stop></span>
                                    </label>
                                </li>
                            </ul>
                        </div>
                        <div class="testQuestions_btn">
                            <div class="prevOption" :class="{isLastStyle:questIndex==questLists.length-1&&quest.checkIndex!=index}" @click="prevOption()" v-if="isFrist">上一题</div>
                            <div class="prevOption isResultStyle" @click="textResult()" v-if="questIndex==questLists.length-1&&quest.checkIndex!=index">查看结果</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script type="text/javascript">
    import showLoad from './showLoad.vue';
    var testQuestions = {
        template: '#testQuestions'
    }
    export default {
        data() {
            return {
                testId:'',
                questLists:[],
                allNum:'',
                questSwiper:{},
                optionItem:[
                    {val:'A',src:'../../dist/A.png'},
                    {val:'B',src:'../../dist/B.png'},
                    {val:'C',src:'../../dist/C.png'},
                    {val:'D',src:'../../dist/D.png'},
                    {val:'E',src:'../../dist/E.png'},
                    {val:'F',src:'../../dist/F.png'},
                    {val:'G',src:'../../dist/G.png'},
                    {val:'H',src:'../../dist/H.png'}
                ],//'ABCDEFGH'.split(''),
                activeIndex:'1',
                isFrist:false,
                scoreCount:[],
                answerId:'',
                htmlover:false,
                canNext:true,
                resultId:''
        }
        },
        mounted: function () {
            let _this = this;
            _this.testId = _this.$route.query.testId;







            let guestData = ''
            if (web.guest) {
                this.isGuest = true;
                guestData = "?guest=true";
            }

            _this.$http.get(web.API_PATH + 'user/find/by/user/Id/_userId_').then(function (data) {
                if(data.data.status==1){
                    _this.theUser = data.data.data.id
                }else {
                    _this.theUser = 0
                }
                _this.$http.get(web.API_PATH + 'test/get/' + _this.testId +'/'+_this.theUser+guestData).then(response => {
                    if (response.data.status === 1) {
                        _this.testDetail = response.data.data;
                        xqzs.wx.shareConfig.test.desc=_this.testDetail.share_title;
                        xqzs.wx.shareConfig.test.link=web.BASE_PATH+"#/psychtestDetail?testId="+_this.testId;
                        xqzs.wx.setConfig(_this,false,xqzs.wx.shareConfig.test);
                    }

                }, response => {
                    // error

                });

            })



            //console.log(_this.testId)
            _this.$http.get(web.API_PATH+'test/get/allquestion/'+_this.testId+'/_userId_').then(response => {
                //console.log(response)
                _this.questLists = response.data.data;
                _this.htmlover = true;
                _this.allNum =  _this.questLists.length
                $('.initWidth').css('width',100/_this.allNum+'%')
                _this.questSwiper = new Swiper ('.question_box', {
                    direction : 'horizontal',
                    noSwiping : true,
                    observer:true,//修改swiper自己或子元素时，自动初始化swiper
                    onSlideChangeStart:function () {
                        _this.activeIndex= _this.questSwiper.activeIndex+1
                        $('.initWidth').css('width',100/_this.allNum*_this.activeIndex+'%')
                        if(_this.activeIndex==1){
                            _this.isFrist = false
                        }else {
                            _this.isFrist = true
                        }
                    },
                    onSlideChangeEnd :function () {
                        _this.canNext=true;
                    }
                })
            }, response => {
                // error

            });

        },
        components: {
            'v-showLoad': showLoad
        },
        methods: {
            nextOption:function (id,index) {
                let _this = this;
                if(!_this.canNext){
                    return;
                }
                _this.canNext = false;
               _this.updateScore(id,index)
                //console.log( _this.questSwiper)
                _this.questSwiper.slideNext();
            },
            updateScore:function (id,answerIndex) {
                var flag=false;
                for(var i=0,l=this.questLists.length;i<l;i++){
                    if(this.questLists[i].id == id){
                        this.questLists[i].answer = this.optionItem[answerIndex].val;
                        this.questLists[i].checkIndex = answerIndex;
                        this.$set(this.questLists,i,this.questLists[i])
                        console.log(this.questLists[i].answer)
                        flag = true;
                        break;

                    }
                }
            },
            prevOption:function () {
                let _this = this;
                _this.questSwiper.slidePrev();
            },
            textResult:function () {
                let _this = this;
//                xqzs.weui.dialog(
//                    '提示',
//                    '是否提交',
//                    function () {
//                    },function () {
                        var answers='';
                        for(var i=0,l=_this.questLists.length;i<l;i++){

                            answers+= "\""+_this.questLists[i].id+"\":\""+_this.questLists[i].answer+"\","
                        }
                        //console.log(answers)
                        answers='{'+answers.substr(0,answers.length-1)+'}';
                        //console.log(answers)
                        answers = JSON.parse(answers);
                        //console.log(answers)
                        _this.$http.put(web.API_PATH + 'test/get/score/'+ _this.testId+'/_userId_', answers)
                            .then(function (bt) {
                                //console.log(bt.data.data)
                                if(bt.data.status==1){
                                    _this.answerId = bt.data.data.id;
                                    _this.resultId = bt.data.data.resultId
                                    console.log(_this.resultId)
                                    //_this.$router.replace('/testResult?answerId='+_this.answerId)
                                    _this.$router.replace({path:'/testResult',query:{answerId:_this.answerId,resultId: _this.resultId }})
                                }
                                //成功跳转到结果页
                            });
                   // }
               // )
            }
        }

    }
</script>
<style>
    .testQuestions .weui-progress__inner-bar{background: #FE7301 ;border-radius: 0.35rem;}
    .testQuestions .weui-progress__bar{height:0.35rem;border-radius: 0.35rem;}
    .questLabel{
        position: absolute;
        right:0.88235rem;
    }
    .testQuestions .question_style{background: #fff;margin:0 0.88235rem;border-radius: 2px;}
    .questRadio{display:none}
    .questRadioInput{background-color:#fff;
        border:1px solid #FE7301;
        border-radius:50%;
        display:inline-block;
        height:0.88235rem;
        margin-top:-3px;
        vertical-align:middle;
        width:0.88235rem;
        line-height:1
    }
    .questRadio:checked + .questRadioInput:after{
        background-color:#FE7301;
        border-radius:50%;content:"";
        display:inline-block;
        height:0.65rem;
        width:0.65rem;
        margin:2px;
        text-align: center;
    }
    .testQuestions_top{
        padding:0.70588235rem 1.17647rem 1.471rem 1.17647rem;
    }
    .testQuestions_process{
        text-align: center;
        color: #666;
        line-height: 1;
        padding-top: 1.176471rem;
    }
    .testQuestions_process span:nth-of-type(1){
        font-size: 0.88235rem;
    }
    .testQuestions_process span:nth-of-type(2){
        font-size: 0.88235rem;
    }
    .question_content{
       padding: 1.62rem 0 1.588235rem 0;
        color: #333;
        font-size: 1.0588235rem;
        line-height: 1.4117647rem;
        text-align: left;
        padding-left: 0.88235rem;
    }
    .question_option{
        color: #333;
        font-size: 0.88235rem;
    }
    .nextOption{
        padding:0.88235rem 0;
        margin:0 1.17647rem;
        border-bottom: 1px solid rgba(204,204,204,0.5);
        display: -webkit-box;
        display: -webkit-flex;
        display: flex;
        position: relative;
    }
    .nextOption:active{
        background: #ECECEC;
    }
    .optionHtml{
        width:76%;
    }
    .question_option li:last-of-type{
        border-bottom: 0;
    }
    .optionItem{
        margin-right: 0.88235rem;
        height:1.176471rem;
        display: inline-block;
        margin-top:0.1rem;
    }
    .prevOption{
        font-size: 0.94117647rem;
        height:2.353rem;
        background: linear-gradient(to right, #FF9E19,#FE7301);
        border-radius: 2px;
        line-height: 2.353rem;
        color:#fff;
        text-align: center;
    }
    .testQuestions_btn{
        text-align: center;
        padding:2.0588rem 0.88235rem;
    }
    .testQuestions_btn .isLastStyle{
        background: #fff;
        color:#FE7301;
        float: left;
        width:41.333%;
        margin-left:0.29rem;
        border:1px solid #FE7301;
        height:2.236rem;
    }
    .testQuestions_btn .isResultStyle{
        margin-right: 0.29rem;
        float: right;
        width:41.333%;
        margin-top: 0;
    }
    .prevOption:active{
        background: #d86204;
    }
    .testQuestions_btn .isResultStyle:active{
        background: #d86204;
    }
    .testQuestions_btn .isLastStyle:active{
        background: #eee;
    }
    .question_style .question_img{
        margin:  0 1.17647rem;
    }
    .question_style .question_img img{ width: 100%}

</style>