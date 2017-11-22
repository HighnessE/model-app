<template>
	<swiper :options="swiperOption" ref="mySwiper">
		<!-- 幻灯内容 -->
		<swiper-slide>
			<img style="width:100%" src="./img/0da3fbe.jpg">
		</swiper-slide>
		<swiper-slide>
			<img style="width:100%" src="./img/01f2ff.jpg">
		</swiper-slide>
	</swiper>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
	components: {
		swiper,
		swiperSlide
	},
	data() {
		return {
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
    //定义这个sweiper对象  
    // computed: {
    //     swiper() {
    //         return this.$refs.mySwiper.swiper;
    //     }
    // },
}
</script>
<style lang="less">
.swiper-wrapper {
	img {
    width: 100%;
    display: block;
  }
}
</style>
