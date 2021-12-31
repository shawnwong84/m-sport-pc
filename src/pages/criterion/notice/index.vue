<!--
 * @version:  ;
 * @description:  ;
 * @autor: Full
 * @date: Do not edit
-->
<template>
    <div class="notice-box">
        <div class="notice-list">
            <div
                class="notice-item"
                @click="toPage(item.id)"
                v-for="item in getNoticeList"
                :key="item.id"
            >
                <div class="tab-left-title">公告</div>
                <span class="des">{{ item.content }}</span>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    name: 'notice',
    data() {
        return {};
    },
    components: {},
    watch: {},
    computed: {
        ...mapGetters({
            getNoticeList: 'getNoticeList',
        }),
    },
    mounted() {},
    methods: {
        toPage(id) {
            this.$router.push({
                path: `/criterion/detail/${id}`,
            });
        },
    },
};
</script>

<style scoped lang="scss">
.notice-box {
    width: 100%;
    .notice-list {
        width: 100%;
        padding: 30px 16px;
        .notice-item {
            width: 100%;
            padding: 20px 0;
            border-bottom: 1px solid #e3e3e3;
            @include flexStartCenter();
            cursor: pointer;

            .tab-left-title {
                font-size: 12px;
                font-weight: 400;
                color: #605656;
                line-height: 16px;
                padding: 2px 8px;
                border-radius: 2px;
                border: 1px solid #e6e9f5;
                margin-right: 5px;
            }
            .des {
                width: 280px;
                display: block;
                @include textEllipsis();
                font-size: 14px;
                color: #333;
            }
        }
    }
}
</style>
