<template>
	<div class="card-detail">
		<x-header>我的名片
			<a slot="right">
				<x-icon type="ios-home-outline" size="0.6rem" class="icon-home"></x-icon>
			</a>
		</x-header>
		<!-- 头部banner -->
		<div class="card-banner">
			<div class="banner">
				<img src="./img/card-detail-bg.png">
			</div>
			<div class="header">
				<div class="headerimg">
					<img :src="userImg">
					<div class="nickname">{{username}}</div>
				</div>
			</div>
		</div>
		<!-- 个人资料 -->
		<div class="person-wrap">
			<div class="personinfo">
				<div class="ptitle">
					<x-icon type="ios-person-outline" size="0.6rem" style="fill:#382e2e"></x-icon>
					<span>个人资料</span>
				</div>
			</div>
			<div class="baseinfo">
				<span>{{cardInfo.name}}</span>
				<span>{{cardInfo.sex}}</span>
				<span>{{cardInfo.age}}</span>
				<span>{{cardInfo.city}}</span>
			</div>
			<div class="baseinfobox">
				<div class="wrapbox">
					<div class="items">
						<img src="./img/myheight.png" alt="">
						<p>{{cardInfo.stature}}cm</p>
					</div>
					<div class="items">
						<img src="./img/myweight.png" alt="">
						<p>{{cardInfo.weight}}kg</p>
					</div>
					<div class="items">
						<img src="./img/mysanwei.png" alt="">
						<p>{{cardInfo.surround}}</p>
					</div>
					<div class="items">
						<img src="./img/myfoot.png" alt="">
						<p>{{cardInfo.shoe}}码</p>
					</div>
				</div>
			</div>
		</div>
		<!-- 工作信息 -->
		<div class="work-wrap">
			<div class="workinfo">
				<div class="wtitle">
					<x-icon type="ios-list-outline" size="0.6rem" style="fill:#382e2e"></x-icon>
					<span>工作信息</span>
				</div>
			</div>
			<div class="workdetails">
				<div>
					<div class="dt">
						<span>风格标签：</span>
					</div>
					<div class="dd">
						<span v-for="(item,index) in cardInfo.workJob" :key="index">{{item}}</span>
					</div>
				</div>
				<div>
					<div class="dt">
						<span>工作标签：</span>
					</div>
					<div class="dd">
						<span v-for="(item,index) in cardInfo.workType" :key="index">{{item}}</span>
					</div>
				</div>
				<div>
					<div class="dt resume">
						<span>工作履历：</span>
					</div>
					<div class="dd">
						<p class="word">{{cardInfo.work}}</p>
					</div>
				</div>
				<div>
					<div class="dt">
						<span>工作报价：</span>
					</div>
					<div class="dd">
						<span>{{cardInfo.offer}}</span>
					</div>
				</div>
				<div>
					<div class="dt self">
						<span>个人描述：</span>
					</div>
					<div class="dd">
						<p class="word">{{cardInfo.describ}}</p>
					</div>
				</div>
			</div>
		</div>
		<!-- 封面相册 -->
		<div class="album-wrap">
			<div class="albuminfo">
				<div class="atitle">
					<x-icon type="ios-folder-outline" size="0.6rem" style="fill:#382e2e"></x-icon>
					<span>封面相册</span>
				</div>
				<div class="albumtips">
					<span>左右滑动看更多</span>
				</div>
			</div>
			<swiper :options="swiperOption" id="albumSwiper">
				<!-- 幻灯内容 -->
				<swiper-slide v-for="(item, index) in albums" :key="index">
					<a href="javascript:;" @click="previewImages(index)">
						<img src='http://www.qingmeng168.com/model-spring-lm/Files/work/0ge9deurx2914y0.jpg'>
					</a>
				</swiper-slide>
			</swiper>
		</div>
		<!--模卡作品-->
		<div class="product" v-if="pictures.length!==0">
			<div class="proinfo">
				<div class="ptitle">
					<x-icon type="ios-photos-outline" size="0.6rem" style="fill:#382e2e"></x-icon>
					<span>我的模卡</span>
				</div>
			</div>
			<div class="picbox">
				<ul>
					<li v-for="(item,index) in pictures" :key="index"><img v-lazy="`http://www.qingmeng168.com${item.picture}`" alt=""></li>
				</ul>
			</div>
		</div>
		<!-- 更多名片 -->
		<div class="more-card">
			<router-link to="/Card">
				<div class="wrapbox">
					<img src="./img/morenotify2.png">
					<span>查看更多</span>
				</div>
			</router-link>
		</div>
		<preview-image :imagesSet="albums" :slideToIndex="swiperIndex" v-if="showPreviewImages"></preview-image>
	</div>
