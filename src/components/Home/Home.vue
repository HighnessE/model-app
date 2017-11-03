<template>
  <div id="home">
    <swiper :list="baseList" :aspect-ratio="175/375"></swiper>
    <div id="selectpartment">
        <div id="addrselectbox">
          <div class="showarea">
            <v-address :localAddr="defaultAddr" @on-change="getAddr($event)"></v-address>
            <div class="arrowbox">
              <x-icon type="ios-arrow-down" size="0.4rem"></x-icon>
            </div>
          </div>
        </div>
        <div id="typeselectbox">
          <div class="showarea" @click="showType=!showType">
            <span>{{type}}</span>
            <div class="arrowbox">
              <x-icon type="ios-arrow-down" size="0.4rem"></x-icon>
            </div>
          </div>
        </div>
        <div id="sortselectbox">
          <div class="showarea" @click="showSort=!showSort">
            <span>{{sort}}</span>
            <div class="arrowbox">
              <x-icon type="ios-arrow-down" size="0.4rem"></x-icon>
            </div>
          </div>
        </div>
    </div>
    <x-dialog v-model="showType" hide-on-blur>
      <select-list :arrList="typeArr" @on-change="selectPrames('type',$event)"></select-list>
    </x-dialog>
    <x-dialog v-model="showSort" hide-on-blur>
      <select-list :arrList="sortArr" @on-change="selectPrames('sort',$event)"></select-list>
    </x-dialog>
    <notify-tips></notify-tips>
    <scroller lock-x height="10.5333rem" @on-scroll-bottom="scrollerBottom()" ref="scrollerBottom" :scroll-bottom-offst="200">
      <div id="list-content">
        <ul class="content-part">
          <li v-if="officialNotify.length != 0" v-for="(item,index) in officialNotify" :key="index">
            <router-link :to="`/notifyDetail/${item.vid}`">
              <div class="headpart">
                <img src="http://admin.qingmeng168.com:8081/ChatRobot/IMG/Type/XhCw6Jm_1503888510246.png">
              </div>
              <div class="maininfopart">
                <div class="headline">
                  <h2 class="title">{{item.theme}}</h2>
                  <div class="tagbox">
                    <div class="identifytag">
                      <img src="./goodnotify.png" alt="">
                    </div>
                    <div v-show="item.enough"class="identifytag">满</div>
                  </div>
                </div>
                <div class="mainline">
                  <h2 class="price">
                    <x-icon type="social-yen" size="0.4rem" class="icon-color"></x-icon>
                    <span class="price2">{{item.price}}</span>
                  </h2>
                </div>
                <div class="otherinfo">
                  <div class="person">{{item.asex}}{{item.number}}人</div>
                  <div class="release">{{item.release}}</div>
                </div>
                <div class="subline">
                  <div class="startjob">
                    <x-icon type="ios-clock-outline" size="0.4rem"></x-icon>
                    <span v-html="getWorkTime(item.work_time)"></span>
                  </div>
                  <div class="position">
                     <x-icon type="ios-location-outline" size="0.4rem"></x-icon>
                    <span>{{item.site}}</span>
                  </div>
                </div>
              </div>
            </router-link>
          </li>
          <li v-if="stickNotify.length !=0" v-for="(item,index) in stickNotify" :key="index">
            <router-link :to="`/notifyDetail/${item.vid}`">
              <div class="headpart">
                <img src="http://admin.qingmeng168.com:8081/ChatRobot/IMG/Type/XhCw6Jm_1503888510246.png">
              </div>
              <div class="maininfopart">
                <div class="headline">
                  <h2 class="title">{{item.theme}}</h2>
                  <div class="tagbox">
                    <div class="identifytag">置顶</div>
                    <div v-show="item.enough"class="identifytag">满</div>
                  </div>
                </div>
                <div class="mainline">
                  <h2 class="price">
                    <x-icon type="social-yen" size="0.4rem" class="icon-color"></x-icon>
                    <span class="price2">{{item.price}}</span>
                  </h2>
                </div>
                <div class="otherinfo">
                  <div class="person">{{item.asex}}{{item.number}}人</div>
                  <div class="release">{{item.release}}</div>
                </div>
                <div class="subline">
                  <div class="startjob">
                    <x-icon type="ios-clock-outline" size="0.4rem"></x-icon>
                    <span v-html="getWorkTime(item.work_time)"></span>
                  </div>
                  <div class="position">
                     <x-icon type="ios-location-outline" size="0.4rem"></x-icon>
                    <span>{{item.site}}</span>
                  </div>
                </div>
              </div>
            </router-link>
          </li>
          <li v-for="(item,index) in normalNotify" :key="index">
            <router-link :to="`/notifyDetail/${item.vid}`">
              <div class="headpart">
                <img src="http://admin.qingmeng168.com:8081/ChatRobot/IMG/Type/XhCw6Jm_1503888510246.png">
              </div>
              <div class="maininfopart">
                <div class="headline">
                  <h2 class="title">{{item.theme}}</h2>
                  <div class="tagbox">
                    <div v-show="item.enough"class="identifytag">满</div>
                  </div>
                </div>
                <div class="mainline">
                  <h2 class="price">
                    <x-icon type="social-yen" size="0.4rem" class="icon-color"></x-icon>
                    <span class="price2">{{item.price}}</span>
                  </h2>
                </div>
                <div class="otherinfo">
                  <div class="person">{{item.asex}}{{item.number}}人</div>
                  <div class="release">{{item.release}}</div>
                </div>
                <div class="subline">
                  <div class="startjob">
                    <x-icon type="ios-clock-outline" size="0.4rem"></x-icon>
                    <span v-html="getWorkTime(item.work_time)"></span>
                  </div>
                  <div class="position">
                     <x-icon type="ios-location-outline" size="0.4rem"></x-icon>
                    <span>{{item.site}}</span>
                  </div>
                </div>
              </div>
            </router-link>
          </li>
        </ul>
        <load-more tip="loading" v-show="showLoading"></load-more>
        <divider v-show="showDivider">我是有底线的</divider>
      </div>
    </scroller>
  </div>
