<!--
 * @version:  ;
 * @description:  ;
 * @autor: Full
 * @date: Do not edit
-->
<template>
    <div class="my-home">
        <div class="my-head">
            <div class="title">基本资料</div>
        </div>
        <div class="change-info-btn" @click="toPage('/my/myInfo')">
            修改资料
        </div>
        <div class="user-content">
            <div class="user-info-top">
                <div class="user-avatar">
                    <img :src="getUserInfo.avatarUrl" alt="" />
                </div>

                <span class="user-name">{{ getUserInfo.userName }}</span>
                <div class="user-level">
                    <div class="level">Lv{{ getUserInfo.level }}</div>
                    <progress-bar
                        bar-color="linear-gradient(180deg, #FDE23A 0%, #F9C11B 100%)"
                        :val="getUserInfo.level"
                        class="progress-bar"
                    ></progress-bar>
                    <div class="num">{{ getUserInfo.level }}/100</div>
                </div>
                <div class="user-attribute">
                    <div class="attribute-item">
                        <span class="value">Lv.{{ getUserInfo.level }}</span>
                        <span class="title">等级</span>
                    </div>
                    <div class="attribute-item">
                        <span class="value">{{ getUserInfo.experience }}</span>
                        <span class="title">经验值</span>
                    </div>
                    <div class="attribute-item">
                        <span class="value">{{ getUserInfo.experience }}</span>
                        <span class="title">金币</span>
                    </div>
                </div>
                <div class="user-account">
                    <div class="account-title">账户管理</div>
                    <div class="account-change">
                        <div class="change-item">
                            <div class="change-icon">
                                <img
                                    src="../../../assets/image/my/phone-icon.png"
                                    alt=""
                                />
                            </div>
                            <div class="change-title">
                                <span class="title">我的手机</span>
                                <span class="des">已经绑定手机号码</span>
                            </div>
                            <div class="change-btn" @click="openPhoneDialog">
                                更换手机
                            </div>
                        </div>
                        <div class="change-item">
                            <div class="change-icon">
                                <img
                                    src="../../../assets/image/my/lock-icon.png"
                                    alt=""
                                />
                            </div>
                            <div class="change-title">
                                <span class="title">我的密码</span>
                                <span class="des">已经设置密码</span>
                            </div>
                            <div class="change-btn" @click="openPasswordDialog">
                                更换密码
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <el-dialog
            title="更换手机"
            :visible.sync="phoneVisible"
            width="600px"
            :close-on-click-modal="false"
        >
            <div class="form-box">
                <div class="form-item">
                    <span class="form-label">手机号：</span>
                    <el-input v-model="getUserInfo.phone" disabled></el-input>
                </div>
                <div class="form-item">
                    <span class="form-label">验证码：</span>
                    <el-input
                        placeholder="请输入验证码"
                        v-model="smsCode"
                        maxlength="6"
                    ></el-input>
                    <el-button
                        type="primary"
                        class="sms-btn"
                        @click="sendSms"
                        >{{ codeMsg }}</el-button
                    >
                </div>
                <div class="form-item">
                    <el-button
                        type="primary"
                        class="sub-btn"
                        @click="updatePhoneNd"
                    >
                        确定
                    </el-button>
                </div>
            </div>
        </el-dialog>
        <el-dialog
            title="更换密码"
            :visible.sync="passwordVisible"
            width="600px"
            :close-on-click-modal="false"
        >
            <div class="form-box">
                <div class="form-item">
                    <span class="form-label">手机号：</span>
                    <el-input v-model="getUserInfo.phone" disabled></el-input>
                </div>
                <div class="form-item">
                    <span class="form-label">验证码：</span>
                    <el-input
                        placeholder="请输入验证码"
                        v-model="smsCode"
                        maxlength="6"
                    ></el-input>
                    <el-button
                        type="primary"
                        class="sms-btn"
                        @click="sendSms"
                        >{{ codeMsg }}</el-button
                    >
                </div>
                <div class="form-item">
                    <span class="form-label">密码：</span>
                    <el-input v-model="password" show-password></el-input>
                </div>
                <div class="form-item">
                    <el-button
                        type="primary"
                        class="sub-btn"
                        @click="forgotPassword"
                    >
                        确定
                    </el-button>
                </div>
            </div>
        </el-dialog>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import ProgressBar from 'vue-simple-progress';
