<template id="funny">
    <div class="funny_box">

        <div class="funny_exp">
            <div class="exp_active pubu"  >
                <figure @click="selectGif(pic)" v-for="pic in pictures" ><img :src="setFigureStyle(pic.width,pic.height,pic.path)" /></figure>
                <span v-if="!isEnd" class="load-paging">数据加载中..</span>
                <span v-if="isEnd" class="load-paging">没有更多图片</span>
            </div>
        </div>
    </div>
</template>
<style>
    .pubu{ position: relative}
    .funny_ul{
        height:100%;
        overflow-y: scroll;
        width:23.4666%;
        background: #eeeeee;
    }
    .exp_active figure img { width: 100%;}
    .exp_active figure{
        opacity: 0;
        float: left;
        display: block !important;
        width:27.8745644%;
        overflow: hidden;
        line-height: 1 !important;
        font-size: 0 !important;
        border:solid 1px #ccc;
    }
    .exp_active figure.loadedbox{
        opacity: 1;
    }
    .exp_active .load-paging{
        position: absolute;
        left:0;
        bottom:0;
        display: block;
        text-align: center;
        margin: 0 auto;
        float: left;
        width: 100%;
        border: none;
        color: #dddddd;
        height: 30px;
        line-height: 30px;
        font-size: 13px;
    }
    .funny_exp img{
    }
    .funny_exp div{
        margin-left: 15px; margin-right: 5px; margin-top: 10px;
        display: none;
    }
    .funny_box{
        height:100%;
        background: #ffffff;
    }
    .funny_ul li{
        font-size: 15px;
        color: #999999;
        height:44px;
        line-height: 44px;
        background: #eeeeee;
        text-align: center;
        border-left:3px solid #eeeeee;
        position: relative;
    }
    .funny_ul .funny_active{
        border-left:3px solid #1cac1b;
        background: #ffffff;
        color: #1cac1b;
    }
    .funny_exp{
        position: absolute;
        width:100%;
        top:0;
        right:0px;
        overflow-y: scroll;
        height:100%;
    }
    .funny_exp>div{
        padding-top: 10px;
    }
    .funny_exp .exp_active{
        display: block;
    }
</style>
<script type="es6">
    import Bus from './bus.js';
    let funny = {
        template: '#funny'
    };

    export default {
        props: ['moodvalue'],
        data() {
            return {
                pictures: [],
                activedIndex:0,
                funnyExpWidth:0,
                isLoading:false,
                isEnd:false,
                pageConfig:{
                    size:18,
                    currentIndex:1
                }
            }
        },
        methods: {

            getFunnyPictures:function (ix) {
                let isPubu=false;
                let that = this;
                if(that.isLoading==true||that.isEnd==true){ return }
                that.isLoading= true;

                that.$http.get(web.API_PATH + 'funny/query/page/by/moodvalue/' + that.moodvalue + '/' + that.pageConfig.currentIndex + '/' + that.pageConfig.size)
                    .then(function (bt) {
                        /*console.log(bt)*/
                        if (bt.data && bt.data.status == 1) {
                            var _pagedata_ = bt.data.data.rows;

                            if(_pagedata_.length<that.pageConfig.size)that.isEnd=true;
                            for(var i =0 ;i<_pagedata_.length;i++){
                                that.pictures.push(_pagedata_[i]);
                            }
                            let loadCount=0;
                            console.log(_pagedata_);
                            console.log(that.pageConfig.currentIndex );
                            that.isLoading=false;
                            that.pageConfig.currentIndex = that.pageConfig.currentIndex +1
                            that.$nextTick(function () {
                                $('.pubu img').each(function () {
                                    var ___this=$(this);
                                    var image=new Image;

                                    image.src=$(this).attr("src");
                                    image.onload= function () {
                                        if(!___this.hasClass("loaded")){
                                            loadCount++;
                                            //console.log("loadCount:"+loadCount)
                                            //console.log("length:"+_pagedata_.length)
                                            if(loadCount==_pagedata_.length ){
                                                $('.pubu').BlocksIt({
                                                    numOfCol:3,
                                                    offsetX: 5,
                                                    offsetY: 5
                                                });
                                                isPubu=true;

                                            }
                                            ___this.addClass("loaded");
                                            ___this.parents("figure").addClass("loadedbox")
                                        }
                                    }
//                                    console.log($(this).attr("src"))
//                                    $(this).load(function(){
//                                        console.log("load")
//                                    });
                                });
                                setTimeout(function () {
                                    if(isPubu==false){
                                        $('.pubu').BlocksIt({
                                            numOfCol:3,
                                            offsetX: 5,
                                            offsetY: 5
                                        });
                                    }

                                },3000)



                            })

                        }
                    })

            },

            setFigureStyle:function(w,h,src){
                let that = this;
                src = src + xqzs.oss.Size.resize(100,100);
                return src   ;
            },
            selectGif:function(gif){
                Bus.$emit('funnyPictureChange',gif);
            },

            loadGifByPages(){
                var ix = this.pageConfig.currentIndex;
                this.getFunnyPictures(ix);
            }
        },

        mounted: function () {
            let that = this;
//            that.getFunnyTypes(function () {
//                if(that.funnytypes.length>0){
//                    that.getFunnyPictures(0);
//                }
//            });
            that.getFunnyPictures(0);
            $('.funny_exp').unbind('scroll')
                .bind('scroll',function(){
                    var $this =$(this),
                        viewH =$(this).height(),//可见高度
                        contentH =$(this).get(0).scrollHeight,//内容高度
                        scrollTop =$(this).scrollTop();//滚动高度
                    if(contentH - viewH - scrollTop <= 100) { //到达底部100px时,加载新内容
                    //if(scrollTop/(contentH -viewH)>=0.95){//
                        that.loadGifByPages();
                    }
                });

            that.funnyExpWidth = $('.funny_exp').width()*27.8745644/100 - 2;
            xqzs.wx.setConfig(that);
        }
    }
</script>
