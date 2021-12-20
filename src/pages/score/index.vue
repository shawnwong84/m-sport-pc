<template>
    <div style="background: #f6f5f5">
        <div class="fx justify-center">
            <div class="score">
                <div class="fx align-items">
                    <div
                        class="type-tab"
                        :class="tabNum === 0 ? 'tab-on' : ''"
                        @click="getMatch(0)"
                    >
                        即时
                    </div>
                    <div
                        class="type-tab"
                        :class="tabNum === 3 ? 'tab-on' : ''"
                        @click="getMatch(3)"
                    >
                        赛果
                    </div>
                    <div
                        class="type-tab"
                        :class="tabNum === 2 ? 'tab-on' : ''"
                        @click="getMatch(2)"
                    >
                        赛程
                    </div>
                </div>
                <div class="mt-20">
                    <img
                        src="../../assets/image/score-banner.png"
                        width="100%"
                    />
                </div>
                <div class="fx justify-between time-box" v-if="tabNum === 3">
                    <div
                        class="week"
                        :class="myGetDay(6) === matchTime ? 'active2' : ''"
                        @click="checkTime(myGetDay(6))"
                    >
                        <div>
                            <div class="fs-20">
                                {{ myGetDay(6).split('-')[1] }}-{{
                                    myGetDay(6).split('-')[2]
                                }}
                            </div>
                            <div class="ta-c">{{ getWeek(myGetDay(6)) }}</div>
                        </div>
                    </div>
                    <div
                        class="week"
                        :class="myGetDay(5) === matchTime ? 'active2' : ''"
                        @click="checkTime(myGetDay(5))"
                    >
                        <div>
                            <div class="fs-20">
                                {{ myGetDay(5).split('-')[1] }}-{{
                                    myGetDay(5).split('-')[2]
                                }}
                            </div>
                            <div class="ta-c">{{ getWeek(myGetDay(5)) }}</div>
                        </div>
                    </div>
                    <div
                        class="week"
                        :class="myGetDay(4) === matchTime ? 'active2' : ''"
                        @click="checkTime(myGetDay(4))"
                    >
                        <div>
                            <div class="fs-20">
                                {{ myGetDay(4).split('-')[1] }}-{{
                                    myGetDay(4).split('-')[2]
                                }}
                            </div>
                            <div class="ta-c">{{ getWeek(myGetDay(4)) }}</div>
                        </div>
                    </div>
                    <div
                        class="week"
                        :class="myGetDay(3) === matchTime ? 'active2' : ''"
                        @click="checkTime(myGetDay(3))"
                    >
                        <div>
                            <div class="fs-20">
                                {{ myGetDay(3).split('-')[1] }}-{{
                                    myGetDay(3).split('-')[2]
                                }}
                            </div>
                            <div class="ta-c">{{ getWeek(myGetDay(3)) }}</div>
                        </div>
                    </div>
                    <div
                        class="week"
                        :class="myGetDay(2) === matchTime ? 'active2' : ''"
                        @click="checkTime(myGetDay(2))"
                    >
                        <div>
                            <div class="fs-20">
                                {{ myGetDay(2).split('-')[1] }}-{{
                                    myGetDay(2).split('-')[2]
                                }}
                            </div>
                            <div class="ta-c">{{ getWeek(myGetDay(2)) }}</div>
                        </div>
                    </div>
                    <div
                        class="week"
                        :class="myGetDay(1) === matchTime ? 'active2' : ''"
                        @click="checkTime(myGetDay(1))"
                    >
                        <div>
                            <div class="fs-20">
                                {{ myGetDay(1).split('-')[1] }}-{{
                                    myGetDay(1).split('-')[2]
                                }}
                            </div>
                            <div class="ta-c">{{ getWeek(myGetDay(1)) }}</div>
                        </div>
                    </div>
                    <div
                        class="week"
                        :class="today === matchTime ? 'active2' : ''"
                        @click="checkTime(today)"
                    >
                        <div class="fs-20">
                            {{ today.split('-')[1] }}-{{ today.split('-')[2] }}
                        </div>
                        <div class="fs-12 mt-2">{{ getWeek(today) }}</div>
                    </div>
                </div>
                <div class="fx justify-between time-box" v-if="tabNum === 2">
                    <div
                        class="week"
                        :class="today === matchTime ? 'active2' : ''"
                        @click="checkTime(today)"
                    >
                        <div class="fs-20">
                            {{ today.split('-')[1] }}-{{ today.split('-')[2] }}
                        </div>
                        <div class="fs-12 mt-2">{{ getWeek(today) }}</div>
                    </div>
                    <div
                        class="week"
                        v-for="i in 6"
                        :key="i + 'l'"
                        :class="GetDateStr(i) === matchTime ? 'active2' : ''"
                        @click="checkTime(GetDateStr(i))"
                    >
                        <div class="fs-20">
                            {{ GetDateStr(i).split('-')[1] }}-{{
                                GetDateStr(i).split('-')[2]
                            }}
                        </div>
                        <div class="fs-12 mt-2">
                            {{ getWeek(GetDateStr(i)) }}
                        </div>
                    </div>
                </div>
                <div class="match-tab">
                    <div class="fx align-items justify-between fs-13">
                        <div class="fx justify-center" style="width: 25%">
                            <div style="width: 60%; text-align: center">
                                赛事
                            </div>
                            <div>时间</div>
                            <div class="ml-30">状态</div>
                        </div>
                        <div class="fx justify-between" style="width: 50%">
                            <div class="fx justify-center" style="width: 50%">
                                <div class=" ">主队</div>
                                <div class="ml-20">比分</div>
                                <div class="ml-20">客队</div>
                            </div>
                            <div class="fx justify-center" style="width: 50%">
                                <div class="w-10">半场</div>
                                <div class="w-10">角球</div>
                                <div class="w-10">直播</div>
                            </div>
                        </div>
                        <div
                            class="fx justify-between"
                            style="width: 30%; padding: 0px 20px"
                        >
                            <div v-if="tabNum === 3" class="mr-20">赛果</div>
                            <div class="">亚</div>
                            <div class="ml-20">大</div>
                            <div class="ml-20">欧</div>
                            <div class="ml-10">数据</div>
                            <div class="">统计</div>
                        </div>
                    </div>
                </div>
                <div class="match-box">
                    <div
                        class="fx align-items justify-center pt-20 pb-20"
                        v-if="tabNum === 0 && liveList.length !== 0"
                    >
                        <div>
                            <img
                                src="../../assets/image/jingxingzhong-icon.png"
                            />
                        </div>
                        <div class="ml-10 c-91">进行中的比赛</div>
                    </div>
                    <div
                        class="match-list"
                        v-for="(item, index) in liveList"
                        :key="index"
                        v-if="liveList && liveList.length !== 0"
                        :class="{ on: index % 2 == 0, off: index % 2 != 0 }"
                    >
                        <div class="fx justify-between">
                            <div
                                class="fx align-items justify-center"
                                @click="
                                    toPage1(
                                        item.matchInfo.id,
                                        item.matchInfo.sportsType,
                                    )
                                "
                                style="
                                    width: 25%;
                                    height: 40px;
                                    border-right: 1px solid #dfe6f0;
                                "
                            >
                                <div style="width: 60%; text-align: center">
                                    {{ item.matchInfo.matchShortName }}
                                </div>
                                <div>{{ item.matchInfo.matchTime }}</div>
                                <div class="ml-30 c-red">
                                    <span v-if="item.matchInfo.cornerKick">{{
                                        item.matchInfo.cornerKick
                                    }}</span>
                                    <span v-else>-</span>
                                </div>
                            </div>
                            <div
                                class="fx align-items justify-between"
                                @click="
                                    toPage1(
                                        item.matchInfo.id,
                                        item.matchInfo.sportsType,
                                    )
                                "
                                style="width: 50%"
                            >
                                <div
                                    class="fx justify-center"
                                    style="width: 50%"
                                >
                                    <div
                                        class="fw-700 ta-r anchorDesc"
                                        style="width: 35%"
                                    >
                                        {{ item.matchInfo.homeTeam.teamName }}
                                    </div>
                                    <div class="ml-20 fw-700 c-red">
                                        {{ item.matchInfo.homeTeam.score }}-{{
                                            item.matchInfo.awayTeam.score
                                        }}
                                    </div>
                                    <div
                                        class="fw-700 ml-20 ta-l anchorDesc"
                                        style="width: 35%"
                                    >
                                        {{ item.matchInfo.awayTeam.teamName }}
                                    </div>
                                </div>
                                <div
                                    class="fx align-items justify-center"
                                    style="width: 50%"
                                >
                                    <div class="w-10">
                                        <span
                                            v-if="item.matchInfo.halftimeScore"
                                            >{{
                                                item.matchInfo.halftimeScore
                                            }}</span
                                        >
                                        <span v-else>-</span>
                                    </div>
                                    <div class="w-10">
                                        <span
                                            v-if="item.matchInfo.cornerKick"
                                            >{{
                                                item.matchInfo.cornerKick
                                            }}</span
                                        >
                                        <span v-else>-</span>
                                    </div>
                                    <div class="w-10">
                                        <img
                                            src="../../assets/image/zhibo2.png"
                                            width="18px"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="fx align-items justify-between odds">
                                <div>
                                    <div class="c-91">
                                        {{ item.homeOdds.yazhi }}
                                    </div>
                                    <div>{{ item.awayOdds.yazhi }}</div>
                                </div>
                                <div class="">
                                    <div class="c-91">
                                        {{ item.homeOdds.daxiao }}
                                    </div>
                                    <div>{{ item.awayOdds.daxiao }}</div>
                                </div>
                                <div class="">
                                    <div class="c-91">
                                        {{ item.homeOdds.ouzhi }}
                                    </div>
                                    <div>{{ item.awayOdds.ouzhi }}</div>
                                </div>
                                <div
                                    class="fenxi"
                                    @click="
                                        toPage1(
                                            item.matchInfo.id,
                                            item.matchInfo.sportsType,
                                        )
                                    "
                                >
                                    分析
                                </div>
                                <div class="">
                                    <img
                                        src="../../assets/image/tongji.png"
                                        width="18px"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        class="fx align-items justify-center pt-20 pb-20"
                        v-if="tabNum === 0 && matchLiveScore.length !== 0"
                        style="border-top: 1px solid #dfe6f0"
                    >
                        <div>
                            <img src="../../assets/image/weikaishi-icon.png" />
                        </div>
                        <div class="ml-10 c-91">未开始的比赛</div>
                    </div>
                    <div
                        class="match-list"
                        v-for="(item, index) in matchLiveScore"
                        :key="index"
                        v-if="matchLiveScore && matchLiveScore.length !== 0"
                        :class="{ on: index % 2 == 0, off: index % 2 != 0 }"
                    >
                        <div class="fx justify-between">
                            <div
                                class="fx align-items justify-center"
                                @click="
                                    toPage1(
                                        item.matchInfo.id,
                                        item.matchInfo.sportsType,
                                    )
                                "
                                style="
                                    width: 25%;
                                    height: 40px;
                                    border-right: 1px solid #dfe6f0;
                                "
                            >
                                <div style="width: 60%; text-align: center">
                                    {{ item.matchInfo.matchShortName }}
                                </div>
                                <div>{{ item.matchInfo.matchTime }}</div>
                                <div
                                    class="ml-30 c-91"
                                    v-if="item.matchInfo.status === 2"
                                >
                                    未
                                </div>
                                <div
                                    class="ml-30 c-91"
                                    v-if="item.matchInfo.status === 3"
                                >
                                    完
                                </div>
                                <div
                                    class="ml-30 c-red"
                                    v-if="item.matchInfo.status === 1"
                                >
                                    <span v-if="item.matchInfo.cornerKick">{{
                                        item.matchInfo.cornerKick
                                    }}</span>
                                    <span v-else>-</span>
                                </div>
                            </div>
                            <div
                                class="fx align-items justify-between"
                                @click="
                                    toPage1(
                                        item.matchInfo.id,
                                        item.matchInfo.sportsType,
                                    )
                                "
                                style="width: 50%"
                            >
                                <div
                                    class="fx justify-center"
                                    style="width: 50%"
                                >
                                    <div
                                        class="fw-700 ta-r anchorDesc"
                                        style="width: 35%"
                                    >
                                        {{ item.matchInfo.homeTeam.teamName }}
                                    </div>
                                    <div class="ml-20 fw-700 c-red">
                                        {{ item.matchInfo.homeTeam.score }}-{{
                                            item.matchInfo.awayTeam.score
                                        }}
                                    </div>
                                    <div
                                        class="fw-700 ml-20 ta-l anchorDesc"
                                        style="width: 35%"
                                    >
                                        {{ item.matchInfo.awayTeam.teamName }}
                                    </div>
                                </div>
                                <div
                                    class="fx align-items justify-center"
                                    style="width: 50%"
                                >
                                    <div class="w-10">
                                        <span
                                            v-if="item.matchInfo.halftimeScore"
                                            >{{
                                                item.matchInfo.halftimeScore
                                            }}</span
                                        >
                                        <span v-else>-</span>
                                    </div>
                                    <div class="w-10">
                                        <span
                                            v-if="item.matchInfo.cornerKick"
                                            >{{
                                                item.matchInfo.cornerKick
                                            }}</span
                                        >
                                        <span v-else>-</span>
                                    </div>
                                    <div class="w-10">
                                        <img
                                            src="../../assets/image/zhibo2.png"
                                            v-if="item.matchInfo.status === 1"
                                            width="18px"
                                        />
                                        <img
                                            src="../../assets/image/weikaishi-icon.png"
                                            v-if="item.matchInfo.status !== 1"
                                            width="18px"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="fx align-items justify-between odds">
                                <div v-if="tabNum === 3" class="mr-10 ml-10">
                                    <span
                                        v-if="item.matchInfo.result === '胜'"
                                        class="c-red"
                                        >胜</span
                                    >
                                    <span
                                        v-if="item.matchInfo.result === '负'"
                                        class="c-green"
                                        >负</span
                                    >
                                    <span
                                        v-if="item.matchInfo.result === '平'"
                                        class="c-91"
                                        >平</span
                                    >
                                </div>
                                <div>
                                    <div class="c-91">
                                        {{ item.homeOdds.yazhi }}
                                    </div>
                                    <div>{{ item.awayOdds.yazhi }}</div>
                                </div>
                                <div class="">
                                    <div class="c-91">
                                        {{ item.homeOdds.daxiao }}
                                    </div>
                                    <div>{{ item.awayOdds.daxiao }}</div>
                                </div>
                                <div class="">
                                    <div class="c-91">
                                        {{ item.homeOdds.ouzhi }}
                                    </div>
                                    <div>{{ item.awayOdds.ouzhi }}</div>
                                </div>
                                <div
                                    class="fenxi"
                                    @click="
                                        toPage1(
                                            item.matchInfo.id,
                                            item.matchInfo.sportsType,
                                        )
                                    "
                                >
                                    分析
                                </div>
                                <div class="">
                                    <img
                                        src="../../assets/image/tongji.png"
                                        width="18px"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        class="ta-c"
                        v-if="matchLiveScore.length === 0"
                        style="padding: 10% 0px"
                    >
                        <div><img src="../../assets/image/null.png" /></div>
                        <div class="ta-c mt-10">列表空空如也!</div>
                    </div>
                </div>
            </div>
        </div>

        <v-footer class=""></v-footer>
    </div>
