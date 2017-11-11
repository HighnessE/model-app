<template>
  <transition name="list-fade">
    <div id="msg-list">
      <x-header>我的消息
        <a slot="right">编辑</a>
      </x-header>
      <div class="msgListWrap">
        <ul class="messagecontent">
          <template v-if="Module === '1'">
            <li v-for="(item,index) in stystemMsgList" :key="index">
              <div class="selectpart">
                <div class="circle">
                  <x-icon type="android-checkmark-circle" size="0.8rem" class="icon-select"></x-icon>
                </div>
              </div>
              <a class="mesdetailink" href="javascript:">
                <div class="headpart">
                  <x-icon type="thumbsup" size="1.0667rem" class="icon-thumbs"></x-icon>
                </div>
                <div class="maininfopart">
                  <div class="titleline">
                    <h4>系统消息</h4>
                  </div>
                  <div class="contentline">
                    <p>您的名片于今天被点赞一次</p>
                    <div>1</div>
                  </div>
                </div>
              </a>
            </li>
          </template>
          <template v-else-if="Module === '2'">
            <li v-for="(item,index) in likeMsgList" :key="index">
              <div class="selectpart">
                <div class="circle">
                  <x-icon type="android-checkmark-circle" size="0.8rem" class="icon-select"></x-icon>
                </div>
              </div>
              <a class="mesdetailink" href="javascript:">
                <div class="headpart">
                  <x-icon type="thumbsup" size="1.0667rem" style="fill: #7ea2ff"></x-icon>
                </div>
                <div class="maininfopart">
                  <div class="titleline">
                    <h4>用户名</h4>
                    <div>发布时间</div>
                  </div>
                  <div class="contentline">
                    <p>您的名片于今天被点赞一次</p>
                    <div>1</div>
                  </div>
                </div>
              </a>
            </li>
          </template>
          <template v-else-if="Module === '3'">
            <li v-for="(item,index) in leaveMsgList" :key="index">
              <div class="selectpart" v-show="showEditButton">
                <div class="circle">
                  <x-icon type="android-checkmark-circle" size="0.8rem" class="icon-select"></x-icon>
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
        <div class="nocontent" v-show="leaveMsgList.length == 0&&stystemMsgList.length ==0&&likeMsgList.length == 0">
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
          <div class="checkbox">
            <x-icon type="android-radio-button-off" size="0.8rem" class="icon-quiet"></x-icon>
          </div>
          <span>全选</span>
        </div>
        <div class="major">
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
        showEditButton:false,
        leaveMsgList: [],
        stystemMsgList: [],
        likeMsgList: []
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
        if(this.Module === '1'){
          console.log(1)
        }else if(this.Module === '2'){
          console.log(2)
        }else {
          console.log(3)
          this.getLeaveMsgList()
        }
        // this.getLeaveMsgList()
      },
      // 获取留言消息列表
      getLeaveMsgList() {
        this.$http.post('/model/Model/WReports', qs.stringify({
            id: this.Module
          }))
          .then(res => {
            console.log(res)
            this.leaveMsgList = res.data
          })
      }
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
                width: 100%;
                margin-top: 0.2667rem;
                p {
                  display: inline-block;
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
                  float: right;
                  margin-top: 0;
                  color: #fff;
                  font-size: 0.3733rem;
                  background: #f34847;
                  text-align: center;
                  width: 0.56rem;
                  height: 0.56rem;
                  border-radius: 50%;
                  line-height: 0.56rem;
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
