<template>
  <div class="notice-list">
    <ul class="collectpart">
      <li v-for="(item,index) in collectNotify" :key="index">
        <div class="circle" v-show="collectNotifyGetter" @click="singleSelect(item)">
          <x-icon type="ios-checkmark-outline" size="0.7rem" style="fill:#FA0659" v-if="item.active"></x-icon>
          <x-icon type="ios-circle-outline" size="0.7rem" style="fill:#919191" v-if="!item.active"></x-icon>
        </div>
        <a class="collectlink" href="javascript:">
          <div class="headpart">
            <img src="http://admin.qingmeng168.com:8081/ChatRobot/IMG/Type/XhCw6Jm_1503888510246.png">
          </div>
          <div class="maininfopart">
            <div class="headline">
              <h2 class="title">{{item.theme}}</h2>
              <div class="tagbox">
                <div v-if="item.official === '官方'" class="identifytag">平台推荐</div>
                <div v-show="item.enough === 0" class="identifytag">满</div>
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
        </a>
      </li>
    </ul>
    <div class="nocontent" v-show="collectNotify.length == 0 ">
      <img src="../../base/img/nodata.png">
      <p>暂无数据</p>
    </div>
    <!-- 下方选择操作栏 -->
    <div class="handlebar" v-show="collectNotifyGetter">
      <div class="minor">
        <div class="checkbox" @click="allSelect()">
          <x-icon type="ios-checkmark-outline" size="0.7rem" style="fill:#FA0659" v-if="allSelected"></x-icon>
          <x-icon type="ios-circle-outline" size="0.7rem" style="fill:#919191" v-if="!allSelected"></x-icon>
        </div>
        <span>全选</span>
      </div>
      <div class="major" @click="deleteNotify()">
        <div class="delete">删除</div>
      </div>
    </div>

  </div>
</template>
<script>
  import qs from 'qs' 
  import Vue from 'vue'
  import  { ConfirmPlugin } from 'vux'
  Vue.use(ConfirmPlugin)
  import {
    mapGetters,
    mapActions
  } from 'vuex'
  export default {
    data() {
      return {
        collectNotify: [],
        allSelected:false
      }
    },
    created() {
      this.getNotifyCollect()
    },
    computed: {
      ...mapGetters([
        "collectNotifyGetter"
      ])
    },
    methods: {
      //获取通告收藏数据
      getNotifyCollect() {
        this.$http.post('/model/Model/AnnunciateCollect')
          .then((res) => {
            console.log(res)
            res.data.map(item => {
              item.release = this.formatTime(item.deadline)
              item.active = false
            })
            this.collectNotify = res.data
          })
      },
      // 计算开工日期
      getWorkTime(val) {
        let month = val.split(' ')[0].split('-')[1]
        let day = val.split(' ')[0].split('-')[2]
        return `${month}月${day}日开工`
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
      //全选
      allSelect(){
        this.allSelected = !this.allSelected
        if(this.allSelected){
          this.collectNotify.map((item)=>{
            item.active = true
          })
        }else {
          this.collectNotify.map((item)=>{
            item.active = false
          })
        }
        
      },
      //单选
      singleSelect(item){
        item.active = !item.active
        let ifAllSelect = this.collectNotify.every((item)=>{
          return item.active === true
        })
        this.allSelected = (ifAllSelect === true)?true:false
      },
      //点击删除
      deleteNotify(){
        let deleteOpt = this.collectNotify.filter(item=>{
          return item.active == 1
        })
        if(deleteOpt.length > 0) {
          let _this = this
          this.$vux.confirm.show({
            title:'确定删除选中通告？',
            onConfirm () {
              let newArr = []
               deleteOpt.map(item=>{
                 newArr.push(item.vid)
               })
              _this.$http.post('/model/Model/DelectCollect',qs.stringify({
                 type:'notify',
                 vid: newArr.join(',')
              })).then(res=> {
                if(res.data.result === 'success'){
                  _this.getNotifyCollect()
                }
              })
            }
          })
        }
      }
    }
  }

</script>

<style lang="less">
  // .vux-alert {
  //   .vux-x-dialog {
  //     .weui-dialog {
  //       .weui-dialog__hd{
  //         .weui-dialog__title {
  //           font-size: 0.48rem !important;
  //         }
  //       }
  //       .weui-dialog__bd {
  //           padding: 0 1.6em 0.8em;
  //           min-height: 1.0667rem !important;
  //           font-size: 0.4rem !important;
  //       }
  //       .weui-dialog__ft {
  //         line-height: 1.28rem !important;
  //         font-size: 0.48rem !important;
  //       }
  //     }
  //   }
  // }
  .vux-x-dialog {
    .weui-dialog {
      .weui-dialog__hd {
        .weui-dialog__title {
          font-size: 0.48rem !important;
        }
      }
      .weui-dialog__bd {
          padding: 0 1.6em 0.8em;
          min-height: 1.0667rem !important;
          font-size: 0.4rem !important;
      }
        .weui-dialog__ft {
          line-height: 1.28rem !important;
          font-size: 0.48rem !important;
      }
    }
  }
  .notice-list {
    .collectpart {
      li {
        position: relative;
        margin-bottom: 0.187rem;
        .circle {
          position: absolute;
          top: 0.02rem;
          left: 0.02rem;
          border-radius: 50%;
          overflow: hidden;
          background: transparent;
          z-index: 10;
        }
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
                align-items: flex-end;
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
              .person,
              .release {
                font-size: 0.373rem;
                color: #929291;
              }
            }
            .subline {
              display: flex;
              justify-content: space-between;
              margin-top: 0.267rem;
              .startjob,
              .position {
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
    .nocontent {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      p {
        font-size: 0.3733rem;
        color: #919191;
        margin-top: 0.2667rem;
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

</style>
