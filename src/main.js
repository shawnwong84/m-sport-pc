import Vue from 'vue';
import router from './router';
import Store from './vuex';
import App from './App';
import './assets/css/content.css';
import './assets/css/base.css';
import './assets/style/theme/index.css';
import './assets/scss/global.scss';
import 'swiper/css/swiper.css';
import 'babel-polyfill';
import ax from './api/index';
import Utils from './assets/js/utils.js';
import Des from './assets/js/des.js';
import ElementUI from 'element-ui';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import VueVideoPlayer from 'vue-video-player';
import VueLazyload from 'vue-lazyload';
import 'video.js/dist/video-js.css';
import 'vue-video-player/src/custom-theme.css';
import webimconfig from './utils/webim.config.js';
import websdk from 'easemob-websdk';
// 环信
// 环信
let WebIM = (window.WebIM = websdk);
WebIM.config = webimconfig;
// 环信实例

var conn = (WebIM.conn = new WebIM.connection({
    appKey: WebIM.config.appkey,
    isHttpDNS: WebIM.config.isHttpDNS,
    isMultiLoginSessions: WebIM.config.isMultiLoginSessions,
    https: WebIM.config.https,
    url: WebIM.config.socketServer,
    apiUrl: WebIM.config.apiURL,
    isAutoLogin: true,
    heartBeatWait: WebIM.config.heartBeatWait,
    autoReconnectNumMax: WebIM.config.autoReconnectNumMax,
    autoReconnectInterval: WebIM.config.autoReconnectInterval,
    isStropheLog: WebIM.config.isStropheLog,
    delivery: WebIM.config.delivery,
}));
// 账号密码登录配置
var optionsIm = {
    apiUrl: WebIM.config.apiURL,
    user: '', // 换成自己申请的账号就行，密码也需要换
    pwd: '123456',
    appKey: WebIM.config.appkey,
    success: function (re) {
        console.log('登陆成功');
    },
    error: function (err) {
        console.log(err);
    },
};
Vue.prototype.$WebIM = WebIM;
Vue.prototype.$imconn = conn;
Vue.prototype.$imoption = optionsIm;
Vue.prototype.$utils = Utils;
Vue.prototype.$des = Des;
Vue.use(Vuetify);
Vue.use(websdk);
Vue.use(ax);
Vue.use(ElementUI);
Vue.use(VueVideoPlayer);
Vue.use(VueLazyload, {
    preLoad: 1.3,
    error: require('./assets/image/noImg.png'),
    loading: require('./assets/image/noImg.png'),
    attempt: 2,
});
Vue.config.productionTip = false;
Vue.prototype.$Platform = require('./assets/platform/main/js/base');
/* eslint-disable no-new */
new Vue({
    router,
    store: Store,
    el: '#app',
    render: (h) => h(App),
});
