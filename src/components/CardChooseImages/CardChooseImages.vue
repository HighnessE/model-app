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
						<div class="left imgList" :class="{ 'previewResult1': templateData5[0].isChecked }"><img :src="templateData5[0].initImage" @click="chooseImageToEdit(templateData5, 0)" /></div>
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
							<div class="mbox imgList" :class="{ 'previewResult1': templateData5[1].isChecked }"><img :src="templateData5[1].initImage" @click="chooseImageToEdit(templateData5, 1)" /></div>
							<div class="mbox imgList" :class="{ 'previewResult1': templateData5[2].isChecked }"><img :src="templateData5[2].initImage" @click="chooseImageToEdit(templateData5, 2)" /></div>
						</div>
						<div class="last">
							<div class="rbox imgList" :class="{ 'previewResult1': templateData5[3].isChecked }"><img :src="templateData5[3].initImage" @click="chooseImageToEdit(templateData5, 3)" /></div>
							<div class="rbox imgList" :class="{ 'previewResult1': templateData5[4].isChecked }"><img :src="templateData5[4].initImage" @click="chooseImageToEdit(templateData5, 4)" /></div>
						</div>
					</div>
				</div>
			</div>
			<div class="operatingbox">
				<p>提示：要修改某张图片只需点击相应位置的图片即可</p>
				<button type="button" class="selectbtn" @click="editImage">编辑图片</button>
				<button type="button" class="confirmbtn" :style="{ 'background-color': isAllowSubmitCard ? '#efa616' : '' }" @click="upLoadCard">确认完成</button>
			</div>
			<div class="filter-wrapper" style="position:absolute;width:100%;height:100%;background: rgba(255,255,255,1);top:0;left:0;display:none">
				<p style="position:absolute;font-size: 14px;width:100%;top:50%;left:50%;transform: translate(-50%,-50%);text-align: center;">您暂未选择图片，请选择要裁剪的图片</p>
			</div>
			<div class="app" id="uploadPage" :style="{ 'display': isShowEditPanel ? 'block' : 'none' }">
				<div class="bar">
					<a class="get-file" @click="useImage">使用</a>
				</div>
				<div class="main container">
					<croppa v-model="myCroppa" :width="croppaWidth" :height="croppaHeight" accept="image/*" :zoom-speed="10" :quality="croppaQuality"></croppa>
				</div>
			</div>
			<!--<croppa v-model="myCroppa1" :width="screenWidth * 28.5 / 100" :height="screenWidth * 419 / 1015 / 2" accept="image/png" :show-remove-button="false" @file-choose="handleCroppaFileChoose"></croppa>-->
		</div>
	</div>
