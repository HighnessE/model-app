<template>
	<div class="create-card">
		<x-header>制作名片
			<a slot="right">
				<x-icon type="ios-home-outline" size="0.6rem" class="icon-home"></x-icon>
			</a>
		</x-header>
		<div class="editcard">
			<!-- 姓名 -->
			<group>
				<x-input title="姓名" v-model="name" :should-toast-error=false :max="10" text-align="right" placeholder="（必填）"></x-input>
			</group>
			<!--年龄-->
			<group>
				<x-input title="年龄" type="number" v-model="age" :should-toast-error=false :max="3" text-align="right" placeholder="（必填）"></x-input>
			</group>
			<!--地区-->
			<div class="items">
				<div class="itemwrap">
					<div class="itemtype">
						<span>地区</span>
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
				<x-input title="身高/cm" type="number" v-model="height" :should-toast-error=false :max="3" text-align="right" placeholder="（必填）"></x-input>
			</group>
			<!--体重-->
			<group>
				<x-input title="体重/kg" type="number" v-model="weight" :should-toast-error=false :max="3" text-align="right" placeholder="（必填）"></x-input>
			</group>
			<!--三围-->
			<div class="items">
				<div class="itemwrap">
					<div class="itemtype">
						<span>三围</span>
					</div>
					<div class="itemhandle">
						<v-address></v-address>
						<x-icon type="chevron-right" size="0.4rem" class="icon-home"></x-icon>
					</div>
				</div>
			</div>
			<!--鞋码-->
			<group>
				<x-input title="鞋码" type="number" v-model="shoe" :should-toast-error=false :max="2" text-align="right" placeholder="（必填）"></x-input>
			</group>
			<div class="graybar"></div>
			<!--风格标签-->
			<div class="items">
				<div class="itemwrap">
					<div class="itemtype">
						<span>风格标签</span>
					</div>
					<div class="itemhandle" @click="showStyleDialog=!showStyleDialog">
						<input type="text" placeholder="选择2~5个" :value="styleTag.join(' / ')" readonly>
						<x-icon type="chevron-right" size="0.4rem" class="icon-home"></x-icon>
					</div>
				</div>
			</div>
			<!--工作标签-->
			<div class="items">
				<div class="itemwrap">
					<div class="itemtype">
						<span>工作标签</span>
					</div>
					<div class="itemhandle" @click="showWorkDialog=!showWorkDialog">
						<input type="text" placeholder="选择2~5个" :value="workTag.join(' / ')" readonly>
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
				<div class="offerList">
					<div class="joboffer">
						<div class="offer">
							<x-icon type="social-yen" size="0.5rem" class="icon-home"></x-icon>
							<span class="type">发膜</span>
							<span class="price">
								<span class="money">10</span>元/天</span>
						</div>
						<div class="delbtn">
							<x-icon type="close-circled" size="0.5rem" class="icon-home"></x-icon>
						</div>
					</div>
				</div>
				<div class="addoffer">
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
					<div class="title">添加相册</div>
					<div class="samplelist">
						<ul class="addpicture">
							<li class="showpic">
								<img class="showpicimg">
								<div class="deletebtn">
									<x-icon type="android-add-circle" size="0.4rem" class="icon-home"></x-icon>
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
							<input type="text" placeholder="点击选择" readonly id="worktype">
							<x-icon type="chevron-right" size="0.4rem" class="icon-home"></x-icon>
						</div>
					</div>
					<div class="pricewrap">
						<span class="title">价格</span>
						<div class="seletbox">
							<input type="number" placeholder="点击输入" class="price">
						</div>
					</div>
					<div class="confirmbtn" @click="showOfferDialog = false">
						<span>确定</span>
					</div>
				</div>
			</x-dialog>
			<!-- 通告类型弹窗 -->
			<x-dialog v-model="showNotifyDialog">
				<single-select-button :selections="notifyArr" @on-change="getNotifyTag($event)">
					<div @click="closeNotifyDialog()">完成</div>
				</single-select-button>
			</x-dialog>
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
	Picker
} from 'vux';
import VSwitch from '../../common/switch/switch'
import VAddress from '../../common/vuxAddress/vuxAddress'
import selectButton from '../../common/selectButton/selectButton'
import singleSelectButton from '../../common/singleSelectButton/singleSelectButton'
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
		Picker
	},
	data() {
		return {
			name: '',
			age: '',
			height: '',
			weight: '',
			shoe: '',
			resume: '',
			self: '',
			workTag: [],
			styleTag: [],
			interview: false,
			workArr: [{
				type: 1
			}, {
				type: 2
			}],
			styleArr: [{
				type: 3
			}, {
				type: 4
			}],
			notifyArr: [],
			showWorkDialog: false,
			showStyleDialog: false,
			showOfferDialog: false,
			showNotifyDialog: false,

		}
	},
	methods: {
		getTagChange(attr, val) {
			this[attr] = val;
			console.log(this.workTag)
		},
		getNotifyTag(val) {
			console.log(val)
		},
		openNotifyDialog() {
			this.showNotifyDialog = true;
			this.showOfferDialog = false;
		},
		closeNotifyDialog() {
			this.showNotifyDialog = false;
			this.showOfferDialog = true;
		},
		ifInterView(val) {
			this.interview = val
		},
		changeOffer() {
			console.log(222);
		},
		// 跳转到创建模卡页面
		jumpToCardTemplate() {
			console.log(this.name, 'this.bwh', this.weight, this.height, this.shoe);
		}
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
	.weui-dialog {
		width: 9.0933rem !important;
		max-width: none !important;
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
						position: absolute;
						right: 0.8rem;
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
					.delbtn {
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
			width: 9.0933rem;
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
}
</style>
