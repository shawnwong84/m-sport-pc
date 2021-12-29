import Vue from 'vue';
import Router from 'vue-router';
import { Cookie } from '../api/cookie';
import store from '../store';

Vue.use(Router);
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location, onResolve, onReject) {
    if (onResolve || onReject) {
        return originalPush.call(this, location, onResolve, onReject);
    }
    return originalPush.call(this, location).catch((err) => err);
};

const router = new Router({
    // mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/home',
            component: () => import('@/pages/index.vue'),
            children: [
                {
                    path: '/home',
                    name: 'home',
                    component: () => import('@/pages/home/index.vue'),
                    meta: {
                        footShow: true,
                        requiresAuth: false,
                    },
                },
                {
                    path: '/course',
                    name: 'course',
                    component: () => import('@/pages/course/index.vue'),
                    meta: {
                        footShow: true,
                        requiresAuth: false,
                    },
                },
                {
                    path: '/live',
                    name: 'live',
                    component: () => import('@/pages/live/index.vue'),
                    redirect: '/live/allball',
                    meta: {
                        footShow: true,
                        requiresAuth: false,
                    },
                    children: [
                        {
                            path: '/live/allball',
                            name: 'allball',
                            component: () =>
                                import('@/pages/live/allBall/index.vue'),
                            meta: {
                                footShow: true,
                                requiresAuth: false,
                            },
                        },
                        {
                            path: '/live/hotball',
                            name: 'hotball',
                            component: () =>
                                import('@/pages/live/hotBall/index.vue'),
                            meta: {
                                footShow: true,
                                requiresAuth: false,
                            },
                        },
                        {
                            path: '/live/basketball',
                            name: 'basketball',
                            component: () =>
                                import('@/pages/live/basketBall/index.vue'),
                            meta: {
                                footShow: true,
                                requiresAuth: false,
                            },
                        },
                        {
                            path: '/live/footerball',
                            name: 'footerball',
                            component: () =>
                                import('@/pages/live/footerBall/index.vue'),
                            meta: {
                                footShow: true,
                                requiresAuth: false,
                            },
                        },
                        {
                            path: '/live/room',
                            name: 'room',
                            component: () =>
                                import('@/pages/live/room/index.vue'),
                            meta: {
                                footShow: true,
                                requiresAuth: false,
                            },
                        },
                    ],
                },
                {
                    path: '/new',
                    name: 'new',
                    component: () => import('@/pages/new/index.vue'),
                    meta: {
                        footShow: true,
                        requiresAuth: false,
                    },
                },
                {
                    path: '/newDeatil',
                    name: 'newDeatil',
                    component: () => import('@/pages/newDeatil/index.vue'),
                    meta: {
                        footShow: true,
                        requiresAuth: false,
                    },
                },
                {
                    path: '/down',
                    name: 'down',
                    component: () => import('@/pages/down/index.vue'),
                    meta: {
                        footShow: true,
                        requiresAuth: false,
                    },
                },
                // {
                //     path: '/hotRank',
                //     name: 'hotRank',
                //     component: () => import('@/pages/hotRank/index.vue'),
                //     meta: {
                //         footShow: true,
                //         requiresAuth: false,
                //     },
                // },
                {
                    path: '/hotBankDeatil',
                    name: 'hotBankDeatil',
                    component: () => import('@/pages/hotBankDeatil/index.vue'),
                    meta: {
                        footShow: true,
                        requiresAuth: false,
                    },
                },
                {
                    path: '/expertsDeatil',
                    name: 'expertsDeatil',
                    component: () => import('@/pages/expertsDeatil/index.vue'),
                    meta: {
                        footShow: true,
                        requiresAuth: false,
                    },
                },
                {
                    path: '/commonProblem',
                    name: 'commonProblem',
                    component: () => import('@/pages/commonProblem/index.vue'),
                    meta: {
                        footShow: true,
                        requiresAuth: false,
                    },
                },
                {
                    path: '/agreement',
                    name: 'agreement',
                    component: () => import('@/pages/agreement/index.vue'),
                    meta: {
                        footShow: true,
                        requiresAuth: false,
                    },
                },
                {
                    path: '/privacy',
                    name: 'privacy',
                    component: () => import('@/pages/privacy/index.vue'),
                    meta: {
                        footShow: true,
                        requiresAuth: false,
                    },
                },
                {
                    path: '/schedule',
                    name: 'schedule',
                    component: () => import('@/pages/schedule/index.vue'),
                    meta: {
                        footShow: true,
                        requiresAuth: false,
                    },
                },
                {
                    path: '/infoCenter',
                    name: 'infoCenter',
                    component: () => import('@/pages/infoCenter/index.vue'),
                    meta: {
                        footShow: true,
                        requiresAuth: false,
                    },
                },
                {
                    path: '/score',
                    name: 'score',
                    component: () => import('@/pages/score/index.vue'),
                    meta: {
                        footShow: true,
                        requiresAuth: false,
                    },
                },
                {
                    path: '/footballDeatil',
                    name: 'footballDeatil',
                    component: () => import('@/pages/footballDeatil/index.vue'),
                    meta: {
                        footShow: true,
                        requiresAuth: false,
                    },
                },
                {
                    path: '/basketBallDeatil',
                    name: 'basketBallDeatil',
                    component: () =>
                        import('@/pages/basketBallDeatil/index.vue'),
                    meta: {
                        footShow: true,
                        requiresAuth: false,
                    },
                },
                {
                    path: '/search',
                    name: 'search',
                    component: () => import('@/pages/search/index.vue'),
                    meta: {
                        footShow: true,
                        requiresAuth: false,
                    },
                },
                {
                    path: '/my',
                    name: 'my',
                    redirect: '/my/myHome',
                    component: () => import('@/pages/my/index.vue'),
                    children: [
                        {
                            path: '/my/myHome',
                            name: 'myHome',
                            component: () =>
                                import('@/pages/my/myHome/index.vue'),
                            meta: {
                                footShow: false,
                                requiresAuth: true,
                            },
                        },
                        {
                            path: '/my/myInfo',
                            name: 'myInfo',
                            component: () =>
                                import('@/pages/my/myInfo/index.vue'),
                            meta: {
                                footShow: false,
                                requiresAuth: true,
                            },
                        },
                        {
                            path: '/my/myMessage',
                            name: 'myMessage',
                            component: () =>
                                import('@/pages/my/myMessage/index.vue'),
                            meta: {
                                footShow: false,
                                requiresAuth: true,
                            },
                        },
                        {
                            path: '/my/myAttention',
                            name: 'myAttention',
                            component: () =>
                                import('@/pages/my/myAttention/index.vue'),
                            meta: {
                                footShow: false,
                                requiresAuth: true,
                            },
                        },
                        {
                            path: '/my/myOrder',
                            name: 'myOrder',
                            component: () =>
                                import('@/pages/my/myOrder/index.vue'),
                            meta: {
                                footShow: false,
                                requiresAuth: true,
                            },
                        },
                        {
                            path: '/my/myFeedback',
                            name: 'myFeedback',
                            component: () =>
                                import('@/pages/my/myFeedback/index.vue'),
                            meta: {
                                footShow: false,
                                requiresAuth: true,
                            },
                        },
                        {
                            path: '/my/myAnchor',
                            name: 'myAnchor',
                            component: () =>
                                import('@/pages/my/myAnchor/index.vue'),
                            meta: {
                                footShow: false,
                                requiresAuth: true,
                            },
                        },
                    ],
                    meta: {
                        footShow: true,
                        requiresAuth: true,
                    },
                },
            ],
        },
    ],
});

//登录拦截
router.beforeEach((to, from, next) => {
    const UserToken = Cookie.get('token') || '';
    if (to.meta.requiresAuth) {
        if (!UserToken) {
            store.commit('setPermissionModal', 1);
            Cookie.set('loginBeforePath', to.fullPath);
        } else {
            next();
        }
    } else {
        next(); // 确保一定要调用 next()
    }
});

export default router;
