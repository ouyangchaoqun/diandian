<template id="testQuestions">
    <div class="testQuestions">
        <div class="weui-progress testQuestions_top">
            <div class="weui-progress__bar">
                <div class="weui-progress__inner-bar js_progress initWidth"></div>
            </div>
        </div>
        <div class="testQuestions_process">{{activeIndex}}/{{allNum}}</div>
        <div class="swiper-container question_box">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(quest,questIndex) in questLists">
                    <div>
                        <div class="question_content">{{quest.title}}</div>
                        <ul class="question_option">
                            <li class="nextOption" v-for="(item,index) in optionItem" v-if="quest['item'+item]" @click="nextOption(quest.id,index)">
                                <span class="optionItem">{{item}}</span><span>{{quest['item'+item]}}</span>
                                <label class="questLabel">
                                    <input class="questRadio" type="radio" v-if="quest.checkIndex==index" checked :name="'questRadio'+quest.id">
                                    <input class="questRadio" type="radio" v-if="quest.checkIndex!=index"  :name="'questRadio'+quest.id">
                                    <span class="questRadioInput"></span>
                                </label>
                            </li>
                            <div class="testQuestions_btn">
                                <div class="weui-btn weui-btn_primary prevOption" @click="prevOption()" v-if="isFrist">上一题</div>
                                <div class="weui-btn weui-btn_primary prevOption" @click="textResult()" v-if="questIndex==questLists.length-1&&quest.checkIndex!=index">查看结果</div>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>

        </div>


    </div>
</template>
<script type="text/javascript">
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
                optionItem:'ABCDEFGH'.split(''),
                activeIndex:'1',
                isFrist:false,
                scoreCount:[],
                answerId:''
            }
        },
        mounted: function () {
            let _this = this;
            _this.testId = _this.$route.query.testId
            console.log(_this.testId)
            _this.$http.get(web.API_PATH+'test/get/allquestion/1/_userId_').then(response => {
                console.log(response)
                _this.questLists = response.data.data;

                _this.allNum =  _this.questLists.length
                $('.initWidth').css('width',100/_this.allNum+'%')
                _this.questSwiper = new Swiper ('.question_box', {
                    direction : 'horizontal',
                    observer:true,//修改swiper自己或子元素时，自动初始化swiper
                    onSlideChangeStart:function () {
                        _this.activeIndex= _this.questSwiper.activeIndex+1
                        $('.initWidth').css('width',100/_this.allNum*_this.activeIndex+'%')
                        if(_this.activeIndex==1){
                            _this.isFrist = false
                        }else {
                            _this.isFrist = true
                        }
                    }
                })
            }, response => {
                // error

            });



        },
        methods: {
            nextOption:function (id,index) {
                let _this = this;
                console.log(id,index+1);
               _this.updateScore(id,index)
                console.log(_this.scoreCount)
                _this.questSwiper.slideNext();
            },
            updateScore:function (id,answerIndex) {
                var flag=false;
                for(var i=0,l=this.questLists.length;i<l;i++){
                    if(this.questLists[i].id == id){
                        this.questLists[i].answer = this.optionItem[answerIndex];
                        this.questLists[i].checkIndex = answerIndex;
                        this.$set(this.questLists,i,this.questLists[i])
                        flag = true;
                        break;
                    }
                }
                console.log(this.questLists)
            },
            prevOption:function () {
                let _this = this;
                _this.questSwiper.slidePrev();
            },
            textResult:function () {
                let _this = this;
                xqzs.weui.dialog(
                    '提示',
                    '是否提交',

                    function () {

                    },function () {
                        var answers='';
                        for(var i=0,l=_this.questLists.length;i<l;i++){

                            answers+= "\""+_this.questLists[i].id+"\":\""+_this.questLists[i].answer+"\","
                        }
                        console.log(answers)
                        answers='{'+answers.substr(0,answers.length-1)+'}';
                        console.log(answers)
                        answers = JSON.parse(answers);
                        console.log(answers)
                        _this.$http.put(web.API_PATH + 'test/get/score/'+ _this.testId+'/_userId_', answers)
                            .then(function (bt) {
                                console.log(bt.data.data)
                                if(bt.data.status==1){
                                    _this.answerId = bt.data.data.id
                                    _this.$router.push('/testResult?answerId='+_this.answerId)
                                }
                                //成功跳转到结果页


                            });
                    }
                )


            }
        }

    }
</script>
<style>
    .questLabel{
        float: right;
        margin-right: 0.3rem ;
    }
    .questRadio{display:none}
    .questRadioInput{background-color:#fff;
        border:1px solid #1AAC19;
        border-radius:50%;
        display:inline-block;
        height:0.88235rem;
        margin-top:-3px;
        vertical-align:middle;
        width:0.88235rem;
        line-height:1
    }
    .questRadio:checked + .questRadioInput:after{
        background-color:#1AAC19;
        border-radius:50%;content:"";
        display:inline-block;
        height:0.65rem;
        width:0.65rem;
        margin:2px;
        text-align: center;
    }
    .testQuestions{
        background: #fff;
    }
    .testQuestions_top{
        padding:1.7647rem 1.17647rem 0.70588rem 1.17647rem;
    }
    .testQuestions_process{
        text-align: center;
        color: #666;
        font-size: 0.8235rem;
        line-height: 1;
    }
    .question_content{
       padding: 2.8235rem 2.0588rem 2.3529rem 1.117647rem;
        color: #333;
        font-size: 0.88235rem;
        line-height: 1.4117647rem;

    }
    .question_option{
        color: #666;
        font-size: 0.7647rem;
    }
    .nextOption{
        padding:0.88235rem 1.17647rem;
        border-bottom: 1px solid #eee;
    }
    .nextOption:active{
        background: #ECECEC;
    }
    .question_option li:last-of-type{
        border-bottom: 0;
    }
    .optionItem{
        margin-right: 0.88235rem;
    }
    .prevOption{
        width:8.8235rem;
        font-size: 0.94117647rem;
        margin-top: 2.0588rem;
        display: inline-block;
    }
    .testQuestions_btn{
        text-align: center;
    }
</style>