<template>
    <div class="root">
        <mt-header fixed title="传智播客·VueCMS">
			<a slot="left" @click="goback" v-if="isShowBack">
				<mt-button icon="back">返回</mt-button>
			</a>
		</mt-header>

		<!--在此处显示vue的组件页面-->
		<router-view></router-view>

        <nav class="mui-bar mui-bar-tab">
			<router-link to="/home" class="mui-tab-items">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			
			<router-link to="/member" class="mui-tab-items">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>

			<router-link to="/shopcar" class="mui-tab-items">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">9</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>

			<router-link to="/search" class="mui-tab-items">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
    </div>
</template>

<script>
    export default{
        data(){
            return {
				isShowBack:false
			}
        },
		methods:{
			// 返回按钮的功能
			goback(){
				console.log(this.$route);
				console.log('ok');
				this.$router.go(-1);
			}
		},
		watch:{
			'$route.path':function(newpath, oldpath){
				console.log(newpath)
				if(newpath==='/home'){
					this.isShowBack = false;
				}else{
					this.isShowBack = true;
				}
			}
		},
		mounted(){
			if(this.$route.path === '/home'){
				this.isShowBack = false;
			}else{
				this.isShowBack = true;
			}
		}
    }
</script>

<style>
	.root{
		margin:40px 0 50px 0;
	}
	.mui-active{
		color:#26A2FF !important;
	}

	.mui-bar-tab .mui-tab-items{
		display: table-cell;
		overflow: hidden;
		width: 1%;
		height: 50px;
		text-align: center;
		vertical-align: middle;
		white-space: nowrap;
		text-overflow: ellipsis;
		color: #929292;
	}
	.mui-bar-tab .mui-tab-items .mui-icon{
		top: 3px;
		width: 24px;
		height: 24px;
		padding-top: 0;
		padding-bottom: 0;
	}
	.mui-bar-tab .mui-tab-items .mui-icon~.mui-tab-label{
		font-size: 11px;
		display: block;
		overflow: hidden;
		text-overflow: ellipsis;
	}
</style>