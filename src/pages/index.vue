<template>
    <div class="bg-home">
        <div class="content_box" id="searchBar" ref="app">
            <div
                class="header-content"
                :class="{
                    'live-header-content': $route.path.includes('/live'),
                }"
            >
                <div
                    class="header-box"
                    :class="{ 'live-head': $route.path.includes('/live') }"
                >
                    <div
                        class="head-left"
                        :class="{ 'head-exp-left': !getExpansion }"
                        @click="toPage('home')"
                    >
                        <img src="../assets/image/logo.png" />
                        <span v-if="getExpansion">体育直播</span>
                    </div>
                    <div class="head-right">
                        <div class="head-nav">
                            <div
                                class="li"
                                @click="toPage('home')"
                                :class="$route.name === 'home' ? 'cl' : ''"
                            >
                                首页
                            </div>
                            <div
                                class="li"
                                @click="toPage('score')"
                                :class="$route.name === 'score' ? 'cl' : ''"
                            >
                                即时比分
                            </div>

                            <div
                                class="li"
                                @click="toPage('live')"
                                :class="
                                    $route.path.includes('/live') ||
                                    $route.name === 'room'
                                        ? 'cl'
                                        : ''
                                "
                            >
                                <el-popover placement="bottom" trigger="hover">
                                    <div class="header-live-nav-box">
                                        <div class="classify-list">
                                            <div
                                                class="classify-item"
                                                @click="toPage('footerball')"
                                            >
                                                足球
                                            </div>
                                            <div
                                                class="classify-item"
                                                @click="toPage('basketball')"
                                            >
                                                篮球
                                            </div>
                                        </div>
                                        <div
                                            class="classify-all"
                                            @click="toPage('allball')"
                                        >
                                            查看全部
                                        </div>
                                    </div>
                                    <div slot="reference">
                                        <span class="h-popover"
                                            >直播
                                            <i class="el-icon-caret-bottom"></i
                                        ></span>
                                    </div>
                                </el-popover>
                            </div>

                            <div
                                class="li"
                                @click="toPage('schedule')"
                                :class="$route.name === 'schedule' ? 'cl' : ''"
                            >
                                赛程
                            </div>
                            <div
                                class="li"
                                @click="toPage('infoCenter')"
                                :class="
                                    $route.name === 'infoCenter' ||
                                    $route.name === 'basketBallDeatil' ||
                                    $route.name === 'footballDeatil'
                                        ? 'cl'
                                        : ''
                                "
                            >
                                前瞻
                            </div>
                            <div
                                class="li"
                                @click="toPage('new')"
                                :class="
                                    $route.name === 'new' ||
                                    $route.name === 'newDeatil'
                                        ? 'cl'
                                        : ''
                                "
                            >
                                资讯
                            </div>
                            <div
                                class="li"
                                @click="toPage('hotRank')"
                                :class="
                                    $route.name === 'hotRank' ||
                                    $route.name === 'hotBankDeatil' ||
                                    $route.name === 'expertsDeatil'
                                        ? 'cl'
                                        : ''
                                "
                            >
                                有料
                            </div>
                            <div
                                :class="$route.name === 'down' ? 'cl' : ''"
                                class="li"
                            >
                                <el-popover placement="bottom" trigger="hover">
                                    <div class="header-down-qr-box">
                                        <vue-qr
                                            text="dl.mzhibo.cc"
                                            :size="68"
                                            :margin="0"
                                            class="qr-img"
                                        />
                                        <span class="down-text">M体育APP</span>
                                        <el-button
                                            size="small"
                                            @click="toPage('down')"
                                            >立即下载</el-button
                                        >
                                    </div>
                                    <div slot="reference">
                                        <span
                                            class="h-popover"
                                            @click="toPage('down')"
                                            >APP下载</span
                                        >
                                    </div>
                                </el-popover>
                            </div>
                        </div>
                        <div class="head-search-login">
                            <div
                                class="nav-bar-search search-popover-container"
                            >
                                <input
                                    type="text"
                                    id="search"
                                    v-model="searchContent"
                                    maxlength="10"
                                    placeholder="房间号/房间名/主播名"
                                    autocomplete="off"
                                />
                                <i class="search-icon" @click="toSearch"></i>
                            </div>
                            <div
                                class="fx align-items justify-center live-start"
                            >
                                <img
                                    src="../assets/image/header-live-icon.png"
                                    alt=""
                                />
                                <span @click="toPage('my', 7)">开播</span>
                            </div>
                            <div class="fx align-items" v-if="!token">
                                <div class="ml-5 cursor fx align-items">
                                    <div
                                        @click="checkLogin"
                                        class="c-primary fs-14"
                                    >
                                        登录
                                    </div>
                                    <div
                                        style="
                                            border-right: 1px solid #e5e5e5;
                                            height: 10px;
                                            margin-left: 12px;
                                        "
                                    ></div>
                                    <div
                                        @click="checkReg"
                                        class="ml-10 c-primary fs-14"
                                    >
                                        注册
                                    </div>
                                </div>
                            </div>
                            <div
                                class="fx align-items"
                                v-if="token"
                                @click="toPage('my')"
                            >
                                <el-popover
                                    placement="bottom-end"
                                    trigger="hover"
                                >
                                    <div class="head-userinfo-box">
                                        <div class="info">
                                            <div class="user-avatar">
                                                <img
                                                    :src="infoData.avatarUrl"
                                                    alt=""
                                                />
                                            </div>
                                            <div class="user-name">
                                                <p class="name">
                                                    用户名：{{
                                                        infoData.userName
                                                    }}
                                                </p>
                                                <p class="grade">
                                                    等级：{{ infoData.level }}
                                                </p>
                                            </div>
                                            <div
                                                class="user-loginout"
                                                @click="loginOut"
                                            >
                                                <img
                                                    src="../assets/image/header/login-out-icon.png"
                                                    alt=""
                                                />
                                                <span>退出</span>
                                            </div>
                                        </div>
                                        <el-divider></el-divider>
                                        <div class="user-nav-list">
                                            <div
                                                class="nav-item"
                                                @click="toPage('my')"
                                            >
                                                <img
                                                    src="../assets/image/header/user-center-icon.png"
                                                    alt=""
                                                />
                                                <span>个人中心</span>
                                            </div>
                                            <div class="nav-item">
                                                <img
                                                    src="../assets/image/header/follow-icon.png"
                                                    alt=""
                                                />
                                                <span>我的关注</span>
                                            </div>
                                            <div class="nav-item">
                                                <img
                                                    src="../assets/image/header/message-icon.png"
                                                    alt=""
                                                />
                                                <span>我的消息</span>
                                            </div>
                                            <div class="nav-item">
                                                <img
                                                    src="../assets/image/header/video-living-icon.png"
                                                    alt=""
                                                />
                                                <span>我要开播</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="header-img" slot="reference">
                                        <img :src="infoData.avatarUrl" />
                                    </div>
                                </el-popover>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="right-box" v-if="$route.name !== 'room'">
                <div class="nav-item download">
                    <el-popover placement="right" trigger="hover">
                        <div class="down-qr-box">
                            <vue-qr
                                text="dl.mzhibo.cc"
                                :size="168"
                                :margin="0"
                                class="qr-img"
                            />
                        </div>
                        <div slot="reference">
                            <div class="nav-icon"></div>
                            <span>下载</span>
                        </div>
                    </el-popover>
                </div>
                <div class="nav-item start-living">
                    <div class="nav-icon"></div>
                    <span>开播</span>
                </div>
                <div class="nav-item share">
                    <div class="nav-icon"></div>
                    <span>分享</span>
                </div>
                <div class="nav-item customer">
                    <div class="nav-icon"></div>
                    <span>客服</span>
                </div>
                <div class="nav-item top" @click="goTop">
                    <div class="nav-icon"></div>
                    <span>顶部</span>
                </div>
            </div>
            <router-view v-if="active" class="index-wrapper"></router-view>
        </div>
    </div>
