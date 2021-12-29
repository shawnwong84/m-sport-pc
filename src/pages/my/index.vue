<template>
    <div class="my-center-box">
        <div class="my-left">
            <div class="my-title">个人中心</div>
            <div class="my-left-nav">
                <div
                    class="nav-item"
                    v-for="item in navlist"
                    :key="item.id"
                    :class="{ active: $route.path === item.path }"
                    @click="toPage(item.path)"
                >
                    {{ item.name }}
                </div>
            </div>
        </div>
        <div class="my-right">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import myHome from './myHome';
export default {
    name: 'index',
    data() {
        return {
            navlist: [
                {
                    id: 0,
                    path: '/my/myHome',
                    name: '我的首页',
                },
                {
                    id: 1,
                    path: '/my/myInfo',
                    name: '我的资料',
                },
                {
                    id: 2,
                    path: '/my/myMessage',
                    name: '我的消息',
                },
                {
                    id: 3,
                    path: '/my/myAttention',
                    name: '我的关注',
                },
                {
                    id: 4,
                    path: '/my/myOrder',
                    name: '我的预约',
                },
                {
                    id: 5,
                    path: '/my/myFeedback',
                    name: '我的反馈',
                },
                {
                    id: 6,
                    path: '/my/myAnchor',
                    name: '主播申请',
                },
            ],
        };
    },
    components: {
        myHome,
    },
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
.my-center-box {
    width: 1200px;

    margin: 22px auto;
    @include flexBetweenStart();
    .my-left {
        width: 220px;
        height: 845px;
        background: #ffffff;
        border-radius: 8px;

        .my-title {
            width: 100%;
            height: 80px;
            font-size: 20px;
            color: #333333;
            @include flexCenter();
            border-bottom: 1px solid #e3e3e3;

            font-weight: 500;
        }
        .my-left-nav {
            width: 100%;
            .nav-item {
                width: 100%;
                height: 48px;
                @include flexCenter();
                cursor: pointer;

                font-size: 14px;

                color: #333333;
                &.active {
                    color: #ffffff;
                    background: linear-gradient(
                        180deg,
                        #ff8d86 0%,
                        #f8413d 100%
                    );
                }
            }
        }
    }
    .my-right {
        flex: 1;
        margin-left: 23px;
        height: 844px;
        background: #ffffff;
        border-radius: 8px;
    }
}
</style>
