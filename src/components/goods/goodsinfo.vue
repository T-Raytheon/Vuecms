<template>
    <div class="template-goodsinfo">
        <h4 class="title">{{goodsinfo.title}}</h4>
        <div class="content" v-html="goodsinfo.content"></div>
    </div>
</template>

<script>
    import config from '../../js/config.js'
    export default{
        data(){
            return {
                goodsid:this.$route.params.goodsid,
                goodsinfo:{}
            }
        },
        created(){
            this.getGoodsInfo();
        },
        methods:{
            getGoodsInfo(){
                this.$http.get(config.SERVER + '/api/goods/getdesc/' + this.goodsid).then(data=>{
                    console.log(data.body.message[0]);
                    this.goodsinfo = data.body.message[0];
                });
            }
        }
    }
</script>

<style lang="sass">
    .template-goodsinfo{
        padding:3px;
        .title{
            text-align:center;
            color:#26A2FF;
            padding:10px;
        }
        .content{
            width:100%;
            overflow:hidden;
            p{
                margin:0;
                padding:0;
                img{
                width:100%;
                display:block;
            }
            }
            
        }
    }
</style>