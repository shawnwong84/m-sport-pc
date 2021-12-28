<!--
 * @version:  ;
 * @description:  ;
 * @autor: Full
 * @date: Do not edit
-->
<template>
    <div class="my-home">
        {{getUserInfo.phone}}
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    name: 'myHome',
    data() {
        return {};
    },
    components: {},
    watch: {},
    computed:{
        ...mapGetters({
            getUserInfo:'getUserInfo'
        })
    },
    mounted() {
       
    },
    methods: {
       
    },
};
</script>

<style scoped lang="scss">
.my-home {
}
</style>
