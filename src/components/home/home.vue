<template>
    <div class="template">
        
        <!--轮播图-->
        <Swiper :lunbo="lunbo"></Swiper>

        <!--九宫格-->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/news/newslist">
                    <span class="mui-icon">
                        <img src="../../images/menu3.png" alt="">
                    </span>
                    <div class="mui-media-body">新闻资讯</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/photo/photolist">
                    <span class="mui-icon">
                        <img src="../../images/menu4.png" alt="">
                    </span>
                    <div class="mui-media-body">图片分享</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/goods/goodslist">
                    <span class="mui-icon">
                        <img src="../../images/menu5.png" alt="">
                    </span>
                    <div class="mui-media-body">商品购买</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon">
                        <img src="../../images/menu6.png" alt="">
                    </span>
                    <div class="mui-media-body">留言反馈</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon">
                        <img src="../../images/menu9.png" alt="">
                    </span>
                    <div class="mui-media-body">视频专区</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon">
                        <img src="../../images/menu10.png" alt="">
                    </span>
                    <div class="mui-media-body">联系我们</div></a></li>
        </ul>
    </div>
</template>
<script>
    import config from '../../js/config.js'
    import Swiper from '../../subcomponents/swiper.vue'
    export default{
        data(){
            return {
                lunbo:[]
            }
        },
        // 组件加载完毕之后的事件
        created(){
            this.$http.get(config.SERVER + '/api/getlunbo').then(data=>{
                data.body.message.forEach(item=>{
                    item.img = config.SERVER + item.img;
                });
                this.lunbo = data.body.message;
            });
        },
        components:{
            Swiper
        }
    }
</script>
<style scoped>
    .swiper{
        height:160px;
    }
    .mint-swipe-item img{
        width:100%;
        height:100%;
    }

    .mui-grid-view.mui-grid-9{
        border:0;
        background:white;
    }
    .mui-grid-view.mui-grid-9 .mui-table-view-cell{
        border:0;
    }

    .mui-grid-9 img{
        width:60px;
    }

    .mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body{
        font-size:13px;
    }
</style>