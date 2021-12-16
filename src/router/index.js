import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location, onResolve, onReject) {
    if (onResolve || onReject) {
        return originalPush.call(this, location, onResolve, onReject);
    }
    return originalPush.call(this, location).catch((err) => err);
};
export default new Router({
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
                },
                {
                    path: '/course',
                    name: 'course',
                    component: () => import('@/pages/course/index.vue'),
                },
                {
                    path: '/live',
                    name: 'live',
                    component: () => import('@/pages/all/index.vue'),
                    redirect: '/live/allball',
                    children: [
                        {
                            path: '/live/allball',
                            name: 'allball',
                            component: () =>
                                import('@/pages/all/allBall/index.vue'),
                        },
                        {
                            path: '/live/hotball',
                            name: 'hotball',
                            component: () =>
                                import('@/pages/all/hotBall/index.vue'),
                        },
                        {
                            path: '/live/basketball',
                            name: 'basketball',
                            component: () =>
                                import('@/pages/all/basketBall/index.vue'),
                        },
                        {
                            path: '/live/footerball',
                            name: 'footerball',
                            component: () =>
                                import('@/pages/all/footerBall/index.vue'),
                        },
                    ],
                },
                {
                    path: '/room',
                    name: 'room',
                    component: () => import('@/pages/room/index.vue'),
                },
                {
                    path: '/new',
                    name: 'new',
                    component: () => import('@/pages/new/index.vue'),
                },
                {
                    path: '/newDeatil',
                    name: 'newDeatil',
                    component: () => import('@/pages/newDeatil/index.vue'),
                },
                {
                    path: '/down',
                    name: 'down',
                    component: () => import('@/pages/down/index.vue'),
                },
                {
                    path: '/hotRank',
                    name: 'hotRank',
                    component: () => import('@/pages/hotRank/index.vue'),
                },
                {
                    path: '/hotBankDeatil',
                    name: 'hotBankDeatil',
                    component: () => import('@/pages/hotBankDeatil/index.vue'),
                },
                {
                    path: '/expertsDeatil',
                    name: 'expertsDeatil',
                    component: () => import('@/pages/expertsDeatil/index.vue'),
                },
                {
                    path: '/commonProblem',
                    name: 'commonProblem',
                    component: () => import('@/pages/commonProblem/index.vue'),
                },
                {
                    path: '/agreement',
                    name: 'agreement',
                    component: () => import('@/pages/agreement/index.vue'),
                },
                {
                    path: '/privacy',
                    name: 'privacy',
                    component: () => import('@/pages/privacy/index.vue'),
                },
                {
                    path: '/schedule',
                    name: 'schedule',
                    component: () => import('@/pages/schedule/index.vue'),
                },
                {
                    path: '/infoCenter',
                    name: 'infoCenter',
                    component: () => import('@/pages/infoCenter/index.vue'),
                },
                {
                    path: '/score',
                    name: 'score',
                    component: () => import('@/pages/score/index.vue'),
                },
                {
                    path: '/footballDeatil',
                    name: 'footballDeatil',
                    component: () => import('@/pages/footballDeatil/index.vue'),
                },
                {
                    path: '/basketBallDeatil',
                    name: 'basketBallDeatil',
                    component: () =>
                        import('@/pages/basketBallDeatil/index.vue'),
                },
                {
                    path: '/search',
                    name: 'search',
                    component: () => import('@/pages/search/index.vue'),
                },
                {
                    path: '/my',
                    name: 'my',
                    component: () => import('@/pages/my/index.vue'),
                },
            ],
        },
    ],
});
