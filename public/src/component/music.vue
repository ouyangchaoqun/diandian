<template id="music">
    <div class="music_bg">
        <ul class="music_list">
            <li v-for="(music,index) in musicList"  :key="index" @click="select(index)">
                <img class="icon" :src="music.picOn" v-if="music.on"/>
                <img class="icon" :src="music.pic" v-if="!music.on"/>
                <span class="name" :class="{txt_on:music.on}">{{music.name}}</span>
            </li>
        </ul>
        <div class="music_controller">
            <div class="music_play" :class="{stop:isPlay}"@click="play()"></div>
            <div class="music_auto_close" @click="changeRTime()">
                <span class="time">{{autoCloseTime}}</span>
                <span class="txt">定时关闭</span>
            </div>
        </div>

    </div>
</template>
<script>
    var propaganda = {
        template: '#music'
    };
    var musicPath= "http://moodindex.oss-cn-shanghai.aliyuncs.com/music2/";
    export default {
        data() {
            return {
                time:0,
                timeout:null,
                audio:null,
                isPlay:false,
                url:musicPath+"1.mp3",
                autoCloseTime: 20,
                musicList: [
                    {
                        pic: web.IMG_PATH + '/music/music_1.png',
                        picOn: web.IMG_PATH + '/music/music_1_on.png',
                        name: '大海',
                        on:true,
                        url:musicPath+"1.mp3"
                    },
                    {
                        pic: web.IMG_PATH + '/music/music_2.png',
                        picOn: web.IMG_PATH + '/music/music_2_on.png',
                        name: '火焰燃烧',
                        url:musicPath+"2.mp3"
                    },
                    {
                        pic: web.IMG_PATH + '/music/music_3.png',
                        picOn: web.IMG_PATH + '/music/music_3_on.png',
                        name: '下雨的声音',
                        url: musicPath+'3.mp3'
                    },
                    {
                        pic: web.IMG_PATH + '/music/music_4.png',
                        picOn: web.IMG_PATH + '/music/music_4_on.png',
                        name: '空灵冥想',
                        url: musicPath+'4.mp3'
                    },
                    {
                        pic: web.IMG_PATH + '/music/music_5.png',
                        picOn: web.IMG_PATH + '/music/music_5_on.png',
                        name: '森林',
                        url: musicPath+'5.mp3'
                    },
                    {
                        pic: web.IMG_PATH + '/music/music_6.png',
                        picOn: web.IMG_PATH + '/music/music_6_on.png',
                        name: '风吹草地',
                        url: musicPath+'6.mp3'
                    },
                    {
                        pic: web.IMG_PATH + '/music/music_7.png',
                        picOn: web.IMG_PATH + '/music/music_7_on.png',
                        name: '鸟叫空谷回响',
                        url: musicPath+'7.mp3'
                    },
                    {
                        pic: web.IMG_PATH + '/music/music_8.png',
                        picOn: web.IMG_PATH + '/music/music_8_on.png',
                        name: '小溪流水',
                        url:musicPath+'8.mp3'
                    }
                ]
            }
        },
        methods: {
            select:function (index) {
                for(let i=0;i<this.musicList.length;i++){
                    this.musicList[i].on=false
                }
                this.musicList[index].on=true;
                this.$set(this.musicList, index, this.musicList[index]);
                this.url=this.musicList[index].url;

                if(this.timeout!=null)clearTimeout(this.timeout);
                if( this.audio!=null){
                    this.audio.pause()
                }
                this.audio=document.createElement("audio");
                this.audio.loop="loop";
                this.audio.src=this.url;//路径
                this.isPlay=false;
            },
            play:function () {

                if(this.audio!=null){
                    if (this.audio.paused) {
                        this.audio.play();
                        this.isPlay=true;
                        this.time=0;
                        if(this.timeout!=null)clearTimeout(this.timeout);
                        this.setTimeout();
                    } else {
                        this.audio.pause();// 这个就是暂停
                        this.isPlay=false;
                    }
                }

            },
            changeRTime:function(){
                if(this.autoCloseTime<60){
                    this.autoCloseTime +=20
                }else{
                    this.autoCloseTime =20;
                }
                this.time=0;
                if(this.timeout!=null)clearTimeout(this.timeout);
                this.setTimeout();
            },
            setTimeout:function () {
                let _this=this;
                this.time ++;
                console.log(this.time)
                if( this.time >= this.autoCloseTime*60 ){
                    if(this.audio!=null){
                       this.audio.pause()
                        if(this.timeout!=null)clearTimeout(this.timeout);
                    }
                }else{
                    this.timeout = setTimeout(function () {
                        _this.setTimeout()
                    },1000)
                }

            }
        },
        mounted: function () {
            this.audio=document.createElement("audio");
            this.audio.src=this.url;
            this.audio.loop="loop";

        }
    }


</script>

<style>

    .music_bg {
        height: 100%;
        background: url(../../dist/music/bg.jpg); background-size: 100% 100%
    ;
    }

    .music_list {
        height: 81%;
        overflow: scroll
    }

    .music_list li {
        width: 46%;
        clear: both;
        margin: 0 auto;
        padding: 2.367647rem 0
    }

    .music_list li:last-child {
        padding-bottom: 5rem;
    }

    .music_list .icon {
        height: 2.6470588rem;
        width: 2.6470588rem;
        float: left
    }

    .music_list .name {
        color: #8382a8;
        float: left;
        font-size: 0.8823529rem;
        margin-left: 1.2rem;
        height: 2.6470588rem;
        width: 5.6470588rem;
        line-height: 2.6470588rem;
        display: inline-block
    }

    .music_controller {
        height: 19%;
        background: #1b1b33;
        position: relative
    }

    .music_play {
        background: url(../../dist/music/play.png);
        background-size: 3.7058823529rem 3.7058823529rem;
        width: 3.7058823529rem;
        height: 3.7058823529rem;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-left: -1.8529411rem;
        margin-top: -1.8529411rem
    }
    .music_play.stop{ background: url(../../dist/music/stop.png);
        background-size: 3.7058823529rem 3.7058823529rem;}

    .music_auto_close {
        position: absolute;
        top: 50%;
        right: 10%;
        width: 3.7058823529rem;
        height: 3.7058823529rem;
        margin-top: -1.8529411rem;
        text-align: center
    }

    .music_auto_close .time {
        color: #6a6485;
        line-height: 2.029411rem;
        border: 1px solid #645c81;
        border-radius: 50%;
        height: 2.029411rem;
        width: 2.029411rem;
        display: inline-block;
        margin-top: 0.2rem;
    }

    .music_auto_close .txt {
        color: #6a6485;
        font-size: 0.7058823rem;
        display: block;
        margin-top: 6px;
    }
    .music_list .name.txt_on{ color:#77c7f5 }
</style>