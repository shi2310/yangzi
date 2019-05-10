<template>
	<view class="uni-list">
		<slot></slot>
	</view>
</template>
<script>
	export default {
		name: 'uni-list',
		props:[
		]
	}
</script>
<style>
	.uni-list {
		display: flex;
		flex-direction: column;
		background-color: white;
		border-top: 1upx solid #c8c7cc;
		flex: 1;
		margin-bottom: 30upx
	}
</style>