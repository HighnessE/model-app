<template>
  <div id="collect-card-list">
    <ul class="collectpart">
      <li>
        <div class="circle">
          <x-icon type="android-checkmark-circle" size="0.7rem" class="icon-select"></x-icon>
        </div>
        <a href="javascript:;">
          <div class="img">
            <img src="https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=3728319125,4209708385&fm=173&s=AD0FA05401412B517CC27A850300E08C&w=218&h=146&img.JPEG" alt="">
          </div>
          <div class="baseinfo">
            <span class="name">name</span>
            <span class="area">city</span>
          </div>
          <div class="figureinfo">
            <span class="height">166cm</span>
            <span class="weight">54kg</span>
            <span class="bwh">87-64-89</span>
          </div>
          <div class="wrap">
            <div class="seen">
              <x-icon type="eye" size="0.4rem" class="icon"></x-icon>
              <span>23</span>
            </div>
            <div class="like">
              <x-icon type="eye" size="0.4rem" class="icon"></x-icon>
              <span>45</span>
            </div>
          </div>
          <div class="typetag">
            <span class="btn">新主播</span>
            <span class="btn">舞蹈</span>
          </div>
        </a>
      </li>
      <li>
        <div class="circle">
          <x-icon type="android-checkmark-circle" size="0.7rem" class="icon-select"></x-icon>
        </div>
        <a href="javascript:;">
          <div class="img">
            <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=759276231,3928522476&fm=11&gp=0.jpg" alt="">
          </div>
          <div class="baseinfo">
            <span class="name">name</span>
            <span class="area">city</span>
          </div>
          <div class="figureinfo">
            <span class="height">166cm</span>
            <span class="weight">54kg</span>
            <span class="bwh">87-64-89</span>
          </div>
          <div class="wrap">
            <div class="seen">
              <x-icon type="eye" size="0.4rem" class="icon"></x-icon>
              <span>23</span>
            </div>
            <div class="like">
              <x-icon type="eye" size="0.4rem" class="icon"></x-icon>
              <span>45</span>
            </div>
          </div>
          <div class="typetag">
            <span class="btn">新主播</span>
            <span class="btn">舞蹈</span>
          </div>
        </a>
      </li>
       <li>
        <div class="circle">
          <x-icon type="android-checkmark-circle" size="0.7rem" class="icon-select"></x-icon>
        </div>
        <a href="javascript:;">
          <div class="img">
            <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=759276231,3928522476&fm=11&gp=0.jpg" alt="">
          </div>
          <div class="baseinfo">
            <span class="name">name</span>
            <span class="area">city</span>
          </div>
          <div class="figureinfo">
            <span class="height">166cm</span>
            <span class="weight">54kg</span>
            <span class="bwh">87-64-89</span>
          </div>
          <div class="wrap">
            <div class="seen">
              <x-icon type="eye" size="0.4rem" class="icon"></x-icon>
              <span>23</span>
            </div>
            <div class="like">
              <x-icon type="eye" size="0.4rem" class="icon"></x-icon>
              <span>45</span>
            </div>
          </div>
          <div class="typetag">
            <span class="btn">新主播</span>
            <span class="btn">舞蹈</span>
          </div>
        </a>
      </li>
    </ul>
    <div class="nocontent">
      <img src="../../base/img/nodata.png">
      <p>暂无数据</p>
    </div>
  </div>
</template>
<style lang="less" scoped>
#collect-card-list {
  ul {
    width: 100%;
    display: flex;
    justify-content:space-between;
    flex-wrap: wrap;
    align-items:center;
    li {
      position: relative;
      background-color: #fff;
      width: 4.95rem;
      margin-bottom: 0.1333rem;
      .circle {
          position: absolute;
          top: -0.08rem;
          right: 0.04rem;
          border-radius: 50%;
          overflow: hidden;
          background: transparent;
          z-index: 10;
      }
      a {
        display: flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        position: relative;
        width: 100%;
        //图片那一栏
        .img {
          display: flex;
          justify-content:center;
          height: 4.95rem;
          width: 4.95rem;
          overflow: hidden;
          img{
            display: block;
            height:100%;
          }
        }
        //名字地区那一栏
        .baseinfo {
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 0.8rem;
          width:100%;
          color: #2c2a2a;
          span.name {
            margin-left: 0.35rem;
            font-size:0.3733rem;
          }
          span.area {
            margin-right: 0.3rem;
            font-size:0.3733rem;
          }
        }
        .figureinfo {
          display: flex;
          justify-content: space-between;
          height: 0.6rem;
          width: 100%;
          color: #2c2a2a;
          span.height {
            margin-left: 0.35rem;
            font-size:0.3733rem;
          }
          span.weight {
            // margin-left: 0.3467rem;
            font-size:0.3733rem;
          }
          span.bwh {
            margin-right: 0.3rem;
            font-size:0.3733rem;
          }
        }
        //点赞那一栏
        .wrap{
          display: flex;
          align-items:center;
          position: absolute;
          top:0.175rem;
          left: 0.1rem;
          width:100%;
          .seen {
            margin-right: 0.4533rem;
          }
          .seen,.like {
            display: flex;
            //justify-content:flex-start;
            align-items:center;
            img {
              display: block;
              width: 0.4267rem;
              height: 0.32rem;
              margin-left: 0.1rem;
            }
            span {
              margin-left: 0.1rem;
              font-size:0.3733rem;
              color:#fff;
            }
          }
        }
        .typetag {
          display: flex;
          position: absolute;
          top:4.35rem;
          left:0.1rem;
          .btn {
            border:0.0267rem solid #fff;
            border-radius: 0.2667rem;
            padding: 0.0533rem 0.1333rem;
            font-size: 0.32rem;
            margin-right: 0.1rem;
            color: #fff;
          }
        }
      }
    }
  }
}
</style>
