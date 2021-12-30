<template>
    <div>
        <div
            class="header-modal"
            v-if="getPermissionModal === 1 || getPermissionModal === 2"
        ></div>
        <div class="login-window" v-if="getPermissionModal === 1">
            <div>
                <img
                    src="../../assets/image/close.png"
                    class="close"
                    @click="closeLogin"
                />
            </div>
            <div class="window-inner">
                <div class="modal-title">登录</div>
                <div class="input-item">
                    <div class="common-input-left">+86</div>
                    <input
                        type="text"
                        v-model="phone"
                        placeholder="请输入手机号码"
                        maxlength="11"
                        class="phone-input"
                    />
                </div>
                <div class="input-item">
                    <div class="input-password">
                        <div class="common-input-left">
                            <img
                                src="../../assets/image/lock-icon.png"
                                alt=""
                                width="20px"
                            />
                        </div>
                        <input
                            type="password"
                            v-if="isEye === 1"
                            v-model="password"
                            placeholder="请输入6-16位登录密码"
                            maxlength="16"
                        />
                        <input
                            type="text"
                            v-if="isEye === 2"
                            v-model="password"
                            placeholder="请输入6-16位登录密码"
                            maxlength="16"
                        />
                        <div class="password-icon">
                            <img
                                v-if="isEye === 1"
                                src="../../assets/image/pwd-yc.png"
                                width="20px"
                                @click="checkEye"
                            />
                            <img
                                v-if="isEye === 2"
                                src="../../assets/image/yincan.png"
                                width="20px"
                                @click="checkEye"
                            />
                        </div>
                    </div>
                </div>
                <div class="fx justify-between align-items mt-20">
                    <div class="fx align-items">
                        <span
                            ><img
                                src="../../assets/image/gou.png"
                                class="gou"
                                :class="isGou === 1 ? '' : 'gou-cl'"
                                @click="checkGou"
                        /></span>
                        <span class="fs-12">登录即代表你已同意</span>
                        <span
                            class="fs-12 c-primary cursor"
                            @click="toPage('agreement')"
                            >《用户服务协议》</span
                        >
                    </div>
                    <div class="fs-12 c-9 cursor" @click="toMy">忘记密码</div>
                </div>
                <div class="red fs-12" v-if="isRead">请仔细阅读并勾选协议</div>
                <div class="sub-box">
                    <div
                        class="submit"
                        @click="loginByPc"
                        :class="
                            phone !== '' && password !== '' && isGou === 2
                                ? 'active'
                                : ''
                        "
                    >
                        登录
                    </div>
                    <div class="cursor sub-nav" @click="checkReg">
                        <a>注册新账号</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="reg-window" v-if="getPermissionModal === 2">
            <div>
                <img
                    src="../../assets/image/close.png"
                    class="close"
                    @click="closeReg"
                />
            </div>
            <div class="window-inner">
                <div class="modal-title">注册</div>
                <div class="input-item">
                    <div class="common-input-left">+86</div>

                    <input
                        type="text"
                        v-model="phone"
                        placeholder="请输入手机号码"
                        maxlength="11"
                        class="phone-input"
                    />
                </div>
                <div class="input-item">
                    <div class="send-input">
                        <div class="common-input-left">
                            <img
                                src="../../assets/image/code-icon.png"
                                alt=""
                                width="20px"
                            />
                        </div>
                        <input
                            type="text"
                            v-model="smsCode"
                            placeholder="请输入验证码"
                            maxlength="6"
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
                <div class="input-item">
                    <div class="common-input-left">
                        <img
                            src="../../assets/image/user-avatar-icon.png"
                            alt=""
                            width="20px"
                        />
                    </div>
                    <input
                        type="text"
                        v-model="nickName"
                        placeholder="请输入用户名"
                        class="name-input"
                    />
                </div>
                <div class="input-item">
                    <div class="input-password">
                        <div class="common-input-left">
                            <img
                                src="../../assets/image/lock-icon.png"
                                alt=""
                                width="20px"
                            />
                        </div>
                        <input
                            type="password"
                            v-if="isEye === 1"
                            v-model="password"
                            placeholder="请输入6-16位登录密码"
                            maxlength="16"
                        />
                        <input
                            type="text"
                            v-if="isEye === 2"
                            v-model="password"
                            placeholder="请输入6-16位登录密码"
                            maxlength="16"
                        />
                        <div class="password-icon">
                            <img
                                v-if="isEye === 1"
                                src="../../assets/image/pwd-yc.png"
                                width="20px"
                                @click="checkEye"
                            />
                            <img
                                v-if="isEye === 2"
                                src="../../assets/image/yincan.png"
                                width="20px"
                                @click="checkEye"
                            />
                        </div>
                    </div>
                </div>

                <div class="mt-20">
                    <span
                        ><img
                            src="../../assets/image/gou.png"
                            class="gou"
                            :class="isGou === 1 ? '' : 'gou-cl'"
                            @click="checkGou"
                    /></span>
                    <span class="fs-12">我已阅读并同意</span>
                    <span
                        class="fs-12 c-primary cursor"
                        @click="toPage('agreement')"
                        >《用户服务协议》</span
                    >
                </div>
                <div class="red fs-12" v-if="isRead">请仔细阅读并勾选协议</div>
                <div class="sub-box">
                    <div
                        class="submit"
                        :class="
                            password !== '' && phone !== '' && smsCode !== ''
                                ? 'active'
                                : ''
                        "
                        @click="getReg"
                    >
                        注册
                    </div>
                    <div class="cursor sub-nav" @click="checkLogin">
                        <a>登录账号</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import { Cookie } from '../../api/cookie';

