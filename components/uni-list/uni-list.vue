<template>
	<scroll-view class="list" scroll-y @scrolltolower="loadMore">
		<block v-for="(item,index) in dataSource" :key="index">
			<uni-list-item :data="item" @click="goDetail(item)"></uni-list-item>
		</block>
		<view class="uni-tab-bar-loading">
			<uni-load-more :status="loadingStatus"></uni-load-more>
		</view>
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
				type: String,
				default: "more"
			}
		},
		methods: {
			goDetail(item) {
				uni.navigateTo({
					url: '/pages/home/detail?detailDate=' + encodeURIComponent(JSON.stringify(item))
				})
			},
			loadMore() {
				this.$emit('loadMore');
			}
		}
	}
</script>

<style>
	.list {
		width: 100%;
		height: 100%;
		overflow: hidden;
	}
</style>
