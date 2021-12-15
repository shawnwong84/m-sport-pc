<template>
    <div>
        <v-reg-login
            :isShow="isShow"
            @dialogVisibleEvent="showDialog"
        ></v-reg-login>
        <div class="fx justify-center">
            <div class="new">
                <div>
                    <div class="fx justify-between">
                        <div class="w-30">
                            <div class="star">
                                <div>
                                    <img
                                        :src="hotRankInfo.anchorIcon"
                                        class="star-img"
                                    />
                                </div>
                                <div class="mt-10 fs-20 fw-700">
                                    {{ hotRankInfo.anchorName }}
                                </div>
                                <div class="fx justify-center">
                                    <div
                                        class="continuousWin mt-10"
                                        v-if="hotRankInfo.continuousWin > 0"
                                    >
                                        {{ hotRankInfo.continuousWin }}连红
                                    </div>
                                </div>
                                <div class="c-9 mt-10">
                                    {{ hotRankInfo.anchorDesc }}
                                </div>
                                <div class="fx justify-center mt-30">
                                    <div
                                        class="gz-btn ygz"
                                        v-if="!hotRankInfo.follow"
                                        @click="
                                            focusExpert(hotRankInfo.anchorId)
                                        "
                                    >
                                        +&nbsp;关注
                                    </div>
                                    <div
                                        class="gz-btn wgz"
                                        v-if="hotRankInfo.follow"
                                        @click="
                                            cancelFocusExpert(
                                                hotRankInfo.anchorId,
                                            )
                                        "
                                    >
                                        已关注
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="w-70">
                            <div
                                v-if="type === 1"
                                class="new-list"
                                style="padding: 20px"
                            >
                                <div class="fs-22">专家方案</div>
                                <div class="db-b"></div>
                                <div
                                    v-if="
                                        hotRankList && hotRankList.length !== 0
                                    "
                                    class="new-list-li cursor fx justify-between"
                                    v-for="(item, index) in hotRankList"
                                    :key="index"
                                    @click="
                                        toPage3('expertsDeatil', item.id, 2)
                                    "
                                >
                                    <div>
                                        <div class="fs-18 fw-600">
                                            {{
                                                getWeek(
                                                    '2021-' +
                                                        item.matchInfo.matchDay,
                                                )
                                            }}
                                            &nbsp;&nbsp;{{
                                                item.matchInfo.matchShortName
                                            }}
                                            &nbsp;&nbsp;{{
                                                item.matchInfo.teamHomeName
                                            }}&nbsp;VS&nbsp;{{
                                                item.matchInfo.teamAwayName
                                            }}
                                        </div>
                                        <div class="fx align-items mt-10 fs-15">
                                            <div class="radius"></div>
                                            <div class="ml-10">
                                                {{
                                                    item.matchInfo.homeScore
                                                }}-{{
                                                    item.matchInfo.awayScore
                                                }}
                                            </div>
                                            <div>
                                                {{
                                                    item.matchInfo
                                                        .matchShortName
                                                }}
                                            </div>
                                            <div class="ml-30">
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
                                        <div class="fs-15 mt-20">
                                            <span class="c-7"
                                                >{{
                                                    item.expert.beforeTime
                                                }}&nbsp;&nbsp;&nbsp;发布</span
                                            >
                                            <span class="ml-30">查看</span>
                                        </div>
                                    </div>
                                    <div>
                                        <img
                                            v-if="
                                                item.betPosition === 0 &&
                                                item.result === '胜'
                                            "
                                            src="../../assets/image/ymz.png"
                                            width="100%"
                                        />
                                        <img
                                            v-if="
                                                item.betPosition === 1 &&
                                                item.result === '平'
                                            "
                                            src="../../assets/image/ymz.png"
                                            width="100%"
                                        />
                                        <img
                                            v-if="
                                                item.betPosition === 2 &&
                                                item.result === '负'
                                            "
                                            src="../../assets/image/ymz.png"
                                            width="100%"
                                        />
                                        <img
                                            v-if="
                                                item.betPosition === 0 &&
                                                item.result !== '胜'
                                            "
                                            src="../../assets/image/wmz.png"
                                            width="100%"
                                        />
                                        <img
                                            v-if="
                                                item.betPosition === 1 &&
                                                item.result !== '平'
                                            "
                                            src="../../assets/image/wmz.png"
                                            width="100%"
                                        />
                                        <img
                                            v-if="
                                                item.betPosition === 2 &&
                                                item.result !== '负'
                                            "
                                            src="../../assets/image/wmz.png"
                                            width="100%"
                                        />
                                    </div>
                                </div>
                                <!--                <div class="more-new" @click="getMore">点击加载更多</div>-->
                                <div
                                    v-if="hotRankList.length === 0"
                                    class="ta-c"
                                    style="margin-top: 20%; margin-bottom: 20%"
                                >
                                    <div>
                                        <img
                                            src="../../assets/image/null.png"
                                        />
                                    </div>
                                    <div class="ta-c mt-20">
                                        列表空空如也...
                                    </div>
                                </div>
                            </div>
                            <div
                                class="new-list"
                                style="padding: 20px"
                                v-if="type === 2"
                            >
                                <div class="fs-18 fw-700">
                                    {{
                                        hotRankInfo.teamInfo.home.teamName
                                    }}&nbsp;VS&nbsp;{{
                                        hotRankInfo.teamInfo.away.teamName
                                    }}, 来看我的精心推荐吧。附送比分
                                </div>
                                <div class="c-9 mt-10">
                                    发布时间&nbsp;{{ hotRankInfo.releaseTime }}
                                </div>
                                <div class="mt-10">
                                    {{ hotRankInfo.teamInfo.home.score }}-{{
                                        hotRankInfo.teamInfo.away.score
                                    }}&nbsp;
                                    {{ hotRankInfo.competitionShortName }}
                                    <span
                                        style="border-left: 1px solid #d8d8d8"
                                        class="ml-10 pl-10"
                                        >{{ hotRankInfo.matchDay }}&nbsp;{{
                                            hotRankInfo.matchTime
                                        }}</span
                                    >
                                </div>
                                <div class="win-box">
                                    <img
                                        v-if="
                                            hotRankInfo.betPosition === 0 &&
                                            hotRankInfo.result === '胜'
                                        "
                                        src="../../assets/image/win.png"
                                        width="100%"
                                    />
                                    <img
                                        v-if="
                                            hotRankInfo.betPosition === 1 &&
                                            hotRankInfo.result === '平'
                                        "
                                        src="../../assets/image/win.png"
                                        width="100%"
                                    />
                                    <img
                                        v-if="
                                            hotRankInfo.betPosition === 2 &&
                                            hotRankInfo.result === '负'
                                        "
                                        src="../../assets/image/win.png"
                                        width="100%"
                                    />
                                    <img
                                        v-if="
                                            hotRankInfo.betPosition === 0 &&
                                            hotRankInfo.result !== '胜'
                                        "
                                        src="../../assets/image/los.png"
                                        width="100%"
                                    />
                                    <img
                                        v-if="
                                            hotRankInfo.betPosition === 1 &&
                                            hotRankInfo.result !== '平'
                                        "
                                        src="../../assets/image/los.png"
                                        width="100%"
                                    />
                                    <img
                                        v-if="
                                            hotRankInfo.betPosition === 2 &&
                                            hotRankInfo.result !== '负'
                                        "
                                        src="../../assets/image/los.png"
                                        width="100%"
                                    />
                                </div>
                                <div
                                    class="fx justify-center"
                                    style="width: 100%; margin-top: -40px"
                                    v-if="hotRankInfo.matchOdds"
                                >
                                    <div style="width: 60%">
                                        <div
                                            class="fx justify-center align-items"
                                        >
                                            <div class="fs-16 fw-700">
                                                {{
                                                    hotRankInfo.teamInfo.home
                                                        .teamName
                                                }}
                                            </div>
                                            <div class="ml-20">
                                                <img
                                                    :src="
                                                        hotRankInfo.teamInfo
                                                            .home.teamLogo
                                                    "
                                                    style="
                                                        width: 36px;
                                                        height: 36px;
                                                    "
                                                />
                                            </div>
                                            <div
                                                class="ml-30 mr-30 fs-16 fw-700"
                                            >
                                                {{
                                                    hotRankInfo.teamInfo.home
                                                        .score
                                                }}-{{
                                                    hotRankInfo.teamInfo.away
                                                        .score
                                                }}
                                            </div>
                                            <div>
                                                <img
                                                    :src="
                                                        hotRankInfo.teamInfo
                                                            .away.teamLogo
                                                    "
                                                    style="
                                                        width: 36px;
                                                        height: 36px;
                                                    "
                                                />
                                            </div>
                                            <div class="ml-20 fs-16 fw-700">
                                                {{
                                                    hotRankInfo.teamInfo.away
                                                        .teamName
                                                }}
                                            </div>
                                        </div>
                                        <div class="fx justify-between">
                                            <div
                                                class="odds"
                                                :class="
                                                    hotRankInfo.result === '胜'
                                                        ? 'bg-red'
                                                        : ''
                                                "
                                            >
                                                <div
                                                    class="fs-16"
                                                    style="
                                                        position: relative;
                                                        top: 20px;
                                                    "
                                                >
                                                    主胜
                                                </div>
                                                <div class="mt-24">
                                                    {{
                                                        hotRankInfo.matchOdds
                                                            .wins
                                                    }}
                                                </div>
                                                <div
                                                    v-if="
                                                        hotRankInfo.result ===
                                                        '胜'
                                                    "
                                                >
                                                    <img
                                                        src="../../assets/image/huang.png"
                                                        class="win-icon"
                                                    />
                                                </div>
                                            </div>
                                            <div
                                                class="odds"
                                                :class="
                                                    hotRankInfo.result === '平'
                                                        ? 'bg-red'
                                                        : ''
                                                "
                                            >
                                                <div
                                                    class="fs-16"
                                                    style="
                                                        position: relative;
                                                        top: 20px;
                                                    "
                                                >
                                                    平局
                                                </div>
                                                <div class="mt-24">
                                                    {{
                                                        hotRankInfo.matchOdds
                                                            .draw
                                                    }}
                                                </div>
                                                <div
                                                    v-if="
                                                        hotRankInfo.result ===
                                                        '平'
                                                    "
                                                >
                                                    <img
                                                        src="../../assets/image/huang.png"
                                                        class="win-icon"
                                                    />
                                                </div>
                                            </div>
                                            <div
                                                class="odds"
                                                :class="
                                                    hotRankInfo.result === '负'
                                                        ? 'bg-red'
                                                        : ''
                                                "
                                            >
                                                <div
                                                    class="fs-16"
                                                    style="
                                                        position: relative;
                                                        top: 20px;
                                                    "
                                                >
                                                    客胜
                                                </div>
                                                <div class="mt-24">
                                                    {{
                                                        hotRankInfo.matchOdds
                                                            .lose
                                                    }}
                                                </div>
                                                <div
                                                    v-if="
                                                        hotRankInfo.result ===
                                                        '负'
                                                    "
                                                >
                                                    <img
                                                        src="../../assets/image/huang.png"
                                                        class="win-icon"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="mt-20 fs-15" style="color: #4a4a4a">
                                    推荐理由
                                </div>
                                <div class="mt-20">
                                    <div
                                        class="hot-content"
                                        v-html="hotRankInfo.content"
                                    ></div>
                                </div>
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
import footer from '../../compent/footer/index.vue';
import RegandLogin from '../../compent/regAndLogin';
import { Cookie } from '../../api/cookie';
export default {
    name: 'index',
    data() {
        return {
            hotRankList: [],
            hotRankInfo: [],
            isShow: 0,
            pageNum: 1,
            type: parseInt(this.$route.query.type),
        };
    },
    components: { 'v-footer': footer, 'v-reg-login': RegandLogin },
    mounted() {
        console.log(this.type);
        if (this.type === 2) {
            this.getHotRankInfoById();
        } else {
            this.getExpertInfo();
            this.getHotRankAssociate();
        }
    },
    methods: {
        showDialog(visible) {
            this.isShow = visible;
        },
        toPage2(name) {
            this.$router.replace({ name: name });
        },
        toPage(name, id) {
            this.$router.replace({ name: name, query: { id: id } });
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
            location.reload();
        },
        // 其他方案
        getHotRankAssociate() {
            let param = {
                expertId: this.$route.query.id,
                pageNum: 1,
                pageSize: 30,
                type: 0,
            };
            this.$axios('post', '/hotRank/getHotRankListByBall', param).then(
                (res) => {
                    if (res.code === 200) {
                        this.hotRankList = res.data.dataList;
                    }
                },
            );
        },
        // 方案详情
        getHotRankInfoById() {
            let param = {
                id: this.$route.query.id,
            };
            this.$axios('post', '/match/getHotRankInfoById', param).then(
                (res) => {
                    if (res.code === 200) {
                        this.hotRankInfo = res.data;
                    }
                },
            );
        },
        // 获取周几
        getWeek(num) {
            var strTime = num; // 字符串日期格式
            var date = new Date(Date.parse(strTime.replace(/-/g, '/')));
            var a = ['日', '一', '二', '三', '四', '五', '六'];
            var week = date.getDay();
            return '周' + a[week];
        },
        // 获取专家基本信息
        getExpertInfo() {
            let param = {
                id: this.$route.query.id,
            };
            this.$axios('post', '/hotRank/getExpertInfo', param).then((res) => {
                if (res.code === 200) {
                    this.hotRankInfo = res.data;
                }
            });
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
                            if (this.type === 2) {
                                this.getHotRankInfoById();
                            } else {
                                this.getExpertInfo();
                            }
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
                            if (this.type === 2) {
                                this.getHotRankInfoById();
                            } else {
                                this.getExpertInfo();
                            }
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

<style scoped>
.new {
    width: 1200px;
    min-height: 100vh;
}
.w-70 {
    width: 78%;
}
.w-30 {
    width: 20%;
}
.new-list {
    width: 100%;
    background: #ffffff;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.07);
    border-radius: 7px;
    margin-top: 20px;
}
.new-list-li {
    border-bottom: 1px solid #f2f2f2;
    padding: 20px 0px;
}
.star {
    height: 530px;
    background: #ffffff;
    box-shadow: 0px 10px 16px 0px rgba(0, 0, 0, 0.1);
    border-radius: 6px;
    margin-top: 20px;
    padding: 20px;
    text-align: center;
}
.star-img {
    width: 80px;
    height: 80px;
    border-radius: 100%;
}
.db-b {
    border-bottom: 1px solid #f6f5f5;
    margin-right: -20px;
    margin-left: -20px;
    margin-top: 15px;
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
    width: 48px;
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
    width: 140px;
    line-height: 42px;
    border-radius: 3px;
    text-align: center;
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
.odds {
    background: #f4f8f9;
    text-align: center;
    width: 32.5%;
    color: #333333;
    border-radius: 3px;
    margin-top: 15px;
}
.bg-red {
    background: #ff5655;
    color: #ffffff;
}
.win-icon {
    width: 30px;
    position: relative;
    right: -73px;
}
.win-box {
    width: 260px;
    position: relative;
    left: 65%;
}
</style>
<style>
.hot-content {
    font-size: 15px;
    color: #4a4a4a;
}
.hot-content p {
    margin-top: 10px;
    font-size: 15px;
    color: #4a4a4a;
}
</style>
