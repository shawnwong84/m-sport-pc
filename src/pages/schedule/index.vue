<template>
    <div>
        <div class="fx justify-center all-bg">
            <div class="all">
                <div class="all-left">
                    <div class="all-left-tab">赛程中心</div>
                    <div
                        class="all-left-li"
                        :class="sportId === '' ? 'c-aa' : ''"
                        @click="getAll(-1)"
                    >
                        <div>
                            <img src="../../assets/image/quanbu-icon.png" />
                        </div>
                        <div class="ml-10">全部比赛（{{ allNum }}）</div>
                    </div>
                    <div v-for="(item, index) in matchSportsType" :key="index">
                        <div class="all-left-tab">{{ item.sportsType }}</div>
                        <div
                            class="all-left-li"
                            v-for="(item2, index2) in item.sportsList"
                            :key="index2"
                            :class="item2.sportsId === sportId ? 'c-aa' : ''"
                            @click="getInfo(item2.sportsId, 1)"
                        >
                            <div v-if="item2.sportsName === '全部'">
                                <img src="../../assets/image/quanbu-icon.png" />
                            </div>
                            <div
                                style="
                                    width: 24px;
                                    height: 24px;
                                    text-align: center;
                                "
                                v-if="item2.sportsName !== '全部'"
                            >
                                <img
                                    :src="item2.sportsIcon"
                                    style="width: 18px; height: 18px"
                                />
                            </div>
                            <div class="ml-10">{{ item2.sportsName }}</div>
                        </div>
                    </div>
                </div>
                <div class="all-right">
                    <div class="all-tab fx align-items">
                        <div
                            class="all-li"
                            v-for="item in matchDateList[0]"
                            :key="item"
                            @click="check(item)"
                            :class="matchDate === item ? 'nav' : ''"
                        >
                            <div>
                                <div class="fw-700 fs-16">
                                    {{ item.split('-')[1] }}/{{
                                        item.split('-')[2]
                                    }}
                                </div>
                                <div class="fs-12 ta-c">
                                    {{ getWeek(item) }}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="fx align-items mt-20">
                        <div
                            class="type-tab"
                            :class="tabNum === -1 ? 'tab-on' : ''"
                            @click="getMatch(-1)"
                        >
                            全部
                        </div>
                        <div
                            class="type-tab"
                            :class="tabNum === 1 ? 'tab-on' : ''"
                            @click="getMatch(1)"
                        >
                            直播中
                        </div>
                        <div
                            class="type-tab"
                            :class="tabNum === 2 ? 'tab-on' : ''"
                            @click="getMatch(2)"
                        >
                            即将开始
                        </div>
                    </div>
                    <div class="match-card">
                        <div
                            v-for="(item, index) in matchList"
                            :key="index"
                            v-if="
                                matchList.length !== 0 &&
                                matchDate === item.matchTime
                            "
                        >
                            <div
                                class="match-card-li"
                                v-for="(item2, index2) in item.matchInfos"
                                :key="index2"
                            >
                                <div class="fx justify-between">
                                    <div class="fx">
                                        <div>
                                            <img
                                                src="../../assets/image/baskteball-icon.png"
                                                v-if="item2.sportsType === 1"
                                            />
                                            <img
                                                src="../../assets/image/football-icon.png"
                                                v-if="item2.sportsType === 0"
                                            />
                                        </div>
                                        <div class="c-76 ml-10">
                                            {{
                                                item2.matchDate.split('-')[1]
                                            }}月{{
                                                item2.matchDate.split('-')[2]
                                            }}日
                                        </div>
                                        <div class="c-76 ml-20">
                                            {{ item2.matchShortName }}
                                        </div>
                                    </div>
                                    <div class="fx">
                                        <div
                                            v-if="item2.guides"
                                            class="fx align-items"
                                        >
                                            <div
                                                class="ta-c cursor"
                                                v-for="(
                                                    value, i
                                                ) in item2.guides"
                                                :key="i"
                                                @click="
                                                    toPage('room', value.roomId)
                                                "
                                            >
                                                <div>
                                                    <img
                                                        class="avatar"
                                                        :src="value.avatar"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <!--                   <div class="ml-20" v-if="item2.status === 1"><img src="../../assets/image/shipin-icon.png" class="mr-10"/>视频直播</div>-->
                                        <div
                                            class="ml-20 cursor"
                                            @click="
                                                toPage1(
                                                    item2.id,
                                                    item2.sportsType,
                                                )
                                            "
                                        >
                                            分析文案
                                        </div>
                                        <!--                   <div class="ml-20" v-if="item2.status === 3">技术统计</div>-->
                                    </div>
                                </div>
                                <div class="fx justify-between mt-10 cursor">
                                    <div class="matchTime" style="width: 10%">
                                        {{ item2.matchTime }}
                                    </div>
                                    <div
                                        class="fx justify-center align-items c-33"
                                        style="width: 80%"
                                    >
                                        <div
                                            class="fs-18"
                                            style="
                                                width: 30%;
                                                text-align: right;
                                            "
                                        >
                                            {{ item2.homeTeam.teamName }}
                                        </div>
                                        <div>
                                            <img
                                                :src="item2.homeTeam.teamIcon"
                                                class="match-img"
                                            />
                                        </div>
                                        <div
                                            class="fs-24 fw-700"
                                            style="
                                                width: 18%;
                                                text-align: center;
                                            "
                                        >
                                            {{ item2.homeTeam.score }}-{{
                                                item2.awayTeam.score
                                            }}
                                        </div>
                                        <div>
                                            <img
                                                :src="item2.awayTeam.teamIcon"
                                                class="match-img"
                                            />
                                        </div>
                                        <div
                                            class="fs-18"
                                            style="width: 30%; text-align: left"
                                        >
                                            {{ item2.awayTeam.teamName }}
                                        </div>
                                    </div>
                                    <div style="width: 11%">
                                        <div
                                            class="live-btn"
                                            v-if="item2.status === 1"
                                        >
                                            <div class="fx">
                                                <div class="mr-5">
                                                    <img
                                                        src="../../assets/image/zhibo.gif"
                                                        width="13px"
                                                    />
                                                </div>
                                                <div style="padding-top: 2px">
                                                    直播中
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            class="yud-btn"
                                            v-if="
                                                item2.status === 2 &&
                                                !item2.subscribe
                                            "
                                            @click="getAppoinment(item2.id)"
                                        >
                                            <div class="fx">
                                                <div class="mr-5">
                                                    <img
                                                        src="../../assets/image/yuding.png"
                                                    />
                                                </div>
                                                <div style="padding-top: 2px">
                                                    预定
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            class="yud-btn2"
                                            v-if="
                                                item2.status === 2 &&
                                                item2.subscribe
                                            "
                                            @click="
                                                userCancelReserveMatch(item2.id)
                                            "
                                        >
                                            已预定
                                        </div>
                                        <div
                                            class="over-btn"
                                            v-if="item2.status === 3"
                                        >
                                            已结束
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
        <v-footer></v-footer>
    </div>
