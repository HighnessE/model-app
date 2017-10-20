<template>
  <div id="detail">
      <x-header>我的消息<a slot="right">完成</a></x-header>
      <div class="msgListWrap">
        <ul class="messagecontent">
            <li>
                <div class="selectpart">
                    <div class="circle">
                        <x-icon type="android-checkmark-circle" size="0.8rem" class="icon-select"></x-icon>
                        <!-- <x-icon type="android-radio-button-off" size="0.4rem" class="icon-quiet"></x-icon> -->
                    </div>
                </div>
                <a class="mesdetailink" href="javascript:">
                <div class="headpart">
                     <x-icon type="thumbsup" size="1.0667rem" class="icon-thumbs"></x-icon>
                </div>
                <div class="maininfopart">
                    <div class="titleline">
                        <h4>系统消息</h4>
                    </div>
                    <div class="contentline">
                        <p>您的名片于今天被点赞一次</p>
                        <div>1</div>
                    </div>
                </div>
                </a>
            </li>
        </ul>
        <div class="nocontent">
            <div class="noconwrap">
                <div class="noconimg"><img src="../../base/img/nodata.png"></div>
                <div class="noconp"><p>暂无消息</p></div>
            </div>
        </div>
      </div>
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

.msgListWrap {
  margin-top: 0.1867rem;
}
.messagecontent {
  width: 100%;
  li {
    display: flex;
    width: 100%;
    margin-bottom: 0.1867rem;
    .selectpart {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      width: 0.9067rem;
      padding: 0.48rem 0 0.4267rem;
      background: #fff;
      .circle {
        border-radius: 50%;
        overflow: hidden;
        background: transparent;
        z-index: 10;
        .icon-select {
          fill:#f34847;
        }
        .icon-quiet {
          fill:#919191;
        }
      }
    }
    .mesdetailink {
      flex: 1;
      width: 80%;
      display: flex;
      height: 100%;
      box-sizing: border-box;
      padding: 0.48rem 0rem 0.4267rem 0.32rem;
      background: #fff;
      .headpart {
        display: flex;
        align-items: center;
        width: 20%;
        max-width: 1.0933rem;
        .icon-thumbs {
          fill:#7ea2ff;
        }
        img,.icon {
          width: 100%;
          max-width: 1.0933rem;
          display: block;
          margin: 0 auto;
        }
      }
      .maininfopart {
        width: 82%;
        margin-left: 0.2667rem;
        .titleline {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          h4 {
            font-size: 0.4267rem;
            color: #382f2d;
          }
          div {
            color: #919191;
            font-size: 0.3733rem;
          }
        }
        .contentline {
          width: 100%;
          margin-top: 0.2667rem;
          p {
            display: inline-block;
            width: 85%;
            font-size: 0.3733rem;
            height: 0.48rem;
            line-height: 0.48rem;
            color: #919191;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          div {
            float: right;
            margin-top: 0;
            color: #fff;
            font-size: 0.3733rem;
            background: #f34847;
            text-align: center;
            width: 0.56rem;
            height: 0.56rem;
            border-radius: 50%;
            line-height: 0.56rem;
          }
        }
      }
    }
  }
}

.nocontent {
  display: none;
  position: absolute;
  top: 1.12rem;
  left: 0;
  bottom: 0;
  width: 100%;
  .noconwrap {
    position: absolute;
    top: 44%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
    height: 5.3333rem;
    .noconimg {
      height: 3.5733rem;
      width: 3.5733rem;
      margin: 0 auto;
      img {
        width: 100%;
      }
    }
    .noconp {
      margin-top: 0.2667rem;
      a,p {
        font-size: 0.3733rem;
        line-height: 0.64rem;
        text-align: center;
      }
      p {
        color: #919191;
      }
      a {
        color: #fe3076;
      }
    }
  }
}

.handlebar {
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  height: 1.2267rem;
  width: 100%;
  background: #fff;
  z-index: 13;
  .minor {
    display: flex;
    align-items: center;
    .checkbox {
      margin-left: 0.1067rem;
    }
    .icon-select {
      fill:#f34847;
    }
    .icon-quiet {
      fill:#919191;
    }
    span {
      font-size: 0.4267rem;
      color: #313038;
      margin-left: 0.2667rem;
    }
  }
  .major {
    height: 1.2267rem;
    .delete {
      width: 2.56rem;
      color: #fff;
      font-size: 0.4267rem;
      line-height: 1.2267rem;
      text-align: center;
      background: #fe3076;
    }
  }
}
</style>
