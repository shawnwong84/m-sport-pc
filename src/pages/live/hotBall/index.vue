<!--
 * @version:  ;
 * @description:  ;
 * @autor: Full
 * @date: Do not edit
-->
<template>
    <div class="hotball">
        <div class="live-title">热门直播</div>
        <div class="live-list" v-if="hotList.length > 0">
            <liveItem
                :item="item"
                v-for="item in hotList"
                :key="item.roomId"
            ></liveItem>
            <i
                v-for="item in Array.from(Array(getFlexNum(getExpansion)))"
                :key="item"
                class="placeholder-box"
            ></i>
        </div>
        <noData v-else></noData>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import liveItem from '../../../components/liveItem';
import noData from '../../../components/noData';
export default {
    name: 'hotball',
    data() {
        return {
            hotList: [],
        };
    },
    components: {
        liveItem,
        noData,
    },
    watch: {},
    computed: {
        ...mapGetters(['getExpansion']),
    },
    mounted() {
        this.getBall();
    },
    methods: {
        getBall() {
            let param = {
                pageNum: 1,
                pageSize: 60,
            };
            this.$axios('post', '/live/getHotLiveList', param).then((res) => {
                if (res.code === 200) {
                    this.hotList = res.data.dataList;
                }
            });
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
.hotball {
    width: 100%;
    padding-left: 43px;
    padding-top: 11px;

    .live-title {
        font-size: 20px;
        color: #333333;
        font-weight: 500;
        margin-bottom: 15px;
    }
    .live-list {
        width: 100%;
        @include flexBetweenCenterWrap();
        .placeholder-box {
            width: 20%;
        }
    }
}
@media only screen and (min-width: 2160px) {
    .hotball {
        .placeholder-box {
            width: 16.66667%;
        }
    }
}

@media only screen and (min-width: 2508px) {
    .hotball {
        .placeholder-box {
            width: 14.28571%;
        }
    }
}

@media only screen and (min-width: 2856px) {
    .hotball {
        .placeholder-box {
            width: 12.5%;
        }
    }
}
</style>
