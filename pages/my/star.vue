<template>
	<scroll-view class="panel-scroll-box" @scrolltolower="loadMore">
		<view v-for="(item, index) in dataSource" :key="index" class="news-item" @click="navToDetails(item)">
			<uni-icon :type="item.videoSrc ? 'videocam' : 'info'" :txt="limitTxt(item.title)" color="#999" size="25" :txtStyle="{color:'blue',textDecoration:'underline'}"></uni-icon>
		</view>
		<uni-load-more :status="loadingStatus"></uni-load-more>
	</scroll-view>
</template>

<script>
	import json from '@/json'
	import uniLoadMore from '@/components/uni-load-more/uni-load-more.vue';
	import uniIcon from '@/components/uni-icon/uni-icon.vue';

	export default {
		components: {
			uniLoadMore,
			uniIcon
		},
		data() {
			return {
				dataSource: [],
				loadingStatus: 0,
			}
		},
		onLoad: function() {
			this.addData();
		},
		methods: {
			async addData() {
				this.loadingStatus = 1;
				let list = await json.newsList;
				setTimeout(() => {
					list.sort((a, b) => {
						return Math.random() > .5 ? -1 : 1; //静态数据打乱顺序
					})
					list.forEach(item => {
						this.dataSource.push(item);
					})
					if (this.dataSource.length === list.length) {
						this.loadingStatus = 2;
					}else{
						this.loadingStatus = 0;
					}
				}, 1000)
			},
			//新闻详情
			navToDetails(item) {
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
			limitTxt(txt) {
				let str = txt;
				str = str.length > 20 ? str.substr(0, 20) + '...' : str;
				return str;
			},
			loadMore() {

			}
		}
	}
</script>

<style>
	.panel-scroll-box {
		height: 100%;
	}

	.news-item {
		position: relative;
		padding: 24upx 30upx;
		border-bottom-width: 1upx;
		border-bottom: 1upx solid #007AFF;
		border-color: #eee;
		background-color: #fff;
	}
</style>
