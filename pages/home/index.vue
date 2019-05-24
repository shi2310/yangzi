<template>
	<view class="page">
		<view class="body">
			<swiper class="swiper" indicator-dots="true" autoplay="true" interval="3000" duration="1000">
				<swiper-item v-for="(item,index) in swiperSource" :key="index">
					<view class="swiper-item">
						<image style="width:100%" :src="item.img"></image>
					</view>
				</swiper-item>
			</swiper>
			<view class="uni-swiper-msg">
				<uni-icon type="sound" color="#000" size="20"></uni-icon>
				<swiper vertical="true" autoplay="true" circular="true" interval="3000">
					<swiper-item v-for="(item, index) in msg" :key="index">
						<navigator>{{item}}</navigator>
					</swiper-item>
				</swiper>
			</view>
			<uni-grid :data="data3" columnNum="4"></uni-grid>
			<uni-list :dataSource="articleItems" :loadingStatus="loadingStatus" @loadMore="addData" />
		</view>
	</view>
</template>

<script>
	import json from '@/json'
	import uniIcon from '@/components/uni-icon/uni-icon.vue'
	import uniGrid from '@/components/uni-grid/uni-grid.vue'
	import uniList from '@/components/uni-list/uni-list.vue'

	const dataSwiper = [{
		img: '/static/photo.jpg',
	}, {
		img: '/static/photo1.jpg',
	}, {
		img: '/static/photo2.jpg',
	}, {
		img: '/static/photo3.jpg',
	}]

	export default {
		components: {
			uniList,
			uniIcon,
			uniGrid
		},
		data() {
			return {
				articleItems: [],
				loadingStatus: 0,
				swiperSource: [],
				msg: [
					'行业峰会频频亮相，开发者反响热烈',
					'第10界新概念作文大奖赛开始报名',
					'作家出版社签约，拟合作出版优秀文集'
				],
				data3: [{
						image: '/static/gift.png',
						text: '礼物'
					},
					{
						image: '/static/star.png',
						text: '标注'
					},
					{
						image: '/static/hand.png',
						text: '牵手'
					},
					{
						image: '/static/like.png',
						text: '喜欢'
					},
				]
			}
		},
		onLoad: function() {
			this.swiperSource = dataSwiper;
			this.addData();
		},
		methods: {
			async addData() {
				this.loadingStatus = 1;
				let list = await json.newsList;
				setTimeout(() => {
					if (this.articleItems.length > 30) {
						this.loadingStatus = 2;
					} else {
						list.sort((a, b) => {
							return Math.random() > .5 ? -1 : 1; //静态数据打乱顺序
						})
						list.length = 5;
						list.forEach(item => {
							this.articleItems.push(item);
						})
						this.loadingStatus = 0;
					}
				}, 1000)
			},
		}
	}
</script>

<style>
	.page {
		display: flex;
		flex-direction: column;
		height: 100%;
		overflow: hidden;
	}

	.body {
		height: calc(100% - 520upx);
	}

	.swiper {
		height: 300upx;
	}

	.swiper-item {
		display: block;
		height: 300upx;
		line-height: 300upx;
		text-align: center;
	}

	.uni-swiper-msg {
		width: 100%;
		padding: 12upx;
		flex-wrap: nowrap;
		display: flex;
	}

	.uni-swiper-msg swiper {
		width: 100%;
		height: 50upx;
	}

	.uni-swiper-msg swiper-item {
		line-height: 50upx;
	}
</style>
