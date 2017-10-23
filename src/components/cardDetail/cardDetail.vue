<template>
  <div class="card-detail">
      <x-header>名片详情<a slot="right"><x-icon type="ios-home-outline" size="0.6rem" class="icon-home"></x-icon></a></x-header>
    <!-- 头部banner -->
    <div class="card-banner">
      <div class="banner">
        <img src="./img/modelbanner.jpg">
      </div>
      <div class="header">
        <div class="headerimg">
          <img src="./img/modelbanner.jpg">
          <div class="nickname">highnesse</div>
        </div>
      </div>
      <div class="todobox">
        <div class="like">
          <x-icon type="heart" size="0.5rem" class="icon-default"></x-icon>
          <span>点赞</span>
        </div>
        <div class="report">
          <x-icon type="alert-circled" size="0.5rem" class="icon-default"></x-icon>
          <span>举报</span>
        </div>
      </div>
    </div>
    <!-- 个人资料 -->
    <div class="person-wrap">
      <div class="personinfo">
        <div class="ptitle">
          <img src="./img/request.png">
          <span>个人资料</span>
        </div>
      </div>
      <div class="baseinfo">
        <span>小妮子</span>
        <span>23岁</span>
        <span>广州</span>
      </div>
      <div class="baseinfobox">
        <div class="wrapbox">
          <div class="items">
            <img src="./img/myheight.png" alt="">
            <p>168cm</p>
          </div>
          <div class="items">
            <img src="./img/myweight.png" alt="">
            <p>45kg</p>
          </div>
          <div class="items">
            <img src="./img/mysanwei.png" alt="">
            <p>88-62-89</p>
          </div>
          <div class="items">
            <img src="./img/myfoot.png" alt="">
            <p>36码</p>
          </div>
        </div>
      </div>
    </div>
    <!-- 工作信息 -->
    <div class="work-wrap">
      <div class="workinfo">
        <div class="wtitle">
          <img src="./img/detail.png" alt="">
          <span>工作信息</span>
        </div>
      </div>
      <div class="workdetails">
        <div>
          <div class="dt">
            <span>风格标签：</span>
          </div>
          <div class="dd">
            <span>清晰</span>
            <span>清晰</span>
            <span>清晰</span>
            <span>清晰</span>
          </div>
        </div>
        <div>
          <div class="dt">
            <span>工作标签：</span>
          </div>
          <div class="dd">
            <span>哈哈</span>
            <span>清晰</span>
            <span>清晰</span>
            <span>清晰</span>
          </div>
        </div>
        <div>
          <div class="dt resume">
            <span>工作履历：</span>
          </div>
          <div class="dd">
            <p class="word">describ我是一个兵descr是一个兵descr是一个兵descr是一个兵describ我是一个兵describ我是一个兵describ我是一个兵describ我是一个兵describ我是一个兵describ我是一个兵</p>
          </div>
        </div>
        <div>
          <div class="dt">
            <span>工作报价：</span>
          </div>
          <div class="dd">
            <span>offer</span>
          </div>
        </div>
        <div>
          <div class="dt self">
            <span>个人描述：</span>
          </div>
          <div class="dd">
            <p class="word">describ我是一个兵descr是一个兵descr是一个兵descr是一个兵describ我是一个兵describ我是一个兵describ我是一个兵describ我是一个兵describ我是一个兵describ我是一个兵</p>
          </div>
        </div>
      </div>
    </div>
    <!-- 封面相册 -->
    <div class="album-wrap">
      <div class="albuminfo">
        <div class="atitle">
          <img src="./img/album.png" alt="">
          <span>封面相册</span>
        </div>
      </div>
      <!-- <div class="swiper-container" id="albumSwiper"></div> -->
    </div>
    <!-- 更多名片 -->
    <div class="more-card">
      <a href="modelcard.html">
        <div class="wrapbox">
          <img src="./img/morenotify2.png">
          <span>查看更多</span>
        </div>
      </a>
    </div>
    <!-- 操作按钮 -->
    <div class="handlebars">
      <div class="handle-wrap">
        <a href="javascript:;">
          <div>
            <img src="./img/ask.png">
            <p>联系TA</p>
          </div>
        </a>
        <a href="javascript:;">
          <div>
            <p>收藏名片</p>
          </div>
        </a>
        <a href="javascript:;">
          <div>
            <img src="./img/donate.png">
            <p>打赏TA</p>
          </div>
        </a>
        <div class="circle">
          <img src="./img/collect_footer.png">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { XHeader } from 'vux'
  export default {
      components: {
          XHeader
      }
  };

