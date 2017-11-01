<template>
  <div class="jump-btn-wrap">
    <div class="notifywrap">
      <div class="notifybox">
        <a @click.prevent="gotoRelease()">
          <div></div>
          <span>发布通告</span>
        </a>
        <a @click.prevent="gotoContact()">
          <div></div>
          <span>快捷通道</span>
        </a>
        <a @click.prevent="gotoStick()">
          <div></div>
          <span>置顶通告</span>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    methods: {
      gotoRelease(){
        this.$router.push('/releaseNotify')
        this.$emit('hideModal')
      },
      gotoContact(){
        this.$router.push('/contact')
        this.$emit('hideModal')
      },
      gotoStick(){
        this.$router.push('stickNotify')
        this.$emit('hideModal')
      }
    }
  }

</script>
<style lang="less">
  .notifywrap {
    .notifybox {
      display: flex;
      width: 100%;
      padding:7%;
      box-sizing: border-box;
      >a {
        position: relative;
        display: flex;
        align-items: center;
        flex: 1;
        border-radius: 50%;
        border: 0.0267rem solid #fff;
        padding: 0.1333rem;
        text-align: center;
        background: transparent;
        margin-right: 8%;
        div {
          padding-top: 100%;
          width: 100%;
          border-radius: 50%;
          background: #fe3076;
        }
        span {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          font-size: 0.3733rem;
          width: 100%;
          color: #fff;
        }
      }
      .sticknotify {
        margin-right: 0;
      }
    }
  }

</style>