export default {
    name: 'index',
    data() {
        return {
            isRead: false,
            isGou: 2,
            isEye: 1,
            // 是否禁用按钮
            codeDisabled: false,
            // 倒计时秒数
            countdown: 60,
            // 按钮上的文字
            codeMsg: '获取验证码',
            // 定时器
            timer: null,
            phone: '',
            smsCode: '',
            nickName: '',
            password: '',
        };
    },
    computed: { ...mapGetters(['getPermissionModal']) },
    methods: {
        ...mapMutations({
            setPermissionModal: 'setPermissionModal',
        }),
        toPage(name) {
            this.setPermissionModal(0);
            this.$router.push({ name: name });
        },
        toMy() {
            this.setPermissionModal(0);
            this.$router.push({ name: 'my', query: { pwd: 1 } });
        },
        checkLogin() {
            this.setPermissionModal(1);
        },
        checkReg() {
            this.setPermissionModal(2);
        },
        closeLogin() {
            this.setPermissionModal(0);
        },
        closeReg() {
            this.setPermissionModal(0);
        },
        checkGou() {
            if (this.isGou === 1) {
                this.isGou = 2;
                this.isRead = false;
            } else {
                this.isGou = 1;
            }
        },
        checkEye() {
            if (this.isEye === 1) {
                this.isEye = 2;
            } else {
                this.isEye = 1;
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
                        this.getCode();
                    }
                });
            }
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
        verificationPwd() {
            if (this.password === '') {
                this.$message({
                    type: 'warning',
                    message: '密码不可为空',
                });
                return false;
            } else if (
                (this.password.length < 6 && this.password.length > 18)
            ) {
                this.$message({
                    type: 'warning',
                    message: '请输入6-18位密码',
                });
                return false;
            } else {
                return true;
            }
        },
        verificationNull() {
            if (this.smsCode === '') {
                this.$message({
                    type: 'warning',
                    message: '请输入验证码',
                });
                return false;
            } else if (this.nickName === '') {
                this.$message({
                    type: 'warning',
                    message: '请输入昵称',
                });
                return false;
            } else {
                return true;
            }
        },
        // 登录
        loginByPc() {
            if (this.verificationPhone() && this.verificationPwd()) {
                if (this.isGou === 2) {
                    this.isRead = false;
                    let param = {
                        password: this.password,
                        phone: this.phone,
                    };
                    this.$axios('post', '/user/loginByPc', param).then(
                        (res) => {
                            if (res.code === 200) {
                                this.closeLogin();
                                Cookie.set('token', res.data);
                                this.token = Cookie.get('token');
                                this.$router.push({ name: 'home' });
                                location.reload();
                            } else {
                                this.$message({
                                    type: 'warning',
                                    message: res.msg,
                                });
                            }
                        },
                    );
                } else {
                    this.isRead = true;
                }
            }
        },
        // 获取验证码
        getCode() {
            // 验证码60秒倒计时
            if (!this.timer) {
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
            }
        },
        // 注册
        getReg() {
            if (
                this.verificationPhone() &&
                this.verificationNull() &&
                this.verificationPwd()
            ) {
                if (this.isGou === 2) {
                    this.isRead = false;
                    let param = {
                        channelId: 0,
                        nickName: this.nickName,
                        password: this.password,
                        phone: this.phone,
                        smsCode: this.smsCode,
                    };
                    this.$axios('post', '/user/registerByPc', param).then(
                        (res) => {
                            if (res.code === 200) {
                                Cookie.set('token', res.data);
                                this.closeReg();
                                this.token = Cookie.get('token');
                                this.$router.push({ name: 'home' });
                                location.reload();
                            } else {
                                this.$message({
                                    type: 'warning',
                                    message: res.msg,
                                });
                            }
                        },
                    );
                } else {
                    this.isRead = true;
                }
            }
        },
    },
};
</script>

