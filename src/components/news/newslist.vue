<template>
    <div class="template">
        <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="(item,index) in this.news" :key=item.id @click="showNewsDetail(item.id)">
					<a href="javascript:;">
						<img class="mui-media-object mui-pull-left" :src="item.img_url">
						<div class="mui-media-body">
							<h4 class="news_title">{{item.title}}</h4>
							<p class='mui-ellipsis'>
                                <span>发表时间：{{item.add_time | fmtData('YYYY-MM-DD HH:mm:ss')}}</span>
                                <span>点击：{{item.click}}次</span>
                            </p>
						</div>
					</a>
				</li>
			</ul>
    </div>
</template>
<script>
import config from '../../js/config.js'
import moment from 'moment'
    export default{
        data(){
            return {
                news:[]
            }
        },
        created(){
            this.$http.get(config.SERVER + '/api/getnewslist').then(data=>{
                this.news = data.body.message;
            });
        },
        methods:{
            showNewsDetail(id){
                this.$router.push({name:'newsdetail', params:{newsid:id}});
            }
        },
        filters:{
            fmtData(input){
                return moment(input).format('YYYY-MM-DD HH:mm:ss');
            }
        }
    }
</script>
<style scoped lang="sass">
    .template{
        height:100%;
        h1{
            color:black;
        }
    }
    .news_title{
        font-size:13px;
    }
    .mui-ellipsis{
        color:#26A2FF;
        font-size:12px;
        display:flex;
        justify-content:space-between;
    }
</style>