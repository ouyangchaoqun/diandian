<template id="funny">
    <div class="funny_box">
        <ul class="funny_ul">
            <li  v-for="(item,index) in funnytypes" v-bind:key="index" @click="changeTypes(index)":class="{'funny_active':index==activedIndex}">
                {{item.name}}
            </li>
        </ul>
        <div class="funny_exp">
            <div v-for="(item,index) in funnytypes" v-bind:key="index" :class="{'exp_active':index==activedIndex}">
                <figure @click="selectGif(pic)" v-for="pic in item.pictures" :style="setFigureStyle(pic.width,pic.height,pic.path)">
                </figure>
                <figure v-if="item.hasmore" class="load-paging">数据加载中。。</figure>
                <figure v-if="!item.hasmore" class="load-paging">全部加载</figure>
            </div>
        </div>
    </div>
</template>
<style>
    .funny_ul{
        height:100%;
        overflow-y: scroll;
        width:23.4666%;
        background: #eeeeee;
    }
    .exp_active figure{
        float: left;
        display: block !important;
        width:27.8745644%;
        height:27.8745644%;
        overflow: hidden;
        margin-right:4.181184%;
        margin-bottom: 10px;
        border:solid 1px #ccc;
    }
    .exp_active figure.load-paging{
        clear: both;
        text-align: center;
        margin: 0 auto;
        float: left;
        width: 100%;
        border: none;
        color: #dddddd;
        height: 50px;
        line-height: 50px;
    }
    .funny_exp img{
    }
    .funny_exp div{
        margin-left:4.181184%;
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
        width:75.53333%;
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
                funnytypes: [],
                activedIndex:0,
                funnyExpWidth:0,
                pageConfig:{
                    size:30,
                    currentIndex:0
                }
            }
        },
        methods: {
            getFunnyTypes: function (callback) {
                let that = this;
                that.$http.get(web.API_PATH + 'funny/query/types')
                    .then(function (bt) {
                        if(bt.data && bt.data.status == 1){
                            var allfunnytypes = bt.data.data;
                            for(var i = 0,l=allfunnytypes.length;i<l;i++){
                                allfunnytypes[i].hasmore=true;//有未加载数据
                            }
                            that.funnytypes = allfunnytypes;
                            //
                            if(typeof callback == 'function'){
                                callback();
                            }
                        }
                    });
            },
            setTypePageConfig:function (ix,key,value) {
                let that = this;
                var _key_ ='config_'+ix;
                that.pageConfig[_key_][key] = value;
            },
            getTypePageConfig:function (ix) {
                let that = this;
                var _key_ ='config_'+ix;
                if(typeof that.pageConfig[_key_] == 'undefined'){
                    that.pageConfig[_key_] = {locked:false,pageindex:1};
                }
                return that.pageConfig[_key_];
            },
            getFunnyPictures:function (ix) {
                let that = this;
                var typeconfig = that.getTypePageConfig(ix);
                if (typeconfig['locked'] || !that.funnytypes[ix].hasmore) {
                    return;
                }
                that.pageConfig.currentIndex = ix;
                that.setTypePageConfig(ix, 'locked', true);
                var page = typeconfig.pageindex;

                var type = that.funnytypes[ix];
                that.$http.get(web.API_PATH + 'funny/query/page/by/type/' + type.id + '/' + page + '/' + that.pageConfig.size)
                    .then(function (bt) {
                        that.setTypePageConfig(ix, 'locked', false);
                        if (bt.data && bt.data.status == 1) {
                            console.info('成功加载数据:类别:'+type.id+'第'+page+'页');

                            var _pagedata_ = bt.data.data.rows;

                            that.setTypePageConfig(ix, 'pageindex', page + 1);
                            if (_pagedata_.length < that.pageConfig.size) {
                                that.funnytypes[ix].hasmore = false;
                                console.info('该类别已全部加载')
                            }

                            var _oldpics_ = that.funnytypes[ix].pictures || [];
                            that.funnytypes[ix].pictures = _oldpics_.concat(_pagedata_);
                            that.$set(that.funnytypes, ix, that.funnytypes[ix]);
                        }
                    })
            },
            changeTypes:function (ix) {
                this.activedIndex = ix;
                this.getFunnyPictures(ix);
            },
            setFigureStyle:function(w,h,src){
                let that = this;
                src = src + xqzs.oss.Size.resize(100,100);
                var style = 'width:'+that.funnyExpWidth+'px;height:'+that.funnyExpWidth+'px;background:url('+src+') no-repeat center;';
                if(w>h){
                    style += 'backgroundSize:100% auto'
                }else{
                    style += 'backgroundSize:auto 100%'
                }
                return style;
            },
            selectGif:function(gif){
                Bus.$emit('funnyPictureChange',gif);
            },
            loadGifs:function () {

            },
            loadGifByPages(){
                var ix = this.pageConfig.currentIndex;
                this.getFunnyPictures(ix);
            }
        },
        mounted: function () {
            let that = this;
            that.getFunnyTypes(function () {
                if(that.funnytypes.length>0){
                    that.getFunnyPictures(0);
                }
            });

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
