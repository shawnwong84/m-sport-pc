<template>
    <div>
        <v-reg-login
            :isShow="isShow"
            @dialogVisibleEvent="showDialog"
        ></v-reg-login>
        <div class="fx justify-center">
            <div class="new">
                <div class="new-tab">
                    <div
                        class="pb-5"
                        :class="tagNum === 1 ? 'tab-li' : ''"
                        @click="checkTagNum(1)"
                    >
                        精选
                    </div>
                    <div
                        class="pb-5"
                        :class="tagNum === 2 ? 'tab-li' : ''"
                        @click="checkTagNum(2)"
                    >
                        专家方案
                    </div>
                    <div
                        class="pb-5"
                        :class="tagNum === 3 ? 'tab-li' : ''"
                        @click="checkTagNum(3)"
                    >
                        人气专家
                    </div>
                </div>
                <div>
                    <div v-if="tagNum === 1" class="fx new-box">
                        <div style="width: 40%">
                            <div class="swiper-container">
                                <div class="swiper-wrapper">
                                    <div
                                        class="swiper-slide swiper-slide-new"
                                        v-for="(item, index) in bannerList"
                                        :key="index"
                                    >
                                        <div class="new-img">
                                            <img :src="item.picPath" />
                                        </div>
                                        <div class="new-title">
                                            <div class="anchorDesc">
                                                {{ item.title }}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="ml-15 mr-15" style="width: 70%">
                            <div
                                class="mb-10 mt-10"
                                v-for="(item, index) in articleList"
                                :key="index"
                                v-if="index < 4"
                                @click="toPage('newDeatil', item.id)"
                            >
                                <div v-if="index !== 0" class="articleList">
                                    {{ item.title }}
                                </div>
                                <div v-if="index === 0" class="fx align-items">
                                    <div
                                        class="jx1 mr-10"
                                        v-for="(ite, i) in item.tags"
                                        :key="i"
                                        v-if="i === 0"
                                    >
                                        <div class="anchorDesc">
                                            {{ ite.name }}
                                        </div>
                                    </div>
                                    <div class="fw-700 articleList">
                                        {{ item.title }}
                                    </div>
                                </div>
                            </div>
                            <div
                                class="fx justify-between pb-10"
                                style="border-bottom: 1px solid #e6eaf3"
                            >
                                <div class="fw-700">精彩赛程</div>
                                <div
                                    class="c-7 mr-20 cursor"
                                    @click="toPage2('schedule')"
                                >
                                    更多<img
                                        src="../../assets/image/more-icon.png"
                                        class="ml-5"
                                        width="7px"
                                    />
                                </div>
                            </div>
                            <div class="mt-10 fx">
                                <div
                                    style="width: 33%"
                                    v-for="(item, index) in hotMatchList"
                                    :key="index"
                                    v-if="index < 3"
                                    class="cursor"
                                    @click="toPage('hotBankDeatil', item.id)"
                                >
                                    <div>
                                        {{ item.matchShortName }}&nbsp;{{
                                            item.matchTime
                                        }}
                                    </div>
                                    <div
                                        class="mt-10"
                                        :class="
                                            index === 0 || index === 1
                                                ? 'bd-r'
                                                : ''
                                        "
                                    >
                                        <div class="fx justify-between">
                                            <div class="fx align-items">
                                                <div>
                                                    <img
                                                        :src="item.homeLogo"
                                                        class="match-img"
                                                    />
                                                </div>
                                                <div class="ml-10">
                                                    {{ item.homeName }}
                                                </div>
                                            </div>
                                            <div>{{ item.homeScore }}</div>
                                        </div>
                                        <div class="fx justify-between mt-10">
                                            <div class="fx align-items">
                                                <div>
                                                    <img
                                                        :src="item.awayLogo"
                                                        class="match-img"
                                                    />
                                                </div>
                                                <div class="ml-10">
                                                    {{ item.awayName }}
                                                </div>
                                            </div>
                                            <div>{{ item.awayScore }}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="fx justify-between">
                        <div class="w-70" v-if="tagNum === 1 || tagNum === 2">
                            <div class="fx align-items mt-20">
                                <div>
                                    <img src="../../assets/image/rm-icon.png" />
                                </div>
                                <div class="ml-10 fs-22" v-if="tagNum === 1">
                                    热门方案
                                </div>
                                <div class="ml-10 fs-22" v-if="tagNum === 2">
                                    专家方案
                                </div>
                                <div
                                    class="tab-ball ml-20"
                                    :class="ball === 0 ? 'ball-li' : ''"
                                    @click="checkBall(0)"
                                >
                                    足球
                                </div>
                                <div
                                    class="tab-ball"
                                    :class="ball === 1 ? 'ball-li' : ''"
                                    @click="checkBall(1)"
                                >
                                    篮球
                                </div>
                            </div>
                            <div class="new-list" style="padding: 20px">
                                <div
                                    class="fx justify-between new-list-li cursor"
                                    v-for="(item, index) in hotRankList"
                                    :key="index"
                                    @click="
                                        toPage3('expertsDeatil', item.id, 2)
                                    "
                                >
                                    <div>
                                        <div class="fs-18 fw-600 teamHomeName">
                                            {{
                                                item.matchInfo.teamHomeName
                                            }}&nbsp;VS&nbsp;{{
                                                item.matchInfo.teamAwayName
                                            }}，来看我的精心推荐吧。附送比分
                                        </div>
                                        <div class="fx align-items mt-10">
                                            <div class="radius"></div>
                                            <div class="ml-10">
                                                {{
                                                    item.matchInfo.homeScore
                                                }}-{{
                                                    item.matchInfo.awayScore
                                                }}&nbsp;{{
                                                    item.matchInfo
                                                        .matchShortName
                                                }}
                                            </div>
                                            <div class="fw-600 ml-30">
                                                {{
                                                    item.matchInfo.teamHomeName
                                                }}&nbsp;VS&nbsp;{{
                                                    item.matchInfo.teamAwayName
                                                }}
                                            </div>
                                            <div class="ml-30">
                                                {{
                                                    item.matchInfo.matchDay
                                                }}&nbsp;{{
                                                    item.matchInfo.matchTime
                                                }}
                                            </div>
                                        </div>
                                        <div class="fx align-items mt-10">
                                            <div>
                                                <img
                                                    :src="
                                                        item.expert.anchorIcon
                                                    "
                                                    class="anchorIcon"
                                                />
                                            </div>
                                            <div class="fs-16 ml-10">
                                                {{ item.expert.anchorName }}
                                            </div>
                                            <div class="tabName ml-10">
                                                {{ item.expert.tagName[0] }}
                                            </div>
                                            <div
                                                class="continuousWin ml-10"
                                                v-if="
                                                    item.expert.continuousWin >
                                                    0
                                                "
                                            >
                                                {{
                                                    item.expert.continuousWin
                                                }}连红
                                            </div>
                                            <div class="ml-15 c-9">
                                                {{ item.expert.beforeTime }}
                                            </div>
                                        </div>
                                    </div>
                                    <div style="color: #ff5655">
                                        <div class="fs-26 fw-700">
                                            {{ item.expert.winRate }}%
                                        </div>
                                        <div>命中率</div>
                                    </div>
                                </div>
                                <div class="more-new" @click="getMore">
                                    点击加载更多
                                </div>
                            </div>
                        </div>
                        <div class="w-70" v-if="tagNum === 3">
                            <div
                                class="new-list fx flex-wrap"
                                style="padding: 15px 15px 25px 25px"
                            >
                                <div
                                    v-for="(item, index) in expertsList"
                                    :key="index"
                                    v-if="index < 9"
                                    class="expertsList-box cursor"
                                >
                                    <div
                                        @click="
                                            toPage3(
                                                'expertsDeatil',
                                                item.anchorId,
                                                1,
                                            )
                                        "
                                    >
                                        <div>
                                            <img
                                                :src="item.anchorIcon"
                                                class="anchor-Icon"
                                            />
                                        </div>
                                        <div class="mt-10 fw-700 fs-16">
                                            {{ item.anchorName }}
                                        </div>
                                        <div
                                            class="fx justify-center mt-10"
                                            style="height: 21px"
                                        >
                                            <div
                                                class="tabName"
                                                v-if="item.tagName[0]"
                                            >
                                                {{ item.tagName[0] }}
                                            </div>
                                            <div
                                                class="continuousWin ml-10"
                                                v-if="item.continuousWin > 0"
                                            >
                                                {{ item.continuousWin }}连红
                                            </div>
                                        </div>
                                        <div class="c-9 mt-10 anchor-desc">
                                            {{ item.anchorDesc }}
                                        </div>
                                    </div>
                                    <div class="newQuiz fx justify-between">
                                        <div class="fx align-items">
                                            <div class="radius-red"></div>
                                            <div class="ml-10">
                                                <span v-if="item.newQuiz === 0"
                                                    >暂无最新方案</span
                                                >
                                                <span v-if="item.newQuiz > 0"
                                                    >共有<span class="c-red">{{
                                                        item.newQuiz
                                                    }}</span
                                                    >条新方案</span
                                                >
                                            </div>
                                        </div>
                                        <div>
                                            <div
                                                class="gz-btn ygz"
                                                v-if="!item.follow"
                                                @click="
                                                    focusExpert(item.anchorId)
                                                "
                                            >
                                                +&nbsp;关注
                                            </div>
                                            <div
                                                class="gz-btn wgz"
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
                            </div>
                        </div>
                        <div class="w-30">
                            <div
                                class="fx align-items"
                                :class="tagNum === 3 ? 'mt-30' : 'mt-20'"
                            >
                                <div>
                                    <img src="../../assets/image/zj-icon.png" />
                                </div>
                                <div class="ml-10 fs-22">专家人气榜</div>
                            </div>
                            <div class="star">
                                <div
                                    class="star-list cursor"
                                    v-for="(item, index) in expertsList"
                                    :key="index"
                                >
                                    <div
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
                                            class="star-img"
                                        />
                                    </div>
                                    <div style="width: 100%">
                                        <div class="ml-10 fx justify-between">
                                            <div
                                                class="fx align-items"
                                                @click="
                                                    toPage3(
                                                        'expertsDeatil',
                                                        item.anchorId,
                                                        1,
                                                    )
                                                "
                                            >
                                                <div class="fw-700">
                                                    {{ item.anchorName }}
                                                </div>
                                                <div
                                                    class="continuousWin ml-10"
                                                    v-if="
                                                        item.continuousWin > 0
                                                    "
                                                >
                                                    {{ item.continuousWin }}连红
                                                </div>
                                            </div>
                                            <div
                                                class="gz-btn ygz"
                                                v-if="!item.follow"
                                                @click="
                                                    focusExpert(item.anchorId)
                                                "
                                            >
                                                +&nbsp;关注
                                            </div>
                                            <div
                                                class="gz-btn wgz"
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
                                        <div
                                            class="mt-10 ml-10 c-9 expertDesc"
                                            @click="
                                                toPage3(
                                                    'expertsDeatil',
                                                    item.anchorId,
                                                    1,
                                                )
                                            "
                                        >
                                            {{ item.anchorDesc }}
                                        </div>
                                    </div>
                                </div>
                                <!--                <div class="fx align-items justify-center" v-if="expertsList && expertsList.length >= 6">-->
                                <!--                  <div class="next-btn" @click="nexPage">换一批</div>-->
                                <!--                </div>-->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <v-footer class="mt-30"></v-footer>
    </div>
