<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>  
    <x-dialog v-model="showJump" hide-on-blur>
      <v-jump @hideModal="hideJump"></v-jump>
    </x-dialog>
    <judgeCard v-show ="showJudge" :imgUrl="imgUrl" @hideJudge="hideModal"></judgeCard>
    <Bottom v-if="$route.path == '/Home'|$route.path == '/Center'|$route.path == '/Card'" @openSelectLayer="openJump" @judgeCard="judgeCard"></Bottom>
  </div>
</template>

<script>
import Bottom from './common/bottom/bottom'
import judgeCard from './common/judgeCard/judgeCard'
import VJump from './common/jump/jump'
import { XDialog } from 'vux'
export default {
  name: 'app',
  components: {
    Bottom,
    VJump,
    XDialog,
    judgeCard
  },
  data(){
    return {
      showJump : false,
      showJudge : false,
      imgUrl:''
    }
  },
  methods: {
    openJump(){
      this.showJump = true
    },
    judgeCard(){
      //这里调用判断接口
      this.showJudge = true
    },
    hideModal() {
      this.showJudge = false
    },
    hideJump() {
      this.showJump = false
    }
  }
}
</script>

<style lang="less">
// @import '~vux/src/styles/reset.less';
.weui-dialog {
  background-color:transparent !important;
}
.fade-enter {
  opacity:0;
}
.fade-leave{
  opacity:1;
}
.fade-enter-active{
  transition:opacity .3s;
}
.fade-leave-active{
  opacity:0;
  transition:opacity .3s;
}
body {
  background-color: #f0f0f0;
}
</style>
