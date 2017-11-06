<template>
	<div id="card-tempalte">
		<!-- 头部 -->
		<x-header>选择作品模板</x-header>

		<!-- 模板列表 -->
		<section id="template">
			<div class="wrap">
				<div class="template-container" v-for="(item, index) in templateList" :key="index">
					<p class="title">{{item.name}}</p>
					<div class="template" @click="chooseTemplate(index)">
						<img :src="require(`./img/template${index + 1}.png`)" />
						<div class="circle">
							<x-icon type="ios-checkmark" size="0.9375rem" style="fill:#FA0659" v-show="item.checked"></x-icon>
							<x-icon type="ios-checkmark-outline" size="0.9375rem" style="fill:#919191" v-show="!item.checked"></x-icon>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- 脚部 -->
		<footer class="footer">
			<p>
				可上传
				<span>{{imagesAllowUpload}}</span>
				张图片
			</p>
			<button>确定</button>
		</footer>
	</div>
</template>
<script>
import { XHeader } from 'vux'
export default {
	components: {
		XHeader
	},
	data() {
		return {
			// 模板列表
			templateList: [
				{
					name: '5图插入式资料栏',
					checked: true,
					imagesAllow: '5'
				},
				{
					name: '7图底部式资料栏',
					checked: false,
					imagesAllow: '7'
				},
				{
					name: '9图侧边栏式资料栏',
					checked: false,
					imagesAllow: '9'
				},
				{
					name: '11图环绕式资料栏',
					checked: false,
					imagesAllow: '11'
				}
			],
			// 可上传图片数
			imagesAllowUpload: '5'
		}
	},
	methods: {
		// 选择模板
		chooseTemplate(flag) {
			this.templateList.forEach((item, index)=>{
				if (index == flag) {
					item.checked = true;
					this.imagesAllowUpload = item.imagesAllow;
				} else {
					item.checked = false;
				}
			});
		}
	}
}
</script>
<style lang="less" scoped>
body {
	background: #f0f0f0;
}

#template {
	.wrap {
		display: flex;
		justify-content: center;
		flex-direction: column;
		.template-container {
			background-color: #fff;
			margin-bottom: 0.3125rem;
			padding: 0 0.5rem 0.375rem 0.5rem;
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
			p {
				display: flex;
				align-items: center;
				height: 1rem;
				font-size: 0.4688rem;
				color: #c0c0c0;
			}
			.template {
				position: relative;
				img {
					display: block;
					width: 100%;
				}
				.circle {
					position: absolute;
					top: -0.1875rem;
					left: -0.1563rem;
					overflow: hidden;
					z-index: 10;
					img {
						display: block;
						width: 100%;
					}
				}
			}
		}
		&>div:last-child {
			margin-bottom: 1.5625rem;
		}
	}
}

.footer {
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 1.5625rem;
	width: 100%;
	font-size: 0.4688rem;
	position: fixed;
	left: 0;
	bottom: 0;
	z-index: 100;
	background-color: #fff;
	p {
		margin-left: 0.5313rem;
	}
	button {
		width: 3.125rem;
		height: 100%;
		font-size: 0.4688rem;
		color: #fff;
		background-color: #fe3076;
	}
}
</style>

