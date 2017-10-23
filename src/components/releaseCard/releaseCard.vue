<template>
  <div class="create-card">
    <x-header>制作名片
      <a slot="right">
        <x-icon type="ios-home-outline" size="0.6rem" class="icon-home"></x-icon>
      </a>
    </x-header>
    <div class="editcard">
      <!-- 姓名 -->
      <group>
        <x-input title="姓名" v-model="value"></x-input>
      </group>
      <!--年龄-->
      <group>
        <x-input title="年龄" v-model="value"></x-input>
      </group>
      <!--地区-->
      <div class="items">
        <div class="itemwrap">
          <div class="itemtype">
            <span>地区</span>
          </div>
          <div class="itemhandle">
            <v-address></v-address>
            <x-icon type="chevron-right" size="0.4rem" class="icon-home"></x-icon>
          </div>
        </div>
      </div>
      <!--身高-->
      <group>
        <x-input title="身高" v-model="value"></x-input>
      </group>
      <!--体重-->
      <group>
        <x-input title="体重" v-model="value"></x-input>
      </group>
      <!--三围-->
      <div class="items">
        <div class="itemwrap">
          <div class="itemtype">
            <span>三围</span>
          </div>
          <div class="itemhandle">
            <v-address></v-address>
            <x-icon type="chevron-right" size="0.4rem" class="icon-home"></x-icon>
          </div>
        </div>
      </div>
      <!--鞋码-->
      <group>
        <x-input title="身高" v-model="value"></x-input>
      </group>
      <!--风格标签-->
      <div class="items">
        <div class="itemwrap">
          <div class="itemtype">
            <span>风格标签</span>
          </div>
          <div class="itemhandle">
            <input type="text" placeholder="选择2~5个" readonly>
            <x-icon type="chevron-right" size="0.4rem" class="icon-home"></x-icon>
          </div>
        </div>
      </div>
      <!--工作标签-->
      <div class="items">
        <div class="itemwrap">
          <div class="itemtype">
            <span>工作标签</span>
          </div>
          <div class="itemhandle">
            <input type="text" placeholder="选择2~5个" id="jobstag-btn" readonly>
            <x-icon type="chevron-right" size="0.4rem" class="icon-home"></x-icon>
          </div>
        </div>
      </div>
      <!--工作履历-->
      <group :title="工作履历">
        <x-textarea :max="200" name="resume" placeholder="placeholder"></x-textarea>
      </group>
      <!--工作报价-->
      <div id="offer">
        <div class="items">
          <div class="itemwrap">
            <div class="itemtype">
              <span>工作报价</span>
            </div>
            <div class="itemhandle itemhandle-btn">
              <span>是否面议</span>
              <v-switch></v-switch>
            </div>
          </div>
        </div>
        <div class="offerList">

        </div>
        <!--工作报价-->
        <div class="addoffer">
          <span>添加报价</span>
        </div>
      </div>
      <!--个人描述-->
      <group :title="个人描述">
        <x-textarea :max="200" name="resume" placeholder="placeholder"></x-textarea>
      </group>
      <!--添加封面-->
      <div class="samplepartbox">
        <div class="crossimgbox">
          <div class="title">添加封面图</div>
          <div class="samplelist">
            <ul class="addpicture">
              <li class="addpicbtn">
                <x-icon type="android-add-circle" size="2.0rem" class="icon-home"></x-icon>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!--上传作品-->
      <div class="uploadpic">
        <div class="title">上传作品</div>
        <div class="imgbox">
        </div>
        <div class="newcreate">
          <span>+新建作品集</span>
        </div>
      </div>
      <!--确认提交-->
      <div>
        <button class="confirmsubmit">
          确认提交
        </button>
      </div>
      <div class="samplewrap">
        <div class="sample">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {
    XHeader,
    XInput,
    Group,
    XTextarea
  } from 'vux';
  import VSwitch from '../../common/switch/switch'
  export default {
    components: {
      XHeader,
      XInput,
      Group,
      XTextarea
    }
  }

