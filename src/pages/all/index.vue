<template>
    <div>
        <div class="fx all-box">
            <div class="all-left">
                <div class="all-li-div">
                    <div
                        class="all-li"
                        @click="toMy"
                        :class="isNum === 4 ? 'nav' : ''"
                    >
                        <div>
                            <img
                                src="../../assets/image/all-icon2.png"
                                v-if="isNum !== 4"
                            />
                            <img
                                src="../../assets/image/all-dj-icon4.png"
                                v-if="isNum === 4"
                            />
                        </div>
                        <div class="mt-5">关注</div>
                    </div>
                    <div
                        class="all-li"
                        @click="check(-1, '全部')"
                        :class="isNum === -1 ? 'nav' : ''"
                    >
                        <div>
                            <img
                                src="../../assets/image/all-icon5.png"
                                v-if="isNum !== -1"
                            />
                            <img
                                src="../../assets/image/add-dj-icon1.png"
                                v-if="isNum === -1"
                            />
                        </div>
                        <div class="mt-5">全部</div>
                    </div>
                    <div
                        class="all-li"
                        @click="check(0, '足球')"
                        :class="isNum === 0 ? 'nav' : ''"
                    >
                        <div>
                            <img
                                src="../../assets/image/all-icon4.png"
                                v-if="isNum !== 0"
                            />
                            <img
                                src="../../assets/image/all-dj-icon2.png"
                                v-if="isNum === 0"
                            />
                        </div>
                        <div class="mt-5">足球</div>
                    </div>
                    <div
                        class="all-li"
                        @click="check(1, '篮球')"
                        :class="isNum === 1 ? 'nav' : ''"
                    >
                        <div>
                            <img
                                src="../../assets/image/all-icon3.png"
                                v-if="isNum !== 1"
                            />
                            <img
                                src="../../assets/image/all-dj-icon3.png"
                                v-if="isNum === 1"
                            />
                        </div>
                        <div class="mt-5">篮球</div>
                    </div>
                    <div
                        class="all-li"
                        @click="check(2, '其他')"
                        :class="isNum === 2 ? 'nav' : ''"
                    >
                        <div>
                            <img
                                src="../../assets/image/all-icon1.png"
                                v-if="isNum !== 2"
                            />
                            <img
                                src="../../assets/image/all-dj-icon1.png"
                                v-if="isNum === 2"
                            />
                        </div>
                        <div class="mt-5">其他</div>
                    </div>
                </div>
            </div>
            <div class="all-right">
                <div style="width: 100%">
                    <div class="tagName fx align-items" v-if="hotMatchList[0]">
                        赛事概况
                    </div>
                    <!--          style="width: 1300px;margin-left: -60px;"-->
                    <div style="width: 100%; margin-left: -60px">
                        <div class="out_container mt-30" v-if="hotMatchList[0]">
                            <div class="in_container mt-20 match-swpier">
                                <div class="swiper-wrapper">
                                    <div
                                        class="swiper-slide swiper-slide-match"
                                        v-for="(item, index) in hotMatchList[0]
                                            .matchInfos"
                                        :key="index"
                                        v-if="item.status !== 4"
                                    >
                                        <div
                                            class="fx justify-between matchShortName"
                                        >
                                            <div class="c-9">
                                                {{ item.matchShortName }}
                                            </div>
                                            <div>直播间 ></div>
                                        </div>
                                        <div
                                            class="fx align-items justify-between mt-24"
                                        >
                                            <div class="ta-c">
                                                <div>
                                                    <img
                                                        :src="
                                                            item.homeTeam
                                                                .teamIcon
                                                        "
                                                        style="
                                                            width: 40px;
                                                            height: 40px;
                                                        "
                                                    />
                                                </div>
                                                <div
                                                    class="text-overflow mt-10"
                                                >
                                                    {{ item.homeTeam.teamName }}
                                                </div>
                                            </div>
                                            <div class="ta-c">
                                                <div class="mt-10">
                                                    今天{{ item.matchTime }}
                                                </div>
                                                <div
                                                    class="live-btn"
                                                    v-if="item.status === 1"
                                                >
                                                    <div class="fx align-items">
                                                        <div class="mr-5">
                                                            <img
                                                                src="../../assets/image/zhibo.gif"
                                                                width="13px"
                                                            />
                                                        </div>
                                                        <div
                                                            style="
                                                                padding-top: 2px;
                                                            "
                                                        >
                                                            直播中
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    class="yud-btn"
                                                    v-if="
                                                        item.status === 2 &&
                                                        !item.subscribe
                                                    "
                                                    @click="
                                                        getAppoinment(item.id)
                                                    "
                                                >
                                                    <div class="fx">
                                                        <div class="mr-5">
                                                            <img
                                                                src="../../assets/image/yuding.png"
                                                            />
                                                        </div>
                                                        <div
                                                            style="
                                                                padding-top: 2px;
                                                            "
                                                        >
                                                            预定
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    class="yud-btn2"
                                                    v-if="
                                                        item.status === 2 &&
                                                        item.subscribe
                                                    "
                                                    @click="
                                                        userCancelReserveMatch(
                                                            item.id,
                                                        )
                                                    "
                                                >
                                                    已预定
                                                </div>
                                                <div
                                                    class="over-btn"
                                                    v-if="item.status === 3"
                                                >
                                                    已结束
                                                </div>
                                            </div>
                                            <div class="ta-c">
                                                <div>
                                                    <img
                                                        :src="
                                                            item.awayTeam
                                                                .teamIcon
                                                        "
                                                        style="
                                                            width: 40px;
                                                            height: 40px;
                                                        "
                                                    />
                                                </div>
                                                <div
                                                    class="mt-10 text-overflow"
                                                >
                                                    {{ item.awayTeam.teamName }}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    class="swiper-button-prev swiper_btn"
                                ></div>
                                <div
                                    class="swiper-button-next swiper_btn"
                                ></div>
                            </div>
                        </div>
                    </div>
                    <div class="all">
                        <div class="tagName fx align-items" v-if="isNum === -1">
                            热门直播
                        </div>
                        <div
                            class="fx flex-wrap"
                            v-if="hotList.length !== 0 && isNum === -1"
                        >
                            <div
                                class="hot-content"
                                v-for="(item, index) in hotList"
                                :key="index"
                                @click="toPage('room', item.roomId)"
                            >
                                <div class="fx justify-between jian">
                                    <div v-if="item.recommend === 1">
                                        <img
                                            src="../../assets/image/jian.png"
                                            width="40px"
                                        />
                                    </div>
                                    <div
                                        class="living"
                                        v-if="item.roomStatus === 1"
                                    >
                                        <div>
                                            <img
                                                src="../../assets/image/living.gif"
                                                width="10px"
                                            />
                                        </div>
                                        <div class="live-gif">直播中</div>
                                    </div>
                                </div>
                                <div
                                    class="matchCutImg"
                                    v-lazy:background-image="item.matchCutImg"
                                >
                                    <img
                                        src="../../assets/image/icon-open@2x.png"
                                        width="25px"
                                        class="imgvideo"
                                    />
                                </div>
                                <div class="bg-fff">
                                    <div class="roomName">
                                        {{ item.roomName }}
                                    </div>
                                    <div class="fx align-items justify-between">
                                        <div class="fs-12 c-9">
                                            <img
                                                :src="item.anchorAvatar"
                                                class="anchorAvatar"
                                            />{{ item.anchorName }}
                                        </div>
                                        <div class="fs-12 c-9">
                                            <img
                                                src="../../assets/image/icon-hot-gray.png"
                                                width="12px"
                                            />{{ item.hotNum }}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tagName fx align-items" id="ballList">
                            <div>
                                <img
                                    style="
                                        width: 25px;
                                        margin-right: 10px;
                                        margin-top: -8px;
                                    "
                                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAwFBMVEUAAADawqm7k1HXvZ7jxqrbwqm/mVy6lFG8lFPEoGrawqnBmlTVupnawqnTppy7k1HGo27IpXS6k1C6k1Hawqrawam7klG/m1K9llbbwqq7k1HawqrMwo+7k1G7k1G6k1HbwqrZwqjZwKjdxqzFm1zBnGS7k1C7klDMq37Nr4XTtpPawKS8lVO7k1C7k1G7k1C7k1O/ml26k1DQs427klHIp3nDoGrTuJTBnGW7lFHVuZjIp3i8lVK+klG+llW6klAYlJGdAAAAP3RSTlMAu/3BEm7zf/zmpxjEkgbz4t7IvbOgZRz4s3JgBfnwtrGNNSEP7e3a1tLIvpXm0XtH6uLMwLqunYuKbWJULye83VvpAAABsElEQVRIx9WV2XKCMBSGzwGhKKKCgoiI+77U7nvz/m/Vg0mRKdJJbjrT/8LhJN9njBc/kI9t56d4Yoz9Tsd/MiYxXEykaVE2VIwRptFNZuojo3JJWDA2+OSPjX4PeaqMsRVir98oCgfaG/Kvd1Bko9HiGilO8ZB3RjnSw7SG3zFpyeSPtWnBuKfdZQyVM79mlDsURuGMj/T8qOFk/DakhWo2OoV77Gg/ecUsLs1W/Tz3fwp2QkQr269bNLp4Tq/woyIitA3m/tJwi7kYJyrwmkwilrnCUQxgt5l05voEgHgFw4CAKeUBPPocdiGLj2XR54TeQHrfHA8dLDfSmwOjgJyAKVsQfFVhrCoYqsKbGVbrKsKSZo0UWYFm0+KKtOBuXa7ICo+IulDkhCsHSWlppLR0KYFKIFPWOb5WJvCa4UqY46elAhWZEEQniSIrE3hVni5ubjjNq/IXAezdgApgJXBexqWCwPfPvO7Hou7LhdkL4YuoUHNlwiEh/HoGICfc0pxwXE44LvdXhMsKIv9M4EUmlS6hTVGVUvyQUE+1jAPFum+D2gulbau8sppeAH+RL3+JuP908eflAAAAAElFTkSuQmCC"
                                />
                            </div>
                            <div>{{ tagName }}</div>
                        </div>
                        <div class="fx flex-wrap" v-if="ballList.length !== 0">
                            <div
                                class="hot-content"
                                v-for="(item, index) in ballList"
                                :key="index"
                                @click="toPage('room', item.roomId)"
                            >
                                <div class="fx justify-between jian">
                                    <div v-if="item.recommend === 1">
                                        <img
                                            src="../../assets/image/jian.png"
                                            width="40px"
                                        />
                                    </div>
                                    <div
                                        class="living"
                                        v-if="item.roomStatus === 1"
                                    >
                                        <div>
                                            <img
                                                src="../../assets/image/living.gif"
                                                width="10px"
                                            />
                                        </div>
                                        <div class="live-gif">直播中</div>
                                    </div>
                                </div>
                                <div
                                    class="matchCutImg"
                                    v-lazy:background-image="item.matchCutImg"
                                >
                                    <img
                                        src="../../assets/image/icon-open@2x.png"
                                        width="25px"
                                        class="imgvideo"
                                    />
                                </div>
                                <div class="bg-fff">
                                    <div class="roomName">
                                        {{ item.roomName }}
                                    </div>
                                    <div class="fx align-items justify-between">
                                        <div class="fs-12 c-9">
                                            <img
                                                :src="item.anchorAvatar"
                                                class="anchorAvatar"
                                            />{{ item.anchorName }}
                                        </div>
                                        <div class="fs-12 c-9">
                                            <img
                                                src="../../assets/image/icon-hot-gray.png"
                                                width="12px"
                                            />{{ item.hotNum }}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            class="fx align-items justify-center"
                            style="margin-top: 10%; margin-bottom: 50px"
                            v-if="ballList.length === 0"
                        >
                            <div>
                                <div>
                                    <img src="../../assets/image/null.png" />
                                </div>
                                <div class="ta-c mt-10">列表空空如也!</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <v-reg-login
            :isShow="isShow"
            @dialogVisibleEvent="showDialog"
        ></v-reg-login>
    </div>
