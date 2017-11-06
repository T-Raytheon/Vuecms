<template>
    <div class="template">
        <h1>Member.vue</h1>
        <mt-button type="primary" size="small" @click="show = !show">动画</mt-button>
        <transition name="fade"
            v-on:before-enter="beforeEnter"
            v-on:enter="enter"
            v-on:after-enter="afterEnter">
            <span class="ball" v-show="show"></span>
        </transition>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                show:false
            }
        },
        methods:{
             beforeEnter: function (el) {
                // ...
                el.style.transform = 'translate3d(30px,0,0)';
            },
            // 此回调函数是可选项的设置
            // 与 CSS 结合时使用
            enter: function (el, done) {
                // ...
                let tt = el.offsetWidth;
                el.style.transform = 'translate3d(100px,400px,0)';
                done()
            },
            afterEnter: function (el) {
                // ...
                this.show = !this.show;
            }
        }
    }
</script>
<style scoped>
    .ball{
        display:block;
        width:15px;
        height:15px;
        border-radius:50%;
        background-color:red;
        transition: all .3s cubic-bezier(.4,-0.3,1,.68);
    }
</style>