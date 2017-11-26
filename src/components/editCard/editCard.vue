<template>
	<div class="create-card">
		<x-header>制作名片
			<a slot="right">
				<x-icon type="ios-home-outline" size="0.6rem" class="icon-home"></x-icon>
			</a>
		</x-header>
		<div class="editcard">
			<!-- 上传头像 -->
			<div class="items">
				<div class="item-upload-picture">
					<div class="itemtype">
						<span><b style="color:#fe3076">*</b>上传头像</span>
					</div>
					<div class="itemhandle" @click="editImage">
						<img :src="imageUrl">
					</div>
				</div>
			</div>
			<!-- 姓名  x-input插件本身并没有提供equire属性绑定，是我为了统一样式修改源码解构的，详情可看node-module里的vux x-input组件-->
			<group>
				<x-input title="姓名" v-model="name" :should-toast-error=false :max="10" text-align="right" placeholder="（必填）" :required="true"></x-input>
			</group>
			<!-- 性别 -->
			<div class="items">
				<div class="item-gender">
					<div class="itemtype">
						<span>
							<b class="required">*</b>性别
						</span>
					</div>
					<ul class="itemhandle">
						<li class="gender-item" :class="{'gender-item-checked': gender == '男'}" @click="gender = '男'">男</li>
						<li class="gender-item" :class="{'gender-item-checked': gender == '女'}" @click="gender = '女'">女</li>
					</ul>
				</div>
			</div>
			<!--年龄-->
			<group>
				<x-input title="年龄" type="number" v-model="age" :should-toast-error=false :max="3" text-align="right" placeholder="（必填）" :required="true"></x-input>
			</group>
			<!--地区-->
			<div class="items">
				<div class="itemwrap">
					<div class="itemtype">
						<span><b class="required">*</b>地区</span>
					</div>
					<div class="itemhandle">
						<v-address></v-address>
						<x-icon type="chevron-right" size="0.4rem" class="icon-home"></x-icon>
					</div>
				</div>
			</div>
			<div class="graybar"></div>
			<!--身高-->
			<group>
				<x-input title="身高/cm" type="number" v-model="height" :should-toast-error=false :max="3" text-align="right" placeholder="（必填）" :required="true"></x-input>
			</group>
			<!--体重-->
			<group>
				<x-input title="体重/kg" type="number" v-model="weight" :should-toast-error=false :max="3" text-align="right" placeholder="（必填）" :required="true"></x-input>
			</group>
			<!--三围-->
			<group>
				<popup-picker title="三围" :data="bwhList" v-model="bwh" :required="true"></popup-picker>
			</group>
			<!--鞋码-->
			<group>
				<x-input title="鞋码" type="number" v-model="shoe" :should-toast-error=false :max="2" text-align="right" placeholder="（必填）" :required="true"></x-input>
			</group>
			<div class="graybar"></div>
			<!--风格标签-->
			<div class="items">
				<div class="itemwrap">
					<div class="itemtype">
						<span><b class="required">*</b>风格标签</span>
					</div>
					<div class="itemhandle" @click="showStyleDialog=!showStyleDialog">
						<input type="text" placeholder="选择2~5个" :value="styleTagVal" readonly>
						<x-icon type="chevron-right" size="0.4rem" class="icon-home"></x-icon>
					</div>
				</div>
			</div>
			<!--工作标签-->
			<div class="items">
				<div class="itemwrap">
					<div class="itemtype">
						<span><b class="required">*</b>工作标签</span>
					</div>
					<div class="itemhandle" @click="showWorkDialog=!showWorkDialog">
						<input type="text" placeholder="选择2~5个" :value="workTagVal" readonly>
						<x-icon type="chevron-right" size="0.4rem" class="icon-home"></x-icon>
					</div>
				</div>
			</div>
			<!--工作履历-->
			<group>
				<x-textarea title="工作履历" :max="140" v-model="resume" placeholder="说出你的故事" autosize></x-textarea>
			</group>
			<div class="graybar"></div>
			<!--工作报价-->
			<div class="reward">
				<div class="items">
					<div class="itemwrap">
						<div class="itemtype">
							<span>工作报价</span>
						</div>
						<div class="itemhandle itemhandle-btn">
							<span>是否面议</span>
							<v-switch @on-change="ifInterView($event)"></v-switch>
						</div>
					</div>
				</div>
				<div class="offerList" v-if="!interview">
					<div class="joboffer" v-for="(item, index) in workPriceList" :key="index">
						<div class="offer">
							<x-icon type="social-yen" size="0.5rem" class="icon-home"></x-icon>
							<span class="type">{{item.workType}}</span>
							<span class="price">
								<span class="money">{{item.price}}</span>元/天</span>
						</div>
						<div class="delbtn" @click="delWorkPrice(index)">
							<x-icon type="close-circled" size="0.5rem" class="icon-home"></x-icon>
						</div>
					</div>
				</div>
				<div class="addoffer" v-if="!interview">
					<span @click="showOfferDialog = !showOfferDialog">添加报价</span>
				</div>
			</div>
			<div class="graybar"></div>
			<!--个人描述-->
			<group>
				<x-textarea title="个人描述" :max="50" v-model="self" placeholder="介绍一下你自己吧~"></x-textarea>
			</group>
			<div class="graybar"></div>
			<!--添加封面-->
			<div class="samplepartbox">
				<div class="crossimgbox">
					<div class="title"><b class="required">*</b>添加相册（1~9张）</div>
					<div class="samplelist">
						<ul class="addpicture">
							<li class="showpic">
								<img class="showpicimg">
								<div class="deletebtn">
									<x-icon type="ios-close-outline" size="0.5333rem" style="fill:#de3c3c"></x-icon>
								</div>
							</li>
							<li class="addpicbtn">
								<x-icon type="android-add-circle" size="2.0rem" class="icon-home"></x-icon>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<!--上传作品-->
			<div class="uploadpic">
				<div class="title">上传模卡</div>
				<div class="imgbox">
					<ul class="addwork" v-if="cardList && cardList.length != 0">
						<li class="showWork" v-for="(item, index) in cardList" :key="index">
							<img class="showworkImg" v-lazy="item.url" alt="">
							<!--<div class="editbtn" @click="jumpToEditCard(item.type)">
								<x-icon type="edit" size=".5333rem" style="fill:#de3c3c;"></x-icon>
							</div>-->
							<div class="delbtn" @click="showDeleteCardModal(item.type)">
								<x-icon type="close-circled" size=".5333rem" style="fill:#fff;"></x-icon>
							</div>
						</li>
					</ul>
				</div>
				<div class="newcreate">
					<span @click="jumpToCardTemplate">+新建模卡</span>
				</div>
			</div>
			<!--确认提交-->
			<div>
				<button class="confirmsubmit">
					确认提交
				</button>
			</div>
			<div class="samplewrap">
				<div class="sample">
				</div>
			</div>
			<!-- 工作标签弹窗 -->
			<x-dialog v-model="showWorkDialog">
				<select-button :selections="workArr" @on-change="getTagChange('workTag',$event)">
					<div @click="showWorkDialog = false">完成</div>
				</select-button>
			</x-dialog>
			<!-- 风格标签弹窗 -->
			<x-dialog v-model="showStyleDialog">
				<select-button :selections="styleArr" @on-change="getTagChange('styleTag',$event)">
					<div @click="showStyleDialog = false">完成</div>
				</select-button>
			</x-dialog>
			<!-- 工作报价弹窗 -->
			<x-dialog class="dialog-offer" v-model="showOfferDialog">
				<div class="contentwrap">
					<div class="headwrap">
						<h4>选择报价</h4>
					</div>
					<div class="worktype">
						<span class="title">工作类型</span>
						<div class="seletbox" @click="openNotifyDialog()">
							<input v-model="workTypeInWorkPrice" type="text" placeholder="点击选择" readonly id="worktype">
							<x-icon type="chevron-right" size="0.4rem" class="icon-home"></x-icon>
						</div>
					</div>
					<div class="pricewrap">
						<span class="title">价格</span>
						<div class="seletbox">
							<input v-model="priceInWorkPrice" type="number" placeholder="点击输入" class="price">
						</div>
					</div>
					<div class="confirmbtn" @click="insertWorkPrice">
						<span>确定</span>
					</div>
				</div>
			</x-dialog>
			<!-- 通告类型弹窗 -->
			<x-dialog v-model="showNotifyDialog">
				<single-select-button :selections="workArr" @on-change="getNotifyTag($event)">
					<div @click="closeNotifyDialog()">完成</div>
				</single-select-button>
			</x-dialog>
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
</template>
<script>
import {
	XHeader,
	XInput,
	Group,
	XTextarea,
	XDialog,
	PopupPicker
} from 'vux';
import _ from 'lodash'
import VSwitch from '../../common/switch/switch'
import VAddress from '../../common/vuxAddress/vuxAddress'
import selectButton from '../../common/selectButton/selectButton'
import singleSelectButton from '../../common/singleSelectButton/singleSelectButton'
import bwhList from '../../assets/bwhList'
export default {
	components: {
		XHeader,
		XDialog,
		XInput,
		Group,
		XTextarea,
		VSwitch,
		VAddress,
		selectButton,
		singleSelectButton,
		PopupPicker
	},
	data() {
		return {
			name: '',
			gender: '',
			age: '',
			height: '',
			weight: '',
			bwh: ['85', '60', '85'],
			shoe: '',
			resume: '',
			self: '',
			workTag: [],
			styleTag: [],
			workArr: [
				{
					type: 1
				},
				{
					type: 2
				}
			],
			styleArr: [
				{
					type: 3
				},
				{
					type: 4
				}
			],
			notifyArr: [],
			// 工作报价列表
			workPriceList: [
				{
					workType: '发膜',
					price: '10'
				}
			],
			// 工作报价-->工作类型
			workTypeInWorkPrice: '',
			// 工作报价->价格
			priceInWorkPrice: '',
			// switch 是否面议
			interview: false,
			// 弹窗们
			showWorkDialog: false,
			showStyleDialog: false,
			// 添加报价的弹窗
			showOfferDialog: false,
			showNotifyDialog: false,
			showdeleteCardConfirm: false,
			// 三围列表
			bwhList: bwhList,
			// 是否展示编辑图片窗口
			isShowEditPanel: false,
			// croppa 绑定的数据对象
			myCroppa: {},
			// 正在编辑的 croppa 宽高和缩放比
			croppaWidth: 200,
			croppaHeight: 200,
			croppaQuality: 1,
			// 选中头像图片 url
			imageUrl: require('./img/bg.jpg'),
			// 要删除的模卡类型
			deleteCardType: ''
		}
	},
	computed: {
		styleTagVal() {
			return this.styleTag.join(' / ')
		},
		workTagVal() {
			return this.workTag.join(' / ')
		},
		// vuex 获取模卡列表
		cardList() {
			var cardList = this.$store.getters.modelCardListGetter;
			if (cardList && cardList.length == 0) {
				cardList = JSON.parse(sessionStorage.getItem('cardList'));
				if (cardList) {
					cardList.forEach((item, index) => {
						this.$store.commit('UPDATE_MODEL_CARD_DATA', item);
					});
				}
			}
			return this.$store.state.modelCardList;
		}
	},
	methods: {
		getTagChange(attr, val) {
			this[attr] = val;
			console.log(this.workTag)
		},
		openNotifyDialog() {
			this.showNotifyDialog = true;
			this.showOfferDialog = false;
		},
		// 选择工作报价-->工作类型-->完成
		closeNotifyDialog() {
			this.showNotifyDialog = false;
			this.showOfferDialog = true;
		},
		// 从 singleSelectButton 组件中获取数据( 工作报价-->工作类型 )
		getNotifyTag(val) {
			this.workTypeInWorkPrice = val;
		},
		// 获取 switch 组件的结果( 是否面议 )
		ifInterView(val) {
			this.interview = val
		},
		// 插入新的工作报价
		insertWorkPrice() {
			this.showOfferDialog = false;

			if (this.workTypeInWorkPrice != '' && this.priceInWorkPrice != '') {
				this.workPriceList.push({
					workType: this.workTypeInWorkPrice,
					price: this.priceInWorkPrice
				});
				this.workTypeInWorkPrice = '';
				this.priceInWorkPrice = '';
			} else {
				alert('请输入所有信息！');
			}
		},
		changeOffer() {
			console.log(222);
		},
		// 跳转到创建模卡页面
		jumpToCardTemplate() {
			var infoList = {
				modelName: this.name,
				modelWeight: this.weight,
				modelHeight: this.height,
				modelShoes: this.shoe,
				modelBust: this.bwh[0],
				modelWaist: this.bwh[1],
				modelHips: this.bwh[2]
			};
			var alertList = {
				modelName: '姓名不能为空！',
				modelWeight: '体重不能为空！',
				modelHeight: '身高不能为空！',
				modelShoes: '鞋码不能为空！',
				modelBust: '三围不能为空！',
				modelWaist: '三围不能为空！',
				modelHips: '三围不能为空！'
			}

			// 拦截有信息为空的情况并提示
			var allowJump = true;
			_.forIn(infoList, (item, index) => {
				if (!item || item == '') {
					alert(alertList[index]);
					allowJump = false;
					return false;
				}
			});

			if (allowJump) {
				this.$store.commit('UPDATE_MODEL_CARD_DATA', {
					modelName: this.name,
					modelWeight: this.weight,
					modelHeight: this.height,
					modelShoes: this.shoe,
					modelBust: this.bwh[0],
					modelWaist: this.bwh[1],
					modelHips: this.bwh[2]
				});
				this.$router.push({ path: '/CardTemplate' });
			}
		},
		// 跳转到编辑模卡页面
		jumpToEditCard(templateType) {
			this.$router.push({ path: `/CardEditImages/${templateType}` });
		},
		// 计算 croppa 宽高和缩放比例
		computeCroppaSize() {
			var appElement = document.getElementById('app'),
				screenWidth = appElement.clientWidth;
			this.croppaWidth = screenWidth;
			this.croppaHeight = screenWidth;
			this.croppaQuality = 400 / screenWidth;
		},
		// 编辑图片
		editImage() {
			// 打开编辑图片面板
			this.isShowEditPanel = true;
			// 保存历史记录使得返回键不会回跳页面
			history.replaceState(null, null, location.href);
			// 计算 croppa 宽高和缩放比例
			this.computeCroppaSize();

			// 添加图片状态
			this.myCroppa.chooseFile();
		},
		// 使用图片
		useImage() {
			// 关闭编辑图片面板
			this.isShowEditPanel = false;

			// 拦截器：防止没有选择图片就对 croppa 对象操作导致错误
			if (this.myCroppa.imageSet) {
				// 生成 base64 字符串
				var base64Url = this.myCroppa.generateDataUrl('image/jpeg', 0.8);
				this.imageUrl = base64Url;
			} else {
				alert('没有选择图片');
			}

			// 删除 croppa 中图片
			this.myCroppa.remove();
		},
		// 获取类型数据
		getTypeList() {
			this.$http({
				method: 'GET',
				url: '/model/Detail/TypeAdd'
			}).then((response) => {
				var res = response.data;
				// 风格标签
				this.styleArr = res['0'];
				// 工作标签
				this.workArr = res['1'];
			}).catch((error) => {
				console.log(error);
			});
		},
		// 删除工作报价列表项
		delWorkPrice(workPriceIndex) {
			this.workPriceList.forEach((item, index) => {
				if (index == workPriceIndex) {
					this.workPriceList.splice(index, 1);
					return;
				}
			});
		},
		// 打开删除模卡弹窗
		showDeleteCardModal(cardType) {
			var _this = this;
			_this.deleteCardType = cardType;

			_this.$vux.confirm.show({
				title: '确定删除选中模卡？',
				onConfirm() {
					_this.$store.commit('DELETE_MODEL_CARD_LIST', _this.deleteCardType);
					var cardList = JSON.parse(sessionStorage.getItem('cardList'));
					cardList.forEach((item, index) => {
						if (item.type == _this.deleteCardType) {
							cardList.splice(index, 1);
							sessionStorage.setItem('cardList', JSON.stringify(cardList));
							_this.$vux.toast.text('删除成功！');
							return false;
						}
					});
				}
			})
		}
	},
	mounted() {
		this.getTypeList();
	}
}