</template>
<script>
import { XHeader } from 'vux'
import _ from 'lodash'
import qs from 'qs'
import { mapGetters } from 'vuex'
export default {
	components: {
		XHeader
	},
	data() {
		return {
			// 正在编辑的 croppa 宽高和缩放比
			croppaWidth: 200,
			croppaHeight: 200,
			croppaQuality: 1,
			// croppa 绑定的数据对象
			myCroppa: {},
			// 是否允许提交到制作模卡接口
			isAllowSubmitCard: false,
			// 选中正在编辑的图片
			imageEditing: {},
			// 是否展示编辑图片窗口
			isShowEditPanel: false,
			// 模板类型
			templateType: this.$route.params.template ? this.$route.params.template : '',
			// 五图模板数据
			templateData5: [
				{
					imageId: '5-0',
					isChecked: false,
					initImage: require('./imgs/five-one.jpg'),
					// base64Image: '',
					imageChosen: false,
					width: 894,
					height: 1251,
					aspectRatio: 298 / 417
				},
				{
					imageId: '5-1',
					isChecked: false,
					initImage: require('./imgs/five-two.jpg'),
					// base64Image: '',
					imageChosen: false,
					width: 891,
					height: 624,
					aspectRatio: 297 / 208
				},
				{
					imageId: '5-2',
					isChecked: false,
					initImage: require('./imgs/five-two.jpg'),
					// base64Image: '',
					imageChosen: false,
					width: 891,
					height: 624,
					aspectRatio: 297 / 208
				},
				{
					imageId: '5-3',
					isChecked: false,
					initImage: require('./imgs/five-two.jpg'),
					// base64Image: '',
					imageChosen: false,
					width: 891,
					height: 624,
					aspectRatio: 297 / 208
				},
				{
					imageId: '5-4',
					isChecked: false,
					initImage: require('./imgs/five-two.jpg'),
					// base64Image: '',
					imageChosen: false,
					width: 891,
					height: 624,
					aspectRatio: 297 / 208
				},
			]
		}
	},
	methods: {
		upLoadCard() {
			if (this.isAllowSubmitCard) {
				this.$http.post('/model/Work/joint', qs.stringify({
					type: this.templateType,
					...this.modelCardDataGetter
				})).then((response) => {
					var res = response.data;
					console.log(res);
				});
			} else {

			}
		},
		// 选择需要编辑的图片
		chooseImageToEdit(templateArray, index) {
			// 缓存需要编辑的图片对象
			this.imageEditing = templateArray[index];
			// 改变选中状态
			templateArray.forEach((item, idx) => {
				if (idx == index) {
					item.isChecked = true;
				} else {
					item.isChecked = false;
				}
			});
		},
		// 编辑图片
		editImage() {
			// 打开编辑图片面板
			this.isShowEditPanel = true;

			// 打开选择文件框
			this.myCroppa.chooseFile();

			// 计算 croppa 宽高和缩放比例
			this.computeCroppaSize();
		},
		// 使用图片
		useImage() {
			// 关闭编辑图片面板
			this.isShowEditPanel = false;

			// 拦截器：防止没有选择图片就对 croppa 对象操作导致错误
			if (this.myCroppa.imageSet) {
				// 存放展示图片的链接 blob 和上传图片的链接 base64
				// 获取当前正在编辑的模板数组
				var templateEditingObject = this[`templateData${this.templateType}`];
				// 生成 base64 字符串
				var base64Url = this.myCroppa.generateDataUrl('image/jpeg', 0.8);
				// 在模板数据对象中匹配到正在编辑的对象
				var imageEditingObject = templateEditingObject[_.findKey(templateEditingObject, { 'imageId': this.imageEditing.imageId })];
				// 生成 blob 地址并传入模板数据对象的展示位置
				this.myCroppa.generateBlob((blob) => {
					var url = URL.createObjectURL(blob);
					imageEditingObject.initImage = url;
				}, 'image/jpeg', 0.8)

				// 缓存传给后台的 base64 字符串
				// imageEditingObject.base64Image = base64Url;

				// 改变图片选中状态
				imageEditingObject.imageChosen = true;

				// 判断是否选择完所有图片
				templateEditingObject.forEach((item, index) => {
					if (item.imageChosen == '') {
						this.isAllowSubmitCard = false;
						return
					} else {
						this.isAllowSubmitCard = true;
					}
				});

				// 上传图片到服务器
				this.$http.post('/model/Work/workpicture', qs.stringify({
					type: this.templateType,
					id: this.imageEditing.imageId.split('-')[1],
					picture: base64Url
				})).then((response) => {
					var res = response.data;
					console.log(res);
				});
			}

			// 删除 croppa 中图片
			this.myCroppa.remove();
		},
		// 计算 croppa 宽高和缩放比例
		computeCroppaSize() {
			var screenWidth = this.$refs.CardChooseImages.clientWidth,
				screenHeight = this.$refs.CardChooseImages.clientHeight;
			if (this.imageEditing.width <= screenWidth && this.imageEditing.height <= screenHeight) {
				this.croppaWidth = this.imageEditing.width;
				this.croppaHeight = this.imageEditing.height;
				this.croppaQuality = 1;
			} else if (this.imageEditing.width <= screenWidth && this.imageEditing.height > screenHeight) {
				this.croppaWidth = screenHeight * this.imageEditing.aspectRatio;
				this.croppaHeight = screenHeight;
				this.croppaQuality = this.imageEditing.height / screenHeight;
			} else if (this.imageEditing.width > screenWidth && this.imageEditing.height <= screenHeight) {
				this.croppaWidth = screenWidth;
				this.croppaHeight = screenWidth / this.imageEditing.aspectRatio;
				this.croppaQuality = this.imageEditing.width / screenWidth;
			} else if (this.imageEditing.width > screenWidth && this.imageEditing.height > screenHeight) {
				if (this.imageEditing.width / screenWidth > this.imageEditing.height / screenHeight) {
					this.croppaWidth = screenHeight * this.imageEditing.aspectRatio;
					this.croppaHeight = screenHeight;
					this.croppaQuality = this.imageEditing.height / screenHeight;
				} else if (this.imageEditing.width / screenWidth < this.imageEditing.height / screenHeight) {
					this.croppaWidth = screenWidth;
					this.croppaHeight = screenWidth / this.imageEditing.aspectRatio;
					this.croppaQuality = this.imageEditing.width / screenWidth;
				} else if (this.imageEditing.width / screenWidth == this.imageEditing.height / screenHeight) {
					this.croppaWidth = screenWidth;
					this.croppaHeight = screenHeight;
					this.croppaQuality = this.imageEditing.width / screenWidth;
				}
			}
		}
	},
	computed: {
		...mapGetters(['modelCardDataGetter'])
	},
	mounted() {

	}
}
</script>
<style lang="less" scoped>
#CardChooseImages {
	width: 100%;
	height: 100%; // croppa
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
						box-sizing: border-box;
						border: 1px solid #000;
						img {
							display: block;
							width: 100%;
							height: 100%;
						}
					}
					.msg-pull {
						width: 13%;
						box-sizing: border-box;
						border: 1px solid #000;
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
						display: flex;
						justify-content: center;
						flex-wrap: wrap;
						box-sizing: border-box;
						.mbox {
							width: 100%;
							height: 50%;
							box-sizing: border-box;
							border: 1px solid #000;
							img {
								width: 100%;
								height: 100%;
							}
						}
					}
					.last {
						width: 29.3%;
						box-sizing: border-box;
						.rbox {
							width: 100%;
							height: 50%;
							box-sizing: border-box;
							border: 1px solid #000;
							img {
								display: block;
								width: 100%;
								height: 100%;
							}
						}
					}
				}
				.previewResult1 {
					border: 1px solid red !important
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
				height: 1.2267rem;
				line-height: 1.2267rem;
				position: relative;
				z-index: 999;
				display: flex;
				justify-content: flex-end;
				.get-file {
					margin-right: 0.375rem;
					height: 1.3125rem;
					font-size: 0.48rem;
					color: #fef4e9;
				}
			}
			.main {
				display: flex;
				justify-content: center;
				align-items: center;
				position: absolute;
				top: 1.3125rem;
				bottom: 0;
				left: 0;
				right: 0;
				background-color: #fff; // .croppa-container {
				// 	align-self: auto;
				// }
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
