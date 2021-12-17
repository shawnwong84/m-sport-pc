<template>
    <div>
        <div class="room">
            <div class="all-left">
                <div class="all-li-div">
                    <div class="all-li" @click="toMy">
                        <div>
                            <img src="../../assets/image/all-icon2.png" />
                        </div>
                        <div class="mt-5">关注</div>
                    </div>
                    <div @click="toPage1('all', -1, '全部')" class="all-li">
                        <div>
                            <img src="../../assets/image/all-icon5.png" />
                        </div>
                        <div class="mt-5">全部</div>
                    </div>
                    <div @click="toPage1('all', 0, '足球')" class="all-li">
                        <div>
                            <img src="../../assets/image/all-icon4.png" />
                        </div>
                        <div class="mt-5">足球</div>
                    </div>
                    <div @click="toPage1('all', 1, '篮球')" class="all-li">
                        <div>
                            <img src="../../assets/image/all-icon3.png" />
                        </div>
                        <div class="mt-5">篮球</div>
                    </div>
                    <div @click="toPage1('all', 2, '其他')" class="all-li">
                        <div>
                            <img src="../../assets/image/all-icon1.png" />
                        </div>
                        <div class="mt-5">其他</div>
                    </div>
                </div>
            </div>
            <div class="fx justify-center" style="width: 100%">
                <div class="all-right">
                    <div class="live-room" v-if="roomInfoList">
                        <div class="home fx align-items justify-between">
                            <div style="width: 77%">
                                <div
                                    class="score-box"
                                    v-if="roomInfoList.matchInfo"
                                >
                                    <div class="fx align-items score-box-left">
                                        <div
                                            style="
                                                width: 100%;
                                                text-align: right;
                                                margin-right: 50px;
                                            "
                                        >
                                            <img
                                                :src="
                                                    roomInfoList.matchInfo
                                                        .homeTeam.teamIcon
                                                "
                                                class="team-icon1"
                                            />
                                        </div>
                                    </div>
                                    <div
                                        class="fx align-items justify-between"
                                        style="
                                            width: 50%;
                                            padding-left: 20px;
                                            padding-right: 20px;
                                        "
                                    >
                                        <div class="fx align-items">
                                            <div class="fs-16">
                                                {{
                                                    roomInfoList.matchInfo
                                                        .homeTeam.teamName
                                                }}
                                            </div>
                                            <div class="fs-42 ml-10 fw-700">
                                                {{
                                                    roomInfoList.matchInfo
                                                        .homeTeam.score
                                                }}
                                            </div>
                                        </div>
                                        <div>
                                            <span
                                                class="fs-12"
                                                v-if="
                                                    roomInfoList.matchInfo
                                                        .status === 1
                                                "
                                                >进行中</span
                                            >
                                            <span
                                                class="fs-12"
                                                v-if="
                                                    roomInfoList.matchInfo
                                                        .status === 2
                                                "
                                                >未开始</span
                                            >
                                            <span
                                                class="fs-12"
                                                v-if="
                                                    roomInfoList.matchInfo
                                                        .status === 3
                                                "
                                                >已结束</span
                                            >
                                        </div>
                                        <div class="fx align-items">
                                            <div class="fw-700 mr-10 fs-42">
                                                {{
                                                    roomInfoList.matchInfo
                                                        .awayTeam.score
                                                }}
                                            </div>
                                            <div class="fs-16">
                                                {{
                                                    roomInfoList.matchInfo
                                                        .awayTeam.teamName
                                                }}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="fx align-items score-box-right">
                                        <img
                                            :src="
                                                roomInfoList.matchInfo.awayTeam
                                                    .teamIcon
                                            "
                                            class="team-icon2"
                                        />
                                    </div>
                                </div>
                                <div class="room-left">
                                    <div class="top-block">
                                        <div class="fx align-items">
                                            <div>
                                                <img
                                                    :src="
                                                        roomInfoList.anchorAvatar
                                                    "
                                                    class="room-head"
                                                />
                                            </div>
                                            <div
                                                class="ml-20"
                                                style="width: 100%"
                                            >
                                                <div class="fs-18 fw-700 c-33">
                                                    {{ roomInfoList.roomName }}
                                                </div>
                                                <div
                                                    class="fx justify-between align-items"
                                                    style="width: 100%"
                                                >
                                                    <div
                                                        class="mt-5"
                                                        style="color: #76809c"
                                                    >
                                                        <span class="">{{
                                                            roomInfoList.anchorName
                                                        }}</span>
                                                        <span class="ml-10"
                                                            >房间号:{{
                                                                roomInfoList.roomNum
                                                            }}</span
                                                        >
                                                        <span class="ml-10"
                                                            ><img
                                                                src="../../assets/image/num.png"
                                                                class="mr-5"
                                                                style="
                                                                    margin-top: -5px;
                                                                "
                                                            />{{
                                                                roomInfoList.hotNum
                                                            }}</span
                                                        >
                                                        <!--                      <span class="ml-10"><img src="../../assets/image/iphone.png" class="mr-5"/>下载APP可投屏电视</span>-->
                                                    </div>
                                                    <div>
                                                        <div
                                                            v-if="
                                                                !roomInfoList.follow
                                                            "
                                                            class="follow active1 fx align-items"
                                                            @click="
                                                                userFollowAnchor(
                                                                    roomInfoList.roomId,
                                                                )
                                                            "
                                                        >
                                                            <div>
                                                                <img
                                                                    src="../../assets/image/guanzhu.png"
                                                                    width="14px"
                                                                />
                                                            </div>
                                                            <div
                                                                style="
                                                                    border-right: 1px
                                                                        solid
                                                                        #ce995b;
                                                                    padding-right: 10px;
                                                                "
                                                                class="ml-10"
                                                            >
                                                                关注
                                                            </div>
                                                            <div class="ml-10">
                                                                {{
                                                                    roomInfoList.follows
                                                                }}
                                                            </div>
                                                        </div>
                                                        <div
                                                            v-else
                                                            class="follow gray fx align-items"
                                                            @click="
                                                                userUnFollowAnchor(
                                                                    roomInfoList.roomId,
                                                                )
                                                            "
                                                        >
                                                            <div
                                                                style="
                                                                    border-right: 1px
                                                                        solid
                                                                        #333333;
                                                                    padding-right: 10px;
                                                                "
                                                            >
                                                                已关注
                                                            </div>
                                                            <div class="ml-10">
                                                                {{
                                                                    roomInfoList.follows
                                                                }}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        style="
                                            position: absolute;
                                            top: 35%;
                                            width: 55%;
                                        "
                                        v-if="isDanmu"
                                    >
                                        <div class="bullet-wrap">
                                            <div
                                                class="bullet-item bullet-animation"
                                                :class="{
                                                    on: index % 2 == 0,
                                                    off: index % 2 != 0,
                                                }"
                                                v-for="(
                                                    item, index
                                                ) in chatContent"
                                                :key="index"
                                                v-if="
                                                    item.askContent !==
                                                    '进入直播间'
                                                "
                                            >
                                                {{ item.askContent }}
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        style="
                                            height: 665px;
                                            width: 100%;
                                            position: relative;
                                        "
                                    >
                                        <!--          <div id="id_test_video" style="width:100%; height:auto;" ref="video"></div>-->
                                        <div
                                            class="prism-player"
                                            id="player-con"
                                        ></div>
                                    </div>
                                    <div
                                        class="video-footer"
                                        v-if="roomInfoList.roomStatus === 1"
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
                                                        :format-tooltip="
                                                            formatTooltip
                                                        "
                                                        :show-tooltip="false"
                                                        @change="getVolume"
                                                    ></el-slider>
                                                </div>
                                            </div>
                                            <div>
                                                <img
                                                    src="../../assets/image/danmu-open.png"
                                                    class="mr-10"
                                                    width="19px"
                                                    v-if="isDanmu"
                                                    @click="closeDanmu"
                                                />
                                                <img
                                                    src="../../assets/image/danmu-close.png"
                                                    class="mr-10"
                                                    width="19px"
                                                    v-else
                                                    @click="closeDanmu"
                                                />
                                                <img
                                                    src="../../assets/image/Expand.png"
                                                    @click="fullscreen(true)"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        class="no-live"
                                        v-if="roomInfoList.roomStatus === 0"
                                    >
                                        <div>
                                            <div class="ta-c">
                                                <img
                                                    src="../../assets/image/noLive.png"
                                                    width="150px"
                                                />
                                            </div>
                                            <div class="fs-16 mt-15 ta-c">
                                                主播正在赶来的路上......
                                            </div>
                                        </div>
                                    </div>
                                    <div class="gold-box" v-if="isGold">
                                        <div
                                            class="fx align-items justify-between"
                                        >
                                            <div class="fs-18 fw-700">
                                                如何获得 金币
                                            </div>
                                            <div @click="closeGold">
                                                <img
                                                    src="../../assets/image/icon-close.png"
                                                    width="20px"
                                                />
                                            </div>
                                        </div>
                                        <div class="fx align-items mt-20">
                                            <div>
                                                <img
                                                    src="../../assets/image/score-tip1.png"
                                                    width="50px"
                                                />
                                            </div>
                                            <div class="ml-10">
                                                <div class="fw-700">
                                                    登录获得 金币
                                                </div>
                                                <div class="c-9 fs-12">
                                                    每日登录可获得
                                                    金币，连续登录天数越长，
                                                    金币越多
                                                </div>
                                            </div>
                                        </div>
                                        <div class="fx align-items mt-20">
                                            <div>
                                                <img
                                                    src="../../assets/image/score-tip2.png"
                                                    width="50px"
                                                />
                                            </div>
                                            <div class="ml-10">
                                                <div class="fw-700">
                                                    观看直播获得 金币
                                                </div>
                                                <div class="c-9 fs-12">
                                                    每观看十分钟直播，可以获得5点
                                                    金币
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        class="fx align-items fx-end"
                                        style="height: 80px"
                                    >
                                        <div>
                                            <img
                                                src="../../assets/image/gold-2.png"
                                                width="30px"
                                            />
                                        </div>
                                        <div class="fs-20 fw-700 c-9 ml-10">
                                            {{ roomInfoList.userGold }}
                                        </div>
                                        <div class="fx align-items ml-30">
                                            <div
                                                v-for="(
                                                    item, index
                                                ) in giftList"
                                                style="position: relative"
                                            >
                                                <div
                                                    class="fx align-items justify-between send-gif-box"
                                                    @mouseover="
                                                        mouseover(index)
                                                    "
                                                    @mouseleave="mouseleave"
                                                    v-if="isshow === index"
                                                >
                                                    <div class="fx align-items">
                                                        <div>
                                                            <img
                                                                :src="
                                                                    item.giftImg
                                                                "
                                                                class="gif-img"
                                                            />
                                                        </div>
                                                        <div>
                                                            <div
                                                                class="fs-12 c-9D"
                                                            >
                                                                {{
                                                                    item.giftName
                                                                }}
                                                            </div>
                                                            <div
                                                                class="fs-12 c-f8"
                                                            >
                                                                {{
                                                                    item.gold
                                                                }}金币
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div
                                                        class="active fs-12 send-gif-btn"
                                                        @click="sendGift(item)"
                                                    >
                                                        赠送
                                                    </div>
                                                </div>
                                                <div
                                                    @mouseover="
                                                        mouseover(index)
                                                    "
                                                    @mouseleave="mouseleave"
                                                >
                                                    <img
                                                        :src="item.giftImg"
                                                        class="gif-img"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="room-right">
                                <div
                                    class="ml-10 notice"
                                    @mouseover="stop"
                                    @mouseleave="show"
                                >
                                    <img
                                        src="../../assets/image/notice.png"
                                        width="15px"
                                        class="mr-5"
                                    />公告：{{ roomInfoList.roomAnnouncement }}
                                </div>
                                <div class="bd-bottom mt-10"></div>
                                <div class="chat-center chatbg2" ref="main">
                                    <div ref="content" v-if="isTab === 1">
                                        <div
                                            class=""
                                            style="
                                                color: #3b6de2;
                                                background: #f6f7f8;
                                                padding: 10px;
                                            "
                                        >
                                            欢迎进入本直播间，请友善发言。本平台明确禁止讨论任何违法、违规、低俗、涉赌内容，一经发现作封禁帐号和直播间处理。防丢失请下载xxapp。
                                        </div>
                                        <div style="padding: 0px 10px">
                                            <div
                                                class="fx mt-10"
                                                v-for="(
                                                    item, index
                                                ) in chatContent"
                                                :key="index"
                                            >
                                                <div style="width: 55px">
                                                    <div class="userLevel">
                                                        LV{{ item.askLevel }}
                                                    </div>
                                                </div>
                                                <div
                                                    style="
                                                        word-break: break-all;
                                                        width: 80%;
                                                        font-size: 14px;
                                                        margin-left: 5px;
                                                    "
                                                >
                                                    <span style="color: #3b6de2"
                                                        >{{
                                                            item.askName
                                                        }}:</span
                                                    >
                                                    <span
                                                        v-html="
                                                            renderTxt(
                                                                item.askContent,
                                                            )
                                                        "
                                                    ></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    class="fx justify-between tabcontent"
                                    v-if="isShowGif"
                                >
                                    <div>
                                        <div class="fs-12 c-f8">
                                            {{ roomInfoList.userName }}
                                        </div>
                                        <div class="fs-12">送出了</div>
                                    </div>
                                    <div>
                                        <img :src="gifUrl" width="30px" />
                                    </div>
                                </div>
                                <div class="chat-emoji">
                                    <chat-emoji
                                        :showModal="showModal"
                                        v-on:selectEmoji="showChatEmoji"
                                    ></chat-emoji>
                                </div>
                                <div class="chat-foot">
                                    <div
                                        class="no-token"
                                        v-if="!token"
                                        @click="toLogin"
                                    ></div>
                                    <div class="inputBox">
                                        <div class="happy">
                                            <img
                                                src="../../assets/image/Happy.png"
                                                class="cursor"
                                                width="20px"
                                                @click="checkEmoji"
                                            />
                                        </div>
                                        <div style="width: 75%">
                                            <textarea
                                                name="input"
                                                class="textarea"
                                                v-model="contentTxt"
                                                cols="30"
                                                rows="3"
                                                placeholder="我要说..."
                                            ></textarea>
                                        </div>
                                        <div class="send" @click="sendRoomText">
                                            发送
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="home-box">
                        <div class="home">
                            <div
                                class="mt-30 room-txt"
                                v-if="videoRecommendList.length !== 0"
                            >
                                相关直播
                            </div>
                            <div
                                class="fx flex-wrap"
                                style="margin-bottom: 30px"
                            >
                                <div
                                    class="hot-content"
                                    v-for="(item, index) in videoRecommendList"
                                    :key="index"
                                    @click="toPageRoom('room', item.roomId)"
                                >
                                    <div class="fx justify-between jian">
                                        <div v-if="item.recommend === 1">
                                            <img
                                                src="../../assets/image/jian.png"
                                                width="40px"
                                            />
                                        </div>
                                        <div
                                            class="living"
                                            v-if="item.roomStatus === 1"
                                        >
                                            <div>
                                                <img
                                                    src="../../assets/image/living.gif"
                                                    width="12px"
                                                />
                                            </div>
                                            <div class="live-gif">Live</div>
                                        </div>
                                    </div>
                                    <div
                                        class="matchCutImg"
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
                                    <div class="bg-fff">
                                        <div class="roomName">
                                            {{ item.roomName }}
                                        </div>
                                        <div class="fx justify-between mt-5">
                                            <div
                                                style="color: #999999"
                                                class="fx"
                                            >
                                                <div>
                                                    <img
                                                        :src="item.anchorAvatar"
                                                        class="anchorAvatar"
                                                    />
                                                </div>
                                                <div class="mt-2">
                                                    {{ item.anchorName }}
                                                </div>
                                            </div>
                                            <div class="fx">
                                                <div>
                                                    <img
                                                        src="../../assets/image/icon-hot-gray.png"
                                                        width="15px"
                                                    />
                                                </div>
                                                <div
                                                    class="mt-2"
                                                    style="
                                                        color: #999999;
                                                        margin-left: 2px;
                                                    "
                                                >
                                                    {{ item.hotNum }}
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
        </div>
        <div class="modal" v-if="isShowWindow"></div>
        <div class="modal-pop" v-if="isShowWindow">
            <div>
                <img
                    src="../../assets/image/close.png"
                    class="close cursor"
                    @click="closeWindow"
                />
            </div>
            <div class="window-inner">
                <div>
                    <img
                        src="../../assets/image/fade-logo1.png"
                        style="width: 100px; height: 100px"
                    />
                </div>
                <div class="pop-txt">
                    您已观看一分钟,如要继续观看,请注册成为会员
                </div>
                <div class="cursor" @click="toRegister">
                    <img src="../../assets/image/fade-btn1.png" width="200px" />
                </div>
                <div class="fs-12 mt-20">
                    <span class="c-9D">注册登录即代表你已同意</span>
                    <span class="c-ffa" @click="toPage('agreement')"
                        >《用户协议》</span
                    >
                </div>
            </div>
        </div>

        <v-footer class=""></v-footer>
    </div>
