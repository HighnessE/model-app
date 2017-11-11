<template>
  <div class="bootstrap">
    <div class="content">
      <div class="tipbox">
        <div class="imgbox">
          <img :src="imgUrl">
        </div>
        <p class="tips">您已经制作过名片啦</p>
        <div class="check" @click="hideModal()">
          查看/修改
        </div>
      </div>
      <div class="canclebox" @click="$emit('hideJudge')">
        <span class="canclebtn">不了，取消</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props:['imgUrl'],
  methods: {
      hideModal() {
          this.$emit('hideJudge')
          this.$router.push('/myCardList')
      }
  }
}
</script>
<style lang="less">
.bootstrap {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 10;
  .content{
    position: absolute;
    left: 50%;
    bottom:0;
    transform: translateX(-50%);
    width: 100%;
    background: #fff;
    .tipbox {
      width: 100%;
      height: 4.8rem;
      position: relative;
      border-bottom: 1px solid #717171;
      .imgbox {
        position: absolute;
        top: -0.3466666666666667rem;
        left:50%;
        transform: translateX(-50%);
        width: 2.2666666666666666rem;
        height: 2.5866666666666664rem;
        img {
          display: block;
          height: 100%;
          width: 100%;
          border-radius: 0.13333333333333333rem;
        }
      }
      .tips {
        position: absolute;
        top: 2.533333333333333rem;
        left:50%;
        transform: translateX(-50%);
        font-size: 0.37333333333333335rem;
        color: #909090;
      }
      .check {
        position: absolute;
        top: 3.3866666666666667rem;
        left:50%;
        transform: translateX(-50%);
        display: flex;
        justify-content:center;
        align-items:center;
        border:1px solid #1dbb9b;
        border-radius: 1.3333rem;
        font-size: 0.37333333333333335rem;
        width:3.0933333333333333rem;
        height:0.9866666666666667rem;
        color: #1dbb9b;
      }
    }
    .canclebox {
      display: flex;
      justify-content: center;
      align-items:center;
      height:1.3333333333333333rem;
      .canclebtn {
        color:#ff8a00;
        font-size: 0.37333333333333335rem;
      }
    }
  }
}

</style>
