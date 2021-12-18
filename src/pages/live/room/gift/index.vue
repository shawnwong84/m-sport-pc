<!--
 * @version:  ;
 * @description:  ;
 * @autor: Full
 * @date: Do not edit
-->
<template>
    <div class="gift-box">
        <div class="gift-content">
            <div class="gift-swiper-content">
                <div class="swiper-container gift-swiper">
                    <div class="swiper-wrapper gift-swiper-wrapper">
                        <div
                            class="swiper-slide gift-swiper-slide"
                            v-for="item in giftList"
                            :key="item.id"
                        >
                            <img :src="item.url" alt="" />
                        </div>
                    </div>
                </div>
                <div class="swiper-button-next gift-swiper-next"></div>
                <div class="swiper-button-prev gift-swiper-prev"></div>
            </div>
        </div>
        <div class="gold">
            <img src="../../../../assets/image/live/dou-b-cion.png" alt="" />
            <span>0</span>
        </div>
    </div>
</template>

<script>
import Swiper from 'swiper';
export default {
    name: 'index',
    data() {
        return {
            giftList: [
                {
                    id: 1,
                    url: require('../../../../assets/image/live/gift1.png'),
                },
                {
                    id: 2,
                    url: require('../../../../assets/image/live/gift2.png'),
                },
                {
                    id: 3,
                    url: require('../../../../assets/image/live/gift3.png'),
                },
                {
                    id: 4,
                    url: require('../../../../assets/image/live/gift4.png'),
                },
                {
                    id: 5,
                    url: require('../../../../assets/image/live/gift5.png'),
                },
            ],
        };
    },
    components: {},
    watch: {},
    mounted() {
        this.giftSwiper();
    },
    methods: {
        giftSwiper() {
            new Swiper('.gift-swiper', {
                navigation: {
                    //左右分页
                    nextEl: '.gift-swiper-next',
                    prevEl: '.gift-swiper-prev',
                },
                slidesPerView: 5,
                slidesPerGroup: 5,
                spaceBetween: 7,
            });
        },
    },
};
</script>

<style scoped lang="scss">
.gift-box {
    width: 100%;
    height: 77px;
    @include flexEndCenter();
    .gift-content {
        width: 380px;
        @include flexCenter();
        .gift-swiper-content {
            width: 300px;
            height: 100%;
            @include flexCenter();
            position: relative;

            .gift-swiper-wrapper {
                width: 100%;
                height: 100%;
                margin: 0 auto;
                overflow: hidden;
                .gift-swiper-slide {
                    img {
                        width: 100%;
                        height: 100%;
                    }
                }
            }
            .gift-swiper-next::after,
            .gift-swiper-prev::after {
                color: #272727;
                font-size: 14px;
                display: flex;
                align-items: center;
                justify-content: center;
            }

            .gift-swiper-next,
            .gift-swiper-prev {
                width: 22px;
                height: 48px;
                background: #d8d8d8;
                border-radius: 2px;
                margin: 0;
                transform: translateY(-50%);
            }
            .gift-swiper-next {
                right: -30px;
            }
            .gift-swiper-prev {
                left: -30px;
            }
        }
    }
    .gold {
        min-width: 48px;
        height: 48px;
        background: #d8d8d8;
        border-radius: 2px;
        @include flexColumnCenter();
        margin-right: 17px;
        cursor: pointer;
        img {
            width: 18px;
            height: 16px;
            margin-bottom: 5px;
        }
        span {
            font-size: 16px;
            color: #605656;
        }
    }
}
</style>