</template>
<script>
import qs from 'qs'
import previewImage from '../../common/previewImages/previewImages'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import {
	Group,
	XHeader,
	XTextarea,
	ToastPlugin
} from 'vux'
export default {
	components: {
		Group,
		XHeader,
		XTextarea,
		previewImage
	},
	data() {
		return {
			wid: '',
			report: '',
			like: '',
			collect: '',
			userImg: '',
			username: '',
			cardInfo: {},
			albums:[],
			swiperIndex:0,
			pictures: [],
			leavemsg: '',
			showPreviewImages: false, //预览图
			//轮播图配置
			swiperOption: {
				// 所有配置均为可选（同Swiper配置）
				// NotNextTick is a component's own property, and if notNextTick is set to true, the component will not instantiate the swiper through NextTick, which means you can get the swiper object the first time (if you need to use the get swiper object to do what Things, then this property must be true)
				// notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象（假如你需要使用获取swiper对象来做什么事，那么这个属性一定要是true）
				notNextTick: true,
				//          autoplay: 3000,
				direction: 'horizontal',
				slidesPerView: 2,
				spaceBetween: 20,
				setWrapperSize: true,
				autoHeight: true,
				observeParents: true
				// if you need use plugins in the swiper, you can config in here like this
				// 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
				//          debugger: true
				// swiper callbacks
				// swiper的各种回调函数也可以出现在这个对象中，和swiper官方一样
			}
		}
	},
	computed: {
		collectTips() {
			return this.collect === '未收藏' || this.collect === '取消收藏' ? '收藏名片' : '取消收藏'
		}
	},
	methods: {
		getCardInfo() {
			this.$http.post('/model/Work/WorkXX', qs.stringify({
				id: this.id
			})).then(res => {
				console.log(res)
				let card = res.data
				card.work.workJob = card.work.workJob.split(' / ').slice(0, -1)
				card.work.workType = card.work.workType.split(' / ').slice(0, -1)
				card.workpicture.map(item => {
					item.type == 1 ? this.albums.push(item) : this.pictures.push(item)
					console.log(this.albums)
				})
				this.report = card.Reports
				this.like = card.like
				this.collect = card.modelMo
				this.cardInfo = card.work
				this.userImg = card.model.hurl
				this.username = card.model.name
			})
		},
		previewImages(index) {
			this.swiperIndex = index
			this.showPreviewImages = true
			history.pushState(null,null,location.href)
		}
	},
	created() {
		this.id = this.$route.params.id
		this.getCardInfo()
	}
};

