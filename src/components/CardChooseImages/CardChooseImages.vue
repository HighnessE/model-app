<template>
	<div id="CardChooseImages">
		<!-- 头部 -->
		<x-header>选择模卡图片</x-header>

		<!-- 五图模板 -->
		<div class="five-images-template">
			<div class="picturebox">
				<div class="contentbox">
					<div class="top">
						<div class="left imgList"><img class="previewResult0" src="./imgs/five-one.jpg" /></div>
						<div class="msg-pull">
							<span id="name"></span>
							<span id="height"></span>
							<span id="weight"></span>
							<span id="bust"></span>
							<span id="waist"></span>
							<span id="hips"></span>
							<span id="shoes"></span>
						</div>
						<div class="middle">
							<div class="mbox imgList"><img class="previewResult1" src="./imgs/five-two.jpg" /></div>
							<div class="mbox imgList"><img class="previewResult2" src="./imgs/five-two.jpg" /></div>
						</div>
						<div class="last">
							<div class="rbox imgList"><img class="previewResult3" src="./imgs/five-two.jpg" /></div>
							<div class="rbox imgList"><img class="previewResult4" src="./imgs/five-two.jpg" /></div>
						</div>
					</div>
				</div>
			</div>
			<div class="operatingbox">
				<p>提示：要修改某张图片只需点击相应位置的图片即可</p>
				<button type="button" class="selectbtn">
					<div class="filter"></div>
					选择图片
					<input type="file" id="file" accept="image/*" @change="onUpload" /></button>
				<button type="button" class="confirmbtn">确认完成</button>
			</div>
			<div class="filter-wrapper" style="position:absolute;width:100%;height:100%;background: rgba(255,255,255,1);top:0;left:0;display:none">
				<p style="position:absolute;font-size: 14px;width:100%;top:50%;left:50%;transform: translate(-50%,-50%);text-align: center;">您暂未选择图片，请选择要裁剪的图片</p>
			</div>
			<!-- <img id="previewResult" /> -->
			<div class="app" id="uploadPage">
				<div class="bar">
					<a id="getFile">使用</a>
				</div>
				<div class="main container">
					<img id="image" src="" alt="">
				</div>
			</div>
		</div>

	</div>
</template>
<script>
import { XHeader } from 'vux'
export default {
	components: {
		XHeader
	},
	data() {
		return {

		}
	},
	methods: {
		onUpload(e) {
			var formData = new FormData();
			formData.append('file', e.target.files[0]);
			formData.append('type', 'test');
			console.log(formData);
			console.log(e.target.files[0]);
		}
	}
}
</script>
<style lang="less" scoped>
#CardChooseImages {
	// 五图模板
	.five-images-template {
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
		}
		.picturebox {
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
						height: 100%;
						box-sizing: border-box;
						border: 0.0313rem solid #000;
						img {
							display: block;
							width: 100%;
							height: 100%;
						}
					}
					.msg-pull {
						width: 13%;
						box-sizing: border-box;
						border: 0.0313rem solid #000;
						position: relative;
						background: url("./imgs/fivebg.jpg") no-repeat;
						background-size: 100% 100%;
						span {
							color: #fff;
							font-size: 0.25rem;
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
						height: 100%;
						display: flex;
						justify-content: center;
						flex-wrap: wrap;
						box-sizing: border-box;
						.mbox {
							width: 100%;
							height: 50%;
							box-sizing: border-box;
							border: 0.0313rem solid #000;
							img {
								width: 100%;
								height: 100%;
							}
						}
					}
					.last {
						width: 29.3%;
						height: 100%;
						box-sizing: border-box;
						.rbox {
							width: 100%;
							height: 50%;
							box-sizing: border-box;
							border: 0.0313rem solid #000;
							img {
								display: block;
								width: 100%;
								height: 100%;
							}
						}
					}
				}
			}
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
				height: 1.3125rem;
				line-height: 1.3125rem;
				position: relative;
				z-index: 999;
				display: flex;
				justify-content: flex-end;
				#getfile {
					margin-right: 0.375rem;
					height: 1.3125rem;
					font-size: 0.4375rem;
					color: #fef4e9;
				}
			}
			.main {
				position: absolute;
				top: 1.3125rem;
				bottom: 0;
				left: 0;
				right: 0;
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
