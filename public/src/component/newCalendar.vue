<template>

    <div class="newCalendar">
        <v-showLoad v-if="showLoad"></v-showLoad>
        <div v-title>心情日历</div>
        <v-calendarTemplate></v-calendarTemplate>
        <v-calendarPopup></v-calendarPopup>
    </div>


</template>

<script>

    import Bus from './bus.js';
    import showLoad from "./showLoad.vue"
    import calendarTemplate from './calendarTemplate.vue'
    import calendarPopup from './calendarPopup.vue'
    export default {
        data() {
            return {
                showLoad:false,
            }
        },
        props:{
            user:{
                type:Object
            }
        },
        filters: {

        },
        methods: {

        },
        mounted: function () {
            if(this.$route.query.month!=undefined) {
                let date = new Date();
                let _month = date.getMonth();
                let count = _month - parseInt(this.$route.query.month);
                for(let i=0;i<=count;i++){
                    Bus.$emit('oldMonthClick')
                }
            }
            xqzs.wx.setConfig(this,false,xqzs.wx.shareConfig.center);

        },
        components: {
            'v-showLoad':showLoad,
            'v-calendarTemplate':calendarTemplate,
            'v-calendarPopup':calendarPopup,
        },

    }

    import scroll from './lib/scroll.vue';

</script>
<style>
    .newCalendar{
        background: #fff;
    }
</style>