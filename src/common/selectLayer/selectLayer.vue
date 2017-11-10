<template>
    <ul class="popup-content">
        <li class="popup-item" v-for="(item,index) in arrList" :key='index' @click="selectItem(index)">
            <p>{{item}}</p>
        </li>
    </ul>
</template>
<script>
export default {
  props:['arrList'],
  data (){
      return {

      }
  },
  methods:{
      selectItem(index){
          let nowVal = this.arrList[index]
          this.$emit('on-change',nowVal)
      }
  }
}
</script>
<style lang="less">
.popup-content {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    background: #fff;
    padding: 0.29333333333333333rem 0 0 0.29333333333333333rem;
    .popup-item {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 2.3rem;
      height: 1.1466666666666667rem;
      border-radius:0.13333333333333333rem;
      margin-bottom: 0.29333333333333333rem;
      margin-right: 0.26666666666666666rem;
      background: #5FC1A8;
      > p {
        font-size: 0.4rem;
        color: #333333;
      }
    }
}
</style>
