<template>
        <div class="mui-numbox" data-numbox-min='1' style="height:26px;">
            <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
            <input class="mui-input-numbox" type="number" value="1" @change="numberboxChange" ref="numBox" />
            <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
        </div>
</template>

<script>
    import mui from '../libs/mui-master/dist/js/mui.min.js'
    export default{
        data(){
            return {}
        },
        mounted(){
            mui('.mui-numbox').numbox();
            this.$emit('getNumber', {id:this.goodsid,count:parseInt(this.$refs.numBox.value)});
        },
        methods:{
            numberboxChange(e){ // 文本框内容改变事件
                this.$emit('getNumber', {id:this.goodsid,count:parseInt(e.target.value)});
            }
        },
        props:['goodsid']
    }
</script>

<style lang="sass" scoped>
    
</style>