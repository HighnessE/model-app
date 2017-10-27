<template>
  <div id="home">
    <swiper :list="baseList" :aspect-ratio="175/375"></swiper>
    <div id="selectpartment">
        <div id="addrselectbox">
          <div class="showarea">
            <v-address :localAddr="defaultAddr"></v-address>
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
    <scroller lock-x height="10.5333rem" ref="scrollerBottom" :scroll-bottom-offst="200">
      <div id="list-content">
        <ul class="content-part">
          <li>
            <a href="javascript:">
              <div class="headpart">
                <img src="http://admin.qingmeng168.com:8081/ChatRobot/IMG/Type/XhCw6Jm_1503888510246.png">
              </div>
              <div class="maininfopart">
                <div class="headline">
                  <h2 class="title">招模特5名</h2>
                  <div class="tagbox">
                    <div class="identifytag">平台推荐</div>
                    <!-- <div class="identifytag">置顶</div>
                    <div class="identifytag">满</div> -->
                  </div>
                </div>
                <div class="mainline">
                  <h2 class="price">
                    <x-icon type="social-yen" size="0.4rem" class="icon-color"></x-icon>
                    <span class="price2">120元</span>
                  </h2>
                </div>
                <div class="otherinfo">
                  <div class="person">男1人</div>
                  <div class="release">1小時前</div>
                </div>
                <div class="subline">
                  <div class="startjob">
                    <x-icon type="ios-clock-outline" size="0.4rem"></x-icon>
                    <span>1月2号开工</span>
                  </div>
                  <div class="position">
                     <x-icon type="ios-location-outline" size="0.4rem"></x-icon>
                    <span>北京市區</span>
                  </div>
                </div>
              </div>
            </a>
          </li>
        </ul>
        <load-more tip="loading"></load-more>
        <divider>我是有底线的</divider>
      </div>
    </scroller>
  </div>
</template>

<script>
import { Swiper, ChinaAddressV4Data, LoadMore ,Scroller ,Divider, XDialog} from 'vux'
import VAddress from '../../common/vuxAddress/vuxAddress'
import selectList from '../../common/selectLayer/selectLayer'
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
    selectList
  },
  data () {
    return {
      baseList : [],
      showType:false,
      showSort:false,
      typeArr:["全部"],
      sortArr:['按发布时间','按需求人数'],
      defaultAddr:[],
      type:'',
      sort:'',
      
    }
  },
  created () {
    this.initPrames()
    this.getBanner()
    this.getTypeList()
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
        console.log(bannerList)
        this.baseList = bannerList
      })
    },
    // 获取通告列表
    getNotifyList(){
      
    },
    //初始化数据
    initPrames(){
      let initData = {
        initAddr : '全国',
        initType : '全部',
        initSort : '按发布时间',
        initProvince :'',
        initCity : ''
      }
      for (let item in initData) {
        if (localStorage.getItem(item)) {
          initData[item] = localStorage.getItem(item)
        }
      }
      this.defaultAddr = initData.initAddr
      this.type = initData.initType
      this.sort = initData.initSort
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
    getInitData(){
      this.$http.post('/model/Annunciate/annunciate',qs.stringify({
        page:1,
        address:'',
        type:'',
        sort:'deadline'
      })).then((res) =>{
        console.log(res.data.page)
      })
    },
    selectPrames(attr,val){
      this[attr] = val
      console.log(this[attr])
      if(attr == 'type'){
        localStorage.setItem('initType',val)
        this.showType = false
      }else if(attr == 'sort'){
        localStorage.setItem('initSort',val)
        this.showSort = false
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
                div {
                  width: 0.4rem;
                  margin-right: 0.1867rem;
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
