<template>
 <div id="contact">
    <x-header>我的消息<a slot="right"><x-icon type="ios-home-outline" size="0.6rem" class="icon-home"></x-icon></a></x-header>  
    <div class="contactus">
        <img src="./img/contactus.jpg" >
    </div>
 </div>
</template>
<script>
import { XHeader} from 'vux'
export default {
   components: {
    XHeader
  }
}
</script>
<style lang="less">
.contactus {
  width: 100%;
  img {
    width: 100%;
    display: block;
  }
}
</style>
