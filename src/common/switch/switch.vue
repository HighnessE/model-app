<template>
  <div :class="switchClass" @click="switchClass.active = !switchClass.active">
    <button class="switchbtn" :style="{'left':switchClass.active == true?'0.96rem':'0'}"></button>
  </div>
</template>
<script>
export default {
  data(){
      return {
          switchClass: {
              switch:true,
              active:false
          }
      }
  },  
  methods:{
      
  }
}
</script>
<style lang="less" scoped>
.switch {
    position: relative;
    background: #fff;
    width: 1.9467rem;
    height: 0.5333rem;
    border-radius: 0.32rem;
    border: 0.0533rem solid #d5d1c8;
    margin-left: 0.4533rem;
    .switchbtn {
        transition: left,0.2s;
        position: absolute;
        top: 0;
        left: 0;
        width: 0.9867rem;
        height: 0.5333rem;
        background: #eef3f1;
        border-radius: 0.2667rem;
        border: 0.0267rem solid #919191;
        outline: none;
        animation: switch-run 100ms;
    }
}
.active {
    background: #f7a109;
}
// @keyframes switch-run {
//     0%{
//         left:0;
//     }
//     100%{
//         left:0.96rem;
//     }
// }
</style>
