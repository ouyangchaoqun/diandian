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
    export default {
        data() {
            return {
                time:0,
                timeout:null,
                audio:null,
                isPlay:false,
                url:"http://m8.music.126.net/20170816182208/b95452ed2da4c626a1efb550b4624091/ymusic/269b/4222/e2ad/cb000239b0ae4afcf8f92e07d90da2d7.mp3",
                autoCloseTime: 20,
                musicList: [
                    {
                        pic: web.IMG_PATH + '/music/music_1.png',
                        picOn: web.IMG_PATH + '/music/music_1_on.png',
                        name: '大海',
                        on:true,
                        url: 'http://m8.music.126.net/20170816182208/b95452ed2da4c626a1efb550b4624091/ymusic/269b/4222/e2ad/cb000239b0ae4afcf8f92e07d90da2d7.mp3'
                    },
                    {
                        pic: web.IMG_PATH + '/music/music_2.png',
                        picOn: web.IMG_PATH + '/music/music_2_on.png',
                        name: '火焰燃烧',
                        url: 'http://m7.music.126.net/20170816183147/53452f3657ba68b1965d70744875356b/ymusic/55dd/8c7e/21b1/f6c7fde240458c3d4277d5d57ee00a95.mp3'
                    },
                    {
                        pic: web.IMG_PATH + '/music/music_3.png',
                        picOn: web.IMG_PATH + '/music/music_3_on.png',
                        name: '下雨的声音',
                        url: 'http://m8.music.126.net/20170816171211/c4ff1f1e39e94ee91798c820f1e5c5e1/ymusic/5023/4044/0ef2/1768fb9fc869ffa4fc52c3680869a6f3.mp3'
                    },
                    {
                        pic: web.IMG_PATH + '/music/music_4.png',
                        picOn: web.IMG_PATH + '/music/music_4_on.png',
                        name: '空灵冥想',
                        url: 'http://m10.music.126.net/20170816171245/a00049f6b892e0472b13e9e11e3dd240/ymusic/94b4/b597/1ab3/5d70d587d8e9ac4ee9f70a5db02ad243.mp3'
                    },
                    {
                        pic: web.IMG_PATH + '/music/music_5.png',
                        picOn: web.IMG_PATH + '/music/music_5_on.png',
                        name: '森林',
                        url: 'http://m7.music.126.net/20170816171410/e453bdfa6aabb1e1c207d3dd089efb00/ymusic/477f/493d/6448/4c0a689cbd2de697de10e4c72204dd0e.mp3'
                    },
                    {
                        pic: web.IMG_PATH + '/music/music_6.png',
                        picOn: web.IMG_PATH + '/music/music_6_on.png',
                        name: '风吹草地',
                        url: 'http://m8.music.126.net/20170816171428/7c349ecd308300d81f8054ee41b9ff28/ymusic/ee37/79ec/b2ec/8c6f74be691711d063db3d3be6f2d2cf.mp3'
                    },
                    {
                        pic: web.IMG_PATH + '/music/music_7.png',
                        picOn: web.IMG_PATH + '/music/music_7_on.png',
                        name: '鸟叫空谷回响',
                        url: 'http://m8.music.126.net/20170816171451/bdd58ba80ca6cf5c3ebca3ee741d3a10/ymusic/0c43/fe31/da9b/8a364b61342e2f171034cba8c2595bf1.mp3'
                    },
                    {
                        pic: web.IMG_PATH + '/music/music_8.png',
                        picOn: web.IMG_PATH + '/music/music_8_on.png',
                        name: '小溪流水',
                        url: 'http://m8.music.126.net/20170816171541/4b4549c2987605ea22880b6a1a74dd9e/ymusic/28ba/00f4/c499/4f769e39e414963414ac8f3533389eb4.mp3'
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