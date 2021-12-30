<!--
 * @version:  ;
 * @description:  ;
 * @autor: Full
 * @date: Do not edit
-->
<template>
    <div class="my-anchor">
        <div class="my-head">
            <div class="title">我的直播</div>
        </div>
        <div>
            
        </div>
    </div>
</template>

<script>
export default {
    name: 'myAnchor',
    data() {
        return {};
    },
    components: {},
    watch: {},
    mounted() {},
    methods: {},
};
</script>

<style scoped lang="scss">
.my-anchor {
    width: 100%;
    @include flexColumnStart();
    position: relative;
    .my-head {
        width: 100%;
        height: 52px;
        border-bottom: 1px solid $primary-color;
        .title {
            width: 150px;
            height: 52px;
            background: linear-gradient(90deg, #ff8d86 0%, #f8413d 100%);
            border-radius: 8px 0px 0px 0px;
            @include flexCenter();
            font-weight: 500;
            color: #ffffff;
            font-size: 16px;
        }
    }
}
</style>
