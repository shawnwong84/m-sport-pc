<template>
    <div>
        <div class="fx my">
            <div class="room-left" v-if="isLeft">
                <div class="title">个人中心</div>
                <div
                    class="item"
                    :class="num === 1 ? 'active' : ''"
                    @click="checkTab(1)"
                >
                    我的首页
                </div>
                <div
                    class="item"
                    :class="num === 2 ? 'active' : ''"
                    @click="checkTab(2)"
                >
                    我的资料
                </div>
                <div
                    class="item"
                    :class="num === 3 ? 'active' : ''"
                    @click="checkTab(3)"
                >
                    我的消息
                </div>
                <div
                    class="item"
                    :class="num === 4 ? 'active' : ''"
                    @click="checkTab(4)"
                >
                    我的关注
                </div>
                <div
                    class="item"
                    :class="num === 5 ? 'active' : ''"
                    @click="checkTab(5)"
                >
                    我的预约
                </div>
                <div
                    class="item"
                    :class="num === 6 ? 'active' : ''"
                    @click="checkTab(6)"
                >
                    我的反馈
                </div>
                <div
                    v-if="infoData.applying === 2 && infoData.type === 1"
                    class="item"
                    :class="num === 7 ? 'active' : ''"
                    @click="checkTab(7)"
                >
                    我的直播
                </div>
                <!--        <div v-if="infoData.type === 1" class="item" :class="num === 8?'active':''" @click="checkTab(8)">房间管理</div>-->
                <div
                    v-if="infoData.type === 0"
                    class="item"
                    :class="num === 9 ? 'active' : ''"
                    @click="checkTab(9)"
                >
                    主播申请
                </div>
            </div>
            <div class="room-right">
                <div v-if="num === 1" class="padding-15">
                    <div v-if="isInfo === 1">
                        <div class="fx" style="justify-content: flex-end">
                            <div class="update-btn" @click="checkTab(2)">
                                修改资料
                            </div>
                        </div>
                        <div class="fx justify-center" v-show="isshow">
                            <el-upload
                                class="upload"
                                :action="'http://hszhibo.live/excuse/file/fileUpload'"
                                :headers="headers"
                                :show-file-list="false"
                                :on-success="handleAvatarSuccess"
                                :before-upload="beforeAvatarUpload"
                            >
                                <img src="../../assets/image/upload.png" />
                            </el-upload>
                        </div>
                        <div class="ta-c">
                            <img
                                :src="infoData.avatarUrl"
                                class="my-header-img"
                                @mouseover="mouseover"
                                @mouseleave="mouseleave"
                            />
                        </div>
                        <div class="ta-c fs-20 fw-700">
                            {{ infoData.userName }}
                        </div>
                        <div class="fx align-items justify-center mt-20">
                            <div>
                                <span class="live">Lv{{ infoData.level }}</span>
                            </div>
                            <progress-bar
                                bar-color="#f8c21b"
                                class="pro-bar ml-10"
                                :val="infoData.level"
                            ></progress-bar>
                            <div>{{ infoData.level }}/100</div>
                        </div>
                        <div class="fx justify-center">
                            <div class="ta-c live-li border-right">
                                <div class="fs-20 fw-700">
                                    Lv.{{ infoData.level }}
                                </div>
                                <div class="fs-16">等级</div>
                            </div>
                            <div class="ta-c live-li border-right">
                                <div class="fs-20 fw-700">
                                    {{ infoData.experience }}
                                </div>
                                <div class="fs-16">经验值</div>
                            </div>
                            <div class="ta-c live-li">
                                <div class="fs-20 fw-700">
                                    {{ infoData.gold }}
                                </div>
                                <div class="fs-16">金币</div>
                            </div>
                        </div>
                        <div class="border-bottom"></div>
                        <div class="fs-18 fw-700 mt-20">账号管理</div>
                        <div class="fx align-items justify-center mt-20">
                            <div class="my-info-box">
                                <div class="fx align-items">
                                    <div>
                                        <img
                                            src="../../assets/image/phone.png"
                                            width="80px"
                                        />
                                    </div>
                                    <div class="ml-10">
                                        <div class="fw-700">我的手机</div>
                                        <div class="fs-12 c-9D">
                                            已经绑定手机号码
                                        </div>
                                    </div>
                                </div>
                                <div class="info-btn" @click="changeInfo(2)">
                                    更换手机
                                </div>
                            </div>
                            <div class="my-info-box ml-10">
                                <div class="fx align-items">
                                    <div>
                                        <img
                                            src="../../assets/image/password.png"
                                            width="80px"
                                        />
                                    </div>
                                    <div class="ml-10">
                                        <div class="fw-700">我的密码</div>
                                        <div class="fs-12 c-9D">
                                            已经设置密码
                                        </div>
                                    </div>
                                </div>
                                <div class="info-btn" @click="changeInfo(3)">
                                    更改密码
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-if="isInfo === 2">
                        <div class="fw-700">改绑手机</div>
                        <div class="process-box">
                            <div
                                class="fs-18 fx align-items"
                                :class="next === 2 ? 'c-9' : ''"
                            >
                                <div v-if="next === 1" class="li-active"></div>
                                <div>验证身份</div>
                            </div>
                            <div class="dot-line"></div>
                            <div
                                class="fs-18 fx align-items"
                                :class="next === 1 ? 'c-9' : ''"
                            >
                                <div v-if="next === 2" class="li-active"></div>
                                <div>绑定新手机</div>
                            </div>
                        </div>
                        <div class="fx justify-center">
                            <div class="verify-identity-box">
                                <div class="fx align-items mt-30 bd-bottom c-9">
                                    <div>+86</div>
                                    <div class="ml-10" v-if="next === 1">
                                        {{ phone }}
                                    </div>
                                    <div class="ml-10" v-if="next === 2">
                                        <input
                                            type="text"
                                            v-model="phone"
                                            placeholder="请输入手机号"
                                            class="bd-input"
                                        />
                                    </div>
                                </div>
                                <div
                                    class="fx align-items justify-between mt-30 bd-bottom"
                                >
                                    <div class="fs-12">
                                        <input
                                            type="text"
                                            v-model="smsCode"
                                            placeholder="获取并输入验证码"
                                            class="bd-input"
                                        />
                                    </div>
                                    <div class="btn-verify">
                                        <input
                                            type="button"
                                            class="getNumber"
                                            v-model="codeMsg"
                                            @click="sendSms"
                                            :disabled="codeDisabled"
                                        />
                                    </div>
                                </div>
                                <div
                                    v-if="next === 1"
                                    class="verify-next-btn"
                                    :class="smsCode !== '' ? 'active' : ''"
                                    @click="updatePhoneSt"
                                >
                                    下一步
                                </div>
                                <div
                                    v-if="next === 2"
                                    class="verify-next-btn"
                                    :class="smsCode !== '' ? 'active' : ''"
                                    @click="updatePhoneNd"
                                >
                                    绑定
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-if="isInfo === 3">
                        <div class="fw-700">修改密码</div>
                        <div class="process-box">
                            <div
                                class="fs-18 fx align-items"
                                :class="next === 2 ? 'c-9' : ''"
                            >
                                <div v-if="next === 1" class="li-active"></div>
                                <div>验证身份</div>
                            </div>
                            <div class="dot-line"></div>
                            <div
                                class="fs-18 fx align-items"
                                :class="next === 1 ? 'c-9' : ''"
                            >
                                <div v-if="next === 2" class="li-active"></div>
                                <div>修改新密码</div>
                            </div>
                        </div>
                        <div class="fx justify-center">
                            <div class="verify-identity-box">
                                <div class="fx align-items mt-30 bd-bottom c-9">
                                    <div>+86</div>
                                    <div class="ml-10" v-if="isLeft">
                                        {{ phone }}
                                    </div>
                                    <div class="ml-10" v-if="!isLeft">
                                        <input
                                            type="text"
                                            v-model="phone"
                                            placeholder="请输入手机号"
                                            class="bd-input"
                                        />
                                    </div>
                                </div>
                                <div
                                    class="fx align-items justify-between mt-30 bd-bottom"
                                >
                                    <div class="fs-12">
                                        <input
                                            type="text"
                                            v-model="smsCode"
                                            placeholder="获取并输入验证码"
                                            class="bd-input"
                                        />
                                    </div>
                                    <div class="btn-verify">
                                        <input
                                            type="button"
                                            class="getNumber"
                                            v-model="codeMsg"
                                            @click="sendSms"
                                            :disabled="codeDisabled"
                                        />
                                    </div>
                                </div>
                                <div class="mt-30 bd-bottom" v-if="next === 2">
                                    <input
                                        type="password"
                                        v-model="pwd"
                                        placeholder="请输入新密码"
                                        class="bd-input"
                                    />
                                </div>
                                <div
                                    v-if="next === 1"
                                    class="verify-next-btn"
                                    :class="smsCode !== '' ? 'active' : ''"
                                    @click="pwdNext"
                                >
                                    下一步
                                </div>
                                <div
                                    v-if="next === 2"
                                    class="verify-next-btn"
                                    :class="pwd !== '' ? 'active' : ''"
                                    @click="forgotPassword"
                                >
                                    提交
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-if="num === 2" class="padding-15">
                    <div class="fw-700 fs-18">我的资料</div>
                    <div class="mt-30 c-9">昵称：</div>
                    <div>
                        <input
                            type="text"
                            v-model="userName"
                            class="input"
                            style="width: 370px"
                        />
                    </div>
                    <div class="fx">
                        <div>
                            <div class="c-9">性别：</div>
                            <div>
                                <select v-model="sex">
                                    <option value="0">保密</option>
                                    <option value="1">男</option>
                                    <option value="2">女</option>
                                </select>
                            </div>
                        </div>
                        <div class="ml-20">
                            <div class="c-9">出生日期：</div>
                            <div>
                                <input
                                    type="date"
                                    class="input"
                                    v-model="birthday"
                                />
                            </div>
                        </div>
                    </div>
                    <div class="update-sumbit" @click="updateUserInfo">
                        保存更改
                    </div>
                </div>
                <div v-if="num === 3" class="padding-15">
                    <div class="fs-18 fw-700 mb-20">系统消息</div>
                    <div class="ta-c" style="margin-top: 20%">
                        <div><img src="../../assets/image/null.png" /></div>
                        <div class="mt-10 c-9">暂无数据哦～</div>
                    </div>
                </div>
                <div v-if="num === 4" class="padding-15">
                    <div class="fs-18 fw-700 mb-20">我的关注</div>
                    <div
                        v-if="userAnchorList.length !== 0"
                        class="mt-20"
                        v-for="(item, index) in userAnchorList"
                        @click="toPage('room', item.roomId)"
                    >
                        <div class="fx align-items">
                            <div>
                                <img
                                    :src="item.anchorAvatar"
                                    class="anchor-img"
                                />
                            </div>
                            <div>
                                <div class="ml-10 fs-16 fw-700">
                                    {{ item.anchorName }}
                                </div>
                                <div class="ml-10 fs-12 c-9 mt-5">
                                    {{ item.roomAnnouncement }}
                                </div>
                            </div>
                        </div>
                        <div class="matchCutImg1">
                            <div class="fw-700">{{ item.roomName }}</div>
                            <div class="mt-10">
                                <img
                                    :src="item.matchCutImg"
                                    style="
                                        width: 200px;
                                        height: 112px;
                                        border-radius: 5px;
                                    "
                                />
                            </div>
                            <div
                                v-if="item.liveStatus === 1"
                                class="liveing bg-yellow"
                            >
                                直播中
                            </div>
                            <div
                                v-if="item.liveStatus === 0"
                                class="liveing bg-gary"
                            >
                                已结束
                            </div>
                        </div>
                    </div>
                    <div
                        v-if="userAnchorList.length === 0"
                        class="ta-c"
                        style="margin-top: 20%"
                    >
                        <div><img src="../../assets/image/null.png" /></div>
                        <div class="mt-10 c-9">暂无数据哦～</div>
                    </div>
                </div>
                <div v-if="num === 5" class="padding-15">
                    <div
                        v-if="userReserveMatchList.length !== 0"
                        v-for="(item, index) in userReserveMatchList"
                        :key="index"
                    >
                        <div class="fs-16 fw-700 mb-15">
                            {{ item.matchTime }}
                        </div>
                        <div
                            class="match-card fx justify-between"
                            v-for="(item2, index2) in item.matchInfos"
                            :key="index2"
                        >
                            <div class="fx align-items match-left">
                                <div>
                                    <div class="fs-16">
                                        {{ item2.matchShortName }}
                                    </div>
                                    <div class="fs-18 fw-700 mt-10">
                                        {{ item2.matchTime }}
                                    </div>
                                </div>
                                <div style="margin-left: 10%">
                                    <div class="fx align-items">
                                        <div class="ml-10 fs-16">
                                            {{ item2.homeTeam.teamName }}
                                        </div>
                                        <div>
                                            <img
                                                :src="item2.homeTeam.teamIcon"
                                                class="match-img"
                                            />
                                        </div>
                                        <div class="mr-10 ml-10 fs-24 fw-700">
                                            VS
                                        </div>
                                        <div>
                                            <img
                                                :src="item2.awayTeam.teamIcon"
                                                class="match-img"
                                            />
                                        </div>
                                        <div class="ml-10 fs-16">
                                            {{ item2.awayTeam.teamName }}
                                        </div>
                                    </div>
                                </div>
                                <div class="fx align-items" v-if="item2.guides">
                                    <div
                                        v-for="(value, i) in item2.guides"
                                        :key="i"
                                        @click="toPage('room', value.roomId)"
                                    >
                                        <img
                                            class="guides-img"
                                            :src="value.avatar"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="fx align-items mr-20">
                                <div>
                                    <img
                                        src="../../assets/image/triangle.png"
                                        width="10px"
                                    />
                                </div>
                                <div class="ml-5" v-if="item2.status === 1">
                                    直播中...
                                </div>
                                <div class="ml-5" v-if="item2.status === 2">
                                    未开始...
                                </div>
                                <div class="ml-5" v-if="item2.status === 3">
                                    已结束...
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        v-if="userReserveMatchList.length === 0"
                        class="ta-c"
                        style="margin-top: 20%"
                    >
                        <div><img src="../../assets/image/null.png" /></div>
                        <div class="mt-10 c-9">暂无数据哦～</div>
                    </div>
                </div>
                <div v-if="num === 6" class="padding-15">
                    <div class="fx justify-between align-items">
                        <div class="fw-700 fs-18">我的反馈</div>
                        <div
                            class="blue cursor"
                            @click="goToFeedback"
                            v-if="!isFeedback"
                        >
                            <img
                                src="../../assets/image/feedback-btn.png"
                                class="mr-5"
                            />去反馈
                        </div>
                    </div>
                    <div class="" v-if="isFeedback">
                        <div>
                            反馈类型：<select
                                class="live-input"
                                v-model="requestType"
                            >
                                <option :value="956">建议</option>
                                <option :value="957">错误</option>
                                <option :value="958">其他</option>
                            </select>
                        </div>
                        <div>
                            <textarea
                                placeholder="请尽量详细描述你要反馈的问题，以便我们尽快为你解决"
                                v-model="contactDetails"
                                maxlength="500"
                                class="feedback-textarea"
                            ></textarea>
                        </div>
                        <div class="mt-20">联系方式(QQ、SKYPE、邮件地址):</div>
                        <div class="mt-10">
                            <input
                                type="text"
                                placeholder="方便我们的工作人员尽快联系您"
                                v-model="feedbackText"
                                class="live-input"
                            />
                        </div>
                        <div class="fx align-items mt-20">
                            <div class="mr-10">可上传图片：</div>
                            <el-upload
                                class="upload-demo ml-10"
                                :action="'http://hszhibo.live/excuse/file/fileUpload'"
                                :on-remove="handleRemove"
                                :on-change="handleChange"
                                :headers="headers"
                                :file-list="fileList"
                                list-type="picture"
                            >
                                <el-button size="small" type="primary"
                                    >点击上传</el-button
                                >
                            </el-upload>
                        </div>
                        <div class="mt-30 fx justify-center">
                            <div class="next-btn" @click="userFeedback">
                                提交反馈
                            </div>
                        </div>
                    </div>
                    <div class="pb-10" v-if="!isFeedback">
                        <div
                            v-if="userFeedbackList.length !== 0"
                            v-for="(item, index) in userFeedbackList"
                            :key="index"
                            class="feed-bottom"
                        >
                            <div>
                                <img
                                    src="../../assets/image/feedback-item.png"
                                    class="mr-10"
                                />{{ item.contactDetails }}
                            </div>
                        </div>
                        <div
                            v-if="userFeedbackList.length === 0"
                            class="ta-c"
                            style="margin-top: 20%"
                        >
                            <div><img src="../../assets/image/null.png" /></div>
                            <div class="mt-10 c-9">暂无数据哦～</div>
                        </div>
                    </div>
                </div>
                <div v-if="num === 7" class="padding-15">
                    <div class="fw-700 fs-18">我的直播</div>
                    <div class="my-live mt-20">
                        <div :class="isLive === 1 ? 'active' : ''">
                            1 配置直播信息
                        </div>
                        <div :class="isLive === 2 ? 'active' : ''">
                            2 房间信息配置
                        </div>
                        <div :class="isLive === 3 ? 'active' : ''">
                            3 已开播
                        </div>
                    </div>
                    <div class="mt-20" v-if="isLive === 1">
                        <div>
                            <span class="c-9">安装直播软件：</span
                            ><a
                                href="https://obsproject.com/zh-cn/download"
                                target="_blank"
                                >下载OBS软件</a
                            >
                        </div>
                        <div class="mt-20">
                            <span class="c-9">推流服务器地址：</span
                            ><span>{{ pushData.serverUrl }}</span>
                        </div>
                        <div class="mt-20">
                            <span class="c-9">串流密钥：</span
                            ><span>{{ pushData.userPushUrl }}</span>
                        </div>
                        <div class="mt-20">
                            <img src="../../assets/image/smallf0759989.png" />
                        </div>
                        <div class="mt-20 fx justify-center">
                            <div class="next-btn" @click="getNext(2)">
                                下一步
                            </div>
                        </div>
                    </div>
                    <div class="mt-20" v-if="isLive === 2 || isLive === 3">
                        <div class="red fs-12" v-if="isLive === 3">
                            提示: 恭喜您已经开播了！您还可以在下方修改房间信息
                        </div>
                        <div>
                            <span class="c-9">直播标题：</span
                            ><input
                                type="text"
                                class="live-input"
                                v-model="roomName"
                            />
                        </div>
                        <div>
                            <span class="c-9">分类：</span>
                            <select
                                class="live-input"
                                v-model="type"
                                @change="getMatchListByType(type)"
                            >
                                <option
                                    v-for="(item, index) in matchTypeData"
                                    :key="index"
                                    :value="item.sportsId"
                                >
                                    {{ item.sportsName }}
                                </option>
                            </select>
                        </div>
                        <div>
                            <span class="c-9">赛事：</span
                            ><select class="live-input" v-model="matchId">
                                <option
                                    v-for="(item, index) in matchListByTypeData"
                                    :key="index"
                                    :value="item.matchId"
                                >
                                    {{ item.time }}({{ item.matchShortName }}){{
                                        item.matchName
                                    }}
                                    &nbsp;{{
                                        item.home.teamName
                                    }}&nbsp;VS&nbsp;{{ item.away.teamName }}
                                </option>
                            </select>
                        </div>
                        <div class="fx">
                            <div class="c-9">公告：</div>
                            <div>
                                <textarea
                                    class="live-input"
                                    v-model="roomAnnouncement"
                                ></textarea>
                            </div>
                        </div>
                        <div class="fx mt-20">
                            <div class="c-9">封面图：</div>
                            <el-upload
                                class="upload-demo ml-10"
                                :action="'http://hszhibo.live/excuse/file/fileUpload'"
                                :on-remove="handleRemove"
                                :on-change="handleChange"
                                :headers="headers"
                                :file-list="fileList"
                                list-type="picture"
                            >
                                <el-button size="small" type="primary"
                                    >点击上传</el-button
                                >
                            </el-upload>
                            <span class="red">{{ erro }}</span>
                        </div>
                        <div class="mt-20" v-if="roomCutImgdata !== ''">
                            <img :src="roomCutImgdata" width="100%" />
                        </div>
                        <div
                            class="mt-20 fx justify-center"
                            v-if="isLive === 2"
                        >
                            <div class="next-btn" @click="createOrEditRoom(0)">
                                提交开播
                            </div>
                        </div>
                        <div
                            class="mt-20 fx align-items justify-center"
                            v-if="isLive === 3"
                        >
                            <div class="next-btn" @click="createOrEditRoom(0)">
                                提交修改
                            </div>
                            <div
                                class="next-btn ml-10"
                                @click="createOrEditRoom(1)"
                            >
                                关闭直播
                            </div>
                        </div>
                    </div>
                </div>
                <div v-if="num === 8"></div>
                <div v-if="num === 9" class="padding-15">
                    <div v-if="infoData.type === 0 && infoData.applying === 0">
                        <div class="fw-700 fs-18">申请成为主播</div>
                        <div class="mt-30">
                            真实姓名：<input
                                type="text"
                                class="input"
                                v-model="cardName"
                                style="width: 370px"
                            />
                        </div>
                        <div>
                            身份证号：<input
                                type="text"
                                class="input"
                                v-model="cardNo"
                                style="width: 370px"
                            />
                        </div>
                        <div class="fx mt-20">
                            <div class="c-9">身份证正面照片：</div>
                            <el-upload
                                class="upload-demo ml-10"
                                :action="'http://hszhibo.live/excuse/file/fileUpload'"
                                :on-remove="handleRemove"
                                :on-change="handleChange"
                                :headers="headers"
                                :file-list="fileList"
                                list-type="picture"
                            >
                                <el-button size="small" type="primary"
                                    >点击上传</el-button
                                >
                            </el-upload>
                        </div>
                        <div class="fx mt-20">
                            <div class="c-9">身份证反面照片：</div>
                            <el-upload
                                class="upload-demo ml-10"
                                :action="'http://hszhibo.live/excuse/file/fileUpload'"
                                :on-remove="handleRemove2"
                                :on-change="handleChange2"
                                :headers="headers"
                                :file-list="fileList2"
                                list-type="picture"
                            >
                                <el-button size="small" type="primary"
                                    >点击上传</el-button
                                >
                            </el-upload>
                        </div>
                        <div class="red mt-30">{{ erro }}</div>
                        <div class="mt-20 fx justify-center">
                            <div class="next-btn" @click="userApplyAnchor">
                                提交
                            </div>
                        </div>
                    </div>
                    <div
                        v-if="infoData.applying === 1"
                        class="fx align-items justify-center"
                    >
                        <div style="margin-top: 20%" class="ta-c">
                            <div>
                                <img src="../../assets/image/chengg.png" />
                            </div>
                            <div
                                class="fs-36 fw-700 mt-30"
                                style="color: #f8c21b"
                            >
                                已提交主播申请，等待审核！
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <v-footer class="mt-30"></v-footer>
    </div>
