<!--
 * @version:  ;
 * @description:  ;
 * @autor: Full
 * @date: Do not edit
-->
<template>
    <div class="my-attention">
        <div class="my-head">
            <div class="title">我的关注</div>
        </div>
        <div class="attention-content">
            <div class="attention-list">
                <div
                    class="attention-item"
                    v-for="item in userAnchorList"
                    :key="item.roomId"
                    @click="toPage('/live/room', item.roomId)"
                >
                    <div class="left">
                        <img :src="item.matchCutImg" alt="" />
                    </div>
                    <div class="right">
                        <div class="room-name">{{ item.roomName }}</div>
                        <div class="room-anchor">
                            <div class="avatar">
                                <img :src="item.anchorAvatar" alt="" />
                            </div>

                            <span class="anchor-name">{{
                                item.anchorName
                            }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'myAttention',
    data() {
        return {
            userAnchorList: [],
        };
    },
    components: {},
    watch: {},
    mounted() {
        this.userGetAnchorList();
    },
    methods: {
        // 我的关注
        userGetAnchorList() {
            this.$axios('post', '/match/userGetAnchorList').then((res) => {
                if (res.code === 200) {
                    this.userAnchorList = res.data;
                }
            });
        },
        toPage(path, id) {
            let routeData = this.$router.resolve({
                path: path,
                query: { id: id },
            });
            window.open(routeData.href, '_blank');
        },
    },
};
</script>

<style scoped lang="scss">
.my-attention {
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
    .attention-content {
        width: 100%;
        height: 760px;
        overflow-y: auto;
        .attention-list {
            width: 100%;
            padding: 24px;
            @include flexBetweenStartWrap();
            .attention-item {
                width: 450px;
                height: 124px;
                background: #ffffff;
                border-radius: 8px;
                margin-bottom: 14px;
                cursor: pointer;

                border: 1px solid #dfdcdc;
                @include flexStartCenter();
                .left {
                    width: 220px;
                    height: 124px;
                    img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                        border-radius: 8px 0px 0px 8px;
                    }
                }
                .right {
                    padding-left: 10px;
                    .room-name {
                        font-size: 14px;
                        color: #333333;
                        font-weight: 500;
                        width: 220px;

                        @include textEllipsis();
                    }
                    .room-anchor {
                        @include flexStartCenter();
                        margin-top: 12px;
                        .avatar {
                            width: 48px;
                            height: 48px;
                            margin-right: 5px;
                            img {
                                width: 100%;
                                height: 100%;
                                object-fit: cover;
                            }
                        }
                        .anchor-name {
                            font-size: 14px;
                            color: #605656;
                            width: 160px;
                            @include textEllipsis();
                        }
                    }
                }
            }
        }
    }
}
</style>
