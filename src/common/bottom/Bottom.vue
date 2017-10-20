<template>
  <div id="bottom">
      <div class="createbg"></div>
      <div class="wrapbox">
        <div class="wrapone">
          <router-link to="/Home">
            <img :src="$route.path == '/Home' ? imgHome.active : imgHome.quiet" >
            <span>最新通告</span>
          </router-link>
          <router-link to="/Card" >
            <img :src="$route.path == '/Card' ? imgCard.active : imgCard.quiet">
            <span>模特名片</span>
          </router-link>
        </div>
        <div class="wraptwo">
          <router-link to="/Message">
            <img :src="$route.path == '/Message' ? imgMessage.active : imgMessage.quiet">
            <span>我的消息</span>
          </router-link>
          <router-link to="/Center">
            <img :src="$route.path == '/Center' ? imgCenter.active : imgCenter.quiet">
            <span>个人中心</span>
          </router-link>
        </div>
      </div>
      <div class="releasebtn" v-if="$route.path == '/Card'" @click="judgeCard"><p>制作名片</p></div>
      <div class="releasebtn" v-else @click="releaseLayer">发布</div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      imgHome:{
        active:require("./images/1.png"),
        quiet:require("./images/1.1.png")
      },
      imgCard:{
        active:require("./images/2.png"),
        quiet:require("./images/2.1.png")
      },
      imgMessage:{
        active:require("./images/3.png"),
        quiet:require("./images/3.1.png")
      },
      imgCenter:{
        active:require("./images/4.png"),
        quiet:require("./images/4.1.png")
      }
    }
  },
  methods: {
    releaseLayer(){
      
    },
    judgeCard(){

    }
  }
}
</script>
<style lang="less" scoped>
  #bottom {
  position: fixed;
  left: 0;
  bottom:0;
  width: 100%;
  height: 1.33rem;
  .wrapbox {
    display: flex;
    justify-content:space-between;
    position:relative;
    height:100%;
    border-top:0.027rem solid #eaeaea;
    background-color: #fff;
    z-index: 3;
    .wrapone,.wraptwo {
      width: 3.73rem;
      a {
        display: flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        img {
          display: block;
          width: 0.48rem;
          height: 0.48rem;
        }
        span {
          margin-top: 0.16rem;
          font-size:0.32rem;
        }
        &.router-link-active {
          color: #ff2f76;
        }
      }
    }
    .wrapone {
      display: flex;
      justify-content:flex-start;
      a:nth-child(1) {
        width: 2.13rem;
      }
      a:nth-child(2) {
        width: 1.6rem;
      }
    }
    .wraptwo {
      display: flex;
      justify-content:flex-end;
      a:nth-child(1) {
        width: 1.6rem;
      }
      a:nth-child(2) {
        width: 2.13rem;
        img {
          width: auto;
        }
      }
    }
  }

  .releasebtn {
    display: flex;
    justify-content:center;
    align-items:center;
    flex-wrap: wrap;
    position: absolute;
    left:50%;
    bottom:0;
    height: 1.47rem;
    width: 1.47rem;
    transform: translateX(-50%);
    font-size:0.373rem;
    text-align: center;
    color: #fff;
    background-color: #fe3076;
    border-radius:50%;
    border:0.1333rem solid #fff;
    z-index: 5;
    p {
      margin-top: 0.267rem;
      text-align: center;
      width: 1.067rem;
      height: 1.067rem;
    }
  }
  .createbg {
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
    width: 1.733rem;
    height: 1.733rem;
    border: 0.027rem solid #eaeaea;
    border-radius: 50%;
    background: #fff;
    z-index: 2;
  }
}
</style>
