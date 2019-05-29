<template>
	<view class="page">
		<view class="head">
			<view class="head-left">
				<!--  #ifdef MP -->
				<open-data class="photo" type="userAvatarUrl"></open-data>
				<!--  #endif -->
				
				<!--  #ifdef H5 -->
				<image class="photo" src="../../static/photo.jpg"></image>
				<!--  #endif -->
				
				<view class='info'>
					<!--  #ifdef MP -->
					<open-data class='info-title' type="userNickName"></open-data>
					<!--  #endif -->
					<!--  #ifdef H5 -->
					<text class='info-title'>弈剑风雨声</text>
					<!--  #endif -->
					<text>倚楼听风雨，淡看江湖路</text>
				</view>
			</view>
			<view class="head-right">
				<uni-icon type="arrowright" color="#D1D1D1" size="24" @click="headClick"></uni-icon>
			</view>
		</view>
		<view class="body">
			<uni-list>
				<uni-list-item show-extra-icon="true" :extra-icon="{type: 'email'}" title="消息" show-badge="true" badge-text="7"
				 show-arrow="true"></uni-list-item>
				<uni-list-item show-extra-icon="true" :extra-icon="{type: 'star'}" title="我赞过的" @click="myStar"></uni-list-item>
				<uni-list-item show-extra-icon="true" :extra-icon="{type: 'chat'}" title="我评过的" show-badge="true" badge-text="5"></uni-list-item>
				<uni-list-item show-extra-icon="true" :extra-icon="{type: 'flag'}" title="勋章" show-arrow="true"></uni-list-item>
				<uni-list-item show-extra-icon="true" :extra-icon="{type: 'eye'}" title="关注" show-arrow="false"></uni-list-item>
			</uni-list>
			<uni-list>
				<uni-list-item title="意见反馈" show-extra-icon="true" :extra-icon="{type: 'help'}" show-badge="true" badge-text="12"></uni-list-item>
				<uni-list-item title="设置" show-extra-icon="true" :extra-icon="{type: 'gear'}" show-arrow="false"></uni-list-item>
			</uni-list>
		</view>
	</view>
</template>

<script>
	import uniList from '@/components/list-view/uni-list.vue'
	import uniListItem from '@/components/list-view/uni-list-item.vue'
	import uniIcon from '@/components/uni-icon/uni-icon.vue'

	export default {
		components: {
			uniList,
			uniListItem,
			uniIcon
		},
		onLoad() {

		},
		data() {
			return {
				extraIcon: {
					color: '#007aff',
					size: '22',
					type: 'info-filled'
				}
			};
		},
		methods: {
			headClick(e) {
				uni.showToast({
					title: '个人信息',
					icon: 'none'
				})
			},
			myStar(){
				uni.navigateTo({
					url: `/pages/my/star`
				})
			}
		}
	}
</script>

<style>
	.page {
		display: flex;
		flex-direction: column;
		font-size: 28upx;
		line-height: inherit;
	}

	.head {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		background-color: white;
		margin: 30upx 0;
		padding: 30upx 50upx;
	}

	.head-left {
		display: flex;
		flex-direction: row;
	}

	.head-left .photo {
		width: 100upx;
		height: 100upx;
		border-radius: 50%;
	}

	.head-left .info {
		display: inline-flex;
		flex-direction: column;
		padding-left: 50upx;
	}

	.head-left .info .info-title {
		font-size: 30upx;
		font-weight: bold;
	}

	.body {
		display: flex;
		flex-direction: column;
		margin: 10upx 0;
	}
</style>
