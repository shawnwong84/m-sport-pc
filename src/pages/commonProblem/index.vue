<template>
    <div>
        <div class="commonProblem-wrapper">
            <h1>直播常见问题</h1>
            <p>
                <b>关于电脑配置推荐</b><br />1：CPU ：E3-1230 v3
                物理四核(虚拟八核)<br />2：主板：华硕B85系列<br />3：内存：4G或更多<br />4：显卡：GTX650
                2G显存 或AMD同等级显卡<br />5：硬盘：500G 或 更多<br />
            </p>
            <p>
                <b>关于<span class="name"></span>直播手机APP如何下载</b
                ><br />1：可以通过腾讯应用宝下载安卓版本<br />2：暂时只开放安卓版本下载，苹果用户再等等啦~
            </p>
            <p>
                <b>关于直播间为何被关闭</b
                ><br />1：播放黄赌毒影视剧，尤其是过分暴露，污秽，不健康涉黄内容的画面<br />2：播放未经版权方许可的影视剧内容<br />3：播放涉及国家政治，未经国家审核通过的影视剧，视频影像等内容<br />4：主播在直播时发生争吵，辱骂，散布谣言，宣传封禁迷信等行为<br />5：发表反党反政府的言论，或做出侮辱诋毁党和国家的行为<br />6：出镜主播衣着暴露，行为低俗<br />7：宣传其他直播平台，鼓动观众去其他平台观看直播
                ,恶意贬低污蔑<span class="name"></span
                >直播内容<br />8：足球主播和篮球主播在直播间内（直播标题、直播公告、直播详情、弹幕区等任何地方）出现了个人联系方式<br />
            </p>
            <p>
                <b>关于比赛视频源如何获得</b
                ><br />目前平台不提供比赛视频源，视频源需要主播通过自己的途径获得
            </p>
            <p>
                <b>关于直播间如何分享</b
                ><br />1：网页版直播间分享按钮位于直播间视频源区域右上方，点击分享，可以将直播间地址复制，通过粘贴分享<br />2：APP版直播间分享按钮位于手机屏幕右上方，点击三点符号可以将直播间分享至微信、朋友圈、微博、QQ
            </p>
            <p>
                <b>关于如何任命房管与禁言</b><br />1：打开<span
                    class="name"
                ></span
                >直播网页，搜索进入自己的直播间，在弹幕区域左键点击用户昵称可以任命房管或禁言<br />2：安卓手机打开<span
                    class="name"
                ></span
                >直播手机APP，搜索进入自己的直播间，在弹幕区域点击用户昵称可以任命房管或禁言
            </p>
            <p>
                <b>关于直播时麦克风有杂音，有电磁干扰音</b
                ><br />1：检查麦克风周围的环境，手机，平板电脑，含有吸铁石的装饰品，等能对麦克风产生电磁干扰的东西请远离麦克风<br />2：右键屏幕右下方的小喇叭选项，右键相应的麦克风点击属性选项，在其级别选项中把麦克风加强的音量条适当降低<br />3：为保证直播质量所以必须安装声卡，笔记本安装外置声卡，台式机安装内置声卡。启用声卡的降噪，抑制，闪避等功能
            </p>
            <p>
                <b>关于直播解说声音过小，观众听不清</b
                ><br />1：检查OBS的设置，在OBS页面的麦克风形状按键点击选择加大麦克风音量<br />2：右键电脑右下方的小喇叭按键右键对应启用的麦克风，点击属性功能键，在级别功能栏中调高麦克风音量，并适当加大麦克风加强功能<br />3：通过声卡的麦克风音量控制功能键进行调节
            </p>
            <p>
                <b
                    >关于直播时有观众反映录制画面出现黑屏或直播区域不完整、不协调</b
                ><br />最快最有效的解决方法就是点击OBS的截取区域功能键快速地重新截取全屏，并把直播画面全屏播放
            </p>
            <p>
                <b>关于直播时有大量观众反映卡顿，播放不流畅</b
                ><br />1：检查本机上是否开启其他占用网速的应用程序，请彻底关闭除OBS以及视频源外所有程序，软件和网页<br />2：检查所处网络环境是否有其他设备使用同一个WIFI，如若有必须关闭其他设备，停止使用，直至直播结束<br />3：检查视频播放源是否流畅播放，如果不流畅，请更换播放源，或播放线路<br />4：如果尝试了多种方法依然卡顿，请重启电脑重新开始直播，如果依然卡顿，请停止直播
            </p>
            <p>
                <b>关于直播中OBS反复掉线重新连接</b
                ><br />请先确认所在网络环境的网络连接是否也如此，如果是，那么请马上停止直播，并且马上联系所属网络运营商，尽快能解决。如果不是，请断开网络，关闭OBS后，重新在连接。如果依然出现此情况，请卸载OBS，重启电脑，然后重新下载OBS，然后开启直播，如果还是依然没有解决请停止直播，并且保留问题的截图加以详细的描述发给运营组人员。
            </p>
            <p>
                <b
                    >关于直播时发现自己的直播页面没有在<span class="name"></span
                    >直播里</b
                ><br />请先自行检查OBS是否正常开启，如果没有请开启，如果开启了请再仔细确认全站的各个位置是否都没有自己的直播画面。如果确认没有，先尝试退出OBS，再重新开启，如果还是依然没有请卸载OBS重启电脑后重新安装然后再开启直播。如果依然没有直播画面，暂时停止直播并马上联系运营组，详细具体真实的对所遇问题进行描述，询问多久等处理完并耐心等待，短时间内如果处理完毕，那么可以正常重新开始直播，如果短时间内不能处理完，那么可以彻底关闭直播
            </p>
            <p>
                <b>关于直播时观众反映背景音过大或过小</b
                ><br />1：适当调节视频源本身的音量大小<br />2：适当调节OBS下方的小喇叭设置键的音量大小
            </p>
            <p>
                <b
                    >关于直播时观众反映重音（双背景音、解说声音以及背景音都重音）</b
                ><br />1：只是双背景音请检查本机电脑是否打开了两个视频源地址，并且关闭解说时不用的视频源，或静音其中一个视频源<br />2：背景音和解说音都重音，请检查是否在自己电脑上打开了自己在<span
                    class="name"
                ></span
                >直播上的直播页面。请关闭或是静音，请检查周围环境是否用平板电脑、手机等设备打开了自己的直播画面声音被麦克风收录进去，请关闭设备或静音
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'index',
};
</script>

<style scoped>
.commonProblem-wrapper {
    margin: 10px 10%;
    background: white;
    padding: 30px;
}
.commonProblem-wrapper h1 {
    height: 64px;
    margin-bottom: 30px;
    border-bottom: 1px solid #f3f3f3;
    font-size: 18px;
    line-height: 64px;
    text-align: center;
    color: #303030;
    display: block;
    overflow: hidden;
}
.commonProblem-wrapper p {
    font-size: 12px;
    line-height: 20px;
    color: #303030;
}
.commonProblem-wrapper p + p {
    margin-top: 20px;
}
</style>
