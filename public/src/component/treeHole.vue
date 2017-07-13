<template id="treeHole">
    <div class="treeHole_box">
        <div v-title>小树洞</div>
        <div class="treeHole_text">
            <p>“树洞”，最早源于童话故事《皇帝长了驴耳朵》，说
                一个国王长了一对驴耳朵，每个给他理发的人时候都会忍
                不住告诉别人，从而被砍头。有一个理发匠把这个秘密藏
                的好辛苦，终于在快憋不住时。就在山上对着一个大树的
                洞里说出了这个秘密。结果从此这树上的叶子只要放在嘴
                边一吹，就会发出“国王有驴耳朵”的声音。</p>
            <p>“以前的人，要是心里有了秘密，不想让别人知道他们
                会跑到山上，找一颗树，在树上挖一个洞，然后把秘密全
                说进去，再用泥巴把洞封上，那秘密就会永远留在那颗树
                里，没有人会知道”
                ——电影《花样年华》</p>
        </div>
        <div class="treeHole_c">
            <div>
                <p>于是，</p>
                <p>"树洞"成了隐藏秘密的象征</p>
                <p>在这里，</p>
                <p>是好友和我寄存心情的地方</p>
                <p>发布心情采用匿名的方式</p>
                <p>您能猜出TA是谁嘛</p>
            </div>
        </div>
        <div class="treeHole_bottom">
                我关注的好友
            <img src="../images/tree_b.png" alt="">
        </div>
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
    background: url("../images/treeHole_bg.png") no-repeat;
    background-size: cover;
}
    .treeHole_text{
        margin:25px 13px 0 12px;
        color: #663333;
        font-size: 14px;
    }
    .treeHole_text p{
        margin-bottom: 16px;
        text-indent:10px;
        line-height: 24px;
    }
    .treeHole_c{
        height:164px;
        width:174px;
        background: url("../images/circular.png") no-repeat;
        background-size: cover;
        position: absolute;
        right:16px;
        bottom:140px;
    }
    .treeHole_c p{
        color: #663333;
        font-size: 10px;
        line-height: 20px;
    }
    .treeHole_c div{
        position: absolute;
        top: 24px;
        left:30px;
    }
    .treeHole_bottom{
        width: 105px;
        height: 34px;
        background: rgba(255,255,255,0.61);
        border-radius: 17px;
        position: absolute;
        bottom: 36px;
        right:13px;
        color: #663333;
        font-size: 13px;
        line-height: 34px;
        padding-left: 15px;
    }
.treeHole_bottom img{
    height: 15px;
    width: 15px;
    position: absolute;
    right:7px;
    top:10px;
}
</style>


