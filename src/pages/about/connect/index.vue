<!--
 * @version:  ;
 * @description:  ;
 * @autor: Full
 * @date: Do not edit
-->
<template>
    <div class="connect-box">
        <div class="content">
            <div class="banner">
                <img
                    src="../../../assets/image/about/connect-banner.png"
                    alt=""
                />
            </div>
            <div class="qr">
                <vue-qr
                    text="http://m.mzhibo.cc/#/down"
                    :size="128"
                    :margin="0"
                    class="qr-img"
                />
                <p>M体育APP</p>
            </div>
        </div>
    </div>
</template>

<script>
import VueQr from 'vue-qr';
export default {
    name: 'connect',
    data() {
        return {};
    },
    components: {
        VueQr,
    },
    watch: {},
    mounted() {},
    methods: {},
};
</script>

<style scoped lang="scss">
.connect-box {
    width: 100%;
    height: 100%;
    .content {
        width: 100%;
        height: 100%;
        @include flexColumnStart();
        .banner {
            width: 900px;
            height: 200px;
            margin-top: 30px;
            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
        .qr {
            margin-top: 45px;
            @include flexColumnStart();
            p {
                margin-top: 10px;
                color: #605656;
                font-size: 14px;
            }
        }
    }
}
</style>
