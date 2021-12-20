<template>
    <div class="down-box">
        <div class="down-left">
            <div class="down-phone-bg">
                <img src="../../assets/image/down/phone-bg.png" alt="" />
            </div>
            <div></div>
        </div>
        <div class="down-right">
    
        </div>
    </div>
</template>

<script>
export default {
    name: 'index',
    data() {
        return {
            ios: '',
            android: '',
        };
    },

    mounted() {
        this.$axios('get', '/download/getDownAddress').then((res) => {
            if (res.code === 200) {
                this.android = res.data.android;
                this.ios = res.data.ios;
            }
        });
    },
    methods: {
        down(type) {
            if (type === 1) {
                window.location.href = this.android;
            } else {
                window.location.href = this.ios;
            }
        },
    },
};
</script>

<style lang="scss" scoped>
.down-box {
    width: 100%;
    height: 100%;
    @include bgurl('../../assets/image/down/down_bg.png');
    background-attachment: fixed;
    @include flexCenterWrap();
    .down-left {
        width: 700px;
        height: 813px;
        position: relative;
        .down-phone-bg {
            width: 263px;
            height: 569px;
            position: absolute;
            z-index: 1;
            right: 0;
            top: 30px;
            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
    }
    .down-right{
        width: 800px;
        height: 800px;
       
    }
}
</style>
