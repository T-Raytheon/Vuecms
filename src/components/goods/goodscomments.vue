<template>
    <div class="template">
        <comment :newsid="goodsid"></comment>
    </div>
</template>

<script>
    import comment from '../../subcomponents/common.vue'
    export default{
        data(){
            return{
                goodsid:this.$route.params.goodsid
            }
        },
        components:{
            comment
        }
    }
</script>

<style lang="sass" scoped>
    .template{
        padding:5px 3px;
    }
</style>