</template>

<script>
import { Cookie } from '../api/cookie.js';
import VueQr from 'vue-qr';
import { mapGetters, mapMutations } from 'vuex';
export default {
    name: 'index',
    provide() {
        return {
            reload: this.reload,
        };
    },
    data() {
        return {
            infoData: [],
            active: true,

            isshowRegAndLogin: false,
            name: '',
            token: '',
            searchContent: '',
        };
    },
    computed: {
        ...mapGetters(['getExpansion']),
    },
    components: {
        VueQr,
    },
    mounted() {
        this.name = this.$route.name;
        this.token = Cookie.get('token');
        if (this.token) {
            this.getInfo();
        }
        if (!Cookie.get('deviceId')) {
            let date = new Date().getTime();
            let id = date + this.randomCoding() + 'H5';
            Cookie.set('deviceId', id);
        }
    },
    methods: {
        ...mapMutations({
            setPermissionModal: 'setPermissionModal',
        }),

        down() {
            window.open('http://dl.hszhibo.live');
        },
        goTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        },
        // 生成deviceId
        randomCoding() {
            var result = [];
            let n = 3; // 这个值可以改变的，对应的生成多少个字母，根据自己需求所改
            for (var i = 0; i < n; i++) {
                // 生成一个0到25的数字
                var ranNum = Math.ceil(Math.random() * 25);
                // 大写字母'A'的ASCII是65,A~Z的ASCII码就是65 + 0~25;
                // 然后调用String.fromCharCode()传入ASCII值返回相应的字符并push进数组里
                result.push(String.fromCharCode(65 + ranNum));
            }
            return result.join('');
        },
        getInfo() {
            this.$axios('post', '/user/userInfo').then((res) => {
                if (res.code === 200) {
                    this.infoData = res.data;
                }
            });
        },

        checkLogin() {
            this.setPermissionModal(1);
        },
        checkReg() {
            this.setPermissionModal(2);
        },

        destroyed() {
            // 离开该页面需要移除这个监听的事件，不然会报错
            window.removeEventListener('scroll', this.handleScroll);
        },
        reload() {
            this.active = false;
            this.$nextTick(function () {
                this.active = true;
            });
        },
        toPage(name, num) {
            if (num) {
                this.$router.push({ name: name, query: { num: num } });
            } else {
                this.$router.push({ name: name });
            }
        },
        toSearch() {
            // console.log(this.searchContent)
            let routeData = this.$router.resolve({
                path: 'search',
                query: {
                    name: this.searchContent,
                },
            });
            window.open(routeData.href, '_blank');
        },
        toPageMy(name, num) {
            if (!Cookie.get('token')) {
                this.setPermissionModal(1);
            } else {
                this.$router.push({ name: name, query: { num: num } });
                this.reload();
            }
        },
        loginOut() {
            this.$axios('post', '/user/loginOut').then((res) => {
                if (res.code === 200) {
                    Cookie.remove('token');
                    this.token = '';
                    this.$router.push({ name: 'home' });
                }
            });
        },
    },
};
</script>

