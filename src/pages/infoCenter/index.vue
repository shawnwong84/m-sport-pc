<template>
    <div
        class="fx align-items justify-center"
        style="background: #f9fbff !important"
    >
        <div>
            <div v-if="isLoding" class="ta-c">
                <div><img src="../../assets/image/jiazai.gif" /></div>
                <div class="mt-10">数据加载中...</div>
            </div>
            <div class="match-card" v-if="!isLoding">
                <div
                    v-for="(item, index) in matchList"
                    :key="index"
                    v-if="matchList.length !== 0"
                >
                    <div
                        v-for="(item2, index2) in item.matchInfos"
                        :key="index2"
                        :id="'a' + item2.id"
                    >
                        <div class="match-card-li">
                            <div class="fx align-items justify-between">
                                <div
                                    class="fx align-items justify-between"
                                    style="width: 90%"
                                    @click="checkNum(item2.id)"
                                >
                                    <div class="fx" style="width: 20%">
                                        <div class="">
                                            {{ item2.matchShortName }}
                                        </div>
                                        <div class="c-9 ml-30">
                                            {{
                                                item2.matchDate.split('-')[1]
                                            }}-{{
                                                item2.matchDate.split('-')[2]
                                            }}
                                            {{ item2.matchTime }}
                                        </div>
                                    </div>
                                    <div
                                        class="fx justify-center mt-10 cursor"
                                        style="width: 75%"
                                    >
                                        <div
                                            class="fx justify-between align-items c-33"
                                            style="width: 100%"
                                        >
                                            <div
                                                class="fs-18"
                                                style="
                                                    width: 35%;
                                                    text-align: right;
                                                "
                                            >
                                                {{ item2.homeTeam.teamName }}
                                            </div>
                                            <div>
                                                <img
                                                    :src="
                                                        item2.homeTeam.teamIcon
                                                    "
                                                    class="match-img"
                                                />
                                            </div>
                                            <div class="fs-24 fw-700">VS</div>
                                            <div>
                                                <img
                                                    :src="
                                                        item2.awayTeam.teamIcon
                                                    "
                                                    class="match-img"
                                                />
                                            </div>
                                            <div
                                                class="fs-18"
                                                style="
                                                    width: 35%;
                                                    text-align: left;
                                                "
                                            >
                                                {{ item2.awayTeam.teamName }}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    class="c-9 fenxi"
                                    @click="toPage1(item2.id, item2.sportsType)"
                                >
                                    分析 | 详情
                                </div>
                            </div>
                        </div>
                        <div
                            class="fx justify-between info-div"
                            v-if="isShow === item2.id"
                        >
                            <div class="info-box">
                                <div class="ta-c c-1c mt-5">
                                    {{ item2.homeTeam.teamName }}
                                </div>
                                <div class="msg-box">
                                    <div class="c-red mt-10">
                                        <img
                                            src="../../assets/image/youlixinxi.png"
                                            width="18px"
                                            style="
                                                margin-top: -5px;
                                                margin-right: 5px;
                                            "
                                        />有利信息
                                    </div>
                                    <div
                                        class="c-43 fs-12 mt-10 ml-10"
                                        v-if="
                                            item2.intelligence.home.good
                                                .length !== 0
                                        "
                                    >
                                        <div
                                            class=""
                                            v-for="(item, index) in item2
                                                .intelligence.home.good"
                                            :key="index"
                                        >
                                            <div class="br-red"></div>
                                            <div class="info-main">
                                                {{ item }}
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        class="c-43 fs-12 ml-25 mt-10"
                                        v-if="
                                            item2.intelligence.home.good
                                                .length === 0
                                        "
                                    >
                                        暂无有利信息...
                                    </div>
                                    <div class="c-bule mt-10">
                                        <img
                                            src="../../assets/image/bulixinxi.png"
                                            width="18px"
                                            style="
                                                margin-top: -5px;
                                                margin-right: 5px;
                                            "
                                        /><span class="mtt-10">不利信息</span>
                                    </div>
                                    <div
                                        class="c-43 fs-12 ml-10 mt-10"
                                        v-if="
                                            item2.intelligence.home.bad
                                                .length !== 0
                                        "
                                    >
                                        <div
                                            class=""
                                            v-for="(item, index) in item2
                                                .intelligence.home.bad"
                                            :key="index"
                                        >
                                            <div class="br-bule"></div>
                                            <div class="info-main">
                                                {{ item }}
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        class="c-43 fs-12 ml-25 mt-10"
                                        v-if="
                                            item2.intelligence.home.bad
                                                .length === 0
                                        "
                                    >
                                        暂无不利信息...
                                    </div>
                                    <div
                                        class="fs-12 mt-20"
                                        v-if="
                                            item2.intelligence.home.recentRecord
                                        "
                                    >
                                        最近比赛战绩:
                                    </div>
                                    <div
                                        class="mt-10"
                                        v-if="
                                            item2.intelligence.home.recentRecord
                                        "
                                    >
                                        <span
                                            v-for="(value, i) in item2
                                                .intelligence.home.recentRecord"
                                            :key="i"
                                            class="mr-10"
                                            :class="
                                                value === '负'
                                                    ? 'c-bule'
                                                    : 'c-red'
                                            "
                                            >{{ value }}</span
                                        >
                                    </div>
                                </div>
                            </div>
                            <div style="margin-top: 85px">
                                <div class="c-aa mt-10 pl-20">
                                    <img
                                        src="../../assets/image/zhongli-icon.png"
                                        width="18px"
                                        style="
                                            margin-top: -5px;
                                            margin-right: 5px;
                                        "
                                    />中利信息
                                </div>
                                <div
                                    class="c-43 fs-12 ml-25 mt-10"
                                    v-if="
                                        item2.intelligence.neutral.length !== 0
                                    "
                                >
                                    <div
                                        class=""
                                        v-for="(item, index) in item2
                                            .intelligence.neutral"
                                        :key="index"
                                    >
                                        <div class="br-ca"></div>
                                        <div class="info-main">{{ item }}</div>
                                    </div>
                                </div>
                                <div
                                    class="c-43 fs-12 mt-10"
                                    style="margin-left: 40px"
                                    v-if="
                                        item2.intelligence.neutral.length === 0
                                    "
                                >
                                    暂无中利信息...
                                </div>
                            </div>
                            <div class="info-box">
                                <div class="ta-c c-1c mt-5">
                                    {{ item2.awayTeam.teamName }}
                                </div>
                                <div class="msg-box">
                                    <div class="c-red mt-10">
                                        <img
                                            src="../../assets/image/youlixinxi.png"
                                            width="18px"
                                            style="
                                                margin-top: -5px;
                                                margin-right: 5px;
                                            "
                                        />有利信息
                                    </div>
                                    <div
                                        class="c-43 fs-12 ml-10 mt-10"
                                        v-if="
                                            item2.intelligence.away.good
                                                .length !== 0
                                        "
                                    >
                                        <div
                                            class=""
                                            v-for="(item, index) in item2
                                                .intelligence.away.good"
                                            :key="index"
                                        >
                                            <div class="br-red"></div>
                                            <div class="info-main">
                                                {{ item }}
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        class="c-43 fs-12 ml-25 mt-10"
                                        v-if="
                                            item2.intelligence.away.good
                                                .length === 0
                                        "
                                    >
                                        暂无有利信息...
                                    </div>
                                    <div class="c-bule mt-10">
                                        <img
                                            src="../../assets/image/bulixinxi.png"
                                            width="18px"
                                            style="
                                                margin-top: -5px;
                                                margin-right: 5px;
                                            "
                                        />不利信息
                                    </div>
                                    <div
                                        class="c-43 fs-12 ml-10 mt-10"
                                        v-if="
                                            item2.intelligence.away.bad
                                                .length !== 0
                                        "
                                    >
                                        <div
                                            class=""
                                            v-for="(item, index) in item2
                                                .intelligence.away.bad"
                                            :key="index"
                                        >
                                            <div class="br-bule"></div>
                                            <div class="info-main">
                                                {{ item }}
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        class="c-43 fs-12 ml-25 mt-10"
                                        v-if="
                                            item2.intelligence.away.bad
                                                .length === 0
                                        "
                                    >
                                        暂无不利信息...
                                    </div>
                                    <div
                                        class="fs-12 mt-20"
                                        v-if="
                                            item2.intelligence.away.recentRecord
                                        "
                                    >
                                        最近比赛战绩:
                                    </div>
                                    <div
                                        class="mt-10"
                                        v-if="
                                            item2.intelligence.away.recentRecord
                                        "
                                    >
                                        <span
                                            v-for="(value, i) in item2
                                                .intelligence.away.recentRecord"
                                            :key="i"
                                            class="mr-10"
                                            :class="
                                                value === '负'
                                                    ? 'c-bule'
                                                    : 'c-red'
                                            "
                                            >{{ value }}</span
                                        >
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    class="fx align-items justify-center"
                    style="height: 370px"
                    v-if="matchList.length === 0"
                >
                    <div>
                        <div><img src="../../assets/image/null.png" /></div>
                        <div class="ta-c mt-10">列表空空如也!</div>
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
            matchList: [],
            isShow: '',
            today: '',
            time: '',
            isLoding: true,
        };
    },
    mounted() {
        this.getToday();
        this.getMatch();
    },
    methods: {
        checkNum(num) {
            if (num === this.isShow) {
                this.isShow = '';
            } else {
                this.isShow = num;
            }
        },
        toPage1(id, type) {
            if (type === 0) {
                this.$router.replace({
                    name: 'footballDeatil',
                    query: { id: id },
                });
            } else {
                this.$router.replace({
                    name: 'basketBallDeatil',
                    query: { id: id },
                });
            }
        },
        // 获取当前日期
        getToday() {
            var myDate = new Date();
            let mouth = myDate.getMonth() + 1;
            let date = myDate.getDate();
            if (mouth < 10) {
                mouth = '0' + mouth;
            }
            if (date < 10) {
                date = '0' + date;
            }
            this.time = myDate.getTime();
            this.today = myDate.getFullYear() + '-' + mouth + '-' + date;
        },
        getTime(startDate) {
            // var startDate = '2018-07-09 14:13:11'
            startDate = startDate.replace(new RegExp('-', 'gm'), '/');
            return new Date(startDate).getTime();
        },
        getMatch() {
            let param = {
                id: '',
                status: 0,
                endDate: this.today,
                startDate: this.today,
            };
            this.$axios('post', '/match/getMatchList', param).then((res) => {
                if (res.code === 200) {
                    this.isLoding = false;
                    this.matchList = res.data.matchLists;
                    let list = [];
                    for (
                        var i = 0;
                        i < this.matchList[0].matchInfos.length;
                        i++
                    ) {
                        if (this.matchList[0].matchInfos[i].status === 2) {
                            // console.log(this.getTime(this.matchList[0].matchTime + ' ' + this.matchList[0].matchInfos[i].matchTime))
                            if (
                                this.time <=
                                this.getTime(
                                    this.matchList[0].matchTime +
                                        ' ' +
                                        this.matchList[0].matchInfos[i]
                                            .matchTime,
                                )
                            ) {
                                list.push(this.matchList[0].matchInfos[i]);
                            }
                        }
                    }
                    // console.log(list)
                    this.isShow = list[0].id;
                    this.$nextTick(function () {
                        document
                            .querySelector('#a' + list[0].id)
                            .scrollIntoView();
                    });
                }
            });
        },
    },
};
</script>