</template>

<script>
import { mapMutations } from 'vuex';
import footer from '../../components/footer/index.vue';
import { Cookie } from '../../api/cookie';

export default {
    name: 'index',
    data() {
        return {
            isNum: 1,
           
            matchList: [],
            allNum: 0,
            sportId: '',
            matchDate: '',
            matchDateList: [],
            matchSportsType: [],
            tabNum: 1,
        };
    },
    components: { 'v-footer': footer,  },
    mounted() {
        this.getMatch(0);
        this.getWeekStartAndEnd();
        this.getMatchSportsType();
    },
    methods: {
         ...mapMutations({
            setPermissionModal: 'setPermissionModal',
        }),

        // 获取指定日期的那一周的开始、结束日期
        getWeekStartAndEnd() {
            var now = new Date();
            var arr = [];
            for (var i = 0; i < 4; i++) {
                var that = new Date();
                that.setDate(now.getDate() + i);
                var ty = that.getFullYear();
                var tm = that.getMonth() + 1;
                var td = that.getDate();
                if (tm < 10) {
                    tm = '0' + tm;
                }
                if (td < 10) {
                    td = '0' + td;
                }
                arr.push(`${ty}-${tm}-${td}`);
            }
            this.matchDateList.push(arr);
        },
       
        toPage(name, id) {
           
            this.$router.replace({ name: name, query: { id: id } });
            
        },
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
        check(date) {
            this.matchDate = date;
        },
        getInfo(id, status) {
            this.sportId = id;
            this.getMatch(status);
        },
        getAll(status) {
            this.sportId = '';
            this.getMatch(status);
        },
        getMatch(status) {
            this.tabNum = status;
            let param = {
                id: this.sportId,
                status: status,
            };
            this.$axios('post', '/match/getMatchList', param).then((res) => {
                if (res.code === 200) {
                    this.matchList = res.data.matchLists;
                    let num = 0;
                    for (var i = 0; i < this.matchList.length; i++) {
                        num = num + this.matchList[i].matchInfos.length;
                    }
                    this.allNum = num;
                    this.matchDate = res.data.matchLists[0].matchTime;
                }
            });
        },
        getMatchSportsType() {
            this.$axios('post', '/match/getMatchSportsType').then((res) => {
                if (res.code === 200) {
                    this.matchSportsType = res.data;
                }
            });
        },
        getWeek(num) {
            var strTime = num; // 字符串日期格式
            var date = new Date(Date.parse(strTime.replace(/-/g, '/')));
            var a = ['日', '一', '二', '三', '四', '五', '六'];
            var week = date.getDay();
            return '周' + a[week];
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
                this.setPermissionModal(1);
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
.c-76 {
    color: #76809c;
}
.all-bg {
    background: #f9fbff !important;
    width: 100%;
    padding-bottom: 30px;
}
.all {
    width: 1200px;
    min-height: 100vh;
    display: flex;
    justify-content: space-between;
    padding-top: 40px;
}
.matchTime {
    font-weight: 600;
    color: #333333;
    font-size: 15px;
    padding-top: 30px;
}
.all-left {
    width: 25%;
    height: 530px;
    background: #ffffff;
    border-radius: 6px;
    border: 1px solid #e6eaf3;
}
.all-right {
    width: 72%;
}
.all-left-tab {
    background: #f2f6ff;
    font-weight: 600;
    color: #333333;
    line-height: 40px;
    padding-left: 20px;
}
.all-left-li {
    height: 40px;
    padding-left: 20px;
    color: #76809c;
    cursor: pointer;
    display: flex;
    align-items: center;
}
.all-left-li:hover {
    background: #f8e6c9;
    color: #693d13;
}
.c-aa {
    color: #caa05f;
    font-weight: 600;
}
.all-tab {
    height: 56px;
    background: #ffffff;
    border-radius: 6px;
    border: 1px solid #e6eaf3;
}
.type-tab {
    padding: 2px 10px;
    margin-right: 20px;
    font-weight: 400;
    color: #67728f;
    cursor: pointer;
    font-size: 15px;
}
.tab-on {
    background: linear-gradient(132deg, #ebcbab 0%, #dbb170 100%);
    border-radius: 3px;
    color: #693d13;
}
.all-li {
    color: #76809c;
    width: 100px;
    height: 56px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
}
.nav {
    color: #693d13;
    background: #f8e6c9;
}
.avatar {
    border-radius: 50%;
    width: 26px;
    height: 26px;
    margin-left: -5px;
}
.match-img {
    width: 50px;
    height: 50px;
    margin-left: 10px;
    margin-right: 10px;
}
.match-card {
    background: white;
    border-radius: 6px;
    padding: 20px;
    margin-top: 20px;
}
.match-card-li {
    border-bottom: 1px solid #e6eaf3;
    padding-top: 20px;
    padding-bottom: 20px;
}
.appoinment {
    padding: 5px 15px;
    border-radius: 6px;
    cursor: pointer;
}
.yellow {
    background: #ffc71c;
    color: white;
}
.gray {
    color: black;
    background: #d8d8d8;
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
</style>