<style scoped lang="scss">
.index-wrapper {
    width: 100%;
    min-height: calc(100vh - 64px);
    min-width: 1320px;
}
.header-content {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 3px 0px 8px 0px rgba(0, 0, 0, 0.1);
    height: 64px;
    background: #fff;
    &.live-header-content {
        position: fixed;
        z-index: 99;
        left: 0;
        top: 0;
    }
}
.header-box {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 1200px;
    height: 100%;
    &.live-head {
        width: 100%;
        min-width: 1200px;
        padding-right: 30px;
        .head-left {
            width: 240px;
            height: 64px;
            border-right: 1px solid #e3e3e3;
            transition: all 0.3s;
            &.head-exp-left {
                width: 62px;
            }
        }
        .head-right {
            .head-nav {
                width: 600px;
                flex: none;
            }
        }
    }
    .head-left {
        @include flexCenter();
        cursor: pointer;
        img {
            width: 48px;
            height: 48px;
            border-radius: 16px;
            margin-right: 6px;
        }
        span {
            font-size: 21px;
            color: #333333;
            font-weight: 500;
        }
    }
    .head-right {
        flex: 1;
        @include flexBetweenCenter();
        margin-left: 60px;

        .head-nav {
            flex: 1;

            @include flexBetweenCenter();
        }
        .head-search-login {
            @include flexCenter();
        }

        .nav-bar-search {
            width: 184px;
            height: 32px;
            line-height: 32px;
            margin-right: 10px;
            border-radius: 18px;
            position: relative;
            transition: width 0.3s ease;
            margin-left: 90px;
        }
        .nav-bar-search input[type='text'] {
            caret-color: $primary-color;
            width: 100%;
            height: 100%;
            color: #666;
            font-size: 12px;
            padding-left: 18px;
            padding-right: 15px;
            background-color: #ececec;
            border-radius: 16px;
            outline: none;
        }
        .nav-bar-search .search-icon {
            width: 16px;
            height: 16px;
            position: absolute;
            right: 15px;
            top: 50%;
            transform: translateY(-50%);
            background: url('../assets/image/sousuo-icon.png') no-repeat;
            background-size: 100% 100%;
            cursor: pointer;
        }
    }
}
.bg-color1 {
    background: rgba(2, 1, 24, 0.9);
    color: white;
}
.bg-color2 {
    background: white;
    color: #4a4c5b;
}

