<template>
    <div class="live-box">
        <div class="live-left" :class="{ 'live-exp-left': !getExpansion }">
            <div class="nocollapse-box" v-if="getExpansion">
                <div class="left-nav-box">
                    <div class="slide-nav">
                        <div
                            class="slide-nav-item"
                            @click="toPage('/live/allball')"
                        >
                            <img
                                src="../../assets/image/live/live-nav-icon.png"
                                alt=""
                            />
                            <span>全部直播</span>
                        </div>
                        <div class="slide-nav-item"  @click="toPage('/my/myAttention')">
                            <img
                                src="../../assets/image/live/follow-nav-icon.png"
                                alt=""
                            />
                            <span>我的关注</span>
                        </div>
                    </div>
                    <div class="classify-nav">
                        <div class="classify-text">
                            <div class="line"></div>
                            <span>直播分类</span>
                        </div>
                        <div class="classify-list">
                            <div
                                class="classify-list-cover"
                                v-for="item in classifyList"
                                :key="item.id"
                            >
                                <div
                                    class="classify-list-item"
                                    :class="{
                                        active: $route.path.includes(item.path),
                                    }"
                                    @click="toPage(item.path)"
                                >
                                    {{ item.name }}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="start-living-nav">
                        <div class="down-app" @click="toPage('/down', true)">
                            <img
                                src="../../assets/image/live/phone-icon.png"
                                alt=""
                            />
                            <span>下载APP</span>
                        </div>
                        <div class="my-living" @click="toPage('/my/myAnchor')">
                            <img
                                src="../../assets/image/live/audio-icon.png"
                                alt=""
                            />
                            <span>我要开播</span>
                        </div>
                        <div class="live-link">
                            <span>直播指导</span>
                            <div class="line"></div>
                            <span>客服支持</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="nocollapse-exp-box" v-else>
                <div class="slide-nav">
                    <div
                        class="slide-nav-item"
                        @click="toPage('/live/allball')"
                    >
                        <img
                            src="../../assets/image/live/live-nav-icon.png"
                            alt=""
                        />
                        <span>直播</span>
                    </div>
                    <div class="slide-nav-item">
                        <img
                            src="../../assets/image/live/follow-nav-icon.png"
                            alt=""
                        />
                        <span>关注</span>
                    </div>
                </div>
                <div class="down-app-nav">
                    <div class="down-app" @click="toPage('/down', true)">
                        <img
                            src="../../assets/image/live/phone2-icon.png"
                            alt=""
                        />
                        <span>下载</span>
                    </div>
                </div>
            </div>

            <div class="flexible-box" @click="setExpansion(!getExpansion)">
                <i class="el-icon-arrow-left" v-if="getExpansion"></i>
                <i class="el-icon-arrow-right" v-else></i>
            </div>
        </div>

        <div class="live-right" :class="{ 'live-exp-right': !getExpansion }">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex';

export default {
    name: 'live',
    data() {
        return {
            classifyList: [
                {
                    id: 1,
                    name: '热门',
                    path: '/live/hotball',
                },
                {
                    id: 2,
                    name: '全部',
                    path: '/live/allball',
                },
                {
                    id: 3,
                    name: '足球',
                    path: '/live/footerball',
                },
                {
                    id: 4,
                    name: '篮球',
                    path: '/live/basketball',
                },
            ],
        };
    },
    components: {},
    watch: {},
    mounted() {},
    computed: {
        ...mapGetters(['getExpansion']),
    },
    methods: {
        ...mapMutations({
            setExpansion: 'setExpansion',
        }),
        toPage(path, isOpen = false) {
            if (isOpen) {
                let routeData = this.$router.resolve({
                    path: path,
                });
                window.open(routeData.href, '_blank');
            } else {
                this.$router.push(path);
            }
        },
    },
};
</script>

