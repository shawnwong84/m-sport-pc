<template>
    <!-- 播放器 -->
    <div class="player-box">
        <video
            class="video"
            id="video"
            ref="video"
            x5-playsinline
            x5-video-player-fullscreen="true"
            x5-video-orientation="portrait"
            webkit-playsinline="true"
            playsinline="true"
            type="application/x-mpegURL"
            x-webkit-airplay="allow"
            x5-video-player-type="h5-page"
            preload="auto"
            controls
            :poster="videoResource.img"
            @ended="onPlayerEnded($event)"
        >
            <!-- controls -->
        </video>
        <!--    &lt;!&ndash; 控制层 &ndash;&gt;-->
        <!--    <div class="control-layer"-->
        <!--         @click="control()">-->
        <!--      <div class="play-bg"-->
        <!--           v-show="timeOutShow"-->
        <!--           @click.stop='playBg()'></div>-->
        <!--    </div>-->
        <!--    <div class="progress-bar"-->
        <!--         v-show="progressBarShow">-->
        <!--      <div class="time-out-elapsed-time">-->
        <!--        &lt;!&ndash; 暂停 &ndash;&gt;-->
        <!--        <div class="time-out"-->
        <!--             :class="timeOutShow?'on':''"-->
        <!--             @click="timeOut()"></div>-->
        <!--        &lt;!&ndash; 已播时间 &ndash;&gt;-->
        <!--        <div class="elapsed-time">{{rangeValueTime}}</div>-->
        <!--      </div>-->
        <!--      &lt;!&ndash; 进度条 &ndash;&gt;-->
        <!--&lt;!&ndash;      <mt-range v-model="rangeValue"&ndash;&gt;-->
        <!--&lt;!&ndash;                @input="inputEvent()"&ndash;&gt;-->
        <!--&lt;!&ndash;                @change="changeEvent()"></mt-range>&ndash;&gt;-->
        <!--      <div class="total-time-full-screen">-->
        <!--        &lt;!&ndash; 总时间 &ndash;&gt;-->
        <!--        <div class="total-time">{{totalTime}}</div>-->
        <!--        &lt;!&ndash; 全屏 &ndash;&gt;-->
        <!--        <div class="full-screen"-->
        <!--             @click="fullScreen()"></div>-->
        <!--      </div>-->
        <!--    </div>-->
    </div>
</template>