</template>

<script>
import Swiper from 'swiper';
import footer from '../../compent/footer/index.vue';
import RegandLogin from '../../compent/regAndLogin';
import { Cookie } from '../../api/cookie';
export default {
    name: 'index',
    data() {
        return {
            hotRankList: [],
            bannerList: [],
            articleList: [],
            expertsList: [],
            hotMatchList: [],
            pageNum: 1,
            isShow: 0,
            pageNum1: 1,
            ball: 0,
            tagNum: 1,
            matchHotRankList: [],
        };
    },
    components: { 'v-footer': footer, 'v-reg-login': RegandLogin },
    mounted() {
        this.getMatch();
        this.getHotRankListByBall();
        this.featuredExpertsList();
        this.getTopArticleList();
        this.getArticleListByTagId(0);
    },
    methods: {
        showDialog(visible) {
            this.isShow = visible;
        },
        checkTagNum(num) {
            this.tagNum = num;
        },
        checkBall(num) {
            this.ball = num;
            this.pageNum = 1;
            this.hotRankList = [];
            this.getHotRankListByBall();
        },
        toPage2(name) {
            this.$router.replace({ name: name });
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
        toPage(name, id) {
            let routeData = this.$router.resolve({
                path: name,
                query: {
                    id: id,
                },
            });
            window.open(routeData.href, '_blank');
        },
        // 热门专家
        featuredExpertsList() {
            let param = {
                type: 1,
            };
            this.$axios('post', '/hotRank/featuredExpertsList', param).then(
                (res) => {
                    if (res.code === 200) {
                        this.expertsList = res.data;
                    }
                },
            );
        },
        // 红榜
        getHotRankListByBall() {
            let param = {
                pageNum: this.pageNum,
                pageSize: 30,
                type: this.ball,
            };
            this.$axios('post', '/hotRank/getHotRankListByBall', param).then(
                (res) => {
                    if (res.code === 200) {
                        this.hotRankList = this.hotRankList.concat(
                            res.data.dataList,
                        );
                    }
                },
            );
        },
        getTopArticleList() {
            let param = {
                adType: 5,
            };
            this.$axios('post', '/live/getBannerList', param).then((res) => {
                if (res.code === 200) {
                    this.bannerList = res.data;
                    // eslint-disable-next-line no-new
                    new Swiper('.swiper-container', {
                        speed: 300,
                        loop: true,
                        observer: true, // 修改swiper自己或子元素时，自动初始化swiper
                        observeParents: true, // 修改swiper的父元素时，自动初始化swiper
                        autoplay: {
                            delay: 3000,
                            stopOnLastSlide: false,
                            disableOnInteraction: false,
                        }, // 可选选项，自动滑动
                        pagination: {
                            el: '.swiper-pagination',
                        },
                    });
                }
            });
        },
        getArticleListByTagId(tagId) {
            this.pageNum1 = 1;
            let param = {
                pageNum: 1,
                pageSize: 30,
                tagId: tagId,
            };
            this.$axios('post', '/article/getArticleListByTagId', param).then(
                (res) => {
                    if (res.code === 200) {
                        this.articleList = res.data.dataList;
                        // this.tagNum = tagId
                    }
                },
            );
        },
        getMore() {
            this.pageNum = this.pageNum + 1;
            this.getHotRankListByBall();
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
                            this.featuredExpertsList();
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
                            this.featuredExpertsList();
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
        // 焦点赛程
        getMatch() {
            let param = {
                pageNum: 1,
                pageSize: 3,
            };
            this.$axios('post', '/hotRank/getFocusScheduleList', param).then(
                (res) => {
                    if (res.code === 200) {
                        this.hotMatchList = res.data.dataList;
                    }
                },
            );
        },
    },
};
</script>

<style scoped>
.new {
    width: 1200px;
    min-height: 100vh;
}
.new-tab {
    margin-top: 40px;
    height: 60px;
    background: #feffff;
    box-shadow: 0px 4px 10px 0px rgba(100, 75, 92, 0.2);
    border-radius: 6px;
    border: 1px solid #e6eaf3;
    color: #67728f;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 16px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    padding: 0px 20%;
    cursor: pointer;
}
.tab-li {
    color: #caa05f;
    width: 95px;
    text-align: center;
    border-bottom: 2px solid #caa05f;
}
.more-new {
    color: #d5d5d5;
    border: 1px solid #f2f2f2;
    border-radius: 5px;
    line-height: 40px;
    text-align: center;
    margin-top: 20px;
    cursor: pointer;
}
.more-new:hover {
    color: #f0c682;
    border: 1px solid #f0c682;
}
.red {
    color: #f0c682;
}
.w-70 {
    width: 70%;
}
.w-30 {
    width: 28%;
}
.new-img {
    width: 100%;
    height: 349px;
}
.teamHomeName:hover {
    color: red;
}
.new-img img {
    width: 100%;
    height: 290px;
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
}
.new-box {
    background: #feffff;
    box-shadow: 0px 4px 10px 0px rgba(100, 75, 92, 0.2);
    border-radius: 6px;
    margin-top: 10px;
}
.swiper-slide-new {
    width: 100%;
    height: 290px;
}
.new-title {
    background-image: linear-gradient(to top, #000, rgba(0, 0, 0, 0));
    opacity: 0.9;
    z-index: 9;
    margin-top: -119px;
    font-weight: 700;
    font-size: 22px;
    color: white;
    padding: 0px 20px;
    height: 60px;
    display: flex;
    align-items: center;
}
.new-list {
    width: 100%;
    background: #ffffff;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.07);
    border-radius: 7px;
    margin-top: 20px;
}
.coverPicture {
    width: 180px;
    height: 106px;
    border-radius: 7px;
}
.new-list-li {
    border-bottom: 1px solid #f2f2f2;
    padding: 20px 0px;
}
.likeCount {
    text-align: right;
    padding-top: 68px;
    color: #a4a4a4;
}
.star {
    height: 637px;
    background: #ffffff;
    box-shadow: 0px 10px 16px 0px rgba(0, 0, 0, 0.1);
    border-radius: 6px;
    margin-top: 20px;
    padding: 10px;
}
.star-img {
    width: 63px;
    height: 63px;
    border-radius: 50%;
}
.star-list {
    margin: 10px;
    padding: 10px 0px;
    display: flex;
    border-bottom: 1px solid #f2f2f2;
}
.next-btn {
    width: 86px;
    height: 29px;
    border: 1px solid #f8413d;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #f8413d;
    cursor: pointer;
    margin-top: 10px;
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
.articleList {
    width: 100%;
    color: #333333;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    cursor: pointer;
}
.articleList:hover {
    color: #f8413d;
}
.match-img {
    width: 26px;
    height: 26px;
    border-radius: 50%;
}
.bd-r {
    border-right: 1px solid #e6eaf3;
    padding-right: 20px;
    margin-right: 20px;
}
.tab-ball {
    width: 38px;
    line-height: 21px;
    background: #ffffff;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.1);
    border-radius: 2px;
    text-align: center;
    color: #787878;
    font-size: 12px;
    margin-right: 10px;
    cursor: pointer;
}
.ball-li {
    background: linear-gradient(132deg, #ebcbab 0%, #dbb170 100%);
    box-shadow: 0px 2px 4px 0px rgba(221, 181, 122, 0.3);
    color: #693d13;
}
.radius {
    width: 8px;
    height: 8px;
    background: #999999;
    border-radius: 100%;
}
.anchorIcon {
    width: 31px;
    height: 31px;
    border: 1px solid #e0b982;
    border-radius: 100%;
    margin-top: 5px;
}
.continuousWin {
    background: #ffeded;
    border-radius: 20px;
    color: #ff5655;
    padding: 1px 5px;
    font-size: 12px;
}
.tabName {
    background: #fbefe3;
    border-radius: 20px;
    color: #a06325;
    padding: 1px 5px;
    font-size: 12px;
    position: relative;
}
.gz-btn {
    width: 50px;
    line-height: 24px;
    border-radius: 3px;
    text-align: center;
    font-size: 12px;
    cursor: pointer;
}
.ygz {
    background: linear-gradient(132deg, #ebcbab 0%, #dbb170 100%);
    color: #ffffff;
}
.wgz {
    background: #f2f2f2;
    color: #aaaaaa;
}
.anchor-desc {
    height: 80px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 5;
    overflow: hidden;
    margin-top: 15px;
}
.newQuiz {
    border-top: 1px solid #e6eaf3;
    margin-top: 15px;
    padding-top: 13px;
}
.radius-red {
    width: 8px;
    height: 8px;
    background: #ff5655;
    border-radius: 100%;
}
.expertDesc {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
}
.expertsList-box {
    width: 32%;
    height: 325px;
    background: #feffff;
    border: 1px solid #e6eaf3;
    margin-top: 10px;
    margin-right: 10px;
    text-align: center;
    padding: 20px;
    box-sizing: border-box;
}
.anchor-Icon {
    width: 80px;
    height: 80px;
    border-radius: 100%;
}
</style>
