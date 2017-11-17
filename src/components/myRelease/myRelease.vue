<template>
    <div class="myRelease">
        <x-header>我的发布
            <a slot="right" @click="editTag=!editTag">{{editTag === true?"完成":"编辑"}}</a>
        </x-header>
        <ul class="releasepart">
            <li v-for="(item,index) in notifyList" :key="index">
                <div class="circle" v-show="editTag" @click="singleSelect(item,index)">
                    <x-icon type="ios-checkmark-outline" size="0.7rem" style="fill:#FA0659" v-if="item.active"></x-icon>
                    <x-icon type="ios-circle-outline" size="0.7rem" style="fill:#919191" v-if="!item.active"></x-icon>
                </div>
                <div class="enough">
                    <p>满员：</p>
                    <v-switch size="small" :init="item.enough===1?true:false" @on-change="sendEnoughEvent($event,item)"></v-switch>
                </div>
                <router-link class="releaselink" :to="`/notifyDetail/${item.vid}`">
                    <div class="headpart">
                        <img alt="">
                    </div>
                    <div class="maininfopart">
                        <div class="headline">
                            <h2 class="title">{{item.theme}}</h2>
                            <div class="identifytag" v-if="item.top === '1'">置顶</div>
                            <div class="identifytag" v-if="item.top === '2'">待置顶</div>
                        </div>
                        <div class="mainline">
                            <h2 class="price">
                                <span class="price1">￥{{item.price}}</span>
                            </h2>
                        </div>
                        <div class="otherinfo">
                            <div class="person">{{item.asex}}{{item.number}}人</div>
                            <div class="release">{{item.release}}</div>
                        </div>
                        <div class="subline">
                            <div class="startjob">
                                <x-icon type="ios-clock-outline" size="0.4rem"></x-icon>
                                <span>{{item.work_time}}</span>
                            </div>
                            <div class="position">
                                <x-icon type="ios-location-outline" size="0.4rem"></x-icon>
                                <span>{{item.site}}</span>
                            </div>
                        </div>
                    </div>
                </router-link>
            </li>
        </ul>
        <!-- 无发布显示内容 -->
        <div class="nocontent" v-show="notifyList.length === 0">
            <div class="noconwrap">
                <div class="noconimg">
                    <img src="../../base/img/nodata.png">
                </div>
                <div class="noconp">
                    <p>暂无已发布通告，赶快去
                        <router-link to="/releaseNotify">发布通告</router-link>吧</p>
                </div>
            </div>
        </div>
        <!-- 下方选择操作栏 -->
        <div class="handlebar" v-show="editTag">
            <div class="major">
                <div class="stick"  @click="stickNotify()">置顶</div>
                <div class="delete" @click="deleteNotify()">删除</div>
            </div>
        </div>
    </div>
</template>
<script>
import qs from 'qs'
import {  XHeader } from 'vux'
import VSwitch from '../../common/switch/switch'
export default {
    components: {
        VSwitch,
        XHeader
    },
    data() {
        return {
            editTag: false,
            notifyList: [],
        }
    },
    created() {
        this.getNotifyList()
    },
    methods: {
        getNotifyList() {
            this.$http.post('/model/Model/Annunciateexamine')
                .then(res => {
                    console.log(res)
                    res.data.map(item=>{
                        item.work_time = this.getWorkTime(item.work_time)
                        item.release = this.formatTime(item.deadline)
                        item.active = false
                    })
                    this.notifyList = res.data
                    if(this.notifyList.length !== 0 ){
                        this.notifyList[0].active = true
                    }
                })
        },
        // 计算发布时间和用户查看时间的时间差
        formatTime(val) {
            let nowTime = new Date().getTime()
            let releaseTime = new Date(val).getTime()
            let reduceTime = (nowTime - releaseTime) / 1000
            if (reduceTime < 60) {
                return '刚刚'
            } else if (reduceTime / 60 >= 1 && reduceTime / 60 < 60) {
                return parseInt(reduceTime / 60) + '分钟前'
            } else if (reduceTime / 3600 >= 1 && reduceTime / 3600 < 24) {
                return parseInt(reduceTime / 3600) + '小时前'
            } else if (reduceTime / (3600 * 24) >= 1 && reduceTime / (3600 * 24) < 7) {
                return parseInt(reduceTime / (3600 * 24)) + '天前'
            } else if (reduceTime / (3600 * 24 * 7) >= 1 && reduceTime / (3600 * 24 * 7) < 4) {
                return parseInt(reduceTime / (3600 * 24 * 7)) + '周前'
            } else if (reduceTime / (3600 * 24 * 7 * 4) >= 1 && reduceTime / (3600 * 24 * 7 * 4) < 12) {
                return parseInt(reduceTime / (3600 * 24 * 7 * 4)) + '月前'
            } else if (reduceTime / (3600 * 24 * 7 * 4 * 12) >= 1) {
                return parseInt(reduceTime / (3600 * 24 * 7 * 4 * 12)) + '年前'
            }
        },
        // 计算开工日期
        getWorkTime(val) {
            let month = val.split('-')[1]
            let day = val.split('-')[2]
            return `${month}月${day}日开工`
        },
        //单选
        singleSelect(item,index) {
            this.notifyList.map(item=>{
                item.active = false
            })
            this.notifyList[index].active = true
        },
        //点击是否满员按钮触发的事件
        sendEnoughEvent(val,item){
            this.$http.post('/model/Model/NumberOfChanges',qs.stringify({
                vid:item.vid,
                enough:val === true ? 1: 0
            })).then(res=>{
                console.log(res.data.result)
            })
        },
        //点击删除收藏的通告
        deleteNotify() {
            let deleteOpt = this.notifyList.filter(item => {
                return item.active == 1
            })
            if (deleteOpt.length > 0) {
                let _this = this
                this.$vux.confirm.show({
                    title: '确定删除选中通告？',
                    onConfirm() {
                        let newArr = []
                        deleteOpt.map(item => {
                            newArr.push(item.vid)
                        })
                        _this.$http.post('/model/Model/ADelete', qs.stringify({
                            vid: newArr.join(',')
                        })).then(res => {
                            if (res.data.result === 'success') {
                                _this.getNotifyList()
                                _this.editTag = false
                            }
                        })
                    }
                })
            }
        },
        stickNotify(){
            let stickOpt = this.notifyList.filter(item => {
                return item.active == 1
            })
            let stickArr = []
            stickOpt.map(item=>{
                stickArr.push(item.vid)
            })
            let notifyVid = stickArr.join(',')
            this.$router.push(`/stickNotify/${notifyVid}`)
        }
    }
}

