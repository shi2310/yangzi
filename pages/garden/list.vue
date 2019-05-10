<template>
	<view class="uni-tab-bar">
		<uni-search @write="write" @search="confirm" />
		<scroll-view id="tab-bar" scroll-x class="uni-swiper-tab">
			<view v-for="(tab,index) in tabBars" :key="index" :class="['swiper-tab-list',tabIndex==index ? 'active' : '']" :id="tab.id"
			 @click="tapTab(index)">{{tab.name}}</view>
		</scroll-view>
		<!-- 小程序中，newsitems中dataSource变更，会导致渲染界面卡死 -->
		<swiper :current="tabIndex" class="swiper-box" @change="changeTab">
			<swiper-item v-for="(item,index) in newsitems" :key="index">
				<uni-list :dataSource="item.dataSource" :loadingStatus="item.loadingStatus" @loadMore="loadData" />
			</swiper-item>
		</swiper>
	</view>
</template>
<script>
	import uniList from '@/components/uni-list/uni-list.vue';
	import uniSearch from '@/components/uni-search/uni-search.vue';

	const dataArticles = [{
		"datetime": "46分钟前",
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

	export default {
		components: {
			uniList,
			uniSearch
		},
		data() {
			return {
				tabIndex: 0,
				newsitems: [],
				tabBars: []
			}
		},
		onLoad: function() {
			this.tabBars = [{
				name: '推荐',
				id: 'b1'
			}, {
				name: '惆怅',
				id: 'b3'
			}, {
				name: '怀念',
				id: 'b4'
			}, {
				name: '热烈',
				id: 'b5'
			}, {
				name: '轻狂',
				id: 'b6'
			}, {
				name: '洒脱',
				id: 'b7'
			}, {
				name: '羁绊',
				id: 'b8'
			}, {
				name: '遗忘',
				id: 'b9'
			}, {
				name: '祝愿',
				id: 'b10'
			}];

			const array = [];
			for (let i = 0, length = this.tabBars.length; i < length; i++) {
				array.push({
					loadingStatus: 'more',
					dataSource: this.getTabData(i)
				});
			}
			this.newsitems = array
		},
		methods: {
			getTabData(tabIndex) {
				console.log(tabIndex, this.tabBars[tabIndex].id);
				const dataSource = [];
				for (let i = 1; i <= 5; i++) {
					dataSource.push(dataArticles[Math.floor(Math.random() * 5)]);
				}
				return dataSource;
			},
			changeTab(e) {
				let index = e.detail.current;
				this.tabIndex = index;
			},
			tapTab(index) {
				if (this.tabIndex === index) {
					return false;
				} else {
					this.tabIndex = index;
				}
			},
			loadData() {
				const tabIndex = this.tabIndex;
				const obj = this.newsitems[tabIndex];
				obj.loadingStatus = "loading";
				if (obj.dataSource.length > 30) {
					obj.loadingStatus = "noMore";
				} else {
					const data = this.getTabData(tabIndex);
					const newData = [...obj.dataSource].concat(data);
					obj.dataSource = newData;
					obj.loadingStatus = "more";
				}
			},
			write() {
				uni.showToast({
					title: '发表文章'
				})
			},
			confirm() {
				uni.showToast({
					title: '搜索'
				})
			}
		}
	}
</script>

<style>
	.uni-tab-bar {
		display: flex;
		flex-direction: column;
		height: 100%;
	}

	.uni-swiper-tab {
		white-space: nowrap;
	}

	.swiper-tab-list {
		font-size: 30upx;
		padding: 15upx 20upx;
		display: inline-block;
		text-align: center;
		color: #555;
		border-bottom: 1upx solid #c8c7cc;
	}

	.active {
		color: #007AFF;
		border-bottom: 1px solid #007AFF;
	}

	.swiper-box {
		height: calc(100% - 180upx);
	}

	/* #ifdef MP-ALIPAY */
	.swiper-tab-list {
		display: inline-block;
	}

	/* #endif */
</style>