</template>

<script>
import { mapMutations } from 'vuex';
import footer from '../../components/footer/index.vue';
import RegandLogin from '../../components/regAndLogin/index.vue';
export default {
    name: 'index',
    data() {
        return {
            tabNum: 0,
            matchLiveScore: [],
            liveList: [],
            today: '',
            matchTime: '',
        };
    },
    components: { 'v-footer': footer, 'v-reg-login': RegandLogin },
    mounted() {
        this.getToday();
        this.getMatchLiveScore();
    },
    methods: {
        ...mapMutations({
            setPermissionModal: 'setPermissionModal',
        }),
        toPage1(id, type) {
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

        getMatch(num) {
            this.tabNum = num;
            this.getToday();
            this.getMatchLiveScore();
        },
        checkTime(time) {
            this.matchTime = time;
            this.getMatchLiveScore();
        },
        getMatchLiveScore() {
            this.liveList = [];
            this.matchLiveScore = [];
            let param = {
                sportsId: '',
                status: this.tabNum,
                endDate: this.matchTime,
                startDate: this.matchTime,
            };
            this.$axios('post', '/pcHome/getMatchLiveScore', param).then(
                (res) => {
                    if (res.code === 200) {
                        for (let i = 0; i < res.data.matchInfos.length; i++) {
                            if (res.data.matchInfos[i].matchInfo.status === 1) {
                                this.liveList.push(res.data.matchInfos[i]);
                            } else {
                                this.matchLiveScore.push(
                                    res.data.matchInfos[i],
                                );
                            }
                        }
                    }
                },
            );
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
            this.today = myDate.getFullYear() + '-' + mouth + '-' + date;
            this.matchTime = this.today;
        },
        // 获取周几
        getWeek(num) {
            var strTime = num; // 字符串日期格式
            var date = new Date(Date.parse(strTime.replace(/-/g, '/')));
            var a = ['日', '一', '二', '三', '四', '五', '六'];
            var week = date.getDay();
            return '周' + a[week];
        },
        // 获取当前日期前N天
        myGetDay(length) {
            var time = new Date().getTime() - 24 * 60 * 60 * 1000 * length;
            var yesday = new Date(time); // 获取的是前几天日期
            yesday =
                yesday.getFullYear() +
                '-' +
                (yesday.getMonth() >= 9
                    ? yesday.getMonth() + 1
                    : '0' + (yesday.getMonth() + 1)) +
                '-' +
                (yesday.getDate() > 9
                    ? yesday.getDate()
                    : '0' + yesday.getDate()); // 字符串拼接转格式：例如2018-08-19
            return yesday;
        },
        // 获取当前日期后N天
        GetDateStr(AddDayCount) {
            var dd = new Date();
            dd.setDate(dd.getDate() + AddDayCount); // 获取AddDayCount天后的日期
            var y = dd.getFullYear();
            var m =
                dd.getMonth() + 1 < 10
                    ? '0' + (dd.getMonth() + 1)
                    : dd.getMonth() + 1; // 获取当前月份的日期，不足10补0
            var d = dd.getDate() < 10 ? '0' + dd.getDate() : dd.getDate(); // 获取当前几号，不足10补0
            return y + '-' + m + '-' + d;
        },
    },
};
</script>

<style scoped>
.score {
    width: 1200px;
    min-height: 100vh;
    padding-top: 20px;
}
.type-tab {
    padding: 2px 10px;
    margin-right: 20px;
    font-weight: 400;
    background: #ffffff;
    box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
    color: #67728f;
    cursor: pointer;
    font-size: 15px;
}
.tab-on {
    background: linear-gradient(180deg, #ff8d86 0%, #f8413d 100%);
    color: #693d13;
}
.fenxi {
    color: #9197ad;
    cursor: pointer;
}
.fenxi:hover {
    color: #dbb170;
}
.match-tab {
    background: linear-gradient(130deg, #493c50 0%, #89616c 100%);
    color: #fffffe;
    line-height: 30px;
    width: 100%;
}
.w-10 {
    width: 15%;
    text-align: center;
}
.match-box {
    background: #ffffff;
    border-radius: 6px;
}
.c-91 {
    color: #9197ad;
}
.match-list {
    border-top: 1px solid #dfe6f0;
    font-size: 12px;
    height: 42px;
    cursor: pointer;
}
.on {
    background: #ffffff;
}
.off {
    background: #f4f5f8;
}
.odds {
    width: 30%;
    border-left: 1px solid #dfe6f0;
    padding-left: 20px;
    padding-right: 20px;
}
.week {
    width: 100%;
    text-align: center;
    box-shadow: inset 0 -1px 0 0 #eee, inset -1px 0 0 0 #eee;
    padding: 10px 0px;
    cursor: pointer;
}
.week:hover {
    color: #dbb170;
}
c-green {
    color: #00c853;
}
.active2 {
    color: #dbb170;
}
.time-box {
    background: #ffffff;
}
</style>
