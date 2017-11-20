<template>
	<div v-infinite-scroll="LoadMore" infinite-scroll-distance="10" infinite-scroll-immediate-check="false">
		<swiper :list="baseList" :aspect-ratio="175/375" :auto="true" :loop="true" :show-desc-mask="false"></swiper>
		<!-- 推荐榜 -->
		<!--<div id="introduce">
			        <div class="title">
			          <x-icon type="trophy" size="0.4rem" class="icon-color"></x-icon>
			          <span>推荐榜</span>
			        </div>
			        <div class="viplogo">
			          <img src="./img/vipbanner.jpg">
			        </div>
			      </div>-->
		<!--分类栏-->
		<div id="classifier">
			<div class="hotselectbox">
				<div class="showarea" @click="showHot=!showHot">
					<span>{{cardHot}}</span>
					<div class="arrowbox">
						<x-icon type="ios-arrow-down" size="0.4rem"></x-icon>
					</div>
				</div>
			</div>
			<div class="areaselectbox">
				<div class="showarea">
					<v-address :localAddr="defaultAddr" @on-change="getAddr($event)"></v-address>
					<div class="arrowbox">
						<x-icon type="ios-arrow-down" size="0.4rem"></x-icon>
					</div>
				</div>
			</div>
			<div class="typeselectbox">
				<div class="showarea" @click="showType=!showType">
					<span>{{cardType}}</span>
					<div class="arrowbox">
						<x-icon type="ios-arrow-down" size="0.4rem"></x-icon>
					</div>
				</div>
			</div>
			<div class="styleselectbox">
				<div class="showarea" @click="showStyle=!showStyle">
					<span>{{cardStyle}}</span>
					<div class="arrowbox">
						<x-icon type="ios-arrow-down" size="0.4rem"></x-icon>
					</div>
				</div>
			</div>
		</div>
		<x-dialog v-model="showHot" hide-on-blur>
			<select-list :arrList="hotArray" @on-change="selectPrames('cardHot',$event)"></select-list>
		</x-dialog>
		<x-dialog v-model="showType" hide-on-blur>
			<select-list :arrList="typeArray" @on-change="selectPrames('cardType',$event)"></select-list>
		</x-dialog>
		<x-dialog v-model="showStyle" hide-on-blur>
			<select-list :arrList="styleArray" @on-change="selectPrames('cardStyle',$event)"></select-list>
		</x-dialog>
		<div id="card-content">
			<ul class="content-part">
				<li v-for="(item,index) in normalCard" :key="index">
					<router-link :to="`/cardDetail/${item.id}`">
						<div class="img">
							<img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=759276231,3928522476&fm=11&gp=0.jpg">
						</div>
						<div class="baseinfo">
							<span class="name">{{item.name}}</span>
							<span class="area">{{item.city}}</span>
						</div>
						<div class="figureinfo">
							<span class="height">{{item.stature}}cm</span>
							<span class="weight">{{item.weight}}kg</span>
							<span class="bwh">{{item.surround}}</span>
						</div>
						<div class="typetag">
							<span class="btn" v-for="(item,index) in item.workJob" :key="index">{{item}}</span>
						</div>
					</router-link>
				</li>
			</ul>
			<load-more tip="loading" v-show="showLoading"></load-more>
			<divider v-show="showDivider">我是有底线的</divider>
		</div>
	</div>
