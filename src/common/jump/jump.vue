<template>
  <div class="notifywrap" @click="$emit('hideModal')">
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
</template>
<script>
  export default {
    methods: {
      gotoRelease() {
        this.$router.push('/releaseNotify')
        this.$emit('hideModal')
      },
      gotoContact() {
        this.$router.push('/contact')
        this.$emit('hideModal')
      },
      gotoStick() {
        this.$router.push('stickNotify')
        this.$emit('hideModal')
      }
    }
  }

</script>
<style lang="less">
  .notifywrap {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1000;
    .notifybox {
      display: flex;
      justify-content: space-between;
      position: absolute;
      left: 50%;
      bottom: 35%;
      transform: translate(-50%, -50%);
      width: 100%;
      padding: 0 7%;
      box-sizing: border-box;
      >a {
        position: relative;
        display: flex;
        align-items: center;
        width: 28%;
        border-radius: 50%;
        border: 0.0267rem solid #fff;
        padding: 0.1333rem;
        text-align: center;
        background: transparent;
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
