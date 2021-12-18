<!--
 * @version:  ;
 * @description:  ;
 * @autor: Full
 * @date: Do not edit
-->
<template>
    <div class="room-box">
        <div class="room-content">
            <div class="room-left">
                <div class="room-match-info">
                    <div class="match-info-left">
                        <div class="team-name">
                            {{
                                roomInfo.matchInfo &&
                                roomInfo.matchInfo.homeTeam.teamName
                            }}
                        </div>
                        <div class="team-icon">
                            <img
                                :src="
                                    roomInfo.matchInfo &&
                                    roomInfo.matchInfo.homeTeam.teamIcon
                                "
                                alt=""
                            />
                        </div>
                        <div class="team-score">
                            {{
                                roomInfo.matchInfo &&
                                roomInfo.matchInfo.homeTeam.score
                            }}
                        </div>
                    </div>
                    <div class="match-info-center">
                        <div class="top-info">
                            <span class="match-time"
                                >{{
                                    roomInfo.matchInfo &&
                                    roomInfo.matchInfo.matchDate
                                }}&nbsp;{{
                                    roomInfo.matchInfo &&
                                    roomInfo.matchInfo.matchTime
                                }}</span
                            >
                            <span class="match-sgin">{{
                                roomInfo.matchInfo &&
                                roomInfo.matchInfo.matchShortName
                            }}</span>
                        </div>
                        <div class="match-vs">vs</div>
                    </div>
                    <div class="match-info-right">
                        <div class="team-score">
                            {{
                                roomInfo.matchInfo &&
                                roomInfo.matchInfo.awayTeam.score
                            }}
                        </div>

                        <div class="team-icon">
                            <img
                                :src="
                                    roomInfo.matchInfo &&
                                    roomInfo.matchInfo.awayTeam.teamIcon
                                "
                                alt=""
                            />
                        </div>
                        <div class="team-name">
                            {{
                                roomInfo.matchInfo &&
                                roomInfo.matchInfo.awayTeam.teamName
                            }}
                        </div>
                    </div>
                </div>
                <div class="room-info">
                    <div class="anchor-info">
                        <div class="anchor-info-left">
                            <div class="anchor-avatar">
                                <img :src="roomInfo.anchorAvatar" alt="" />
                            </div>
                            <div class="room-base">
                                <h2 class="room-title">
                                    {{ roomInfo.roomName }}
                                </h2>
                                <div class="room-number">
                                    <span>{{ roomInfo.anchorName }}</span>
                                    <span>房间号:{{ roomInfo.roomNum }}</span>
                                    <div class="hot">
                                        <img
                                            src="../../../assets/image/live/hot-red-icon.png"
                                        />
                                        <span>{{ roomInfo.hotNum }}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="anchor-info-right">
                            <div class="follow-btn" slot="reference">
                                <img
                                    class="follow-icon"
                                    alt=""
                                    src="../../../assets/image/live/follow-icon.png"
                                />
                                <span
                                    v-if="!roomInfo.follow"
                                    @click="userFollowAnchor(roomInfo.roomId)"
                                    >关注</span
                                >
                                <span
                                    v-if="roomInfo.follow"
                                    @click="userUnFollowAnchor(roomInfo.roomId)"
                                    >已关注</span
                                >
                                <div class="line"></div>
                                <span>{{ roomInfo.follows }}</span>
                            </div>
                            <div
                                class="room-follow-info"
                                v-if="!roomInfo.follow"
                            >
                                <div class="content">
                                    <span class="follow-text">关注主播！</span>
                                    <span class="follow-des"
                                        >精彩直播不容错过</span
                                    >
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="room-video">
                        <liveVideo :playUrl="roomInfo.liveUrl"></liveVideo>
                    </div>
                </div>
            </div>
            <div class="room-right">
                <liveChat :roomInfo="roomInfo"></liveChat>
            </div>
        </div>
        <div class="recommend-live">
            <div class="recommend-title">推荐直播</div>
            <div class="recommend-list">
                <liveItem
                    :item="item"
                    v-for="item in videoRecommendList"
                    :key="item.roomId"
                ></liveItem>
                <i
                    v-for="item in Array.from(Array(getFlexNum(getExpansion)))"
                    :key="item"
                    class="placeholder-box"
                    :class="{ 'placeholder-exp-box': !getExpansion }"
                ></i>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import { Cookie } from '../../../api/cookie';
