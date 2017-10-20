<template>
  <div id="center">
      <div class="centerbanner">
        <img class="banner" src="./img/banner-bg.jpg" alt="">
        <div class="header">
            <div class="headerimg">
                <img src="./img/avatar.png" alt="">
            </div>
            <div class="nickname">{{nickname}}</div>
        </div>
      </div>
      <ul class="centercontent">
        <li>
            <router-link to="/myCardList">
                <x-icon type="card" size="0.613rem"></x-icon>
                <span>我的名片</span>
            </router-link>
        </li>
        <li>
            <router-link to="/myCollect">
                <x-icon type="ios-star" size="0.613rem"></x-icon>
                <span>我的收藏夹</span>
            </router-link>
        </li>
        <li>
            <router-link to="/myRelease">
                <x-icon type="compose" size="0.613rem"></x-icon>
                <span>我的发布</span>
            </router-link>
        </li>
        <li>
            <router-link  to="/Message" class="messpecial">
                <div class="meswrap">
                    <x-icon type="chatbubble-working" size="0.613rem"></x-icon>
                    <span>我的消息</span>
                </div>
                <p class="mesnumber"></p>
            </router-link>
        </li>
        <li>
            <router-link to="/setup">
                <x-icon type="locked" size="0.613rem"></x-icon>
                <span>设置与隐私</span>
            </router-link>
        </li>
        <li>
            <router-link to="/contact">
                <x-icon type="chatbubbles" size="0.613rem"></x-icon>
                <span>联系平台</span>
            </router-link>
        </li>
    </ul>
  </div>
</template>
<script>
export default {
  data(){
      return{
          nickname:'highnesse'
      }
  }
}
</script>
<style lang="less">
    .centerbanner {
        position: relative;
        width: 100%;
        .banner {
            display: block;
            width: 100%;
        }
        .header {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            .headerimg {
                margin: 0 auto 0.267rem;
                width: 1.92rem;
                height: 1.92rem;
                border-radius: 50%;
                overflow: hidden;
                img {
                    display: block;
                    width: 100%;
                }
            }
            .nickname {
            text-align: center;
            font-size: 0.373rem;
            color: #ff5252;
            }
        }
    }
    .centercontent {
        li {
            width: 100%;
            height: 1.387rem;
            margin-bottom: 0.267rem;
            a {
            display: flex;
            padding-left: 0.507rem;
            box-sizing: border-box;
            align-items: center;
            background: #fff;
            width: 100%;
            height: 100%;
                svg {
                    margin-right: 0.4rem;
                }
                span {
                    font-size: 0.427rem;
                    color: #382f2d;
                }
            }
            .messpecial {
                justify-content: space-between;
                .meswrap {
                    display: flex;
                    align-items: center;
                }
                .mesnumber {
                    display: none;
                    margin-right: 0.533rem;
                    font-size: 0.373rem;
                    line-height: 0.56rem;
                    background: #f34847;
                    color: #fff;
                    width: 0.56rem;
                    height: 0.56rem;
                    text-align: center;
                    border-radius: 50%;
                }
            }
            // a:active {
            // background: @linecolor;
            // }
        }
    }
</style>
