<template>
  <div class="contentwrap">
    <div class="headwrap">
      <h4>选择风格标签</h4>
      <slot></slot>
    </div>
    <ul class="popupcontent">
      <li v-for="(item,index) in selections" :key="index"
          :class="[popupline,{current:checkActive(index)}]"
          @click="toggleSelection(index)">
        <span>{{item.type}}</span>
      </li>
    </ul>
  </div>
</template>
<script>  
  import _ from 'lodash'
  export default {
      props:['selections'],
      data () {
          return {
              nowIndex:[0],
              popupline:'popupline'
          }
      },
      methods: {
          toggleSelection (index) {
              if (this.nowIndex.indexOf(index)=== -1){
                  this.nowIndex.push(index)
              }else {
                  this.nowIndex = _.remove(this.nowIndex,(idx) => {
                      return idx !== index
                  })
              }
              let objArr = _.map(this.nowIndex,(idx) => {
                  return this.selections[idx].type
              })
              this.$emit('on-change',objArr)
          },
          checkActive (index) {
              return this.nowIndex.indexOf(index) !== -1
          }
      }
  }

</script>
<style lang="less" scoped>
  .contentwrap {
    width: 100%;
    background: #fff;
    border-radius: 0.16rem;
    .headwrap {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      height: 1.4133rem;
      background-color: #f6f6f6;
      border-radius: 0.16rem;
      h4 {
        color: #382e2e;
        font-size: 0.4533rem;
        margin-left: 0.3467rem;
      }
      div {
        display: flex;
        position: relative;
        align-items: center;
        height: 1.4133rem;
        width: 1.4133rem;
        color: #5863a7;
        font-size: 0.4533rem;
      }
    }
    .popupcontent {
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      padding: 0.2933rem 0 0 0.2933rem;
      .popupline {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 2.3rem;
        height: 1.1466666666666667rem;
        border-radius: 0.1333rem;
        margin-bottom: 0.2933rem;
        margin-right: 0.2667rem;
        background-color: #f0f0f0;
        span {
          font-size: 0.4rem;
          color: #333333;
        }
      }
      .popupline.current {
        background-color: #ff9e02;
        span {
          color: #fff;
        }
      }
    }
  }

</style>
