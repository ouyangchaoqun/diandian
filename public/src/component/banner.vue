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