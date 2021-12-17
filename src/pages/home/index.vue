<template>
    <div>
        <div>
            <div class="video-head">
                <div class="fx justify-between video-div">
                    <div style="width: 86.5%">
                        <div class="video-logo">
                            <img
                                src="../../assets/image/logo1.png"
                                width="150px"
                            />
                        </div>
                        <div
                            class="go-room-btn"
                            :class="showDanmu ? 'show' : 'hide'"
                            @mouseover="mouseover2()"
                            @mouseleave="mouseleave2"
                            @click="toPage('room', roomId)"
                        >
                            进入直播间
                        </div>
                        <div
                            class="video-footer"
                            :class="showDanmu ? 'show' : 'hide'"
                            @mouseover="mouseover2()"
                            @mouseleave="mouseleave2"
                        >
                            <div
                                class="fx align-items justify-between"
                                style="
                                    height: 40px;
                                    margin-left: 10px;
                                    margin-right: 10px;
                                "
                            >
                                <div class="fx align-items">
                                    <div>
                                        <img
                                            src="../../assets/image/Play.png"
                                            v-if="isPlay"
                                            @click="play"
                                        />
                                        <img
                                            src="../../assets/image/Pause.png"
                                            v-else
                                            @click="pause"
                                        />
                                    </div>
                                    <div class="ml-30">
                                        <img
                                            src="../../assets/image/Volume.png"
                                            v-if="isMute"
                                            @click="getMute(true)"
                                        />
                                        <img
                                            src="../../assets/image/icon-volume-close.png"
                                            width="19px"
                                            v-else
                                            @click="getMute(false)"
                                        />
                                    </div>
                                    <div
                                        class="block ml-10"
                                        style="width: 100px"
                                    >
                                        <!--                <span class="demonstration">默认</span>-->
                                        <el-slider
                                            v-model="volume"
                                            :format-tooltip="formatTooltip"
                                            :show-tooltip="false"
                                            @change="getVolume"
                                        ></el-slider>
                                    </div>
                                </div>
                                <div>
                                    <img
                                        src="../../assets/image/Expand.png"
                                        @click="fullscreen()"
                                    />
                                </div>
                            </div>
                        </div>
                        <div
                            class="prism-player"
                            id="player-video"
                            @mouseover="mouseover2()"
                            @mouseleave="mouseleave2"
                        ></div>
                    </div>
                    <div class="">
                        <div
                            class="video-right fx align-items"
                            v-for="(item, index) in liveStreamingToPc"
                            :class="isNum === index ? 'active' : ''"
                            @click="check(index, item)"
                        >
                            <div>
                                <i
                                    class="left-arrow"
                                    v-if="isNum === index"
                                ></i>
                            </div>
                            <div>
                                <div
                                    class="img-div"
                                    v-lazy:background-image="item.matchCutImg"
                                >
                                    <div class="roomName-top">
                                        <div class="roomName">
                                            {{ item.roomName }}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="fx align-items justify-center">
                <div style="width: 1290px">
                    <div class="out_container" v-if="hotMatchList[0]">
                        <div
                            class="in_container mt-20 match-swpier"
                            style="border: 1px solid #e6e6e6"
                        >
                            <div class="swiper-wrapper">
                                <div
                                    class="swiper-slide swiper-slide-match"
                                    v-for="(item, index) in hotMatchList[0]
                                        .matchInfos"
                                    :key="index"
                                >
                                    <div
                                        class="fx justify-between match-item-top"
                                    >
                                        <div
                                            class="fs-16 fw-600 c-primary match-name t-overflow"
                                        >
                                            {{ item.matchShortName }}
                                        </div>
                                        <div class="c-primary c-3 fs-14">
                                            今天 {{ item.matchTime }}
                                        </div>
                                    </div>

                                    <div
                                        class="fx align-items justify-between mt-5 pl-16 pr-16 match-item-bottom"
                                    >
                                        <div class="match-left">
                                            <div
                                                class="fx align-items justify-between c-fff"
                                            >
                                                <div class="fx align-items">
                                                    <div>
                                                        <img
                                                            :src="
                                                                item.homeTeam
                                                                    .teamIcon
                                                            "
                                                            width="20px"
                                                        />
                                                    </div>
                                                    <div
                                                        class="ml-5 text-overflow fs-14 c-3 team-name"
                                                    >
                                                        {{
                                                            item.homeTeam
                                                                .teamName
                                                        }}
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                class="fx align-items justify-between mt-10 c-fff"
                                            >
                                                <div class="fx align-items">
                                                    <div>
                                                        <img
                                                            :src="
                                                                item.awayTeam
                                                                    .teamIcon
                                                            "
                                                            width="20px"
                                                        />
                                                    </div>
                                                    <div
                                                        class="ml-5 t-overflow fs-14 team-name c-3 fs-12"
                                                    >
                                                        {{
                                                            item.awayTeam
                                                                .teamName
                                                        }}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="match-right">
                                            <div
                                                class="appoinment c-ff"
                                                v-if="!item.subscribe"
                                                @click="getAppoinment(item.id)"
                                            >
                                                预约
                                            </div>
                                            <div
                                                class="c-primary appoinment a-appoinment"
                                                v-if="item.subscribe"
                                                @click="
                                                    userCancelReserveMatch(
                                                        item.id,
                                                    )
                                                "
                                            >
                                                已预约
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                class="swiper-button-prev match-swiper-prev"
                            ></div>
                            <div
                                class="swiper-button-next match-swiper-next"
                            ></div>
                            <div
                                class="live-match-grid-saicheng"
                                @click="toPage2('schedule')"
                            >
                                <div class="live-match-grid-saicheng-img"></div>
                                <div class="sc-text">全部赛程</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="home-box">
                <div class="home">
                    <div class="hot-match-box">
                        <div
                            class="hot-content-left"
                            @click="
                                toPage('room', hotList[0] && hotList[0].roomId)
                            "
                        >
                            <div
                                class="match-bg matchCutImg left-cover"
                                v-lazy:background-image="
                                    hotList[0] && hotList[0].matchCutImg
                                "
                                style="
                                    background-repeat: no-repeat;
                                    background-size: 100% 100%;
                                "
                            >
                                <img
                                    src="../../assets/image/icon-open@2x.png"
                                    width="25px"
                                    class="imgvideo"
                                />
                            </div>
                            <div class="bg-fff fx justify-between">
                                <div class="fx align-items">
                                    <div class="mr-10">
                                        <img
                                            :src="
                                                hotList[0] &&
                                                hotList[0].anchorAvatar
                                            "
                                            class="anchorAvatar-img"
                                        />
                                    </div>
                                    <div>
                                        <div
                                            class="text-overflow fs-18"
                                            style="width: 150px"
                                        >
                                            {{
                                                hotList[0] &&
                                                hotList[0].anchorName
                                            }}
                                        </div>
                                    </div>
                                </div>
                                <div class="fx align-items c-9 fs-14">
                                    <img
                                        src="../../assets/image/icon-hot-gray.png"
                                        width="14px"
                                        class="hot-icon"
                                    />
                                    {{ hotList[0] && hotList[0].hotNum }}
                                </div>
                            </div>
                        </div>
                        <div class="hot-content-right">
                            <div
                                v-for="(item, index) in [...hotList].splice(
                                    1,
                                    hotList.length,
                                )"
                                :key="index"
                                @click="toPage('room', item.roomId)"
                                v-if="index < 8"
                                class="content-right-item"
                            >
                                <div class="content-right-item-cover">
                                    <div
                                        class="match-bg matchCutImg right-cover"
                                        v-lazy:background-image="
                                            item.matchCutImg
                                        "
                                    >
                                        <img
                                            src="../../assets/image/icon-open@2x.png"
                                            width="25px"
                                            class="imgvideo"
                                        />
                                    </div>
                                    <div class="bg-fff fx justify-between">
                                        <div class="fx align-items">
                                            <div class="mr-10">
                                                <img
                                                    :src="item.anchorAvatar"
                                                    class="anchorAvatar-img"
                                                />
                                            </div>
                                            <div>
                                                <div
                                                    class="text-overflow fs-14"
                                                    style="width: 90px"
                                                >
                                                    {{ item.anchorName }}
                                                </div>
                                            </div>
                                        </div>
                                        <div class="c-9 fs-12 fx align-items">
                                            <img
                                                src="../../assets/image/icon-hot-gray.png"
                                                width="12px"
                                                class="hot-icon"
                                            />
                                            {{ item.hotNum }}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="hot-anchor-box">
                        <div class="hot-anchor-left">
                            <div class="banner-content">
                                <div class="swiper-container banner-swiper">
                                    <div
                                        class="swiper-wrapper banner-swiper-wrapper"
                                    >
                                        <div
                                            class="swiper-slide banner-swiper-slide"
                                            v-for="item in activeList"
                                            :key="item.picPath"
                                        >
                                            <img :src="item.picPath" alt="" />
                                        </div>
                                    </div>
                                    <div
                                        class="swiper-pagination banner-swiper-pagination"
                                    ></div>
                                    <div
                                        class="swiper-button-next banner-swiper-next"
                                    ></div>
                                    <div
                                        class="swiper-button-prev banner-swiper-prev"
                                    ></div>
                                </div>
                            </div>
                            <div class="anchor-content">
                                <div class="start-anchor">
                                    <div class="hot-anchor">热门专家</div>
                                </div>
                                <div class="anchor-swiper-content">
                                    <div class="swiper-container anchor-swiper">
                                        <div
                                            class="swiper-wrapper anchor-swiper-wrapper"
                                        >
                                            <div
                                                class="swiper-slide anchor-swiper-slide"
                                                v-for="item in hotExpertList"
                                                :key="item.anchorId"
                                            >
                                                <div
                                                    class="anchor-avatar"
                                                    @click="
                                                        toPage3(
                                                            'expertsDeatil',
                                                            item.anchorId,
                                                            1,
                                                        )
                                                    "
                                                >
                                                    <img
                                                        :src="item.anchorIcon"
                                                        alt=""
                                                        class="avatar"
                                                    />
                                                </div>
                                                <div class="anchor-name">
                                                    {{ item.anchorName }}
                                                </div>
                                                <div
                                                    class="attention-btn"
                                                    v-if="!item.follow"
                                                    @click="
                                                        focusExpert(
                                                            item.anchorId,
                                                        )
                                                    "
                                                >
                                                    关注
                                                </div>
                                                <div
                                                    class="y-attention-btn"
                                                    v-if="item.follow"
                                                    @click="
                                                        cancelFocusExpert(
                                                            item.anchorId,
                                                        )
                                                    "
                                                >
                                                    已关注
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        class="swiper-button-next anchor-swiper-next"
                                    ></div>
                                    <div
                                        class="swiper-button-prev anchor-swiper-prev"
                                    ></div>
                                </div>
                            </div>
                        </div>
                        <div class="hot-anchor-right">
                            <el-tabs v-model="activeName">
                                <el-tab-pane label="咨询" name="1">
                                    <div class="information-box">
                                        <div
                                            class="information-ad"
                                            @click="
                                                toPageNew(
                                                    bannerList[0] &&
                                                        bannerList[0].id,
                                                )
                                            "
                                        >
                                            <img
                                                :src="
                                                    bannerList[0] &&
                                                    bannerList[0].coverPicture
                                                "
                                                alt=""
                                            />
                                        </div>
                                        <div class="information-list">
                                            <div
                                                class="information-list-item"
                                                v-for="item in articleList"
                                                :key="item.id"
                                                @click="toPageNew(item.id)"
                                            >
                                                <img
                                                    src="../../assets/image/home-news-icon.png"
                                                    alt=""
                                                    class="icon"
                                                />
                                                <p class="text-dsc">
                                                    {{ item.title }}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </el-tab-pane>

                                <el-tab-pane label="活动" name="2"
                                    >活动</el-tab-pane
                                >
                                <el-tab-pane label="公告" name="3"
                                    >公告</el-tab-pane
                                >
                                <el-tab-pane label="规范" name="4"
                                    >规范</el-tab-pane
                                >
                                <el-tab-pane label="帮助" name="5"
                                    >帮助</el-tab-pane
                                >
                            </el-tabs>
                        </div>
                    </div>
                    <div class="ad-banner-box">
                        <img :src="advertisement" alt="" />
                    </div>
                    <div class="classify-match-box">
                        <div class="sport-class-item">
                            <div class="sport-class-item-top">
                                <div class="sport-class-name">
                                    <img
                                        src="../../assets/image/home-football-icon.png"
                                        alt=""
                                    />
                                    <span>足球</span>
                                </div>
                                <div
                                    class="show-more"
                                    @click="toPage2('footerball')"
                                >
                                    查看更多
                                    <i class="el-icon-arrow-right"></i>
                                </div>
                            </div>
                            <div class="sport-class-item-bottom">
                                <div
                                    class="class-bottom-cover"
                                    v-for="item in [...footerBallList].splice(
                                        0,
                                        5,
                                    )"
                                    :key="item.roomId"
                                    @click="toPage('room', item.roomId)"
                                >
                                    <div class="sport-class-list-item">
                                        <div
                                            class="match-cover matchCutImg"
                                            v-lazy:background-image="
                                                item.matchCutImg
                                            "
                                        >
                                            <img
                                                src="../../assets/image/icon-open@2x.png"
                                                class="imgvideo"
                                            />
                                        </div>
                                        <div class="match-title">
                                            {{ item.roomName }}
                                        </div>
                                        <div class="match-hot">
                                            <div class="match-hot-left">
                                                <img
                                                    :src="item.anchorAvatar"
                                                    alt=""
                                                />
                                                <span>{{
                                                    item.anchorName
                                                }}</span>
                                            </div>
                                            <div class="match-hot-right">
                                                <img
                                                    src="../../assets/image/icon-hot-gray.png"
                                                    width="12px"
                                                />
                                                <span>{{ item.hotNum }}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="classify-match-box">
                        <div class="sport-class-item">
                            <div class="sport-class-item-top">
                                <div class="sport-class-name">
                                    <img
                                        src="../../assets/image/home-basketball-icon.png"
                                        alt=""
                                    />
                                    <span>篮球</span>
                                </div>
                                <div
                                    class="show-more"
                                    @click="toPage2('basketball')"
                                >
                                    查看更多
                                    <i class="el-icon-arrow-right"></i>
                                </div>
                            </div>
                            <div class="sport-class-item-bottom">
                                <div
                                    class="class-bottom-cover"
                                    v-for="item in [...basketBallList].splice(
                                        0,
                                        5,
                                    )"
                                    :key="item.roomId"
                                    @click="toPage('room', item.roomId)"
                                >
                                    <div class="sport-class-list-item">
                                        <div
                                            class="match-cover matchCutImg"
                                            v-lazy:background-image="
                                                item.matchCutImg
                                            "
                                        >
                                            <img
                                                src="../../assets/image/icon-open@2x.png"
                                                class="imgvideo"
                                            />
                                        </div>
                                        <div class="match-title">
                                            {{ item.roomName }}
                                        </div>
                                        <div class="match-hot">
                                            <div class="match-hot-left">
                                                <img
                                                    :src="item.anchorAvatar"
                                                    alt=""
                                                />
                                                <span>{{
                                                    item.anchorName
                                                }}</span>
                                            </div>
                                            <div class="match-hot-right">
                                                <img
                                                    src="../../assets/image/icon-hot-gray.png"
                                                    width="12px"
                                                />
                                                <span>{{ item.hotNum }}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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
        <v-footer></v-footer>
    </div>
