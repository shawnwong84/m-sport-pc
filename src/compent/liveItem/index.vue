<!--
 * @version:  ;
 * @description:  ;
 * @autor: Full
 * @date: Do not edit
-->
<template>
    <div
        class="live-item"
        :class="{ 'live-exp-item': !getExpansion }"
        @click="toPage('/room', item.roomId)"
    >
        <div
            class="match-cover matchCutImg"
            v-lazy:background-image="item.matchCutImg"
        >
            <img src="../../assets/image/icon-open@2x.png" class="imgvideo" />
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
    computed: {
        ...mapGetters(['getExpansion']),
    },
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
    width: 262px;
    height: 220px;
    background: #ffffff;
    border-radius: 8px;
    margin-right: 22px;
    margin-bottom: 22px;
    &:last-child {
        margin-right: auto;
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
</style>
