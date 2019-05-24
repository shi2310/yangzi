<!-- 新闻列表 -->
<template>
	<scroll-view 
		class="panel-scroll-box" 
		:scroll-y="enableScroll" 
		@scrolltolower="loadMore"
		>
		<view v-for="(item, index) in dataSource" :key="index" class="news-item" @click="navToDetails(item)">
			<uni-list-item :item="item"></uni-list-item>
		</view>
		<uni-load-more :status="loadingStatus"></uni-load-more>
	</scroll-view>
</template>
<script>
	import uniListItem from './uni-list-item.vue';
	import uniLoadMore from '../uni-load-more/uni-load-more.vue';

	export default {
		components: {
			uniListItem,
			uniLoadMore
		},
		props: {
			dataSource: {
				type: Array,
				default () {
					return []
				}
			},
			loadingStatus: {
				type: Number,
				default: 0
			},
			enableScroll:{
				type:Boolean,
				default:true
			}
		},
		methods: {
			//新闻详情
			navToDetails(item){
				let data = {
					id: item.id,
					title: item.title,
					author: item.author,
					time: item.time
				}
				let url = item.videoSrc ? 'videoDetails' : 'details'; 
			
				uni.navigateTo({
					url: `/pages/details/${url}?data=${JSON.stringify(data)}`
				})
			},
			loadMore() {
				this.$emit('loadMore');
			}
		}
	}
</script>

<style lang='scss' scoped>	
	.panel-scroll-box{
		height: 100%;
	}
	
	.news-item{
		position:relative;
		padding: 24upx 30upx;
		border-bottom-width: 1px;
		border-color: #eee;
		background-color: #fff;
	}
</style>
