<!--
 * @version:  ;
 * @description:  ;
 * @autor: Full
 * @date: Do not edit
-->
<template>
    <div class="my-message">
        <div class="my-head">
            <div class="title">我的消息</div>
        </div>
        <div class="message-list" v-if="messageList.length > 0">
            <div
                class="message-list-item"
                v-for="item in messageList"
                :key="item.id"
            >
                <img src="../../../assets/image/my/message-icon.png" alt="" />
                <p>{{ item.msgContent }}</p>
            </div>
        </div>
        <noData v-else></noData>
    </div>
</template>

<script>
import noData from '../../../components/noData';
export default {
    name: 'myMessage',
    data() {
        return {
            messageList: [],
        };
    },
    components: {
        noData,
    },
    watch: {},
    mounted() {
        this.getUserMsgList();
    },
    methods: {
        // 获取我的消息列表
        getUserMsgList() {
            let param = {
                pageNum: 1,
                pageSize: 60,
            };
            this.$axios('post', '/user/getUserMsgList', param).then((res) => {
                if (res.code === 200) {
                    this.messageList = res.data.dataList;
                }
            });
        },
    },
};
</script>

<style scoped lang="scss">
.my-message {
    width: 100%;
    height: 100%;
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
    .message-list {
        width: 100%;
        height: 100%;
        padding: 0 30px;
        margin-top: 30px;
        overflow-y: auto;
        &-item {
            width: 100%;
            @include flexStartCenter();
            padding: 10px 0;
            margin-bottom: 20px;
            &:not(:last-child) {
                border-bottom: 1px solid #f1f1f1;
            }
            img {
                width: 34px;
                height: 34px;
                margin-right: 5px;
            }
            p {
                flex: 1;
                font-size: 14px;
                color: #282828;
                word-wrap: break-word;
                word-break: break-all;
            }
        }
    }
}
</style>
