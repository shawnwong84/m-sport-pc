<!--
 * @version:  ;
 * @description:  ;
 * @autor: Full
 * @date: Do not edit
-->
<template>
    <div class="my-feedback">
        <div class="my-head">
            <div class="title">我的反馈</div>
        </div>
        <div class="feedback-nav" @click="toFeedback">
            <i class="el-icon-edit-outline"></i>
            <span> 去反馈 </span>
        </div>
        <template v-if="userFeedbackList.length > 0">
            <div class="feedback-list" v-if="!isFeedback">
                <div
                    class="feedback-list-item"
                    v-for="(item, index) in userFeedbackList"
                    :key="index"
                >
                    <img
                        src="../../../assets/image/my/message-icon.png"
                        alt=""
                    />
                    <span>{{ item.contactDetails }}</span>
                </div>
            </div>
        </template>

        <noData v-else-if="userFeedbackList.length == 0 && !isFeedback"></noData>
        <div class="feedback-form" v-if="isFeedback">
            <el-form
                :model="feedbackParams"
                ref="userValidateForm"
                label-width="100px"
                class="demo-ruleForm"
            >
                <el-form-item
                    label="反馈类型"
                    prop="requestType"
                    :rules="[{ required: true, message: '请选择反馈类型' }]"
                    :style="{
                        width: '260px',
                    }"
                >
                    <el-select
                        v-model="feedbackParams.requestType"
                        placeholder="请选择反馈类型"
                    >
                        <el-option label="建议" value="956"> </el-option>
                        <el-option label="错误" value="957"> </el-option>
                        <el-option label="其他" value="958"> </el-option>
                    </el-select>
                </el-form-item>

                <el-form-item
                    label="反馈内容"
                    prop="contactDetails"
                    :rules="[{ required: true, message: '反馈内容不能为空' }]"
                    :style="{
                        width: '580px',
                    }"
                >
                    <el-input
                        v-model="feedbackParams.contactDetails"
                        placeholder="请尽量详细描述你要反馈的问题，以便我们尽快为你解决"
                        type="textarea"
                    ></el-input>
                </el-form-item>

                <el-form-item
                    label="联系方式"
                    prop="feedbackText"
                    :style="{
                        width: '580px',
                    }"
                >
                    <el-input
                        v-model="feedbackParams.feedbackText"
                        placeholder="方便我们的工作人员尽快联系您（QQ、SKYPE、邮件地址）"
                        maxlength="40"
                    ></el-input>
                </el-form-item>

                <el-form-item
                    label="截图"
                    prop="feedbackImg"
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
                        <div v-if="feedbackParams.feedbackImg" class="card-img">
                            <img :src="feedbackParams.feedbackImg" alt="" />
                        </div>
                        <el-button size="small" type="primary" v-else
                            >点击上传</el-button
                        >
                    </el-upload>
                </el-form-item>
                <el-form-item>
                    <el-button
                        type="primary"
                        @click="submitForm('userValidateForm')"
                        >提交</el-button
                    >
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
import noData from '../../../components/noData';
export default {
    name: 'myFeedback',
    data() {
        return {
            userFeedbackList: [],
            isFeedback: false,
            feedbackParams: {
                contactDetails: '',
                feedbackImg: '',
                feedbackText: '',
                requestType: '',
            },
            imagePrefix: '',
        };
    },
    components: {
        noData,
    },
    watch: {},
    mounted() {
        this.getUserFeedbackList();
        this.getImagePrefix();
    },
    methods: {
        // 获取我的反馈列表
        getUserFeedbackList() {
            this.$axios('post', '/user/getUserFeedbackList').then((res) => {
                if (res.code === 200) {
                    this.userFeedbackList = res.data;
                }
            });
        },
        toFeedback() {
            this.isFeedback = true;
        },
        //上传截图
        uploadImage(param) {
            console.log(param);
            const formData = new FormData();
            formData.append('file', param.file);
            this.$axios('post', '/file/fileUpload', formData).then((res) => {
                if (res.code === 200) {
                    this.feedbackParams.feedbackImg =
                        this.imagePrefix + res.data;
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

        //提交反馈
        submitForm(formName) {
            this.$refs[formName].validate((valid, value) => {
                if (valid) {
                    let param = {
                        ...this.feedbackParams,
                        id: 0,
                    };
                    this.$axios('post', '/user/userFeedback', param).then(
                        (res) => {
                            if (res.code === 200) {
                                this.$message({
                                    type: 'success',
                                    message: '提交成功！',
                                });
                                this.isFeedback = false;
                                this.getUserFeedbackList();
                                this.feedbackParams = {
                                    contactDetails: '',
                                    feedbackImg: '',
                                    feedbackText: '',
                                    requestType: '',
                                };
                            } else {
                                this.$message({
                                    type: 'erroe',
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
    },
};
</script>

<style scoped lang="scss">
.my-feedback {
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
    .feedback-nav {
        position: absolute;
        top: 20px;
        right: 30px;
        font-size: 16px;
        font-weight: bold;
        color: $primary-color;
        cursor: pointer;
    }
    .feedback-list {
        width: 100%;
        margin-top: 20px;
        &-item {
            @include flexStartCenter();
            margin-bottom: 15px;
        }
    }
    .feedback-form {
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
}
</style>