</template>

<script>
import Swiper from 'swiper';
import { Cookie } from '../../api/cookie';
import RegandLogin from '../../compent/regAndLogin/index.vue';
export default {
    name: 'index',
    data() {
        return {
            isNum: -1,
            hotMatchList: [],
            isShow: 0,
            ballList: [],
            hotList: [],
            isshowId: '',
            tagName: '全部',
        };
    },
    components: { 'v-reg-login': RegandLogin },
    mounted() {
        console.log(this.$route.query.num);
        if (this.$route.query.num && this.$route.query.num !== '') {
            this.check(parseInt(this.$route.query.num), this.$route.query.type);
            console.log('1');
        } else {
            this.getBall();
            console.log('2');
        }
        this.getList();
        this.getMatch();
    },
    methods: {
        showDialog(visible) {
            this.isShow = visible;
        },
        // 移入
        mouseover(id) {
            clearTimeout(this.timer);
            this.isshowId = id;
        },
        // 移出
        mouseleave() {
            this.timer = setTimeout(() => {
                this.isshowId = '';
            }, 100);
        },
        check(num, name) {
            this.isNum = num;
            this.tagName = name;
            if (num === -1) {
                this.getBall();
            } else {
                this.getBall(num);
            }
            document.querySelector('#ballList').scrollIntoView();
        },
        toPage(name, id) {
            let routeData = this.$router.resolve({
                path: name,
                query: {
                    id: id,
                },
            });
            window.open(routeData.href, '_blank');
        },
        toMy() {
            this.isNum = 4;
            if (Cookie.get('token')) {
                this.$router.replace({ name: 'my', query: { num: 4 } });
            } else {
                this.isShow = 1;
            }
        },
        getMatch() {
            this.$axios('post', '/live/getTopMatchList').then((res) => {
                if (res.code === 200) {
                    this.hotMatchList = res.data.matchLists;
                    this.$nextTick(() => {
                        // eslint-disable-next-line no-unused-vars
                        var swiper = new Swiper('.match-swpier', {
                            slidesPerView: 4,
                            spaceBetween: 10,
                            slidesPerGroup: 1,
                            loop: true,
                            autoplay: true,
                            loopFillGroupWithBlank: true,
                            pagination: {
                                el: '.swiper-pagination',
                                clickable: true,
                            },
                            navigation: {
                                nextEl: '.swiper-button-next',
                                prevEl: '.swiper-button-prev',
                            },
                        });
                    });
                }
            });
        },
        getList() {
            let param = {
                pageNum: 1,
                pageSize: 60,
            };
            this.$axios('post', '/live/getHotLiveList', param).then((res) => {
                if (res.code === 200) {
                    this.hotList = res.data.dataList;
                }
            });
        },
        getBall(type) {
            let param = {
                pageNum: 1,
                pageSize: 30,
                type: type,
            };
            this.$axios('post', '/live/getTopLiveList', param).then((res) => {
                if (res.code === 200) {
                    this.ballList = res.data.dataList;
                }
            });
        },
        // 用户预约
        getAppoinment(id) {
            if (Cookie.get('token')) {
                let param = {
                    id: id,
                };
                this.$axios('post', '/match/userReserveMatch', param).then(
                    (res) => {
                        if (res.code === 200) {
                            this.$message({
                                type: 'success',
                                message: '预约成功！',
                            });
                            this.getMatch();
                        }
                    },
                );
            } else {
                this.isShow = 1;
            }
        },
        // 取消预约
        userCancelReserveMatch(id) {
            let param = {
                id: id,
            };
            this.$axios('post', '/match/userCancelReserveMatch', param).then(
                (res) => {
                    if (res.code === 200) {
                        this.$message({
                            type: 'success',
                            message: '已取消预约！',
                        });
                        this.getMatch();
                    }
                },
            );
        },
    },
};
</script>