</script>
<style lang="less">
  .create-card {
    //公共样式
    .items {
      .itemwrap {
        height: 1.3867rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #fff;
        .itemtype,
        .itemhandle {
          height: 100%;
          input {
            font-size: 0.4rem;
            text-align: right;
            outline: 0;
          }
        }
        .itemtype {
          display: flex;
          align-items: center;
          span {
            font-size: 0.4rem;
            color: #382e2e;
            margin-left: 0.4267rem;
          }
        }
        .itemhandle {
          flex: 1;
          display: flex;
          justify-content: flex-end;
          align-items: center;
          margin-right: 0.4267rem;
          img {
            margin-left: 0.3733rem;
            width: 0.2133rem;
          }
        }
        .itemhandle-btn {
          span {
            font-size: 0.4rem;
            color: #909090;
          }
        }
      }
    }
    //工作面和报价那一块
    #offer {
      .joboffer {
        height: 1.3867rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #fff;
        .offer {
          height: 1.3867rem;
          display: flex;
          justify-content: center;
          align-items: center;
          img {
            display: block;
            margin-left: 0.4533rem;
            width: 0.5067rem;
            height: 0.5067rem;
          }
          .type {
            margin-left: 0.4rem;
            font-size: 0.4rem;
          }
          .price {
            margin-left: 0.8267rem;
            font-size: 0.4rem;
            .money {
              color: #de3c3c;
              font-size: 0.4rem;
            }
          }
        }
        .delbtn {
          margin-right: 0.88rem;
          img {
            display: block;
            width: 0.6133rem;
            height: 0.6133rem;
          }
        }
      }
      .addoffer {
        justify-content: center;
        align-items: center;
        height: 1.12rem;
        display: none;
        span {
          align-self: flex-end;
          margin-bottom: 0.2133rem;
          font-size: 0.4rem;
          color: #5863a7;
        }
      }
    }
    .samplepartbox {
      background-color: #fff;
      margin-bottom: 0.2667rem;
      .crossimgbox {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        .title {
          align-self: flex-start;
          height: 1.1467rem;
          display: flex;
          align-items: center;
          margin-left: 0.4267rem;
          font-size: 0.4rem;
          color: #382e2e;
        }
        .samplelist {
          width: 100%;
          text-align: center;
          .addpicture {
            display: inline-block; //width: 6.64rem;
            margin: 0.3733rem auto 0;
            font-size: 0;
            li {
              position: relative;
              width: 2.6933rem;
              height: 3.0667rem;
              display: inline-block;
              margin-right: 0.16rem;
              margin-bottom: 0.08rem;
              .showpicimg {
                width: 100%;
                height: 100%;
              }
              .deletebtn {
                position: absolute;
                right: -0.2667rem;
                top: -0.2667rem;
                width: 0.5333rem;
                height: 0.5333rem;
                border-radius: 50%;
                box-sizing: border-box;
                overflow: hidden;
                img {
                  width: 100%;
                }
              }
            }
            li:last-child {
              margin-right: 0;
            }
            .addpicbtn {
              img {
                display: block;
                width: 1.4667rem;
                margin: 0.8rem auto;
              }
              .deletebtn {
                display: none;
              }
            }
          }
        }
      }
    }
    //上传作品集
    .uploadpic {
      background-color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      .title {
        height: 1.3867rem;
        align-self: flex-start;
        display: flex;
        align-items: center;
        margin-left: 0.4267rem;
        font-size: 0.4rem;
        color: #382e2e;
      }
      .imgbox {
        ul {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          li.showWork {
            position: relative;
            width: 100%;
            height: auto;
            margin: 0 0.4267rem 9px 0.4267rem;
            img.showworkImg {
              display: block;
              width: 100%;
              height: 100%;
            }
            .editbtn {
              position: absolute;
              right: 0.8rem;
              top: -0.2667rem;
              width: 0.5333rem;
              height: 0.5333rem;
              border-radius: 50%;
              box-sizing: border-box;
              overflow: hidden;
              img {
                width: 100%;
              }
            }
            .delbtn {
              position: absolute;
              right: -0.2667rem;
              top: -0.2667rem;
              width: 0.5333rem;
              height: 0.5333rem;
              border-radius: 50%;
              box-sizing: border-box;
              overflow: hidden;
              img {
                width: 100%;
              }
            }
          }
        }
      }
      .newcreate {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 1.5467rem;
        span {
          height: 100%;
          display: flex;
          align-items: center;
          font-size: 0.4rem;
          color: #5863a7;
        }
      }
    }
    //确认上传
    .confirmsubmit {
      display: block;
      width: 76%;
      text-align: center;
      padding-left: 0.2667rem;
      padding-right: 0.2667rem;
      background-color: #ff8b00;
      color: #fff;
      font-size: 0.4533rem;
      height: 1.2rem;
      line-height: 1.2rem;
      margin: 0.9067rem auto 1.0667rem;
      border-radius: 0.16rem;
    }
  }

</style>
