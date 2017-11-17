<template>
    <div id="collect">
        <x-header>我的收藏夹
            <a slot="right" @click="editTag=!editTag">{{editTag === true?"完成":"编辑"}}</a>
        </x-header>
        <div class="navwrap">
            <div class="tabs">
                <a :class="showNotifyCollection?'active':''" @click="showNotifyCollection=true">通告收藏</a>
                <a :class="!showNotifyCollection?'active':''" @click="showNotifyCollection=false">名片收藏</a>
            </div>
        </div>
        <div id="collect-notice-list" v-show="showNotifyCollection">
            <ul class="collectpart">
                <li v-for="(item,index) in notifyCollection" :key="index">
                    <div class="circle" v-show="editTag" @click="singleSelect(item)">
                        <x-icon type="ios-checkmark-outline" size="0.7rem" style="fill:#FA0659" v-if="item.active"></x-icon>
                        <x-icon type="ios-circle-outline" size="0.7rem" style="fill:#919191" v-if="!item.active"></x-icon>
                    </div>
                    <a class="collectlink" href="javascript:">
                        <div class="headpart">
                            <img src="http://admin.qingmeng168.com:8081/ChatRobot/IMG/Type/XhCw6Jm_1503888510246.png">
                        </div>
                        <div class="maininfopart">
                            <div class="headline">
                                <h2 class="title">{{item.theme}}</h2>
                                <div class="tagbox">
                                    <div v-if="item.official === '官方'" class="identifytag">平台推荐</div>
                                    <div v-show="item.enough === 0" class="identifytag">满</div>
                                </div>
                            </div>
                            <div class="mainline">
                                <h2 class="price">
                                    <x-icon type="social-yen" size="0.4rem" class="icon-color"></x-icon>
                                    <span class="price2">{{item.price}}</span>
                                </h2>
                            </div>
                            <div class="otherinfo">
                                <div class="person">{{item.asex}}{{item.number}}人</div>
                                <div class="release">{{item.release}}</div>
                            </div>
                            <div class="subline">
                                <div class="startjob">
                                    <x-icon type="ios-clock-outline" size="0.4rem"></x-icon>
                                    <span v-html="getWorkTime(item.work_time)"></span>
                                </div>
                                <div class="position">
                                    <x-icon type="ios-location-outline" size="0.4rem"></x-icon>
                                    <span>{{item.site}}</span>
                                </div>
                            </div>
                        </div>
                    </a>
                </li>
            </ul>
            <div class="nocontent" v-show="notifyCollection.length == 0 ">
                <img src="../../base/img/nodata.png">
                <p>暂无数据</p>
            </div>
            <!-- 下方选择操作栏 -->
            <div class="handlebar" v-show="editTag">
                <div class="minor">
                    <div class="checkbox" @click="allSelect()">
                        <x-icon type="ios-checkmark-outline" size="0.7rem" style="fill:#FA0659" v-if="allSelected"></x-icon>
                        <x-icon type="ios-circle-outline" size="0.7rem" style="fill:#919191" v-if="!allSelected"></x-icon>
                    </div>
                    <span>全选</span>
                </div>
                <div class="major" @click="deleteNotify()">
                    <div class="delete">删除</div>
                </div>
            </div>

        </div>
        <div id="collect-card-list" v-show="!showNotifyCollection">
            <ul class="collectpart">
                <li v-for="(item,index) in cardCollection" :key="index">
                    <div class="circle" @click="singleSelect(item)" v-show="editTag">
                        <x-icon type="ios-checkmark-outline" size="0.7rem" style="fill:#FA0659" v-if="item.active"></x-icon>
                        <x-icon type="ios-circle-outline" size="0.7rem" style="fill:#919191" v-if="!item.active"></x-icon>
                    </div>
                    <a href="javascript:;">
                        <div class="img">
                            <img src="https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=3728319125,4209708385&fm=173&s=AD0FA05401412B517CC27A850300E08C&w=218&h=146&img.JPEG" alt="">
                        </div>
                        <div class="baseinfo">
                            <span class="name">{{item.name}}</span>
                            <span class="area">{{item.city}}</span>
                        </div>
                        <div class="figureinfo">
                            <span class="height">{{item.stature}}cm</span>
                            <span class="weight">{{item.weight}}kg</span>
                            <span class="bwh">{{item.surround}}</span>
                        </div>
                        <div class="typetag">
                            <span class="btn" v-for="(key,index) in item.workJob" :key="index">{{key}}</span>
                        </div>
                    </a>
                </li>
            </ul>
            <div class="nocontent" v-show="cardCollection.length == 0">
                <img src="../../base/img/nodata.png">
                <p>暂无数据</p>
            </div>
            <!-- 下方选择操作栏 -->
            <div class="handlebar" v-show="editTag">
                <div class="minor">
                    <div class="checkbox" @click="allSelect()">
                        <x-icon type="ios-checkmark-outline" size="0.7rem" style="fill:#FA0659" v-if="allSelected"></x-icon>
                        <x-icon type="ios-circle-outline" size="0.7rem" style="fill:#919191" v-if="!allSelected"></x-icon>
                    </div>
                    <span>全选</span>
                </div>
                <div class="major" @click="deleteCard()">
                    <div class="delete">删除</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {
    XHeader
} from 'vux'
import qs from 'qs'
export default {
    components: {
        XHeader
    },
    data() {
        return {
            showNotifyCollection: true,//是否显示通告收藏，作为收藏tab切换的状态
            editTag: false,    //是否可以编辑
            notifyCollection: [], //通告收藏
            cardCollection: [],  //名片收藏
            allSelected: false  //全选
        }
    },
    created() {
        this.getNotifyCollect()
        this.getCardCollect()
    },
    methods: {
        //获取通告收藏数据
        getNotifyCollect() {
            this.$http.post('/model/Model/AnnunciateCollect')
                .then((res) => {
                    console.log(res)
                    res.data.map(item => {
                        item.release = this.formatTime(item.deadline)
                        item.active = false
                    })
                    this.notifyCollection = res.data
                })
        },
        // 计算开工日期
        getWorkTime(val) {
            let month = val.split(' ')[0].split('-')[1]
            let day = val.split(' ')[0].split('-')[2]
            return `${month}月${day}日开工`
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
        //全选
        allSelect() {
            this.allSelected = !this.allSelected
            if (this.showNotifyCollection) {
                if (this.allSelected) {
                    this.notifyCollection.map((item) => {
                        item.active = true
                    })
                } else {
                    this.notifyCollection.map((item) => {
                        item.active = false
                    })
                }
            } else {
                if (this.allSelected) {
                    this.cardCollection.map((item) => {
                        item.active = true
                    })
                } else {
                    this.cardCollection.map((item) => {
                        item.active = false
                    })
                }
            }


        },
        //单选
        singleSelect(item) {
            item.active = !item.active
            if (this.showNotifyCollection) {
                let ifAllSelect = this.notifyCollection.every((item) => {
                    return item.active === true
                })
                this.allSelected = (ifAllSelect === true) ? true : false
            } else {
                let ifAllSelect = this.cardCollection.every((item) => {
                    return item.active === true
                })
                this.allSelected = (ifAllSelect === true) ? true : false
            }

        },
        //点击删除收藏的通告
        deleteNotify() {
            let deleteOpt = this.notifyCollection.filter(item => {
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
                        _this.$http.post('/model/Model/DelectCollect', qs.stringify({
                            type: 'notify',
                            vid: newArr.join(',')
                        })).then(res => {
                            if (res.data.result === 'success') {
                                _this.getNotifyCollect()
                                _this.editTag = false
                            }
                        })
                    }
                })
            }
        },
        //获取名片收藏数据
        getCardCollect() {
            this.$http.post('/model/Work/WorkMo')
                .then((res) => {
                    console.log(res)
                    res.data.map(item => {
                        let tagNum = item.workJob.split(' / ').length
                        if (tagNum > 3) {
                            item.workJob = item.workJob.split(' / ').slice(0, 3)
                        } else {
                            item.workJob = item.workJob.split(' / ').slice(0, -1)
                        }
                        item.active = false
                    })
                    this.cardCollection = res.data
                })
        },
        //点击删除收藏的名片
        deleteCard() {
            let deleteOpt = this.cardCollection.filter(item => {
                return item.active == 1
            })
            if (deleteOpt.length > 0) {
                let _this = this
                this.$vux.confirm.show({
                    title: '确定删除选中名片？',
                    onConfirm() {
                        let newArr = []
                        deleteOpt.map(item => {
                            newArr.push(item.id)
                        })
                        _this.$http.post('/model/Work/MultipleChoiceDelete', qs.stringify({
                            id: newArr.join(',')
                        })).then(res => {
                            if (res.data.result === 'success') {
                                _this.getCardCollect()
                                _this.editTag = false
                            }
                        })
                    }
                })
            }
        }
    }
}

