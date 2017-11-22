<template>
	<div class="messageLeave" ref="scroll">
		<x-header>我的消息</x-header>
		<!-- 消息列表 -->
		<div class="msgwrap">
			<ul class="messagecontent">
				<li v-for="(item,index) in Recording" :key="index">
					<div class="left" v-if="currentUser !== item.user">
						<div class="time">
							<span>{{item.SendTime}}</span>
						</div>
						<div class="info-wrap">
							<div class="head-img">
								<img :src="item.hurl">
							</div>
							<div class="info-content">
								<div class="nickname">{{item.name}}</div>
								<div class="news">
									<p>{{item.content}}</p>
								</div>
							</div>
						</div>
					</div>
					<div class="right" v-else-if="currentUser === item.user">
						<div class="time">
							<span>{{item.SendTime}}</span>
						</div>
						<div class="info-wrap">
							<div class="info-content">
								<div class="nickname">{{item.name}}</div>
								<div class="news">
									<p>{{item.content}}</p>
								</div>
							</div>
							<div class="head-img">
								<img :src="item.hurl">
							</div>
						</div>
					</div>
				</li>
			</ul>
		</div>
		<!-- 下方发送框 -->
		<div class="send-wrap">
			<input type="text" v-model="content">
			<div class="button" @click="sendMessage()">发送</div>
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
			cid: '',
			currentUser: '',
			Recording: [],
			content: ''
		}
	},
	created() {
		this.cid = this.$route.params.cid
		this.getConversation()
	},
	methods: {
		//获取历史消息
		getConversation() {
			console.log(this.cid)
			this.$http.post('/model/Model/WDetails', qs.stringify({
				id: this.cid,
				type: 3
			})).then(res => {
				console.log(res)
				this.currentUser = res.data.CurrentUser
				this.Recording = res.data.Recording
			})
		},
		//发送留言消息
		sendMessage() {
			console.log(this.content)
			this.$http.post('/model/Model/Reply', qs.stringify({
				content: this.content,
				cid: this.cid
			})).then(res => {
				if (res.data.result === 'success') {
					this.content = ''
					this.getConversation()
				}
			})
		}
	}
}

</script>
<style lang="less">
.messageLeave {
	.msgwrap {
		margin-top: 0.1867rem;
		.messagecontent {
			margin-bottom: 1.5rem;
			.left {
				margin-top: 0.3733rem;
				.time {
					display: flex;
					justify-content: center;
					height: 0.5067rem;
					span {
						width: 3.6267rem;
						height: 0.5067rem;
						line-height: 0.5067rem;
						text-align: center;
						font-size: 0.32rem;
						color: #fff;
						background-color: #cdcdcd;
						border-radius: 0.0533rem;
					}
				}
				.info-wrap {
					display: flex;
					justify-content: flex-start;
					margin: 0.3733rem 0 0 0.24rem;
					.head-img {
						width: 1.0933rem;
						height: 1.0933rem;
						border-radius: 50%;
						img {
							display: block;
							height: 100%;
							width: 100%;
						}
					}
					.info-content {
						margin-left: 0.3733rem;
						.nickname {
							color: #919191;
							font-size: 0.3733rem;
							margin: 0 0 0.2667rem 0.0533rem;
						}
						.news {
							background: #fff;
							padding: 0.1867rem 0 0.1867rem 0.2133rem;
							max-width: 7.4133rem;
							border-radius: 0.16rem;
							p {
								font-size: 0.3467rem;
								line-height: 0.5867rem;
								color: #333333;
							}
						}
					}
				}
			}
			.right {
				margin-top: 0.3733rem;
				.time {
					display: flex;
					justify-content: center;
					height: 0.5067rem;
					span {
						width: 3.6267rem;
						height: 0.5067rem;
						line-height: 0.5067rem;
						text-align: center;
						font-size: 0.32rem;
						color: #fff;
						background-color: #cdcdcd;
						border-radius: 0.0533rem;
					}
				}
				.info-wrap {
					display: flex;
					justify-content: flex-end;
					margin: 0.3733rem 0.24rem 0 0;
					.head-img {
						width: 1.0933rem;
						height: 1.0933rem;
						border-radius: 50%;
						img {
							display: block;
							height: 100%;
							width: 100%;
						}
					}
					.info-content {
						margin-right: 0.3733rem;
						.nickname {
							color: #919191;
							font-size: 0.3733rem;
							margin: 0 0 0.2667rem 0.0533rem;
							text-align: right;
						}
						.news {
							background: #ff9c9a;
							padding: 0.1867rem 0 0.1867rem 0.2133rem;
							max-width: 7.4133rem;
							border-radius: 0.16rem;
							p {
								font-size: 0.3467rem;
								line-height: 0.5867rem;
								color: #333333;
							}
						}
					}
				}
			}
		}
	}

	.send-wrap {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		position: fixed;
		left: 0;
		bottom: 0;
		height: 1.36rem;
		width: 100%;
		background: #fff;
		input {
			height: 0.8rem;
			width: 72%;
			font-size: 0.3733rem;
			margin-left: 3%;
			background: #f0f0f0;
			color: #919191;
			padding-left: 0.6667rem;
			border-radius: 0.6667rem;
			outline: none;
		}
		.button {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 16%;
			height: 0.9333rem;
			font-size: 0.4267rem;
			background: #feaa00;
			color: #fff;
			margin-left: 1%;
		}
	}
}
</style>
