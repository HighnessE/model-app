<template>
	<div id="previewImages">
		<swiper :options="swiperOption" ref="mySwiper">
			<!-- 幻灯内容 -->
			<swiper-slide v-for="(item, index) in imagesSet" :key="index">
				<img :src="item.picture">
			</swiper-slide>
		</swiper>
	</div>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
	props: ['imagesSet', 'slideToIndex'],
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
				direction: 'horizontal',
				grabCursor: true,
				setWrapperSize: true,
				autoHeight: true,
				// 懒加载
				lazyLoading: true,
				lazyLoadingInPrevNext: true,
			}
		}
	},
	// 定义这个swiper对象  
	computed: {
		swiper() {
			return this.$refs.mySwiper.swiper;
		}
	},
	mounted() {
		
	},
	watch: {
		slideToIndex: (val)=>{
			this.swiper.slideTo(val);
		}
	}
}
</script>
<style lang="less">
#previewImages {
	position: fixed;
	display: flex;
	align-items: center;
	height: 100%;
	width: 100%;
	background-color: #000;
	img {
		width: 100%;
	}
}
</style>
