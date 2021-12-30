<template>
    <div class="no-data">
        <div class="no-data-content">
            <img src="../../assets/image/no-data.png" alt="" />
            <span>暂无数据</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'noData',
    data() {
        return {};
    },
    components: {},
    watch: {},
    mounted() {},
    methods: {},
};
</script>

<style scoped lang="scss">
.no-data {
    width: 100%;
    .no-data-content {
        @include flexColumnCenter();
        width: 100%;
        padding: 20px;
        margin: 30px 0;
        img {
            width: 285px;
            height: 229px;
            margin-bottom: 36px;
        }
        span {
            color: #605656;
            font-size: 14px;
        }
    }
}
</style>
