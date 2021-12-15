<template>
    <div>
        <div class="header-modal" v-if="isShow === 1 || isShow === 2"></div>
        <div class="login-window" v-if="isShow === 1">
            <div>
                <img src="../../assets/image/angle.png" class="angle" />
                <img
                    src="../../assets/image/close.png"
                    class="close"
                    @click="closeLogin"
                />
            </div>
            <div class="window-inner">
                <div class="fs-22 fw-700">登录</div>
                <div class="fx align-items txt-box mt-30 bd-bottom">
                    <div>+86</div>
                    <div class="fs-12 ml-10">
                        <input
                            type="text"
                            v-model="phone"
                            placeholder="请输入手机号码"
                            maxlength="11"
                        />
                    </div>
                </div>
                <div
                    class="mt-30 txt-box bd-bottom fx align-items justify-between"
                >
                    <div class="fs-12">
                        <input
                            type="password"
                            v-if="isEye === 1"
                            v-model="password"
                            placeholder="请输入6-16位登录密码"
                        />
                        <input
                            type="text"
                            v-if="isEye === 2"
                            v-model="password"
                            placeholder="请输入6-16位登录密码"
                        />
                    </div>
                    <div>
                        <img
                            v-if="isEye === 1"
                            src="../../assets/image/pwd-yc.png"
                            width="30px"
                            @click="checkEye"
                        />
                        <img
                            v-if="isEye === 2"
                            src="../../assets/image/yincan.png"
                            width="30px"
                            @click="checkEye"
                        />
                    </div>
                </div>
                <div class="fx justify-between align-items mt-20">
                    <div>
                        <span
                            ><img
                                src="../../assets/image/gou.png"
                                class="gou"
                                :class="isGou === 1 ? '' : 'gou-cl'"
                                @click="checkGou"
                        /></span>
                        <span class="fs-12">登录即代表你已同意</span>
                        <span
                            class="fs-12 ffb600 cursor"
                            @click="toPage('agreement')"
                            >《用户服务协议》</span
                        >
                    </div>
                    <div class="fs-12 c-9 cursor" @click="toMy">忘记密码</div>
                </div>
                <div class="red fs-12" v-if="isRead">请仔细阅读并勾选协议</div>
                <div class="fx justify-between mt-50">
                    <div class="cursor" @click="checkReg">
                        <a>注册新账号</a>
                    </div>
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
                </div>
            </div>
        </div>
        <div class="reg-window" v-if="isShow === 2">
            <div>
                <img src="../../assets/image/angle.png" class="angle" />
                <img
                    src="../../assets/image/close.png"
                    class="close"
                    @click="closeReg"
                />
            </div>
            <div class="window-inner">
                <div class="fs-22 fw-700">注册</div>
                <div class="fx align-items txt-box mt-30 bd-bottom">
                    <div>+86</div>
                    <div class="fs-12 ml-10">
                        <input
                            type="text"
                            v-model="phone"
                            placeholder="请输入手机号码"
                            maxlength="11"
                        />
                    </div>
                </div>
                <div
                    class="fx align-items justify-between txt-box mt-30 bd-bottom"
                >
                    <div class="fs-12">
                        <input
                            type="text"
                            v-model="smsCode"
                            placeholder="获取并输入验证码"
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
                <div class="mt-30 txt-box bd-bottom">
                    <div class="fs-12">
                        <input
                            type="text"
                            v-model="nickName"
                            placeholder="请输入用户名"
                        />
                    </div>
                </div>
                <div
                    class="mt-30 txt-box bd-bottom fx align-items justify-between"
                >
                    <div class="fs-12">
                        <input
                            type="password"
                            v-if="isEye === 1"
                            v-model="password"
                            placeholder="请输入6-16位登录密码"
                        />
                        <input
                            type="text"
                            v-if="isEye === 2"
                            v-model="password"
                            placeholder="请输入6-16位登录密码"
                        />
                    </div>
                    <div>
                        <img
                            v-if="isEye === 1"
                            src="../../assets/image/pwd-yc.png"
                            width="30px"
                            @click="checkEye"
                        />
                        <img
                            v-if="isEye === 2"
                            src="../../assets/image/yincan.png"
                            width="30px"
                            @click="checkEye"
                        />
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
                        class="fs-12 ffb600 cursor"
                        @click="toPage('agreement')"
                        >《用户服务协议》</span
                    >
                </div>
                <div class="red fs-12" v-if="isRead">请仔细阅读并勾选协议</div>
                <div class="fx justify-between mt-50">
                    <div class="cursor" @click="checkLogin">
                        <a>登录账号</a>
                    </div>
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
                </div>
            </div>
        </div>
    </div>
</template>

<script>
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
    props: ['isShow'],
    methods: {
        toPage(name) {
            this.$emit('dialogVisibleEvent', 0);
            this.$router.push({ name: name });
        },
        toMy() {
            this.$emit('dialogVisibleEvent', 0);
            this.$router.push({ name: 'my', query: { pwd: 1 } });
        },
        checkLogin() {
            this.$emit('dialogVisibleEvent', 1);
        },
        checkReg() {
            this.$emit('dialogVisibleEvent', 2);
        },
        closeLogin() {
            this.$emit('dialogVisibleEvent', 0);
        },
        closeReg() {
            this.$emit('dialogVisibleEvent', 0);
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
                !(this.password.length > 6 && this.password.length < 16)
            ) {
                this.$message({
                    type: 'warning',
                    message: '请输入6-16位密码',
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

<style scoped>
.yellow {
    color: #ce9e6c;
}
.header-modal {
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background: rgba(0, 0, 0, 0.7);
    z-index: 101;
}
.login-window {
    position: fixed;
    width: 400px;
    background: #fff;
    border-radius: 4px;
    top: 20%;
    left: 50%;
    transform: translateX(-50%);
    z-index: 102;
}
.reg-window {
    position: fixed;
    width: 400px;
    background: #fff;
    border-radius: 4px;
    top: 20%;
    left: 50%;
    transform: translateX(-50%);
    z-index: 102;
}
.angle {
    float: left;
    width: 28px;
    height: 28px;
    border-top-left-radius: 4px;
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
    padding: 42px 50px 29px;
}
.txt-box {
    height: 30px;
}
.gou {
    width: 13px;
    opacity: 0.2;
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
.submit {
    width: 108px;
    height: 36px;
    padding-top: 7px;
    background: #efefef;
    border-radius: 4px;
    text-align: center;
    font-size: 16px;
    color: #777;
    cursor: default;
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
.active {
    color: #fff;
    background: linear-gradient(132deg, #fbcfa1 0%, #ce9e6c 100%);
}

.red {
    color: red;
}
.bd-bottom {
    border-bottom: 1px solid #bcbcbc;
}
</style>
