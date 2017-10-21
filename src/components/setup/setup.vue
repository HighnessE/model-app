<template>
  <div id="setup">
    <x-header>设置与隐私</x-header>
    <!-- 平台规则 -->
    <div class="contentwrap">
        <div class="rule">
            <span>平台规则</span>
            <a href="javascript:">
                <span>点击查看</span>
                <x-icon type="chevron-right" size="0.4rem" class="icon"></x-icon>
            </a>
        </div>
        <div class="notice">
            <div class="msgWrap">
                <span class="title">消息通知</span>
                <div class="switchWrap">
                    <span>私信提醒</span>
                    <v-switch></v-switch>
                </div>
            </div>
            <div class="thumbsWrap">
                <div class="switchWrap">
                    <span>点赞提醒</span>
                    <v-switch></v-switch>
                </div>
                
            </div>
        </div>
    </div>
  </div>
</template>
<script>
import { XHeader} from 'vux'
import VSwitch from '../../common/switch/switch'
export default {
   components: {
    XHeader,
    VSwitch
  }
}
</script>
<style lang="less" scoped>
#setup {
    .contentwrap {
        width: 100%;
        .rule {
            display: flex;
            height: 1.3867rem;
            background-color: #fff;
            font-size: 0.4rem;
            padding:0 0.4533rem;
            justify-content:space-between;
            align-items:center;
            a {
                display: flex;
                justify-content:center;
                align-items:center;
                color: #909090;
                span {
                    margin-right: 0.4rem;
                }
                .icon {
                    fill:#909090;
                }
            }
        }
        .notice {
            width: 100%;
            margin-top: 0.2667rem;
            background-color: #fff;
            .msgWrap {
                display: flex;
                justify-content: space-between;
                align-items:center;
                height: 1.3867rem;
                font-size: 0.4rem;
                border-bottom: 0.0267rem solid #ccc;
                .title {
                    margin-left: 0.4533rem;
                }
                .switchWrap {
                    display: flex;
                    justify-content: flex-end;
                    align-items: center;
                    > span {
                        margin-right: 0.6rem;
                        color:#909090;
                    }
                    > div {
                        margin-right: 0.4rem;
                    }
                }

            }
            .thumbsWrap {
                display: flex;
                justify-content: flex-end;
                align-items:center;
                height: 1.3867rem;
                font-size: 0.4rem;
                .switchWrap {
                    display: flex;
                    justify-content: flex-end;
                    align-items: center;
                    > span {
                        margin-right: 0.6rem;
                        color:#909090;
                    }
                    > div {
                        margin-right: 0.4rem;
                    }
                }
            }
        }
    }
}
</style>
