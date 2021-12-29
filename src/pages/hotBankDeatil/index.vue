<template>
    <div>
        <div class="fx justify-center">
            <div class="new">
                <div>
                    <div class="fx justify-between">
                        <div class="w-30">
                            <div class="star">
                                <div class="fx justify-between mt-10">
                                    <div class="fw-700">
                                        {{ hotMatchList.homeTeam.score }}-{{
                                            hotMatchList.awayTeam.score
                                        }}&nbsp;{{
                                            hotMatchList.matchShortName
                                        }}
                                    </div>
                                    <div class="c-9">
                                        {{
                                            hotMatchList.matchDate.split(
                                                '-',
                                            )[1]
                                        }}-{{
                                            hotMatchList.matchDate.split(
                                                '-',
                                            )[2]
                                        }}&nbsp;{{ hotMatchList.matchTime }}
                                    </div>
                                </div>
                                <div class="db-b"></div>
                                <div class="fx align-items mt-20">
                                    <div>
                                        <img
                                            :src="
                                                hotMatchList.homeTeam.teamIcon
                                            "
                                            class="star-img"
                                        />
                                    </div>
                                    <div class="ml-20">
                                        {{ hotMatchList.homeTeam.teamName }}
                                    </div>
                                </div>
                                <div class="fx align-items mt-20">
                                    <div>
                                        <img
                                            :src="
                                                hotMatchList.awayTeam.teamIcon
                                            "
                                            class="star-img"
                                        />
                                    </div>
                                    <div class="ml-20">
                                        {{ hotMatchList.awayTeam.teamName }}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="w-70">
                            <div class="new-list" style="padding: 20px">
                                <div class="fs-22">专家方案</div>
                                <div class="db-b"></div>
                                <div
                                    class="fx justify-between new-list-li cursor"
                                    v-for="(item, index) in hotRankList"
                                    :key="index"
                                    @click="
                                        toPage3('expertsDeatil', item.id, 2)
                                    "
                                >
                                    <div>
                                        <div class="fs-18 fw-600">
                                            {{
                                                hotMatchList.homeTeam.teamName
                                            }}&nbsp;VS&nbsp;{{
                                                hotMatchList.awayTeam.teamName
                                            }}，来看我的精心推荐吧。附送比分
                                        </div>
                                        <div class="fx align-items mt-10">
                                            <div class="radius"></div>
                                            <div class="ml-10">
                                                {{
                                                    hotMatchList.homeTeam.score
                                                }}-{{
                                                    hotMatchList.awayTeam.score
                                                }}&nbsp;{{
                                                    hotMatchList.matchShortName
                                                }}
                                            </div>
                                            <div class="fw-600 ml-30">
                                                {{
                                                    hotMatchList.homeTeam
                                                        .teamName
                                                }}&nbsp;VS&nbsp;{{
                                                    hotMatchList.awayTeam
                                                        .teamName
                                                }}
                                            </div>
                                            <div class="ml-30">
                                                {{
                                                    hotMatchList.matchDate.split(
                                                        '-',
                                                    )[1]
                                                }}-{{
                                                    hotMatchList.matchDate.split(
                                                        '-',
                                                    )[2]
                                                }}&nbsp;{{
                                                    hotMatchList.matchTime
                                                }}
                                            </div>
                                        </div>
                                        <div class="fx align-items mt-10">
                                            <div>
                                                <img
                                                    :src="item.anchorIcon"
                                                    class="anchorIcon"
                                                />
                                            </div>
                                            <div class="fs-16 ml-10">
                                                {{ item.anchorName }}
                                            </div>
                                            <!--                      <div class="tabName ml-10">{{item.expert.tagName[0]}}</div>-->
                                            <div
                                                class="continuousWin ml-10"
                                                v-if="item.continuousWin > 0"
                                            >
                                                {{ item.continuousWin }}连红
                                            </div>
                                            <div class="ml-15 c-9">
                                                {{ item.releaseTime }}
                                            </div>
                                        </div>
                                    </div>
                                    <!--                  <div style="color: #FF5655;">-->
                                    <!--                    <div class="fs-26 fw-700">{{item.expert.winRate}}%</div>-->
                                    <!--                    <div>命中率</div>-->
                                    <!--                  </div>-->
                                </div>
                                <!--                <div class="more-new" @click="getMore">点击加载更多</div>-->
                            </div>
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
            hotRankList: [],
            hotMatchList: [],
            pageNum: 1,
        };
    },
   
    mounted() {
        this.getMatch();
        this.getHotRankList();
    },
    methods: {
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
            this.$router.replace({ name: name, query: { id: id } });
        },
        getHotRankList() {
            this.pageNum1 = 1;
            let param = {
                pageNum: 1,
                pageSize: 30,
                matchId: this.$route.query.id,
            };
            this.$axios('post', '/match/getHotRankList', param).then((res) => {
                if (res.code === 200) {
                    this.hotRankList = res.data.dataList;
                }
            });
        },
        getMore() {
            this.pageNum = this.pageNum + 1;
            this.getHotRankList();
        },
        // 赛程详情
        getMatch() {
            let param = {
                id: this.$route.query.id,
            };
            this.$axios('post', '/match/getMatchInfo', param).then((res) => {
                if (res.code === 200) {
                    this.hotMatchList = res.data;
                }
            });
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
}
.star-img {
    width: 32px;
    height: 32px;
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
}
.tabName {
    background: #fbefe3;
    border-radius: 20px;
    color: #a06325;
    padding: 1px 5px;
    font-size: 12px;
    position: relative;
}
</style>
