<!--
 * @version:  ;
 * @description:  ;
 * @autor: Full
 * @date: Do not edit
-->
<template>
    <div class="live-chat">
        <div class="room-notice">
            <img
                src="../../../../assets/image/live/notice-icon.png"
                alt=""
                class="notice-icon"
            />

            <span class="notice-title">直播公告：</span>
            <marquee-text class="notice-content">
                <p>{{ roomInfo.roomAnnouncement }}</p>
            </marquee-text>
        </div>
        <div class="chat-box">
            <div class="system-prompt">
                <div class="prompt">
                    <p class="p-content">
                        <span class="p-title">系统提示：</span>
                        欢迎来到本直播间，喜欢就点关注
                    </p>
                </div>
                <div class="prompt">
                    <p class="p-content">
                        <span class="p-title">系统提示：</span>
                        M直播禁止任何传播违法、违规、低俗等信息的
                        行为，一经发现将予以封禁处理。请勿相信以任何方式的诱
                        导打赏、私下交易等行为，以防人身或财产损失。
                    </p>
                </div>
            </div>
            <div class="chat-content">
                <div class="msg-list">
                    <div class="msg-cover">
                        <p
                            class="msg-item"
                            v-for="item in chatContent"
                            :key="item.id"
                        >
                            <span class="user-level"
                                >LV{{ item.askLevel }}</span
                            >
                            <span class="user-name">{{ item.askName }}</span
                            >{{ item.askContent }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="send-box">
            <div class="send-content">
                <div v-if="token" class="login">
                    <div class="expression">
                        <img
                            src="../../../../assets/image/live/face-icon.png"
                            alt=""
                        />
                    </div>
                    <input
                        type="text"
                        placeholder="这里输入聊天内容"
                        v-model="contentTxt"
                    />
                    <div class="msg-btn" @click="sendRoomText(contentTxt)">
                        发送
                    </div>
                </div>
                <div class="no-login" v-else>
                    <div class="login-des">登录发送，参与互动</div>
                    <div class="logon-btn" @click="userLogin">发送</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import MarqueeText from 'vue-marquee-text-component';
import { mapMutations } from 'vuex';
import { Cookie } from '../../../../api/cookie';
export default {
    name: 'index',
    data() {
        return {
            chatContent: [],
            contentTxt: '',
            token: Cookie.get('token'),
        };
    },
    props: {
        roomInfo: {
            type: Object,
        },
    },
    components: {
        MarqueeText,
    },
    watch: {
        roomInfo: {
            handler: function (newval, oldVal) {
                if (Object.keys(newval).length > 0) {
                    this.loginWebIM(newval.huanXinUserId);
                }
            },
            deep: true,
        },
    },
    mounted() {},
    methods: {
        ...mapMutations({
            setPermissionModal: 'setPermissionModal',
        }),
        //登录
        userLogin() {
            this.setPermissionModal(1);
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
                // // // 收到文本消息
                // onTextMessage: function (message) {
                //     this.value = message.data;
                //     _this.chatContent.push({
                //         // 把发送者的头像和文本数据push到数组中在页面上展示
                //         askName: message.ext.user_nick,
                //         askLevel: message.ext.user_level,
                //         askContent: message.data,
                //     });
                //     if (message.data === '进入直播间') {
                //         this.getChatMessage();
                //     }
                // },
                onEmojiMessage: function (message) {
                    console.log('onEmojiMessage', message);
                },
            });
        },
        // 加入聊天室
        getJoinChatRoom() {
            let options = {
                roomId: this.roomInfo.roomId, // 聊天室id
                message: 'reason', // 原因（可选参数）
            };
            this.$imconn.joinChatRoom(options).then((res) => {
                this.sendRoomText('进入直播间');
                this.getChatHistoryMessage();
                this.getChatMessage();
            });
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
        // 发送文本消息
        sendRoomText(msgTxt) {
            if (!msgTxt) {
                this.$message({
                    type: 'warning',
                    message: '请输入聊天内容',
                });
                return;
            }
            let _this = this;
            let id = this.$imconn.getUniqueId(); // 生成本地消息id
            // eslint-disable-next-line no-undef,new-cap
            let msg = new WebIM.message('txt', id); // 创建文本消息
            let option = {
                msg: msgTxt, // 消息内容
                to: this.roomInfo.roomId, // 接收消息对象(聊天室id)
                chatType: 'chatRoom', // 群聊类型设置为聊天室
                ext: {
                    user_nick: _this.roomInfo.userName,
                    user_level: _this.roomInfo.userLevel,
                }, // 扩展消息
                success: function () {
                    console.log(msg);
                    _this.chatContent.push({
                        // 把发送者的头像和文本数据push到数组中在页面上展示
                        id: msg.id,
                        askName: _this.roomInfo.userName,
                        askLevel: _this.roomInfo.userLevel,
                        askContent: msg.value,
                    });
                    _this.contentTxt = '';
                    _this.showModal = false;
                    // _this.$nextTick(() => {
                    //     _this.$refs.main.scrollTop =
                    //         _this.$refs.content.scrollHeight;
                    // });
                }, // 对成功的相关定义，sdk会将消息id登记到日志进行备份处理
                fail: function () {
                    console.log('failed');
                }, // 对失败的相关定义，sdk会将消息id登记到日志进行备份处理
            };
            msg.set(option);
            this.$imconn.send(msg.body);
        },
        getChatMessage() {
            let param = {
                sportsType: this.roomInfo.matchInfo.sportsType,
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
                    }
                },
            );
        },
        // 获取聊天室详情
        getChat() {
            let options = {
                pageNum: 1,
                pageSize: 10,
                chatRoomId: this.roomInfo.roomId,
            };
            this.$imconn.listChatRoomMember(options).then((res) => {
                console.log(res);
            });
        },
        sendRoomText2(msgUser, msgTxt) {
            let _this = this;
            let id = this.$imconn.getUniqueId(); // 生成本地消息id
            let msg = new WebIM.message('txt', id); // 创建文本消息
            let option = {
                msg: msgTxt, // 消息内容
                to: this.roomInfo.roomId, // 接收消息对象(聊天室id)
                chatType: 'chatRoom', // 群聊类型设置为聊天室
                ext: {
                    user_nick: msgUser,
                    user_level: 1,
                }, // 扩展消息
                success: function () {
                    _this.chatContent.push({
                        // 把发送者的头像和文本数据push到数组中在页面上展示
                        id: msg.id,
                        askName: msgUser,
                        askLevel: 1,
                        askContent: msgTxt,
                    });
                    _this.contentTxt = '';
                    _this.showModal = false;
                    // _this.$nextTick(() => {
                    //     _this.$refs.main.scrollTop =
                    //         _this.$refs.content.scrollHeight;
                    // });
                }, // 对成功的相关定义，sdk会将消息id登记到日志进行备份处理
                fail: function () {
                    console.log('failed');
                }, // 对失败的相关定义，sdk会将消息id登记到日志进行备份处理
            };
            msg.set(option);
            this.$imconn.send(msg.body);
        },
    },
};
</script>

