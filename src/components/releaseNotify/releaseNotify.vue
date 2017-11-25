<template>
	<div id="release-notify">
		<x-header>发布通告
			<a slot="right" @click="$router.push('/')">
				<x-icon type="ios-home-outline" size="0.6rem" class="icon-home"></x-icon>
			</a>
		</x-header>
		<div class="editnotify">
			<!-- 工作类型 -->
			<div class="items onepx">
				<div class="itemwrap">
					<div class="itemtype">
						<span>
							<b class="required">*</b>
							工作类型
						</span>
					</div>
					<div class="itemhandle" @click="showType=!showType">
						<span>{{worktype}}</span>
						<x-icon type="chevron-right" size="0.4rem" class="icon-home"></x-icon>
					</div>
				</div>
			</div>
			<!-- 工作主题 -->
			<group class="onepx">
				<x-textarea title="工作主题" :max="25" v-model.trim="theme" placeholder="简单说下~" :required="true" autosize></x-textarea>
			</group>
			<!-- 工作时间 -->
			<div class="items garybar">
				<div class="itemwrap">
					<div class="itemtype">
						<span>
							<b class="required">*</b>
							工作时间
						</span>
					</div>
					<div class="itemhandle2">
						<group>
							<datetime v-model="startTime" :start-date="startTime" @on-change="changeStartTime()"></datetime>
						</group>
						<span>至</span>
						<group>
							<datetime v-model="endTime" :start-date="startTime"></datetime>
						</group>
					</div>
				</div>
			</div>
			<!-- 工作地点 -->
			<div class="items onepx">
				<div class="itemwrap">
					<div class="itemtype">
						<span>
							<b class="required">*</b>
							工作地点
						</span>
					</div>
					<div class="itemhandle">
						<v-addresses :localAddr="defaultPlaceholder" @on-change="getAddr($event)"></v-addresses>
					</div>
				</div>
			</div>
			<!-- 详细地址 -->
			<group class="garybar">
				<x-input title="详细地址" type="text" v-model="detailaddr" :should-toast-error='false' text-align="right"></x-input>
			</group>
			<!-- 岗位要求 -->
			<div class="requestbox">
				<div class="requestitems">
					<div class="itemwrap">
						<div class="itemtype">
							<b class="required">*</b>
							岗位要求
						</div>
						<div class="itemhandle">
							<span>是否面试</span>
							<v-switch title="" :init="ifInterview" @on-change="getInterview($event)"></v-switch>
						</div>
					</div>
				</div>
				<div class="requesttypewrap">
					<div class="requesttype">
						<div class="inputcount">
							<input type="number" placeholder="输入人数" min="1" max="999" v-model="inputcount">
							<div class="units">人</div>
						</div>
						<select name="" id="gender" v-model="sex">
							<option>女</option>
							<option>男</option>
							<option>不限</option>
						</select>
						<select name="" id="price" v-model="priceType">
							<option>价格</option>
							<option>自报价</option>
							<option>面议</option>
						</select>
						<select name="" id="units" v-model="units" v-show="priceType=='价格'">
							<option>元/人</option>
							<option>元/人/天</option>
							<option>元/人/时</option>
							<option>元/人/件</option>
						</select>
						<input class="inputprice" type="number" placeholder="点击输入价格" v-model.trim="price" v-show="priceType=='价格'">
					</div>
				</div>
			</div>
			<!-- 详细说明 -->
			<group>
				<x-textarea title="详细说明" :max="140" v-model.trim="inputspecify" placeholder="细致地介绍一下~" autosize></x-textarea>
			</group>
			<!-- 联系方式 -->
			<div class="contactinfowrapbox">
				<div class="contactinfobox">
					<div class="titleline">
						<h4>
							<b class="required">*</b>联系方式</h4>
					</div>
					<div class="inputcontactinfobox">
						<select class="contactinfotype" v-model="contactInfoType">
							<option value="weixin">微信</option>
							<option value="iphone">手机</option>
							<option value="email">邮箱</option>
							<option value="qq">qq</option>
						</select>
						<input type="text" class="inputcontactinfo" placeholder="请输入联系方式" v-model="inputContactInfo">
					</div>
				</div>
			</div>
			<!-- 添加图片 -->
			<div class="samplepartbox">
				<div class="crossimgbox">
					<div class="addphotoline">
						<div class="titleline">
							<h4>添加图片(选填)</h4>
						</div>
						<div class="editbtn">编辑</div>
					</div>
					<div class="samplelist">
						<ul class="addpicture">
							<li class="showpic" v-for="(item,index) in albums" :key="index">
								<img class="showpicimg" :src="item">
							</li>
							<li class="addpicbtn">
								<x-icon type="ios-plus-outline" size="2.0rem" class="icon-home"></x-icon>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<!-- 确认提交 -->
			<div>
				<button class="confirmsubmit" @click="submitForm()">确认提交</button>
			</div>
			<!-- 提交后的彈窗 -->
			<div class="aftersubmitwrap" v-if="if_first">
				<div class="aftersubmit">
					<div class="aftercontent">
						<h4>首次发布请留下您的联系方式</h4>
						<p>留下您的联系方式，审核通过更快速，还可以加入内部群，找模特更省心！</p>
						<div class="inputwxbox">
							<label for="inputwx">您的微信：</label>
							<div>
								<input type="text" v-model.trim="Wx" placeholder="请输入您的微信号">
							</div>
						</div>
						<div class="inputphonebox">
							<label for="inputphone">手机号码：</label>
							<div>
								<input type="text" v-model.trim="Wxphone" placeholder="请输入您的手机号">
							</div>
						</div>
					</div>
					<div class="afterbtn" @click="firstCommit()">确定</div>
				</div>
			</div>
			<x-dialog v-model="showType" hide-on-blur>
				<select-list :arrList="typeArr" @on-change="selectPrames('worktype',$event)"></select-list>
			</x-dialog>
		</div>
	</div>
