<template id="proposal">
    <div >
        <div class="feedback">
            <textarea placeholder="你好，我是产品经理小珺，欢迎给我们提出产品的使用感受和建议！"  ref="content" />
            <span>不少于8字!</span>
        </div>
        <div class="feedback_btn">
            <a class="weui-btn weui-btn_primary" @click="onSubmit()">提交</a>
        </div>




    </div>
</template>
<script type="es6">
    var proposal={
        template:'#proposal'
    }

    export default {
        data() {
            return {

            }
        },
        methods:{
            onSubmit:function () {
                let _this = this;

                this.$http.put(web.API_PATH+'base/feedback/add',{"content":_this.$refs.content.value,"userId":null}).then(response => {

                }, response => {
                    // error callback
                });



            }
        }
    }

</script>