</template>

<script>
import footer from '../../compent/footer/index.vue';
import { Cookie } from '../../api/cookie.js';
import RegandLogin from '../../compent/regAndLogin/index.vue';
import Swiper from 'swiper';
export default {
    name: 'Home',
    data() {
        return {
            hotMatchList: [],
            pageNo: 1,
            tabNum: 0,
            sportNum: 0,
            isNum: 0,
            videoType: '',
            isShow: 0,
            isshowMax: '',
            roomId: '',
            hotList: [],
            matchCutImg: '',
            liveUrl: '',
            footBallList: [],
            userReserveMatchList: [],
            hotAnchorList: [],
            basketBallList: [],
            liveStreamingToPc: [],
            volume: 0,
            bannerList: [],
            tagNum: '',
            articleTopTagList: [],
            showDanmu: true,
            articleList: [],
            hotExpertList: [],
            activeList: [],
            footerBallList: [],
            basketBallList: [],
            isPlay: false,
            isMute: true,
            sportsType: 0,
            player: null,
            advertisement: '',
            activeName: '1', //选项卡
        };
    },
    components: { 'v-footer': footer, 'v-reg-login': RegandLogin },
    mounted() {
        this.getLiveStreamingToPc();
        this.getBannerList1();
        this.getMatch();
        this.getList();
        this.getArticleTopTagList();
        this.getTopArticleList();
        this.getArticleListByTagId(0);
        this.getBannerList();
        this.getHotExpert();
        this.getFooterBall();
        this.getBasketBall();
    },
    methods: {
        toPageNew(id) {
            let routeData = this.$router.resolve({
                path: '/newDeatil',
                query: {
                    id: id,
                },
            });
            window.open(routeData.href, '_blank');
        },
        toPage3(name, id, type) {
            let routeData = this.$router.resolve({
                path: name,
                query: {
                    id: id,
                    type: type,
                },
            });
            window.open(routeData.href, '_blank');
        },
        showDialog(visible) {
            this.isShow = visible;
        },
        formatTooltip(val) {
            return val / 100;
        },
        // 移入
        mouseover2() {
            clearTimeout(this.timer);
            this.showDanmu = true;
        },
        // 移出
        mouseleave2() {
            this.timer = setTimeout(() => {
                this.showDanmu = false;
            }, 100);
        },
        // 暂停
        pause() {
            this.isPlay = true;
            this.player.pause();
        },
        // 播放
        play() {
            this.isPlay = false;
            this.player.play();
        },
        // 音量
        getVolume() {
            this.player.setVolume(this.volume / 100);
        },
        getMute(data) {
            if (data === false) {
                this.isMute = true;
                this.player.setVolume(0.3);
            } else {
                this.isMute = false;
                this.player.setVolume(0);
            }
        },
        // 全屏
        fullscreen() {
            this.player.fullscreenService.requestFullScreen();
        },
        // 移入
        mouseover(id) {
            clearTimeout(this.timer);
            this.isshowMax = id;
            // $(this).css({'transform': 'scale(1.2,1.2)'})
        },
        // 移出
        mouseleave() {
            this.timer = setTimeout(() => {
                this.isshowMax = '';
            }, 100);
        },
        check(num, data) {
            this.isNum = num;
            this.roomId = data.roomId;
            this.player.dispose();
            this.playerVideo(this.roomId, data.liveUrl, data.matchCutImg, 2);
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
        toPageBall(id, type) {
            if (type === 0) {
                let routeData = this.$router.resolve({
                    name: 'footballDeatil',
                    query: { id: id },
                });
                window.open(routeData.href, '_blank');
                // this.$router.replace({name: 'footballDeatil', query: {id: id}})
            } else {
                let routeData = this.$router.resolve({
                    name: 'basketBallDeatil',
                    query: { id: id },
                });
                window.open(routeData.href, '_blank');
                // this.$router.replace({name: 'basketBallDeatil', query: {id: id}})
            }
        },
        toPage2(name) {
            this.$router.replace({ name: name });
        },
        // 热门专家
        getHotExpert() {
            let param = {
                type: 1,
            };
            this.$axios('post', '/hotRank/featuredExpertsList', param).then(
                (res) => {
                    if (res.code === 200) {
                        this.hotExpertList = res.data;
                        this.$nextTick(() => {
                            new Swiper('.anchor-swiper', {
                                navigation: {
                                    //左右分页
                                    nextEl: '.anchor-swiper-next',
                                    prevEl: '.anchor-swiper-prev',
                                },
                                slidesPerView: 6,
                                slidesPerGroup: 6,
                                spaceBetween: 30,
                            });
                        });
                    }
                },
            );
        },
        playerVideo(id, url, img, num) {
            // eslint-disable-next-line no-unused-vars,no-undef
            this.player = new Aliplayer(
                {
                    id: 'player-video',
                    source: url,
                    width: '100%',
                    height: '600px',
                    autoplay: true,
                    isLive: true,
                    rePlay: false,
                    cover: img,
                    playsinline: true,
                    preload: true,
                    controlBarVisibility: 'click',
                    useH5Prism: true,
                },
                function (player) {
                    console.log(num);
                    if (num === 1) {
                        player.mute();
                    }
                    player.play();
                },
            );
        },
        // 获取体育头条标签
        getArticleTopTagList() {
            this.$axios('get', '/article/getArticleTopTagList').then((res) => {
                if (res.code === 200) {
                    this.articleTopTagList = res.data;
                    this.sportNum = 0;
                }
            });
        },
        getTopArticleList() {
            this.$axios('get', '/article/getTopArticleList').then((res) => {
                if (res.code === 200) {
                    this.bannerList = res.data;
                }
            });
        },
        getArticleListByTagId(tagId) {
            let param = {
                pageNum: 1,
                pageSize: 5,
                tagId: tagId,
            };
            this.$axios('post', '/article/getArticleListByTagId', param).then(
                (res) => {
                    if (res.code === 200) {
                        this.articleList = res.data.dataList;
                        this.sportNum = tagId;
                    }
                },
            );
        },
        getList() {
            let param = {
                pageNum: this.pageNo,
                pageSize: 30,
            };
            this.$axios('post', '/live/getHotLiveList', param).then((res) => {
                if (res.code === 200) {
                    this.hotList = res.data.dataList;
                }
            });
        },
        getLiveStreamingToPc() {
            this.$axios('post', '/live/getLiveStreamingToPc').then((res) => {
                if (res.code === 200) {
                    this.liveStreamingToPc = res.data;
                    this.roomId = this.liveStreamingToPc[0].roomId;
                    this.playerVideo(
                        this.roomId,
                        this.liveStreamingToPc[0].liveUrl,
                        'https://1-1305184012.cos.ap-nanjing.myqcloud.com/live/11163174726023.jpg',
                        1,
                    );
                }
            });
        },
        getMatch() {
            this.$axios('post', '/live/getTopMatchList').then((res) => {
                if (res.code === 200) {
                    this.hotMatchList = res.data.matchLists;
                    this.$nextTick(() => {
                        new Swiper('.match-swpier', {
                            slidesPerView: 5,
                            spaceBetween: 5,
                            slidesPerGroup: 1,
                            // loopFillGroupWithBlank: true,
                            navigation: {
                                nextEl: '.match-swiper-next',
                                prevEl: '.match-swiper-prev',
                            },
                        });
                    });
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
        getBannerList1() {
            let param = {
                adType: 3,
            };
            this.$axios('post', '/live/getBannerList', param).then((res) => {
                if (res.code === 200) {
                    this.advertisement = res.data[0].picPath;
                }
            });
        },
        getBannerList() {
            let param = {
                adType: 4,
            };
            this.$axios('post', '/live/getBannerList', param).then((res) => {
                if (res.code === 200) {
                    this.activeList = res.data;
                    //专家板块轮播
                    this.$nextTick(() => {
                        new Swiper('.banner-swiper', {
                            autoplay: true, //自动播放
                            loop: true, //无缝轮播
                            pagination: {
                                //小圆点分页
                                el: '.banner-swiper-pagination',
                                bulletClass: 'banner-swiper-bullet',
                                bulletActiveClass:
                                    'banner-swiper-bullet-active',
                            },
                            navigation: {
                                //左右分页
                                nextEl: '.banner-swiper-next',
                                prevEl: '.banner-swiper-prev',
                            },
                        });
                    });
                }
            });
        },
        //获取足球比赛
        getFooterBall() {
            let param = {
                pageNum: 1,
                pageSize: 30,
                type: 0,
            };
            this.$axios('post', '/live/getTopLiveList', param).then((res) => {
                if (res.code === 200) {
                    this.footerBallList = res.data.dataList;
                }
            });
        },
        //获取篮球比赛
        getBasketBall() {
            let param = {
                pageNum: 1,
                pageSize: 30,
                type: 1,
            };
            this.$axios('post', '/live/getTopLiveList', param).then((res) => {
                if (res.code === 200) {
                    this.basketBallList = res.data.dataList;
                }
            });
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
        // 关注
        focusExpert(id) {
            if (!Cookie.get('token')) {
                this.isShow = 1;
            } else {
                let param = {
                    id: id,
                };
                this.$axios('post', '/hotRank/focusExpert', param).then(
                    (res) => {
                        if (res.code === 200) {
                            this.getHotExpert();
                            this.$message({
                                type: 'success',
                                message: '关注成功',
                            });
                        } else {
                            this.$message({
                                type: 'warning',
                                message: res.msg,
                            });
                        }
                    },
                );
            }
        },
        // 取消关注
        cancelFocusExpert(id) {
            if (!Cookie.get('token')) {
                this.isShow = 1;
            } else {
                let param = {
                    id: id,
                };
                this.$axios('post', '/hotRank/cancelFocusExpert', param).then(
                    (res) => {
                        if (res.code === 200) {
                            this.getHotExpert();
                            this.$message({
                                type: 'success',
                                message: '取消关注成功',
                            });
                        } else {
                            this.$message({
                                type: 'warning',
                                message: res.msg,
                            });
                        }
                    },
                );
            }
        },
    },
};
</script>

<style scoped lang="scss">
.home-box {
    /*width: 100%;*/
    display: flex;
    align-items: center;
    justify-content: center;
}
.video-div {
    min-width: 1200px;
    height: 590px;
    background: rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    padding: 0px 5px;
}
.c-fac {
    color: #eecfb5;
}
.home {
    width: 1200px;
    .hot-match-box {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 290px;
        margin-bottom: 60px;
        .hot-content-left {
            width: 392px;
            height: 100%;
            &:hover {
                transform: translateY(-5px);
                transition: all 0.3s;
            }
            .left-cover {
                width: 392px;
                height: 242px;
                background: #d8d8d8;
                border-radius: 8px 8px 0px 0px;

                &.match-bg {
                    background-size: cover;
                    background-position: center;
                    background-repeat: no-repeat;
                }
                img {
                    width: 30px;
                }
            }
            .hot-icon {
                margin-right: 3px;
            }
        }
        .hot-content-right {
            flex: 1;
            height: 100%;
            display: flex;
            flex-wrap: wrap;

            .content-right-item {
                width: 25%;
                margin-bottom: 20px;

                &-cover {
                    width: 190px;
                    height: 140px;
                    margin-left: auto;
                    &:hover {
                        transform: translateY(-5px);
                        transition: all 0.3s;
                    }
                    .bg-fff {
                        padding: 4px 5px;
                    }
                    .hot-icon {
                        margin-right: 2px;
                    }
                    .right-cover {
                        width: 190px;
                        height: 106px;
                        background: #d8d8d8;
                        border-radius: 8px 8px 0px 0px;
                        &.match-bg {
                            background-size: cover;
                            background-position: center;
                            background-repeat: no-repeat;
                        }
                    }
                }
            }

            .anchorAvatar-img {
                width: 30px;
                height: 30px;
            }
        }
    }
    .hot-anchor-box {
        width: 100%;
        height: 407px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 60px;
        .hot-anchor-left {
            width: 796px;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            .banner-content {
                width: 796px;
                height: 120px;
                background: #fff;
                border-radius: 8px;
                .banner-swiper {
                    width: 100%;
                    height: 100%;
                    border-radius: 8px;

                    .banner-swiper-slide {
                        cursor: pointer;

                        img {
                            width: 100%;
                            height: auto;
                            object-fit: cover;
                            border-radius: 8px;
                        }
                    }

                    .banner-swiper-next::after,
                    .banner-swiper-prev::after {
                        width: 24px;
                        height: 48px;
                        color: #f8413d;
                        font-size: 20px;
                        background: #000;

                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }

                    .banner-swiper-next::after {
                        border-radius: 0 8px 8px 0;
                    }

                    .banner-swiper-prev::after {
                        border-radius: 8px 0 0 8px;
                    }
                    >>> .banner-swiper-pagination {
                        display: flex;
                        align-items: center;
                        justify-content: flex-end;
                        width: 100%;
                        padding-right: 20px;
                    }
                    >>> .banner-swiper-bullet {
                        position: relative;
                        display: inline-block;
                        width: 6px;
                        height: 6px;
                        margin: 0 5px;
                        background: #7e7e7e;
                        border-radius: 50%;
                    }

                    >>> .banner-swiper-bullet-active {
                        position: relative;
                        display: inline-block;
                        width: 10px;
                        height: 6px;
                        margin: 0 5px;
                        background: #fff;
                        border-radius: 3px;
                    }
                }
            }
            .anchor-content {
                width: 796px;
                height: 275px;
                background: #ffffff;
                border-radius: 8px;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-between;

                .start-anchor {
                    width: 100%;

                    display: flex;
                    align-items: center;
                    justify-content: center;

                    margin-top: 22px;

                    .hot-anchor {
                        width: 160px;
                        height: 32px;
                        color: #fff;
                        font-size: 16px;
                        background-image: url('../../assets/image/hot-anchor-bg.png');
                        background-repeat: no-repeat;
                        background-position: center;
                        background-size: cover;

                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }
                }

                .anchor-swiper-content {
                    position: relative;
                    width: 100%;
                    height: 190px;

                    .anchor-swiper {
                        width: 700px;
                        height: 100%;
                        margin: 0 auto;
                        overflow: hidden;

                        .anchor-swiper-slide {
                            width: 100%;
                            height: 100%;

                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            justify-content: center;
                        }

                        .anchor-avatar {
                            position: relative;
                            width: 64px;
                            height: 64px;

                            .avatar {
                                width: 100%;
                                height: 100%;
                                object-fit: cover;
                                border-radius: 50%;
                            }

                            .living-icon {
                                position: absolute;
                                right: 0;
                                bottom: 0;
                                width: 19px;
                                height: 19px;
                                object-fit: cover;
                            }
                        }

                        .anchor-name {
                            margin-top: 18px;
                            margin-bottom: 5px;
                            color: #333;
                            font-size: 14px;
                        }

                        .attention-btn {
                            width: 63px;
                            height: 20px;
                            background: #f8413d;
                            border-radius: 2px;
                            text-align: center;
                            line-height: 20px;
                            color: #fff;
                            font-size: 14px;
                            cursor: pointer;
                        }
                        .y-attention-btn {
                            width: 63px;
                            height: 20px;
                            background: #e5dbdb;
                            border-radius: 2px;
                            text-align: center;
                            line-height: 20px;
                            color: #605656;
                            font-size: 14px;
                            cursor: pointer;
                        }
                    }
                }

                .anchor-swiper-next::after,
                .anchor-swiper-prev::after {
                    width: 30px;
                    height: 30px;
                    color: #5c5c5c;
                    font-size: 14px;
                    background: #fff;
                    border: 1px solid #5c5c5c;
                    border-radius: 50%;

                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .anchor-swiper-next,
                .anchor-swiper-prev {
                    width: 30px;
                    height: 30px;
                    border-radius: 50%;
                }
            }
        }
        .hot-anchor-right {
            width: 392px;
            height: 407px;
            background: #ffffff;
            border-radius: 8px;
            padding: 6px 16px;
            .information-box {
                width: 100%;

                .information-ad {
                    width: 100%;
                    height: 80px;
                    margin-bottom: 10px;
                    cursor: pointer;

                    img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                        border-radius: 8px;
                    }
                }

                .information-list {
                    width: 100%;

                    .information-list-item {
                        width: 100%;

                        display: flex;
                        align-items: center;

                        margin-top: 26px;
                        cursor: pointer;

                        .icon {
                            width: 38px;
                            height: 21px;
                        }

                        .text-dsc {
                            flex: 1;
                            margin-left: 13px;
                            color: #605656;
                            font-size: 12px;

                            overflow: hidden;
                            white-space: nowrap;
                            text-overflow: ellipsis;
                        }
                    }
                }
            }
        }
    }
    .ad-banner-box {
        width: 100%;
        height: 110px;
        background: #ffffff;
        border-radius: 8px;
        margin-bottom: 60px;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 8px;
        }
    }
    .classify-match-box {
        width: 1200px;
        margin-bottom: 60px;

        .sport-class-item {
            width: 100%;
            margin-bottom: 60px;

            &-top {
                width: 100%;
                height: 40px;

                display: flex;
                align-items: center;
                justify-content: space-between;

                margin-bottom: 20px;

                .sport-class-name {
                    display: flex;
                    align-items: center;
                    justify-content: center;

                    img {
                        width: 37px;
                        height: 37px;
                        margin-right: 2px;
                        object-fit: cover;
                    }

                    span {
                        color: #333;
                        font-weight: 500;
                        font-size: 28px;
                    }
                }

                .show-more {
                    color: #605656;
                    font-size: 14px;
                    cursor: pointer;
                }
            }

            &-bottom {
                width: 100%;
                height: 204px;

                display: flex;
                align-items: center;
                .class-bottom-cover {
                    width: 20%;
                    .sport-class-list-item {
                        width: 227px;
                        height: 204px;
                        background: #fff;
                        border-radius: 8px;
                        cursor: pointer;
                        margin: 0 auto;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: flex-start;
                        &:hover {
                            transform: translateY(-5px);
                            transition: all 0.3s;
                        }

                        .match-cover {
                            width: 227px;
                            height: 128px;
                            overflow: hidden;
                            background: #494949;
                            border-radius: 8px 8px 0 0;
                            background-size: cover;
                            background-position: center;
                            background-repeat: no-repeat;
                            img {
                                width: 25px;
                                height: auto;
                                object-fit: cover;
                            }
                        }

                        .match-title {
                            width: 100%;
                            margin-top: 10px;
                            color: #333;
                            font-size: 14px;
                            text-align: center;
                            padding: 0 10px;
                            overflow: hidden;
                            white-space: nowrap;
                            text-overflow: ellipsis;
                        }

                        .match-hot {
                            flex: 1;
                            width: 100%;
                            margin-top: 15px;
                            padding: 0 10px;

                            display: flex;
                            align-items: center;
                            justify-content: space-between;

                            &-left {
                                display: flex;
                                align-items: center;
                                justify-content: center;

                                img {
                                    width: 22px;
                                    height: 22px;
                                    margin-right: 5px;
                                    object-fit: cover;
                                    border-radius: 50%;
                                }

                                span {
                                    color: #605656;
                                    font-size: 12px;
                                    overflow: hidden;
                                    white-space: nowrap;
                                    text-overflow: ellipsis;
                                }
                            }

                            &-right {
                                display: flex;
                                align-items: center;
                                justify-content: center;

                                img {
                                    width: 10px;
                                    height: 11px;
                                    margin-right: 5px;
                                    object-fit: cover;
                                }

                                span {
                                    color: #605656;
                                    font-size: 12px;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
.video-box {
    height: 500px !important;
}
.sports {
    width: 68%;
}
.league-match {
    width: 100%;
    height: 790px;
    background: #ffffff;
    box-shadow: 0px 10px 16px 0px rgba(0, 0, 0, 0.1);
    border-radius: 6px;
    overflow-y: scroll;
}
.league-match::-webkit-scrollbar {
    display: none;
}
.league-li {
    border-bottom: 1px solid #f2f2f2;
    padding: 5px 10px;
}
.league-li1 {
    border-bottom: 1px solid #f2f2f2;
    padding: 10px;
}
.league-num {
    width: 16px;
    height: 16px;
    font-size: 12px;
    border-radius: 2px;
    display: flex;
    color: #666;
    justify-content: center;
    align-items: center;
}
.c-c4 {
    background: #c4ad20;
    color: #fff;
}
.bg-red {
    color: white;
    background: rgb(255, 82, 30);
}
.league-img {
    width: 26px;
    height: 26px;
    border-radius: 50%;
}
.league-tag {
    line-height: 50px;
    background: #f7f5f5;
    display: flex;
    align-items: center;
    flex-direction: row;
    border-bottom: 1px solid #eecfb5;
    overflow-x: scroll;
}
/*.league-tag::-webkit-scrollbar*/
/*{*/
/*  display: none;*/
/*}*/
.league-tag-active {
    background: linear-gradient(115deg, #eecfb5 -2%, #f8413d 100%);
    color: white;
}
.league-tag1 {
    padding: 5px 10px;
    border: 1px solid #f2f2f2;
}
.league-tag-li {
    width: 80px;
    text-align: center;
    cursor: pointer;
    flex-shrink: 0;
}
.league-tag-li:hover {
    color: #f8413d;
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
.star-box {
    width: 100%;
    height: 180px;
    background: white;
    margin-top: -20px;
}
.video-head {
    width: 100%;
    height: 666px;
    /*background-image: url("../../assets/image/bg3.jpg");*/
    background-image: url('https://1-1305184012.cos.ap-nanjing.myqcloud.com/live/41658984549229.jpg');
    background-size: cover;
    /*background-size: 100% 100%;*/
    background-position: center center;
    background-repeat: no-repeat;
    background-color: #2b2935;
    display: flex;
    justify-content: center;
    padding-top: 34px;
}
.hot-content {
    width: 24%;
    height: 100%;
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
.articleList {
    width: 300px;
    color: #333333;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    cursor: pointer;
}
.articleList:hover {
    color: #f8413d;
}
.off {
    background: #f7f5f5;
}
.match_name img {
    width: 18px;
    height: 18px;
    padding: 0px 5px;
    margin-top: 2px;
}
.stageName {
    background-color: rgb(233, 240, 248);
    text-align: center;
    color: #eecfb5;
    line-height: 50px;
}
.anchorAvatar {
    width: 18px;
    height: 18px;
    border-radius: 100%;
    margin-right: 5px;
}
.hot-box {
    width: 100%;
    height: 130px;
    overflow-x: scroll;
    margin-top: 20px;
    border-radius: 6px;
}
.video-right {
    border-radius: 6px;
    margin-bottom: 10px;
    /*margin-left: -130px;*/
    margin-top: 10px;
}
.active {
    border: 2px solid #f8413d;
}
.img-div {
    width: 150px;
    height: 86px;
    cursor: pointer;
    border-radius: 5px;
    background-size: 100% 100%;
}
.match-box {
    background: #ffffff;
    box-shadow: 0px 10px 16px 0px rgba(0, 0, 0, 0.1);
    border-radius: 6px;
    height: 250px;
    overflow-y: scroll;
}
.match-box::-webkit-scrollbar {
    display: none;
}
.jx {
    transform: skew(-10deg);
    width: 41px;
    height: 21px;
    color: #67728f;
    border-radius: 4px;
    border: 1px solid #67728f;
    font-size: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 3px;
    cursor: pointer;
    margin-left: 10px;
}
.jx:hover {
    color: #f8413d;
    border: 1px solid #f8413d;
}
.jx-active {
    background: linear-gradient(115deg, #eecfb5 -2%, #f8413d 100%);
    color: white;
    border: 1px solid #eecfb5;
    cursor: pointer;
}
.jx1 {
    transform: skew(-10deg);
    width: 41px;
    height: 21px;
    color: white;
    border-radius: 4px;
    border: 1px solid rgb(255, 82, 30);
    background: rgb(255, 82, 30);
    font-weight: 700;
    font-size: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 3px;
    cursor: pointer;
    margin-left: 10px;
}
.content {
    text-align: center;
    transform: skew(10deg);
    width: 41px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.img-div[lazy='loading'] {
    width: 150px;
    height: 86px;
    background-size: 100% 100%;
}
.img-div[lazy='loaded'] {
    width: 150px;
    height: 86px;
    background-size: 100% 100%;
}
.img-div:hover .roomName-top {
    opacity: 1;
}
.img-div .roomName-top {
    color: white;
    width: 150px;
    line-height: 30px;
    font-size: 12px;
    background: rgba(0, 0, 0, 0.6);
    position: relative;
    top: 57px;
    opacity: 0;
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
}
.left-arrow {
    position: absolute;
    content: '';
    border-top: 6px transparent dashed;
    border-left: 7px transparent dashed;
    border-bottom: 6px transparent dashed;
    border-right: 7px #f8413d solid;
    margin-left: -15px;
}
.game {
    border-right: 1px solid #d8d8d8;
    background: white;
    font-weight: 400;
    padding: 16px 16px 20px;
    width: 280px;
    height: 130px;
}
.appoinment {
    width: 62px;
    height: 28px;
    background: #f8413d;
    box-shadow: 0px 2px 8px 0px rgba(133, 133, 133, 0.04);
    border-radius: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}
.a-appoinment {
    background: #ffe3e2;
}
.swiper-slide-sports {
    background: white;
    border-radius: 6px;
    width: 30%;
}
.hot-expert {
    width: 30%;
}
.expert-box {
    /*background: linear-gradient(225deg, #3F4154 0%, #474455 100%);*/
    background-image: url('../../assets/image/zhaunjia-bg.png');
    background-size: 100% 100%;
    border-radius: 6px;
    padding-bottom: 5px;
    padding-top: 5px;
    height: 360px;
    overflow-y: scroll;
}
.expert-box::-webkit-scrollbar {
    display: none;
}

.expert-li {
    border-bottom: 5px solid rgba(38, 39, 53, 0.2);
    padding: 10px;
}
.expert-li:hover {
    background: rgba(0, 0, 0, 0.1);
}
.expert-img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
}
.anchorAvatar-img {
    width: 46px;
    height: 46px;
    border-radius: 50%;
}
.border-b {
    width: 100%;
    height: 1px;
    background: #ffffff;
    border-radius: 7px;
    opacity: 0.1;
    margin-top: 10px;
}
.pl-16 {
    padding-left: 16px;
}
.pr-16 {
    padding-right: 16px;
}
.pt-16 {
    padding-top: 16px;
}
.gray {
    color: white;
    background: #f0c682;
}
.go-room-btn {
    position: relative;
    left: 42%;
    top: 32%;
    z-index: 9;
    width: 130px;
    height: 48px;
    color: #fff;
    background: linear-gradient(90deg, #ff8d86 0%, #f8413d 100%);
    box-shadow: 0 2px 8px 0px rgba(216, 173, 102, 0.5);
    background-size: 100% 100%;
    background-position: center center;
    font-size: 16px;
    text-align: center;
    line-height: 52px;
    -ms-user-select: none;
    user-select: none;
    cursor: pointer;
    border-radius: 8px;
}
.go-room-btn:hover {
    background: linear-gradient(90deg, #ff8d86 0%, #f8413d 100%);
}

.hit-bottom {
    width: 100%;
    padding: 5px 10px;
    margin-top: -30px;
    color: white;
    font-weight: 700;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0) 0,
        rgba(0, 0, 0, 0.8) 100%
    );
    position: relative;
}
.living {
    width: 40px;
    background: #fa3434;
    border-radius: 2px;
    vertical-align: middle;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 12px;
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
.star-img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin-bottom: 10px;
}

.swiper-slide-match {
    background: #fff;
    background-size: 100% 100%;
    border-radius: 8px;
    font-weight: 400;
    width: 220px;
    height: 170px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    .match-item-top {
        width: 100%;
        height: 38px;
        border-bottom: 1px solid #e3e3e3;
        padding: 0 13px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .match-name {
            flex: 1;
            margin-right: 10px;
        }
    }
    .match-item-bottom {
        flex: 1;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .match-left {
            width: 130px;
            .team-name {
                width: 100px;
            }
        }
        .match-right {
            margin: 0 10px 0 5px;
        }
    }
}

.swiper-slide-hotAnchor {
    width: 100px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.match-swiper-prev {
    border-radius: 8px 0px 0px 8px;
}
.match-swiper-next {
    border-radius: 0px 8px 8px 0px;
}
.match-swiper-next,
.match-swiper-prev {
    width: 24px;
    height: 48px;
    background: #fde4e4;
}
.match-swiper-prev::after,
.match-swiper-next::after {
    font-size: 12px;
    color: #c5c5c5;
}
.banner-img {
    width: 100%;
    height: 320px;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
}

.out_container {
    width: auto;
    height: 100%;
    position: relative;
    padding-right: 50px;
    margin: 60px 0;
}
.in_container {
    width: 1150px;
    height: 100%;
    margin: 0 auto;
    overflow: hidden;
    border: none !important;
}
.teamIcon {
    width: 22px;
    height: 22px;
}
.c-f0 {
    color: #f0c682;
}
.c-fff {
    color: white;
}
.live-img {
    margin-top: -17px;
    text-align: center;
}

.video-logo {
    text-align: right;
    position: relative;
    bottom: -24px;
    margin-right: 20px;
    z-index: 9;
}

.video-footer {
    width: 100%;
    height: 40px;
    position: relative;
    top: 76%;
    z-index: 12;
    padding-right: 10px;
    padding-left: 10px;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0) 0,
        #000 100%
    ) !important;
    border-bottom-left-radius: 10px;
    border-top-left-radius: 10px;
}
.hide {
    /*animation: fadeOut ease .8s;*/
    /*animation-fill-mode: forwards;*/
    /*-webkit-animation-fill-mode: forwards;*/
    opacity: 0;
}
.show {
    opacity: 1;
    /*animation: fadeIn ease .8s;*/
    /*animation-fill-mode: forwards;*/
    /*-webkit-animation-fill-mode: forwards;*/
}
.animated {
    -webkit-animation-duration: 0.3s;
    animation-duration: 0.3s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
}
.fadeInRight {
    -webkit-animation-name: fadeInRight;
    animation-name: fadeInRight;
}
.more-icon {
    color: #7f8498;
    font-size: 12px;
}
.live-match-grid-saicheng {
    width: 40px;
    height: 170px;
    background: #ffffff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 45px;
    bottom: 0;
    color: #a6a6a6;
    cursor: pointer;
    -ms-user-select: none;
    user-select: none;
    border-radius: 6px;

    .sc-text {
        writing-mode: tb-rl;
    }
}
.live-match-grid-saicheng-img {
    width: 14px;
    height: 14px;
    background: url('../../assets/image/home-date-icon.png');
    background-size: 100% 100%;
    margin-bottom: 8px;
}
</style>
<style>
.prism-controlbar {
    display: none !important;
}
:root {
    --swiper-navigation-size: 25px !important;
    /* --swiper-navigation-color: var(--swiper-theme-color); */
}
.vcp-timelabel {
    display: none !important;
}
.prism-big-play-btn {
    display: none !important;
}
.vcp-slider {
    display: none !important;
}
.vcp-panel-bg {
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0) 0,
        #000 100%
    ) !important;
}
.el-slider__bar {
    background-color: #f8413d;
}
.el-slider__button {
    border: 2px solid #f8413d;
}
.el-slider__bar {
    height: 4px;
}
.el-slider__runway {
    height: 4px;
}
.el-slider__button {
    width: 13px;
    height: 13px;
}

.prism-detect-info {
    display: none;
}
.prism-error-operation {
    display: none;
}
.prism-error-content {
    display: none;
}
.prism-ErrorMessage {
    /*width: 100%;*/
    /*height: 100%;*/
    background-image: url('../../assets/image/no-zhubo.png') !important;
    background-size: 100% 100% !important;
}
.prism-player {
    background-image: url('../../assets/image/logo1.png');
    background-size: cover;
    /*background-size: 100% auto;*/
    background-position: center center;
    background-repeat: no-repeat;
    position: relative;
    margin-top: -130px !important;
    z-index: 2;
    height: 574px !important;
    border-bottom-left-radius: 10px;
    border-top-left-radius: 10px;
}
.prism-player .prism-big-play-btn {
    background: none !important;
}
.prism-player .prism-big-play-btn .outter {
    border: none !important;
}
.prism-player .prism-cover {
    border-bottom-left-radius: 10px;
    border-top-left-radius: 10px;
}
video {
    height: auto !important;
    border-bottom-left-radius: 10px;
    border-top-left-radius: 10px;
}
</style>
