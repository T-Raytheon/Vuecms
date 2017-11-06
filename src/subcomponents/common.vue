<template>
    <div class="template">
        <h4>提交评论</h4>
        <hr>
        <textarea placeholder="请输入评论内容（最多120字）" maxlength="120" ref="txtCommon"></textarea>
        <mt-button type="primary" size="large" @click="addCommons">发表</mt-button>

        <div class="common-list">
            <h4>评论列表</h4>
            <h5>{{this.commons.length}}条评论</h5>
        </div>

        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="(item,index) in this.commons" :key=item.add_time>
                <a href="javascript:;">
                    <div class="mui-media-body">
                        <h4 class="comment-content">{{item.content}}</h4>
                        <p class='mui-ellipsis'>
                            <span>{{item.user_name}}</span>
                            <span>发表时间：{{item.add_time | fmtData('YYYY-MM-DD HH:mm:ss')}}</span>
                        </p>
                    </div>
                </a>
            </li>
        </ul>

        <mt-button type="danger" size="large" plain @click="getMore">加载更多</mt-button>
    </div>
</template>

<script>
    import config from '../js/config.js'
    import { Toast } from 'mint-ui';
    export default{
        data(){
            return {
                pageIndex:1,
                commons:[]
            }
        },
        created(){ // 事件初始化完毕之后的事件
            this.getCommonList();
        },
        methods:{
            getCommonList(ismore){ // 获取评论列表
                this.$http.get(config.SERVER + '/api/getcomments/' + this.newsid+'?pageindex=' + this.pageIndex).then(data=>{
                    console.log(data.body.message)
                    if(ismore){
                        this.commons.push.apply(this.commons, data.body.message);
                    }else{
                        this.commons = data.body.message;
                    }
                });
            },
            addCommons(){ // 提交评论
                const txtCommon = this.$refs.txtCommon;
                if(txtCommon.value.trim().length<=0){return;}
                this.$http.post(config.SERVER + '/api/postcomment/'+this.newsid, {content:txtCommon.value}).then(data=>{
                    if(data.body.status==0){
                        txtCommon.value='';
                        Toast({
                            message: '提交评论成功！',
                            position: 'center',
                            duration: 1000
                        });
                        this.pageIndex = 1;
                        this.getCommonList();
                    }
                });
            },
            getMore(){ // 获取更多评论
                this.pageIndex++;
                this.getCommonList(true);
            }
        },
        props:['newsid']
    }
</script>

<style lang="sass" scoped>
    .template{
        textarea{
            font-size:14px;
            height:90px;
            margin:0;
        }
        .common-list{
            margin-top:15px;
            display:flex;
            justify-content:space-between;
            align-items:center;
        }

        .comment-content{
            font-size:14px;
        }
        .mui-ellipsis{
            color:gray;
            font-size:12px;
            display:flex;
            justify-content:space-between;
        }
    }
</style>