<script>
import Hls from 'hls.js';
// import Hls from 'videojs-contrib-hls'
export default {
    name: 'video-box',
    data() {
        return {
            // 进度条占比
            rangeValue: 0,
            // 是否播放
            timeOutShow: true,
            // 视频总时间
            totalTime: '00:00',
            // 视频已播放时间
            rangeValueTime: '00:00',
            // 定时器（获取已播放时长）
            setIntervalShow: null,
            // 进度条展示/隐藏
            progressBarShow: true,
            // 5秒显示隐藏
            timeout: null,
        };
    },
    props: {
        // 视频数据
        videoResource: Object,
        required: true,
    },
    mounted() {
        // 设置视频播放地址
        console.log(this.videoResource);
        this.getStream(this.videoResource.video);
        // 获取视频的总时长
        let mv = this;
        function fn() {
            if (isNaN(mv.$refs.video.duration)) {
                setTimeout(() => {
                    fn();
                }, 200);
            } else {
                mv.totalTime = mv.formatSeconds(mv.$refs.video.duration);
            }
        }
        fn();

        // 监听视频播放状态
        let myVideo = this.$refs.video;
        myVideo.addEventListener('play', () => {
            if (this.timeOutShow) {
                this.timeOut();
            }
            this.timeOutShow = false;
        });
        myVideo.addEventListener('pause', () => {
            this.timeOutShow = true;
        });
    },
    components: {},
    methods: {
        // 控制层
        control() {
            clearTimeout(this.timeout);
            // 判断视频是否暂停
            this.progressBarShow = !this.progressBarShow;
            this.timeout = setTimeout(() => {
                if (!this.timeOutShow) {
                    this.progressBarShow = false;
                }
            }, 5000);
        },
        // 控制层暂停
        playBg() {
            this.timeOut();
        },
        // 视频结束
        onPlayerEnded(e) {},
        // 进度条按下
        inputEvent() {
            this.timeOutShow = true;
            this.$refs.video.pause();
            clearInterval(this.setIntervalShow);
            this.rangeValueTime = this.formatSeconds(
                (this.$refs.video.duration / 100) * this.rangeValue,
            );
        },
        // 进度条拿起
        changeEvent() {
            this.timeOutShow = true;
            this.$refs.video.currentTime =
                (this.$refs.video.duration / 100) * this.rangeValue;
            clearInterval(this.setIntervalShow);
            this.timeOut();
        },
        // 暂停/播放
        timeOut() {
            let video = this.$refs.video;
            if (this.timeOutShow === false) {
                // 暂停
                video.pause();
                clearInterval(this.setIntervalShow);
                this.timeOutShow = true;
            } else {
                // 播放
                video.play();
                this.timeOutShow = false;
                // 获取播放时间
                this.setIntervalShow = setInterval(() => {
                    this.rangeValueTime = this.formatSeconds(
                        this.$refs.video.currentTime,
                    );
                    // 占100%的多少，控制进度条
                    this.rangeValue =
                        (this.$refs.video.currentTime /
                            this.$refs.video.duration) *
                        100;
                    if (this.rangeValue === 100) {
                        this.rangeValueTime = this.formatSeconds(
                            this.$refs.video.duration,
                        );
                        clearInterval(this.setIntervalShow);
                        this.$refs.video.pause();
                        this.timeOutShow = true;
                    }
                }, 200);
                // 三秒后隐藏进度条
                setTimeout(() => {
                    this.progressBarShow = false;
                }, 3000);
            }
        },
        // 点击全屏
        fullScreen() {
            // var video = document.getElementById('video');
            console.log(1);
            var video = this.$refs.video;
            console.log(video);
            console.log(video.requestFullscreen);
            console.log(video.mozRequestFullScreen);
            console.log(video.webkitRequestFullScreen);

            if (video.requestFullscreen) {
                video.requestFullscreen();
            } else if (video.mozRequestFullScreen) {
                video.mozRequestFullScreen();
            } else if (video.webkitRequestFullscreen) {
                video.webkitRequestFullscreen();
            } else if (video.webkitSupportsFullscreen) {
                video.webkitEnterFullscreen();
            }
        },
        // 时间转换
        formatSeconds(value) {
            var theTime = parseInt(value); // 秒
            var middle = 0; // 分
            var hour = 0; // 小时

            if (theTime > 60) {
                middle = parseInt(theTime / 60);
                theTime = parseInt(theTime % 60);
                if (middle > 60) {
                    hour = parseInt(middle / 60);
                    middle = parseInt(middle % 60);
                }
            }
            var result =
                parseInt(theTime) >= 10
                    ? parseInt(theTime)
                    : '0' + parseInt(theTime);
            if (middle > 0) {
                result =
                    '' +
                    (parseInt(middle) >= 10
                        ? parseInt(middle)
                        : '0' + parseInt(middle)) +
                    ':' +
                    result;
            }
            if (hour > 0) {
                result =
                    '' +
                    (parseInt(hour) >= 10
                        ? parseInt(hour)
                        : '0' + parseInt(hour)) +
                    ':' +
                    result;
            }
            if ((result + '').length === 2) {
                result = '00:' + result;
            }
            return result;
        },
        videoPause() {
            if (this.hls) {
                this.$refs.video.pause();
                this.hls.destroy();
                this.hls = null;
            }
        },
        getStream(source) {
            if (Hls.isSupported()) {
                this.hls = new Hls();
                this.hls.loadSource(source);
                this.hls.attachMedia(this.$refs.video);
                this.hls.on(Hls.Events.MANIFEST_PARSED, () => {
                    console.log('加载成功');
                });
                this.hls.on(Hls.Events.ERROR, (event, data) => {
                    console.log('加载失败');
                });
            } else if (
                this.$refs.video.canPlayType('application/vnd.apple.mpegurl')
            ) {
                this.$refs.video.src = source;
            }
        },
    },
    // 销毁时
    beforeDestroy() {
        this.videoPause();
        clearInterval(this.setIntervalShow);
    },
    // 销毁时
    destroyed() {
        this.videoPause();
        clearInterval(this.setIntervalShow);
    },
};
</script>
<style scoped>
.player-box {
    width: 100%;
    height: 450px;
    background: #000;
    /*position: fixed;*/
    /*top: 0px;*/
    /*left: 0px;*/
    /*z-index: 99;*/
}
.video {
    height: 100%;
    width: 100%;
}
.progress-bar {
    width: 100%;
    height: 0.3rem;
    display: flex;
    justify-content: space-between;
    /*position: fixed;*/
    /*top: 1.79rem;*/
    /*left: 0px;*/
    background: rgba(#000, 0.3);
}
.time-out-elapsed-time {
    width: 0.76rem;
    height: 100%;
    float: left;
    margin-left: 0.03rem;
}
.total-time-full-screen {
    width: 0.8rem;
    height: 100%;
    float: right;
}
.time-out {
    width: 0.2rem;
    height: 0.3rem;
    float: left;
    /*  background: url("../../../assets/img/time-out.png") no-repeat center;*/
    /*  background-size: 70%;*/
    /*&.on {*/
    /*   background: url("../../../assets/img/play.png") no-repeat center;*/
    /*   background-size: 62%;*/
    /* }*/
}
.elapsed-time {
    width: 0.54rem;
    height: 0.3rem;
    text-align: center;
    line-height: 0.3rem;
    float: left;
    padding-right: 0rem;
    box-sizing: border-box;
    color: #fff;
    font-size: 0.11rem;
}
.total-time {
    width: 0.54rem;
    height: 0.3rem;
    text-align: center;
    line-height: 0.3rem;
    float: left;
    padding-right: 0rem;
    box-sizing: border-box;
    color: #fff;
    font-size: 0.11rem;
}
.full-screen {
    width: 0.2rem;
    height: 0.3rem;
    float: left;
    /*background: url("../../../assets/img/enlarge.png") no-repeat center;*/
    /*background-size: 70%;*/
}
.control-layer {
    width: 100%;
    height: 2.09rem;
    /*position: fixed;*/
    /*top: 0px;*/
    /*left: 0px;*/
}
.play-bg {
    width: 0.5rem;
    height: 0.5rem;
    /*background: url("../../../assets/img/control-layer.png") no-repeat center;*/
    /*background-size: 0.25rem 0.325rem;*/
    /*position: absolute;*/
    /*top: 50%;*/
    /*left: 50%;*/
    transform: translate(-50%, -50%);
    z-index: 999;
}
</style>
<style>
.mt-range-thumb {
    width: 0.1rem;
    height: 0.1rem;
    top: 0.08rem;
}
.mt-range {
    width: 2rem;
    padding-right: 0.07rem;
}
.mt-range-content {
    width: 100%;
    margin: 0 auto;
    flex: none;
}
.mt-range-progress {
    background-color: rgb(255, 99, 136);
}

.mt-range-runway {
    width: 100%;
    border-top-color: #fff;
}
</style>
