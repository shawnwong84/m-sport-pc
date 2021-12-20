<template>
    <div class="down-box">
        <div class="down-left">
            <div class="down-phone-bg">
                <img src="../../assets/image/down/phone-bg.png" alt="" />
            </div>
            <div></div>
        </div>
        <div class="down-right">
            <div></div>
            <h3 class="down-des">体育直播移动下载 - 畅想高清比赛</h3>
            <div class="down-qr">
                <vue-qr
                    text="http://facebook.github.io/react/"
                    :size="190"
                    :margin="24"
                />
            </div>
            <div class="down-btn">
                <div class="ios-btn">
                    <img src="../../assets/image/down/ios-icon.png" alt="" />
                    <span>IOS下载</span>
                </div>
                <div class="android-btn">
                    <img
                        src="../../assets/image/down/android-icon.png"
                        alt=""
                    />
                    <span>安卓下载</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import VueQr from 'vue-qr';
export default {
    name: 'index',
    data() {
        return {
            ios: '',
            android: '',
        };
    },

    mounted() {
        this.$axios('get', '/download/getDownAddress').then((res) => {
            if (res.code === 200) {
                this.android = res.data.android;
                this.ios = res.data.ios;
            }
        });
    },
    components: {
        VueQr,
    },
    methods: {
        down(type) {
            if (type === 1) {
                window.location.href = this.android;
            } else {
                window.location.href = this.ios;
            }
        },
    },
};
</script>

<style lang="scss" scoped>
.down-box {
    width: 100%;
    height: 100%;
    @include bgurl('../../assets/image/down/down_bg.png');
    background-attachment: fixed;
    @include flexCenterWrap();
    .down-left {
        width: 700px;
        height: 813px;
        position: relative;
        .down-phone-bg {
            width: 263px;
            height: 569px;
            position: absolute;
            z-index: 1;
            right: 0;
            top: 30px;
            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
    }
    .down-right {
        width: 800px;
        height: 800px;
        .down-des {
            color: #605656;
            font-size: 38px;
        }
        .down-qr {
        }
        .down-btn {
            width: 100%;
            @include flexStartCenter();
            .ios-btn {
                width: 242px;
                height: 63px;
                @include bgurl('../../assets/image/down/ios-btn.png');
                @include flexCenter();
                img {
                    width: 38px;
                    height: 38px;
                    transform: translateX(-50px);
                }
                span {
                    color: #ffffff;
                    font-size: 20px;
                }
            }
            .android-btn {
                width: 242px;
                height: 63px;
                @include bgurl('../../assets/image/down/android-btn.png');
                @include flexCenter();
                img {
                    width: 38px;
                    height: 38px;
                    transform: translateX(-50px);
                }
                span {
                    color: #ffffff;
                    font-size: 20px;
                }
            }
        }
    }
}
</style>
