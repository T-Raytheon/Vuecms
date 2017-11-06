<template>
    <div class="template">
        <h4>{{this.newsinfo.title}}</h4>
        <p>发表时间：{{this.newsinfo.add_time | fmtData('YYYY-MM-DD')}}&nbsp;&nbsp;共{{this.newsinfo.click}}次浏览&nbsp;&nbsp;分类：经济民生</p>
        <hr>
        <div class="news-content" v-html="this.newsinfo.content"></div>
        <Comment :newsid="newsid"></Comment>
    </div>
</template>
<script>
    import config from '../../js/config.js'
    import Comment from '../../subcomponents/common.vue'
    export default{
        data(){
            return {
                newsid: this.$route.params.newsid,
                newsinfo:{}
            }
        },
        created(){
            this.$http.get(config.SERVER + '/api/getnew/'+ this.newsid).then(data=>{
                this.newsinfo = data.body.message[0];
            });
        },
        components:{
            Comment
        }
    }
</script>
<style lang="sass" scoped>
.template{
    padding:4px;
    h4{
        color:#26A2FF;
        padding:11px 0;
    }
}

</style>