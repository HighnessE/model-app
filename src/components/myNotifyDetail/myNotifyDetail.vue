<template>
  <div id="notify-detail">
    <x-header>通告详情
      <a slot="right">
        <button id="editnotify" @click="$router.push(`/editnotify/${vid}`)">修改</button>
      </a>
    </x-header>
    <div class="notify-content">
      <!-- 通告头部 -->
      <div class="notifyhead">
        <img class="notifyheadbg" src="./img/notifybg.jpg">
        <div class="header">
          <div class="headerimg">
            <img :src="notifyData.hurl">
          </div>
          <div class="nickname">{{notifyData.name}}</div>
        </div>
        <h4>{{notifyData.theme}}</h4>
      </div>
      <!-- 工作时间和地点 -->
      <div class="infopart">
        <div class="crossbar">
          <x-icon type="ios-clock-outline" size="0.5rem" class="icon-notify"></x-icon>
          <h4>工作时间：</h4>
          <p>{{notifyData.work_time}} — {{notifyData.work_finish}}</p>
        </div>
        <div class="crossbar2">
          <div>
            <x-icon type="ios-location-outline" size="0.5rem" class="icon-notify"></x-icon>
            <h4>工作地点：</h4>
          </div>
          <p>{{notifyData.workplace}} {{notifyData.information}}</p>
        </div>
      </div>
      <!-- 岗位要求 -->
      <div class="requestpart">
        <div class="crossbox">
          <div class="titleline">
            <x-icon type="person-stalker" size="0.5rem" class="icon-notify"></x-icon>
            <h4>岗位要求</h4>
          </div>
          <div class="request">
            <div>
              <span>性别：{{notifyData.asex}}</span>
              <span>人数：{{notifyData.number}}人</span>
              <span>面试：{{notifyData.interview}}</span>
            </div>
            <div>
              <span>价格：{{notifyData.price}}</span>
            </div>
          </div>
        </div>
      </div>
      <!-- 详细说明 -->
      <div class="detailpart">
        <div class="crossbox">
          <div class="titleline">
            <x-icon type="ios-search" size="0.5rem" class="icon-notify"></x-icon>
            <h4>详细说明</h4>
          </div>
          <p>{{notifyData.details}}</p>
        </div>
      </div>
      <!-- 联系方式 -->
      <div class="detailpart">
        <div class="crossbox">
          <div class="titleline">
            <x-icon type="ios-list-outline" size="0.5rem" class="icon-notify"></x-icon>
            <h4>联系方式</h4>
          </div>
          <p>{{notifyData.contactType}}&nbsp;&nbsp;{{notifyData.contactInfo}}</p>
        </div>
      </div>
      <!-- 上传的图片 -->
      <div class="samplepart">
        <div class="crossimgbox">
          <div class="titleline">
            <x-icon type="images" size="0.5rem" class="icon-notify"></x-icon>
            <h4>图片</h4>
          </div>
          <div>
            <ul>
              <li v-for="(item,index) in pictures" :key="index">
                <img :src="'http://192.168.0.113'+item.p_url" alt="">
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- 操作栏 -->
      <!--<div class="handlepart">
        <div class="crossbar">
          <div class="collectbtn" @click="commitCollect()">
            <x-icon type="ios-star" size="0.5rem" :class="collectClass"></x-icon>
            <span v-if="ifCollect == '未收藏'" :style="{'color':'#919191'}">收藏</span>
            <span v-else :style="{'color':'#fe3076'}">已收藏</span>
          </div>
          <div class="reportbtn" @click="reportNotify()">
            <x-icon type="alert-circled" size="0.5rem" :class="reportClass"></x-icon>
            <span v-if="ifReport == '未举报'" :style="{'color':'#919191'}">举报</span>
            <span v-else :style="{'color':'#fe3076'}">已举报</span>
          </div>
          <div>
            <x-icon type="eye" size="0.5rem" class="icon-notify"></x-icon>
            <span>{{notifyData.hit}}</span>
          </div>
        </div>
      </div>-->
      <!-- 跳转栏 -->
      <div class="jumppart">
        <a href="/home" class="crossjump">
          <img src="./img/morenotify2.png">
          <span>查看更多通告</span>
        </a>
      </div>
      <!-- 用户须知 -->
      <div class="infomationpart">
        <div class="crossbar">
          <p>用户须知：</p>
          <p>○ 为保证平台环境，请用户自觉遵守相关法律法规，禁止发布违法违规等内容。</p>
          <p>○ 如发现虚假单，请点击上方“举报”，平台核实后将会第一时间删除通告，情节严重者将被永久屏蔽账号。</p>
          <img src="./img/usernote.jpg" width="100%" style="margin-top:0.1333rem">
        </div>
      </div>
      <!-- 举报弹窗 -->
      <!--<x-dialog class="report-dialog" v-model="showReportDialog" hide-on-blur>
        <v-report>
          <button class="reportsubmit" @click="commitReport()">提交</button>
        </v-report>
      </x-dialog>-->
    </div>
  </div>
