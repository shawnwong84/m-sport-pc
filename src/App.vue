<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
// import {Cookie} from './api/cookie'
export default {
    name: 'App',
    data() {
        return {};
    },
    mounted() {
        // console.log(this.isPcFun())http://hs.cheesetube.net/#/home
        // if (this.isPcFun()) {
        //   this.$router.push({name: 'pc'})
        // } else {
        //   this.$router.push({name: 'h5'})
        // }
    },
    methods: {
        isPcFun() {
            let u = navigator.userAgent;
            let Agents = [
                'Android',
                'iPhone',
                'webOS',
                'BlackBerry',
                'SymbianOS',
                'Windows Phone',
                'iPad',
                'iPod',
            ];
            let flag = true;
            for (let i = 0; i < Agents.length; i++) {
                if (u.indexOf(Agents[i]) > 0) {
                    flag = false;
                    break;
                }
            }
            return flag;
        },
    },
};
</script>

<style>
html,
body,
#app {
    height: 100%;
    font-size: 14px;
    min-width: 1200px;
    overflow-x: scroll;
    margin: 0;
    /*position: absolute;*/
}
.pc {
    width: 414px;
    height: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    margin: 0 auto;
    transform: translate(-50%);
}
.mobile {
    height: 100%;
}
</style>
