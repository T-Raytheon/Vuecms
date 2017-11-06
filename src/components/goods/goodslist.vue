<template>
    <div class="template">
        <div class="goodsList">
            <div class="goodsInfo" v-for="item in goodslist" @click="goGoodsDetail(item.id)">
                <img :src="item.img_url" alt="">
                <h4>{{item.title}}</h4>
                <div class="info">
                    <p class="price"><span class="newPrice">￥{{item.sell_price}}</span><span class="oldPrice">￥{{item.market_price}}</span></p>
                    <p class="sale"><span>热卖中</span><span>剩{{item.stock_quantity}}件</span></p>
                </div>
            </div>
        </div>

        <mt-button type="danger" size="large" @click="getMore">获取更多</mt-button>
    </div>
</template>

<script>
    import config from '../../js/config.js'
    export default{
        data(){
            return {
                pageIndex:1,
                goodslist:[]
            }
        },
        created(){
            this.getGoodsList();
        },
        methods:{
            getGoodsList(ismore){ // 获取商品信息列表
                this.$http.get(config.SERVER + '/api/getgoods?pageindex=' + this.pageIndex).then(data=>{
                    if(ismore){
                        this.goodslist.push.apply(this.goodslist, data.body.message);
                    }else{
                        this.goodslist = data.body.message;
                    }
                });
            },
            goGoodsDetail(id){ // 跳转到商品详细信息组件
                this.$router.push({name:'goodsdetail', params:{goodsid:id}});
            },
            getMore(){ // 获取更多商品
                this.pageIndex++;
                this.getGoodsList(true);
            }
        }
    }
</script>

<style lang="sass">
    .template{
        padding-bottom:8px;
        .goodsList{
            display:flex;
            justify-content:space-between;
            flex-wrap:wrap;
            padding:3px;
            .goodsInfo{
                width:49%;
                border:1px solid #CCCCCC;
                box-shadow:0 0 3px #CCCCCC;
                margin:4px 0;
                padding:2px;
                display:flex;
                flex-direction:column;
                justify-content:space-between;
                img{
                    width:100%;
                }
                h4{
                    font-size:12px;
                }
                .info{
                    background-color:#EAEAEA;

                    padding:4px;
                    p{
                        margin:0;
                    }
                    .newPrice{
                        color:red;
                    }
                    .oldPrice{
                        text-decoration:line-through;
                        margin-left:10px;
                        font-size:12px;
                    }
                    .sale{
                        display:flex;
                        justify-content:space-between;
                        font-size:12px;
                        margin-top:2px;
                    }
                }
            }
        }
    }
</style>