<template>
	<button @click="isShow = true">打开弹窗</button>

	<Teleport to="body">
		<div class="modal" v-show="isShow">
			<h3>弹窗标题</h3>
			<p>弹窗的内容123456789</p>
			<button @click="isShow = false">关闭弹窗</button>
		</div>
	</Teleport>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const isShow = ref(false);
</script>

<style lang="scss" scoped>
	.modal {
		background-color: #b76b6b;
		border-radius: 8px;
		width: 400px;
		height: 300px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-around;
		row-gap: 30px;

		position: fixed;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
	}
</style>