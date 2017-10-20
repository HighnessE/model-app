<template>
  <div id="collect">
       <x-header>我的收藏夹<a slot="right">编辑</a></x-header>
       <div class="navwrap">
            <div class="tabs">
                <router-link to="/myCollect/notifyCollect">通告收藏</router-link>
                <router-link to="/myCollect/cardCollect">名片收藏</router-link>
            </div>
        </div>
        <router-view></router-view>
        <!-- 下方选择操作栏 -->
        <div class="handlebar">
            <div class="minor">
                <div class="checkbox">
                    <x-icon type="android-radio-button-off" size="0.8rem" class="icon-quiet"></x-icon>
                </div>
                <span>全选</span>
            </div>
            <div class="major">
                <div class="delete">删除</div>
            </div>
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
.navwrap {
  height: 1.44rem;
  display: flex;
  justify-content:center;
  align-items:center;
  background-color: #fff;
  margin-bottom: 0.1867rem;
  .tabs {
    display: flex;
    justify-content:center;
    width: 5.0133rem;
    height: 0.8533rem;
    border:0.0267rem solid #ff2f77;
    border-radius:0.1333rem;
    a {
      display: flex;
      justify-content:center;
      align-items:center;
      font-size: 0.3467rem;
      width: 100%;
      color: #ff2f77;
      &.router-link-active {
        background-color: #fe3076;
        color: #fff;
        }
    }    
  }
}

</style>
