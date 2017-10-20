<template>
    <div id="msg-detail">
        <x-header>我的消息<a slot="right"><x-icon type="ios-home-outline" size="0.6rem" class="icon-home"></x-icon></a></x-header>
        <div class="msg-panel">
            <div class="panelinfo">
                <div class="panelimg">
                <!-- <img src="{{model.hurl}}" alt=""> -->
                    <x-icon type="ios-cog" size="1.0667rem" class="icon1"></x-icon>
                </div>
                <div class="panelmsg">
                    <div class="titleline">
                        <h4>系统消息</h4>
                        <!-- <h4>{{model.name}}</h4> -->
                        <span>一个月前</span>
                    </div>
                    <div class="contentline">
                        <p>您的名片于2016-2-12被张学友点赞一次</p>
                        <!-- <p>{{message}}</p> -->
                    </div>
                </div>
            </div>
            <div class="panelbtn">
                <button class="delbtn">删除</button>
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
.icon-home {
    fill:#ccc;
}
.msg-panel {
  margin-top: 0.6667rem;
  padding: 0 0.5333rem 0 0.64rem;
  .panelinfo {
    display: flex;
    .panelimg {
        display: flex;
        align-items: center;
        width: 1.0933rem;
        img {
            width: 100%;
            display: block;
        }
    }
    .panelmsg {
      flex: 1;
      margin-left: 0.3733rem;
      .titleline {
        display: flex;
        justify-content: space-between;
        h4 {
          font-size: 0.4267rem;
          color: #382f2d;
        }
        span {
          color: #919191;
          font-size: 0.3733rem;
        }
      }
      .contentline {
        position: relative;
        margin-top: 0.2667rem;
        background: #fff;
        padding: 0.3467rem 0.2133rem;
        border-radius: 0.16rem;
        border: 0.0267rem solid #eaeaea;
        p {
          font-size: 0.3733rem;
          color: #919191;
          line-height: 0.48rem;
        }
      }
    }
  }
  .panelbtn {
    display: flex;
    justify-content: flex-end;
    .delbtn {
      margin-top: 0.24rem;
      height: 0.6933rem;
      width: 2.1333rem;
      font-size: 0.3733rem;
      border: 0.0267rem solid #b4bbbe;
      border-radius: 0.1067rem;
      color: #919191;
      background: transparent;
      outline: none;
    }
    .delbtn:active {
      background: #eaeaea;
      outline: none;
    }
  }
}
</style>
