<template>
  <div>
    <x-address title="所在地区：" v-model="value" :list="addressData" class="x-address" :placeholder="localAddr?localAddr:'请选择地区'"  hide-district>
    </x-address>
  </div>
</template>

<script>
import _ from 'lodash'
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
      this.$emit('on-change',value2name(newVal, ChinaAddressV4Data));
    }
  }
}
</script>

<style lang="less">

</style>