.li {
    height: 50px;
    @include flexCenter();
    cursor: pointer;
    margin-right: 10px;
    font-size: 14px;
    color: #333;
}
.li:hover {
    color: #f8413d;
    .h-popover {
        color: #f8413d;
    }
}
.cl {
    color: #f8413d;
    .h-popover {
        color: #f8413d;
    }
}
.h-popover {
    color: #333333;
    display: block;
    height: 50px;
    @include flexCenter();
}
.bd-right {
    border-right: 1px solid white;
}

.content_box {
    background-image: url('../assets/image/common/sport-bg.png');
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    width: 100%;
    min-height: calc(100% - 64px);
}
.bg-home {
    overflow-x: hidden;
    width: 100%;
    height: 100%;
}

.header-live-nav-box {
    min-width: 150px;
    min-height: 100px;
    background: #ffffff;
    border-radius: 8px;
    @include flexColumnCenter();
    .classify-list {
        @include flexCenter();
        width: 100%;
        .classify-item {
            width: 66px;
            height: 26px;
            border-radius: 2px;
            border: 1px solid #e3e3e3;
            margin: 8px 13px;
            color: #605656;
            @include flexCenter();
            cursor: pointer;
            &:hover {
                border: 1px solid #f8413d;
                color: #f8413d;
            }
        }
    }
    .classify-all {
        margin-top: 14px;
        width: 222px;
        height: 30px;
        background: #f8413d;
        border-radius: 2px;
        color: #fff;
        font-size: 14px;
        @include flexCenter();
        cursor: pointer;
    }
}
.header-down-qr-box {
    width: 113px;
    height: 180px;
    background: #ffffff;
    border-radius: 8px;
    @include flexColumnCenter();
    .down-text {
        display: block;
        margin: 18px 0 8px;
    }
}

.down-qr-box {
    width: 283px;
    height: 407px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url('../assets/image/float-nav/down-qr.png');
    display: flex;
    justify-content: center;
    align-items: center;
    .qr-img {
        margin-top: 35px;
    }
}

