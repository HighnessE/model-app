<template>
  <div class="report">
    <h4>举报理由</h4>
    <textarea name="" id="reportbox" rows="5" placeholder="请输入您想要举报的理由"></textarea>
    <div class="notify">请输入举报理由！</div>
    <!-- 添加图片 -->
    <div class="samplepartbox">
      <div class="addphotoline">
        <div class="titleline">
          <h4>添加图片(可增加举报通过的几率)</h4>
        </div>
      </div>
      <div class="samplelist">
        <ul class="addpicture">
          <li class="showpic">
            <img class="showpicimg" src="" alt="">
            <x-icon type="ios-close-outline" size="0.6rem" class="icon-delete"></x-icon>
          </li>
          <li class="addpicbtn">
            <img src="./addpicbtn.png" alt="">
          </li>
        </ul>
      </div>
    </div>
    <slot></slot>
  </div>
</template>
<script>  
  export default {
      data() {
          return {

          }
      }
  }

</script>
<style lang="less" scoped>
  .report {
    background: #fff;
    padding: 0.48rem 0.64rem;
    border-radius: 0.16rem;
    box-sizing: border-box;
    h4 {
      font-size: 0.4267rem;
      line-height: 0.64rem;
      color: #333;
    }
    textarea {
      margin-top: 0.2667rem;
      width: 100%;
      resize: none;
      font-size: 0.3733rem;
      color: #616161;
      line-height: 0.5333rem;
      border: 0.0267rem solid #ddd;
      padding: 0.16rem 0.2133rem;
      box-sizing: border-box;
      border-radius: 0.16rem;
    }
    .notify {
      visibility: hidden;
      height: 0.6667rem;
      color: red;
      font-size: 0.32rem;
      line-height: 0.6667rem;
    }
    .reportsubmit {
      display: block;
      width: 100%;
      text-align: center;
      padding-left: 0.2667rem;
      padding-right: 0.2667rem;
      border-radius: 0.1333rem;
      background: #fe3076;
      color: #fff;
      font-size: 0.4267rem;
      height: 1.2rem;
      line-height: 1.2rem;
      margin: 0 auto 0;
      border-radius: 0.1333rem;
    }
    .samplepartbox {
      background: #fff;
      margin-bottom: 0.2667rem;
      .addphotoline {
        display: flex;
        justify-content: space-between;
        .titleline {
          display: flex;
          align-items: center;
          height: 0.6667rem;
          img {
            display: block;
            width: 0.48rem;
            margin-right: 0.3733rem;
          }
          h4 {
            font-size: 0.4rem;
            line-height: 0.6667rem;
            color: #382f2f;
          }
        }
        .editbtn {
          font-size: 0.4rem;
          color: #4c565e;
          line-height: 0.6667rem;
          text-align: right;
          margin-right: 0.1867rem;
        }
      }
      .samplelist {
        width: 100%;
        text-align: center;
        .addpicture {
          display: flex;
          justify-content: center;
          flex-wrap:wrap;
          margin-top: 0.3733rem auto 0;
          font-size: 0;
          li {
            position: relative;
            width: 2.0533rem;
            height: 2.0533rem;
            display: inline-block;
            margin-right: 0.2133rem;
            .showpicimg {
              width: 100%;
              height: 100%;
            }
            .icon-delete {
              position: absolute;
              right: 0;
              top: 0;
              z-index: 10;
              fill:#fe3746;
            }
          }
          li:last-child {
            margin-right: 0;
          }
          .addpicbtn {
            img {
              display: block;
              width: 1.4667rem;
              margin: 0.2933rem auto;
            }
            .deletebtn {
              display: none;
            }
          }
        }
      }
    }
  }
</style>
