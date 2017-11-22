<template>
	<div id="msg-detail">
		<x-header>我的消息
			<a slot="right">
				<x-icon type="ios-home-outline" size="0.6rem" class="icon-home"></x-icon>
			</a>
		</x-header>
		<div class="msg-panel">
			<div class="panelinfo">
				<div class="panelimg">
					<x-icon type="ios-cog" size="1.0667rem" class="icon1" v-if="type == '1'"></x-icon>
					<img :src="detailData.hurl" v-if="type == '2'"> 
				</div>
				<div class="panelmsg">
					<div class="titleline">
						<h4 v-if="type == '1'">系统消息</h4>
						<h4 v-else>{{detailData.name}}</h4>
						<span>{{detailData.release}}</span>
					</div>
					<div class="contentline">
						<p v-if="type == '1'">{{detailData.message}}</p>
						<p v-if="type == '2'">您的名片于{{detailData.timestamp}}被{{detailData.name}}点赞一次</p>
					</div>
				</div>
			</div>
			<div class="panelbtn">
				<button class="delbtn" @click="deleteMessage()">删除</button>
			</div>
		</div>
	</div>
</template>

<script>
import { XHeader } from 'vux'
import qs from 'qs'
export default {
	components: {
		XHeader
	},
	data() {
		return {
			id:'',
			type:'',
			detailData:{}
		}
	},
	created(){
		this.id = this.$route.params.id
		this.type = this.$route.params.type
		console.log(this.id)
		this.getMessageDetail()
	},
	methods:{
		//获取详细消息
		getMessageDetail() {
			this.$http.post('/model/Model/WDetails',qs.stringify({
				id:this.id,
				type:this.type
			})).then(res => {
				console.log(res)
				this.detailData = res.data
			})
		},
		//删除消息
		deleteMessage() {
			this.$http.post('/model/Model/WDeleteReports',qs.stringify({
				type:this.type,
				id:this.id
			})).then(res => {
				if(res.data.result == 'success') {
					this.$router.go(-1)
				}
			})
		}
	}
}
</script>
<style lang="less">
.icon-home {
	fill: #ccc;
}

.msg-panel {
	margin-top: 0.6667rem;
	padding: 0 0.5333rem 0 0.64rem;
	.panelinfo {
		display: flex;
		.panelimg {
			display: flex;
			align-items: center;
			width: 1.0933rem;
			img {
				width: 100%;
				display: block;
				border-radius: 50%;
			}
		}
		.panelmsg {
			flex: 1;
			margin-left: 0.3733rem;
			.titleline {
				display: flex;
				justify-content: space-between;
				h4 {
					font-size: 0.4267rem;
					color: #382f2d;
				}
				span {
					color: #919191;
					font-size: 0.3733rem;
				}
			}
			.contentline {
				position: relative;
				margin-top: 0.2667rem;
				background: #fff;
				padding: 0.3467rem 0.2133rem;
				border-radius: 0.16rem;
				border: 0.0267rem solid #eaeaea;
				p {
					font-size: 0.3733rem;
					color: #919191;
					line-height: 0.48rem;
				}
			}
		}
	}
	.panelbtn {
		display: flex;
		justify-content: flex-end;
		.delbtn {
			margin-top: 0.24rem;
			height: 0.6933rem;
			width: 2.1333rem;
			font-size: 0.3733rem;
			border: 0.0267rem solid #b4bbbe;
			border-radius: 0.1067rem;
			color: #919191;
			background: transparent;
			outline: none;
		}
		.delbtn:active {
			background: #eaeaea;
			outline: none;
		}
	}
}
</style>
