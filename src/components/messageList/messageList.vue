<template>
	<transition name="list-fade">
		<div id="msg-list">
			<x-header>我的消息
				<a slot="right" @click="showEditButton = !showEditButton">{{showEditButton?'完成':'编辑'}}</a>
			</x-header>
			<div class="msgListWrap">
				<ul class="messagecontent">
					<template v-if="Module === '1'">
						<li v-for="(item,index) in stystemMsgList" :key="index">
							<div class="selectpart" v-show="showEditButton">
								<div class="circle" @click="singleSelect(item)">
									<x-icon type="ios-checkmark-outline" size="0.7rem" style="fill:#FA0659" v-if="item.active"></x-icon>
									<x-icon type="ios-circle-outline" size="0.7rem" style="fill:#919191" v-if="!item.active"></x-icon>
								</div>
							</div>
							<router-link class="mesdetailink" :to="`/messageDetail/type/${Module}/userId/${item.id}`">
								<div class="headpart">
									<x-icon type="ios-cog" size="1.0667rem" style="fill:#ff9090"></x-icon>
								</div>
								<div class="maininfopart">
									<div class="titleline">
										<h4>系统消息</h4>
										<div>{{item.release}}</div>
									</div>
									<div class="contentline">
										<p>{{item.message}}</p>
										<div v-if="item.look == '0'">1</div>
									</div>
								</div>
							</router-link>
						</li>
					</template>
					<template v-else-if="Module === '2'">
						<li v-for="(item,index) in thumbsMsgList" :key="index">
							<div class="selectpart" v-show="showEditButton">
								<div class="circle" @click="singleSelect(item)">
									<x-icon type="ios-checkmark-outline" size="0.7rem" style="fill:#FA0659" v-if="item.active"></x-icon>
									<x-icon type="ios-circle-outline" size="0.7rem" style="fill:#919191" v-if="!item.active"></x-icon>
								</div>
							</div>
							<router-link class="mesdetailink" :to="`/messageDetail/type/${Module}/userId/${item.id}`">
								<div class="headpart">
									<img :src="item.hurl">
								</div>
								<div class="maininfopart">
									<div class="titleline">
										<h4>{{item.name}}</h4>
										<div>{{item.release}}</div>
									</div>
									<div class="contentline">
										<p>您的名片于{{item.timestamp}}被点赞了</p>
										<div v-if="item.look == 0">1</div>
									</div>
								</div>
							</router-link>
						</li>
					</template>
					<template v-else-if="Module === '3'">
						<li v-for="(item,index) in leaveMsgList" :key="index">
							<div class="selectpart" v-show="showEditButton">
								<div class="circle" @click="singleSelect(item)">
									<x-icon type="ios-checkmark-outline" size="0.7rem" style="fill:#FA0659" v-if="item.active"></x-icon>
									<x-icon type="ios-circle-outline" size="0.7rem" style="fill:#919191" v-if="!item.active"></x-icon>
								</div>
							</div>
							<router-link class="mesdetailink" :to="`/MsgLeave/userId/${item.cid}`">
								<div class="headpart">
									<img :src="item.hurl" alt="">
								</div>
								<div class="maininfopart">
									<div class="titleline">
										<h4>{{item.name}}</h4>
									</div>
									<div class="contentline">
										<p>{{item.data}}</p>
										<div v-show="item.amount != 0">{{item.amount}}</div>
									</div>
								</div>
							</router-link>
						</li>
					</template>
				</ul>
				<div class="nocontent" v-show="leaveMsgList.length == 0&&stystemMsgList.length ==0&&thumbsMsgList.length == 0">
					<div class="noconwrap">
						<div class="noconimg">
							<img src="../../base/img/nodata.png">
						</div>
						<div class="noconp">
							<p>暂无消息</p>
						</div>
					</div>
				</div>
			</div>
			<!-- 下方选择操作栏 -->
			<div class="handlebar" v-show="showEditButton">
				<div class="minor">
					<div class="checkbox" @click="allSelect()">
                        <x-icon type="ios-checkmark-outline" size="0.7rem" style="fill:#FA0659" v-if="allSelected"></x-icon>
                        <x-icon type="ios-circle-outline" size="0.7rem" style="fill:#919191" v-if="!allSelected"></x-icon>
                    </div>
                    <span>全选</span>
				</div>
				<div class="major" @click="deleteMessage()">
					<div class="delete">删除</div>
				</div>
			</div>
		</div>
	</transition>
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
			Module: '',
			showEditButton: false,
			allSelected:false,
			leaveMsgList: [],
			stystemMsgList: [],
			thumbsMsgList: []
		}
	},
	created() {
		this.JudgeModuleFrom()
	},
	methods: {
		//判断是哪个模块的消息
		JudgeModuleFrom() {
			console.log(this.$route.params)
			this.Module = this.$route.params.Module
			if (this.Module === '1') {
				this.getSystemMsgList()
			} else if (this.Module === '2') {
				this.getThumbsMsgList()
			} else {
				this.getLeaveMsgList()
			}
		},
		// 获取私信消息列表
		getLeaveMsgList() {
			this.$http.post('/model/Model/WReports', qs.stringify({
				id: this.Module
			})).then(res => {
				console.log(res)
				res.data.map(item=>{
					item.active = false
					item.release = this.formatTime(item.timestamp)
				})
				this.leaveMsgList = res.data
			})
		},
		//获取系统消息
		getSystemMsgList() {
			this.$http.post('/model/Model/WReports', qs.stringify({
				id: this.Module
			})).then(res => {
				console.log(res)
				this.stystemMsgList = res.data
			})
		},
		//获取点赞消息
		getThumbsMsgList() {
			this.$http.post('/model/Model/WReports', qs.stringify({
				id: this.Module
			})).then(res => {
				console.log(res)
				res.data.map(item=>{
					item.active = false
					item.release = this.formatTime(item.timestamp)
				})
				this.thumbsMsgList = res.data
			})
		},
		//全选
        allSelect() {
            this.allSelected = !this.allSelected
            if (this.Module == '1') {
                if (this.allSelected) {
                    this.stystemMsgList.map((item) => {
                        item.active = true
                    })
                } else {
                    this.stystemMsgList.map((item) => {
                        item.active = false
                    })
                }
            }else if(this.Module == '2') {
                if (this.allSelected) {
                    this.thumbsMsgList.map((item) => {
                        item.active = true
                    })
                } else {
                    this.thumbsMsgList.map((item) => {
                        item.active = false
                    })
                }
            }else {
				if (this.allSelected) {
                    this.leaveMsgList.map((item) => {
                        item.active = true
                    })
                } else {
                    this.leaveMsgList.map((item) => {
                        item.active = false
                    })
                }
			}
        },
        //单选
        singleSelect(item) {
            item.active = !item.active
            if (this.Module == '1') {
                let ifAllSelect = this.stystemMsgList.every((item) => {
                    return item.active === true
                })
                this.allSelected = (ifAllSelect === true) ? true : false
            }else if(this.Module == '2') {
                let ifAllSelect = this.thumbsMsgList.every((item) => {
                    return item.active === true
                })
                this.allSelected = (ifAllSelect === true) ? true : false
            }else {
				let ifAllSelect = this.leaveMsgList.every((item) => {
                    return item.active === true
                })
                this.allSelected = (ifAllSelect === true) ? true : false
			}
        },
		//点击删除选中的消息
        deleteMessage() {
            if( this.Module == '1') {
				this.deleteSystemMessage()
			}else if( this.Module == '2') {
				this.deleteThumbsMessage()
			}else {
				this.deleteLeaveMessage()
			}
        },
		//删除系统消息
		deleteSystemMessage(){
			let deleteOpt = this.stystemMsgList.filter(item => {
                return item.active == 1
            })
            if (deleteOpt.length > 0) {
                let _this = this
                this.$vux.confirm.show({
                    title: '确定删除选中消息？',
                    onConfirm() {
                        let newArr = []
                        deleteOpt.map(item => {
                            newArr.push(item.id)
                        })
                        _this.$http.post('/model/Model/WDeleteReports', qs.stringify({
                            type: _this.Module,
                            id: newArr.join(',')
                        })).then(res => {
							console.log(res)
                            if (res.data.result === 'success') {
                                _this.getSystemMsgList()
                                _this.showEditButton = false
                            }
                        })
                    }
                })
            }
		},
		//删除点赞消息
		deleteThumbsMessage(){
			let deleteOpt = this.thumbsMsgList.filter(item => {
                return item.active == 1
            })
            if (deleteOpt.length > 0) {
                let _this = this
                this.$vux.confirm.show({
                    title: '确定删除选中消息？',
                    onConfirm() {
                        let newArr = []
                        deleteOpt.map(item => {
                            newArr.push(item.id)
                        })
                        _this.$http.post('/model/Model/WDeleteReports', qs.stringify({
                            type: _this.Module,
                            id: newArr.join(',')
                        })).then(res => {
                            if (res.data.result === 'success') {
                                _this.getThumbsMsgList()
                                _this.showEditButton = false
                            }
                        })
                    }
                })
            }
		},
		//删除私信消息
		deleteLeaveMessage(){
			let deleteOpt = this.leaveMsgList.filter(item => {
                return item.active == 1
            })
            if (deleteOpt.length > 0) {
                let _this = this
                this.$vux.confirm.show({
                    title: '确定删除选中消息？',
                    onConfirm() {
                        let newArr = []
                        deleteOpt.map(item => {
                            newArr.push(item.cid)
                        })
                        _this.$http.post('/model/Model/WDeleteReports', qs.stringify({
                            type: _this.Module,
                            id: newArr.join(',')
                        })).then(res => {
							console.log(res)
                            if (res.data.result === 'success') {
                                _this.getLeaveMsgList()
                                _this.showEditButton = false
                            }
                        })
                    }
                })
            }
		},
		// 计算发布时间和用户查看时间的时间差
        formatTime(val) {
            let nowTime = new Date().getTime()
            let releaseTime = new Date(val).getTime()
            let reduceTime = (nowTime - releaseTime) / 1000
            if (reduceTime < 60) {
                return '刚刚'
            } else if (reduceTime / 60 >= 1 && reduceTime / 60 < 60) {
                return parseInt(reduceTime / 60) + '分钟前'
            } else if (reduceTime / 3600 >= 1 && reduceTime / 3600 < 24) {
                return parseInt(reduceTime / 3600) + '小时前'
            } else if (reduceTime / (3600 * 24) >= 1 && reduceTime / (3600 * 24) < 7) {
                return parseInt(reduceTime / (3600 * 24)) + '天前'
            } else if (reduceTime / (3600 * 24 * 7) >= 1 && reduceTime / (3600 * 24 * 7) < 4) {
                return parseInt(reduceTime / (3600 * 24 * 7)) + '周前'
            } else if (reduceTime / (3600 * 24 * 7 * 4) >= 1 && reduceTime / (3600 * 24 * 7 * 4) < 12) {
                return parseInt(reduceTime / (3600 * 24 * 7 * 4)) + '月前'
            } else if (reduceTime / (3600 * 24 * 7 * 4 * 12) >= 1) {
                return parseInt(reduceTime / (3600 * 24 * 7 * 4 * 12)) + '年前'
            }
        },
	}
}

