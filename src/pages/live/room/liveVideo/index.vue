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
import Player from 'xgplayer';
import HlsJsPlayer from 'xgplayer-hls.js';
import FlvJsPlayer from 'xgplayer-flv.js';
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
            this.player = new HlsJsPlayer({
                id: 'player-room',
                url: this.playUrl,
                isLive: true, //直播场景设置为true
                useHls: true,
                autoplay: true,
                width: '100%',
                height: '100%',
                lang: 'zh-cn',
                //hlsOpts: {
                //  xhrSetup: function(xhr, url) {
                //    xhr.withCredentials = true;
                //  }
                //} //hls.js可选配置项
            });
        },
        playVideo() {
            this.player = new Player({
                id: 'player-room',
                url: this.playUrl,
                autoplay: true,
                width: '100%',
                height: '100%',
                lang: 'zh-cn',
            });
        },
        playFlvVideo() {
            this.player = new FlvJsPlayer({
                id: 'player-room',
                isLive: true, //直播场景设置为true
                hasVideo: true,
                hasAudio: true,
                flvOptionalConfig: {
                    enableWorker: true,
                }, //flv.js可选配置项
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
        ::v-deep .xgplayer-enter {
            background: url('../../../../assets/image/live/video-player-bg.png');
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
        }
    }
}
</style>