</script>
<style lang="less">
.navwrap {
    height: 1.44rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    margin-bottom: 0.1867rem;
    .tabs {
        display: flex;
        justify-content: center;
        width: 5.0133rem;
        height: 0.8533rem;
        border: 0.0267rem solid #ff2f77;
        border-radius: 0.1333rem;
        a {
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 0.3467rem;
            width: 100%;
            color: #ff2f77;
            &.active {
                background-color: #fe3076;
                color: #fff;
            }
        }
    }
}

.vux-x-dialog {
    .weui-dialog {
        .weui-dialog__hd {
            .weui-dialog__title {
                font-size: 0.48rem !important;
            }
        }
        .weui-dialog__bd {
            padding: 0 1.6em 0.8em;
            min-height: 1.0667rem !important;
            font-size: 0.4rem !important;
        }
        .weui-dialog__ft {
            line-height: 1.28rem !important;
            font-size: 0.48rem !important;
        }
    }
}

#collect-notice-list {
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
                            max-width: 4.2rem;
                            text-overflow: ellipsis;
                            margin-right: 0.267rem;
                        }
                        .tagbox {
                            flex: 0 0 auto;
                            display: flex;
                            flex-direction: column;
                            align-items: flex-end;
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
                        .person,
                        .release {
                            font-size: 0.373rem;
                            color: #929291;
                        }
                    }
                    .subline {
                        display: flex;
                        justify-content: space-between;
                        margin-top: 0.267rem;
                        .startjob,
                        .position {
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
    .nocontent {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        p {
            font-size: 0.3733rem;
            color: #919191;
            margin-top: 0.2667rem;
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
                fill: #f34847;
            }
            .icon-quiet {
                fill: #919191;
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
}

#collect-card-list {
    ul {
        width: 100%;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        align-items: center;
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
                flex-direction: column;
                justify-content: center;
                align-items: center;
                position: relative;
                width: 100%; //图片那一栏
                .img {
                    display: flex;
                    justify-content: center;
                    height: 4.95rem;
                    width: 4.95rem;
                    overflow: hidden;
                    img {
                        display: block;
                        height: 100%;
                    }
                } //名字地区那一栏
                .baseinfo {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    height: 0.8rem;
                    width: 100%;
                    color: #2c2a2a;
                    span.name {
                        margin-left: 0.35rem;
                        font-size: 0.3733rem;
                    }
                    span.area {
                        margin-right: 0.3rem;
                        font-size: 0.3733rem;
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
                        font-size: 0.3733rem;
                    }
                    span.weight {
                        // margin-left: 0.3467rem;
                        font-size: 0.3733rem;
                    }
                    span.bwh {
                        margin-right: 0.3rem;
                        font-size: 0.3733rem;
                    }
                } //点赞那一栏
                .wrap {
                    display: flex;
                    align-items: center;
                    position: absolute;
                    top: 0.175rem;
                    left: 0.1rem;
                    width: 100%;
                    .seen {
                        margin-right: 0.4533rem;
                    }
                    .seen,
                    .like {
                        display: flex; //justify-content:flex-start;
                        align-items: center;
                        img {
                            display: block;
                            width: 0.4267rem;
                            height: 0.32rem;
                            margin-left: 0.1rem;
                        }
                        span {
                            margin-left: 0.1rem;
                            font-size: 0.3733rem;
                            color: #fff;
                        }
                    }
                }
                .typetag {
                    display: flex;
                    position: absolute;
                    top: 4.35rem;
                    left: 0.1rem;
                    .btn {
                        border: 0.0267rem solid #fff;
                        border-radius: 0.2667rem;
                        padding: 0.068rem 0.16rem;
                        font-size: 0.32rem;
                        margin-right: 0.1rem;
                        color: #fff;
                    }
                }
            }
        }
    }
    .nocontent {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        p {
            font-size: 0.3733rem;
            color: #919191;
            margin-top: 0.2667rem;
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
                fill: #f34847;
            }
            .icon-quiet {
                fill: #919191;
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
}
</style>
