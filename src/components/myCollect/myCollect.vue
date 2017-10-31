<template>
  <div id="collect">
    <x-header>我的收藏夹
      <a slot="right" @click="toggleEdit()">{{editTag === true?"完成":"编辑"}}</a>
    </x-header>
    <div class="navwrap">
      <div class="tabs">
        <router-link to="/myCollect/notifyCollect" replace>通告收藏</router-link>
        <router-link to="/myCollect/cardCollect" replace>名片收藏</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
  import {
    XHeader
  } from 'vux'
  import { mapGetters, mapActions } from 'vuex'
  export default {
    components: {
      XHeader
    },
    data(){
        return {
            editTag:false
        }
    },
    computed:{
        ...mapGetters([
            "collectNotifyGetter",
            "collectCardGetter"      
        ])
    },
    methods: {
        ...mapActions([
            "collectNotifyAction",
            "collectCardAction"
        ]),
        toggleEdit(){
            if(this.$route.path === "/myCollect/notifyCollect"){
                this.collectNotifyAction()
                this.editTag = this.collectNotifyGetter
            }else if(this.$route.path === "/myCollect/cardCollect"){
                this.collectCardAction()
                this.editTag = this.collectCardGetter
            }
        }
    }
  }

</script>
<style lang="less">
  .navwrap {
    height: 1.44rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    margin-bottom: 0.1867rem;
    .tabs {
      display: flex;
      justify-content: center;
      width: 5.0133rem;
      height: 0.8533rem;
      border: 0.0267rem solid #ff2f77;
      border-radius: 0.1333rem;
      a {
        display: flex;
        justify-content: center;
        align-items: center;
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
