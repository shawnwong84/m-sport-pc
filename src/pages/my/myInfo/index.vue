<!--
 * @version:  ;
 * @description:  ;
 * @autor: Full
 * @date: Do not edit
-->
<template>
    <div class="my-info">
        <div class="my-head">
            <div class="title">我的资料</div>
        </div>
        <div class="info-content">
            <el-form
                :model="getUserInfo"
                ref="userValidateForm"
                label-width="100px"
                class="demo-ruleForm"
            >
                <el-form-item
                    label="昵称"
                    prop="userName"
                    :rules="[{ required: true, message: '昵称不能为空' }]"
                    :style="{
                        width: '400px',
                    }"
                >
                    <el-input v-model="getUserInfo.userName"></el-input>
                </el-form-item>
                <el-form-item
                    label="生日"
                    prop="birthday"
                    :rules="[{ required: true, message: '请选择出生年月日' }]"
                    :style="{
                        width: '400px',
                    }"
                >
                    <el-date-picker
                        type="date"
                        placeholder="选择日期"
                        v-model="getUserInfo.birthday"
                        style="width: 100%"
                    ></el-date-picker>
                </el-form-item>
                <el-form-item
                    label="性别"
                    prop="sex"
                    :rules="[{ required: true, message: '请选择性别' }]"
                    :style="{
                        width: '220px',
                    }"
                >
                    <el-select
                        v-model="getUserInfo.sex"
                        placeholder="请选择性别"
                    >
                        <el-option label="保密" :value="0"></el-option>
                        <el-option label="男" :value="1"></el-option>
                        <el-option label="女" :value="2"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-button
                        type="primary"
                        @click="submitForm('userValidateForm')"
                        >保存</el-button
                    >
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
    name: 'myInfo',
    data() {
        return {};
    },
    components: {},
    computed: {
        ...mapGetters({
            getUserInfo: 'getUserInfo',
        }),
    },
    watch: {},
    mounted() {},
    methods: {
        ...mapActions({
            setUserInfo: 'setUserInfo',
        }),
        submitForm(formName) {
            this.$refs[formName].validate((valid, value) => {
                if (valid) {
                    let param = {
                        birthday: this.getUserInfo.birthday,
                        description: '',
                        nickName: this.getUserInfo.userName,
                        sex: this.getUserInfo.sex,
                    };
                    this.$axios('post', '/user/editUserInfo', param).then(
                        (res) => {
                            if (res.code === 200) {
                                this.getInfo();
                                this.$message({
                                    type: 'success',
                                    message: '修改成功',
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
        getInfo() {
            this.$axios('post', '/user/userInfo').then((res) => {
                if (res.code === 200) {
                    this.infoData = res.data;
                    this.setUserInfo(res.data);
                }
            });
        },
    },
};
</script>

<style scoped lang="scss">
.my-info {
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
    .info-content {
        width: 100%;
        margin-top: 30px;
    }
}
</style>
