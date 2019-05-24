<!-- 自定义navbar -->
<template>
	<view class="uni-navbar-content" :class="{'uni-navbar-shadow':hasShadow,'uni-navbar-border':hasBorder}" :style="{backgroundColor:backgroundColor}">
		<view class="uni-navbar-left">
			<slot></slot>
		</view>
		<view class="uni-navbar-right">
			<slot name="right"></slot>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'uni-nav-bar',
		props: {
			color: {
				type: String,
				default: '#000000'
			},
			backgroundColor: {
				type: String,
				default: '#FFFFFF'
			},
			shadow: {
				type: [String, Boolean],
				default: true
			},
			border: {
				type: [String, Boolean],
				default: true
			}
		},
		computed: {
			hasShadow() {
				return String(this.border) === 'true'
			},
			hasBorder() {
				return String(this.border) === 'true'
			}
		}
	}
</script>

<style scoped>
	.uni-navbar-content {
		display: flex;
		flex-direction: row;
		width: 100%;
		background-color: #fff;
		overflow: hidden;
		height: 80upx;
	}

	.uni-navbar-shadow {
		box-shadow: 0 1px 6px #ccc
	}

	.uni-navbar-border:after {
		position: absolute;
		z-index: 3;
		bottom: 0;
		left: 0;
		right: 0;
		height: 1px;
		content: '';
		-webkit-transform: scaleY(.5);
		transform: scaleY(.5);
		background-color: #c8c7cc
	}

	.uni-navbar-left {
		display: flex;
		flex-direction: row;
		flex: 1;
		width: 100%;
		margin:10upx;
		background-color: #e7e7e7;
		padding:0 10upx;
	}

	.uni-navbar-right {
		display: inline-flex;
		flex-wrap: nowrap;
		flex-shrink: 0;
		width: 120upx;
		padding: 0 12upx
	}

	.uni-navbar-right:first-child {
		padding-left: 0
	}

	.uni-navbar-right:last-child {
		width: 60upx
	}
</style>
