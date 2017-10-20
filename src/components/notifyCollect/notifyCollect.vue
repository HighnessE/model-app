<template>
  <div class="notice-list">
      <ul class="collectpart">
        <li>
          <div class="circle">
            <x-icon type="android-checkmark-circle" size="0.7rem" class="icon-select"></x-icon>
          </div>
          <a class="collectlink" href="javascript:">
            <div class="headpart">
               <img src="http://admin.qingmeng168.com:8081/ChatRobot/IMG/Type/XhCw6Jm_1503888510246.png">
            </div>
            <div class="maininfopart">
              <div class="headline">
                  <h2 class="title">招模特5名</h2>
                  <div class="tagbox">
                    <div class="identifytag">平台推荐</div>
                    <!-- <div class="identifytag">置顶</div>
                    <div class="identifytag">满</div> -->
                  </div>
              </div>
              <div class="mainline">
                <h2 class="price">
                  <x-icon type="social-yen" size="0.4rem" class="icon-color"></x-icon>
                  <span class="price2">120元</span>
                </h2>
              </div>
              <div class="otherinfo">
                <div class="person">男1人</div>
                <div class="release">1小時前</div>
              </div>
              <div class="subline">
                <div class="startjob">
                  <x-icon type="ios-clock-outline" size="0.4rem"></x-icon>
                  <span>1月2号开工</span>
                </div>
                <div class="position">
                    <x-icon type="ios-location-outline" size="0.4rem"></x-icon>
                  <span>北京市區</span>
                </div>
              </div>
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
  .notice-list {
    .collectpart {
      li {
        position: relative;
        margin-bottom: 0.187rem;
        .circle {
          position: absolute;
          top: 0.02rem;
          left: 0.02rem;
          border-radius: 50%;
          overflow: hidden;
          background: transparent;
          z-index: 10;
        }
        a {
          display: flex;
          width: 100%;
          box-sizing: border-box;
          background: #fff;
          padding: 0.4rem 0.48rem 0.4rem 0.293rem;
          .headpart {
            flex: 0 0 auto;
            width: 2.987rem;
            height: 2.987rem;
            img {
              width: 100%;
              display: block;
            }
          }
          .maininfopart {
            flex: 1 1 auto;
            margin-left: 0.4rem;
            .headline {
              display: flex;
              justify-content: space-between;
              height: 0.827rem;
              width: 100%;
              .title {
                font-size: 0.427rem;
                line-height: 0.827rem;
                color: #272c2d;
                flex: 1 1 auto;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                margin-right: 0.267rem;
              }
              .tagbox {
                flex: 0 0 auto;
                display: flex;
                flex-direction: column;
                align-items:flex-end;
                margin-top: 0.133rem;
                .identifytag {
                  padding: 0.107rem 0.213rem;
                  color: #ef4644;
                  border-radius: 0.133rem;
                  border: 0.027rem solid #ef4644;
                  margin-bottom: 0.133rem;
                  font-size: 0.373rem;
                }
              }
            }
            .mainline {
              margin-top: 0.16rem;
              color: #ef4445;
              .price {
                display: flex;
                align-items: flex-end;
                .icon-color {
                  fill: #ef4445;
                }
                .price2 {
                  font-size: 0.427rem;
                }
              }
            }
            .otherinfo {
              display: flex;
              margin-top: 0.32rem;
              justify-content: space-between;
              .person, .release {
                font-size: 0.373rem;
                color: #929291;
              }
            }
            .subline {
              display: flex;
              justify-content: space-between;
              margin-top: 0.267rem;
              .startjob, .position {
                display: flex;
                div {
                  width: 0.4rem;
                  margin-right: 0.1867rem;
                }
                span {
                  color: #929292;
                  font-size: 0.3733rem;
                }
              }
            }
          }
        }
      }
      li:last-child {
        margin-bottom: 0;
      }
    }
  }
</style>
