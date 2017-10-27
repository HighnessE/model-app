<template>
    <ul class="popup-content">
        <li class="popup-item" v-for="(item,index) in arrList" :key='index' @click="selectItem(index)">
            <div>
                <x-icon type="ios-circle-outline" size="0.4rem"></x-icon>
            </div>
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
    background: #fff;
    // border-radius:0.16rem;
    .popup-item {
      height: 1.1733333333333333rem;
      font-size: 0.37333333333333335rem;
      color: #555555;
      display: flex;
      align-items: center;
      > div {
        width: 0.4rem;
        margin-left: 0.64rem;
      }
      > p {
        margin-left: 0.3466666666666667rem;
        font-size: 0.37333333333333335rem;
        color: #555555;
      }
      > p.active {
        color: #ef4545;
      }
    }
    .popup-item:active, .popup-item:hover {
      background: #eee;
    }
}
</style>