</script>
<style lang="less">
.create-card {
	.weui-cells {
		font-size: 0.4rem !important;
		color: #382e2e !important;
		margin-top: 0 !important;
		.weui-cell {
			padding: 0.4135rem 0.4267rem !important;
		}
		.weui-icon {
			padding-left: 0.1333rem !important;
		}
		.weui-icon-clear {
			font-size: 0.3733rem !important;
		}
	}
	.vux-input-icon.weui-icon-warn:before,
	.vux-input-icon.weui-icon-success:before {
		font-size: 0.56rem !important;
	} //公共样式
	// .weui-dialog {
	// 	width: 9.0933rem !important;
	// 	max-width: none !important;
	// }
	.required {
			color: #fe3076;
			margin-right: 0.1rem
		}
	.items {
		.itemwrap {
			height: 1.3867rem;
			display: flex;
			justify-content: space-between;
			align-items: center;
			background-color: #fff;
			.itemtype,
			.itemhandle {
				height: 100%;
				input {
					font-size: 0.4rem;
					text-align: right;
					outline: 0;
				}
			}
			.itemtype {
				display: flex;
				align-items: center;
				span {
					font-size: 0.4rem;
					color: #382e2e;
					margin-left: 0.4267rem;
				}
			}
			.itemhandle {
				flex: 1;
				display: flex;
				justify-content: flex-end;
				align-items: center;
				margin-right: 0.4267rem;
				img {
					margin-left: 0.3733rem;
					width: 0.2133rem;
				}
			}
			.itemhandle-btn {
				span {
					font-size: 0.4rem;
					color: #909090;
				}
			}
		}
		.item-upload-picture {
			height: 2.1333rem;
			display: flex;
			justify-content: space-between;
			align-items: flex-start;
			background-color: #fff;
			.itemtype,
			.itemhandle {
				height: 100%;
			}
			.itemtype {
				display: flex;
				align-items: center;
				span {
					font-size: 0.4rem;
					color: #382e2e;
					margin-left: 0.4267rem;
				}
			}
			.itemhandle {
				img {
					height: 100%;
				}
			}
		}
		.item-gender {
			height: 1.3867rem;
			display: flex;
			justify-content: space-between;
			align-items: flex-start;
			background-color: #fff;
			.itemtype,
			.itemhandle {
				height: 100%;
			}
			.itemtype {
				display: flex;
				align-items: center;
				span {
					font-size: 0.4rem;
					color: #382e2e;
					margin-left: 0.4267rem;
				}
			}
			.itemhandle {
				display: flex;
				align-items: center;
				font-size: .4rem;
				.gender-item {
					padding: .3rem;
					border: 1px solid #ddd;
				}
				.gender-item-checked {
					border-color: #fe3076;
				}
			}
		}
	}
	.graybar {
		height: 0.2667rem;
	} //工作面和报价那一块
	.reward {
		.joboffer {
			height: 1.3867rem;
			display: flex;
			justify-content: space-between;
			align-items: center;
			background-color: #fff;
			border-bottom: 1px solid #ddd;
			.offer {
				height: 1.3867rem;
				display: flex;
				justify-content: center;
				align-items: center;
				svg {
					display: block;
					margin-left: 0.4533rem;
					width: 0.5067rem;
					height: 0.5067rem;
				}
				.type {
					margin-left: 0.4rem;
					font-size: 0.4rem;
				}
				.price {
					margin-left: 0.8267rem;
					font-size: 0.4rem;
					.money {
						color: #de3c3c;
						font-size: 0.4rem;
					}
				}
			}
			.delbtn {
				display: flex;
				align-items: center;
				margin-right: 0.88rem;
			}
		}
		.addoffer {
			display: flex;
			justify-content: center;
			align-items: center;
			height: 1.12rem;
			span {
				align-self: flex-end;
				margin-bottom: 0.2133rem;
				font-size: 0.4rem;
				color: #5863a7;
			}
		}
	}
	.samplepartbox {
		background-color: #fff;
		margin-bottom: 0.2667rem;
		.crossimgbox {
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
			.title {
				align-self: flex-start;
				height: 1.1467rem;
				display: flex;
				align-items: center;
				margin-left: 0.4267rem;
				font-size: 0.4rem;
				color: #382e2e;
			}
			.samplelist {
				width: 100%;
				text-align: center;
				.addpicture {
					display: inline-block; //width: 6.64rem;
					margin: 0.3733rem auto 0;
					font-size: 0;
					li {
						position: relative;
						width: 2.6933rem;
						height: 3.0667rem;
						display: inline-block;
						margin-right: 0.16rem;
						margin-bottom: 0.08rem;
						.showpicimg {
							width: 100%;
							height: 100%;
						}
						.deletebtn {
							position: absolute;
							right: -0.2667rem;
							top: -0.2667rem;
							width: 0.5333rem;
							height: 0.5333rem;
							border-radius: 50%;
							box-sizing: border-box;
							overflow: hidden;
							img {
								width: 100%;
							}
						}
					}
					li:last-child {
						margin-right: 0;
					}
					.addpicbtn {
						img {
							display: block;
							width: 1.4667rem;
							margin: 0.8rem auto;
						}
						.deletebtn {
							display: none;
						}
					}
				}
			}
		}
	} //上传作品集
	.uploadpic {
		background-color: #fff;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		.title {
			height: 1.3867rem;
			align-self: flex-start;
			display: flex;
			align-items: center;
			margin-left: 0.4267rem;
			font-size: 0.4rem;
			color: #382e2e;
		}
		.imgbox {
			ul {
				display: flex;
				justify-content: center;
				flex-wrap: wrap;
				li.showWork {
					position: relative;
					width: 100%;
					height: auto;
					margin: 0 0.4267rem 9px 0.4267rem;
					img.showworkImg {
						display: block;
						width: 100%;
						height: 100%;
					}
					.editbtn {
						display: flex;
						align-items: center;
						justify-content: center;
						position: absolute;
						right: 0.8rem;
						top: -0.2667rem;
						width: 0.5333rem;
						height: 0.5333rem;
						border-radius: 50%;
						box-sizing: border-box;
						background-color: #fff;
						overflow: hidden;
						img {
							width: 100%;
						}
					}
					.delbtn {
						display: flex;
						align-items: center;
						justify-content: center;
						position: absolute;
						right: -0.2667rem;
						top: -0.2667rem;
						width: 0.5333rem;
						height: 0.5333rem;
						border-radius: 50%;
						box-sizing: border-box;
						background-color: #de3c3c;
						overflow: hidden;
						img {
							width: 100%;
						}
					}
				}
			}
		}
		.newcreate {
			width: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
			height: 1.5467rem;
			span {
				height: 100%;
				display: flex;
				align-items: center;
				font-size: 0.4rem;
				color: #5863a7;
			}
		}
	} //确认上传
	.confirmsubmit {
		display: block;
		width: 76%;
		text-align: center;
		padding-left: 0.2667rem;
		padding-right: 0.2667rem;
		background-color: #ff8b00;
		color: #fff;
		font-size: 0.4533rem;
		height: 1.2rem;
		line-height: 1.2rem;
		margin: 0.9067rem auto 1.0667rem;
		border-radius: 0.16rem;
	}
	.dialog-offer {
		.contentwrap {
			width: 8rem;
			background: #f6f6f6;
			border-radius: 0.16rem;
			.headwrap {
				display: flex;
				justify-content: center;
				align-items: center;
				width: 9.0933rem;
				height: 1.4133rem;
				background-color: #f6f6f6;
				border-radius: 0.16rem;
				h4 {
					color: #382e2e;
					font-size: 0.4533rem;
					margin-left: 0.3467rem;
				}
			}
			.worktype {
				display: flex;
				justify-content: space-between;
				align-items: center;
				height: 1.3867rem;
				background-color: #fff;
				margin-bottom: 0.2667rem;
				span {
					margin-left: 0.48rem;
					font-size: 0.4rem;
				}
				.seletbox {
					display: flex;
					justify-content: flex-end;
					align-items: center;
					#worktype {
						text-align: right;
						font-size: 0.4rem;
						padding-right: 0.2667rem;
					}
					svg {
						margin-right: 0.4533rem;
					}
				}
			}
			.pricewrap {
				display: flex;
				justify-content: space-between;
				align-items: center;
				height: 1.3867rem;
				background-color: #fff;
				margin-bottom: 0.2667rem;
				span {
					margin-left: 0.48rem;
					font-size: 0.4rem;
				}
				.seletbox {
					display: flex;
					justify-content: flex-end;
					align-items: center;
					margin-right: 0.4533rem;
					.price {
						font-size: 0.4rem;
						width: 4.72rem;
						height: 1.2rem;
						outline: none;
						text-align: right;
						padding-right: 0.5333rem;
						border-bottom: 0.0267rem solid #2bb019;
					}
				}
			}
			.confirmbtn {
				display: flex;
				justify-content: center;
				align-items: center;
				height: 1.36rem;
				background-color: #fe3076;
				border-radius: 0 0 0.16rem 0.16rem;
				span {
					color: #fff;
					font-size: 0.4533rem;
				}
			}
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
		z-index: 100;
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
}
</style>
