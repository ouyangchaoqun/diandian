<template id="treeHole">
    <div class="treeHole_box">
        <div v-title>小树洞</div>
        <div class="treeHole_text">
            <p>“树洞”，最早源于童话故事《皇帝长了驴耳朵》，说一个国王长了一对驴耳朵，每个给他理发的人时候都会忍不住告诉别人，从而被砍头。有一个理发匠把这个秘密藏的好辛苦，终于在快憋不住时。就在山上对着一个大树的洞里说出了这个秘密。结果从此这树上的叶子只要放在嘴边一吹，就会发出“国王有驴耳朵”的声音。</p>
            <p>“以前的人，要是心里有了秘密，不想让别人知道他们会跑到山上，找一颗树，在树上挖一个洞，然后把秘密全说进去，再用泥巴把洞封上，那秘密就会永远留在那颗树里，没有人会知道”——电影《花样年华》</p>
        </div>
        <div class="treeHole_c">
            <div>
                <p>于是，</p>
                <p>"树洞"成了隐藏秘密的象征</p>
                <p>在这里，</p>
                <p>是好友和我寄存心情的地方</p>
                <p>发布心情采用匿名的方式</p>
                <p>多与好友留言互动吧</p>
            </div>
        </div>
        <router-link to="/friendList" class="treeHole_bottom">
                <p>我关注的好友</p>
            <img src="../images/tree_b.png" alt="">
        </router-link>
    </div>
</template>
<script type="text/javascript">

    var treeHole = {
        template: '#treeHole'
    }
    export default {
        data() {
            return {

            }
        }

    }
</script>
<style>
.treeHole_box{
    height:100%;
    width:100%;
    background: url("../images/treeHole_bg.jpg") no-repeat;
    background-size: 100% 100%;
}
    .treeHole_text{
        margin:1.470588rem 0.76471rem 0 0.70588rem;
        color: #663333;
        font-size: 0.823529rem;
    }
    .treeHole_text p{
        margin-bottom: 0.941176rem;
        text-indent:0.588rem;
        line-height: 1.4117647rem;
    }
    .treeHole_c{
        height:9.647rem;
        width:10.235rem;
        background: url("../images/circular.png") no-repeat;
        background-size: cover;
        position: absolute;
        left:10rem;
        /*right: 1.823529rem;*/
        bottom:7.17647rem;
    }
    .treeHole_c p{
        color: #663333;
        font-size: 0.588235rem;
        line-height: 1.17647rem;
    }
    .treeHole_c div{
        position: absolute;
        top: 1.411764rem;
        left:1.88235rem;
    }
    .treeHole_bottom{
        width: 6.17647rem;
        height: 2rem;
        background: rgba(255,255,255,0.61);
        border-radius: 1rem;
        position: absolute;
        bottom: 2.117647rem;
        right:0.76471rem;
        color: #663333;
        font-size: 0.76471rem;
        line-height: 2rem;
        padding-left: 0.88235rem;
    }
.treeHole_bottom img{
    height: 0.88235rem;
    width: 0.88235rem;
    position: absolute;
    right:0.4117647rem;
    top:0.588235rem;
}
    .treeHole_bottom:active{
        background: rgba(244,199,146,1);
    }
</style>


