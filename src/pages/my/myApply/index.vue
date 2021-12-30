<!--
 * @version:  ;
 * @description:  ;
 * @autor: Full
 * @date: Do not edit
-->
<template>
    <div class="my-anchor">
        <div class="my-head">
            <div class="title">主播申请</div>
        </div>
        <div class="anchor-form" v-if="getUserInfo.applying == 0">
            <el-form
                :model="cardInfo"
                ref="cardValidateForm"
                label-width="160px"
                class="demo-ruleForm"
            >
                <el-form-item
                    label="真实姓名"
                    prop="cardName"
                    :rules="[
                        { required: true, message: '真实姓名不能为空' },
                        {
                            pattern: /^(?:[\u4e00-\u9fa5·]{2,16})$/,
                            message: '请输入正确的姓名',
                        },
                    ]"
                    :style="{
                        width: '400px',
                    }"
                >
                    <el-input
                        v-model="cardInfo.cardName"
                        maxlength="10"
                    ></el-input>
                </el-form-item>
                <el-form-item
                    label="身份证号"
                    prop="cardNum"
                    :rules="[
                        { required: true, message: '身份证号不能为空' },
                        {
                            pattern:
                                /^\d{6}((((((19|20)\d{2})(0[13-9]|1[012])(0[1-9]|[12]\d|30))|(((19|20)\d{2})(0[13578]|1[02])31)|((19|20)\d{2})02(0[1-9]|1\d|2[0-8])|((((19|20)([13579][26]|[2468][048]|0[48]))|(2000))0229))\d{3})|((((\d{2})(0[13-9]|1[012])(0[1-9]|[12]\d|30))|((\d{2})(0[13578]|1[02])31)|((\d{2})02(0[1-9]|1\d|2[0-8]))|(([13579][26]|[2468][048]|0[048])0229))\d{2}))(\d|X|x)$/,
                            message: '请输入正确的身份证号码',
                        },
                    ]"
                    :style="{
                        width: '400px',
                    }"
                >
                    <el-input
                        v-model="cardInfo.cardNum"
                        maxlength="20"
                    ></el-input>
                </el-form-item>
                <el-form-item
                    label="身份证正面照片"
                    prop="cardPhotoPositive"
                    :rules="[
                        { required: true, message: '身份证正面照片不能为空' },
                    ]"
                    :style="{
                        width: '400px',
                    }"
                >
                    <el-upload
                        class="upload-demo"
                        action=""
                        :http-request="uploadImageP"
                        multiple
                        list-type="picture"
                        :show-file-list="false"
                    >
                        <div v-if="cardInfo.cardPhotoPositive" class="card-img">
                            <img
                                :src="imagePrefix + cardInfo.cardPhotoPositive"
                                alt=""
                            />
                        </div>
                        <el-button size="small" type="primary" v-else
                            >点击上传</el-button
                        >
                    </el-upload>
                </el-form-item>
                <el-form-item
                    label="身份证反面照片"
                    prop="cardPhotoReverse"
                    :rules="[
                        { required: true, message: '身份证反面照片不能为空' },
                    ]"
                    :style="{
                        width: '400px',
                    }"
                >
                    <el-upload
                        class="upload-demo"
                        action=""
                        :http-request="uploadImageR"
                        multiple
                        list-type="picture"
                        :show-file-list="false"
                    >
                        <div v-if="cardInfo.cardPhotoReverse" class="card-img">
                            <img
                                :src="imagePrefix + cardInfo.cardPhotoReverse"
                                alt=""
                            />
                        </div>

                        <el-button size="small" type="primary" v-else
                            >点击上传</el-button
                        >
                    </el-upload>
                </el-form-item>
                <el-form-item>
                    <el-button
                        type="primary"
                        @click="submitForm('cardValidateForm')"
                        >提交</el-button
                    >
                </el-form-item>
            </el-form>
        </div>
        <div v-if="getUserInfo.applying == 1" class="apply-status">
            <el-result
                icon="success"
                title="提交主播申请成功"
                subTitle="请耐心等待审核"
            >
            </el-result>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    name: 'myApply',
    data() {
        return {
            cardInfo: {
                cardNum: '',
                cardName: '',
                cardPhotoPositive: '',
                cardPhotoReverse: '',
            },
            imagePrefix: '',
        };
    },
    components: {},
    watch: {},
    mounted() {
        this.getImagePrefix();
    },
    computed: {
        ...mapGetters({
            getUserInfo: 'getUserInfo',
        }),
    },
    methods: {
        uploadImageP(param) {
            console.log(param);
            const formData = new FormData();
            formData.append('file', param.file);
            this.$axios('post', '/file/fileUpload', formData).then((res) => {
                if (res.code === 200) {
                    this.cardInfo.cardPhotoPositive = res.data;
                }
            });
        },
        uploadImageR(param) {
            console.log(param);
            const formData = new FormData();
            formData.append('file', param.file);
            this.$axios('post', '/file/fileUpload', formData).then((res) => {
                if (res.code === 200) {
                    this.cardInfo.cardPhotoReverse = res.data;
                }
            });
        },
        getImagePrefix() {
            this.$axios('post', '/file/getImagePrefix').then((res) => {
                if (res.code === 200) {
                    this.imagePrefix = res.data;
                }
            });
        },

        submitForm(formName) {
            this.$refs[formName].validate((valid, value) => {
                if (valid) {
                    let param = {
                        cardPhotoPositive: this.cardInfo.cardPhotoPositive,
                        cardPhotoReverse: this.cardInfo.cardPhotoReverse,
                        idCard: this.cardInfo.cardNum,
                        name: this.cardInfo.cardName,
                    };
                    this.$axios('post', '/user/userApplyAnchor', param).then(
                        (res) => {
                            if (res.code === 200) {
                                this.$message({
                                    type: 'success',
                                    message: '提交成功',
                                });
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
    .anchor-form {
        width: 100%;
        margin-top: 30px;
        .card-img {
            width: 240px;
            height: 151px;
            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
    }
    .apply-status {
        width: 100%;
        margin-top: 30px;
    }
}
</style>
