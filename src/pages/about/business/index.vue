<!--
 * @version:  ;
 * @description:  ;
 * @autor: Full
 * @date: Do not edit
-->
<template>
    <div class="business-box">
        <div class="content">
            <div class="icon">
                <img src="../../../assets/image/about/qq-icon.png" alt="" />
            </div>
            <h2 class="title">商务合作</h2>
            <div class="des">请添加商务合作QQ：3322129855</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'business',
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
.business-box {
    width: 100%;
    height: 100%;
    .content {
        width: 100%;
        height: 100%;
        @include flexColumnCenter();
        .icon {
            width: 120px;
            height: 120px;
            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
        .title {
            color: #333;
            font-size: 20px;
            font-weight: 700;
            margin: 28px 0 16px;
        }
        .des {
            color: #605656;
            font-size: 14px;
        }
    }
}
</style>
