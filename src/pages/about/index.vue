<!--
 * @version:  ;
 * @description:  ;
 * @autor: Full
 * @date: Do not edit
-->
<template>
    <div class="about-box">
        <div class="about-left">
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
        <div class="about-right">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
    name: 'about',
    data() {
        return {
            navList: [
                {
                    id: 0,
                    path: '/about/business',
                    name: '商务合作',
                    icon: 'el-icon-user',
                },
                {
                    id: 1,
                    path: '/about/copyright',
                    name: '版权投诉',
                    icon: 'el-icon-thumb',
                },
                {
                    id: 2,
                    path: '/about/connect',
                    name: '联系我们',
                    icon: 'el-icon-chat-dot-round',
                },
                {
                    id: 3,
                    path: '/about/regard',
                    name: '关于我们',
                    icon: 'el-icon-price-tag',
                },
                {
                    id: 4,
                    path: '/about/service',
                    name: '联系客服',
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
.about-box {
    width: 1200px;
    margin: 20px auto;
    @include flexBetweenCenter();

    .about-left {
        width: 220px;
        min-height: 678px;
        height: calc(100vh - 220px);
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
    .about-right {
        width: 964px;
        min-height: 678px;
        height: calc(100vh - 220px);
        background-color: #fff;
        border-radius: 8px;
        overflow-y: auto;
    }
}
</style>