</template>

<script>
import footer from '../../components/footer/index.vue';
import ProgressBar from 'vue-simple-progress';
import { Cookie } from '../../api/cookie';
export default {
    name: 'index',
    data() {
        return {
            num: 1,
            userName: '',
            cardName: '',
            erro: '',
            cardNo: '',
            pushData: [],
            userFeedbackList: [],
            // 是否禁用按钮
            codeDisabled: false,
            // 倒计时秒数
            countdown: 60,
            // 按钮上的文字
            codeMsg: '获取验证码',
            pwd: '',
            type: '',
            matchId: '',
            isLeft: true,
            next: 1,
            sex: 0,
            smsCode: '',
            phone: '',
            roomName: '',
            roomAnnouncement: '',
            roomCutImg: '',
            roomCutImgdata: '',
            requestType: 956,
            feedbackText: '',
            contactDetails: '',
            isFeedback: false,
            isLive: 1,
            isInfo: 1,
            roomId: '',
            isshow: false,
            birthday: '',
            infoData: [],
            fileList: [],
            fileList2: [],
            pushStreamUrl: [],
            matchTypeData: [],
            userAnchorList: [],
            userReserveMatchList: [],
            matchListByTypeData: [],
            headers: {
                token: Cookie.get('token'),
            },
        };
    },
    components: {
        ProgressBar,
        'v-footer': footer,
    },
    mounted() {
        if (this.$route.query.pwd) {
            this.isLeft = false;
            this.isInfo = 3;
        } else {
            this.getInfo();
        }
        if (this.$route.query.num) {
            this.num = this.$route.query.num;
            if (this.num === 4) {
                this.userGetAnchorList();
            } else if (this.num === 5) {
                this.userGetReserveMatch();
            }
        }
    },
    methods: {
        pwdNext() {
            this.next = 2;
        },
        // 修改密码
        forgotPassword() {
            let param = {
                password: this.pwd,
                phone: this.phone,
                smsCode: this.smsCode,
            };
            this.$axios('post', '/user/forgotPassword', param).then((res) => {
                if (res.code === 200) {
                    this.$message({
                        type: 'success',
                        message: '修改成功',
                    });
                    if (Cookie.get('token')) {
                        this.loginOut();
                    } else {
                        this.login(this.pwd, this.phone);
                    }
                }
            });
        },
        login(password, phone) {
            let param = {
                password: password,
                phone: phone,
            };
            this.$axios('post', '/user/loginByPc', param).then((res) => {
                if (res.code === 200) {
                    Cookie.set('token', res.data);
                    this.$router.push({
                        name: 'home',
                        query: { token: res.data },
                    });
                    location.reload();
                } else {
                    this.$message({
                        type: 'warning',
                        message: res.msg,
                    });
                }
            });
        },
        loginOut() {
            this.$axios('post', '/user/loginOut').then((res) => {
                if (res.code === 200) {
                    Cookie.remove('token');
                    this.$router.push({ name: 'home' });
                }
            });
        },
        // 验证手机
        updatePhoneSt() {
            if (this.smsCode === '') {
                this.$message({
                    type: 'warning',
                    message: '请输入验证码',
                });
            } else {
                let param = {
                    smsCode: this.smsCode,
                };
                this.$axios('post', '/user/updatePhoneSt', param).then(
                    (res) => {
                        if (res.code === 200) {
                            this.next = 2;
                            this.phone = '';
                            this.smsCode = '';
                        }
                    },
                );
            }
        },
        // 绑定手机
        updatePhoneNd() {
            if (this.smsCode === '') {
                this.$message({
                    type: 'warning',
                    message: '请输入验证码',
                });
            } else {
                let param = {
                    phone: this.phone,
                    smsCode: this.smsCode,
                };
                this.$axios('post', '/user/updatePhoneByApp', param).then(
                    (res) => {
                        if (res.code === 200) {
                            this.$message({
                                type: 'success',
                                message: '绑定成功',
                            });
                            Cookie.remove('token');
                            this.$router.push({ name: 'home' });
                        }
                    },
                );
            }
        },
        // 发送验证码
        sendSms() {
            if (this.verificationPhone()) {
                let param = {
                    phone: this.phone,
                };
                this.$axios('post', '/user/sendSms', param).then((res) => {
                    if (res.code === 200) {
                    }
                });
                this.getCode();
            }
        },
        // 获取验证码
        getCode() {
            // 验证码60秒倒计时
            // if (!this.timer) {
            this.timer = setInterval(() => {
                if (this.countdown > 0 && this.countdown <= 60) {
                    this.countdown--;
                    if (this.countdown !== 0) {
                        this.codeMsg = this.countdown + 'S';
                        this.codeDisabled = true;
                    } else {
                        clearInterval(this.timer);
                        this.codeMsg = '获取验证码';
                        this.countdown = 60;
                        this.timer = null;
                        this.codeDisabled = false;
                    }
                }
            }, 1000);
            // }
        },
        verificationPhone() {
            var phone = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;
            if (this.phone === '') {
                this.$message({
                    type: 'warning',
                    message: '请输入手机号',
                });
                return false;
            } else if (!phone.test(this.phone)) {
                this.$message({
                    type: 'warning',
                    message: '您输入的手机格式不正确',
                });
                return false;
            } else {
                return true;
            }
        },
        toPage(name, id) {
            let routeData = this.$router.resolve({
                name: name,
                query: { id: id },
            });
            window.open(routeData.href, '_blank');
            // this.$router.push({name: name, query: {id: id}})
        },
        goToFeedback() {
            this.isFeedback = true;
        },
        changeInfo(num) {
            this.isInfo = num;
            this.phone = this.infoData.phone;
        },
        // 上传身份证
        handleChange2(file, fileList) {
            this.fileList2 = fileList.slice(-1);
        },
        handleRemove2(file, fileList) {
            console.log(file, fileList);
        },
        // 上传封面
        handleChange(file, fileList) {
            this.fileList = fileList.slice(-1);
        },
        handleRemove(file, fileList) {
            console.log(file, fileList);
        },
        // 上传头像
        handleAvatarSuccess(res, file) {
            // this.imageUrl = URL.createObjectURL(file.raw)
            // console.log(file.response.data)
            let param = {
                avatarUrl: file.response.data,
            };
            this.$axios('post', '/user/editUserAvatar', param).then((res) => {
                if (res.code === 200) {
                    this.getInfo();
                    this.isshow = false;
                }
            });
        },
        // 上传头像尺寸
        beforeAvatarUpload(file) {
            const isLt2M = file.size / 1024 / 1024 < 2;
            if (!isLt2M) {
                this.$message.error('上传头像图片大小不能超过 2MB!');
            }
            return isLt2M;
        },
        // 移入
        mouseover() {
            clearTimeout(this.timer);
            this.isshow = true;
        },
        // 移出
        mouseleave() {
            this.timer = setTimeout(() => {
                this.isshow = false;
            }, 100);
        },
        checkTab(num) {
            this.num = num;
            this.fileList = [];
            this.fileList2 = [];
            this.isFeedback = false;
            this.isInfo = 1;
            if (num === 7) {
                this.getRoomInfoByUser();
                this.getPushStreamUrl(this.infoData.id);
            }
            if (num === 4) {
                this.userGetAnchorList();
            }
            if (num === 5) {
                this.userGetReserveMatch();
            }
            if (num === 6) {
                this.getUserFeedbackList();
            }
        },
        // 获取用户信息
        getInfo() {
            this.$axios('post', '/user/userInfo').then((res) => {
                if (res.code === 200) {
                    this.infoData = res.data;
                    this.userName = this.infoData.userName;
                    this.sex = this.infoData.sex;
                    this.birthday = this.infoData.birthday;
                }
            });
        },
        // 获取直播间信息
        getRoomInfoByUser() {
            this.$axios('post', '/anchor/getRoomInfoByUser').then((res) => {
                if (res.code === 200) {
                    this.getMatchType();
                    if (res.data) {
                        this.isLive = 3;
                        this.roomId = res.data.roomId;
                        this.roomName = res.data.roomName;
                        this.roomAnnouncement = res.data.roomAnnouncement;
                        this.roomCutImgdata = res.data.roomCutImg;
                        this.type = res.data.matchType;
                        this.getMatchListByType(this.type);
                        this.matchId = res.data.matchId;
                    } else {
                        this.isLive = 1;
                        this.roomId = '';
                        this.roomName = '';
                        this.roomAnnouncement = '';
                        this.type = '';
                        this.matchId = '';
                    }
                }
            });
        },
        // 获取比赛类型
        getMatchType() {
            this.$axios('post', '/anchor/getMatchType').then((res) => {
                if (res.code === 200) {
                    this.matchTypeData = res.data;
                }
            });
        },
        // 获取赛事详情
        getMatchListByType(id) {
            let param = {
                id: id,
            };
            this.$axios('post', '/anchor/getMatchListByType', param).then(
                (res) => {
                    if (res.code === 200) {
                        this.matchListByTypeData = res.data;
                    }
                },
            );
        },
        // 修改我的资料
        updateUserInfo() {
            let param = {
                birthday: this.birthday,
                description: '',
                nickName: this.userName,
                sex: this.sex,
            };
            this.$axios('post', '/user/editUserInfo', param).then((res) => {
                if (res.code === 200) {
                    this.getInfo();
                    this.$message({
                        type: 'success',
                        message: '修改成功',
                    });
                }
            });
        },
        // 下一步
        getNext(num) {
            this.isLive = num;
        },
        // 创建我的直播间
        createOrEditRoom(deleted) {
            if (this.fileList.length !== 0) {
                this.roomCutImgdata = this.fileList[0].response.data;
            }
            if (this.roomCutImgdata === '') {
                this.erro = '必须上传封面图';
            } else {
                this.erro = '';
                let param = {
                    matchId: this.matchId,
                    roomAnnouncement: this.roomAnnouncement,
                    roomCutImg: this.roomCutImgdata,
                    roomId: this.roomId || '',
                    roomName: this.roomName,
                    type: this.type,
                    deleted: deleted,
                };
                this.$axios('post', '/anchor/createOrEditRoom', param).then(
                    (res) => {
                        if (res.code === 200) {
                            this.isLive = 3;
                            this.fileList = [];
                            this.getRoomInfoByUser();
                            this.$message({
                                type: 'success',
                                message: '恭喜您已经开播了',
                            });
                        }
                    },
                );
            }
        },
        // 我的预约
        userGetReserveMatch() {
            this.$axios('post', '/match/userGetReserveMatch').then((res) => {
                if (res.code === 200) {
                    this.userReserveMatchList = res.data.matchLists;
                }
            });
        },
        // 我的关注
        userGetAnchorList() {
            this.$axios('post', '/match/userGetAnchorList').then((res) => {
                if (res.code === 200) {
                    this.userAnchorList = res.data;
                }
            });
        },
        // 获取推流地址
        getPushStreamUrl(id) {
            this.$axios('post', '/anchor/createPushUrl').then((res) => {
                if (res.code === 200) {
                    this.pushData = res.data;
                }
            });
        },
        // 提交反馈
        userFeedback() {
            let img = '';
            if (this.fileList.length !== 0) {
                img = this.fileList[0].response.data;
            }
            let param = {
                contactDetails: this.contactDetails,
                feedbackImg: img,
                feedbackText: this.feedbackText,
                id: 0,
                requestType: this.requestType,
            };
            this.$axios('post', '/user/userFeedback', param).then((res) => {
                if (res.code === 200) {
                    this.$message({
                        type: 'success',
                        message: '提交成功！',
                    });
                    this.contactDetails = '';
                    this.feedbackText = '';
                    this.fileList = [];
                    this.getUserFeedbackList();
                }
            });
        },
        // 验证身份证、图片
        isCardNoAndImg() {
            // 身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X
            var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
            if (reg.test(this.cardNo) === false) {
                this.erro = '请输入正确的身份证！';
                return false;
            } else if (this.fileList.length === 0) {
                this.erro = '请上传身份证正面照！';
                return false;
            } else if (this.fileList2.length === 0) {
                this.erro = '请上传身份证反面照！';
                return false;
            } else {
                this.erro = '';
                return true;
            }
        },
        // 申请成为主播
        userApplyAnchor() {
            if (this.isCardNoAndImg()) {
                let param = {
                    cardPhotoPositive: this.fileList[0].response.data,
                    cardPhotoReverse: this.fileList2[0].response.data,
                    idCard: this.cardNo,
                    name: this.cardName,
                };
                this.$axios('post', '/user/userApplyAnchor', param).then(
                    (res) => {
                        if (res.code === 200) {
                            this.infoData.applying = 1;
                            this.cardNo = '';
                            this.cardName = '';
                            this.fileList = [];
                            this.fileList2 = [];
                        }
                    },
                );
            }
        },
        // 获取我的反馈列表
        getUserFeedbackList() {
            this.$axios('post', '/user/getUserFeedbackList').then((res) => {
                if (res.code === 200) {
                    this.userFeedbackList = res.data;
                    this.isFeedback = false;
                }
            });
        },
    },
};
</script>