<style scoped>
.all {
    /*width: 1200px;*/
    min-height: 100vh;
}
.all-box {
    background: #f9fbff !important;
    width: 100%;
}
.all-left {
    width: 90px;
    min-height: 100vh;
    background: #1b1d2e;
    padding-top: 40px;
    display: flex;
    justify-content: center;
}
.all-li-div {
    position: fixed;
}
.all-right {
    width: 95%;
    display: flex;
    justify-content: center;
    padding: 0px 4%;
}
.bg-fff {
    background: white;
    padding: 8px 10px;
    margin-top: 1px;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
}
.roomName {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.text-overflow {
    width: 100px;
}
.mask-box {
    /*background-color: rgba(0,0,0,.6);*/
    height: 160px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    padding-left: 6.4%;
    padding-right: 6.4%;
    z-index: 1;
}
.hot-content {
    width: 15.5%;
    margin: 10px 5px;
    z-index: 9;
}
.hot-content:hover {
    /*margin-top: -0.5px;*/
    /*transition: transform .5s*/
    transform: translate(0, -1px);
    -webkit-transform: translate(0, -1px);
    -moz-transform: translate(0, -1px);
    -o-transform: translate(0, -1px);
    -ms-transform: translate(0, -1px);
}
.anchorAvatar {
    width: 26px;
    height: 26px;
    border-radius: 100%;
    margin-right: 5px;
}
.all-li {
    color: #ffffff;
    font-weight: 700;
    width: 100%;
    height: 50px;
    text-align: center;
    cursor: pointer;
    margin-bottom: 20px;
}
.out_container {
    /*width: 100%;*/
    height: 100%;
    position: relative;
}
.in_container {
    width: 90%;
    height: 100%;
    margin: 0 auto;
    overflow: hidden;
    border: none !important;
}

.nav {
    color: #deaf65;
    font-weight: 400;
}
.tagName {
    font-weight: 400;
    color: #333333;
    font-size: 24px;
    margin-bottom: -10px;
    margin-top: 30px;
}
.living {
    background: #fa3434;
    border-radius: 2px;
    vertical-align: middle;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 12px;
    padding: 0 5px;
}
.jian {
    position: relative;
    top: 25px;
    padding-left: 10px;
    padding-right: 10px;
}
.live-gif {
    margin-top: 3px;
    margin-left: 2px;
}
.swiper-slide-match {
    background: white;
    border: 1px solid #e6eaf3;
    border-radius: 6px;
    font-weight: 400;
    height: 160px;
}
.swiper-button-prev {
    background-image: url('../../assets/image/xiayiye.png');
    background-size: 100% 100%;
    margin-left: 39px;
}
.swiper-button-next {
    background-image: url('../../assets/image/shangyiye.png');
    background-size: 100% 100%;
    margin-right: 39px;
}
.swiper_btn {
    border: none;
    width: 30px;
    height: 30px;
}
.swiper-button-prev:after,
.swiper-button-next:after {
    display: none;
}
.matchShortName {
    background: #f2f6ff;
    border-radius: 6px 6px 0px 0px;
    padding: 10px 20px;
    color: #ff5338;
}
.live-btn {
    width: 80px;
    height: 28px;
    background: #ff5338 linear-gradient(132deg, #ebcbab 0%, #dbb170 100%);
    border-radius: 3px;
    font-weight: 400;
    color: #693d13;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    cursor: pointer;
}
.yud-btn {
    width: 80px;
    height: 28px;
    background: #ffffff;
    border-radius: 2px;
    border: 1px solid #caa05f;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    color: #caa05f;
    cursor: pointer;
}
.yud-btn2 {
    width: 80px;
    height: 28px;
    background: #ff5338 linear-gradient(132deg, #ebcbab 0%, #dbb170 100%);
    border-radius: 2px;
    color: #693d13;
    font-weight: 400;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    cursor: pointer;
}
.over-btn {
    width: 88px;
    height: 34px;
    background: #ebf0fb;
    border-radius: 2px;
    color: #76809c;
    font-weight: 400;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    cursor: pointer;
}
</style>