</template>

<script>
import { mapMutations } from 'vuex';
import footer from '../../components/footer/index.vue';
import chatEmoji from '../../components/chatEmoji/index.vue';
import emoji from '../../config/emoji';
import { Cookie } from '../../api/cookie';
import Swiper from 'swiper';

export default {
    name: 'index',
    data() {
        return {
            chatContent: [],
            isShowGif: false,
            isShowImg: '',
            isGold: false,
            isshow: -1,
            gifUrl: '',
            volume: 30,
            isMute: true,
            isDanmu: true,
            videoRecommendList: [],
            isTab: 1,
            contentTxt: '',
            showModal: false,
            isPlay: false,
            matchList: [],

            isShowWindow: false,
            isFrist: false,
            giftList: [],
            roomInfoList: [],
            showDanmu: true,
            leaderboardList: [],
            chatMessageData: [],
            token: '',
            timerToken: null,
            player: null,
        };
    },
    components: {
        chatEmoji,
        // 'video-box': videoBox,
        'v-footer': footer,
        'v-reg-login': RegandLogin,
    },
    mounted() {
        this.token = Cookie.get('token');
        this.getRoomInfo(1);
        this.getVideoRecommendList();
        this.getList();
        this.getGiftList();
        this.leaderboard();
        window.addEventListener('beforeunload', (e) => {
            this.beforeunloadHandler(e);
        });
        if (!this.token) {
            this.timerToken = setInterval(this.get, 60000);
        }
    },
    destroyed() {
        window.removeEventListener('beforeunload', (e) => {
            this.beforeunloadHandler(e);
        });
        clearInterval(this.timerToken);
    },
    methods: {
        ...mapMutations({
            setPermissionModal: 'setPermissionModal',
        }),
        toMy() {
            if (Cookie.get('token')) {
                this.$router.replace({ name: 'my', query: { num: 4 } });
            } else {
                this.setPermissionModal(1);
            }
        },
        toRegister() {
            this.setPermissionModal(2);
            this.isShowWindow = false;
        },
        toLogin() {
            this.setPermissionModal(1);
            this.isShowWindow = false;
        },
        toPage(name) {
            this.$router.push({ name: name });
        },
        toPage1(name, num, type) {
            this.$router.push({ name: name, query: { num: num, type: type } });
        },
        closeWindow() {
            this.isShowWindow = false;
            this.play();
        },
        get() {
            this.pause();
            this.isShowWindow = true;
        },
        show() {
            if (this.timer != null) return;
            this.timer = setInterval(() => {
                // 获取到头的第一个字符
                let start = this.roomInfoList.roomAnnouncement.substring(0, 1);
                // 获取到后面的所有字符
                let end = this.roomInfoList.roomAnnouncement.substring(1);
                // 重新拼接得到新的字符串，并赋值给this.message
                this.roomInfoList.roomAnnouncement = end + start;
            }, 300);
        },
        stop() {
            // 清除定时器
            clearInterval(this.timer);
            // 清除定时器之后，需要重新将定时器置为null
            this.timer = null;
        },
        closeDanmu() {
            if (this.isDanmu) {
                this.isDanmu = false;
            } else {
                this.isDanmu = true;
            }
        },
        showGold() {
            this.isGold = true;
        },
        closeGold() {
            this.isGold = false;
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
        // 移入
        mouseover1(id) {
            clearTimeout(this.timer);
            this.isShowImg = id;
        },
        // 移出
        mouseleave1() {
            this.timer = setTimeout(() => {
                this.isShowImg = '';
            }, 100);
        },
        // 移入
        mouseover(index) {
            clearTimeout(this.timer);
            this.isshow = index;
        },
        // 移出
        mouseleave() {
            this.timer = setTimeout(() => {
                this.isshow = false;
            }, 100);
        },
        chatTab(num) {
            this.isTab = num;
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
        // 播放器
        playerVideo(img, url) {
            // eslint-disable-next-line no-unused-vars,no-undef
            this.player = new Aliplayer(
                {
                    id: 'player-con',
                    source: url,
                    width: '100%',
                    height: '450px',
                    autoplay: true,
                    isLive: true,
                    muted: true,
                    rePlay: false,
                    cover: img,
                    playsinline: true,
                    preload: true,
                    controlBarVisibility: 'click',
                    useH5Prism: true,
                },
                function (player) {
                    console.log('The player is created');
                },
            );
            // new TcPlayer('id_test_video', {
            //   'm3u8': url,
            //   'mp4': url,
            //   'flv': url, // 增加了一个 flv 的播放地址，用于PC平台的播放 请替换成实际可用的播放地址
            //   'autoplay': true,      // iOS 下 safari 浏览器，以及大部分移动端浏览器是不开放视频自动播放这个能力的
            //   'progressControl': false,
            //   'poster': {'style': 'cover', 'src': img},
            //   'width': '100%', // 视频的显示宽度，请尽量使用视频分辨率宽度
            //   'height': '450'// 视频的显示高度，请尽量使用视频分辨率高度
            // })
        },
        /**
         * [beforeunloadHandler 浏览器关闭时进行用户提示]
         * @return {[type]} [description]
         */
        beforeunloadHandler(e) {
            let options = {
                roomId: this.roomInfoList.roomId, // 聊天室id
            };
            this.$imconn.quitChatRoom(options).then((res) => {
                console.log(res);
            });
        },
        // 加入聊天室
        getJoinChatRoom() {
            let options = {
                roomId: this.roomInfoList.roomId, // 聊天室id
                message: 'reason', // 原因（可选参数）
            };
            this.$imconn.joinChatRoom(options).then((res) => {
                this.sendRoomText('进入直播间');
                this.getChatHistoryMessage();
                this.getChat();
                this.getChatMessage();
            });
        },
        // 获取聊天室详情
        getChat() {
            // let options = {
            //   chatRoomId: this.roomInfoList.roomId   // 聊天室id
            // }
            // this.$imconn.getChatRoomDetails(options).then((res) => {
            //   console.log(res)
            // })
            let options = {
                pageNum: 1,
                pageSize: 10,
                chatRoomId: this.roomInfoList.roomId,
            };
            this.$imconn.listChatRoomMember(options).then((res) => {
                console.log(res);
            });
        },
        // 登录账号
        loginWebIM(id) {
            // 这儿是测试用的账号和密码
            this.$imoption.user = id;

            this.$imconn.open(this.$imoption);
            let _this = this;
            // 监听回调
            this.$imconn.listen({
                onOpened: function (message) {
                    console.log('用户已上线', message);
                    _this.getJoinChatRoom();
                },
                onClosed: function (message) {
                    console.log('用户下线');
                    _this.$emit('isclose', true);
                },
                // 收到文本消息
                onTextMessage: function (message) {
                    // console.log(message)
                    this.value = message.data;
                    _this.chatContent.push({
                        // 把发送者的头像和文本数据push到数组中在页面上展示
                        askName: message.ext.user_nick,
                        askLevel: message.ext.user_level,
                        askContent: message.data,
                    });
                    _this.$nextTick(() => {
                        _this.$refs.main.scrollTop =
                            _this.$refs.content.scrollHeight;
                        console.log(
                            _this.$refs.main.scrollTop,
                            _this.$refs.content.scrollHeight,
                        );
                    });
                    if (message.data === '进入直播间') {
                        this.getChatMessage();
                    }
                },
                onEmojiMessage: function (message) {
                    console.log('onEmojiMessage', message);
                    // const { type } = message;
                    // type === 'chat' && ack(message);
                },
            });
        },
        getHistoryMessage() {
            console.log('进入拉取历史消息。。。。');
            const options = {
                queue: this.roomInfoList.roomId,
                isGroup: false,
                count: 10, // 每次获取消息条数
                success: function (msgs) {
                    console.log(msgs);
                },
                fail: function (res) {
                    console.log(res);
                },
            };
            this.$imconn.fetchHistoryMessages(options);
        },
        // 发送文本消息
        sendRoomText(msgTxt) {
            let _this = this;
            let id = this.$imconn.getUniqueId(); // 生成本地消息id
            // eslint-disable-next-line no-undef,new-cap
            let msg = new WebIM.message('txt', id); // 创建文本消息
            let option = {
                msg: this.contentTxt || msgTxt, // 消息内容
                to: this.roomInfoList.roomId, // 接收消息对象(聊天室id)
                chatType: 'chatRoom', // 群聊类型设置为聊天室
                ext: {
                    user_nick: _this.roomInfoList.userName,
                    user_level: _this.roomInfoList.userLevel,
                }, // 扩展消息
                success: function () {
                    _this.chatContent.push({
                        // 把发送者的头像和文本数据push到数组中在页面上展示
                        askName: _this.roomInfoList.userName,
                        askLevel: _this.roomInfoList.userLevel,
                        askContent: msg.value,
                    });
                    _this.contentTxt = '';
                    _this.showModal = false;
                    _this.$nextTick(() => {
                        _this.$refs.main.scrollTop =
                            _this.$refs.content.scrollHeight;
                    });
                }, // 对成功的相关定义，sdk会将消息id登记到日志进行备份处理
                fail: function () {
                    console.log('failed');
                }, // 对失败的相关定义，sdk会将消息id登记到日志进行备份处理
            };
            msg.set(option);
            this.$imconn.send(msg.body);
        },
        sendRoomText2(msgUser, msgTxt) {
            let _this = this;
            let id = this.$imconn.getUniqueId(); // 生成本地消息id
            // eslint-disable-next-line no-undef,new-cap
            let msg = new WebIM.message('txt', id); // 创建文本消息
            let option = {
                msg: msgTxt, // 消息内容
                to: this.roomInfoList.roomId, // 接收消息对象(聊天室id)
                chatType: 'chatRoom', // 群聊类型设置为聊天室
                ext: {
                    user_nick: msgUser,
                    user_level: 1,
                }, // 扩展消息
                success: function () {
                    _this.chatContent.push({
                        // 把发送者的头像和文本数据push到数组中在页面上展示
                        askName: msgUser,
                        askLevel: 1,
                        askContent: msgTxt,
                    });
                    _this.contentTxt = '';
                    _this.showModal = false;
                    _this.$nextTick(() => {
                        _this.$refs.main.scrollTop =
                            _this.$refs.content.scrollHeight;
                    });
                }, // 对成功的相关定义，sdk会将消息id登记到日志进行备份处理
                fail: function () {
                    console.log('failed');
                }, // 对失败的相关定义，sdk会将消息id登记到日志进行备份处理
            };
            msg.set(option);
            this.$imconn.send(msg.body);
        },
        danmu(value) {
            this.list = value;
            setInterval(() => {
                var item = null;
                if (this.idx === 3) {
                    // c 位
                    item = this.clist.shift();
                }
                if (!item) {
                    item = this.list.shift();
                }
                if (item) {
                    item.line = this.idx;
                    this.idx = (this.idx % 5) + 1;
                    this.bulletlist.push(item);
                } else {
                    if (this.clist.length) {
                        item = this.clist.shift();
                        item.line = 3;
                        this.idx = 3;
                        this.bulletlist.push(item);
                    }
                }
            }, 1000);
        },
        // 获取历史记录
        getChatHistoryMessage() {
            let param = {
                id: this.$route.query.id,
            };
            this.$axios('post', '/room/getChatHistoryMessage', param).then(
                (res) => {
                    if (res.code === 200) {
                        // this.chatMessageData = res.data
                        for (let i = 0; i < res.data.length; i++) {
                            this.sendRoomText2(
                                res.data[i].sendUser,
                                res.data[i].msgContent,
                            );
                        }
                    }
                },
            );
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
        getChatMessage() {
            let param = {
                sportsType: this.roomInfoList.matchInfo.sportsType,
            };
            this.$axios('post', '/V1/room/getChatMessageBySports', param).then(
                (res) => {
                    if (res.code === 200) {
                        this.chatMessageData = res.data;
                        for (let i = 0; i < res.data.length; i++) {
                            this.sendRoomText2(
                                res.data[i].nickName,
                                res.data[i].msg,
                            );
                        }
                        // this.sendRoomText2(res.data.sendUser, res.data.msgContent)
                    }
                },
            );
        },
        // 根据房间id获取主播赛程
        getList() {
            let param = {
                id: this.$route.query.id,
            };
            this.$axios('post', '/room/getAnchorMatch', param).then((res) => {
                if (res.code === 200) {
                    this.matchList = res.data.matchLists;
                    this.$nextTick(() => {
                        // eslint-disable-next-line no-unused-vars
                        var swiper = new Swiper('.match-swpier', {
                            slidesPerView: 3,
                            spaceBetween: 0,
                            slidesPerGroup: 1,
                            loop: true,
                            loopFillGroupWithBlank: true,
                            pagination: {
                                el: '.swiper-pagination',
                                clickable: true,
                            },
                            navigation: {
                                nextEl: '.swiper-button-next',
                                prevEl: '.swiper-button-prev',
                            },
                        });
                    });
                }
            });
        },
        // 获取礼物列表
        getGiftList() {
            this.$axios('post', '/room/getGiftList').then((res) => {
                if (res.code === 200) {
                    this.giftList = res.data;
                }
            });
        },
        // 获取房间信息
        getRoomInfo(num) {
            let param = {
                id: this.$route.query.id,
            };
            this.$axios('post', '/room/getRoomInfo', param).then((res) => {
                if (res.code === 200) {
                    this.roomInfoList = res.data;
                    if (num === 1) {
                        if (this.roomInfoList.roomStatus === 1) {
                            this.playerVideo(
                                'https://1-1305184012.cos.ap-nanjing.myqcloud.com/live/11163174726023.jpg',
                                this.roomInfoList.liveUrl,
                            );
                        }
                    }
                    this.loginWebIM(res.data.huanXinUserId);
                    if (this.roomInfoList.roomAnnouncement.length >= 14) {
                        this.show();
                    }
                }
            });
        },
        toPageRoom(name, id) {
            // let routeData = this.$router.resolve({
            //   name: name,
            //   query: {id: id}
            // })
            // window.open(routeData.href, '_blank')
            this.$router.replace({ name: name, query: { id: id } });
            location.reload();
        },
        checkEmoji() {
            if (this.showModal) {
                this.showModal = false;
            } else {
                this.showModal = true;
            }
        },
        showChatEmoji(data) {
            this.contentTxt = this.contentTxt + data;
        },
        // 赠送礼物
        sendGift(item) {
            if (this.token) {
                let param = {
                    giftId: item.id,
                    roomId: this.$route.query.id,
                };
                this.$axios('post', '/room/sendGift', param).then((res) => {
                    if (res.code === 200) {
                        this.gifUrl = item.giftImg;
                        this.isShowGif = true;
                        this.roomInfoList.userGold =
                            this.roomInfoList.userGold - item.gold;
                        const TIME_COUNT = 2;
                        var timer = null;
                        let count = 0;
                        if (!timer) {
                            count = TIME_COUNT;
                            timer = setInterval(() => {
                                if (count > 0 && count <= TIME_COUNT) {
                                    count--;
                                } else {
                                    this.isShowGif = false;
                                    clearInterval(timer);
                                    timer = null;
                                }
                            }, 1000);
                        }
                        this.leaderboard();
                    } else {
                        this.$message({
                            type: 'warning',
                            message: res.msg,
                        });
                    }
                });
            } else {
                this.setPermissionModal(1);
            }
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
                            this.getList();
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
                        this.getList();
                    }
                },
            );
        },
        // 获取送礼排行版
        leaderboard() {
            let param = {
                id: this.$route.query.id,
            };
            this.$axios('post', '/room/leaderboard', param).then((res) => {
                if (res.code === 200) {
                    this.leaderboardList = res.data;
                }
            });
        },
        // 转换成表情图片
        customEmoji(value) {
            return `<img src="../../../static/faces/${value}" style="width:20px"/>`;
        },
        renderTxt(txt = '') {
            let rnTxt = [];
            let match = null;
            const regex = /(\[.*?\])/g;
            let start = 0;
            let index = 0;
            while ((match = regex.exec(txt))) {
                index = match.index;
                if (index > start) {
                    rnTxt.push(txt.substring(start, index));
                }
                if (match[1] in emoji.obj) {
                    const v = emoji.obj[match[1]];
                    rnTxt.push(this.customEmoji(v));
                } else {
                    rnTxt.push(match[1]);
                }
                start = index + match[1].length;
            }
            rnTxt.push(txt.substring(start, txt.length));
            return rnTxt.toString().replace(/,/g, '');
        },
    },
};
</script>

