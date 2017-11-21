<template>
	<div id="CardChooseImages" ref="CardChooseImages">
		<!-- 头部 -->
		<x-header>选择模卡图片</x-header>

		<div class="template">
			<!-- 五图模板 -->
			<div class="five-images-picturebox" v-if="this.templateType == '5'">
				<div class="contentbox">
					<div class="top">
						<!--<div class="left imgList"><img class="previewResult0" src="./imgs/five-one.jpg" /></div>-->
						<div class="left imgList" :class="{ 'previewResult1': templateData5[0].isChecked }"><img :src="templateData5[0].initImage" @click="chooseImageToEdit(templateData5, 0)" /></div>
						<div class="msg-pull">
							<span id="name">{{modelCardDataGetter.modelName}}</span>
							<span id="height">{{modelCardDataGetter.modelHeight}}</span>
							<span id="weight">{{modelCardDataGetter.modelWeight}}</span>
							<span id="bust">{{modelCardDataGetter.modelBust}}</span>
							<span id="waist">{{modelCardDataGetter.modelWaist}}</span>
							<span id="hips">{{modelCardDataGetter.modelHips}}</span>
							<span id="shoes">{{modelCardDataGetter.modelShoes}}</span>
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
			<!-- 七图模板 -->
			<div class="seven-images-picturebox" v-if="this.templateType == '7'">
				<div class="contentbox">
					<div class="top">
						<div class="left imgList" :class="{ 'previewResult1': templateData7[0].isChecked }"><img :src="templateData7[0].initImage" @click="chooseImageToEdit(templateData7, 0)" /></div>
						<div class="mid">
							<div class="mbox imgList" :class="{ 'previewResult1': templateData7[1].isChecked }"><img :src="templateData7[1].initImage" @click="chooseImageToEdit(templateData7, 1)" /></div>
							<div class="mbox imgList" :class="{ 'previewResult1': templateData7[2].isChecked }"><img :src="templateData7[2].initImage" @click="chooseImageToEdit(templateData7, 2)" /></div>
							<div class="mbox imgList" :class="{ 'previewResult1': templateData7[3].isChecked }"><img :src="templateData7[3].initImage" @click="chooseImageToEdit(templateData7, 3)" /></div>
							<div class="mbox imgList" :class="{ 'previewResult1': templateData7[4].isChecked }"><img :src="templateData7[4].initImage" @click="chooseImageToEdit(templateData7, 4)" /></div>
						</div>
						<div class="right">
							<div class="rbox imgList" :class="{ 'previewResult1': templateData7[5].isChecked }"><img :src="templateData7[5].initImage" @click="chooseImageToEdit(templateData7, 5)" /></div>
							<div class="rbox imgList" :class="{ 'previewResult1': templateData7[6].isChecked }"><img :src="templateData7[6].initImage" @click="chooseImageToEdit(templateData7, 6)" /></div>
						</div>
					</div>
					<div class="bottom msgbox">
						<span id="name">{{modelCardDataGetter.modelName}}</span>
						<span id="height">{{modelCardDataGetter.modelHeight}}</span>
						<span id="weight">{{modelCardDataGetter.modelWeight}}</span>
						<span id="bust">{{modelCardDataGetter.modelBust}}</span>
						<span id="waist">{{modelCardDataGetter.modelWaist}}</span>
						<span id="hips">{{modelCardDataGetter.modelHips}}</span>
						<span id="shoes">{{modelCardDataGetter.modelShoes}}</span>
					</div>
				</div>
			</div>
			<!-- 九图模板 -->
			<div class="nine-images-picturebox" v-if="this.templateType == '9'">
				<div class="msg-left">
					<span id="name">{{modelCardDataGetter.modelName}}</span>
					<span id="height">{{modelCardDataGetter.modelHeight}}</span>
					<span id="weight">{{modelCardDataGetter.modelWeight}}</span>
					<span id="bust">{{modelCardDataGetter.modelBust}}</span>
					<span id="waist">{{modelCardDataGetter.modelWaist}}</span>
					<span id="hips">{{modelCardDataGetter.modelHips}}</span>
					<span id="shoes">{{modelCardDataGetter.modelShoes}}</span>
				</div>
				<div class="contentbox sevenTP nineTP eleventTP fiveTp">
					<div class="top">
						<div class="left imgList" :class="{ 'previewResult1': templateData9[0].isChecked }"><img :src="templateData9[0].initImage" @click="chooseImageToEdit(templateData9, 0)" /></div>
						<div class="mid">
							<div class="mbox imgList" :class="{ 'previewResult1': templateData9[1].isChecked }"><img :src="templateData9[1].initImage" @click="chooseImageToEdit(templateData9, 1)" /></div>
							<div class="mbox imgList" :class="{ 'previewResult1': templateData9[2].isChecked }"><img :src="templateData9[2].initImage" @click="chooseImageToEdit(templateData9, 2)" /></div>
							<div class="mbox imgList" :class="{ 'previewResult1': templateData9[3].isChecked }"><img :src="templateData9[3].initImage" @click="chooseImageToEdit(templateData9, 3)" /></div>
							<div class="mbox imgList" :class="{ 'previewResult1': templateData9[4].isChecked }"><img :src="templateData9[4].initImage" @click="chooseImageToEdit(templateData9, 4)" /></div>
						</div>
						<div class="right">
							<div class="rbox imgList" :class="{ 'previewResult1': templateData9[5].isChecked }"><img :src="templateData9[5].initImage" @click="chooseImageToEdit(templateData9, 5)" /></div>
							<div class="rbox imgList" :class="{ 'previewResult1': templateData9[6].isChecked }"><img :src="templateData9[6].initImage" @click="chooseImageToEdit(templateData9, 6)" /></div>
							<div class="rbox imgList" :class="{ 'previewResult1': templateData9[7].isChecked }"><img :src="templateData9[7].initImage" @click="chooseImageToEdit(templateData9, 7)" /></div>
							<div class="rbox imgList" :class="{ 'previewResult1': templateData9[8].isChecked }"><img :src="templateData9[8].initImage" @click="chooseImageToEdit(templateData9, 8)" /></div>
						</div>
					</div>

				</div>
			</div>
			<!-- 十一模板 -->
			<div class="eleven-images-picturebox" v-if="this.templateType == '11'">
				<div class="contentbox">
					<div class="top">
						<div class="pull-top">
							<div class="msg-top">{{modelCardDataGetter.modelName}}</div>
							<div class="msg-middle imgList" :class="{ 'previewResult1': templateData11[0].isChecked }"><img :src="templateData11[0].initImage" @click="chooseImageToEdit(templateData11, 0)"></div>
							<div class="msg-bottom">
								<span id="height">{{modelCardDataGetter.modelHeight}}</span>
								<span id="weight">{{modelCardDataGetter.modelWeight}}</span>
								<span id="bust">{{modelCardDataGetter.modelBust}}</span>
								<span id="waist">{{modelCardDataGetter.modelWaist}}</span>
								<span id="hips">{{modelCardDataGetter.modelHips}}</span>
								<span id="shoes">{{modelCardDataGetter.modelShoes}}</span>
							</div>
						</div>
						<div class="mid">
							<div class="mbox imgList" :class="{ 'previewResult1': templateData11[1].isChecked }"><img :src="templateData11[1].initImage" @click="chooseImageToEdit(templateData11, 1)"></div>
							<div class="mbox imgList" :class="{ 'previewResult1': templateData11[2].isChecked }"><img :src="templateData11[2].initImage" @click="chooseImageToEdit(templateData11, 2)"></div>
							<div class="mbox imgList" :class="{ 'previewResult1': templateData11[3].isChecked }"><img :src="templateData11[3].initImage" @click="chooseImageToEdit(templateData11, 3)"></div>
							<div class="mbox imgList" :class="{ 'previewResult1': templateData11[4].isChecked }"><img :src="templateData11[4].initImage" @click="chooseImageToEdit(templateData11, 4)"></div>
						</div>
						<div class="sixItem">
							<div class="rbox imgList" :class="{ 'previewResult1': templateData11[5].isChecked }"><img :src="templateData11[5].initImage" @click="chooseImageToEdit(templateData11, 5)" /></div>
							<div class="rbox imgList" :class="{ 'previewResult1': templateData11[6].isChecked }"><img :src="templateData11[6].initImage" @click="chooseImageToEdit(templateData11, 6)" /></div>
							<div class="rbox imgList" :class="{ 'previewResult1': templateData11[7].isChecked }"><img :src="templateData11[7].initImage" @click="chooseImageToEdit(templateData11, 7)" /></div>
							<div class="rbox imgList" :class="{ 'previewResult1': templateData11[8].isChecked }"><img :src="templateData11[8].initImage" @click="chooseImageToEdit(templateData11, 8)" /></div>
							<div class="rbox imgList" :class="{ 'previewResult1': templateData11[9].isChecked }"><img :src="templateData11[9].initImage" @click="chooseImageToEdit(templateData11, 9)" /></div>
							<div class="rbox imgList" :class="{ 'previewResult1': templateData11[10].isChecked }"><img :src="templateData11[10].initImage" @click="chooseImageToEdit(templateData11, 10)" /></div>
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
					<croppa v-model="myCroppa" :width="croppaWidth" :height="croppaHeight" accept="image/*" :zoom-speed="10" :quality="croppaQuality" :prevent-white-space="true"></croppa>
				</div>
			</div>
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
			imageEditing: { tag: true },
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
			],
			// 七图模板数据
			templateData7: [
				{
					imageId: '7-0',
					isChecked: false,
					initImage: require('./imgs/seven-one.jpg'),
					base64Image: '',
					imageChosen: false,
					width: 894,
					height: 1251,
					aspectRatio: 298 / 417
				},
				{
					imageId: '7-1',
					isChecked: false,
					initImage: require('./imgs/seven-two.jpg'),
					base64Image: '',
					imageChosen: false,
					width: 443,
					height: 623,
					aspectRatio: 148 / 208
				},
				{
					imageId: '7-2',
					isChecked: false,
					initImage: require('./imgs/seven-two.jpg'),
					base64Image: '',
					imageChosen: false,
					width: 443,
					height: 623,
					aspectRatio: 148 / 208
				},
				{
					imageId: '7-3',
					isChecked: false,
					initImage: require('./imgs/seven-two.jpg'),
					base64Image: '',
					imageChosen: false,
					width: 443,
					height: 623,
					aspectRatio: 148 / 208
				},
				{
					imageId: '7-4',
					isChecked: false,
					initImage: require('./imgs/seven-two.jpg'),
					base64Image: '',
					imageChosen: false,
					width: 443,
					height: 623,
					aspectRatio: 148 / 208
				},
				{
					imageId: '7-5',
					isChecked: false,
					initImage: require('./imgs/seven-three.jpg'),
					base64Image: '',
					imageChosen: false,
					width: 890,
					height: 623,
					aspectRatio: 298 / 208
				},
				{
					imageId: '7-6',
					isChecked: false,
					initImage: require('./imgs/seven-three.jpg'),
					base64Image: '',
					imageChosen: false,
					width: 890,
					height: 623,
					aspectRatio: 298 / 208
				}
			],
			// 九图模板数据
			templateData9: [
				{
					imageId: '9-0',
					isChecked: false,
					initImage: require('./imgs/nine-one.jpg'),
					base64Image: '',
					imageChosen: false,
					width: 894,
					height: 1251,
					aspectRatio: 298 / 417
				},
				{
					imageId: '9-1',
					isChecked: false,
					initImage: require('./imgs/nine-two.jpg'),
					base64Image: '',
					imageChosen: false,
					width: 443,
					height: 624,
					aspectRatio: 148 / 208
				},
				{
					imageId: '9-2',
					isChecked: false,
					initImage: require('./imgs/nine-two.jpg'),
					base64Image: '',
					imageChosen: false,
					width: 443,
					height: 624,
					aspectRatio: 148 / 208
				},
				{
					imageId: '9-3',
					isChecked: false,
					initImage: require('./imgs/nine-two.jpg'),
					base64Image: '',
					imageChosen: false,
					width: 443,
					height: 624,
					aspectRatio: 148 / 208
				},
				{
					imageId: '9-4',
					isChecked: false,
					initImage: require('./imgs/nine-two.jpg'),
					base64Image: '',
					imageChosen: false,
					width: 443,
					height: 624,
					aspectRatio: 148 / 208
				},
				{
					imageId: '9-5',
					isChecked: false,
					initImage: require('./imgs/nine-two.jpg'),
					base64Image: '',
					imageChosen: false,
					width: 443,
					height: 624,
					aspectRatio: 148 / 208
				},
				{
					imageId: '9-6',
					isChecked: false,
					initImage: require('./imgs/nine-two.jpg'),
					base64Image: '',
					imageChosen: false,
					width: 443,
					height: 624,
					aspectRatio: 148 / 208
				},
				{
					imageId: '9-7',
					isChecked: false,
					initImage: require('./imgs/nine-two.jpg'),
					base64Image: '',
					imageChosen: false,
					width: 443,
					height: 624,
					aspectRatio: 148 / 208
				},
				{
					imageId: '9-8',
					isChecked: false,
					initImage: require('./imgs/nine-two.jpg'),
					base64Image: '',
					imageChosen: false,
					width: 443,
					height: 624,
					aspectRatio: 148 / 208
				}
			],
			// 十一图模板数据
			templateData11: [
				{
					imageId: '11-0',
					isChecked: false,
					initImage: require('./imgs/eleven-one.jpg'),
					base64Image: '',
					imageChosen: false,
					width: 990,
					height: 984,
					aspectRatio: 330 / 328
				},
				{
					imageId: '11-1',
					isChecked: false,
					initImage: require('./imgs/eleven-two.jpg'),
					base64Image: '',
					imageChosen: false,
					width: 443,
					height: 624,
					aspectRatio: 148 / 208
				},
				{
					imageId: '11-2',
					isChecked: false,
					initImage: require('./imgs/eleven-two.jpg'),
					base64Image: '',
					imageChosen: false,
					width: 443,
					height: 624,
					aspectRatio: 148 / 208
				},
				{
					imageId: '11-3',
					isChecked: false,
					initImage: require('./imgs/eleven-two.jpg'),
					base64Image: '',
					imageChosen: false,
					width: 443,
					height: 624,
					aspectRatio: 148 / 208
				},
				{
					imageId: '11-4',
					isChecked: false,
					initImage: require('./imgs/eleven-two.jpg'),
					base64Image: '',
					imageChosen: false,
					width: 443,
					height: 624,
					aspectRatio: 148 / 208
				},
				{
					imageId: '11-5',
					isChecked: false,
					initImage: require('./imgs/eleven-three.jpg'),
					base64Image: '',
					imageChosen: false,
					width: 443,
					height: 411,
					aspectRatio: 150 / 138
				},
				{
					imageId: '11-6',
					isChecked: false,
					initImage: require('./imgs/eleven-three.jpg'),
					base64Image: '',
					imageChosen: false,
					width: 443,
					height: 411,
					aspectRatio: 150 / 138
				},
				{
					imageId: '11-7',
					isChecked: false,
					initImage: require('./imgs/eleven-three.jpg'),
					base64Image: '',
					imageChosen: false,
					width: 443,
					height: 411,
					aspectRatio: 150 / 138
				},
				{
					imageId: '11-8',
					isChecked: false,
					initImage: require('./imgs/eleven-three.jpg'),
					base64Image: '',
					imageChosen: false,
					width: 443,
					height: 411,
					aspectRatio: 150 / 138
				},
				{
					imageId: '11-9',
					isChecked: false,
					initImage: require('./imgs/eleven-three.jpg'),
					base64Image: '',
					imageChosen: false,
					width: 443,
					height: 411,
					aspectRatio: 150 / 138
				},
				{
					imageId: '11-10',
					isChecked: false,
					initImage: require('./imgs/eleven-three.jpg'),
					base64Image: '',
					imageChosen: false,
					width: 443,
					height: 411,
					aspectRatio: 150 / 138
				}
			]
		}
	},
	methods: {
		// 上传模卡
		upLoadCard() {
			// var obj = {
			// 	a: JSON.stringify({
			// 		'0': 1,
			// 		'1': 2
			// 	})
			// }
			// this.$http({
			// 	method: 'POST',
			// 	url: '/model/Work/test',
			// 	data: qs.stringify(obj)
			// }).then((response) => {
			// 	var res = response.data;
			// 	console.log(res);
			// });
			if (this.isAllowSubmitCard) {
				this.$http.post('/model/Work/joint', qs.stringify({
					type: this.templateType,
					...this.modelCardDataGetter
				})).then((response) => {
					var res = response.data;
					console.log(res);
				});
			} else {
				alert('您还有图片是空着的');
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
			if (this.imageEditing.tag) {
				alert('请选择要填充的位置！');
			} else {
				// 打开编辑图片面板
				this.isShowEditPanel = true;
				// 保存历史记录使得返回键不会回跳页面
				history.replaceState(null, null, location.href);
				// 计算 croppa 宽高和缩放比例
				this.computeCroppaSize();

				// 添加图片状态
				// if (!this.imageEditing.imageChosen) {
				// 打开选择文件框
				this.myCroppa.chooseFile();
				// 编辑图片状态
				// } else {

				// }
			}
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
				imageEditingObject.base64Image = base64Url;

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
		window.onpopstate = () => {
			this.isShowEditPanel = false
		}
	}
}
</script>
<style lang="less" scoped>
#CardChooseImages {
	width: 100%;
	height: 100%; // croppa
	.croppa-container {
		display: block;
	}
	.template {
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
		} // 五图模板
		.five-images-picturebox {
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
							font-size: 0.2133rem;
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
			}
		} // 七图
		.seven-images-picturebox {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			margin-top: 1.4375rem;
			.contentbox {
				display: flex;
				justify-content: center;
				flex-direction: column;
				.top {
					display: flex;
					justify-content: center;
					width: 100%;
					.left {
						width: 33.1%;
						height: 100%;
						border: 1px solid #000;
						box-sizing: border-box;
						img {
							display: block;
							width: 100%;
							height: 100%;
						}
					}
					.mid {
						width: 33%;
						height: 100%;
						background-color: #cccccc;
						display: flex;
						justify-content: center;
						flex-wrap: wrap;
						box-sizing: border-box;
						.mbox {
							width: 50%;
							height: 50%;
							border: 1px solid #000000;
							box-sizing: border-box;
							img {
								display: block;
								width: 100%;
								height: 100%;
							}
						}
					}
					.right {
						background-color: #dddddd;
						width: 33%;
						height: 100%;
						display: flex;
						justify-content: center;
						flex-direction: column;
						box-sizing: border-box;
						.rbox {
							width: 100%;
							height: 50%;
							border: 1px solid #000000;
							box-sizing: border-box;
							img {
								display: block;
								width: 100%;
								height: 100%;
							}
						}
					}
				}
				.bottom {
					width: 100%;
					height: 0.7138873396542108rem;
					box-sizing: border-box;
					border: 1px solid #000;
					background-color: #e3e3e3;
				}
				.msgbox {
					position: relative;
					background: url("./imgs/sevenbg.jpg") no-repeat;
					background-size: 100% 100%;
					#name {
						position: absolute;
						top: 40%;
						left: 4%;
					}
					#height {
						position: absolute;
						top: 55%;
						left: 20%;
					}
					#weight {
						position: absolute;
						top: 55%;
						left: 33%;
					}
					#bust {
						position: absolute;
						top: 55%;
						left: 46%;
					}
					#waist {
						position: absolute;
						top: 55%;
						left: 57%;
					}
					#hips {
						position: absolute;
						top: 55%;
						left: 70%;
					}
					#shoes {
						position: absolute;
						top: 55%;
						left: 82%;
					}
					span {
						color: #fff;
						font-size: 0.2133rem;
					}
				}
			}
		} // 九图
		.nine-images-picturebox {
			display: flex;
			justify-content: center;
			align-items: center;
			margin-top: 1.2267rem;
			.msg-left {
				position: relative;
				background: url(./imgs/ninebg.jpg) no-repeat;
				background-size: 100% 100%;
				width: 1.1rem;
				height: 4.1067rem;
				box-sizing: border-box;
				#name {
					position: absolute;
					top: 10%;
					left: 11%;
				}
				#height {
					position: absolute;
					top: 26%;
					left: 11%;
				}
				#weight {
					position: absolute;
					top: 37%;
					left: 11%;
				}
				#bust {
					position: absolute;
					top: 49%;
					left: 11%;
				}
				#waist {
					position: absolute;
					top: 61%;
					left: 11%;
				}
				#hips {
					position: absolute;
					top: 72%;
					left: 11%;
				}
				#shoes {
					position: absolute;
					top: 84%;
					left: 11%;
				}
				span {
					color: #fff;
					font-size: 0.2133rem;
				}
			}
			.contentbox {
				display: flex;
				justify-content: center;
				flex-direction: column;
				width: 88.2%;
				height: 100%;
				box-sizing: border-box;
				.top {
					display: flex;
					justify-content: center;
					width: 100%;
					height: 100%;
					.left {
						width: 33.3%;
						height: 100%;
						border: 1px solid #000;
						box-sizing: border-box;
						img {
							display: block;
							width: 100%;
							height: 100%;
						}
					}
					.mid {
						width: 33.3%;
						height: 100%;
						display: flex;
						justify-content: center;
						flex-wrap: wrap;
						.mbox {
							width: 50%;
							height: 50%;
							border: 1px solid #000000;
							box-sizing: border-box;
							img {
								display: block;
								width: 100%;
								height: 100%;
							}
						}
					}
					.right {
						width: 33.3%;
						height: 100%;
						display: flex;
						justify-content: center;
						flex-wrap: wrap;
						.rbox {
							width: 50%;
							height: 50%;
							border: 1px solid #000000;
							box-sizing: border-box;
							img {
								display: block;
								width: 100%;
								height: 100%;
							}
						}
					}
				}
			}
		} // 十一图
		.eleven-images-picturebox {
			display: flex;
			justify-content: center;
			align-items: center;
			margin-top: 1.2267rem;
			.contentbox {
				display: flex;
				justify-content: center;
				flex-direction: column;
				width: 100%;
				.top {
					display: flex;
					justify-content: center;
					width: 100%;
					.pull-top {
						width: 34%;
						height: 100%;
						border: 1px solid #000;
						box-sizing: border-box;
						.msg-top {
							width: 100%;
							height: 10%;
							line-height: 0.6667rem;
							font-size: 0.2133rem;
							border-bottom: 1px solid #000;
							text-align: center;
							background: #000;
							color: #fff;
						}
						.msg-middle {
							width: 100%;
							height: 79%;
							img {
								display: block;
								width: 100%;
								height: 100%;
							}
						}
						.msg-bottom {
							position: relative;
							background: url(./imgs/elevenbg.jpg) no-repeat;
							background-size: 100% 100%;
							display: flex;
							width: 3.3733rem;
							height: 0.5867rem;
							border-top: 1px solid #000;
							#height {
								position: absolute;
								top: 55%;
								left: 4%;
							}
							#weight {
								position: absolute;
								top: 55%;
								left: 23%;
							}
							#bust {
								position: absolute;
								top: 55%;
								left: 41%;
							}
							#waist {
								position: absolute;
								top: 55%;
								left: 56%;
							}
							#hips {
								position: absolute;
								top: 55%;
								left: 72%;
							}
							#shoes {
								position: absolute;
								top: 55%;
								left: 85%;
							}
							span {
								color: #fff;
								font-size: 0.2133rem;
							}
						}
					}
					.mid {
						width: 33%;
						height: 100%;
						display: flex;
						justify-content: center;
						flex-wrap: wrap;
						.mbox {
							width: 50%;
							height: 50%;
							box-sizing: border-box;
							border: 1px solid #000;
							box-sizing: border-box;
							img {
								display: block;
								height: 100%;
								width: 100%;
							}
						}
					}
					.sixItem {
						width: 33%;
						height: 100%;
						display: flex;
						justify-content: center;
						flex-wrap: wrap;
						.rbox {
							display: block;
							width: 50%;
							height: 33.3%;
							border: 1px solid #000;
							box-sizing: border-box;
							img {
								display: block;
								height: 100%;
								width: 100%;
							}
						}
					}
				}
			}
		}
		.previewResult1 {
			border: 1px solid red !important
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
				background-color: #fff;
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
