<template>
    <div class="template1">

        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <swiper :lunbo="lunbo"></swiper>
                </div>
            </div>
        </div>

        <div class="mui-card">
            <div class="mui-card-header">{{goodsInfo.title}}</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner mycard">
                    <div class="price">
                        <span>市场价：<s>{{'￥'+ goodsInfo.market_price}}</s></span>&nbsp;&nbsp;
                        <span>销售价：<span class="sale_price">{{'￥'+ goodsInfo.sell_price}}</span></span>
                    </div>
                    <div class="count">
                        <span>购买数量：</span>
                        <goodscount v-on:getNumber="getNum" :goodsid="goodsId"></goodscount>
                    </div>
                    <div class="btngroup">
                        <mt-button type="primary" size="small">立即购买</mt-button>
                        <mt-button type="danger" size="small">加入购物车</mt-button>
                    </div>
                </div>
            </div>
        </div>

        <div class="mui-card">
            <div class="mui-card-header">商品参数</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p>商品货号：{{goodsInfo.goods_no}}</p>
                    <p>库存情况：{{goodsInfo.stock_quantity}}件</p>
                    <p>上架时间：{{goodsInfo.add_time | fmtData('YYYY-MM-DD')}}</p>
                </div>

                <div class="btngroup">
                    <mt-button type="primary" size="large" plain class="btnMy" @click="goGoodsInfo">图文介绍</mt-button>
                    <mt-button type="danger" size="large" plain class="btnMy" @click="goGoodsComment">商品评论</mt-button>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import config from '../../js/config.js'
    import swiper from '../../subcomponents/swiper.vue'
    import goodscount from '../../subcomponents/goodscount.vue'
    export default{
        data(){
            return {
                goodsId:this.$route.params.goodsid,
                lunbo:[],
                goodsInfo:{},
                selectGoodsCount:1
            }
        },
        created(){
            this.getLunbo();
            this.getGoodsInfo();
        },
        methods:{
            getLunbo(){ // 获取轮播图
                this.$http.get(config.SERVER + '/api/getthumimages/' + this.goodsId).then(data=>{
                    this.lunbo = data.body.message.map(item=>{
                        return {
                            img: config.IMG_SERVER + item.src
                        }
                    });
                });
            },
            getGoodsInfo(){ // 获取商品信息
                this.$http.get(config.SERVER + '/api/goods/getinfo/' + this.goodsId).then(data=>{
                    this.goodsInfo = data.body.message[0];
                });
            },
            goGoodsInfo(){
                this.$router.push({name:'goodsinfo', params:{goodsid:this.goodsId}});
            },
            goGoodsComment(){
                this.$router.push({name:'goodscomment', params:{goodsid:this.goodsId}});
            },
            getNum(obj){ // 获取子组件中传递过来的值
                this.selectGoodsCount = obj.count;
                console.log(this.selectGoodsCount);
            }
        },
        components:{
            swiper,
            goodscount
        }
    }
</script>

<style lang="sass" scoped>
    .template1{
        padding-top:2px;
        background-color:#EFEFF4;
    }

    .btngroup{
        padding:0 10px;
        .btnMy{
            margin:10px 0;
            width:100%;
        }
    }

    .sale_price{
        color:red;
        font-size:20px;
    }

    .mycard>div{
        margin-bottom:10px;
        &.btngroup{
            padding:0;
        }
    }
</style>