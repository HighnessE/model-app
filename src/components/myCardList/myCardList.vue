<template>
	<div id="card-list">
		<x-header>我的名片</x-header>
		<div id="cardlist">
			<ul class="cardlist">
				<li v-for="(item,index) in cardArray" :key="index">
					<div class="handle">
						<div class="delete" @click="delCard(item,index)">
							<x-icon type="ios-trash-outline" size="0.5rem"></x-icon>
							<span>删除</span>
						</div>
						<div class="edit" @click="editCard(item)">
							<x-icon type="ios-compose-outline" size="0.5rem"></x-icon>
							<span>修改</span>
						</div>
						<div class="stick" @click="stickCard(item)">
							<x-icon type="social-yen-outline" size="0.4rem"></x-icon>
							<span>置顶</span>
						</div>
					</div>
					<router-link :to="`/myCardDetail/${item.id}`" class="cardlink">
						<div class="imgbox">
							<img :src="item.picture" alt="">
						</div>
						<div class="infobox">
							<div class="status">
								<span v-show="item.exist == 0">待审核</span>
							</div>
							<div class="baseinfo">
								<span>{{item.name}}</span>
								<span>{{item.city}}</span>
								<span>23岁</span>
							</div>
							<div class="viewbox">
								<div class="seen">
									<x-icon type="eye" size="0.45rem" style="fill:#919191"></x-icon>
									<span>{{item.examine}}</span>
								</div>
								<div class="like">
									<x-icon type="heart" size="0.38rem" style="fill:#919191"></x-icon>
									<span>{{item.attention}}</span>
								</div>
							</div>
						</div>
					</router-link>
				</li>
			</ul>
		</div>
		<div class="sticktips" v-show="cardArray.length == 0">
			<div class="content">
				<p>小主，创建模特名片即可进驻美约人才库，更多工作主动找上门！还可以一键转发给朋友，推广自己的名片哦！</p>
			</div>
			<div class="create">
				<router-link to="/releaseCard">太好了，马上创建</router-link>
			</div>
		</div>
	</div>
</template>
<script>
import qs from 'qs'
import {
	XHeader
} from 'vux'
export default {
	components: {
		XHeader
	},
	data() {
		return {
			cardArray:[]
		}
	},
	created() {
		this.getMycard()
	},
	methods: {
		getMycard() {
			this.$http.post('/model/Work/Wgrouping')
				.then((res) => {
					this.cardArray = res.data
					console.log(this.cardArray)
				})
		},
		delCard(item, index) {
			this.$vux.confirm.show({
				title: '确定删除此名片吗？',
				onConfirm() {
					this.$http.post('/model/Work/WDelete', qs.stringify({
						id: item.id
					})).then(res => {
						console.log(res)
						if (res.data.result === 'success') {
							this.cardArray.splice(index, 1)
							console.log(this.cardArray)
							this.getMycard()
						}
					})
				}
			})

		},
		editCard(item) {

		},
		stickCard(item) {
			// this.$router.push('/stickNotify')
			this.$vux.toast.text('暂未开放哦~', 'middle')
		}
	}
}

</script>
<style lang="less" scoped>
#card-list {
	height: 100%;
	width: 100%;
	#cardlist {
		.cardlist {
			li {
				position: relative;
				.handle {
					display: flex;
					justify-content: flex-start;
					position: absolute;
					top: 2.8rem;
					left: 3.65rem;
					z-index: 5;
					.delete,
					.edit,
					.stick {
						display: flex;
						justify-content: flex-start;
						align-items: center;
						height: 0.8rem;
						margin-right: 0.55rem;
						span {
							font-size: 0.3466666666666667rem;
							margin-left: 0.13333333333333333rem;
							color: #3f4853;
						}
					}
				}
				.cardlink {
					height: 3.7066666666666666rem;
					background-color: #fff;
					display: flex;
					justify-content: flex-start;
					align-items: center;
					margin-bottom: 0.26666666666666666rem;
					.imgbox {
						display: flex;
						justify-content: center;
						width: 2.9066666666666667rem;
						height: 3.3333333333333335rem;
						margin-left: 0.4rem;
						img {
							height: 100%;
						}
					}
					.infobox {
						height: 3.3333333333333335rem;
						margin-left: 0.4266666666666667rem;
						.status {
							height: 0.9866666666666667rem;
							height: 0.9867rem;
							width: 6.24rem;
							display: flex;
							justify-content: flex-end;
							span {
								font-size: 0.4rem;
								color: #ff2f76;
								margin: 0.16rem 0.4rem 0 0;
							}
						}
						.baseinfo {
							display: flex;
							justify-content: flex-start;
							span {
								margin-right: 0.4rem;
								font-size: 0.4266666666666667rem;
								color: #2c2a2a;
							}
						}
						.viewbox {
							display: flex;
							justify-content: flex-start;
							margin-top: 0.4533333333333333rem;
							.seen {
								display: flex;
								justify-content: flex-start;
								align-items: center;
								span {
									font-size: 0.37333333333333335rem;
									margin-left: 0.16rem;
									color: #909090;
								}
							}
							.like {
								display: flex;
								justify-content: flex-start;
								align-items: center;
								margin-left: 0.6666666666666666rem;
								span {
									margin-left: 0.16rem;
									font-size: 0.37333333333333335rem;
									color: #909090;
								}
							}
						}
					}
				}
			}
		}
	}
	.sticktips {
		width: 100%;
		height: 100%;
		background-color: #fff;
		.content {
			padding: 1.92rem 0 0.8266666666666667rem;
			p {
				width: 7.386666666666667rem;
				margin: 0 auto;
				font-size: 0.3466666666666667rem;
				color: #909090;
				line-height: 0.6133333333333333rem;
			}
		}
		.create {
			display: flex;
			justify-content: center;
			align-items: center;
			a {
				font-size: 0.4266666666666667rem;
				color: #1dbb9b;
			}
		}
	}
}
</style>
