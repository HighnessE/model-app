<template>
  <x-dialog v-model="showGoodModal" hide-on-blur>
    <!-- 优质通告提示弹窗 -->
    <div class="notifytipwrap">
      <div class="notifytip">
        <div class="infotip">
          <h4>此类为优质通告，须付费才能查看哦</h4>
          <p>（付费后可重复查看）</p>
        </div>
        <div class="handletip">
          <button>立即查看</button>
          <button>返回</button>
        </div>
      </div>
    </div>
  </x-dialog>
</template>
<script>
  import {
    XDialog
  } from 'vux'
  export default {
    components: {
      XDialog
    },
    data() {
        return {
            showGoodModal:false
        }
    }
  }

</script>
<style lang="less">
  .notifytipwrap {
    .notifytip {
      background: #fff;
      width: 90%;
      box-sizing: border-box;
      border-radius: 0.16rem;
      text-align: center;
      overflow: hidden;
      .infotip {
        padding: 0.6933rem 0.64rem 0.48rem 0.64rem; 
        h4 {
          line-height: 0.8rem;
          font-size: 0.4533rem;
          color: #333;
        }
        p {
          margin-top: 0.16rem;
          color: #919191;
          font-size: 0.3733rem;
        }
      }
      .handletip {
        width: 100%;
        display: flex;
        button {
          background: #fff;
          font-size: 0.4267rem;
          color: #333;
          text-align: center;
          line-height: 1.52rem;
          outline: none;
          border-right: 0.0267rem solid #ddd;
          border-radius: 0;
          width: 50%;
          box-sizing: border-box;
        }
        button:first-child {
          color: #365aa4;
        }
      }
    }
  }

</style>
