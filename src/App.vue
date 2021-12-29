<template>
    <div id="app">
        <reg-and-login></reg-and-login>
        <router-view></router-view>
    </div>
</template>

<script>
import regAndLogin from './components/regAndLogin';
import { isMobile } from './utils/tools';
export default {
    name: 'App',
    data() {
        return {};
    },
    components: {
        regAndLogin,
    },
    watch: {},
    mounted() {
        this.toPlatform();
    },
    methods: {
        toPlatform() {
            const { NODE_ENV } = process.env;

            if (NODE_ENV !== 'development') {
                if (isMobile()) {
                    window.location.href = '//m.mzhibo.cc/';
                }
            }
        },
    },
};
</script>

<style scoped lang="scss"></style>
