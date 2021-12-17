<template>
    <div id="app">
        <reg-and-login></reg-and-login>
        <router-view></router-view>
    </div>
</template>

<script>
import regAndLogin from './components/regAndLogin'
export default {
    name: 'App',
    data() {
        return {};
    },
    components: {
        regAndLogin
    },
    watch: {},
    mounted() {},
    methods: {},
};
</script>

<style scoped lang="scss"></style>
