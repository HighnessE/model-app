<template>
  <div>
    <!-- 推荐榜 -->
    <div id="introduce">
        <div class="title">
            <x-icon type="trophy" size="0.4rem" class="icon-color"></x-icon>
            <span>推荐榜</span>
        </div>
        <div class="viplogo">
            <img src="./img/vipbanner.jpg">
        </div>
    </div>
    <!--分类栏-->
    <div id="classifier">
        <div class="hotselectbox">
            <div class="showarea" @click="showHot=!showHot">
                <span>全部</span>
                <div class="arrowbox">
                    <x-icon type="ios-arrow-down" size="0.4rem"></x-icon>
                </div>
            </div>
        </div>
        <div class="areaselectbox">
            <div class="showarea" >
                <v-address></v-address>
                <div class="arrowbox">
                    <x-icon type="ios-arrow-down" size="0.4rem"></x-icon>
                </div>
            </div>
        </div>
        <div class="typeselectbox">
            <div class="showarea" @click="showType=!showType">
                <span>类型</span>
                <div class="arrowbox">
                    <x-icon type="ios-arrow-down" size="0.4rem"></x-icon>
                </div>
            </div>
        </div>
        <div class="styleselectbox">
            <div class="showarea" @click="showStyle=!showStyle">
                <span>风格</span>
                <div class="arrowbox">
                    <x-icon type="ios-arrow-down" size="0.4rem"></x-icon>
                </div>
            </div>
        </div>
    </div>
    <x-dialog v-model="showHot" class="dialog-hot" hide-on-blur>
      <select-list :arrLsit="hotArr" items="antype"></select-list>
    </x-dialog>
    <x-dialog v-model="showType" class="dialog-type" hide-on-blur>
      <select-list :arrLsit="typeArr" items="antype"></select-list>
    </x-dialog>
    <x-dialog v-model="showStyle" class="dialog-style" hide-on-blur>
      <select-list :arrLsit="styleArr" items="antype"></select-list>
    </x-dialog>
    <scroller lock-x height="11.8333rem" ref="scrollerBottom" :scroll-bottom-offst="200">
        <div id="card-content">
            <ul class="content-part">
                <li>
                    <a href="javascript:;">
                        <div class="img">
                            <img src="http://www.qingmeng168.com/model-spring-lm/Files/work/qp9c9aviiljfcsr.jpg" alt="">
                        </div>
                        <div class="baseinfo">
                            <span class="name">周杰倫</span><span class="area">台灣</span><span class="age">18岁</span>
                        </div>
                        <div class="wrap">
                        <div class="seen">
                            <x-icon type="eye" size="0.4rem" class="icon"></x-icon>
                            <span>233</span>
                        </div>
                        <div class="like">
                            <x-icon type="heart" size="0.4rem" class="icon"></x-icon>
                            <span>2333</span>
                        </div>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="javascript:;">
                        <div class="img">
                        <img src="http://www.qingmeng168.com/model-spring-lm/Files/work/qp9c9aviiljfcsr.jpg" alt="">
                        </div>
                        <div class="baseinfo">
                        <span class="name">周杰倫</span><span class="area">台灣</span><span class="age">18岁</span>
                        </div>
                        <div class="wrap">
                        <div class="seen">
                             <x-icon type="eye" size="0.4rem" class="icon"></x-icon>
                            <span>233</span>
                        </div>
                        <div class="like">
                             <x-icon type="heart" size="0.4rem" class="icon"></x-icon>
                            <span>2333</span>
                        </div>
                        </div>
                    </a>
                </li>
            </ul>
            <load-more tip="loading"></load-more>
        </div>
    </scroller>
  </div>
