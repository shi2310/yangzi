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
	import uniIcon from '@/components/uni-icon/uni-icon.vue'
	import uniGrid from '@/components/uni-grid/uni-grid.vue'
	import uniList from '@/components/uni-list/uni-list.vue'

	const dataArticles = [{
		"datetime": "45分钟前",
		"title": "缘起则聚，缘灭则散",
		"content": "夜，结束了一天的喧嚣后安静下来，伴随着远处路灯那微弱的光。风，毫无预兆地席卷整片旷野，撩动人的思绪万千。星，遥遥地挂在天空之中，闪烁着它那微微星光，不如阳光般灿烂却如花儿般如痴如醉",
		"source": "DCloud",
		"star_count": 639,
		"comment_count": 147
	}, {
		"datetime": "一天前",
		"title": "秋风，唱给田野动听的歌",
		"content": "秋风用时光的旋律，用桂花的芬芳、苹果的馨香、菊花的灿烂、牵牛花的奔放、一串红的艳丽，把一望无际的田野乡村，演绎得在自然中沉醉，渲染得天地间空旷而又阳刚",
		"image_url": "https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg?imageView2/3/w/200/h/100/q/90",
		"source": "DCloud",
		"star_count": 89,
		"comment_count": 1411
	}, {
		"datetime": "一天前",
		"title": "中国技术界小奇迹：HBuilder开发者突破200万",
		"content": "秋风用时光的旋律，用桂花的芬芳、苹果的馨香、菊花的灿烂、牵牛花的奔放、一串红的艳丽，把一望无际的田野乡村，演绎得在自然中沉醉，渲染得天地间空旷而又阳刚",
		"image_url": "https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/muwu.jpg?imageView2/3/w/200/h/100/q/90",
		"source": "DCloud",
		"star_count": 639,
		"comment_count": 14
	}, {
		"datetime": "2小时前",
		"title": "时光荏苒，蹉跎了谁的年华",
		"content": "当清晨的一缕阳光透过窗帘上的空隙映照在沉睡的脸庞时，微微张开的双眼朦胧地注视着周遭的一切，新的一天悄然而至",
		"image_url": "https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/cbd.jpg?imageView2/3/w/200/h/100/q/90",
		"source": "DCloud",
		"star_count": 687,
		"comment_count": 5447
	}, {
		"image_url": "https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/cbd.jpg?imageView2/3/w/200/h/100/q/90",
		"datetime": "5分钟前",
		"title": "留住浓浓的年味",
		"content": "年味是什么？年味是家乡人准备过年忙碌的身影和开心的笑容，是家乡腊月集市的喧闹和繁荣。年味是家乡的馓子和大肉的喷香，是家乡红芋粉丝的筋道。年味是红红火火的场景，红红的灯笼，红红的春联，红红的蜡烛",
		"source": "DCloud",
		"star_count": 9,
		"comment_count": 1417
	}];

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
				loadingStatus: 'more',
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
			addData() {
				this.loadingStatus = "loading";
				if (this.articleItems.length > 30) {
					this.loadingStatus = "noMore";
				} else {
					for (let i = 1; i <= 10; i++) {
						this.articleItems.push(dataArticles[Math.floor(Math.random() * 5)]);
					}
					this.loadingStatus = "more";
				}
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
