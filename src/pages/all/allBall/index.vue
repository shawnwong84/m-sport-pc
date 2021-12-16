<!--
 * @version:  ;
 * @description:  ;
 * @autor: Full
 * @date: Do not edit
-->
<template>
    <div class="allball">
        <div class="live-title">全部直播</div>
        <div class="live-list">
            <liveItem
                :item="item"
                v-for="item in ballList"
                :key="item.roomId"
            ></liveItem>
        </div>
    </div>
</template>

<script>
import liveItem from '../../../compent/liveItem';
export default {
    name: 'allball',
    data() {
        return {
            ballList: [],
        };
    },
    components: {
        liveItem,
    },
    watch: {},
    mounted() {
        this.getBall();
    },
    methods: {
        getBall() {
            let param = {
                pageNum: 1,
                pageSize: 30,
                type: 0,
            };
            this.$axios('post', '/live/getTopLiveList', param).then((res) => {
                if (res.code === 200) {
                    this.ballList = res.data.dataList;
                }
            });
        },
    },
};
</script>

<style scoped lang="scss">
.allball {
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
    }
}
</style>
