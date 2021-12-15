<template>
    <div class="fx justify-center" style="background: #f9fbff">
        <div class="w-1200">
            <div class="match-top">
                <div class="fx align-items">
                    <div class="c-69" style="text-align: right">
                        <div class="fs-20 fw-700">
                            {{ ballData.teamMatchInfo.homeTeam.teamName }}
                        </div>
                        <div class="fs-12">联赛排名</div>
                    </div>
                    <div class="ml-10">
                        <img
                            :src="ballData.teamMatchInfo.homeTeam.teamLogo"
                            style="width: 64px; height: 64px"
                        />
                    </div>
                </div>
                <div class="ta-c">
                    <div class="fs-12 c-69">
                        2021-{{ ballData.matchDay }} {{ ballData.matchTime }}
                    </div>
                    <div class="competitionShortName">
                        {{ ballData.teamMatchInfo.matchShortName }}
                    </div>
                </div>
                <div
                    class="fx align-items"
                    v-if="ballData.teamMatchInfo.awayTeam"
                >
                    <div class="mr-10">
                        <img
                            :src="ballData.teamMatchInfo.awayTeam.teamLogo"
                            style="width: 64px; height: 64px"
                        />
                    </div>
                    <div class="c-69" style="text-align: left">
                        <div class="fs-20 fw-700">
                            {{ ballData.teamMatchInfo.awayTeam.teamName }}
                        </div>
                        <div class="fs-12">联赛排名</div>
                    </div>
                </div>
            </div>
            <div class="jifen">
                <div class="mt-20 fw-700 ta-c">积分榜</div>
                <div class="fx align-items pl-10 pr-10 pt-10">
                    <div class="div-left bg-red"></div>
                    <img
                        :src="ballData.teamMatchInfo.homeTeam.teamLogo"
                        style="width: 15px; height: 15px"
                        class="mr-5"
                    />
                    <div>{{ ballData.teamMatchInfo.homeTeam.teamName }}</div>
                </div>
                <table class="table">
                    <tr class="bg-e6">
                        <td
                            v-for="(key, index) in ballData.teamIntegralDto
                                .homeIntegral.header"
                            :key="key + index"
                        >
                            {{ key }}
                        </td>
                    </tr>
                    <tr class="c-76">
                        <td
                            v-for="(key, index) in ballData.teamIntegralDto
                                .homeIntegral.integralHome"
                            :key="key + index"
                        >
                            {{ key }}
                        </td>
                    </tr>
                    <tr class="c-76">
                        <td
                            v-for="(key, index) in ballData.teamIntegralDto
                                .homeIntegral.integralAway"
                            :key="key + index"
                        >
                            {{ key }}
                        </td>
                    </tr>
                    <tr class="c-76">
                        <td
                            v-for="(key, index) in ballData.teamIntegralDto
                                .homeIntegral.integralSum"
                            :key="key + index"
                        >
                            {{ key }}
                        </td>
                    </tr>
                </table>

                <div class="fx align-items mt-20 pl-10 pr-10">
                    <div class="div-left bg-bule"></div>
                    <img
                        :src="ballData.teamMatchInfo.awayTeam.teamLogo"
                        style="width: 15px; height: 15px"
                        class="mr-5"
                    />
                    <div>{{ ballData.teamMatchInfo.awayTeam.teamName }}</div>
                </div>
                <table class="table">
                    <tr class="bg-e6">
                        <td
                            v-for="(key, index) in ballData.teamIntegralDto
                                .awayIntegral.header"
                            :key="key + index"
                        >
                            {{ key }}
                        </td>
                    </tr>
                    <tr class="c-76">
                        <td
                            v-for="(key, index) in ballData.teamIntegralDto
                                .awayIntegral.integralHome"
                            :key="key + index"
                        >
                            {{ key }}
                        </td>
                    </tr>
                    <tr class="c-76">
                        <td
                            v-for="(key, index) in ballData.teamIntegralDto
                                .awayIntegral.integralAway"
                            :key="key + index"
                        >
                            {{ key }}
                        </td>
                    </tr>
                    <tr class="c-76">
                        <td
                            v-for="(key, index) in ballData.teamIntegralDto
                                .awayIntegral.integralSum"
                            :key="key + index"
                        >
                            {{ key }}
                        </td>
                    </tr>
                </table>
            </div>
            <div class="ta-c fw-700 mt-20">信息</div>
            <div class="fx justify-between">
                <div
                    class="info-box"
                    style="
                        border-top-left-radius: 12px;
                        border-bottom-left-radius: 12px;
                    "
                >
                    <div class="ta-c" style="margin-top: -30px">
                        <img
                            :src="matchIntelligence.home.teamIcon"
                            class="teamLogo"
                        />
                    </div>
                    <div class="ta-c c-1c mt-5">
                        {{ matchIntelligence.home.teamName }}
                    </div>
                    <div class="msg-box">
                        <div class="c-red mt-10">
                            <img
                                src="../../assets/image/youlixinxi.png"
                                style="margin-top: -5px; margin-right: 5px"
                            />有利信息
                        </div>
                        <div
                            class="c-43 fs-12 mt-10 ml-10"
                            v-if="matchIntelligence.home.good.length !== 0"
                        >
                            <div
                                class=""
                                v-for="(item, index) in matchIntelligence.home
                                    .good"
                                :key="index"
                            >
                                <div class="br-red"></div>
                                <div class="info-main">{{ item }}</div>
                            </div>
                        </div>
                        <div
                            class="c-43 fs-12 ml-25 mt-10"
                            v-if="matchIntelligence.home.good.length === 0"
                        >
                            暂无有利信息...
                        </div>
                        <div class="c-bule mt-10">
                            <img
                                src="../../assets/image/bulixinxi.png"
                                style="margin-top: -5px; margin-right: 5px"
                            /><span class="mtt-10">不利信息</span>
                        </div>
                        <div
                            class="c-43 fs-12 ml-25 mt-10"
                            v-if="matchIntelligence.home.bad.length !== 0"
                        >
                            <div
                                class=""
                                v-for="(item, index) in matchIntelligence.home
                                    .bad"
                                :key="index"
                            >
                                <div class="br-bule"></div>
                                <div class="info-main">{{ item }}</div>
                            </div>
                        </div>
                        <div
                            class="c-43 fs-12 ml-25 mt-10"
                            v-if="matchIntelligence.home.bad.length === 0"
                        >
                            暂无不利信息...
                        </div>
                    </div>
                </div>
                <div style="margin-top: 46px">
                    <div><img src="../../assets/image/xiawen.png" /></div>
                    <div class="c-aa mt-10 pl-20">
                        <img
                            src="../../assets/image/zhongli-icon.png"
                            style="margin-top: -5px; margin-right: 5px"
                        />中利信息
                    </div>
                    <div
                        class="c-43 fs-12 ml-25 mt-10"
                        v-if="matchIntelligence.neutral.length !== 0"
                    >
                        <div
                            class=""
                            v-for="(item, index) in matchIntelligence.neutral"
                            :key="index"
                        >
                            <div class="br-ca"></div>
                            <div class="info-main">{{ item }}</div>
                        </div>
                    </div>
                    <div
                        class="c-43 fs-12 mt-10"
                        style="margin-left: 40px"
                        v-if="matchIntelligence.neutral.length === 0"
                    >
                        暂无中利信息...
                    </div>
                </div>
                <div
                    class="info-box"
                    style="
                        border-bottom-right-radius: 12px;
                        border-top-right-radius: 12px;
                    "
                >
                    <div class="ta-c" style="margin-top: -30px">
                        <img
                            :src="matchIntelligence.away.teamIcon"
                            class="teamLogo"
                        />
                    </div>
                    <div class="ta-c c-1c mt-5">
                        {{ matchIntelligence.away.teamName }}
                    </div>
                    <div class="msg-box">
                        <div class="c-red mt-10">
                            <img
                                src="../../assets/image/youlixinxi.png"
                                width="18px"
                                style="margin-top: -5px; margin-right: 5px"
                            />有利信息
                        </div>
                        <div
                            class="c-43 fs-12 ml-25 mt-10"
                            v-if="matchIntelligence.away.good.length !== 0"
                        >
                            <div
                                class=""
                                v-for="(item, index) in matchIntelligence.away
                                    .good"
                                :key="index"
                            >
                                <div class="br-red"></div>
                                <div class="info-main">{{ item }}</div>
                            </div>
                        </div>
                        <div
                            class="c-43 fs-12 ml-25 mt-10"
                            v-if="matchIntelligence.away.good.length === 0"
                        >
                            暂无有利信息...
                        </div>
                        <div class="c-bule mt-10">
                            <img
                                src="../../assets/image/bulixinxi.png"
                                width="18px"
                                style="margin-top: -5px; margin-right: 5px"
                            />不利信息
                        </div>
                        <div
                            class="c-43 fs-12 ml-25 mt-10"
                            v-if="matchIntelligence.away.bad.length !== 0"
                        >
                            <div
                                class=""
                                v-for="(item, index) in matchIntelligence.away
                                    .bad"
                                :key="index"
                            >
                                <div class="br-bule"></div>
                                <div class="info-main">{{ item }}</div>
                            </div>
                        </div>
                        <div
                            class="c-43 fs-12 ml-25 mt-10"
                            v-if="matchIntelligence.away.bad.length === 0"
                        >
                            暂无不利信息...
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div class="fx zhishu">
                    <div class="fx" style="width: 100%">
                        <div class="" style="width: 100%">
                            <div class="fx">
                                <div
                                    class="w-20 db-right bg-e6 fx align-items justify-center"
                                    style="height: 75px"
                                >
                                    公司
                                </div>
                                <div
                                    class="bg-e6 db-right"
                                    style="width: 80%; text-align: center"
                                >
                                    <div class="line-35">让分</div>
                                    <div class="fx justify-between c-76 bd-top">
                                        <div class="w-15 c-9D db-right">主</div>
                                        <div class="w-15 c-9D db-right">初</div>
                                        <div class="w-15 c-9D db-right">客</div>
                                        <div class="w-15 c-9D db-right">主</div>
                                        <div class="w-15 c-9D db-right">即</div>
                                        <div class="w-15 c-9D">平</div>
                                    </div>
                                </div>
                            </div>
                            <div
                                class="fx justify-between c-76"
                                v-for="(item, index) in matchFootballOdds"
                                :key="index"
                                style="width: 100%"
                                :class="{
                                    on: index % 2 == 0,
                                    off: index % 2 != 0,
                                }"
                            >
                                <div class="w-20 db-right">
                                    {{ item.companyInfos[0].companyName }}
                                </div>
                                <div
                                    v-for="(value, key) in item.companyInfos[0]
                                        .ranFen"
                                    :key="key"
                                    class="fx"
                                    style="width: 40%"
                                >
                                    <div class="ta-c w-30 c-9D db-right">
                                        {{ value.home }}
                                    </div>
                                    <div class="ta-c w-30 c-9D db-right">
                                        {{ value.handicap }}
                                    </div>
                                    <div class="ta-c w-30 c-9D db-right">
                                        {{ value.away }}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="fx justify-center" style="width: 100%">
                        <div class="" style="width: 100%">
                            <div
                                style="width: 100%; text-align: center"
                                class="bg-e6 db-right"
                            >
                                <div class="line-35">欧赔</div>
                                <div
                                    class="fx bd-top c-76"
                                    style="padding-bottom: 4px"
                                >
                                    <div class="w-20 c-9D db-right">胜</div>
                                    <div class="w-20 c-9D db-right">初</div>
                                    <div class="w-20 c-9D db-right">负</div>
                                    <div class="w-20 c-9D db-right">胜</div>
                                    <div class="w-20 c-9D db-right">即</div>
                                    <div class="w-20 c-9D db-right">负</div>
                                </div>
                            </div>
                            <div
                                class="fx justify-between c-76"
                                v-for="(item, index) in matchFootballOdds"
                                :key="index"
                                style="width: 100%"
                                :class="{
                                    on: index % 2 == 0,
                                    off: index % 2 != 0,
                                }"
                            >
                                <div
                                    v-for="(value, key) in item.companyInfos[0]
                                        .ouZhi"
                                    :key="key"
                                    class="fx justify-between"
                                    style="width: 60%"
                                >
                                    <div class="w-30 c-9D db-right">
                                        {{ value.win }}
                                    </div>
                                    <div class="w-30 c-9D db-right">
                                        {{ value.draw }}
                                    </div>
                                    <div class="w-30 c-9D db-right">
                                        {{ value.loss }}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="fx justify-center" style="width: 100%">
                        <div class="" style="width: 100%">
                            <div
                                style="width: 100%; text-align: center"
                                class="bg-e6"
                            >
                                <div class="line-35">大小球</div>
                                <div
                                    class="fx nav-bg bd-top c-76"
                                    style="padding-bottom: 4px"
                                >
                                    <div class="w-20 c-9D db-right">大</div>
                                    <div class="w-20 c-9D db-right">初</div>
                                    <div class="w-20 c-9D db-right">小</div>
                                    <div class="w-20 c-9D db-right">大</div>
                                    <div class="w-20 c-9D db-right">即</div>
                                    <div class="w-20 c-9D db-right">小</div>
                                </div>
                            </div>
                            <div
                                class="fx justify-between c-76"
                                v-for="(item, index) in matchFootballOdds"
                                :key="index"
                                style="width: 100%"
                                :class="{
                                    on: index % 2 == 0,
                                    off: index % 2 != 0,
                                }"
                            >
                                <div
                                    v-for="(value, key) in item.companyInfos[0]
                                        .daXiao"
                                    :key="key"
                                    class="fx justify-between"
                                    style="width: 60%"
                                >
                                    <div class="w-30 c-9D db-right">
                                        {{ value.over }}
                                    </div>
                                    <div class="w-30 c-9D db-right">
                                        {{ value.handicap }}
                                    </div>
                                    <div class="w-30 c-9D">
                                        {{ value.under }}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="ta-c fw-700 mt-30">热门直播</div>
            <div class="fx flex-wrap" v-if="hotList && hotList.length !== 0">
                <div
                    class="hot-content"
                    v-for="(item, index) in hotList"
                    :key="index"
                    @click="toPage('room', item.roomId)"
                    v-if="index < 4"
                >
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
                                    class="text-overflow fs-18"
                                    style="width: 150px"
                                >
                                    {{ item.roomName }}
                                </div>
                                <div class="fs-12 c-9">
                                    {{ item.anchorName }}
                                </div>
                            </div>
                        </div>
                        <div class="c-9 fs-12" style="padding-top: 25px">
                            {{ item.hotNum }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'index',
    data() {
        return {
            matchFootballOdds: [],
            ballData: [],
            hotList: [],
            matchIntelligence: [],
        };
    },
    created() {
        this.$nextTick(() => {
            this.getMatchInfoBasketball();
            this.getMatchFootballOdds();
            this.getMatchIntelligence();
            this.getMatchInfo();
        });
    },
    methods: {
        getMatchInfo() {
            let param = {
                pageNum: 1,
                pageSize: 4,
            };
            this.$axios('post', '/live/getHotLiveList', param).then((res) => {
                if (res.code === 200) {
                    this.hotList = res.data.dataList;
                }
            });
        },
        toPage(name, id) {
            this.$router.push({ name: name, query: { id: id } });
        },
        getMatchInfoBasketball() {
            let param = {
                id: this.$route.query.id,
            };
            this.$axios('post', '/match/matchInfoBasketball', param).then(
                (res) => {
                    if (res.code === 200) {
                        this.ballData = res.data;
                    }
                },
            );
        },
        // 指数
        getMatchFootballOdds() {
            let param = {
                id: this.$route.query.id,
            };
            this.$axios('post', '/match/matchBasketballOdds', param).then(
                (res) => {
                    if (res.code === 200) {
                        this.matchFootballOdds = res.data;
                    }
                },
            );
        },
        // 情报
        getMatchIntelligence() {
            let param = {
                id: this.$route.query.id,
            };
            this.$axios('post', '/pcHome/getMatchIntelligence', param).then(
                (res) => {
                    if (res.code === 200) {
                        this.matchIntelligence = res.data;
                    }
                },
            );
        },
    },
};
</script>

