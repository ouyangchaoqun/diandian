<template id="banner">
<img :src="topImg"/>
</template>
<script>
    var banner={
        template:'#banner'
    };
    export default {
        data() {
            return {
                topImg: xqzs.mood.getTopImg()
            }
        }
    }


</script>

<style>
    .banner {
        width: 100%;
    }

    .banner img {
        display: block;
        width: 100%;
    }

    .index_banner{
        position: relative;
    }
</style>