.right-box {
    position: fixed;
    top: 40%;
    right: 0;
    z-index: 110;
    width: 60px;
    height: 480px;
    background: #fff;
    border-radius: 10px;
    box-shadow: 3px 0 17px 0 rgba(133, 133, 133, 0.18);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .nav-item {
        margin: 10px 0;
        cursor: pointer;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        .nav-icon {
            width: 42px;
            height: 42px;
            margin-bottom: 5px;
            background-size: cover !important;
            background-position: center !important;
            background-repeat: no-repeat !important;
        }

        span {
            color: #605656;
            font-size: 16px;
        }
    }
    .download {
        .nav-icon {
            background: url('../assets/image/float-nav/download.png');
        }

        &:hover {
            .nav-icon {
                background: url('../assets/image/float-nav/download-active.png');
            }
            span {
                color: #f8413d;
            }
        }
    }
    .start-living {
        .nav-icon {
            background: url('../assets/image/float-nav/start-living.png');
        }

        &:hover {
            .nav-icon {
                background: url('../assets/image/float-nav/start-living-active.png');
            }
            span {
                color: #f8413d;
            }
        }
    }
    .share {
        .nav-icon {
            background: url('../assets/image/float-nav/share.png');
        }

        &:hover {
            .nav-icon {
                background: url('../assets/image/float-nav/share-active.png');
            }
            span {
                color: #f8413d;
            }
        }
    }
    .customer {
        .nav-icon {
            background: url('../assets/image/float-nav/customer.png');
        }

        &:hover {
            .nav-icon {
                background: url('../assets/image/float-nav/customer-active.png');
            }
            span {
                color: #f8413d;
            }
        }
    }
    .top {
        .nav-icon {
            background: url('../assets/image/float-nav/top.png');
        }

        &:hover {
            .nav-icon {
                background: url('../assets/image/float-nav/top-active.png');
            }
            span {
                color: #f8413d;
            }
        }
    }
}

.head-userinfo-box {
    width: 320px;
    height: 170px;
    background: #ffffff;
    border-radius: 8px;
    padding: 18px;
    .info {
        width: 100%;
        @include flexBetweenCenter();
        .user-avatar {
            width: 46px;
            height: 46px;
            background: #fff0f0;
            border: 1px solid #d9d9d9;
            border-radius: 50%;
            margin-right: 16px;
            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                border-radius: 50%;
            }
        }
        .user-name {
            text-align: left;
            flex: 1;
            .name {
                font-size: 14px;
                color: #333;
                width: 90px;
                @include textEllipsis();
                font-weight: 500;
                margin-bottom: 5px;
            }
            .grade {
                font-size: 12px;
                color: #605656;
            }
        }
        .user-loginout {
            @include flexColumnCenter();
            cursor: pointer;
            img {
                width: 17px;
                height: 17px;
                margin-bottom: 3px;
            }
            span {
                font-size: 12px;
                color: #605656;
            }
        }
    }
    .user-nav-list {
        width: 100%;
        @include flexBetweenCenter();
        .nav-item {
            @include flexColumnCenter();
            cursor: pointer;
            img {
                width: 22px;
                height: 22px;
                margin-bottom: 7px;
            }
            span {
                color: #605656;
                font-size: 12px;
            }
        }
    }
}
.header-img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: #fff0f0;
    border: 1px solid #f8423e;
    @include flexCenter();
    img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        object-fit: cover;
    }
}

.userInfo-box > div {
    line-height: 40px;
    text-align: center;
    cursor: pointer;
}
.hot-img {
    position: relative;
    top: -15px;
}
.userInfo-box {
    position: fixed;
    top: 10%;
    right: 11%;
    background: white;
    border: 1px solid #efefef;
    width: 100px;
}
.all-box {
    position: absolute;
    top: 50px;
    background: #ffffff;
    border-radius: 3px;
    width: 150px;
    text-align: center;
    justify-content: center;
    color: grey;
    z-index: 9;
    margin-left: -40px;
}
.all-div {
    border: 1px solid #efefef;
    padding: 3px 10px;
    border-radius: 3px;
}
.live-start {
    width: 80px;
    height: 32px;
    background: linear-gradient(90deg, #ff8d86 0%, #f8413d 100%);
    border-radius: 16px;
    cursor: pointer;
    margin-right: 10px;
    img {
        width: 18px;
        height: auto;
        margin-right: 4px;
    }
    span {
        font-size: 14px;
        color: #fff;
    }
}
</style>