</template>
<script>
import VAddress from '../../common/vuxAddress/vuxAddress'
import { XDialog, LoadMore, Scroller} from 'vux'
import selectList from '../../common/selectLayer/selectLayer'
import { domainAnnu } from '../../base/common.js'
export default {
  components: {
    VAddress,
    LoadMore,
    XDialog,
    Scroller,
    selectList
  },
  data () {
    return {
      showStyle:false,
      showType:false,
      showHot:false,
      hotArr:[],
      typeArr:[],
      styleArr:[]
    }
  },
  created () {
    // this.getBanner()
  },
  methods: {
    // getBanner(){
    //   this.$http.get(domainAnnu + 'Banner').then(function(res){
    //     console.log(res)
    //   })
    // }
  }
}
</script>
<style lang="less">
    #introduce {
        background-color: #fff;
        margin-bottom: 0.18666666666666668rem;
        .title {
            height:1.04rem;
            position: relative;
            .icon-color {
                display: block;
                position: absolute;
                width: 0.48rem;
                height: 0.48rem;
                fill:#ff2f77;
                top: 0.37333333333333335rem;
                left: 0.26666666666666666rem;
            }
            span {
                position: absolute;
                top: 0.4rem;
                left:  0.8266666666666667rem;
                font-size: 0.37333333333333335rem;
                color: #ff2f77;
            }
        }
        .viplogo {
            width: 100%;
            height:2.1333333333333333rem;
            img {
            display: block;
            height:100%;
            width: 100%;
            }
        }
    }
    #classifier {
        display: flex;
        justify-content:center;
        align-items:center;
        background-color: #fff;
        height: 1.2533333333333334rem;
        border-bottom: 1px solid #717171;
        .hotselectbox,.typeselectbox,.areaselectbox,.styleselectbox {
            display: flex;
            justify-content:center;
            align-items:center;
            position: relative;
            top:0;
            left:0;
            height:0.64rem;
            width: 25%;
            .showarea{
                display: flex;
                justify-content:center;
                align-items:center;
                position: absolute;               
                top: 0;
                left: 0;
                width: 100%;
                height:0.64rem;
                border-right: 1px solid #c7c7c7;
                span {
                    font-size: 0.373rem;
                    line-height:0.64rem;
                    margin-right: 0.133rem;
                }
                input {
                    display: inline-block;
                    width: 0.7467rem;
                    line-height: 0.64rem;
                    font-size: 0.3733rem;
                    color: #2c2a2a;
                    text-align: center;
                }
                input::-webkit-input-placeholder {
                    color: #2c2a2a;
                }
                .arrowbox {
                    display: flex;
                    align-items: center;
                    width: 0.373rem;
                    height: 100%;
                }
            }
        }
    }
    #card-content {
        display: flex;
        justify-content:center;
        flex-direction:column;
        margin-bottom: 1.7333rem;
        ul {
            display: flex;
            justify-content:space-between;
            flex-wrap: wrap;
            align-items:center;
            width: 100%;
            li {
                background-color: #fff;
                padding:0.1333rem 0.1333rem 0.2467rem 0.1333rem;
                margin-bottom: 0.1333rem;
                a {
                    display: flex;
                    flex-direction:column;
                    justify-content:center;
                    align-items:center;
                    //图片那一栏
                    .img {
                        display: flex;
                        justify-content:center;
                        height: 5.3067rem;
                        width: 4.64rem;
                        overflow: hidden;
                        img{
                            display: block;
                            height:100%;
                        }
                    }
                    //名字地区那一栏
                    .baseinfo {
                        display: flex;
                        align-items:center;
                        width:100%;
                        margin-top: 0.1743rem;
                        color: #2c2a2a;
                        span.name {
                            margin-left: 0.1867rem;
                            font-size:0.3733rem;
                        }
                        span.area {
                            margin-left: 0.3467rem;
                            font-size:0.3733rem;
                        }
                        span.age {
                            margin-left: 0.3467rem;
                            font-size:0.3733rem;
                        }
                    }
                    //点赞那一栏
                    .wrap{
                        display: flex;
                        align-items:center;
                        width:100%;
                        margin-top: 0.2467rem;
                        .seen {
                            margin-right: 0.4533rem;
                        }
                        .seen,.like {
                            display: flex;
                            align-items:center;
                            .icon {
                                fill:#7e8c8d;
                                margin-left: 0.187rem;
                            }
                            span {
                            margin-left: 0.2133rem;
                            font-size:0.3733rem;
                            }
                        }
                    }
                }
            }
        }
    }
</style>
