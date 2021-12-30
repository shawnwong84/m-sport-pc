<!--
 * @version:  ;
 * @description:  ;
 * @autor: Full
 * @date: Do not edit
-->
<template>
    <div class="my-order">
        <div class="my-head">
            <div class="title">我的预约</div>
        </div>
        <div class="order-content" v-if="userReserveMatchList.length > 0">
            <div
                class="order-list"
                v-for="(item, index) in userReserveMatchList"
                :key="index"
            >
                <div class="order-title">
                    {{ item.matchTime }}
                </div>
                <div
                    class="order-item"
                    v-for="order in item.matchInfos"
                    :key="order.id"
                >
                    <div class="left">
                        <span class="match-name">{{ order.matchName }}</span>
                        <span class="match-time">{{ order.matchTime }}</span>
                    </div>
                    <div class="center">
                        <div class="match-team">
                            <span class="match-name">{{
                                order.homeTeam.teamName
                            }}</span>
                            <div class="match-img">
                                <img :src="order.homeTeam.teamIcon" />
                            </div>
                        </div>
                        <div class="vs">VS</div>
                        <div class="match-team">
                            <div class="match-img">
                                <img :src="order.awayTeam.teamIcon" />
                            </div>
                            <span class="match-name">{{
                                order.awayTeam.teamName
                            }}</span>
                        </div>
                    </div>
                    <div
                        class="right"
                        :class="{
                            'no-live': order.status == 2,
                            over: order.status == 3,
                        }"
                    >
                        {{ status[order.status] }}
                    </div>
                </div>
            </div>
        </div>
        <noData v-else></noData>
    </div>
</template>

<script>
import noData from '../../../components/noData';
export default {
    name: 'myOrder',
    data() {
        return {
            userReserveMatchList: [],
            status: {
                1: '直播中',
                2: '未开始',
                3: '已结束',
            },
        };
    },
    components: {
        noData,
    },
    watch: {},
    mounted() {
        this.userGetReserveMatch();
    },
    methods: {
        // 我的预约
        userGetReserveMatch() {
            this.$axios('post', '/match/userGetReserveMatch').then((res) => {
                if (res.code === 200) {
                    this.userReserveMatchList = res.data.matchLists;
                }
            });
        },
    },
};
</script>

<style scoped lang="scss">
.my-order {
    width: 100%;
    @include flexColumnStart();
    position: relative;
    .my-head {
        width: 100%;
        height: 52px;
        border-bottom: 1px solid $primary-color;
        .title {
            width: 150px;
            height: 52px;
            background: linear-gradient(90deg, #ff8d86 0%, #f8413d 100%);
            border-radius: 8px 0px 0px 0px;
            @include flexCenter();
            font-weight: 500;
            color: #ffffff;
            font-size: 16px;
        }
    }
    .order-content {
        width: 100%;
        height: 760px;
        overflow-y: auto;
        padding: 30px;
        .order-list {
            width: 100%;
            .order-title {
                width: 100%;
                // position: sticky;
                // left: 0;
                // top: 0;
                font-size: 14px;
                font-weight: bold;
                margin-bottom: 14px;
                height: 30px;
                line-height: 30px;
                // background-color: #fff;
            }
            .order-item {
                width: 100%;
                height: 118px;
                border-radius: 8px;
                border: 1px solid #e3e3e3;
                margin-bottom: 14px;
                padding: 20px;
                @include flexBetweenCenter();
                .left {
                    @include flexColumnCenter();
                    .match-name {
                        font-size: 16px;
                    }
                    .match-time {
                        font-weight: 700;
                        font-size: 18px;
                        display: block;
                        margin-top: 10px;
                    }
                }
                .center {
                    flex: 1;
                    @include flexCenter();
                    .match-team {
                        @include flexCenter();
                        .match-name {
                            font-size: 16px;
                        }
                        .match-img {
                            width: 30px;
                            margin: 0 5px;
                            img {
                                width: 100%;
                                height: auto;
                            }
                        }
                    }
                    .vs {
                        font-size: 24px;
                        font-weight: 700;
                        margin: 0 15px;
                    }
                }
                .right {
                    width: 62px;
                    height: 28px;
                    background: #f8413d;
                    border-radius: 2px;
                    color: #fff;
                    font-size: 14px;
                    @include flexCenter();
                    &.no-live {
                        background: #ffe3e2;
                        color: #f8413d;
                    }
                    &.over {
                        color: #fff;
                        background: #a1a1a1;
                    }
                }
            }
        }
    }
}
</style>
