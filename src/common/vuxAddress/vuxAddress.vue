<template>
  <div>
    <x-address title="所在地区：" v-model="value" :list="addressData" class="x-address" :placeholder="localAddr?localAddr:''"  hide-district>
    </x-address>
  </div>
</template>

<script>
import { Group, Datetime, XAddress, ChinaAddressV4Data, Value2nameFilter as value2name} from 'vux'
export default {
  components: {
    XAddress,
    Datetime,
    Group,
  },
  props:['localAddr'],
  data() {
    return {
      value: [],
      addressData: ChinaAddressV4Data,
    }
  },
  computed: {

  },
  mounted() {

  },
  methods: {

  },
  watch: {
    value: function(newVal){
      console.log(newVal)
      console.log(value2name(newVal, ChinaAddressV4Data))
      newVal[0] = '--'
      this.value = newVal
      this.$emit('sendAddr',newVal)
    }
  }
}
</script>

<style lang="less">
.x-address {
  width: 100%;
  .vux-cell-box {
    display: flex;
    align-items: center;
    top: 0;
    width: 6.4688rem;
    height: 1.3438rem !important;
    color: #525252;
    width: 100%;
    line-height: 0.94rem;
    overflow: hidden;
    .weui-cell {
      display: flex;
      width: 100%;
      height: 100%;
      .weui-cell__hd {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        width: 2.8125rem;
        margin: 0 0 0 0.5rem;
        .weui-label {
          width: 2.3438rem;
        }
      }
      .vux-cell-primary {
        display: flex;
        align-items: center;
        width: 100%;
        .vux-popup-picker-select {
          display: flex;
        }
      }
      .weui-cell__ft {
        display: none;
      }
      .vux-popup-picker-value {
        font-size: 0.3125rem !important;
      }
    }
    &:before {
      border: 0;
    }
  }
}


.scroller-component {
  height: 5.76rem !important;
}

.scroller-mask {
  background-size: 100% 2.55rem !important;
}

.scroller-content {
  top: -0.12rem !important;
}

.scroller-item {
  font-size: 0.375rem !important;
  height: 0.66rem !important;
  line-height: 0.66rem !important;
}

.scroller-indicator {
  height: 0.66rem !important;
  top: 2.54rem !important;
  font-size: 0.4375rem !important;
}

.vux-popup-picker-header {
  height: 0.96rem!important;
  line-height: 0.96rem!important;
}

.vux-popup-picker-header-menu {
  line-height: 0.96rem!important;
  text-align: center!important;
  color: #333;
  font-size: 0.3125rem;
  background: #f6f6f6;
}

.vux-popup-picker-header-menu-right {
  background: #ea68a2;
  color: #fff;
  font-size: 0.3125rem;
}

.vux-popup-dialog {
  overflow-y: auto !important;
}
</style>
