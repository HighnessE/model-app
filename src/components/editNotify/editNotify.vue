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
						<span>{{work_type}}</span>
						<x-icon type="chevron-right" size="0.4rem" class="icon-home"></x-icon>
					</div>
				</div>
			</div>
			<!-- 工作主题 -->
			<group class="onepx">
				<x-textarea title="工作主题" :max="25" v-model="theme" placeholder="简单说下~" :required="true" autosize></x-textarea>
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
				<x-input title="详细地址" type="text" v-model="workPlace" :should-toast-error=false text-align="right" :required='true'></x-input>
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
							<v-switch title=""></v-switch>
						</div>
					</div>
				</div>
				<div class="requesttypewrap">
					<div class="requesttype">
						<div class="inputcount">
							<input type="number" placeholder="输入人数" min="1" max="999" v-model="number">
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
						<select name="" id="units" v-model="units" v-show="priceType!=='面议'">
							<option>元/人</option>
							<option>元/人/天</option>
							<option>元/人/时</option>
							<option>元/人/件</option>
						</select>
						<input class="inputprice" type="number" placeholder="点击输入价格" v-model="price" v-show="priceType!=='面议'">
					</div>
				</div>
			</div>
			<!-- 详细说明 -->
			<group>
				<x-textarea title="详细说明" :max="140" v-model="theme" placeholder="细致地介绍一下~" autosize></x-textarea>
			</group>
			<!-- 联系方式 -->
			<div class="contactinfowrapbox">
				<div class="contactinfobox">
					<div class="titleline">
						<h4><b class="required">*</b>联系方式</h4>
					</div>
					<div class="inputcontactinfobox">
						<select class="contactinfotype" v-model="contactInfoType">
							<option value="weixin">微信</option>
							<option value="iphone">手机</option>
							<option value="email">邮箱</option>
							<option value="qq">qq</option>
						</select>
						<input type="text" class="inputcontactinfo" name="contactinfo" rows="4" placeholder="请输入联系方式" v-model="inputContactInfo">
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
			<div class="aftersubmitwrap" v-if="false">
				<div class="aftersubmit">
					<div class="aftercontent">
						<h4>首次发布请留下您的联系方式</h4>
						<p>留下您的联系方式，审核通过更快速，还可以加入内部群，找模特更省心！</p>
						<div class="inputwxbox">
							<label for="inputwx">您的微信：</label>
							<div>
								<input type="text" id="inputwx" placeholder="请输入您的微信号">
							</div>
						</div>
						<div class="inputphonebox">
							<label for="inputphone">手机号码：</label>
							<div>
								<input type="text" id="inputphone" placeholder="请输入您的手机号">
							</div>
						</div>
					</div>
					<div class="afterbtn">确定</div>
				</div>
			</div>
			<x-dialog v-model="showType" hide-on-blur>
				<select-list :arrList="typeArr" @on-change="selectPrames('work_type',$event)"></select-list>
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
			showType: false,
			work_type: '',
			albums: [],   //相册
			typeArr: [],
			theme: '',    //工作主题
			height: '',
			weight: '',
			defaultPlaceholder:'',//地址默认提示
			address:'', 
			workPlace:'', // 详细地址
			sex:'女',
			priceType:'价格', //报价类型
			units:'元/人',  //单位
			number:'', // 需要人数
			price:'', // 价格
			contactInfoType:'weixin',
			inputContactInfo:'',//联系方式
			ifInterview:'',
			startTime: '',
			endTime: ''
		};
	},
	watch:{
		units(){
			console.log(this.units)
		}
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
		getAddr(val){
			this.address = val
		},
		//点击确认提交
		submitForm(){
			this.$http.post('/model/AddParticulars/Annunciate',qs.stringify({
				worktype:'',
				worktheme:'',
				starttime:'',
				endtime:'',
				
			})).then(res=>{

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

</style>