<style scoped>
.w-1200 {
    width: 1200px;
}
.match-top {
    margin-top: 30px;
    width: 1200px;
    height: 130px;
    background-image: url('../../assets/image/bg.png');
    background-size: 100% auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 25%;
}
.c-69 {
    color: #693d13;
}
.c-1c {
    color: #1c1c25;
}
.c-43 {
    color: #434a66;
}
.competitionShortName {
    background: rgb(236, 197, 136);
    border-radius: 4px;
    color: #693d13;
    padding: 15px 20px;
    font-size: 12px;
    margin-top: 6px;
}
.teamLogo {
    width: 80px;
    height: 80px;
    background: white;
    border-radius: 100%;
    border: 1px solid #e6eaf3;
    box-shadow: 3px 0px 8px 0px #e6eaf3;
}
.info-box {
    width: 48%;
    background: #ffffff;
    border: 1px solid #e6eaf3;
    margin-top: 50px;
}
.msg-box {
    margin: 20px 10%;
}
.c-red {
    color: #ff5438;
}
.c-bule {
    color: #4280dc;
}
.c-76 {
    color: #76809c;
}
.bg-e6 {
    background: rgb(235, 239, 252);
}
.w-20 {
    width: 20%;
    text-align: center;
    line-height: 35px;
}
.w-30 {
    width: 35%;
    text-align: center;
    line-height: 35px;
}
.w-15 {
    width: 30%;
    text-align: center;
    line-height: 35px;
}
.bd-top {
    border-top: 1px solid #e6eaf3;
}
.db-right {
    border-right: 1px solid #e6eaf3;
}
.line-35 {
    line-height: 35px;
}
.zhishu {
    border-radius: 12px;
    border: 1px solid #e6eaf3;
    margin-top: 30px;
}

/*积分*/
.jifen {
    background: white;
    width: 100%;
    padding: 10px 60px;
    margin-top: -20px;
}
.bg-red {
    background: red;
}
.bg-bule {
    background: blue;
}
.div-left {
    width: 3px;
    height: 14px;
    border-radius: 5px;
    margin-right: 10px;
}
.table {
    width: 100%;
    margin: 10px;
    border-color: #e6eaf3;
    border-collapse: collapse;
}
.table td {
    text-align: center;
    line-height: 34px;
    border: 1px solid #e6eaf3;
}

/*直播*/
.hot-content {
    width: 24%;
    height: 100%;
    margin: 10px 5px;
    z-index: 9;
}
.bg-fff {
    background: white;
    padding: 8px 10px;
    margin-top: 1px;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
}
.anchorAvatar-img {
    width: 46px;
    height: 46px;
    border-radius: 50%;
}

.br-red {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #ff5438;
    margin-left: -3px;
}
.br-bule {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #4280dc;
    margin-left: -3px;
}
.br-ca {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #caa05f;
    margin-left: -3px;
}
.info-main {
    border-left: 1px solid #e6eaf3;
    padding-left: 10px;
    padding-bottom: 20px;
}
</style>