export default {
    name: 'myHome',
    data() {
        return {
            phoneVisible: false,
            passwordVisible: false,
            codeMsg: '获取验证码',
            countdown: 60,
            smsCode: '',
            password: '',
        };
    },
    components: {
        ProgressBar,
    },
    watch: {},
    computed: {
        ...mapGetters({
            getUserInfo: 'getUserInfo',
        }),
    },
    mounted() {},
    methods: {
        toPage(path) {
            this.$router.push(path);
        },
        openPhoneDialog() {
            this.phoneVisible = !this.phoneVisible;
            this.timer = null;
            this.countdown = 60;
            this.smsCode = '';
        },
        openPasswordDialog() {
            this.passwordVisible = !this.passwordVisible;
            this.timer = null;
            this.countdown = 60;
            this.smsCode = '';
        },
        // 发送验证码
        sendSms() {
            if (!this.timer) {
                let param = {
                    phone: this.getUserInfo.phone,
                };
                this.$axios('post', '/user/sendSms', param).then((res) => {
                    if (res.code === 200) {
                        this.$message({
                            type: 'success',
                            message: '发送验证码成功',
                        });
                        this.getCode();
                    } else {
                        this.$message({
                            type: 'error',
                            message: res.msg,
                        });
                    }
                });
            }
        },
        // 获取验证码
        getCode() {
            this.timer = setInterval(() => {
                if (this.countdown > 0 && this.countdown <= 60) {
                    this.countdown--;
                    if (this.countdown !== 0) {
                        this.codeMsg = this.countdown + 'S';
                    } else {
                        clearInterval(this.timer);
                        this.codeMsg = '获取验证码';
                        this.countdown = 60;
                        this.timer = null;
                    }
                }
            }, 1000);
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
                    phone: this.getUserInfo.phone,
                    smsCode: this.smsCode,
                };
                this.$axios('post', '/user/updatePhoneByApp', param).then(
                    (res) => {
                        if (res.code === 200) {
                            this.$message({
                                type: 'success',
                                message: '绑定成功,请重新登录',
                            });
                            this.openPasswordDialog();
                            this.loginOut();
                        } else {
                            this.$message({
                                type: 'error',
                                message: res.msg,
                            });
                        }
                    },
                );
            }
        },
        // 修改密码
        forgotPassword() {
            if (this.smsCode === '') {
                this.$message({
                    type: 'warning',
                    message: '请输入验证码',
                });
                return;
            }
            if (this.password === '') {
                this.$message({
                    type: 'warning',
                    message: '请输入密码',
                });
                return;
            }
            let param = {
                password: this.password,
                phone: this.getUserInfo.phone,
                smsCode: this.smsCode,
            };
            this.$axios('post', '/user/forgotPassword', param).then((res) => {
                if (res.code === 200) {
                    this.$message({
                        type: 'success',
                        message: '修改成功，请重新登录',
                    });
                    this.openPasswordDialog();
                    this.loginOut();
                } else {
                    this.$message({
                        type: 'error',
                        message: res.msg,
                    });
                }
            });
        },
        loginOut() {
            this.$axios('post', '/user/loginOut').then((res) => {
                if (res.code === 200) {
                    Cookie.remove('token');
                    this.$router.push('/');
                }
            });
        },
    },
};
</script>

<style scoped lang="scss">
.my-home {
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
    .change-info-btn {
        position: absolute;
        right: 30px;
        top: 80px;
        z-index: 1;
        width: 76px;
        height: 30px;
        border: 1px solid #605656;
        @include flexCenter();
        color: #605656;
        cursor: pointer;
        font-size: 14px;
    }
    .user-info-top {
        width: 100%;
        margin-top: 89px;
        @include flexColumnCenter();
        .user-avatar {
            width: 102px;
            height: 102px;
            margin-bottom: 15px;
            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                border-radius: 50%;
            }
        }
        .user-name {
            color: #333333;
            font-weight: 600;
            font-size: 20px;
        }
        .user-level {
            width: 600px;
            margin-top: 61px;
            @include flexCenter();
            .level {
                padding: 2px 6px;
                height: 18px;
                background: #c2c2c2;

                color: #ffffff;
                font-size: 12px;
            }
            .progress-bar {
                flex: 1;
                margin: 0 9px;
                height: 12px;
                ::v-deep {
                    .vue-simple-progress-bar {
                        height: 12px !important;
                    }
                }
            }
            .num {
                color: #333333;
                font-size: 16px;
            }
        }
        .user-attribute {
            @include flexCenter();
            margin-top: 50px;
            .attribute-item {
                @include flexColumnCenter();
                padding: 0 129px;
                height: 40px;
                &:not(:last-child) {
                    border-right: 1px solid #e3e3e3;
                }
                .value {
                    color: #333333;
                    font-size: 24px;
                    display: block;
                    margin-bottom: 5px;
                    font-weight: bold;
                }
                .value {
                    color: #333333;
                    font-size: 20px;
                }
            }
        }
        .user-account {
            margin-top: 60px;
            width: 100%;
            padding: 0 42px;
            .account-title {
                width: 122px;
                height: 52px;
                border-radius: 4px;
                border: 1px solid #f8413d;
                @include flexCenter();
                font-size: 20px;
                color: $primary-color;

                font-weight: 500;
            }
            .account-change {
                width: 100%;
                margin-top: 64px;
                @include flexBetweenCenter();
                .change-item {
                    width: 380px;
                    height: 143px;
                    border: 1px solid #dcdcdc;
                    @include flexCenter();
                    padding: 0 28px 0 23px;
                    .change-icon {
                        width: 76px;
                        height: 76px;
                        img {
                            width: 100%;
                            height: 100%;

                            object-fit: cover;
                        }
                    }
                    .change-title {
                        @include flexColumnStart2();
                        flex: 1;
                        margin-left: 14px;
                        .title {
                            font-weight: 500;
                            color: #333333;
                            font-size: 18px;
                            display: block;
                            margin-bottom: 5px;
                        }
                        .des {
                            font-size: 14px;
                            color: #605656;
                        }
                    }
                    .change-btn {
                        width: 76px;
                        height: 30px;
                        background: #f8413d;
                        @include flexCenter();
                        font-size: 14px;
                        color: #ffffff;
                        cursor: pointer;
                    }
                }
            }
        }
    }
}
.form-box {
    width: 100%;
    @include flexColumnStart();
    padding: 0 90px;
    .form-item {
        width: 100%;
        @include flexCenter();
        margin: 14px 0;
        .form-label {
            white-space: nowrap;
            display: block;
            min-width: 56px;
        }
        .sms-btn {
            margin-left: 30px;
        }
        .sub-btn {
            width: 200px;
            margin-top: 50px;
        }
    }
}
</style>
