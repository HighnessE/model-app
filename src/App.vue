<template>
  <div id="app">
    <router-view></router-view>
    <Bottom></Bottom>
  </div>
</template>

<script>
import Bottom from './commom/Bottom/bottom'
export default {
  name: 'app',
  components: {
    Bottom
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';

body {
  background-color: #fbf9fe;
}
</style>