<style scoped>
.red {
    color: red;
}
.blue {
    color: blue;
}
.my {
    padding-top: 2%;
    padding-left: 10%;
    padding-right: 10%;
    min-height: 100vh;
}
.room-left {
    width: 15%;
    background: white;
    margin-right: 10px;
    text-align: center;
}
.room-right {
    width: 85%;
    background: white;
}
.title {
    line-height: 77px;
    font-size: 22px;
    font-weight: 600;
    cursor: default;
    border-bottom: 1px solid #ddd;
}
.item {
    line-height: 50px;
    cursor: pointer;
}
.active {
    background: #caa05f !important;
    color: white !important;
}
.info-btn {
    background: #caa05f;
    color: white;
    padding: 5px 10px;
    cursor: pointer;
}
.update-sumbit {
    background: #caa05f;
    color: white;
    width: 100px;
    text-align: center;
    line-height: 30px;
    margin-top: 50px;
    cursor: pointer;
}
.my-header-img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
}
.ta-r {
    text-align: right;
}
.padding-15 {
    padding: 30px 50px;
}
.update-btn {
    width: 80px;
    line-height: 30px;
    border: 1px solid #bcbcbc;
    text-align: center;
    color: #777;
    cursor: pointer;
}
.live-input {
    width: 300px;
    border: 1px solid #eaeaea !important;
    border-radius: 5px;
    line-height: 30px;
}
.feedback-textarea {
    width: 100%;
    height: 200px;
    padding: 5px 10px;
    border: 1px solid #eaeaea !important;
    border-radius: 5px;
}
.pro-bar {
    width: 400px;
    margin-right: 10px;
}
.live {
    background: rgb(187, 187, 187);
    font-size: 13px;
    font-weight: 600;
    padding: 0px 3px;
    color: white;
}
.border-right {
    border-right: 1px solid #eaeaea;
}
.border-bottom {
    border-bottom: 1px solid #eaeaea;
    margin-top: 50px;
    margin-bottom: 50px;
}
.feed-bottom {
    border-bottom: 1px solid #eaeaea;
    padding-top: 30px;
    padding-bottom: 20px;
}
.live-li {
    width: 220px;
    margin-top: 30px;
}
.fs-20 {
    font-size: 20px;
}
.my-info-box {
    width: 49%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid #eaeaea;
    padding: 30px;
}
.input {
    border: 1px solid #eaeaea !important;
    line-height: 30px;
    margin-top: 15px;
    margin-bottom: 20px;
    padding: 5px 10px;
}
select {
    width: 180px;
    border: 1px solid #eaeaea !important;
    line-height: 20px;
    margin-top: 15px;
    margin-bottom: 20px;
    padding: 5px 10px;
    outline: none;
}
.upload {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgb(0, 0, 0, 0.6);
    position: fixed;
    color: white;
}
.upload img {
    width: 30px;
}
.my-live {
    display: flex;
    justify-content: center;
}
.my-live > div {
    width: 35%;
    line-height: 38px;
    background: #eee;
    color: #999;
    text-align: center;
}
.next-btn {
    background: #caa05f;
    width: 80px;
    line-height: 35px;
    border-radius: 30px;
    color: white;
    text-align: center;
    cursor: pointer;
}
.match-img {
    width: 30px;
}
.match-card {
    background: white;
    margin-bottom: 12px;
    border-top: 1px solid #eaeaea;
    border-left: 1px solid #eaeaea;
    border-bottom: 1px solid #eaeaea;
    border-right: solid 7px #caa05f;
    border-radius: 4px;
    padding-top: 30px;
    padding-bottom: 30px;
    padding-left: 5%;
}
.match-left {
    width: 80%;
}
.dot-line {
    width: 140px;
    border: dashed 0.5px #a4a4a4;
    margin: 0 10px;
}
.process-box {
    width: 100%;
    line-height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f6f6f6;
    margin-top: 20px;
}
.verify-identity-box {
    width: 300px;
}
.btn-verify {
    width: 74px;
    height: 27px;
    font-size: 12px;
    text-align: center;
    padding-top: 5px;
    margin-bottom: 10px;
    background: #efefef;
    border-radius: 4px;
    cursor: pointer;
}
.anchor-img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
}
.matchCutImg1 {
    width: 300px;
    margin-left: 60px;
    margin-top: 20px;
}

.liveing {
    width: 100px;
    line-height: 40px;
    text-align: center;
    border-radius: 3px;
    margin-top: 20px;
}
.bg-yellow {
    background: #caa05f;
    color: white;
}
.bg-gary {
    background: #efefef;
    color: #a4a4a4;
}
.guides-img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    margin-left: 20px;
}
.li-active {
    width: 10px;
    height: 10px;
    background: #caa05f;
    border-radius: 50%;
    margin-right: 10px;
}
.bd-input {
    border: none !important;
    outline: none;
    line-height: 40px;
}
.verify-next-btn {
    width: 300px;
    line-height: 40px;
    background: #efefef;
    text-align: center;
    margin-top: 80px;
}
</style>
<style>
.vue-simple-progress {
    height: 10px !important;
    border-radius: 10px;
}
.vue-simple-progress-bar {
    height: 10px !important;
    border-radius: 10px;
}
</style>
