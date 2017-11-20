<<template>
	<swiper :options="swiperOption" ref="mySwiperA">
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
				grabCursor: true,
				setWrapperSize: true,
				autoHeight: true,
				pagination: '.swiper-pagination',
				paginationClickable: true,
				observeParents: true,
				// 懒加载
				lazyLoading: true,
				lazyLoadingInPrevNext: true,
			}
		}
	}
}
</script>
<style lang="less" scoped>
.swiper-wrapper {
	display: flex;
}
</style>
