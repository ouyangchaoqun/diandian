<template id="banner">
    <img :src="topImg" :height="h"/>
</template>
<script>
    var banner = {
        template: '#banner'
    };
    export default {
        data() {
            return {
                topImg: xqzs.mood.getTopImg(),
                h: 320
            }
        },
        mounted: function () {
            let w =  $(window).width();
            this.h=  w * 500 / 750
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

    .index_banner {
        position: relative;
    }
</style>