<style scoped lang="scss">
.live-box {
    margin-top: 64px;

    .live-left {
        position: fixed;
        left: 0;
        top: 64px;
        bottom: 0;
        background: #fff;
        border-right: 1px solid #e3e3e3;
        border-top: 1px solid #e3e3e3;
        width: 240px;
        // overflow-y: auto;
        @include flexColumnStart();
        transition: all 0.3s;
        &.live-exp-left {
            width: 62px;
        }
        .nocollapse-box {
            width: 100%;
            height: 100%;
            .left-nav-box {
                @include flexColumnStart();
                width: 100%;
                height: 100%;

                .slide-nav {
                    width: 100%;
                    height: 130px;
                    padding: 25px;
                    border-bottom: 1px solid #e3e3e3;
                    @include flexColumnCenter();
                    .slide-nav-item {
                        width: 100%;
                        @include flexStartCenter();
                        margin: 14px 0;
                        cursor: pointer;
                        img {
                            width: 18px;
                            height: 18px;
                            margin-right: 17px;
                        }
                        span {
                            font-size: 12px;
                            color: $primary-color;
                        }
                    }
                }
            }
            .classify-nav {
                width: 100%;
                flex: 1;
                .classify-text {
                    @include flexStartCenter();
                    width: 100%;
                    padding-left: 25px;
                    margin-top: 25px;
                    .line {
                        width: 2px;
                        height: 16px;
                        background: $primary-color;
                        margin-right: 10px;
                    }
                    span {
                        font-size: 16px;
                        font-weight: 600;
                        color: #333;
                    }
                }
                .classify-list {
                    width: 100%;
                    @include flexStartCenterWrap();
                    margin-top: 20px;
                    .classify-list-cover {
                        width: 33.33%;
                        @include flexCenter();
                        margin-bottom: 10px;
                        .classify-list-item {
                            width: 60px;
                            height: 24px;
                            background: #fff4f3;
                            border-radius: 2px;
                            @include flexCenter();
                            font-size: 12px;
                            color: #8d7777;
                            cursor: pointer;
                            &.active {
                                background: #f8413d;
                                color: #fff;
                            }
                        }
                    }
                }
            }
            .start-living-nav {
                border-top: 1px solid #e3e3e3;
                width: 100%;
                padding: 25px;
                .down-app {
                    width: 188px;
                    height: 32px;
                    background: linear-gradient(
                        270deg,
                        #aea8a7 0%,
                        #dbd6d6 100%
                    );
                    border-radius: 2px;
                    @include flexCenter();
                    cursor: pointer;
                    img {
                        width: 12px;
                        height: 12px;
                        margin-right: 10px;
                    }
                    span {
                        color: #ffffff;
                        font-size: 12px;
                    }
                }
                .my-living {
                    width: 188px;
                    height: 32px;
                    background: linear-gradient(
                        270deg,
                        #f8413d 0%,
                        #ff7970 100%
                    );
                    border-radius: 2px;
                    @include flexCenter();
                    margin: 12px 0;
                    cursor: pointer;
                    img {
                        width: 12px;
                        height: 12px;
                        margin-right: 10px;
                    }
                    span {
                        color: #ffffff;
                        font-size: 12px;
                    }
                }
                .live-link {
                    width: 100%;
                    @include flexCenter();
                    span {
                        color: #605656;
                        font-size: 12px;
                        cursor: pointer;
                    }
                    .line {
                        width: 2px;
                        height: 12px;
                        background: #605656;
                        margin: 0 29px;
                    }
                }
            }
        }
        .nocollapse-exp-box {
            width: 100%;
            height: 100%;
            @include flexColumnStart();
            .slide-nav {
                width: 100%;
                height: 100%;
                @include flexColumnStart();
                margin-top: 20px;
                flex: 1;
                .slide-nav-item {
                    width: 100%;
                    @include flexColumnCenter();
                    margin-bottom: 32px;
                    cursor: pointer;
                    img {
                        width: 18px;
                        height: 18px;
                        margin-bottom: 5px;
                    }
                    span {
                        font-size: 12px;
                        color: $primary-color;
                    }
                }
            }
            .down-app-nav {
                width: 100%;
                height: 150px;
                border-top: 1px solid #e3e3e3;
                @include flexColumnStart();
                .down-app {
                    margin-top: 14px;
                    @include flexColumnCenter();
                    cursor: pointer;
                    img {
                        width: 12px;
                        height: 12px;
                        margin-bottom: 6px;
                    }
                    span {
                        color: #605656;
                        font-size: 12px;
                    }
                }
            }
        }
    }
    .flexible-box {
        position: absolute;
        top: 50%;
        right: -23px;
        z-index: 1;
        transform: translateY(-50%);
        width: 23px;
        height: 78px;
        background: #ffffff;
        border-radius: 0px 12px 12px 0px;
        border: 1px solid #d8d8d8;
        cursor: pointer;

        @include flexCenter();

        i {
            color: #d8d8d8;
            font-size: 16px;
        }
    }
    .live-right {
        width: 100%;
        padding-left: 240px;
        padding-bottom: 50px;
        min-height: 100%;
        &.live-exp-right {
            padding-left: 62px;
        }
    }
}
</style>