</template>
<script>
import qs from 'qs'
import {
	XHeader,
	Datetime,
	XDialog,
	XInput,
	Group,
	XTextarea
} from "vux";
import VSwitch from "../../common/switch/switch";
import VAddresses from "../../common/vuxAddresses/vuxAddresses";
import selectList from "../../common/selectLayer/selectLayer";
export default {
	data() {
		return {
			if_first: false, //是否第一次发布
			showType: false, //类型弹窗状态
			worktype: '', //通告类型
			typeArr: [],  //提供遍历的类型数组
			albums: [],   //相册
			theme: '',    //工作主题
			defaultPlaceholder: '',//地址默认提示
			address: '',   //地址
			detailaddr: '', // 详细地址
			sex: '女',     //报价性别
			priceType: '价格', //报价类型
			inputcount: '',  //报价需要人数
			units: '元/人',  //报价单位
			price: '',   //报价
			inputspecify: '',//详细说明
			contactInfoType: 'weixin',//联系方式类型
			inputContactInfo: '',//联系方式内容
			ifInterview: false, //是否面试
			startTime: '', //开始时间
			endTime: '',  //结束时间
			serverId: '',
			Wx: '',   //第一次提交的微信号
			Wxphone: '' //第一次提交的手机号
		};
	},
	methods: {
		//请求后台类型数据
		getSelectType() {
			this.$http.get('/model/Annunciate/typeList')
				.then((res) => {
					console.log(res)
					this.typeArr = res.data.map(function(item) {
						return item.antype
					})
				})
		},
		//获取当前日期
		getToday() {
			let now = new Date()
			let cmonth = now.getMonth() + 1
			let day = now.getDate()
			if (cmonth < 10) cmonth = '0' + cmonth
			if (day < 10) day = '0' + day
			this.startTime = now.getFullYear() + '-' + cmonth + '-' + day
			this.endTime = now.getFullYear() + '-' + cmonth + '-' + day
		},
		//动态改变起始时间
		changeStartTime() {
			this.endTime = this.startTime
		},
		//获取子组件中的排序值请求数据并存储到本地
		selectPrames(attr, val) {
			this[attr] = val
			this.showType = false
			console.log(this[attr])
		},
		//获取地址
		getAddr(val) {
			this.address = val
		},
		//获取是否面试状态
		getInterview(val) {
			this.ifInterview = val
		},
		//表单验证
		checkForm() {
			let infoList = {
				worktype: this.worktype,
				worktheme: this.theme,
				arealist: this.address,
				inputcount: this.inputcount,
				contactinfo: this.inputContactInfo,
			}
			let toastList = {
				worktype: '请选择您的工作类型！',
				worktheme: '请输入您的工作主题',
				arealist: '请选择工作地点',
				inputcount: '请选择需要的人数',
				contactinfo: '请输入您的联系方式',
			}
			for (var x in infoList) {
				if (infoList[x] === '') {
					this.$vux.toast.text(toastList[x], 'middle')
					return false
				}

			}
			if (this.priceType == '价格') {
				if (this.price == '') {
					this.$vux.toast.text('请输入价格', 'middle')
					return false
				}
			}
			return true
		},
		//点击确认提交
		submitForm() {
			//验证表单
			let tag = this.checkForm()
			console.log(tag)
			if (tag) {
				//判断用户是否第一次提交
				console.log(2)
				this.$http.get('/model/Annunciate/Firstnext')
					.then((res) => {
						console.log(res)
						if (res.data.result === '不存在联系方式') {
							this.if_first = true
						} else if (res.data.result === '存在联系方式') {
							this.$http.post('/model/Annunciate/AddParticulars', qs.stringify({
								worktype: this.worktype,
								deadtime: '',
								worktheme: this.theme,
								starttime: this.startTime,
								endtime: this.endTime,
								arealist: this.address,
								detailaddr: this.detailaddr,
								gender: this.sex,
								inputcount: this.inputcount,
								ifinterview: this.ifInterview == true ? '是' : '否',
								price: this.priceType == '价格' ? this.price + this.units : this.priceType,
								inputspecify: this.inputspecify,
								contactinfo: this.contactInfoType + ':' + this.inputContactInfo,
								serverId: ''
							})).then(res => {
								console.log(res)
								if (res.data.result === 'success') {
									this.$vux.toast.text('通告发布成功~', 'middle')
									setTimeout(() => {
										this.$router.push('/myRelease')
									}, 2000)
								}
							})
						}
					})
			}
		},
		//第一次提交通告事件
		firstCommit() {
			// 验证微信号
			if (this.Wx === '') {
				this.$vux.toast.text('微信号不能为空！', 'middle')
				return
			}
			//验证手机号
			if (this.Wxphone === '') {
				this.$vux.toast.text('手机号不能为空！', 'middle')
				return
			} else if (!(/^1[0-9]{10}$/.test(this.Wxphone))) {
				this.$vux.toast.text('请输入正确的手机号', 'middle')
				return
			}
			this.$http.post('/model/Annunciate/Relation', qs.stringify({
				Wx: this.Wx,
				Wxphone: this.Wxphone
			})).then(res => {
				if (res.data.result === '保存成功') {
					this.if_first = false
					this.$http.post('/model/Annunciate/AddParticulars', qs.stringify({
						worktype: this.worktype,
						deadtime: '',
						worktheme: this.theme,
						starttime: this.startTime,
						endtime: this.endTime,
						arealist: this.address,
						detailaddr: this.detailaddr,
						gender: this.sex,
						inputcount: this.inputcount,
						ifinterview: this.ifInterview == true ? '是' : '否',
						price: this.priceType == '价格' ? this.sex + this.inputcount + this.price + this.units : this.sex + this.inputcount + this.priceType,
						inputspecify: this.inputspecify,
						contactinfo: this.contactInfoType + ':' + this.contactinfo,
						serverId: ''
					})).then(res => {
						if (res.data.result === 'success') {
							this.$vux.toast.text('通告发布成功~', 'middle')
							setTimeout(() => {
								this.$router.push('/myRelease')
							}, 2000)
						}
					})
				}
			})
		}
	},
	created() {
		this.getToday()
		this.getSelectType()
	},
	components: {
		XHeader,
		Datetime,
		XInput,
		Group,
		XTextarea,
		XDialog,
		VSwitch,
		VAddresses,
		selectList
	}
};