</template>
<script>
  import {
    XHeader,
    XDialog
  } from 'vux'
  import VReport from '../../common/report/report' 
  import qs from 'qs'
  export default {
    components: {
      XHeader,
      XDialog,
      VReport
    },
    data() {
      return {
        notifyData:{},
        showReportDialog:false,
        // ifReport:'未举报',
        // ifCollect:'未收藏',
        pictures:[],
        vid:'',
        uid:''
      }
    },
    // computed: {
    //   collectClass() {
    //     return this.ifCollect == '未收藏'?'icon-notify':'icon-success'
    //   },
    //   reportClass() {
    //     return this.ifReport == '未举报'?'icon-notify':'icon-success'
    //   }
    // },
    methods: {
      // 点击举报事件
      // reportNotify() {
      //   let reportTag = this.ifReport;
      //   if (reportTag === '未举报') {
      //     this.showReportDialog = true;
      //   }
      // },
      getNotifyData() {
        this.$http.post('/model/Annunciate/Particulars',qs.stringify({
          vid:this.vid
        }))
        .then((res) => {
          console.log(res)
          let contact = res.data.annunciate.contact
          let contactType = contact.split(':')[0] == 'weixin'?
                            '微信号': contact.split(':')[0] == 'iphone'?
                            '手机号': contact.split(':')[0] == 'email'?
                            '邮箱': contact.split(':')[0] == 'qq'?
                            'QQ号码':'用户未填写'
          let contactInfo = contact.split(':')[1]
          res.data.annunciate.contactType = contactType
          res.data.annunciate.contactInfo = contactInfo
          this.notifyData = res.data.annunciate;
          this.ifCollect = res.data.model_an;
          this.ifReport = res.data.reports;
          this.pictures = res.data.view; 
          this.uid = res.data.annunciate.uid;
        })
      },
      // 提交举报
      // commitReport() {
      //   this.showReportDialog = false
      // },
      // 提交收藏
      // commitCollect() {
      //   this.$http.post('/model/Annunciate/Collect',qs.stringify({
      //     uid:this.uid,
      //     vid:this.vid
      //   }))
      //   .then((res) => {
      //      this.ifCollect = res.data.result
      //   }).catch((res) =>{
      //     console.log(res)
          
      //   })
      // }
    },
    created(){
      this.vid = this.$route.params.vid
      this.getNotifyData()
    }
  }

</script>

