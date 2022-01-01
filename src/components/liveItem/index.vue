<!--
 * @version:  ;
 * @description:  ;
 * @autor: Full
 * @date: Do not edit
-->
<template>
    <div class="live-item" @click="toPage('/live/room', item.roomId)">
        <div class="live-cover">
            <div
                class="match-cover matchCutImg"
                v-lazy:background-image="item.matchCutImg"
            >
                <img
                    src="../../assets/image/icon-open@2x.png"
                    class="imgvideo"
                />
            </div>
            <div class="match-info">
                <div class="match-title">
                    {{ item.roomName }}
                </div>
                <div class="match-hot">
                    <div class="match-hot-left">
                        <img :src="item.anchorAvatar" alt="" />
                        <span>{{ item.anchorName }}</span>
                    </div>
                    <div class="match-hot-right">
                        <img
                            src="../../assets/image/live/hot-red-icon.png"
                            width="12px"
                        />
                        <span>{{ item.hotNum }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    name: 'liveItem',
    props: {
        item: {
            type: Object,
        },
    },
    data() {
        return {};
    },
    components: {},
    watch: {},
    mounted() {},
    methods: {
        toPage(path, id) {
            let routeData = this.$router.resolve({
                path: path,
                query: {
                    id: id,
                },
            });
            window.open(routeData.href, '_blank');
        },
    },
};
</script>

<style scoped lang="scss">
.live-item {
    width: 20%;

    border-radius: 8px;
    margin-bottom: 32px;
    @include flexCenter();
    .live-cover {
        width: 90%;
        background: #ffffff;
    }

    &:hover {
        transform: translateY(-5px);
        transition: all 0.3s;
    }

    .match-cover {
        width: 100%;
        height: 147px;
        overflow: hidden;
        background: #494949;
        border-radius: 8px 8px 0 0;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        img {
            width: 25px;
            height: auto;
            object-fit: cover;
        }
    }
    .match-info {
        width: 100%;
        height: 73px;
        @include flexColumnCenter();
        .match-title {
            width: 100%;
            margin-top: 10px;
            color: #333;
            font-size: 14px;
            text-align: center;
            padding: 0 10px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            font-weight: 500;
        }

        .match-hot {
            width: 100%;
            margin-top: 5px;
            padding: 0 10px;

            display: flex;
            align-items: center;
            justify-content: space-between;

            &-left {
                display: flex;
                align-items: center;
                justify-content: center;

                img {
                    width: 22px;
                    height: 22px;
                    margin-right: 5px;
                    object-fit: cover;
                    border-radius: 50%;
                }

                span {
                    color: #605656;
                    font-size: 12px;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                }
            }

            &-right {
                display: flex;
                align-items: center;
                justify-content: center;

                img {
                    width: 10px;
                    height: 11px;
                    margin-right: 5px;
                    object-fit: cover;
                }

                span {
                    color: #605656;
                    font-size: 12px;
                }
            }
        }
    }
}
@media screen and (min-width: 1400px) and (max-width: 1800px) {
    .live-item {
        .match-cover {
            height: 130px;
        }
    }
}
@media screen and (max-width: 1400px) {
    .live-item {
        .match-cover {
            height: 110px;
        }
    }
}
@media only screen and (min-width: 2160px) {
    .live-item {
        width: 16.66667%;
        .match-cover {
            height: 150px;
        }
    }
}

@media only screen and (min-width: 2508px) {
    .live-item {
        width: 14.28571%;
        .match-cover {
            height: 165px;
        }
    }
}

@media only screen and (min-width: 2856px) {
    .live-item {
        width: 12.5%;
        .match-cover {
            height: 180px;
        }
    }
}
</style>
