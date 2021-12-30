<!--
 * @version:  ;
 * @description:  ;
 * @autor: Full
 * @date: Do not edit
-->
<template>
    <div class="my-anchor">
        <div class="my-head">
            <div class="title">我的直播</div>
        </div>
        <div class="anchor-content">
            <div class="anchor-step">
                <el-steps :active="active" finish-status="success">
                    <el-step title="配置直播信息"> </el-step>
                    <el-step title="配置房间信息"></el-step>
                    <el-step title="已开播"></el-step>
                </el-steps>
            </div>
            <div class="step-content1" v-if="active == 1">
                <div class="cell-item">
                    <span>安装直播软件:</span>
                    <span>
                        <a
                            href="https://obsproject.com/zh-cn/download"
                            target="_blank"
                            >下载OBS软件</a
                        ></span
                    >
                </div>
                <div class="cell-item">
                    <span>推流服务器地址：</span>
                    <p>
                        {{ pushData.serverUrl }}
                    </p>
                </div>
                <div class="cell-item">
                    <span>串流密钥：</span>
                    <p>{{ pushData.userPushUrl }}</p>
                </div>
                <div class="hint">
                    <img src="../../../assets/image/smallf0759989.png" alt="" />
                </div>
            </div>
            <div class="step-content2" v-if="active == 2">
                <el-form
                    :model="pushParams"
                    ref="userValidateForm"
                    label-width="100px"
                    class="demo-ruleForm"
                >
                    <el-form-item
                        label="直播标题"
                        prop="roomName"
                        :rules="[
                            { required: true, message: '直播标题不能为空' },
                        ]"
                        :style="{
                            width: '400px',
                        }"
                    >
                        <el-input
                            v-model="pushParams.roomName"
                            placeholder="请输入直播标题"
                            maxlength="40"
                        ></el-input>
                    </el-form-item>

                    <el-form-item
                        label="分类"
                        prop="type"
                        :rules="[{ required: true, message: '请选择分类' }]"
                        :style="{
                            width: '220px',
                        }"
                    >
                        <el-select
                            v-model="pushParams.type"
                            placeholder="请选择分类"
                            @change="getMatchListByType(pushParams.type)"
                        >
                            <el-option
                                :label="item.sportsName"
                                :value="+item.sportsId"
                                v-for="item in matchTypeData"
                                :key="item.sportsId"
                            >
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item
                        label="赛事"
                        prop="type"
                        :rules="[{ required: true, message: '请选择赛事' }]"
                        :style="{
                            width: '220px',
                        }"
                    >
                        <el-select
                            v-model="pushParams.matchId"
                            placeholder="请选择赛事"
                        >
                            <el-option
                                :label="item.matchName"
                                :value="item.matchId"
                                v-for="item in matchListByTypeData"
                                :key="item.sportsId"
                            >
                                <span>
                                    {{ item.time }} &nbsp;{{
                                        item.matchName
                                    }}
                                    &nbsp;{{
                                        item.home.teamName
                                    }}&nbsp;VS&nbsp;{{
                                        item.away.teamName
                                    }}</span
                                >
                            </el-option>
                        </el-select>
                    </el-form-item>

                    <el-form-item
                        label="公告"
                        prop="roomAnnouncement"
                        :rules="[
                            { required: true, message: '公告内容不能为空' },
                        ]"
                        :style="{
                            width: '400px',
                        }"
                    >
                        <el-input
                            v-model="pushParams.roomAnnouncement"
                            placeholder="请输入公告内容"
                            type="textarea"
                            maxlength="100"
                        ></el-input>
                    </el-form-item>

                    <el-form-item
                        label="封面图"
                        prop="roomCutImg"
                        :rules="[
                            {
                                required: true,
                                message: '封面图不能为空',
                            },
                        ]"
                        :style="{
                            width: '400px',
                        }"
                    >
                        <el-upload
                            action=""
                            :http-request="uploadImage"
                            multiple
                            list-type="picture"
                            :show-file-list="false"
                        >
                            <div v-if="pushParams.roomCutImg" class="card-img">
                                <img :src="pushParams.roomCutImg" alt="" />
                            </div>
                            <el-button size="small" type="primary" v-else
                                >点击上传</el-button
                            >
                        </el-upload>
                    </el-form-item>
                    <el-form-item>
                        <el-button
                            type="primary"
                            v-if="alreadyLive"
                            @click="submitForm('userValidateForm', 1)"
                            >关闭直播</el-button
                        >
                    </el-form-item>
                </el-form>
            </div>
            <div class="step-content3" v-if="active == 3">
                <el-result icon="success" title="提交成功"> </el-result>
            </div>
            <div class="next-btn" v-if="active < 3">
                <el-button @click="next" type="primary">{{
                    nextText
                }}</el-button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'myAnchor',
    data() {
        return {
            active: 1,
            pushData: {},
            pushParams: {
                roomName: '',
                type: '',
                matchId: '',
                roomAnnouncement: '',
                roomCutImg: '',
                roomId: '',
            },
            matchTypeData: [],
            matchListByTypeData: [],
            imagePrefix: '',
            isLive: 0,
            liveStatus: {
                0: '提交开播',
                1: '提交修改',
            },
            nextText: '下一步',
            alreadyLive: false,
        };
    },
    components: {},
    watch: {},
    mounted() {
        this.getPushStreamUrl();
        this.getMatchType();
        this.getImagePrefix();
        this.getRoomInfoByUser();
    },
    methods: {
        next() {
            this.active++;
            if (this.active > 3) {
                return;
            }
            if (this.active == 3) {
                if (!this.isLive) {
                    this.active = 2;
                }
                this.submitForm('userValidateForm', 0);
                return;
            }
        },
        // 获取推流地址
        getPushStreamUrl() {
            this.$axios('post', '/anchor/createPushUrl').then((res) => {
                if (res.code === 200) {
                    this.pushData = res.data;
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
        // 获取赛事类型
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

        // 获取直播间信息
        getRoomInfoByUser() {
            this.$axios('post', '/anchor/getRoomInfoByUser').then((res) => {
                if (res.code === 200) {
                    if (res.data) {
                        this.alreadyLive = true;
                        this.pushParams.roomId = res.data.roomId;
                        this.pushParams.roomName = res.data.roomName;
                        this.pushParams.roomAnnouncement =
                            res.data.roomAnnouncement;
                        this.pushParams.roomCutImg = res.data.roomCutImg;
                        this.pushParams.type = res.data.matchType;
                        this.getMatchListByType(this.pushParams.type);
                        this.pushParams.matchId = res.data.matchId;
                    }
                }
            });
        },
        //配置房间信息

        submitForm(formName, deleted) {
            this.$refs[formName].validate((valid, value) => {
                if (valid) {
                    let param = {
                        ...this.pushParams,
                        deleted: deleted,
                    };
                    this.$axios('post', '/anchor/createOrEditRoom', param).then(
                        (res) => {
                            if (res.code === 200) {
                                this.$message({
                                    type: 'success',
                                    message: '提交成功',
                                });
                                this.active = 3;
                                this.isLive = 1;
                            } else {
                                this.$message({
                                    type: 'error',
                                    message: res.msg,
                                });
                            }
                        },
                    );
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },

        //上传封面图
        uploadImage(param) {
            console.log(param);
            const formData = new FormData();
            formData.append('file', param.file);
            this.$axios('post', '/file/fileUpload', formData).then((res) => {
                if (res.code === 200) {
                    this.pushParams.roomCutImg = this.imagePrefix + res.data;
                }
            });
        },
        //获取图片前缀
        getImagePrefix() {
            this.$axios('post', '/file/getImagePrefix').then((res) => {
                if (res.code === 200) {
                    this.imagePrefix = res.data;
                }
            });
        },
    },
};
</script>

<style scoped lang="scss">
.my-anchor {
    width: 100%;
    @include flexColumnStart();
    position: relative;
    .my-head {
        width: 100%;
        height: 52px;
        border-bottom: 1px solid $primary-color;
        .title {
            width: 150px;
            height: 52px;
            background: linear-gradient(90deg, #ff8d86 0%, #f8413d 100%);
            border-radius: 8px 0px 0px 0px;
            @include flexCenter();
            font-weight: 500;
            color: #ffffff;
            font-size: 16px;
        }
    }
    .anchor-content {
        width: 100%;
        padding: 16px 36px;
        .anchor-step {
            margin-top: 20px;
            width: 100%;
        }
        .step-content1 {
            width: 100%;
            margin-top: 20px;

            .cell-item {
                @include flexStartCenter();
                margin-bottom: 20px;
                span,
                p {
                    font-size: 14px;
                }
                a {
                    color: $primary-color;
                }
            }
            .hint {
                width: 800px;
                img {
                    width: 100%;
                    height: auto;
                }
            }
        }
        .step-content2 {
            width: 100%;
            margin-top: 20px;
            .card-img {
                width: 300px;
                height: 200px;
                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }
        }
        .step-content3 {
            width: 100%;
            margin-top: 20px;
        }
        .next-btn {
            width: 100%;
            @include flexCenter();
            margin-top: 50px;
        }
    }
}
</style>
