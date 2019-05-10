<template>
	<uni-nav-bar color="#333333" background-color="#F4F5F6">
		<uni-icon type="search" color="gray" size="18">
			<input confirm-type="search" @confirm="confirm" class="input" type="text" placeholder="输入搜索关键词" />
		</uni-icon>
		<block slot="right">
			<uni-icon type="plus-filled" color="#D1D1D1" size="24" @click="write"></uni-icon>
		</block>
	</uni-nav-bar>
</template>

<script>
	import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar.vue';
	import uniIcon from '@/components/uni-icon/uni-icon.vue';
	export default {
		components: {
			uniNavBar,
			uniIcon
		},
		methods: {
			write() {
				this.$emit("write");
			},
			confirm() {
				this.$emit("search");
			}
		}
	}
</script>

<style>
	view {
		font-size: 28upx;
		line-height: inherit;
	}

	.input {
		width: 94%;
		padding: 0 3%;
	}
</style>