<style scoped lang="scss">
.live-chat {
    width: 100%;
    height: 100%;
    @include flexColumnCenter();
    .room-notice {
        width: 100%;
        height: 50px;
        border-bottom: 1px solid #e3e3e3;
        @include flexStartCenter();
        padding: 0 10px;
        .notice-icon {
            width: 12px;
            height: 12px;
            margin-right: 5px;
        }
        .notice-title {
            font-size: 12px;
            color: $primary-color;
        }
        .notice-content {
            flex: 1;
            font-size: 12px;
            color: $primary-color;
            padding-left: 8px;
        }
    }
    .chat-box {
        flex: 1;
        width: 100%;
        @include flexColumnCenter();
        .chat-content {
            width: 100%;
            height: 757px;
            overflow-y: auto;
            .msg-list {
                width: 100%;
                .msg-cover {
                    width: 100%;
                    @include flexStartCenterWrap();
                    .msg-item {
                        width: 100%;
                        font-size: 12px;
                        color: #333;
                        line-height: 16px;
                        padding: 0 10px;
                        margin-bottom: 15px;

                        .user-level {
                            display: inline-block;
                            min-width: 28px;
                            height: 16px;
                            background: #ffbc32;
                            border-radius: 2px;
                            font-size: 12px;
                            color: #fff;
                            text-align: center;
                            line-height: 16px;
                        }
                        .user-name {
                            color: $primary-color;
                            font-size: 12px;
                            display: inline-block;
                            margin: 0 5px;
                        }
                    }
                }
            }
        }
        .system-prompt {
            padding-top: 10px;
            .prompt {
                width: 100%;
                @include flexStartCenterWrap();
                padding: 0 10px;
                margin-bottom: 10px;
                .p-title {
                    color: $primary-color;
                    font-size: 12px;
                    display: inline-block;
                    line-height: 16px;
                }
                .p-content {
                    color: #605656;
                    font-size: 12px;
                    line-height: 16px;
                }
            }
        }
    }
    .send-box {
        width: 100%;
        border-top: 1px solid #e3e3e3;
        padding: 18px 10px;
        @include flexCenter();
        cursor: pointer;
        .send-content {
            width: 100%;
            height: 46px;
            background: #ffffff;
            border-radius: 4px;
            @include flexCenter();

            border: 1px solid #e3e3e3;

            .no-login {
                width: 100%;
                height: 46px;
                @include flexCenter();
                .login-des {
                    flex: 1;
                    font-size: 12px;
                    color: #605656;
                    @include flexCenter();
                }
                .logon-btn {
                    width: 70px;
                    height: 46px;
                    background: #bdbdbd;
                    @include flexCenter();
                    border-radius: 0 4px 4px 0;
                    color: #ffffff;
                    font-size: 12px;
                }
            }
            .login {
                width: 100%;
                height: 46px;
                @include flexCenter();
                .expression {
                    width: 49px;
                    height: 100%;
                    @include flexCenter();
                    border-right: 1px solid #e3e3e3;
                    img {
                        width: 18px;
                        height: 18px;
                    }
                }
                input {
                    flex: 1;
                    height: 100%;
                    border: none;
                    outline: none;
                    padding-left: 14px;
                    font-size: 12px;

                    color: #605656;
                }
                .msg-btn {
                    width: 70px;
                    height: 46px;
                    background: $primary-color;
                    @include flexCenter();
                    border-radius: 0 4px 4px 0;
                    color: #ffffff;
                    font-size: 12px;
                }
            }
        }
    }
}
</style>
