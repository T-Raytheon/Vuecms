<template>
    <div class="template">
        <h4 class="title">{{photoInfo.title}}</h4>
        <p>发表时间：{{photoInfo.add_time | fmtData('YYYY-MM-DD')}}&nbsp;&nbsp;共{{photoInfo.click}}次浏览</p>
        <hr>

        <div class="imgBox">
            <template>
                <img class="preview-img" v-for="(item, index) in thumImageList" :src="item.src" height="100" @click="$preview.open(index, thumImageList)">
            </template>
        </div>

        <div class="content" v-html="photoInfo.content"></div>
        <commont :newsid="photoid"></commont>
    </div>
</template>

<script>
    import commont from '../../subcomponents/common.vue'
    import config from '../../js/config.js'
    export default{
        data(){
            return {
                photoid:this.$route.params.photoid,
                photoInfo:{},
                thumImageList:[]
            }
        },
        created(){
            this.getPhotoInfo();
            this.getThumImages();
        },
        methods:{
            getPhotoInfo(){ // 获取图片详情
                this.$http.get(config.SERVER + '/api/getimageInfo/'+this.photoid).then(data=>{
                    this.photoInfo = data.body.message[0];
                });
            },
            getThumImages(){ // 获取缩略图
                this.$http.get(config.SERVER + '/api/getthumimages/' + this.photoid).then(data=>{
                    var result = data.body.message.map(item=>{
                        return {
                            src: config.IMG_SERVER + item.src,
                            w: 600,
                            h: 400
                        }
                    });
                    this.thumImageList = result;
                });
            }
        },
        components:{
            commont
        }
    }
</script>

<style lang="sass" scoped>
    .template{
        padding:3px;
        .title{
            padding:10px 0;
            color:#1F74CF;
        }
        .title+p{
            font-size:12px;
        }
        .content{
            font-size:14px;
            text-indent:2em;
        }
        .preview-img{
            margin:10px;
        }
    }
</style>