</script>
<style lang="less">
.card-detail {
	.card-banner {
		position: relative;
		width: 100%;
		padding-bottom: 2.4rem;
		background-color: #fff;
		border-bottom: 0.0267rem solid #ddd;
		.banner {
			height: 4.5067rem;
			width: 100%;
			img {
				display: block;
				width: 100%;
			}
		}
		.header {
			position: absolute;
			top: 67%;
			left: 50%;
			transform: translate(-50%, -50%);
			z-index: 3;
			.headerimg {
				display: flex;
				justify-content: center;
				align-items: center;
				flex-direction: column;
				img {
					width: 1.7333333333333334rem;
					height: 1.7333333333333334rem;
					border-radius: 50%;
				}
				.nickname {
					width: 100%;
					font-size: 0.3733rem;
					text-align: center;
					margin-top: 0.10666666666666667rem;
					color: #fe3076;
				}
			}
		}
		.todobox {
			display: flex;
			justify-content: flex-end;
			position: absolute;
			top: 0.32rem;
			right: 0;
			.like,
			.report,
			.seen {
				display: flex;
				align-items: center;
				height: 0.6667rem;
				margin-right: 0.6666666666666666rem;
				span {
					font-size: 0.37333333333333335rem;
					margin-left: 0.18666666666666668rem;
					color: #fff;
				}
			}
			.seen {
				margin-right: 0.33rem;
			}
			.icon-default {
				fill: #eee;
			}
		}
	}
	.person-wrap {
		background-color: #fff;
		margin-bottom: 0.26666666666666666rem;
		.personinfo {
			display: flex;
			height: 1.3333333333333333rem;
			align-items: center;
			border-bottom: 0.0267rem solid #eee;
			.ptitle {
				display: flex;
				height: 1.3333333333333333rem;
				align-items: center;
				border-bottom: 0.0267rem solid #382e2e;
				margin-left: 0.5066666666666667rem;
				img {
					display: block;
					width: 0.4533333333333333rem;
				}
				span {
					margin-left: 0.29333333333333333rem;
					color: #382e2e;
					font-size: 0.4266666666666667rem;
					font-weight: 700;
				}
			}
		}
		.baseinfo {
			display: flex;
			justify-content: center;
			align-items: flex-end;
			height: 1.0666666666666667rem;
			font-size: 0.4266666666666667rem;
			font-weight: 600;
			color: #382e2e;
			span {
				margin: 0 0.21333333333333335rem;
			}
		}
		.baseinfobox {
			.wrapbox {
				margin-top: 0.4266666666666667rem;
				padding-bottom: 0.4rem;
				display: flex;
				justify-content: center;
				.items {
					width: 2.1066666666666665rem;
					img {
						display: block;
						width: 1.1466666666666667rem;
						height: 1.1466666666666667rem;
						margin: 0 auto;
					}
					p {
						text-align: center;
						margin-top: 0.32rem;
						font-size: 0.4rem;
						color: #909090;
					}
				}
			}
		}
	}
	.work-wrap {
		background-color: #fff;
		margin-bottom: 0.26666666666666666rem;
		.workinfo {
			display: flex;
			height: 1.3333333333333333rem;
			align-items: center;
			border-bottom: 0.0267rem solid #ddd;
			.wtitle {
				display: flex;
				align-items: center;
				height: 1.3333333333333333rem;
				margin-left: 0.5066666666666667rem;
				border-bottom: 0.0267rem solid #382e2e;
				img {
					display: block;
					width: 0.4533333333333333rem;
				}
				span {
					font-size: 0.4266666666666667rem;
					font-weight: 700;
					margin-left: 0.29333333333333333rem;
					color: #382e2e;
				}
			}
		}
		.workdetails {
			margin: 0 0.5066666666666667rem 0 1.2533333333333334rem;
			padding: 0.18666666666666668rem 0;
			>div {
				display: flex;
				justify-content: flex-start;
				width: 100%;
				line-height: 0.7466666666666667rem;
				.dt {
					flex: 0 0 auto;
					display: flex;
					align-items: center;
					span {
						font-size: 0.4rem !important;
					}
				}
				.dd {
					flex: 1;
					display: flex;
					justify-content: flex-start;
					flex-wrap: wrap; //margin-right: 0.5333333333333333rem;
					span {
						margin-right: 0.4266666666666667rem;
						color: #909090;
						font-size: 0.4rem !important;
					}
					span:last-child {
						margin: 0;
					}
				}
				.dt.resume,
				.dt.self {
					align-self: flex-start;
				}
				p.word {
					width: 6.24rem;
					color: #909090;
					font-size: 0.4rem !important;
					display: -webkit-box;
					-webkit-box-orient: vertical;
					-webkit-line-clamp: 5;
					overflow: hidden;
				}
			}
		}
	}
	.album-wrap {
		background-color: #fff;
		padding-bottom: 0.26666666666666666rem;
		margin-bottom: 0.26666666666666666rem;
		.albuminfo {
			display: flex;
			height: 1.3333333333333333rem;
			align-items: center;
			border-bottom: 0.0267rem solid #ddd;
			margin-bottom: 0.26666666666666666rem;
			.atitle {
				display: flex;
				align-items: center;
				height: 1.3333333333333333rem;
				border-bottom: 0.0267rem solid #382e2e;
				margin-left: 0.5066666666666667rem;
				img {
					display: block;
					width: 0.4533333333333333rem;
				}
				span {
					font-size: 0.4266666666666667rem;
					font-weight: 700;
					margin-left: 0.29333333333333333rem;
					color: #382e2e;
				}
			}
		}
	}
	.product {
		background-color: #fff;
		margin-bottom: 0.26666666666666666rem;
		.proinfo {
			display: flex;
			height: 1.3333333333333333rem;
			justify-content: space-between;
			align-items: center;
			border-bottom: 0.0267rem solid #ddd;
			margin-bottom: 0.26666666666666666rem;
			.ptitle {
				display: flex;
				align-items: center;
				height: 1.3333333333333333rem;
				margin-left: 0.5066666666666667rem;
				border-bottom: 0.0267rem solid #382e2e;
				img {
					display: block;
					width: 0.4533333333333333rem;
				}
				span {
					font-size: 0.4266666666666667rem;
					font-weight: 700;
					margin-left: 0.29333333333333333rem;
					color: #382e2e;
				}
			}
			.downcard {
				display: flex;
				justify-content: flex-end;
				align-items: center;
				height: 1.3333333333333333rem;
				margin-right: 0.5333333333333333rem;
				img {
					width: 0.49333333333333335rem;
					height: 0.49333333333333335rem;
					;
				}
				span {
					color: #5863a7;
					font-size: 0.4266666666666667rem;
				}
			}
		}
		.picbox {
			ul {
				display: flex;
				justify-content: center;
				flex-wrap: wrap;
				li {
					width: 100%;
					height: auto;
					margin: 0 0.4266666666666667rem 0.4rem 0.4266666666666667rem;
					img {
						display: block;
						width: 100%;
						height: 100%;
					}
				}
				li:last-child {
					margin-bottom: 0.3466666666666667rem;
				}
			}
		}
		.nopicture {
			display: none;
			width: 100%;
			p {
				color: #909090;
				font-size: 0.4rem !important;
				padding-left: 1.28rem;
				padding-bottom: 0.4rem;
			}
		}
	}
	.more-card {
		background-color: #fff;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 1.3333333333333333rem;
		margin-bottom: 3.066666666666667rem;
		a {
			.wrapbox {
				display: flex;
				justify-content: center;
				align-items: center;
				img {
					display: block;
					height: 0.4533333333333333rem;
					width: 0.4533333333333333rem;
				}
				span {
					margin-left: 0.13333333333333333rem;
					font-size: 0.3733rem;
					color: #ff2f77;
				}
			}
		}
	} // .handlebars {
	//   width: 8.5333rem;
	//   position: fixed;
	//   bottom: 0.4rem;
	//   left: 50%;
	//   transform: translateX(-50%);
	//   z-index: 9;
	//   .handle-wrap {
	//     position: relative;
	//     display: flex;
	//     justify-content: center;
	//     height: 1.1733333333333333rem;
	//     background: #ff5050;
	//     border-radius: 1.0667rem;
	//     a {
	//       display: flex;
	//       justify-content: center;
	//       align-items: center;
	//       position: relative;
	//       z-index: 8;
	//       &>div {
	//         display: flex;
	//         justify-content: center;
	//         align-items: center;
	//         height: 0.8533333333333334rem;
	//         width: 100%;
	//         img {
	//           display: block;
	//           width: 0.5866666666666667rem;
	//           height: 0.5866666666666667rem;
	//         }
	//         p {
	//           font-size: 0.32rem;
	//           color: #fff;
	//           text-align: center;
	//         }
	//       }
	//     }
	//     a:nth-child(1) {
	//       position: relative;
	//       justify-content: flex-start;
	//       width: 2.1866666666666665rem;
	//       div {
	//         position: relative;
	//         border-right: 0.02666666666666667rem solid #fff;
	//         width: 2.2133333333333334rem;
	//         z-index: 7;
	//         p {
	//           width: 1.0666666666666667rem;
	//           margin-left: 0.18666666666666668rem;
	//           margin-right: 0.37333333333333335rem;
	//         }
	//       }
	//     }
	//     a:nth-child(2) {
	//       width: 2.9066666666666667rem;
	//       div {
	//         align-items: flex-end;
	//         p {
	//           margin-bottom: 0.09333333333333334rem;
	//         }
	//       }
	//     }
	//     a:nth-child(3) {
	//       width: 2.1866666666666665rem;
	//       div {
	//         position: relative;
	//         width: 2.2133333333333334rem;
	//         border-left: 0.02666666666666667rem solid #fff;
	//         z-index: 7;
	//         img {
	//           margin-left: 0.37333333333333335rem;
	//         }
	//         p {
	//           width: 1.0666666666666667rem;
	//           margin-left: 0.16rem;
	//         }
	//       }
	//     }
	//     .circle {
	//       position: absolute;
	//       top: -0.5866666666666667rem;
	//       left: 50%;
	//       height: 1.1733333333333333rem;
	//       width: 1.1733333333333333rem;
	//       transform: translateX(-50%);
	//       display: flex;
	//       justify-content: center;
	//       align-items: center;
	//       border-radius: 50%;
	//       background-color: #ff5050;
	//       img {
	//         display: block;
	//         width: 0.8266666666666667rem;
	//         height: 0.8266666666666667rem;
	//       }
	//     }
	//   }
	// }
	// .leavemsglayer {
	//   position: fixed;
	//   top: 0;
	//   left: 0;
	//   bottom: 0;
	//   width: 100%;
	//   background: rgba(0, 0, 0, 0.5);
	//   z-index: 10;
	//   .wrapbox {
	//     position: absolute;
	//     top: 40%;
	//     left: 50%;
	//     transform: translate(-50%, -50%);
	//     width: 90%;
	//     background: #fff;
	//     border-radius: 0.16rem;
	//     .contentbox {
	//       .weui-cells__title {
	//         margin-top: 0.77em;
	//         margin-bottom: 0.3em;
	//         padding-left: 0.4rem !important;
	//         padding-right: 0.4rem !important;
	//         color: #000;
	//         font-size: 0.4267rem !important;
	//       }
	//       .weui-cells {
	//         font-size: 0.4rem !important;
	//         color: #382e2e !important;
	//         margin-top: 0 !important;
	//         .weui-cell {
	//           padding: 0.4135rem 0.4267rem !important;
	//         }
	//         .weui-icon {
	//           padding-left: 0.1333rem !important;
	//         }
	//         .weui-icon-clear {
	//           font-size: 0.3733rem !important;
	//         }
	//       }
	//     }
	//     .desbtn {
	//       height: 1.3333333333333333rem;
	//       background-color: #ff2f77;
	//       display: flex;
	//       justify-content: center;
	//       align-items: center;
	//       border-radius: 0 0 0.16rem 0.16rem;
	//       span {
	//         width: 100%;
	//         height: 100%;
	//         color: #fff;
	//         font-size: 0.4533333333333333rem;
	//         display: flex;
	//         justify-content: center;
	//         align-items: center;
	//       }
	//       span.cancle {
	//         background-color: #e0e0e0;
	//         border-radius: 0 0 0 0.16rem;
	//       }
	//       span.confirm {
	//         background-color: #fe3076;
	//         border-radius: 0 0 0.16rem 0;
	//       }
	//     }
	//   }
	// }
}
</style>
