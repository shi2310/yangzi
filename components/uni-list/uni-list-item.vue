<template>
	<view class="media-list" hover-class="media-list-hover" @click="bindClick">
		<view class="media-head">
			<text class="media-head-title">{{data.title}}</text>
			<view class="media-head-author">
				<text class="info-text">{{data.source}}</text>
				<uni-icon type="eye" color="gray" size="18">
				</uni-icon>
			</view>
			<text class="info-text">{{data.datetime}}</text>
		</view>
		<view class="media-body">
			<text class="media-content">{{data.content}}</text>
			<image v-if="showImg" class="image" :src="data.image_url"></image>
		</view>
		<view class="media-foot">
			<uni-icon type="star" color="gray" size="18" :txt="data.star_count" />
			<view style="margin-left: 30upx;">
				<uni-icon type="chat" color="gray" size="18" :txt="data.comment_count" />
			</view>
		</view>
	</view>
</template>

<script>
	import uniIcon from '../uni-icon/uni-icon.vue';

	export default {
		components: {
			uniIcon
		},
		props: {
			data: {
				type: Object,
				default: function(e) {
					return {}
				}
			}
		},
		computed: {
			showImg() {
				return this.data.image_url
			}
		},
		methods: {
			bindClick() {
				this.$emit('click');
			}
		}
	}
</script>

<style>
	.media-list {
		flex: 1;
		display: flex;
		flex-direction: column;
		border-bottom-width: 1upx;
		border-bottom-style: solid;
		border-bottom-color: #c8c7cc;
		padding: 20upx 30upx;
	}

	.media-list-hover {
		background-color: #eeeeee;
	}

	.media-head {
		display: flex;
		flex-direction: column;
		padding: 10upx 0;
	}

	.media-head-title {
		font-size: 32upx;
		font-weight: bold;
		color: #000;
	}

	.media-head-author {
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	.media-body {
		display: flex;
		flex-direction: row;
	}

	.media-content {
		flex: 1;
		/* 超出部分显示省略号 */
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 4;
		-webkit-box-orient: vertical;

		font-size: 30upx;
		height: 154upx;
		color: #555555;
	}

	.image {
		margin-left: 10upx;
		width: 200upx;
		height: 160upx;
	}

	.media-foot {
		margin-top: 20upx;
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
	}
</style>
