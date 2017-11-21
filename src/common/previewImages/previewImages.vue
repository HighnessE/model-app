<template>
	<div id="previewImages">
		<swiper :options="swiperOption" ref="mySwiper">
			<!-- 幻灯内容 -->
			<!--<swiper-slide v-for="(item, index) in imagesSet" :key="index">
				<img style="width:100%" src="./img/0da3fbe.jpg">
			</swiper-slide>-->
			<swiper-slide>
				<img src="./img/0da3fbe.jpg">
			</swiper-slide>
			<swiper-slide>
				<img src="./img/0da3fbe.jpg">
			</swiper-slide>
		</swiper>
	</div>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
	props: ['imagesSet'],
	components: {
		swiper,
		swiperSlide
	},
	data() {
		return {
			// swiper 配置
			swiperOption: {
				notNextTick: true,
				observeParents: true,
				// 懒加载
				lazyLoading: true,
				lazyLoadingInPrevNext: true,
			}
		}
	},
	//定义这个swiper对象  
	computed: {
		swiper() {
			return this.$refs.mySwiper.swiper;
		}
	},
}
</script>
<style lang="less">
#previewImages {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
	width: 100%;
	background-color: #000;
	transition: display 1s;
	img {
		width: 100%;
	}
}
</style>