</script>
<style lang="less">
.myRelease {
    .releasepart {
        li {
            position: relative;
            margin-bottom: 0.18666666666666668rem;
            .circle {
                position: absolute;
                top: 0.24rem;
                left: 0.10666666666666667rem;
                width: 0.8533333333333334rem;
                height: 0.8533333333333334rem;
                border-radius: 50%;
                overflow: hidden;
                background: transparent;
                z-index: 10;
                img {
                    width: 100%;
                    height: 100%;
                    display: block;
                }
            }
            .enough {
                position: absolute;
                top: 1.3333333333333333rem;
                height: 0.5333333333333333rem;
                right: 0.4rem;
                display: flex;
                justify-content: flex-end;
                p {
                    height: 0.5333333333333333rem;
                    color: #929291;
                    font-size: 0.37333333333333335rem;
                    line-height: 0.5333333333333333rem;
                }
                .switch {
                    position: relative;
                    background: #fff;
                    width: 1.3333333333333333rem;
                    height: 0.4rem;
                    border-radius: 0.32rem;
                    border: 0.05333333333333334rem solid #d5d1c8;
                    z-index: 9;
                    .switchbtn {
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 0.6666666666666666rem;
                        height: 0.4rem;
                        background: #eef3f1;
                        border-radius: 0.26666666666666666rem;
                        border: 0.02666666666666667rem solid #919191;
                        outline: none;
                    }
                }
                .active {
                    background: #f7a109;
                }
            }
            a {
                display: flex;
                width: 100%;
                box-sizing: border-box;
                background: #fff;
                padding: 0.4rem 0.48rem 0.4rem 0.29333333333333333rem;
                .headpart {
                    flex: 0 0 auto;
                    width: 2.986666666666667rem;
                    height: 2.986666666666667rem;
                    img {
                        width: 100%;
                        display: block;
                    }
                }
                .maininfopart {
                    flex: 1 1 auto;
                    width: 0%;
                    margin-left: 0.4rem;
                    .headline {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        width: 100%;
                        .title {
                            font-size: 0.4266666666666667rem;
                            line-height: 0.8266666666666667rem;
                            color: #272c2d;
                            flex: 1 1 auto;
                            white-space: nowrap;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            margin-right: 0.26666666666666666rem;
                        }
                        .identifytag {
                            flex: 0 0 auto;
                            padding: 0.10666666666666667rem 0.21333333333333335rem;
                            color: #ef4644;
                            border-radius: 0.13333333333333333rem;
                            border: 0.02666666666666667rem solid #ef4644;
                            font-size: 0.37rem;
                        }
                    }
                    .mainline {
                        margin-top: 0.16rem;
                        color: #ef4445;
                        .price {
                            display: flex;
                            align-items: flex-end;
                            .price1 {
                                font-size: 0.37333333333333335rem;
                            }
                            .price2 {
                                font-size: 0.4266666666666667rem;
                            }
                        }
                    }
                    .otherinfo {
                        display: flex;
                        margin-top: 0.32rem;
                        justify-content: space-between;
                        .person,
                        .release {
                            font-size: 0.37333333333333335rem;
                            color: #929291;
                        }
                    }
                    .subline {
                        display: flex;
                        justify-content: space-between;
                        margin-top: 0.26666666666666666rem;
                        .startjob,
                        .position {
                            display: flex;
                            svg {
                                margin-right: 0.18666666666666668rem;
                            }
                            span {
                                color: #929292;
                                font-size: 0.37333333333333335rem;
                            }
                        }
                    }
                }
            }
            a:active {
                background: #ddd;
            }
        }
    }

    .nocontent {
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
            height: 5.333333333333333rem;
            .noconimg {
                height: 3.5733333333333333rem;
                width: 3.5733333333333333rem;
                margin: 0 auto;
                img {
                    width: 100%;
                    height: 100%;
                }
            }
            .noconp {
                margin-top: 0.26666666666666666rem;
                a,
                p {
                    font-size: 0.37333333333333335rem;
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
        justify-content: flex-end;
        height: 1.2266666666666666rem;
        width: 100%;
        background: #fff;
        z-index: 13;
        .major {
            height: 1.2266666666666666rem;
            font-size: 0;
            .stick {
                display: inline-block;
                width: 2.56rem;
                color: #fff;
                font-size: 0.4266666666666667rem;
                line-height: 1.2266666666666666rem;
                text-align: center;
                background: #fe922f;
            }
            .delete {
                display: inline-block;
                width: 2.56rem;
                color: #fff;
                font-size: 0.4266666666666667rem;
                line-height: 1.2266666666666666rem;
                text-align: center;
                background: #fe3076;
            }
        }
    }
}
</style>
