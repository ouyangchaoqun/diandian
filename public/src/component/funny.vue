<template id="funny">
    <div class="funny_box">
        <ul class="funny_ul">
            <li  v-for="(item,index) in funnytypes" v-bind:key="index" @click="changeTypes(index)":class="{'funny_active':index==activedIndex}">
                {{item.name}}
            </li>
        </ul>
        <div class="funny_exp">
            <div v-for="(item,index) in funnytypes" v-bind:key="index" :class="{'exp_active':index==activedIndex}">
                <figure v-for="pic in item.pictures" :style="setFigureStyle(pic.width,pic.height,pic.path)">
                </figure>
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
        right:-5px;
        overflow-y: scroll;
        padding-top: 10px;
        height:600px;
    }
    .funny_exp .exp_active{
        display: block;
    }
</style>
<script type="es6">

    let funny = {
        template: '#funny'
    };

    export default {
        props: ['moodvalue'],
        data() {
            return {
                funnytypes: [],
                activedIndex:0,
                funnyExpWidth:0
            }
        },
        methods: {
            getFunnyTypes: function (callback) {
                let that = this;
                that.$http.get(web.API_PATH + 'funny/query/types')
                    .then(function (bt) {
                        if(bt.data && bt.data.status == 1){
                            that.funnytypes = bt.data.data;
                            if(typeof callback == 'function'){
                                callback();
                            }
                        }
                    });
            },
            getFunnyPictures:function (ix) {
                let that = this;
                var type = that.funnytypes[ix];
                that.$http.get(web.API_PATH+'funny/query/page/by/type/'+type.id+'/1/100')
                    .then(function (bt) {
                        if(bt.data && bt.data.status == 1){
                            that.funnytypes[ix].pictures = bt.data.data.rows;
                            //that.$set(that)
                            that.$set(that.funnytypes, ix, that.funnytypes[ix]);
                        }
                    })
            },
            changeTypes:function (ix) {
                this.activedIndex = ix;
                this.getFunnyPictures(ix);
            },
            setpicsize:function (w,h) {
                //
                if(w>h){
                    return 'height:100%'
                }
                return 'width:100%';
            },
            setFigureStyle:function(w,h,src){
                let that = this;
                var style = 'width:'+that.funnyExpWidth+'px;height:'+that.funnyExpWidth+'px;background:url('+src+') no-repeat center;';
                if(w>h){
                    style += 'backgroundSize:100% auto'
                }else{
                    style += 'backgroundSize:auto 100%'
                }
                return style;
            }
        },
        mounted: function () {
            let that = this;
            that.getFunnyTypes(function () {
                if(that.funnytypes.length>0){
                    that.getFunnyPictures(0);
                }
            });
            that.funnyExpWidth = $('.funny_exp').width()*27.8745644/100 - 2;
        }
    }
</script>
