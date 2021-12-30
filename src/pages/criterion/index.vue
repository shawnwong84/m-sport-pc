<!--
 * @version:  ;
 * @description:  ;
 * @autor: Full
 * @date: Do not edit
-->
<template>
    <div class="criterion-box">
        <div class="criterion-left">
            <div class="nav-list">
                <div
                    class="nav-item"
                    v-for="item in navList"
                    :key="item.id"
                    :class="{ active: $route.path === item.path }"
                    @click="toPage(item.path)"
                >
                    <div class="name">
                        <i :class="item.icon"></i>
                        <span>{{ item.name }}</span>
                    </div>
                    <i class="el-icon-arrow-right"></i>
                </div>
            </div>
        </div>
        <div class="criterion-right">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
    name: 'criterion',
    data() {
        return {
            navList: [
                {
                    id: 0,
                    path: '/criterion/notice',
                    name: '公告',
                    icon: 'el-icon-tickets',
                },
                {
                    id: 1,
                    path: '/criterion/norm',
                    name: '规范',
                    icon: 'el-icon-notebook-2',
                },
                {
                    id: 2,
                    path: '/criterion/help',
                    name: '帮助',
                    icon: 'el-icon-help',
                },
            ],
        };
    },
    components: {},
    watch: {},
    mounted() {},
    methods: {
        toPage(path) {
            this.$router.push(path);
        },
    },
};
</script>

<style scoped lang="scss">
.criterion-box {
    width: 1200px;
    margin: 22px auto;

    .criterion-left {
        width: 220px;
        height: 678px;
        background-color: #fff;
        border-radius: 8px;
        .nav-list {
            width: 100%;
            padding-top: 20px;
            .nav-item {
                width: 100%;
                cursor: pointer;
                padding: 10px 15px;
                margin-bottom: 20px;
                @include flexBetweenCenter();
                color: #333;
                &.active {
                    color: $primary-color;
                    position: relative;
                    &::before {
                        display: block;
                        content: '';
                        width: 3px;
                        height: 36px;
                        background: $primary-color;
                        position: absolute;
                        left: 0;
                        top: 0;
                    }
                    .name {
                        span {
                            color: $primary-color;
                        }
                    }
                }
                .name {
                    @include flexCenter();
                    span {
                        display: block;
                        font-size: 14px;
                        color: #333;
                        margin-left: 15px;
                    }
                }
            }
        }
    }
}
</style>