</template>
<script>
import qs from 'qs'
import VAddress from '../../common/vuxAddress/vuxAddress'
import infiniteScroll from 'vue-infinite-scroll'
import {
	XDialog,
	LoadMore,
	Divider,
	Swiper
} from 'vux'
import selectList from '../../common/selectLayer/selectLayer'
import {
	domainAnnu
} from '../../base/common.js'
export default {
	components: {
		Swiper,
		VAddress,
		LoadMore,
		XDialog,
		Divider,
		selectList
	},
	data() {
		return {
			baseList: [], //轮播图数据
			showStyle: false, //风格弹窗排序
			showType: false,  //通告类型弹窗排序
			showHot: false, //全部排序弹窗状态
			showLoading: false, //是否正在加载中
			showDivider: false, //是否加载完所有数据
			onFetching: true, //一个状态禁止连续触发下拉事件
			initParmes: { //默认排序数据
				cardAddr: '全国',
				cardHot: '全部',
				cardStyle: '风格',
				cardType: '类型'
			},
			hotArray: ['全部', '点赞', '人气'],
			typeArray: ['类型'],
			styleArray: ['风格'],
			defaultAddr: '', //默认地址传给xaddress显示
			cardHot: '', //全部排序
			cardAddr: '', //地址排序
			cardType: '', //通告类型排序
			cardStyle: '', //风格排序
			nowPage: 1, //当前页数
			totalPage: 1,
			stickCard: [], //置顶名片数据
			normalCard: [] //普通名片数据
		}
	},
	created() {
		this.getBanner()
		this.getSelectType()
		this.InitParams()
	},
	methods: {
		//获取banner图
		getBanner() {
			this.$http.get('/model/Annunciate/Banner').then((res) => {
				let bannerList = []
				res.data.map(function(item) {
					let obj = {
						url: item.BannerURL,
						img: item.BannerPicture,
						title: '',
						id: item.ID
					}
					bannerList.push(obj)
				})
				this.baseList = bannerList
			})
		},
		//获取弹窗排序数据
		getSelectType() {
			this.$http.get('/model/Detail/TypeAdd').then((res) => {
				let style = res.data[0].map(item => item.type);
				let type = res.data[1].map(item => item.type);
				this.styleArray = this.styleArray.concat(style);
				this.typeArray = this.typeArray.concat(type);
			})
		},
		//页面根据本地存储数据首次获取名片数据
		InitParams() {
			let initParmes = this.initParmes;
			for (let item in initParmes) {
				if (localStorage.getItem(item)) {
					initParmes[item] = localStorage.getItem(item)
				}
			}
			this.defaultAddr = initParmes.cardAddr
			this.cardAddr = initParmes.cardAddr
			this.cardType = initParmes.cardType
			this.cardHot = initParmes.cardHot
			this.cardStyle = initParmes.cardStyle
			this.getInitData()
		},
		//获取初始名片数据
		getInitData() {
			let _this = this;
			this.$http.post('/model/Work/workAll', qs.stringify({
				page: 1,
				region: _this.initParmes.cardAddr == '全国' ? '' : _this.initParmes.cardAddr,
				workJob: _this.initParmes.cardStyle == '风格' ? '' : _this.initParmes.cardStyle,
				workType: _this.initParmes.cardType == '类型' ? '' : _this.initParmes.cardType,
				rank: _this.initParmes.cardHot == '全部' ? '' : _this.initParmes.cardHot,
			})).then((res) => {
				console.log(res)
				res.data.work.map(item => {
					let tagNum = item.workJob.split(' / ').length
					//判断标签数目做简化操作
					if (tagNum > 3) {
						item.workJob = item.workJob.split(' / ').slice(0, 3)
					} else {
						item.workJob = item.workJob.split(' / ').slice(0, -1)
					}
				})
				this.normalCard = res.data.work
				this.stickCard = res.data.stickWork
				this.nowPage = res.data.page.PageNumber
				this.totalPage = res.data.page.TotalPage
			})
		},
		//获取子组件中的排序值请求数据并存储到本地
		selectPrames(attr, val) {
			this[attr] = val
			console.log(this[attr])
			if (attr === 'cardType') {
				this.getCardList()
				this.showType = false
				this.nowPage = 1
				this.onFetching = true
				this.showDivider = false
				localStorage.setItem('cardType', val)
			} else if (attr === 'cardStyle') {
				this.getCardList()
				this.showStyle = false
				this.nowPage = 1
				this.onFetching = true
				this.showDivider = false
				localStorage.setItem('cardStyle', val)
			} else if (attr === 'cardHot') {
				this.getCardList()
				this.showHot = false
				this.nowPage = 1
				this.onFetching = true
				this.showDivider = false
				localStorage.setItem('cardHot', val)
			}
		},
		//接收地址选择器传来的值
		getAddr(val) {
			console.log(val)
			this.cardAddr = val.slice(1)
			this.getCardList()
			this.nowPage = 1
			this.onFetching = true
			this.showDivider = false
			localStorage.setItem('cardAddr', val.slice(1))
		},
		// 根据选项获取名片数据
		getCardList() {
			let _this = this
			this.$http.post('/model/Work/workAll', qs.stringify({
				page: 1,
				region: _this.cardAddr == '全国' ? '' : _this.cardAddr,
				workJob: _this.cardStyle == '风格' ? '' : _this.cardStyle,
				workType: _this.cardType == '类型' ? '' : _this.cardType,
				rank: _this.cardHot == '全部' ? '' : _this.cardHot,
			})).then(res => {
				console.log(res)
				res.data.work.map(item => {
					let tagNum = item.workJob.split(' / ').length
					if (tagNum > 3) {
						item.workJob = item.workJob.split(' / ').slice(0, 3)
					} else {
						item.workJob = item.workJob.split(' / ').slice(0, -1)
					}
				})
				this.normalCard = res.data.work
				this.stickCard = res.data.stickWork
				this.nowPage = res.data.page.PageNumber
				this.totalPage = res.data.page.TotalPage
			})
		},
		// 下拉刷新加载更多数据
		LoadMore() {
			let _this = this
			if (this.onFetching) {
				if (this.nowPage < this.totalPage) {
					this.nowPage++
					this.showLoading = true
					this.onFetching = false
					this.$http.post('/model/Work/workAll', qs.stringify({
						page: _this.nowPage,
						region: _this.cardAddr == '全国' ? '' : _this.cardAddr,
						workJob: _this.cardStyle == '风格' ? '' : _this.cardStyle,
						workType: _this.cardType == '类型' ? '' : _this.cardType,
						rank: _this.cardHot == '全部' ? '' : _this.cardHot,
					})).then(res => {
						console.log(res)
						setTimeout(() => {
							res.data.work.map(item => {
								let tagNum = item.workJob.split(' / ').length
								if (tagNum > 3) {
									item.workJob = item.workJob.split(' / ').slice(0, 3)
								} else {
									item.workJob = item.workJob.split(' / ').slice(0, -1)
								}
							})
							this.normalCard = this.normalCard.concat(res.data.work)
							this.stickCard = res.data.stickWork
							this.totalPage = res.data.page.TotalPage
							this.showLoading = false
							this.onFetching = true
						}, 800)
					})
				} else {
					this.showDivider = true
					this.onFetching = false
				}
			}
		}
	}
}

