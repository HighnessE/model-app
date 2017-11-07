<template>
  <div class="myRelease">
    <x-header>我的发布</x-header>
    <ul class="releasepart">
      <li v-for="(item,index) in stickNotify" :key=index>
        <div class="circle">
          <x-icon type="ios-checkmark-outline" size="0.7rem" style="fill:#FA0659" v-if="item.active"></x-icon>
          <x-icon type="ios-circle-outline" size="0.7rem" style="fill:#919191" v-if="!item.active"></x-icon>
        </div>
        <div class="enough">
          <p>满员：</p>
          <v-switch></v-switch>
        </div>
        <a class="releaselink" href="javascript:">
          <div class="headpart">
            <img alt="">
          </div>
          <div class="maininfopart">
            <div class="headline">
              <h2 class="title">{{item.theme}}</h2>
              <div class="identifytag">官方推荐</div>
              <div class="identifytag">置顶</div>
              <div class="identifytag">待置顶</div>
              <div class="identifytag"></div>
            </div>
            <div class="mainline">
              <h2 class="price">
                <span class="price1">￥</span>
                <span class="price2"></span>
              </h2>
            </div>
            <div class="otherinfo">
              <div class="person"></div>
              <div class="release"></div>
            </div>
            <div class="subline">
              <div class="startjob">
                <x-icon type="ios-clock-outline" size="0.4rem"></x-icon>
                <span></span>
              </div>
              <div class="position">
                <x-icon type="ios-location-outline" size="0.4rem"></x-icon>
                <span></span>
              </div>
            </div>
          </div>
        </a>
      </li>
    </ul>
    <div class="nocontent" v-show="stickNotify.length == 0&&normalNotify.length == 0">
      <div class="noconwrap">
        <div class="noconimg">
          <img src="../../base/img/nodata.png">
        </div>
        <div class="noconp">
          <p>暂无已发布通告，赶快去
            <router-link to="/releaseNotify">发布通告</router-link>吧</p>
        </div>
      </div>
    </div>
    <!-- 下方选择操作栏 -->
    <div class="handlebar">
      <div class="major">
        <div class="stick">置顶</div>
        <div class="delete">删除</div>
      </div>
    </div>
  </div>
</template>
<script>
import qs from 'qs' 
  import Vue from 'vue'
  import  { ConfirmPlugin,XHeader } from 'vux'
  Vue.use(ConfirmPlugin)
  import VSwitch from '../../common/switch/switch'  
  export default {
      components: {
          VSwitch,
          XHeader
      },
      data() {
          return {
              stickNotify:[{
                theme:'广东招男神'
              }],
              normalNotify:[]
          }
      }
  }

</script>
<style lang="less">
  .myRelease {
    .releasepart {
      li {
        position: relative;
        margin-bottom: 0.18666666666666668rem;
        .circle {
          position: absolute;
          top: 0.24rem;
          left: 0.10666666666666667rem;
          width: 0.8533333333333334rem;
          height: 0.8533333333333334rem;
          border-radius: 50%;
          overflow: hidden;
          background: transparent;
          z-index: 10;
          img {
            width: 100%;
            height: 100%;
            display: block;
          }
        }
        .enough {
          position: absolute;
          top: 1.3333333333333333rem;
          height: 0.5333333333333333rem;
          right: 0.4rem;
          display: flex;
          justify-content: flex-end;
          p {
            height: 0.5333333333333333rem;
            color: #929291;
            font-size: 0.37333333333333335rem;
            line-height: 0.5333333333333333rem;
          }
          .switch {
            position: relative;
            background: #fff;
            width: 1.3333333333333333rem;
            height: 0.4rem;
            border-radius: 0.32rem;
            border: 0.05333333333333334rem solid #d5d1c8;
            z-index: 9;
            .switchbtn {
              position: absolute;
              top: 0;
              left: 0;
              width: 0.6666666666666666rem;
              height: 0.4rem;
              background: #eef3f1;
              border-radius: 0.26666666666666666rem;
              border: 0.02666666666666667rem solid #919191;
              outline: none;
            }
          }
          .active {
            background: #f7a109;
          }
        }
        a {
          display: flex;
          width: 100%;
          box-sizing: border-box;
          background: #fff;
          padding: 0.4rem 0.48rem 0.4rem 0.29333333333333333rem;
          .headpart {
            flex: 0 0 auto;
            width: 2.986666666666667rem;
            height: 2.986666666666667rem;
            img {
              width: 100%;
              display: block;
            }
          }
          .maininfopart {
            flex: 1 1 auto;
            width: 0%;
            margin-left: 0.4rem;
            .headline {
              display: flex;
              align-items: center;
              justify-content: space-between;
              width: 100%;
              .title {
                font-size: 0.4266666666666667rem;
                line-height: 0.8266666666666667rem;
                color: #272c2d;
                flex: 1 1 auto;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                margin-right: 0.26666666666666666rem;
              }
              .identifytag {
                flex: 0 0 auto;
                padding: 0.10666666666666667rem 0.21333333333333335rem;
                color: #ef4644;
                border-radius: 0.13333333333333333rem;
                border: 0.02666666666666667rem solid #ef4644;
                font-size: 0.37rem;
              }
            }
            .mainline {
              margin-top: 0.16rem;
              color: #ef4445;
              .price {
                display: flex;
                align-items: flex-end;
                .price1 {
                  font-size: 0.37333333333333335rem;
                }
                .price2 {
                  font-size: 0.4266666666666667rem;
                }
              }
            }
            .otherinfo {
              display: flex;
              margin-top: 0.32rem;
              justify-content: space-between;
              .person,
              .release {
                font-size: 0.37333333333333335rem;
                color: #929291;
              }
            }
            .subline {
              display: flex;
              justify-content: space-between;
              margin-top: 0.26666666666666666rem;
              .startjob,
              .position {
                display: flex;
                div {
                  width: 0.4rem;
                  margin-right: 0.18666666666666668rem;
                  img {
                    width: 100%;
                    display: block;
                  }
                }
                span {
                  color: #929292;
                  font-size: 0.37333333333333335rem;
                }
              }
            }
          }
        }
        a:active {
          background: #ddd;
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
        height: 5.333333333333333rem;
        .noconimg {
          height: 3.5733333333333333rem;
          width: 3.5733333333333333rem;
          margin: 0 auto;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .noconp {
          margin-top: 0.26666666666666666rem;
          a,
          p {
            font-size: 0.37333333333333335rem;
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

    .handlebar {
      position: fixed;
      bottom: 0;
      left: 0;
      display: flex;
      justify-content: flex-end;
      height: 1.2266666666666666rem;
      width: 100%;
      background: #fff;
      display: none;
      z-index: 13;
      .major {
        height: 1.2266666666666666rem;
        font-size: 0;
        .stick {
          display: inline-block;
          width: 2.56rem;
          color: #fff;
          font-size: 0.4266666666666667rem;
          line-height: 1.2266666666666666rem;
          text-align: center;
          background: #fe922f;
        }
        .delete {
          display: inline-block;
          width: 2.56rem;
          color: #fff;
          font-size: 0.4266666666666667rem;
          line-height: 1.2266666666666666rem;
          text-align: center;
          background: #fe3076;
        }
      }
    }
  }

</style>
