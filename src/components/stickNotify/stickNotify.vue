<template>
  <div id="stickNotify">
    <x-header></x-header>
    <ul class="levelcontent">
      <li v-for="(item,index) in stickNotifydata" :key="index" @click="gotoStick(index)" :class="{'active':nowIndex == index}">
        <div>
          <h4>
            <x-icon type="social-yen" size="0.4rem" style="fill:#cb7e11"></x-icon>
            {{item.money}}
          </h4>
          <p>{{item.se_name}}</p>
        </div>
      </li>
    </ul>
    <div class="confirmbox">
      <div class="tips">提示：若遇到置顶名额已满则需要等候</div>
      <button class="confirmsubmit">确认</button>
    </div>
  </div>
</template>
<script>
  import {
    XHeader
  } from 'vux'
  import qs from 'qs'
  export default {
      data(){
          return {
              stickNotifydata:[],
              nowIndex : 0
          }
      },
      components:{
          XHeader
      },
      created(){
          this.getStickInfo()
      },
      methods: {
          getStickInfo(){
              this.$http.post('/model/Annunciate/serve',qs.stringify({
                  type:1
              })).then((res)=>{
                  this.stickNotifydata = res.data
              })
          },
          gotoStick(index){
              this.nowIndex = index
          }
      }
  }

</script>
<style lang="less">
  #stickNotify {
    .levelcontent {
      display: flex;
      margin-top: 0.32rem;
      height: 5.2rem;
      li {
        flex: 1;
        margin: 0 0.0267rem;
        display: flex;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        div {
          text-align: center;
          h4 {
            font-size: 0.96rem;
            color: #fe3076;
            span {
              font-size: 0.4267rem;
            }
          }
          p {
            margin-top: 0.1867rem;
            font-size: 0.3733rem;
            color: #cb7e11;
          }
        }
      }
      li.active {
        border: 0.0267rem solid #fe3076;
        box-sizing: border-box;
      }
      li:nth-child(1) {
        background: url('./stickbg1.png'), linear-gradient(160deg, #fff885, #efd62b);
        background-size: 100% 100%;
        
      }
      li:nth-child(2) {
        background: url('./stickbg2.png'), linear-gradient(160deg, #ccff5e, #aae135);
        background-size: 100% 100%;
      }
      li:nth-child(3) {
        background: url('./stickbg3.png'), linear-gradient(160deg, #69fbc9, #44e5ae);
        background-size: 100% 100%;
      }
    }
    .confirmbox {
      .tips {
        font-size: 0.3733rem;
        width: 76%;
        text-align: center;
        margin: 1.4667rem auto 0;
        color: #919191;
        
      }
      .confirmsubmit {
        display: block;
        width: 76%;
        text-align: center;
        padding-left: 0.2667rem;
        padding-right: 0.2667rem;
        border-radius: 0.1333rem;
        background: #ff8b00;
        color: #fff;
        font-size: 0.4267rem;
        height: 1.2rem;
        line-height: 1.2rem;
        margin: 0.16rem auto;
        border-radius: 0.1333rem;
      }
      .confirmsubmit:active {
        background: #e98814;
      }
    }
  }

</style>
