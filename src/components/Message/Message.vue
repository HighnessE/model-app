<template>
  <div id="message">
    <x-header>我的消息</x-header>
      <!-- 消息列表 -->
    <div class="msgwrap">
        <div class="systemmsg">
            <router-link to="/Message/Module/1">
                <div class="img">
                    <x-icon type="ios-cog" size="1.0667rem" style="fill:#ff9090"></x-icon>
                </div>
                <div class="content">
                    <div class="title">
                        <h4>系统消息</h4>
                    </div>
                    <div class="msg">
                        <p>系统给您推送的消息</p>
                        <span v-show="systemCount != 0">{{systemCount}}</span>
                    </div>
                </div>
            </router-link>
        </div>
        <div class="thumbsmsg">
            <router-link to="/Message/Module/2">
                <div class="img">
                    <x-icon type="thumbsup" size="1.0667rem" style="fill:#7ea2ff"></x-icon>
                </div>
                <div class="content">
                    <div class="title">
                        <h4>点赞消息</h4>
                    </div>
                    <div class="msg">
                        <p>您的被点赞消息</p>
                        <span v-show="likeCount != 0">{{likeCount}}</span>
                    </div>
                </div>
            </router-link>
        </div>
        <div class="leavemsg">
            <router-link to="/Message/Module/3">
                <div class="img">
                    <x-icon type="ios-compose" size="1.0667rem" style="fill:#f8d373"></x-icon>
                </div>
                <div class="content">
                    <div class="title">
                        <h4>私信消息</h4>
                    </div>
                    <div class="msg">
                        <p>其他用户给您的私信</p>
                        <span v-show="leaveCount != 0">{{leaveCount}}</span>
                    </div>
                </div>
            </router-link>
        </div>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
import { XHeader} from 'vux'
import qs from 'qs'
export default {
  components: {
    XHeader
  },
  data (){
    return {
      systemCount:0,
      likeCount:0,
      leaveCount:0
    }
  },
  created (){
      this.getMsgCount()
  },
  methods: {
      getMsgCount(){
          this.$http.post('/model/Model/ModelCount')
          .then((res)=>{
              console.log(res)
              this.systemCount = res.data.system
              this.likeCount = res.data.like
              this.leaveCount = res.data.news
          })
      }
  }
}
</script>
<style lang="less">
.vux-header {
    position: relative;
    padding: 0.08rem 0 !important;
    box-sizing: border-box;
    background-color: #fe3076 !important;
    .vux-header-left {
        position: absolute;
        left: 0.48rem !important;
        top: 0.3733rem !important;
        display: block;
        font-size: 0.3733rem !important;
        line-height: 0.56rem !important;
        color: #ccc;
        a {
            float: left;
            margin-right: 0.2133rem !important;
            padding-left: 0.4267rem !important;
            color: #ccc;
        }
        .left-arrow {
            position: absolute;
            width: 0.8rem !important;
            height: 0.8rem !important;
            top: -0.1333rem !important;
            left: -0.1333rem !important;
            &::before {
                content: "";
                position: absolute;
                width: 0.32rem !important;
                height: 0.32rem !important;
                border: 0.0267rem solid #ccc !important;
                border-width: 0.0267rem 0 0 0.0267rem !important;
                transform: rotate(315deg);
                top: 0.2133rem !important;
                left: 0.1867rem !important;
            }
        }
    }
    .vux-header-right {
        position: absolute;
        top: 0.3733rem !important;
        right: 0.4rem !important;
        display: block;
        font-size: 0.3733rem !important;
        line-height: 0.56rem !important;
        color: #ccc;
    }
    .vux-header-title {
        line-height: 1.0667rem !important;
        text-align: center;
        font-size: 0.48rem !important;
        font-weight: 400;
        color: #fff;
    }
}
.vux-header-title-area, .vux-header .vux-header-title {
    margin: 0 2.3467rem !important;
    height: 1.0667rem !important;
    width: auto;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
#message {
    .msgwrap {
        margin-top: 0.1867rem;
        display: flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;
        .systemmsg,.thumbsmsg,.leavemsg{
            width: 100%;
            height: 2.1333rem;
            display: flex;
            align-items:center;
            background-color: #fff;
            margin-bottom: 0.1867rem;
            a {
                display: flex;
                width:100%;
                .img {
                    display: flex;
                    align-items: center;
                    margin-left: 0.6133rem;
                    width: 1.0933rem;
                    height: 1.0933rem;
                }
                .content {
                    margin-left: 0.3733rem;
                    flex:1;
                    .title {
                        display: flex;
                        justify-content:space-between;
                        h4 {
                            font-size:0.4rem;
                            color:#31313a;
                        }
                        span {
                            margin-right: 0.6133rem;
                            align-self:flex-end;
                        }
                    }
                    .msg {
                        margin-top: 0.2133rem;
                        display: flex;
                        justify-content:space-between;
                        align-items:center;
                        p {
                            font-size: 0.3467rem;
                            height: 0.48rem;
                            line-height: 0.48rem;
                            width: 6.1333rem;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            white-space:nowrap;
                        }
                        span {
                            display: flex;
                            justify-content:center;
                            align-items:center;
                            width: 0.5333rem;
                            height: 0.5333rem;
                            font-size: 0.32rem;
                            margin-right: 0.6133rem;
                            border-radius:50%;
                            background-color: #f44848;
                            color: #fff;
                            
                        }
                    }
                }
            }
        }
    }
}
</style>
