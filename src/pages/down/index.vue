<template>
    <div>
        <div class="down">
            <div class="min-width" style="padding-bottom: 50px">
                <div class="fx justify-center down-top">
                    <div><img src="../../assets/image/tiyu-img.png" /></div>
                    <div class="ta-c ml-30">
                        <div>
                            <img
                                src="../../assets/image/logo1.png"
                                width="200px"
                            />
                        </div>
                        <div class="mt-30">
                            <img
                                src="../../assets/image/logo1.png"
                                width="400px"
                            />
                        </div>
                        <div class="c-8 fw-700 fs-22 mt-30">
                            体育视听盛宴<span class="ml-10">万千家人相伴</span>
                        </div>
                        <div class="c-8 fw-700 fs-22 mt-10">
                            网红女神赛事直播<span class="ml-10"
                                >行业专家赛前预测</span
                            >
                        </div>
                        <div class="fx align-items mt-30">
                            <div>
                                <div class="erweima">
                                    <img
                                        src="../../assets/image/hs-erweima.png"
                                        width="170px"
                                    />
                                </div>
                                <div class="c-8 mt-10">扫描二维码下载APP</div>
                            </div>
                            <div class="ml-30">
                                <div class="" style="margin-top: 50px">
                                    <img
                                        src="../../assets/image/andor-btn.png"
                                        width="150px"
                                        @click="down(1)"
                                    />
                                </div>
                                <div class="mt-20">
                                    <img
                                        src="../../assets/image/ios-btn.png"
                                        width="150px"
                                        @click="down(2)"
                                    />
                                </div>
                                <div class="c-8" style="margin-top: 40px">
                                    官网地址:http://hszhibo.live
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="fx align-items justify-center mt-30">
                    <div class="ta-c mr-50">
                        <div class="fs-22 fw-700 c-fac">魅力主播解说</div>
                        <div class="c-67 mt-10">看比赛就要一起嗨</div>
                        <div class="mt-20">
                            <img
                                src="../../assets/image/down-img3.png"
                                width="250px"
                            />
                        </div>
                    </div>
                    <div class="ta-c mr-50">
                        <div class="fs-22 fw-700 c-fac">精准赛事分析</div>
                        <div class="c-67 mt-10">专业解读精准分析</div>
                        <div class="mt-20">
                            <img
                                src="../../assets/image/down-img2.png"
                                width="250px"
                            />
                        </div>
                    </div>
                    <div class="ta-c">
                        <div class="fs-22 fw-700 c-fac">火爆体育资讯</div>
                        <div class="c-67 mt-10">志趣相投球友聚集地</div>
                        <div class="mt-20">
                            <img
                                src="../../assets/image/down-img1.png"
                                width="250px"
                            />
                        </div>
                    </div>
                </div>
                <div style="padding-right: 8%; padding-left: 8%">
                    <div class="fx align-items mt-30">
                        <div class="fs-22 fw-700">安装教程</div>
                        <div class="c-3 ml-10">
                            需要在同一个网络环境下下载安转和注册，勿切换网络，若无法正常下载，请使用手机自带浏览器打开(Chrome谷歌浏览器、Safari浏览器)
                        </div>
                    </div>
                    <div class="xian mt-20"></div>
                    <div class="fx align-items mt-30">
                        <div><img src="../../assets/image/IOS.png" /></div>
                        <div class="fs-22 c-fac ml-10">IOS如何安装？</div>
                    </div>
                    <div class="c-67 mt-20">
                        1.APP下载完成后，请打开「设置」>点选「通用」选项
                    </div>
                    <div class="c-67 mt-10">2.点选「设备管理」</div>
                    <div class="c-67 mt-10">3.点击「信任」APP即完成设置</div>
                    <div class="fx align-items justify-between mt-20">
                        <div>
                            <img
                                src="../../assets/image/IOS1.png"
                                width="240px"
                            />
                        </div>
                        <div>
                            <img
                                src="../../assets/image/IOS2.png"
                                width="250px"
                            />
                        </div>
                        <div>
                            <img
                                src="../../assets/image/IOS3.png"
                                width="250px"
                            />
                        </div>
                        <div>
                            <img
                                src="../../assets/image/IOS4.png"
                                width="250px"
                            />
                        </div>
                    </div>
                    <div class="xian mt-30"></div>
                    <div class="fx align-items mt-30">
                        <div><img src="../../assets/image/Android.png" /></div>
                        <div class="fs-22 c-fac ml-10">Android如何安装？？</div>
                    </div>
                    <div class="c-67 mt-20">
                        1. 点击本页的「立即下载」选择「本地下载」
                    </div>
                    <div class="c-67 mt-10">
                        2. APP下载完成后，选择允许安装应用，即可完成安装
                    </div>
                    <div class="fx align-items justify-between mt-20">
                        <div>
                            <img
                                src="../../assets/image/Android1.png"
                                width="250px"
                            />
                        </div>
                        <div>
                            <img
                                src="../../assets/image/Android2.png"
                                width="240px"
                            />
                        </div>
                        <div>
                            <img
                                src="../../assets/image/Android3.png"
                                width="240px"
                            />
                        </div>
                        <div>
                            <img
                                src="../../assets/image/Android4.png"
                                width="240px"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <v-footer></v-footer>
    </div>
</template>

<script>
import footer from '../../compent/footer/index.vue';
export default {
    name: 'index',
    data() {
        return {
            ios: '',
            android: '',
        };
    },
    components: { 'v-footer': footer },
    mounted() {
        this.$axios('get', '/download/getDownAddress').then((res) => {
            if (res.code === 200) {
                this.android = res.data.android;
                this.ios = res.data.ios;
            }
        });
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

<style scoped>
.c-8 {
    color: #8c95ac;
}
.down {
    min-height: 100vh;
    background-image: url('https://1-1305184012.cos.ap-nanjing.myqcloud.com/live/bg-down.png');
    background-size: 100% auto;
    display: flex;
    justify-content: center;
}
.down-top {
    padding-top: 5%;
    padding-right: 10%;
    box-sizing: border-box;
}
.c-fac {
    color: #cea76b;
}
.erweima {
    width: 190px;
    height: 190px;
    background: white;
    border-radius: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 10px 16px 0px rgba(0, 0, 0, 0.1);
}
.c-67 {
    color: #67728f;
}
.c-3 {
    color: #333333;
}
.mr-50 {
    margin-right: 110px;
}
.xian {
    width: 100%;
    height: 2px;
    background: #cea76b;
}
</style>