</template>

<script>
import { Swiper, ChinaAddressV4Data, LoadMore ,Scroller ,Divider, XDialog} from 'vux'
import VAddress from '../../common/vuxAddress/vuxAddress'
import selectList from '../../common/selectLayer/selectLayer'
import notifyTips from '../../common/goodNotify/goodNotify'
import { domainAnnu } from '../../base/common.js'
import qs from 'qs'
export default {
  components: {
    Swiper,
    VAddress,
    LoadMore,
    Scroller,
    Divider,
    XDialog,
    selectList,
    notifyTips
  },
  data () {
    return {
      baseList : [],//轮播图数据
      showType:false,
      showSort:false,
      typeArr:["全部"],
      sortArr:['按发布时间','按需求人数'],
      defaultAddr:'',
      address:'全国',
      type:'',
      sort:'',
      initParmes:{
          initAddr:'全国',
          initType:'全部',
          initSort:'按发布时间'
      },
      normalNotify:[],
      officialNotify:[],
      stickNotify:[],
      onFetching:false,
      nowPage:1,
      totalPage:1,
      showLoading:false,
      showDivider:false 
    }
  },
  created () {
    this.initPrames()
    this.getBanner()
    this.getTypeList()
    this.formatTime()
  },
  methods: {
    //获取banner图
    getBanner(){
      this.$http.get('/model/Annunciate/Banner').then((data) => {
        let res = data.data
        let bannerList = []
        res.map(function(item){
          let obj = {
            url:item.BannerURL,
            img:item.BannerPicture,
            title:'',
            id: item.ID
          }
          bannerList.push(obj)
        })
        this.baseList = bannerList
      })
    },
    // 获取通告数据
    getNotifyList(){
      let _this = this;
      this.$http.post('/model/Annunciate/annunciate',qs.stringify({
        page:1,
        address:_this.address == '全国'?'':_this.address,
        type:_this.type === '全部'? '':_this.type,
        sort:_this.sort === '按发布时间'?'deadline':'number'
      })).then((res) =>{
        res.data.page.list.map(item => {
          item.release = this.formatTime(item.deadline)
        })
        res.data.official.map(item => {
          item.release = this.formatTime(item.deadline)
        })
        res.data.stickAnnunciate.map(item => {
          item.release = this.formatTime(item.deadline)
        })
        this.normalNotify = res.data.page.list
        this.officialNotify = res.data.official
        this.stickNotify = res.data.stickAnnunciate
        this.totalPage = res.data.page.totalPage
      })
    },
    //初始化数据
    initPrames(){
      let initParmes = this.initParmes;
      for (let item in initParmes) {
        if (localStorage.getItem(item)) {
          initParmes[item] = localStorage.getItem(item)
        }
      }
      this.defaultAddr = initParmes.initAddr
      this.address = initParmes.initAddr
      this.type = initParmes.initType
      this.sort = initParmes.initSort
      this.getInitData()
    },
    //获取类型图
    getTypeList(){
      this.$http.get('/model/Annunciate/typeList')
      .then((res) => {
        let arr = res.data.map(function(item){
          return item.antype
        })
        this.typeArr = this.typeArr.concat(arr)
      })
    },
    //获取初始化数据的方法
    getInitData(){
      let _this = this;
      this.$http.post('/model/Annunciate/annunciate',qs.stringify({
        page:1,
        address:_this.initParmes.initAddr == '全国'?'':_this.initParmes.initAddr,
        type:_this.initParmes.initType === '全部'? '':_this.initParmes.initType,
        sort:_this.initParmes.initSort === '按发布时间'?'deadline':'number'
      })).then((res) =>{
        console.log(res)
        res.data.page.list.map(item => {
          item.release = this.formatTime(item.deadline)
        })
        res.data.official.map(item => {
          item.release = this.formatTime(item.deadline)
        })
        res.data.stickAnnunciate.map(item => {
          item.release = this.formatTime(item.deadline)
        })
        this.normalNotify = res.data.page.list
        this.officialNotify = res.data.official
        this.stickNotify = res.data.stickAnnunciate
        this.totalPage = res.data.page.totalPage
      })
    },
    //获取子组件中的排序值请求数据并存储到本地
    selectPrames(attr,val){
      this[attr] = val
      console.log(this[attr])
      if(attr == 'type'){
        this.getNotifyList()
        this.showType = false
        this.nowPage = 1
        this.$nextTick(() => {
          this.$refs.scrollerBottom.reset({top:0})
        })
        localStorage.setItem('initType',val)
      }else if(attr == 'sort'){
        this.getNotifyList()
        this.showSort = false
        this.nowPage = 1
        this.$nextTick(() => {
          this.$refs.scrollerBottom.reset({top:0})
        })
        localStorage.setItem('initSort',val)
      }
    },
    // 计算发布时间和用户查看时间的时间差
    formatTime(val){
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
    // 计算开工日期
    getWorkTime(val){
      let month = val.split(' ')[0].split('-')[1]
      let day = val.split(' ')[0].split('-')[2]
      return `${month}月${day}日开工`
    },
    //接收地址选择器传来的值
    getAddr(val){
      console.log(val)
      this.address = val.slice(1)
      this.nowPage = 1
      localStorage.setItem('initAddr',val.slice(1))
      this.getNotifyList()
    },
    // 下拉加载更多
    scrollerBottom(){
      let _this = this
      if (this.onFetching) {
        // do nothing
      } else {
        this.onFetching = true
        if(this.nowPage < this.totalPage){
          this.showLoading = true
          this.$http.post('/model/Annunciate/annunciate',qs.stringify({
            page:_this.nowPage++,
            address:_this.address == '全国'?'':_this.address,
            type:_this.type === '全部'? '':_this.type,
            sort:_this.sort === '按发布时间'?'deadline':'number'
          })).then((res) =>{
            res.data.page.list.map(item => {
              item.release = this.formatTime(item.deadline)
            })
            this.normalNotify = this.normalNotify.concat(res.data.page.list)
            this.totalPage = res.data.page.totalPage
            console.log(res.data.page.pageNumber)
            console.log(res.data)
            this.$nextTick(() => {
              this.$refs.scrollerBottom.reset()
            })
            this.onFetching = false
            this.showLoading = false
          })
        }else{
          this.showDivider = true 
          this.onFetching = false
        }
      }
    }
  }
}
</script>

<style lang="less">
  //覆盖vux组件样式
  .vux-slider > .vux-swiper > .vux-swiper-item > a > .vux-swiper-desc {
    font-size: 0.4267rem !important;
    padding: 0.5333rem 1.3333rem 0.32rem 0.3467rem !important;
  }
  .vux-slider > .vux-indicator > a > .vux-icon-dot, .vux-slider .vux-indicator-right > a > .vux-icon-dot {
    width: 0.16rem !important;
    height: 0.16rem !important;
    border-radius: 0.08rem !important;
  }
  .vux-slider > .vux-indicator, .vux-slider .vux-indicator-right {
    right: 0.4rem !important;
    bottom: 0.2667rem !important;
  }
  .x-address .vux-cell-box .weui-cell{
    padding: 0 !important;
    .weui-cell__hd {
      display: none !important;
    }

  } 
  .vux-divider {
    font-size: 0.3733rem !important;
  }
  .weui-loadmore {
      width: 65%;
      margin: 0.8em auto !important;
      line-height: 1.6em;
      font-size: 0.3733rem !important;
      text-align: center;
  }
  .weui-loading {
      width: 0.5333rem !important; 
      height: 0.5333rem !important;
  }
  .weui-dialog {
    position: fixed;
    z-index: 5000;
    width: 80%;
    max-width: 8rem !important;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    background-color: #FFFFFF;
    text-align: center;
    border-radius: 0.08rem !important;
    overflow: hidden;
  }
  //页面本身样式
  #selectpartment {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 1.28rem;
    background: #fff;
    border-bottom: 1px solid #717171;
    #addrselectbox,#typeselectbox,#sortselectbox {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 0.64rem;
      width: 33.3%;
      .showarea{
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 0.64rem;
        background: #fff;
        box-sizing: border-box;
        border-right: 1px solid #c7c7c7;
        span {
          line-height: 0.64rem;
          font-size: 0.373rem !important;
          color: #2c2a2a !important;
        }
        input {
          line-height: 0.64rem;
          font-size: 0.373rem;
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
          margin-left: 0.187rem;
        }
      }
    }
    #sortselectbox {
      .showarea {
        border: none;
      }
    }
    #addrselectbox {
      .showarea {
        .x-address {
          flex: 1;
        }
        .arrowbox {
          flex:  0 0 auto;
        }
      }
    }
  }
  #list-content {
    .content-part {
      li {
        margin-bottom: 0.187rem;
        a {
          display: flex;
          width: 100%;
          box-sizing: border-box;
          background: #fff;
          padding: 0.4rem 0.48rem 0.4rem 0.293rem;
          .headpart {
            flex: 0 0 auto;
            width: 2.987rem;
            height: 2.987rem;
            img {
              width: 100%;
              display: block;
            }
          }
          .maininfopart {
            flex: 1 1 auto;
            margin-left: 0.4rem;
            .headline {
              display: flex;
              justify-content: space-between;
              height: 0.827rem;
              width: 100%;
              .title {
                font-size: 0.427rem;
                line-height: 0.827rem;
                color: #272c2d;
                flex: 1 1 auto;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                margin-right: 0.267rem;
              }
              .tagbox {
                flex: 0 0 auto;
                display: flex;
                flex-direction: column;
                align-items:flex-end;
                margin-top: 0.133rem;
                .identifytag {
                  padding: 0.107rem 0.213rem;
                  color: #ef4644;
                  border-radius: 0.133rem;
                  border: 0.027rem solid #ef4644;
                  margin-bottom: 0.133rem;
                  font-size: 0.373rem;
                }
              }
            }
            .mainline {
              margin-top: 0.16rem;
              color: #ef4445;
              .price {
                display: flex;
                align-items: flex-end;
                .icon-color {
                  fill: #ef4445;
                }
                .price2 {
                  font-size: 0.427rem;
                }
              }
            }
            .otherinfo {
              display: flex;
              margin-top: 0.32rem;
              justify-content: space-between;
              .person, .release {
                font-size: 0.373rem;
                color: #929291;
              }
            }
            .subline {
              display: flex;
              justify-content: space-between;
              margin-top: 0.267rem;
              .startjob, .position {
                display: flex;
                svg {
                  margin-right: 0.125rem;
                }
                span {
                  color: #929292;
                  font-size: 0.3733rem;
                }
              }
            }
          }
        }
      }
      li:last-child {
        margin-bottom: 0;
      }
    }
  }
  
</style>