</script>
<style lang="less">
#introduce {
	background-color: #fff;
	margin-bottom: 0.18666666666666668rem;
	.title {
		height: 1.04rem;
		position: relative;
		.icon-color {
			display: block;
			position: absolute;
			width: 0.48rem;
			height: 0.48rem;
			fill: #ff2f77;
			top: 0.37333333333333335rem;
			left: 0.26666666666666666rem;
		}
		span {
			position: absolute;
			top: 0.4rem;
			left: 0.8266666666666667rem;
			font-size: 0.37333333333333335rem;
			color: #ff2f77;
		}
	}
	.viplogo {
		width: 100%;
		height: 2.1333333333333333rem;
		img {
			display: block;
			height: 100%;
			width: 100%;
		}
	}
}

#classifier {
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #fff;
	height: 1.2533333333333334rem;
	border-bottom: 1px solid #717171;
	.hotselectbox,
	.typeselectbox,
	.areaselectbox,
	.styleselectbox {
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
		top: 0;
		left: 0;
		height: 0.64rem;
		width: 25%;
		.showarea {
			display: flex;
			justify-content: center;
			align-items: center;
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 0.64rem;
			border-right: 1px solid #c7c7c7;
			span {
				font-size: 0.373rem;
				line-height: 0.64rem;
				margin-right: 0.133rem;
				color: #2c2a2a;
			}
			input {
				display: inline-block;
				width: 0.7467rem;
				line-height: 0.64rem;
				font-size: 0.3733rem;
				color: #2c2a2a;
				text-align: center;
			}
			input::-webkit-input-placeholder {
				color: #2c2a2a;
			}
			.arrowbox {
				display: flex;
				align-items: center;
				width: 0.373rem;
				height: 100%;
			}
		}
	}
	.styleselectbox .showarea {
		border: none;
	}
}

#card-content {
	display: flex;
	justify-content: center;
	flex-direction: column;
	margin-bottom: 1.7333rem;
	ul {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		align-items: center;
		width: 100%;
		li {
			position: relative;
			background-color: #fff;
			width: 4.95rem;
			margin-bottom: 0.1333rem;
			a {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				position: relative;
				width: 100%; //图片那一栏
				.img {
					display: flex;
					justify-content: center;
					height: 4.95rem;
					width: 4.95rem;
					overflow: hidden;
					img {
						display: block;
						height: 100%;
					}
				} //名字地区那一栏
				.baseinfo {
					display: flex;
					justify-content: space-between;
					align-items: center;
					height: 0.8rem;
					width: 100%;
					color: #2c2a2a;
					span.name {
						margin-left: 0.35rem;
						font-size: 0.3733rem;
					}
					span.area {
						margin-right: 0.3rem;
						font-size: 0.3733rem;
					}
				}
				.figureinfo {
					display: flex;
					justify-content: space-between;
					height: 0.6rem;
					width: 100%;
					color: #2c2a2a;
					span.height {
						margin-left: 0.35rem;
						font-size: 0.3733rem;
					}
					span.weight {
						// margin-left: 0.3467rem;
						font-size: 0.3733rem;
					}
					span.bwh {
						margin-right: 0.3rem;
						font-size: 0.3733rem;
					}
				}
				.typetag {
					display: flex;
					position: absolute;
					top: 4.3rem;
					left: 0.15rem;
					.btn {
						border: 0.0267rem solid #fff;
						border-radius: 0.2667rem;
						padding: 0.068rem 0.16rem;
						font-size: 0.32rem;
						margin-right: 0.1rem;
						color: #fff;
					}
				}
			}
		}
	}
}
</style>