import liveItem from '../../../components/liveItem';
import liveVideo from './liveVideo';
import liveChat from './liveChat';
export default {
    name: 'index',
    data() {
        return {
            videoRecommendList: [], //推荐直播
            roomInfo: {}, //房间信息
        };
    },
    components: {
        liveItem,
        liveVideo,
        liveChat,
    },
    watch: {},
    computed: {
        ...mapGetters(['getExpansion']),
    },
    mounted() {
        this.getRoomInfo();
        this.getVideoRecommendList();
    },
    methods: {
        ...mapMutations({
            setPermissionModal: 'setPermissionModal',
        }),
        // 获取房间信息
        getRoomInfo() {
            let param = {
                id: this.$route.query.id,
            };
            this.$axios('post', '/room/getRoomInfo', param).then((res) => {
                if (res.code === 200) {
                    this.roomInfo = res.data;
                    console.log(this.roomInfo, 222);
                }
            });
        },
        // 精彩推荐
        getVideoRecommendList() {
            let param = {
                pageNum: 1,
                pageSize: 30,
                roomId: this.$route.query.id,
            };
            this.$axios('post', '/live/getVideoRecommendList', param).then(
                (res) => {
                    if (res.code === 200) {
                        this.videoRecommendList = res.data.dataList;
                    }
                },
            );
        },
        // 关注
        userFollowAnchor(id) {
            if (!Cookie.get('token')) {
                this.setPermissionModal(1);
            } else {
                let param = {
                    id: id,
                };
                this.$axios('post', '/match/userFollowAnchor', param).then(
                    (res) => {
                        if (res.code === 200) {
                            this.$message({
                                type: 'success',
                                message: '关注成功',
                            });
                            this.getRoomInfo(2);
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
        userUnFollowAnchor(id) {
            if (!Cookie.get('token')) {
                this.setPermissionModal(1);
            } else {
                let param = {
                    id: id,
                };
                this.$axios('post', '/match/userUnFollowAnchor', param).then(
                    (res) => {
                        if (res.code === 200) {
                            this.$message({
                                type: 'success',
                                message: '取消关注',
                            });
                            this.getRoomInfo(2);
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

        getFlexNum(exp) {
            let width =
                window.innerWidth ||
                document.documentElement.clientWidth ||
                document.body.clientWidth;
            if (exp) {
                return parseInt((width - 290) / 290);
            } else {
                return parseInt((width - 110) / 320);
            }
        },
    },
};
</script>

<style scoped lang="scss">
.room-box {
    min-width: 1000px;
    width: 100%;
    padding-left: 43px;
    padding-top: 31px;

    .room-content {
        width: 100%;
        @include flexBetweenStart();
        .room-left {
            flex: 1;
            .room-match-info {
                width: 100%;
                height: 72px;
                background: #fff;
                border-radius: 8px;
                @include bgurl('../../../assets/image/live/team-banner-bg.png');
                margin-bottom: 33px;
                @include flexCenter();
                .match-info-left,
                .match-info-right {
                    @include flexCenter();
                    .team-name {
                        font-weight: 400;
                        color: #ffffff;
                        font-size: 24px;
                    }
                    .team-icon {
                        width: 52px;
                        height: 52px;

                        img {
                            width: 100%;
                            height: 100%;
                            object-fit: cover;
                        }
                    }
                    .team-score {
                        font-size: 46px;
                        font-weight: 500;
                        color: #ffffff;
                    }
                }
                .match-info-left {
                    .team-icon {
                        margin-left: 67px;
                        margin-right: 79px;
                    }
                }
                .match-info-right {
                    .team-icon {
                        margin-left: 79px;
                        margin-right: 67px;
                    }
                }
                .match-info-center {
                    height: 100%;
                    @include flexColumnCenter();
                    margin: 0 35px;
                    .top-info {
                        transform: translateY(-15px);

                        @include flexCenter();
                        .match-time,
                        .match-sgin {
                            font-size: 12px;
                            color: #ffffff;
                        }
                        .match-sgin {
                            display: block;
                            margin-left: 5px;
                        }
                    }
                    .match-vs {
                        font-size: 20px;
                        font-weight: 400;
                        color: #ffffff;
                        @include flexCenter();
                        transform: translateY(-5px);
                    }
                }
            }
            .room-info {
                width: 100%;
                height: 883px;
                background: #ffffff;
                border-radius: 8px;
                .anchor-info {
                    width: 100%;
                    height: 83px;
                    padding: 0 35px;
                    @include flexBetweenCenter();
                    &-left {
                        @include flexStartCenter();
                        .anchor-avatar {
                            width: 60px;
                            height: 60px;
                            img {
                                width: 100%;
                                height: 100%;
                                object-fit: cover;
                                border-radius: 50%;
                            }
                        }
                        .room-base {
                            @include flexColumnStartCenter();
                            margin-left: 19px;
                            .room-title {
                                font-size: 20px;
                                font-weight: 500;
                                color: #333333;
                            }
                            .room-number {
                                @include flexStartCenter();
                                margin-top: 10px;
                                span {
                                    display: block;
                                    margin-right: 13px;
                                    font-size: 14px;
                                    color: #605656;
                                }
                                .hot {
                                    @include flexCenter();
                                    img {
                                        width: 12px;
                                        height: 12px;
                                        margin-right: 5px;
                                    }
                                }
                            }
                        }
                    }
                    &-right {
                        min-width: 100px;
                        height: 32px;
                        padding: 0 17px;
                        background: linear-gradient(
                            90deg,
                            #ff8d86 0%,
                            #f8413d 100%
                        );
                        border-radius: 4px;
                        position: relative;
                        .follow-btn {
                            @include flexCenter();
                            width: 100%;
                            height: 100%;
                            cursor: pointer;
                            span {
                                font-size: 14px;

                                color: #ffffff;
                            }
                            img {
                                margin-right: 5px;
                                width: 17px;
                                height: 15px;
                            }
                            .line {
                                height: 17px;
                                width: 2px;
                                background: #fff;
                                margin: 0 7px;
                            }
                        }
                        &:hover {
                            .room-follow-info {
                                display: block;
                            }
                        }
                        .room-follow-info {
                            position: absolute;
                            width: 112px;
                            height: 65px;
                            z-index: 1;
                            top: 42px;
                            left: 50%;
                            transform: translateX(-50%);
                            display: none;
                            background: linear-gradient(
                                129deg,
                                #ff8c85 0%,
                                #f8423e 100%
                            );
                            border-radius: 4px;
                            &::after {
                                position: absolute;
                                top: -13px;
                                left: 50%;
                                transform: translateX(-50%);
                                display: block;
                                width: 0;
                                height: 0;
                                border: 6px solid transparent;
                                border-bottom: 8px solid #ff8c85;
                                content: '';
                            }
                            .content {
                                width: 100%;
                                height: 100%;
                                @include flexColumnCenter();
                                .follow-text {
                                    font-size: 18px;
                                    font-weight: 500;
                                    color: #ffffff;
                                    display: block;
                                    margin-bottom: 10px;
                                }
                                .follow-des {
                                    font-size: 12px;
                                    color: #ffffff;
                                }
                            }
                        }
                    }
                }
                .room-video {
                    width: 100%;
                    height: 720px;
                    background: #0f111a;
                }
            }
        }
        .room-right {
            width: 330px;
            margin: 0 32px;
            height: 988px;
            background: #fff;
            border-radius: 8px;
        }
    }
    .recommend-live {
        width: 100%;
        .recommend-title {
            font-size: 20px;
            font-weight: 500;
            color: #333333;
            margin: 27px 0;
        }
        .recommend-list {
            width: 100%;
            @include flexBetweenCenterWrap();
            .placeholder-box {
                margin-right: 32px;
                width: 262px;
                &.placeholder-exp-box {
                    margin-right: 32px;
                    width: 291px;
                }
            }
        }
    }
}
</style>
