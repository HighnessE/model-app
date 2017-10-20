<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>  
    <Bottom v-if="$route.path == '/Home'|$route.path == '/Center'|$route.path == '/Card'"></Bottom>
  </div>
</template>

<script>
import Bottom from './common/bottom/bottom'
export default {
  name: 'app',
  components: {
    Bottom
  }
}
</script>

<style lang="less">
// @import '~vux/src/styles/reset.less';
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