</script>
<style lang="less">
#release-notify {
	.editnotify {
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
		.required {
			color: #fe3076;
			margin-right: 0.1rem
		}
		.items {
			.itemwrap {
				display: flex;
				align-items: center;
				justify-content: space-between;
				height: 1.44rem;
				background: #fff;
				.itemhandle,
				.itemtype {
					height: 100%;
				}
				.itemtype {
					display: flex;
					align-items: center;
					svg {
						margin-left: 0.6133rem;
					}
					&>span {
						display: flex;
						justify-content: center;
						align-items: center;
						margin-left: 0.4533rem;
						line-height: 1.44rem;
						font-size: 0.4rem;
						color: #382d2e;
						.require {
							color: #fe3076;
							margin-left: 0.08rem;
						}
					}
				}
				.itemhandle {
					flex: 1;
					display: flex;
					align-items: center;
					justify-content: flex-end;
					margin-right: 0.6133rem;
					img {
						margin-left: 0.2133rem;
						width: 0.2133rem;
					}
					span {
						margin-left: 0.4533rem;
						line-height: 1.3867rem;
						font-size: 0.4rem;
						color: #919191;
					}
					input {
						font-size: 0.4rem;
						text-align: right;
						outline: none;
					}
				}
				.itemhandle2 {
					display: flex;
					justify-content: flex-end;
					align-items: center;
					flex: 1;
					height: 100%;
					margin-right: 0.5067rem;
					input {
						width: 2.3467rem;
						margin-right: 0.1067rem;
						margin-left: 0.1067rem;
						font-size: 0.3733rem;
						text-align: right;
					}
					span {
						color: #382f2d;
					}
					span.vux-cell-placeholder {
						color: #707070;
					}
					span {
						font-size: 0.36rem !important;
					}
				}
			}
		}
		.requestbox {
			background: #fff;
			padding: 0 0.4533rem;
			margin-bottom: 0.2667rem;
			.requestitems {
				.itemwrap {
					display: flex;
					align-items: center;
					height: 1.44rem;
					background: #fff;
					.itemhandle,
					.itemtype {
						height: 100%;
					}
					.itemtype {
						display: flex;
						align-items: center;
						font-size: 0.4rem;
						.itemlogo {
							width: 0.4267rem;
						}
					}
					.itemhandle {
						flex: 1;
						display: flex;
						align-items: center;
						justify-content: flex-end;
						span {
							font-size: 0.4rem;
							color: #382d2e;
						}
					}
				}
			}
			.requesttypewrap {
				display: flex;
				justify-content: flex-end;
				.requesttype {
					width: 100%;
					display: flex;
					flex-flow: row wrap;
					justify-content: space-between;
					margin: 0 0 0.3467rem 0.8533rem;
					.inputcount,
					select {
						height: 0.9333rem;
						width: 48%;
						font-size: 0.32rem;
						border: 0.0267rem solid #a1a1a1;
						box-sizing: border-box;
						border-radius: 0.1333rem;
						text-align: center;
						margin-top: 0.4rem;
						color: #919191;
						outline: none;
						option {
							color: #919191;
							outline: none;
						}
					}
					.inputcount {
						overflow: hidden;
						input {
							display: inline-block;
							width: 65%;
							line-height: 0.9333rem;
							padding-left: 0.0533rem;
							box-sizing: border-box;
							font-size: 0.4rem;
						}
						input::-webkit-input-placeholder {
							font-size: 0.3733rem !important;
						}
						input:-moz-placeholder {
							font-size: 0.3733rem !important;
						}
						input::-moz-placeholder {
							font-size: 0.3733rem !important;
						}
						input:-ms-input-placeholder {
							font-size: 0.3733rem !important;
						}
						.units {
							height: 0.8rem;
							font-size: 0.3733rem;
							display: inline-block;
							text-align: center;
						}
					}
					.inputprice {
						width: 100%;
						font-size: 0.4rem;
						line-height: 0.9067rem;
						margin-top: 0.16rem;
						border-bottom: 0.0267rem solid #ccc;
						padding: 0 0.2133rem;
						box-sizing: border-box;
						outline: none;
					}
				}
			}
		}
		.contactinfowrapbox {
			background: #fff;
			margin-bottom: 0.2667rem;
			.contactinfobox {
				width: 100%;
				padding: 0.48rem 0.4267rem 0.48rem 0.56rem;
				box-sizing: border-box;
				.titleline {
					display: flex;
					align-items: center;
					height: 0.6667rem;
					svg {
						margin-right: 0.3733rem;
					}
					h4 {
						font-size: 0.4rem;
						line-height: 0.6667rem;
						color: #382f2f;
						.require {
							color: #fe3076;
							margin-left: 0.08rem;
						}
					}
				}
				.inputcontactinfobox {
					display: flex;
					margin: 0.3733rem 0.1867rem 0.3467rem 0.8533rem;
					.inputcontactinfo {
						width: 100%;
						height: 0.9333rem;
						line-height: 0.6667rem;
						padding: 0 0.1333rem;
						box-sizing: border-box;
						margin-left: 0.1333rem;
						border: 0.0267rem solid #a1a1a1;
						border-radius: 0.1333rem;
						font-size: 0.3733rem;
						color: #919191;
						resize: none;
						outline: none;
					}
					.contactinfotype {
						height: 0.9333rem;
						width: 2.24rem;
						font-size: 0.32rem;
						border: 0.0267rem solid #a1a1a1;
						box-sizing: border-box;
						border-radius: 0.1333rem;
						text-align: center;
						color: #919191;
						outline: none;
						option {
							color: #919191;
							outline: none;
						}
					}
				}
			}
		}
		.samplepartbox {
			background: #fff;
			margin-bottom: 0.2667rem;
			.crossimgbox {
				padding: 0.5333rem 0.4267rem 0.2667rem 0.56rem;
				.addphotoline {
					display: flex;
					justify-content: space-between;
					.titleline {
						display: flex;
						align-items: center;
						height: 0.6667rem;
						svg {
							margin-right: 0.3733rem;
						}
						h4 {
							font-size: 0.4rem;
							line-height: 0.6667rem;
							color: #382f2f;
						}
					}
					.editbtn {
						font-size: 0.4rem;
						color: #4c565e;
						line-height: 0.6667rem;
						text-align: right;
						margin-right: 0.1867rem;
					}
				}
				.samplelist {
					width: 100%;
					text-align: center;
					.addpicture {
						display: inline-block; //width: 6.64rem;
						margin: 0.3733rem auto 0;
						font-size: 0;
						li {
							display: inline-block;
							position: relative;
							width: 2.0533rem;
							height: 2.0533rem;
							margin-right: 0.2133rem;
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
								margin: 0.2933rem auto;
							}
							.deletebtn {
								display: none;
							}
						}
					}
				}
			}
		}
		.confirmsubmit {
			display: block;
			width: 76%;
			height: 1.2rem;
			line-height: 1.2rem;
			text-align: center;
			font-size: 0.4267rem;
			padding: 0 0.2667rem;
			border-radius: 0.1333rem;
			background: #ff8b00;
			color: #fff;
			margin: 0.6667rem auto;
		}
		.confirmsubmit:active {
			background: #e98814;
		}
		.aftersubmitwrap {
			position: fixed;
			top: 0;
			left: 0;
			width: 100%;
			bottom: 0;
			background: rgba(0, 0, 0, 0.5);
			z-index: 10;
			.aftersubmit {
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
				width: 90%;
				border-radius: 0.16rem;
				overflow: hidden;
				.aftercontent {
					padding: 0.72rem 0.5067rem 0.8rem;
					background: #fff;
					h4 {
						font-size: 0.48rem;
						color: #333;
					}
					p {
						margin-top: 0.32rem;
						line-height: 0.6933rem;
						font-size: 0.3733rem;
						color: #919191;
					}
					.inputwxbox,
					.inputphonebox {
						display: flex;
						align-items: center;
						height: 0.9067rem;
						label {
							font-size: 0.4267rem;
						}
						div {
							flex: 1;
							overflow: hidden;
							input {
								box-sizing: border-box;
								width: 100%;
								color: #333;
								height: 0.9067rem;
								font-size: 0.4267rem;
								line-height: 0.8533rem;
								border-bottom: 0.0267rem solid #bbb;
								outline: none;
								padding: 0 0.32rem;
							}
						}
					}
					.inputwxbox {
						margin-top: 0.8rem;
					}
					.inputphonebox {
						margin-top: 0.3733rem;
					}
				}
				.afterbtn {
					height: 1.3333rem;
					font-size: 0.48rem;
					color: #fff;
					line-height: 1.3333rem;
					text-align: center;
					background: #fe3076;
				}
			}
		}
		.onepx {
			border-bottom: 0.0133rem solid #ccc;
		}
		.garybar {
			margin-bottom: 0.2667rem;
		}
	}
}

.dp-container {
	.dp-header {
		.dp-item {
			font-size: 0.4267rem !important;
			height: 1.1733rem !important;
			line-height: 1.1733rem !important;
		}
	}
}
</style>