</script>
<style lang="less">
#msg-list {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 100;
	background-color: #f0f0f0;
	.msgListWrap {
		margin-top: 0.1867rem;
		.messagecontent {
			width: 100%;
			li {
				display: flex;
				width: 100%;
				margin-bottom: 0.1867rem;
				.selectpart {
					display: flex;
					justify-content: flex-end;
					align-items: center;
					width: 0.9067rem;
					padding: 0.48rem 0 0.4267rem;
					background: #fff;
					.circle {
						border-radius: 50%;
						overflow: hidden;
						background: transparent;
						z-index: 10;
						.icon-select {
							fill: #f34847;
						}
						.icon-quiet {
							fill: #919191;
						}
					}
				}
				.mesdetailink {
					flex: 1;
					width: 80%;
					display: flex;
					height: 100%;
					box-sizing: border-box;
					padding: 0.48rem 0rem 0.4267rem 0.32rem;
					background: #fff;
					.headpart {
						display: flex;
						align-items: center;
						width: 20%;
						max-width: 1.0933rem;
						.icon-thumbs {
							fill: #7ea2ff;
						}
						img,
						.icon {
							width: 100%;
							max-width: 1.0933rem;
							display: block;
							margin: 0 auto;
						}
						img {
							border-radius: 50%;
						}
					}
					.maininfopart {
						width: 82%;
						margin-left: 0.2667rem;
						.titleline {
							display: flex;
							justify-content: space-between;
							align-items: flex-end;
							h4 {
								font-size: 0.4267rem;
								color: #382f2d;
							}
							div {
								color: #919191;
								font-size: 0.3733rem;
							}
						}
						.contentline {
							display: flex;
							justify-content: space-between;
							align-items: center;
							width: 100%;
							margin-top: 0.2667rem;
							p {
								width: 85%;
								font-size: 0.3733rem;
								height: 0.48rem;
								line-height: 0.48rem;
								color: #919191;
								white-space: nowrap;
								overflow: hidden;
								text-overflow: ellipsis;
							}
							div {
								color: #fff;
								font-size: 0.3733rem;
								width: 0.56rem;
								height: 0.56rem;
								line-height: 0.56rem;
								border-radius: 50%;
								background: #f34847;
								text-align: center;
							}
						}
					}
				}
			}
		}

		.nocontent {
			position: absolute;
			top: 1.12rem;
			left: 0;
			bottom: 0;
			width: 100%;
			.noconwrap {
				position: absolute;
				top: 44%;
				left: 50%;
				transform: translate(-50%, -50%);
				width: 90%;
				height: 5.3333rem;
				.noconimg {
					height: 3.5733rem;
					width: 3.5733rem;
					margin: 0 auto;
					img {
						width: 100%;
					}
				}
				.noconp {
					margin-top: 0.2667rem;
					a,
					p {
						font-size: 0.3733rem;
						line-height: 0.64rem;
						text-align: center;
					}
					p {
						color: #919191;
					}
					a {
						color: #fe3076;
					}
				}
			}
		}
	}

	.handlebar {
		position: fixed;
		bottom: 0;
		left: 0;
		display: flex;
		justify-content: space-between;
		height: 1.2267rem;
		width: 100%;
		background: #fff;
		z-index: 13;
		.minor {
			display: flex;
			align-items: center;
			.checkbox {
				margin-left: 0.1067rem;
			}
			.icon-select {
				fill: #f34847;
			}
			.icon-quiet {
				fill: #919191;
			}
			span {
				font-size: 0.4267rem;
				color: #313038;
				margin-left: 0.2667rem;
			}
		}
		.major {
			height: 1.2267rem;
			.delete {
				width: 2.56rem;
				color: #fff;
				font-size: 0.4267rem;
				line-height: 1.2267rem;
				text-align: center;
				background: #fe3076;
			}
		}
	}
}

.list-fade-enter-active,
.list-fade-leave-active {
	transition: all 0.3s;
}

.list-fade-enter,
.list-fade-leave-to {
	transform: translate3d(100%, 0, 0)
}
</style>
