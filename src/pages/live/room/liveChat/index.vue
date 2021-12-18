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
                <div class="msg-list"></div>
            </div>
        </div>
        <div class="send-box">
            <div class="send-content">
                <div class="expression">
                    <img
                        src="../../../../assets/image/live/face-icon.png"
                        alt=""
                    />
                </div>
                <input type="text" placeholder="这里输入聊天内容" />
                <div class="msg-btn">发送</div>
            </div>
        </div>
    </div>
</template>

<script>
import MarqueeText from 'vue-marquee-text-component';
export default {
    name: 'index',
    data() {
        return {};
    },
    props: {
        roomInfo: {
            type: Object,
        },
    },
    components: {
        MarqueeText,
    },
    watch: {},
    mounted() {},
    methods: {},
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
            }
        }
        .system-prompt {
            padding-top: 10px;
            .prompt {
                width: 100%;
                @include flexStartCenterWrap();
                padding: 0 7px;
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
</style>
