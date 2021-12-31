<!--
 * @version:  ;
 * @description:  ;
 * @autor: Full
 * @date: Do not edit
-->
<template>
    <div class="live-video">
        <div id="player-room" class="player-box"></div>
    </div>
</template>

<script>
import DPlayer from 'dplayer';
import Flv from 'flv.js';
import Hls from 'hls.js';
export default {
    name: 'index',
    data() {
        return {
            player: null,
        };
    },
    components: {},
    watch: {
        playUrl(val) {
            if (val.includes('.m3u8')) {
                this.playHlsVideo();
            } else if (val.includes('.flv')) {
                this.playFlvVideo();
            } else if (val.includes('.mp4')) {
                this.playVideo();
            }
        },
    },
    props: {
        playUrl: {
            type: String,
        },
    },
    mounted() {},
    methods: {
        playHlsVideo() {
            this.player = new DPlayer({
                container: document.getElementById('player-room'),
                autoplay: true,
                volume: 0.7, //不能自动播放
                lang: 'zh-cn',
                live: true,
                theme: '#f8413d',
                logo: require('../../../../assets/image/live-logo.png'),
                video: {
                    url: this.playUrl,
                    type: 'customHls',

                    customType: {
                        customHls: function (video, player) {
                            const hls = new Hls();
                            hls.loadSource(video.src);
                            hls.attachMedia(video);
                        },
                    },
                },
            });
        },
        playVideo() {
            this.player = new DPlayer({
                container: document.getElementById('player-room'),
                autoplay: true,
                volume: 0.7, //不能自动播放
                lang: 'zh-cn',
                live: true,
                theme: '#f8413d',
                logo: require('../../../../assets/image/live-logo.png'),
                video: {
                    url: this.playUrl,
                },
            });
        },
        playFlvVideo() {
            this.player = new DPlayer({
                container: document.getElementById('player-room'),
                autoplay: true,
                volume: 0.7, //不能自动播放
                lang: 'zh-cn',
                live: true,
                theme: '#f8413d',
                logo: require('../../../../assets/image/live-logo.png'),
                video: {
                    url: this.playUrl,
                    type: 'customFlv',
                    customType: {
                        customFlv: function (video, player) {
                            const flvPlayer = Flv.createPlayer({
                                type: 'flv',
                                url: video.src,
                            });
                            flvPlayer.attachMediaElement(video);
                            flvPlayer.load();
                        },
                    },
                },
            });
        },
    },
};
</script>

<style scoped lang="scss">
.live-video {
    width: 100%;
    height: 100%;
    .player-box {
        width: 100% !important;
        height: 100% !important;
        ::v-deep video {
            width: 100%;
            height: 100%;
            // object-fit: cover;
        }
        // ::v-deep .xgplayer-enter {
        //     background: url('../../../../assets/image/live/video-player-bg.png');
        //     background-size: cover;
        //     background-position: center;
        //     background-repeat: no-repeat;
        // }
    }
    ::v-deep .dplayer-logo {
        max-width: none;
        max-height: none;
        width: 100px;
        left: calc(100% - 120px);
    }
}
</style>