<style lang="less">
  .vux-header .vux-header-right button{
      height: 0.64rem !important;
      border: 0.0267rem solid #fff !important;
      line-height: 0.64rem !important;
      padding: 0 0.2133rem !important;
      border-radius: 0.1333rem !important;
      background: 0 0 !important;
      color: #fff !important;
      font-size: 0.3733rem !important;
    }
  .notify-content {
    width: 100%;
    .notifyhead {
      position: relative;
      margin-bottom: 0.2667rem;
      padding-bottom: 0.3467rem;
      background: #fff;
      width: 100%;
      .notifyheadbg {
        width: 100%;
      }
      .header {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -70%);
        border-radius: 50%;
        .headerimg {
          width: 1.6rem;
          height: 1.6rem;
          overflow: hidden;
          display: block;
          border-radius: 50%;
          margin: 0 auto 0.1067rem;
          img {
            width: 100%;
          }
        }
        .nickname {
          font-size: 0.4rem;
          color: #ff2f76;
          text-align: center;
        }
      }
      h4 {
        margin-top: 1.2267rem;
        text-align: center;
        font-size: 0.4267rem;
        color: #382f2d;
      }
      .deadline {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 0.3733rem;
        text-align: center;
        font-size: 0.4rem;
        color: #919191;
        img {
          width: 0.3733rem;
          display: block;
          margin-right: 0.16rem;
        }
      }
    }
    .infopart {
      background: #fff;
      margin-bottom: 0.2667rem;
      .crossbar,
      .crossbar2 {
        width: 100%;
        padding: 0.48rem 0.4267rem 0.4267rem 0.56rem;
        box-sizing: border-box;
      }
    }
    .requestpart,
    .detailpart {
      background: #fff;
      margin-bottom: 0.2667rem;
      .crossbox {
        width: 100%;
        padding: 0.48rem 0.4267rem 0.48rem 0.56rem;
        box-sizing: border-box;
      }
    }
    .infopart {
      .crossbar {
        display: flex;
        align-items: center;
        border-bottom: 0.0267rem solid #eaeaea;
        svg {
          display: block;
          width: 0.48rem;
          margin-right: 0.3733rem;
        }
        h4,
        p {
          font-size: 0.4rem;
          line-height: 0.6667rem;
        }
        h4 {
          color: #382f2f;
          margin-right: 0.1333rem;
        }
        p {
          color: #919191;
        }
      }
      .crossbar2 {
        display: flex;
        align-items: flex-start;
        div {
          display: flex;
          align-items: center;
          svg {
            margin-right: 0.3733rem;
          }
          h4 {
            font-size: 0.4rem;
            line-height: 0.6667rem;
            color: #382f2f;
            margin-right: 0.1333rem;
          }
        }
        p {
          flex: 1;
          font-size: 0.4rem;
          color: #919191;
          line-height: 0.6667rem;
        }
      }
    }
    .requestpart {
      .crossbox {
        .titleline {
          display: flex;
          align-items: center;
          height: 0.6667rem;
          svg {
            margin-right: 0.3733rem;
          }
          h4 {
            font-size: 0.4rem;
            line-height: 0.6667rem;
            color: #382f2f;
          }
        }
        .request {
          margin-left: 0.8533rem;
          div {
            display: flex;
            flex-flow: row wrap;
            span {
              flex: 1;
              display: block;
              font-size: 0.4rem;
              margin-top: 0.4267rem;
              color: #919191;
            }
          }
        }
      }
    }
    .detailpart {
      .crossbox {
        .titleline {
          display: flex;
          align-items: center;
          height: 0.6667rem;
          svg {
            margin-right: 0.3733rem;
          }
          h4 {
            font-size: 0.4rem;
            line-height: 0.6667rem;
            color: #382f2f;
          }
        }
        p {
          margin-left: 0.8533rem;
          color: #919191;
          line-height: 0.6667rem;
          font-size: 0.4rem;
        }
      }
    }
    .samplepart {
      background: #fff;
      margin-bottom: 0.2667rem;
      .crossimgbox {
        padding: 0.5333rem 0.4267rem 0.2667rem 0.56rem;
        .titleline {
          display: flex;
          align-items: center;
          height: 0.6667rem;
          svg {
            margin-right: 0.3733rem;
          }
          h4 {
            font-size: 0.4rem;
            line-height: 0.6667rem;
            color: #382f2f;
          }
        }
        div {
          width: 100%;
          text-align: center;
          ul {
            display: inline-block;
            width: 6.64rem;
            margin: 0.3733rem auto 0;
            font-size: 0;
            li {
              width: 2.0533rem;
              height: 2.0533rem;
              display: inline-block;
              margin-right: 0.2133rem;
              img {
                width: 100%;
                height: 100%;
              }
            }
            li:last-child {
              margin-right: 0;
            }
          }
        }
      }
    }
    .handlepart {
      background: #fff;
      margin-bottom: 0.2667rem;
      .crossbar {
        width: 100%;
        padding: 0.48rem 0.4267rem 0.48rem 0.56rem;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        >div {
          display: flex;
          align-items: center;
          height: 0.56rem;
          background: #fff;
          margin-right: 0.9333rem;
          outline: none;
          svg {
            margin-right: 0.1333rem;
          }
          span {
            font-size: 0.4rem;
            color: #919191;
          }
        }
        >div :last-child {
          margin-right: 0.2133rem;
        }
      }
    }
    .jumppart {
      background: #fff;
      margin-bottom: 0.2667rem;
      a.crossjump {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        padding: 0.48rem 0.4267rem 0.48rem 0.56rem;
        box-sizing: border-box;
        font-size: 0.4267rem;
        background: #fff;
        color: #919191;
        img {
          width: 0.48rem;
          height: 0.48rem;
          margin-right: 0.2667rem;
        }
        span {
          color: #ff2f76;
        }
      }
      a:active {
        background: #909090;
      }
    }

    .infomationpart {
      background: #fff;
      margin-bottom: 1.0667rem;
      .crossbar {
        width: 100%;
        box-sizing: border-box;
        padding: 0.48rem 0.4267rem 0.4267rem 0.6133rem;
        p {
          color: #919191;
          font-size: 0.4rem;
          line-height: 0.6667rem;
          margin-top: 0.1333rem;
        }
      }
    }

    
    .icon-notify {
      fill: #909090;
    }
    .icon-success {
      fill: #ff2f76;
    }
  }

</style>
