<template>
    <div class="template">
        <!--分类列表-->
        <div id="slider" class="mui-slider">
            <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
                <div class="mui-scroll">
                    <span :class="['mui-control-item', item.id==cateid?'mui-active':'']" v-for="(item,index) in cateforyList" :key="item.id" @click="changeTab(item.id)">
                        {{item.title}}
                    </span>
                </div>
            </div>

        </div>

        <!--分类图片列表-->
        <ul class="img-list">
            <li v-for="item in list" @click="goPhotoDetail(item.id)">
                <img v-lazy="item.img_url">
                <div class="info">
                    <h4>{{item.title}}</h4>
                    <p>{{item.zhaiyao}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    import config from '../../js/config.js'
    import mui from '../../libs/mui-master/dist/js/mui.min.js'
    export default{
        data(){
            return {
                cateforyList:[],
                cateid:0,
                list:[]
            }
        },
        created(){
            this.getCatefory();
            this.getImgListByCategoryId(0);
        },
        mounted(){ // 表示页面结构已经真实的渲染到了浏览器中
            mui('.mui-scroll-wrapper').scroll({
                scrollY: false, //是否竖向滚动
                scrollX: true, //是否横向滚动
                startX: 0, //初始化时滚动至x
                startY: 0, //初始化时滚动至y
                indicators: true, //是否显示滚动条
                deceleration:0.0006, //阻尼系数,系数越小滑动越灵敏
                bounce: true, //是否启用回弹
            });
        },
        methods:{
            getCatefory(){ // 获取商品分类
                this.$http.get(config.SERVER + '/api/getimgcategory').then(data=>{
                    data.body.message.unshift({id:0, title:'全部'}); // 在开头位置新增“全部”分类
                    this.cateforyList = data.body.message;
                });
            },
            changeTab(id){ // 点击切换tab栏
                console.log(id)
                this.cateid = id;
                this.list = [];
                this.getImgListByCategoryId(id);
            },
            getImgListByCategoryId(cateid){ // 根据分类Id获取图片列表
                this.$http.get(config.SERVER + '/api/getimages/' + cateid).then(data=>{
                    data.body.message.forEach(item=>{
                        item.img_url = config.IMG_SERVER + item.img_url;
                    });
                    this.list = data.body.message;
                });
            },
            goPhotoDetail(id){ // 跳转到图片详细信息页面
                console.log(id);
                this.$router.push({name:'photodetail', params:{photoid:id}});
            }
        }
    }
</script>

<style lang="sass" scoped>
    .mui-scroll-wrapper,.mui-scroll{
        background-color:#EFEFF4;
    }

    .mui-slider{
        z-index:0;
    }
    .mui-scroll-wrapper{
        z-index:0;
    }
    .mui-scroll{
        z-index:0;
    }

    image[lazy=loading] {
        width: 40px;
        height: 300px;
        margin: auto;
    }

    .img-list{
        list-style:none;
        padding:0;
        li{
            margin:10px 10px;
            text-align:center;
            position:relative;
            img{
                width:100%;
                display:block;
                box-shadow:0px 0px 10px gray;
            }
            .info{
                background:rgba(0,0,0,0.5);
                position:absolute;
                bottom:0;
                color:white;
                h4{
                    font-size:14px;
                    white-space: nowrap;
                }
                p{
                    text-align:left;
                    text-indent:2em;
                    color:white;
                    font-size:12px;
                    max-height:50px;
                }
            }
        }
    }
</style>