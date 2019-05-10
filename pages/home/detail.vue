<template>
	<view>
		<view v-if="showImg" class="banner">
			<image class="banner-img" :src="banner.image_url"></image>
			<view class="banner-title">{{banner.title}}</view>
		</view>
		<view class="article-meta">
			<text class="article-author">{{banner.source}}</text>
			<text class="article-text">发表于</text>
			<text class="article-time">{{banner.datetime}}</text>
		</view>
		<view class="article-content">
			<rich-text :nodes="htmlString"></rich-text>
		</view>
		<!-- #ifdef MP-WEIXIN -->
		<ad v-if="htmlString" unit-id="adunit-01b7a010bf53d74e"></ad>
		<!-- #endif -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: '标题',
				banner: {},
				htmlString: ""
			}
		},
		computed: {
			showImg() {
				return this.banner.image_url
			}
		},
		onLoad(event) {
			// 目前在某些平台参数会被主动 decode，暂时这样处理。
			try {
				this.banner = JSON.parse(decodeURIComponent(event.detailDate));
			} catch (error) {
				this.banner = JSON.parse(event.detailDate);
			}
			this.htmlString = this.banner.content;
			uni.setNavigationBarTitle({
				title: this.banner.title
			});
		},
		methods: {
			getDetail() {
				uni.request({
					url: 'https://unidemo.dcloud.net.cn/api/news/36kr/' + this.banner.post_id,
					success: (data) => {
						if (data.statusCode == 200) {
							this.htmlString = data.data.content.replace(/\\/g, "").replace(/<img/g, "<img style=\"display:none;\"");
						}
					},
					fail: () => {
						console.log('fail');
					}
				})
			}
		}
	}
</script>

<style>
	.banner {
		height: 360upx;
		overflow: hidden;
		position: relative;
		color: white;
		background-color: #ccc;
	}

	.banner-img {
		width: 100%;
	}

	.banner-title {
		overflow: hidden;
		position: absolute;
		left: 30upx;
		bottom: 10upx;
		width: 90%;
		font-size: 32upx;
		font-weight: 400;
		z-index: 11;
	}

	.article-meta {
		padding: 20upx 40upx;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		color: gray;
	}

	.article-text {
		font-size: 26upx;
		line-height: 50upx;
		margin: 0 20upx;
	}

	.article-author,
	.article-time {
		font-size: 30upx;
	}

	.article-content {
		padding: 0 30upx;
		overflow: hidden;
		font-size: 30upx;
		margin-bottom: 30upx;
	}
</style>