<style scoped>
.match-img {
    width: 40px;
    height: 40px;
    margin-left: 12px;
    margin-right: 12px;
}
.match-card {
    width: 1200px;
    background: white;
    border-radius: 6px;
    margin-top: 20px;
}
.match-card-li {
    border: 1px solid #f0f2f8;
    padding: 20px;
    cursor: pointer;
}
.match-card-li:hover {
    /*box-shadow: 2px 2px 2px 2px #f0f2f8;*/
    box-shadow: -3px 12px 22px -10px rgba(240, 242, 248, 1);
    -webkit-box-shadow: -3px 12px 22px -10px rgba(240, 242, 248, 1);
    -moz-box-shadow: -3px 12px 22px -10px rgba(240, 242, 248, 1);
}
.live-btn {
    width: 88px;
    height: 34px;
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
    width: 88px;
    height: 34px;
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
.yud-btn2 {
    width: 88px;
    height: 34px;
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
.matchTime {
    font-weight: 600;
    color: #333333;
    font-size: 15px;
    padding-top: 30px;
}

/*信息*/
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
.c-aa {
    color: #caa05f;
}
.c-76 {
    color: #76809c;
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
.info-div {
    background: rgb(21, 20, 46);
    color: white;
}
.fenxi:hover {
    color: #caa05f !important;
}
</style>