</script>
<style lang="less" scoped>
  .card-detail {
    .card-banner {
      position: relative;
      width: 100%;
      padding-bottom: 2.4rem;
      background-color: #fff;
      border-bottom: 0.0267rem solid #ddd;
      .banner {
        height: 5.306666666666667rem;
        width: 100%;
        overflow: hidden;
        img {
          display: block;
          width: 100%;
          height: 100%;
        }
      }
      .header {
        position: absolute;
        top: 72%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 3;
        .headerimg {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          img {
            width: 1.7333333333333334rem;
            height: 1.7333333333333334rem;
            border-radius: 50%;
          }
          .nickname {
            width: 100%;
            font-size: 0.3733rem;
            text-align: center;
            margin-top: 0.10666666666666667rem;
            color: #fe3076;
          }
        }
      }
      .todobox {
        display: flex;
        justify-content: flex-end;
        position: absolute;
        top: 0.32rem;
        right: 0;
        .like {
          display: flex;
          align-items: center;
          height: 0.6667rem;
          margin-right: 0.6666666666666666rem;
          span {
            font-size: 0.37333333333333335rem;
            margin-left: 0.18666666666666668rem;
            color: #fff;
          }
        }
        .report {
          display: flex;
          align-items: center;
          height: 0.6667rem;
          margin-right: 0.37333333333333335rem;
          span {
            font-size: 0.37333333333333335rem;
            margin-left: 0.18666666666666668rem;
            color: #fff;
          }
        }
        .icon-default {
            fill:#eee;
        }
      }
    }
    .person-wrap {
      background-color: #fff;
      margin-bottom: 0.26666666666666666rem;
      .personinfo {
        display: flex;
        height: 1.3333333333333333rem;
        align-items: center;
        border-bottom: 0.0267rem solid #eee;
        .ptitle {
          display: flex;
          height: 1.3333333333333333rem;
          align-items: center;
          border-bottom: 0.0267rem solid #382e2e;
          margin-left: 0.5066666666666667rem;
          img {
            display: block;
            width: 0.4533333333333333rem;
          }
          span {
            margin-left: 0.29333333333333333rem;
            color: #382e2e;
            font-size: 0.4266666666666667rem;
            font-weight: 700;
          }
        }
      }
      .baseinfo {
        display: flex;
        justify-content: center;
        align-items: flex-end;
        height: 1.0666666666666667rem;
        font-size: 0.4266666666666667rem;
        font-weight: 600;
        color: #382e2e;
        span {
          margin: 0 0.21333333333333335rem;
        }
      }
      .baseinfobox {
        .wrapbox {
          margin-top: 0.4266666666666667rem;
          padding-bottom: 0.4rem;
          display: flex;
          justify-content: center;
          .items {
            width: 2.1066666666666665rem;
            img {
              display: block;
              width: 1.1466666666666667rem;
              height: 1.1466666666666667rem;
              margin: 0 auto;
            }
            p {
              text-align: center;
              margin-top: 0.32rem;
              font-size: 0.4rem;
              color: #909090;
            }
          }
        }
      }
    }
    .work-wrap {
      background-color: #fff;
      margin-bottom: 0.26666666666666666rem;
      .workinfo {
        display: flex;
        height: 1.3333333333333333rem;
        align-items: center;
        border-bottom: 0.0267rem solid #ddd;
        .wtitle {
          display: flex;
          align-items: center;
          height: 1.3333333333333333rem;
          margin-left: 0.5066666666666667rem;
          border-bottom: 0.0267rem solid #382e2e;
          img {
            display: block;
            width: 0.4533333333333333rem;
          }
          span {
            font-size: 0.4266666666666667rem;
            font-weight: 700;
            margin-left: 0.29333333333333333rem;
            color: #382e2e;
          }
        }
      }
      .workdetails {
        margin: 0 0.5066666666666667rem 0 1.2533333333333334rem;
        padding: 0.18666666666666668rem 0;
        > div {
          display: flex;
          justify-content: flex-start;
          width: 100%;
          line-height: 0.7466666666666667rem;
          .dt {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            span {
              font-size: 0.4rem !important;
            }
          }
          .dd {
            flex: 1;
            display: flex;
            justify-content: flex-start;
            flex-wrap: wrap; //margin-right: 0.5333333333333333rem;
            span {
              margin-right: 0.4266666666666667rem;
              color: #909090;
              font-size: 0.4rem !important;
            }
            span:last-child {
              margin: 0;
            }
          }
          .dt.resume,.dt.self {
              align-self: flex-start;
          }
          p.word {
              width: 6.24rem;
            color: #909090;
            font-size: 0.4rem !important;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 5;
            overflow: hidden;
          }
        }
      }
    }
    .album-wrap {
      background-color: #fff;
      padding-bottom: 0.26666666666666666rem;
      margin-bottom: 0.26666666666666666rem;
      .albuminfo {
        display: flex;
        height: 1.3333333333333333rem;
        align-items: center;
        border-bottom: 0.0267rem solid #ddd;
        margin-bottom: 0.26666666666666666rem;
        .atitle {
          display: flex;
          align-items: center;
          height: 1.3333333333333333rem;
          border-bottom: 0.0267rem solid #382e2e;
          margin-left: 0.5066666666666667rem;
          img {
            display: block;
            width: 0.4533333333333333rem;
          }
          span {
            font-size: 0.4266666666666667rem;
            font-weight: 700;
            margin-left: 0.29333333333333333rem;
            color: #382e2e;
          }
        }
      }
    }
    .more-card {
      background-color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 1.3333333333333333rem;
      margin-bottom: 3.066666666666667rem;
      a {
        .wrapbox {
          display: flex;
          justify-content: center;
          align-items: center;
          img {
            display: block;
            height: 0.4533333333333333rem;
            width: 0.4533333333333333rem;
          }
          span {
            margin-left: 0.13333333333333333rem;
            font-size: 0.3733rem;
            color: #ff2f77;
          }
        }
      }
    }
    .handlebars {
      width: 8.5333rem;
      position: fixed;
      bottom: 0.4rem;
      left: 50%;
      transform: translateX(-50%);
      z-index: 9;
      .handle-wrap {
        position: relative;
        display: flex;
        justify-content: center;
        height: 1.1733333333333333rem;
        background: #ff5050;
        border-radius: 1.0667rem;
        a {
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          z-index: 8;
          &>div {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 0.8533333333333334rem;
            width: 100%;
            img {
              display: block;
              width: 0.5866666666666667rem;
              height: 0.5866666666666667rem;
            }
            p {
              font-size: 0.32rem;
              color: #fff;
              text-align: center;
            }
          }
        }
        a:nth-child(1) {
          position: relative;
          justify-content: flex-start;
          width: 2.1866666666666665rem;
          div {
            position: relative;
            border-right: 0.02666666666666667rem solid #fff;
            width: 2.2133333333333334rem;
            z-index: 7;
            p {
              width: 1.0666666666666667rem;
              margin-left: 0.18666666666666668rem;
              margin-right: 0.37333333333333335rem;
            }
          }
        }
        a:nth-child(2) {
          width: 2.9066666666666667rem;
          div {
            align-items: flex-end;
            p {
              margin-bottom: 0.09333333333333334rem;
            }
          }
        }
        a:nth-child(3) {
          width: 2.1866666666666665rem;
          div {
            position: relative;
            width: 2.2133333333333334rem;
            border-left: 0.02666666666666667rem solid #fff;
            z-index: 7;
            img {
              margin-left: 0.37333333333333335rem;
            }
            p {
              width: 1.0666666666666667rem;
              margin-left: 0.16rem;
            }
          }
        }
        .circle {
          position: absolute;
          top: -0.5866666666666667rem;
          left: 50%;
          height: 1.1733333333333333rem;
          width: 1.1733333333333333rem;
          transform: translateX(-50%);
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 50%;
          background-color: #ff5050;
          img {
            display: block;
            width: 0.8266666666666667rem;
            height: 0.8266666666666667rem;
          }
        }
      }
    }
  }

</style>