<style scoped lang="scss">
.yellow {
    color: #ce9e6c;
}
.header-modal {
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background: rgba(0, 0, 0, 0.4);
    z-index: 998;
}
.login-window {
    position: fixed;
    width: 480px;
    background: #fff;
    border-radius: 20px;
    top: 20%;
    left: 50%;
    transform: translateX(-50%);
    z-index: 999;
}
.reg-window {
    position: fixed;
    width: 480px;
    background: #fff;
    border-radius: 20px;
    top: 20%;
    left: 50%;
    transform: translateX(-50%);
    z-index: 999;
}

.close {
    float: right;
    width: 14px;
    height: 14px;
    margin-top: 20px;
    margin-right: 20px;
    cursor: pointer;
}
.window-inner {
    padding: 42px 70px 60px;
    .modal-title {
        font-size: 22px;
        font-weight: 600;
        margin-bottom: 20px;
    }

    .input-item {
        width: 100%;
        height: 42px;
        @include flexCenter();
        position: relative;
        margin-bottom: 25px;

        input {
            border-radius: 8px;

            height: 42px;
            width: 100%;
            border-radius: 8px;
            background: transparent;
            outline: 1px solid #dfdcdc;
            border: none;
            font-size: 14px;
            color: #333333;
        }
        .phone-input {
            padding-left: 70px;
        }

        .common-input-left {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            z-index: 1;
            left: 0px;
            width: 50px;
            height: 100%;
            background: #f7f7f7;
            border-radius: 8px 0 0 8px;
            @include flexCenter();
            font-size: 14px;
            color: #8f8f8f;
        }
        .input-password {
            width: 100%;
            height: 42px;
            position: relative;

            input {
                padding-left: 70px;
                padding-right: 40px;
            }
            .password-icon {
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                z-index: 1;
                right: 0;
                width: 30px;
                height: 100%;
                @include flexCenter();
            }
        }
        .send-input {
            width: 200px;
            height: 100%;
            position: relative;
            input {
                padding-left: 70px;
                padding-right: 20px;
            }
        }
        .name-input {
            padding-left: 70px;
            padding-right: 20px;
        }
        .btn-verify {
            flex: 1;
            margin-left: 20px;
            height: 100%;
            input {
                color: #fff;
                font-size: 14px;
                background: linear-gradient(90deg, #ff8d86 0%, #f8413d 100%);
                outline: none;
            }
        }
    }
    .sub-box {
        margin-top: 50px;
        .submit {
            width: 100%;
            height: 46px;
            margin-bottom: 20px;
            cursor: pointer;
            background: #efefef;
            border-radius: 8px;
            @include flexCenter();
            &.active {
                color: #fff;
                background: linear-gradient(90deg, #ff8d86 0%, #f8413d 100%);
            }
        }
        .sub-nav {
            text-decoration: underline;
            color: $primary-color;
        }
    }
}
.txt-box {
    height: 30px;
}
.gou {
    width: 13px;
    opacity: 0.2;
    margin-right: 5px;
}
.gou-cl {
    opacity: 1;
}
.ffb600 {
    color: #ce9e6c;
}
.mt-50 {
    margin-top: 50px;
}

.red {
    color: $primary-color;
}
</style>
