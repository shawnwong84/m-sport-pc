<template>
    <div class="down-box">
        <div class="down-left">
            <div class="down-phone-bg">
                <img src="../../assets/image/down/phone-bg.png" alt="" />
            </div>
            <div class="down-phone-bg-2">
                <img src="../../assets/image/down/phone-bg.png" alt="" />
            </div>
            <div class="down-person1">
                <img src="../../assets/image/down/person1.png" alt="" />
            </div>
            <div class="down-person2">
                <img src="../../assets/image/down/person2.png" alt="" />
            </div>
            <div class="chassis-bg">
                <img src="../../assets/image/down/chassis-bg.png" alt="" />
            </div>
        </div>
        <div class="down-right">
            <img
                src="../../assets/image/down/title.png"
                alt=""
                class="down-title"
            />

            <h3 class="down-des">体育直播移动下载 - 畅想高清比赛</h3>
            <div class="down-qr">
                <vue-qr text="http://m.mzhibo.cc/#/down" :size="190" :margin="24" />
                <div class="sao-qr">扫一扫下载直播体育APP</div>
            </div>
            <div class="down-btn">
                <div class="ios-btn" @click="down(ios)" v-show="ios">
                    <img src="../../assets/image/down/ios-icon.png" alt="" />
                    <span>IOS下载</span>
                </div>
                <div class="android-btn" @click="down(android)" v-show="android">
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
        down(url) {
            window.location.href = url;
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
            width: 275px;
            height: auto;
            position: absolute;
            z-index: 2;
            right: 101px;
            bottom: 170px;
            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
        .down-phone-bg-2 {
            width: 243px;
            height: auto;
            position: absolute;
            z-index: 1;
            left: 100px;
            bottom: 170px;
            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
        .down-person1 {
            width: 360px;
            height: auto;
            position: absolute;
            z-index: 3;
            right: 270px;
            bottom: 170px;
            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
        .down-person2 {
            width: 246px;
            height: auto;
            position: absolute;
            z-index: 3;
            right: 60px;
            bottom: 170px;
            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
        .chassis-bg {
            width: 592px;
            height: auto;
            position: absolute;
            z-index: 2;
            left: 50%;
            transform: translateX(-50%);
            bottom: 40px;
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
        @include flexColumnStartCenter();
        .down-title {
            width: 732px;
            height: 76px;
            margin-bottom: 29px;
        }
        .down-des {
            color: #605656;
            font-size: 38px;
            margin-bottom: 58px;
        }
        .down-qr {
            @include flexStartCenter();
            .sao-qr {
                width: 364px;
                height: 55px;
                background: #f9433f;
                border-radius: 28px 28px 28px 0px;
                @include flexCenter();
                color: #ffffff;
                font-size: 24px;
                margin-left: 56px;
            }
        }
        .down-btn {
            width: 100%;
            @include flexStartCenter();
            margin-top: 88px;
            cursor: pointer;
            .ios-btn {
                width: 242px;
                height: 63px;
                @include bgurl('../../assets/image/down/ios-btn.png');
                @include flexCenter();
                margin-right: 33px;
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
