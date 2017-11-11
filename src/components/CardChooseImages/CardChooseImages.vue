<template>
	<div id="CardChooseImages" ref="CardChooseImages">
		<!-- 头部 -->
		<x-header>选择模卡图片</x-header>

		<!-- 五图模板 -->
		<div class="five-images-template">
			<div class="picturebox">
				<div class="contentbox">
					<div class="top">
						<!--<div class="left imgList"><img class="previewResult0" src="./imgs/five-one.jpg" /></div>-->
						<div class="left imgList">
							<croppa v-model="myCroppa0" :width="screenWidth * 28.5 / 100" :height="screenWidth * 419 / 1015" :show-remove-button="false" @file-choose="handleCroppaFileChoose"></croppa>
						</div>
						<div class="msg-pull">
							<span id="name"></span>
							<span id="height"></span>
							<span id="weight"></span>
							<span id="bust"></span>
							<span id="waist"></span>
							<span id="hips"></span>
							<span id="shoes"></span>
						</div>
						<div class="middle">
							<div class="mbox imgList">
								<croppa v-model="myCroppa1" :width="screenWidth * 28.5 / 100" :height="screenWidth * 419 / 1015 / 2" :show-remove-button="false" @file-choose="handleCroppaFileChoose"></croppa>
							</div>
							<div class="mbox imgList">
								<croppa v-model="myCroppa2" :width="screenWidth * 28.5 / 100" :height="screenWidth * 419 / 1015 / 2" :show-remove-button="false" @file-choose="handleCroppaFileChoose"></croppa>
							</div>
						</div>
						<div class="last">
							<div class="rbox imgList">
								<croppa v-model="myCroppa3" :width="screenWidth * 28.5 / 100" :height="screenWidth * 419 / 1015 / 2" :show-remove-button="false" @file-choose="handleCroppaFileChoose"></croppa>
							</div>
							<div class="rbox imgList">
								<croppa v-model="myCroppa4" :width="screenWidth * 28.5 / 100" :height="screenWidth * 419 / 1015 / 2" :show-remove-button="false" @file-choose="handleCroppaFileChoose"></croppa>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="operatingbox">
				<p>提示：要修改某张图片只需点击相应位置的图片即可</p>
				<button type="button" class="confirmbtn" :style="{ 'background-color': isAllowSubmitCard ? '#efa616' : '' }" @click="upLoadCard">确认完成</button>
			</div>
		</div>
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
			// 屏幕宽度
			screenWidth: 200,
			// croppa 绑定的数据对象
			myCroppa0: {},
			myCroppa1: {},
			myCroppa2: {},
			myCroppa3: {},
			myCroppa4: {},
			// 是否允许提交到制作模卡接口
			isAllowSubmitCard: false
		}
	},
	methods: {
		upLoadCard() {
			if (this.isAllowSubmitCard) {
				// console.log(this.myCroppa0.generateDataUrl())
				console.log(this.$route.params.template);
				// axios({
				// 	methods: 'POST',
				// 	url: '/Work/joint',
				// 	data: {
				// 		type: this.$params.template ? this.$params.template : '',
				// 		modelName: modelName,
				// 		modelHeight: this.,
				// 		modelWeight: modelWeight,
				// 		modelBust: modelBust,
				// 		modelWaist: modelWaist,
				// 		modelHips: modelHips,
				// 		modelShoes: modelShoes
				// 	}
				// });
			} else {
				
			}
		},
		handleCroppaFileChoose() {
			setTimeout(() => {
				if (this.myCroppa0.imageSet && this.myCroppa1.imageSet && this.myCroppa2.imageSet && this.myCroppa3.imageSet && this.myCroppa4.imageSet) {
					this.isAllowSubmitCard = true
				}
			}, 500);
		}
	},
	computed: {

	},
	mounted() {
		this.screenWidth = this.$refs.CardChooseImages.clientWidth
	}
}
</script>
<style lang="less" scoped>
#CardChooseImages {
	// croppa
	.croppa-container {
		display: block;
	} // 五图模板
	.five-images-template {
		.header {
			background: #fe3076;
			height: 1.3125rem;
			display: flex;
			align-items: center;
			justify-content: space-between;
			img {
				margin-left: 0.5rem;
				height: 0.5625rem;
			}
			span {
				color: #fff;
				font-size: 0.5rem;
			}
			button {
				background: #fe3076;
				margin-right: 0.375rem;
				color: #fff;
				font-size: 0.4375rem;
			}
		}
		.picturebox {
			display: flex;
			justify-content: center;
			align-items: center;
			margin-top: 1.4375rem;
			.contentbox {
				display: flex;
				justify-content: center;
				flex-direction: column;
				box-sizing: border-box;
				.top {
					display: flex;
					justify-content: center;
					width: 100%;
					.left {
						width: 29.5%;
						height: 100%;
						box-sizing: border-box;
						border: 0.0313rem solid #000;
						img {
							display: block;
							width: 100%;
							height: 100%;
						}
					}
					.msg-pull {
						width: 13%;
						box-sizing: border-box;
						border: 0.0313rem solid #000;
						position: relative;
						background: url("./imgs/fivebg.jpg") no-repeat;
						background-size: 100% 100%;
						span {
							color: #fff;
							font-size: 0.25rem;
						}
						#name {
							position: absolute;
							top: 10%;
							left: 11%;
						}
						#height {
							position: absolute;
							top: 27%;
							left: 11%;
						}
						#weight {
							position: absolute;
							top: 38%;
							left: 11%;
						}
						#bust {
							position: absolute;
							top: 50%;
							left: 11%;
						}
						#waist {
							position: absolute;
							top: 62%;
							left: 11%;
						}
						#hips {
							position: absolute;
							top: 73%;
							left: 11%;
						}
						#shoes {
							position: absolute;
							top: 85%;
							left: 11%;
						}
					}
					.middle {
						width: 29.3%;
						height: 100%;
						display: flex;
						justify-content: center;
						flex-wrap: wrap;
						box-sizing: border-box;
						.mbox {
							width: 100%;
							height: 50%;
							box-sizing: border-box;
							border: 0.0313rem solid #000;
							img {
								width: 100%;
								height: 100%;
							}
						}
					}
					.last {
						width: 29.3%;
						height: 100%;
						box-sizing: border-box;
						.rbox {
							width: 100%;
							height: 50%;
							box-sizing: border-box;
							border: 0.0313rem solid #000;
							img {
								display: block;
								width: 100%;
								height: 100%;
							}
						}
					}
				}
			}
		}
		.operatingbox {
			width: 10rem;
			margin: 0.2813rem auto 0rem;
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
			p {
				font-size: 0.375rem;
				margin-bottom: 0.7813rem;
				color: #909090;
			}
			button {
				width: 86%;
				height: 1.4063rem;
				border-radius: 0.1875rem;
				justify-content: center;
				align-items: center;
				color: #fff;
				font-size: 0.5313rem;
			}
			button.selectbtn {
				position: relative;
				margin-bottom: 0.4063rem;
				background-color: #fe3076;
			}
			button:disabled {
				background-color: #e0e0e0;
			}
		}
		#uploadPage {
			height: 100%;
			position: absolute;
			display: none;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			.bar {
				color: white;
				background: #fe3076;
				height: 1.3125rem;
				line-height: 1.3125rem;
				position: relative;
				z-index: 999;
				display: flex;
				justify-content: flex-end;
				#getfile {
					margin-right: 0.375rem;
					height: 1.3125rem;
					font-size: 0.4375rem;
					color: #fef4e9;
				}
			}
			.main {
				position: absolute;
				top: 1.3125rem;
				bottom: 0;
				left: 0;
				right: 0;
			}
		}

		.addBorder {
			border: 0.0625rem solid #1dbb9b !important;
		}

		input[type=file] {
			display: block;
			position: absolute;
			opacity: 0;
			height: 100%;
			width: 100%;
			top: 0;
			left: 0;
		}
	}
}
</style>