<style scoped>
.room {
    min-height: 100vh;
    background: #f9fbff !important;
    display: flex;
}
.all-left {
    width: 90px;
    min-height: 100vh;
    background: #1b1d2e;
    padding-top: 40px;
    display: flex;
    justify-content: center;
}
.all-li-div {
    /*position: fixed;*/
}
.all-li {
    color: #ffffff;
    font-weight: 700;
    width: 100%;
    height: 50px;
    text-align: center;
    cursor: pointer;
    margin-bottom: 20px;
}
.all-right {
    width: 98%;
    min-width: 1250px;
    max-width: 1700px;
}
.home-box {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.home {
    width: 100%;
    /*margin-top: -20px;*/
}
.open-login {
    color: #f8413d;
    font-weight: 600;
    cursor: pointer;
}
.window-inner {
    padding: 42px 50px 29px;
    text-align: center;
}
/*.danmu-box{*/
/*  width: 100%;*/
/*  position: relative;*/
/*  top:40%;*/
/*  border: 1px solid red;*/
/*  z-index: 9;*/
/*  color: white;*/
/*}*/
.live-room {
    width: 100%;
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.room-left {
    /*width: 100%;*/
    width: 100%;
    background: white;
    /*height: 750px;*/
    border-radius: 6px;
    border: 1px solid #e6eaf3;
}
.room-right {
    width: 22%;
    background: white;
    height: 100%;
    border-radius: 6px;
    padding-top: 10px;
    /*display: none;*/
    border: 1px solid #e6eaf3;
}
.appoinment {
    padding: 5px 15px;
    border-radius: 6px;
    cursor: pointer;
}

.room-txt {
    font-size: 24px;
}

.room-head {
    width: 60px;
    height: 60px;
    border-radius: 50%;
}
.top-block {
    width: 100%;
    padding: 10px 30px;
    background: #ffffff;
    /*border-top-left-radius: 6px;*/
    /*border-top-right-radius: 6px;*/
    /*border: 1px solid #E6EAF3;*/
    /*margin-top: 10px;*/
    /*height: 80px;*/
}
.gif-box {
    padding: 10px;
}
.gif-img {
    width: 30px;
    margin-right: 20px;
}
.send-gif-btn {
    border-radius: 5px;
    padding: 2px 5px;
    cursor: pointer;
}
.send-gif-box {
    width: 200px;
    background: white;
    position: absolute;
    top: -80px;
    left: -50px;
    padding: 15px 10px;
    border-radius: 6px;
    border: 1px solid #d8d8d8;
    z-index: 13;
}
.my-gold {
    width: 170px;
    border-right: 1px solid #d8d8d8;
    margin-right: 10px;
    padding-left: 10px;
}
.tab-item {
    width: 50%;
    text-align: center;
    font-size: 14px;
    line-height: 38px;
    color: #777;
    cursor: pointer;
    border-bottom: 1px solid #d8d8d8;
}
.tab-nav {
    color: #000;
    font-size: 15px;
    font-weight: 600;
    border-bottom: 3px solid #eecfb5;
    padding-bottom: 8px;
}
.c-f8 {
    color: #eecfb5;
}
.chat-center {
    height: 780px;
    overflow-y: scroll;
    overflow-x: hidden;
}
.chat-center::-webkit-scrollbar {
    display: none;
}
.chatbg1 {
    background: #f4f4f4;
}
.chatbg2 {
    background: white;
}
.no-token {
    width: 100%;
    height: 50px;
    background: #ffffff;
    opacity: 0.1;
    margin-bottom: -50px;
}
.chat-foot {
    padding: 13px;
    box-sizing: border-box;
    border-top: 1px solid #f4f4f4;
}
.inputBox {
    width: 100%;
    height: 48px;
    display: flex;
    justify-content: center;
}
.pop-txt {
    font-size: 12px;
    margin: 20px;
    color: #707070;
}
.c-ffa {
    color: #eecfb5;
    cursor: pointer;
}
.textarea {
    width: 100%;
    border-top: 1px solid #cc9459;
    border-bottom: 1px solid #cc9459;
    border-right: 0;
    font-size: 16px;
    padding: 10px 20px;
    resize: none;
    height: 48px;
    outline: 0;
}
.userAvatar-img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-left: 5px;
    margin-right: 5px;
}
.userLevel {
    height: 22px;
    width: 50px;
    padding-top: 2px;
    text-align: center;
    font-size: 12px;
    background: #5edcdf;
    color: white;
    margin-left: 5px;
}
.send {
    text-align: center;
    font-size: 16px;
    font-weight: 600;
    width: 72px;
    height: 48px;
    line-height: 48px;
    background: linear-gradient(115deg, #eecfb5 -2%, #f8413d 100%);
    border: 1px solid #f8413d;
    color: #cc9459;
    user-select: none;
    cursor: pointer;
    border-radius: 0px 4px 4px 0px;
}
.chat-emoji {
    position: relative;
    top: -150px;
}
.active {
    background: linear-gradient(115deg, #eecfb5 -2%, #f8413d 100%);
    border: 1px solid #f8413d;
    color: white;
}
.active1 {
    color: #693d13;
    background: linear-gradient(115deg, #eecfb5 -2%, #f8413d 100%);
    border: 1px solid #f8413d;
}
.follow {
    border-radius: 4px;
    width: 120px;
    height: 30px;
    justify-content: center;
    cursor: pointer;
    z-index: 9;
}
.gray {
    color: black;
    background: #d8d8d8;
}
.swiper-container {
    width: 100%;
    height: 100%;
}
.swiper-slide-match {
    border-right: 1px solid #d8d8d8;
    background: white;
    font-weight: 400;
    padding: 16px 16px 20px;
    width: 280px;
    height: 130px;
}
.swiper-button-prev,
.swiper-button-next {
    color: gray !important;
}

.out_container {
    width: 100%;
    height: 100%;
    position: relative;
}
.in_container {
    width: 90%;
    height: 100%;
    margin: 0 auto;
    overflow: hidden;
}
.swiper_btn {
    width: 20px;
    height: 20px;
    background-size: contain;
}
.tabcontent {
    width: 200px;
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
    padding: 5px 20px 5px 15px;
    position: absolute;
    bottom: 30%;
    background: rgba(0, 0, 0, 0.6);
    color: white;
    -webkit-animation: fadeEffect 1s;
    animation: fadeEffect 1s;
}
.notice {
    width: 100%;
    height: 20px;
    overflow: hidden;
    padding-right: 10px;
    box-sizing: border-box;
    color: #ff5d5d;
    /*overflow: hidden;*/
    /*white-space: nowrap;*/
    /*text-overflow: ellipsis;*/
    cursor: pointer;
    /*transition: all 0.5s ease-in-out;*/
    /*transform: translateY(-40px);*/
}
/* Fade in tabs */
@-webkit-keyframes fadeEffect {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

@keyframes fadeEffect {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
.gold-box {
    position: absolute;
    top: 40%;
    left: 25%;
    width: 405px;
    background: white;
    padding: 30px;
    border-radius: 5px;
    z-index: 13;
}

.hot-content {
    width: 15.5%;
    margin: 10px 5px;
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
.anchorAvatar {
    width: 18px;
    height: 18px;
    border-radius: 100%;
    margin-right: 5px;
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
.mask-box {
    /*background-color: rgba(0,0,0,.6);*/
    height: 160px;
    /*display: flex;*/
    align-items: center;
    justify-content: center;
    position: absolute;
    padding-left: 6.4%;
    padding-right: 6.4%;
    display: none;
}
.modal {
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background: rgba(0, 0, 0, 0.7);
    z-index: 101;
}
.modal-pop {
    position: fixed;
    width: 400px;
    background: #fff;
    border-radius: 4px;
    top: 20%;
    left: 50%;
    transform: translateX(-50%);
    z-index: 102;
}
.danmu {
    position: absolute;
    top: 70%;
    right: 42%;
    z-index: 12;
}
.hide {
    animation: fadeOut ease 0.8s;
    animation-fill-mode: forwards;
    -webkit-animation-fill-mode: forwards;
}
.show {
    animation: fadeIn ease 0.8s;
    animation-fill-mode: forwards;
    -webkit-animation-fill-mode: forwards;
}
.video-footer {
    width: 100%;
    height: 40px;
    position: relative;
    /*border: 1px solid red;*/
    /*top:53%;*/
    /*left: 10%;*/
    margin-top: -40px;
    z-index: 999;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0) 0,
        #000 100%
    ) !important;
}

.bullet-wrap {
    height: 400px;
    position: relative;
    top: 0px;
    left: 0;
    z-index: 11;
    overflow: hidden;
    font-size: 18px;
}
.bullet-item {
    text-shadow: 1px 1px #000;
    color: white;
    white-space: nowrap;
    user-select: none;
    position: absolute;
    top: 0;
    left: 0;
}
.on {
    top: 0px;
}
.off {
    top: 80px;
}
.bullet-animation {
    animation: right2left 7s linear both;
}

@keyframes right2left {
    0% {
        transform: translate(100vw);
    }
    100% {
        transform: translate(-100%);
    }
}

.no-live {
    width: 100%;
    height: 450px;
    background: #797979;
    display: flex;
    align-items: center;
    color: white;
    justify-content: center;
    margin-top: 40px;
}
.close {
    float: right;
    width: 14px;
    height: 14px;
    margin-top: 20px;
    margin-right: 20px;
    cursor: pointer;
}
.c-33 {
    color: #333333;
}
.happy {
    border: 1px solid #cc9459;
    width: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 48px;
    border-radius: 4px 0px 0px 4px;
}
.score-box {
    background: #161831;
    width: 100%;
    height: 72px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #ffffff;
}
.score-box-right {
    width: 35%;
    height: 72px;
    background-image: url('../../assets/image/room-bule.png');
    background-size: 100% 100%;
}
.score-box-left {
    width: 35%;
    height: 72px;
    background-image: url('../../assets/image/room-red.png');
    background-size: 100% 100%;
}
.team-icon1 {
    width: 48px;
    height: 48px;
    /*margin-right: 150px;*/
}
.team-icon2 {
    width: 48px;
    height: 48px;
    position: relative;
    left: 50px;
}
</style>
<style>
.vcp-timelabel {
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
.vcp-controls-panel {
    display: none;
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
.prism-error-contefnt {
    display: none;
}
.prism-ErrorMessage {
    /*width: 100%;*/
    /*height: 100%;*/
    background-image: url('../../assets/image/no-zhubo.png') !important;
    background-size: 100% 100% !important;
}
.prism-player {
    height: 100% !important;
    background-image: url('../../assets/image/logo1.png');
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    position: relative;
    top: 0px;
}
.prism-player .prism-big-play-btn {
    background: none !important;
}
.prism-player .prism-big-play-btn .outter {
    border: none !important;
}
video {
    /*width: 100%!important;*/
    /*height: auto!important;*/
    object-fit: cover;
}
</style>
