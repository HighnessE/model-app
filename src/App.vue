<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
    <transition name="slide-down">
      <v-jump v-show="showJump" @hideModal="hideJump()"></v-jump>
    </transition>
    <transition name="slide-down">
      <v-judge v-show="showJudge" :imgUrl="imgUrl" @hideJudge="hideModal()"></v-judge>
    </transition>
    <v-bottom v-if="$route.path == '/Home'|$route.path == '/Center'|$route.path == '/Card'" @openSelectLayer="openJump()" @judgeCard="judgeCard()"></v-bottom>
  </div>
</template>

<script>
  import VBottom from './common/bottom/bottom'
  import VJudge from './common/judgeCard/judgeCard'
  import VJump from './common/jump/jump'
  import qs from 'qs'
  export default {
    name: 'app',
    components: {
      VBottom,
      VJump,
      VJudge
    },
    data() {
      return {
        showJump: false,
        showJudge: false,
        imgUrl: ''
      }
    },
    methods: {
      openJump() {
        this.showJump = true
      },
      judgeCard() {
        this.$http.post('/model/Work/workJudge')
          .then((res) => {
            if (res.data.result == '无名片') {
              this.$router.push('/releaseCard')
            } else {
              this.showJudge = true
              this.imgUrl = res.data.picture
            }
          })
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
  .fade-enter-active,
  .fade-leave-active {
    transition: all .25s;
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }

  .slide-down-enter-active,
  .slide-down-leave-active {
    transition: all .25s;
  }

  .slide-down-enter,
  .slide-down-leave-to {
    transform: translate3d(0, -100%, 0)
  }

  body {
    background-color: #f0f0f0;
  }

</style>
