<template>
    <div class="template">
        <!--轮播图-->
        <mt-swipe :auto="3000" class="swiper">
            <mt-swipe-item v-for="(item, index) in lunbo" :key=index>
                <img :src="item.img">
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>
<script>
    export default{
        data(){
            return {}
        },
        props:['lunbo']
    }
</script>
<style scoped>
    .swiper{
        height:160px;
    }
    .mint-swipe-item{
        text-align:center;
        overflow:hidden;
    }
    .mint-swipe-item img{
        height:100%;
    }
</style>