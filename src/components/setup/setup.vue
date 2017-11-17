<template>
  <div id="setup">
    <x-header>设置与隐私</x-header>
    <!-- 平台规则 -->
    <div class="contentwrap">
        <div class="rule">
            <span>平台规则</span>
            <router-link to="/platformRules">
                <span>点击查看</span>
                <x-icon type="chevron-right" size="0.4rem" class="icon"></x-icon>
            </router-link>
        </div>
        <div class="notice">
            <div class="msgWrap">
                <span class="title">消息通知</span>
                <div class="switchWrap">
                    <span>私信提醒</span>
                    <v-switch @on-change="privateRemind($event)" :init="Guestbook"></v-switch>
                </div>
            </div>
            <div class="thumbsWrap">
                <div class="switchWrap">
                    <span>点赞提醒</span>
                    <v-switch @on-change="LikeRemind($event)" :init="praise"></v-switch>
                </div> 
            </div>
        </div>
    </div>
  </div>
</template>
<script>
import qs from 'qs'
import { XHeader} from 'vux'
import VSwitch from '../../common/switch/switch'
export default {
  components: {
    XHeader,
    VSwitch
  },
  data(){
      return {
          Guestbook:false,
          praise:false
      }
  },
  created(){
      this.getSystemStatus()
  },
  methods: {
    //接收私信提醒的值
    privateRemind(val){
        this.Guestbook = val
        this.$http.post('/model/Work/WorkSetting',qs.stringify({
            Guestbook:this.Guestbook === true?1:0,
            praise:this.praise === true?1:0
        })).then(res=>{
            console.log(res)
        })
        console.log(val)
    },
    //接收点赞提醒的值
    LikeRemind(val){
        this.praise = val
        this.$http.post('/model/Work/WorkSetting',qs.stringify({
            Guestbook:this.Guestbook === true?1:0,
            praise:this.praise === true?1:0
        })).then(res=>{
            console.log(res)
        })
        console.log(val)
    },
    //获取初始状态
    getSystemStatus(){
        this.$http.post('/model/Work/WorkSystem')
        .then((res) => {
            console.log(res.data)
            this.Guestbook = (res.data.Guestbook === 1)?true:false
            this.praise = (res.data.praise ===  1)?true:false
            console.log(this.Guestbook)
            console.log(this.praise)
        })
    }
  }
}
</script>
<style lang="less" scoped>
#setup {
    .contentwrap {
        width: 100%;
        .rule {
            display: flex;
            height: 1.3867rem;
            background-color: #fff;
            font-size: 0.4rem;
            padding:0 0.4533rem;
            justify-content:space-between;
            align-items:center;
            a {
                display: flex;
                justify-content:center;
                align-items:center;
                color: #909090;
                span {
                    margin-right: 0.4rem;
                }
                .icon {
                    fill:#909090;
                }
            }
        }
        .notice {
            width: 100%;
            margin-top: 0.2667rem;
            background-color: #fff;
            .msgWrap {
                display: flex;
                justify-content: space-between;
                align-items:center;
                height: 1.3867rem;
                font-size: 0.4rem;
                border-bottom: 0.0267rem solid #ccc;
                .title {
                    margin-left: 0.4533rem;
                }
                .switchWrap {
                    display: flex;
                    justify-content: flex-end;
                    align-items: center;
                    > span {
                        margin-right: 0.6rem;
                        color:#909090;
                    }
                    > div {
                        margin-right: 0.4rem;
                    }
                }

            }
            .thumbsWrap {
                display: flex;
                justify-content: flex-end;
                align-items:center;
                height: 1.3867rem;
                font-size: 0.4rem;
                .switchWrap {
                    display: flex;
                    justify-content: flex-end;
                    align-items: center;
                    > span {
                        margin-right: 0.6rem;
                        color:#909090;
                    }
                    > div {
                        margin-right: 0.4rem;
                    }
                }
            }
        }
    }
}
</style>
