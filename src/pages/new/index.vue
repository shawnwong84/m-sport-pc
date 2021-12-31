<template>
    <div>
        <div class="fx justify-center">
            <div class="new">
                <div class="new-tab">
                    <div
                        class="tab-li"
                        v-for="(item, index) in articleTopTagList"
                        :key="index"
                        :class="tagNum === item.tagId ? 'red' : ''"
                        @click="getArticleListByTagId(item.tagId)"
                    >
                        {{ item.tagName }}
                    </div>
                </div>
                <div class="fx justify-between">
                    <div class="w-70">
                        <div class="fx align-items mt-20">
                            <div><img src="../../assets/image/Pad.png" /></div>
                            <div class="ml-10 fs-22">推荐资讯</div>
                        </div>
                        <div class="swiper-container">
                            <div class="swiper-wrapper">
                                <div
                                    class="swiper-slide swiper-slide-new"
                                    v-for="(item, index) in bannerList"
                                    :key="index"
                                    @click="toPage('newDeatil', item.id)"
                                >
                                    <div class="new-img">
                                        <img :src="item.coverPicture" />
                                    </div>
                                    <div class="new-title">
                                        {{ item.title }}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="new-list">
                            <div
                                class="fx new-list-li"
                                v-for="(item, index) in articleList"
                                @click="toPage('newDeatil', item.id)"
                            >
                                <div>
                                    <img
                                        :src="item.coverPicture"
                                        class="coverPicture"
                                    />
                                </div>
                                <div class="ml-20" style="width: 100%">
                                    <div class="fs-18 fw-700">
                                        {{ item.title }}
                                    </div>
                                    <div class="likeCount">
                                        阅读量：{{ item.readNum }}
                                    </div>
                                </div>
                            </div>
                            <div class="more-new" @click="getMore">
                                点击加载更多
                            </div>
                        </div>
                    </div>
                    <div class="w-30">
                        <div class="fx align-items mt-20">
                            <div>
                                <img
                                    src="../../assets/image/Video-camera.png"
                                />
                            </div>
                            <div class="ml-10 fs-22">主播推荐</div>
                        </div>
                        <div class="star">
                            <div
                                class="star-list"
                                v-for="(item, index) in anchorRecommend"
                                :key="index"
                            >
                                <div>
                                    <img
                                        :src="item.anchorIcon"
                                        class="star-img"
                                    />
                                </div>
                                <div style="width: 100%">
                                    <div class="ml-10 fx justify-between">
                                        <div class="fw-700">
                                            {{ item.anchorName }}
                                        </div>
                                        <div class="fx align-items">
                                            <div>
                                                <img
                                                    src="../../assets/image/Fire.png"
                                                />
                                            </div>
                                            <div class="ml-5">
                                                {{ item.hotNum }}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mt-10 ml-10 c-9">
                                        {{ item.anchorDesc }}
                                    </div>
                                </div>
                            </div>
                            <div
                                class="fx align-items justify-center"
                                v-if="
                                    anchorRecommend &&
                                    anchorRecommend.length >= 6
                                "
                            >
                                <div class="next-btn" @click="nexPage">
                                    换一批
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Swiper from 'swiper';

export default {
    name: 'index',
    data() {
        return {
            articleTopTagList: [],
            bannerList: [],
            articleList: [],
            pageNum: 1,
            pageNum1: 1,
            tagNum: 0,
            anchorRecommend: [],
        };
    },

    mounted() {
        this.getArticleTopTagList();
        this.getTopArticleList();
        this.getArticleListByTagId(0);
        this.getAnchorRecommend();
    },
    methods: {
        toPage(name, id) {
            let routeData = this.$router.resolve({
                path: name,
                query: {
                    id: id,
                },
            });
            window.open(routeData.href, '_blank');
        },
        // 获取体育头条标签
        getArticleTopTagList() {
            this.$axios('get', '/article/getArticleTopTagList').then((res) => {
                if (res.code === 200) {
                    this.articleTopTagList = res.data;
                }
            });
        },
        getTopArticleList() {
            this.$axios('get', '/article/getTopArticleList').then((res) => {
                if (res.code === 200) {
                    this.bannerList = res.data;
                    // eslint-disable-next-line no-new
                    new Swiper('.swiper-container', {
                        speed: 300,
                        loop: true,
                        observer: true, // 修改swiper自己或子元素时，自动初始化swiper
                        observeParents: true, // 修改swiper的父元素时，自动初始化swiper
                        autoplay: {
                            delay: 3000,
                            stopOnLastSlide: false,
                            disableOnInteraction: false,
                        }, // 可选选项，自动滑动
                        pagination: {
                            el: '.swiper-pagination',
                        },
                    });
                }
            });
        },
        getArticleListByTagId(tagId) {
            this.pageNum1 = 1;
            let param = {
                pageNum: 1,
                pageSize: 30,
                tagId: tagId,
            };
            this.$axios('post', '/article/getArticleListByTagId', param).then(
                (res) => {
                    if (res.code === 200) {
                        this.articleList = res.data.dataList;
                        this.tagNum = tagId;
                    }
                },
            );
        },
        getMore() {
            this.pageNum1 = this.pageNum1 + 1;
            let param = {
                pageNum: this.pageNum1,
                pageSize: 30,
                tagId: this.tagNum,
            };
            this.$axios('post', '/article/getArticleListByTagId', param).then(
                (res) => {
                    if (res.code === 200) {
                        this.articleList = this.articleList.concat(
                            res.data.dataList,
                        );
                    }
                },
            );
        },
        getAnchorRecommend() {
            let param = {
                pageNum: this.pageNum,
                pageSize: 6,
            };
            this.$axios('post', '/pcHome/getAnchorRecommend', param).then(
                (res) => {
                    if (res.code === 200) {
                        this.anchorRecommend = res.data.dataList;
                    }
                },
            );
        },
        nexPage() {
            this.pageNum = this.pageNum + 1;
            this.getAnchorRecommend();
        },
    },
};
</script>

<style scoped>
.new {
    width: 1200px;
    min-height: 100vh;
}
.new-tab {
    margin-top: 40px;
    height: 78px;
    /*background: #FFFFFF;*/
    /*box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.07);*/
    background-image: radial-gradient(
        circle at 50% 235%,
        rgba(249, 149, 118, 0.41),
        rgba(150, 103, 100, 0) 87%,
        rgba(62, 62, 84, 0) 87%
    );
    border-radius: 4px;
    box-shadow: 0 4px 16px 0 rgb(211 123 95 / 23%);
    background-color: #3e4154;
    /*border-radius: 7px;*/
    display: flex;
    align-items: center;
}
.tab-li {
    width: 100px;
    text-align: center;
    cursor: pointer;
    color: #d5d5d5;
}
.more-new {
    color: #d5d5d5;
    border: 1px solid #f2f2f2;
    border-radius: 5px;
    line-height: 40px;
    text-align: center;
    margin-top: 20px;
    cursor: pointer;
}
.more-new:hover {
    color: #f0c682;
    border: 1px solid #f0c682;
}
.red {
    color: #f0c682;
}
.w-70 {
    width: 70%;
}
.w-30 {
    width: 28%;
}
.new-img {
    width: 100%;
    height: 349px;
    border-radius: 7px;
}
.new-img img {
    width: 100%;
    height: auto;
}
.swiper-slide-new {
    width: 100%;
    height: 349px;
    margin-top: 20px;
}
.new-title {
    background-image: linear-gradient(to top, #000, rgba(0, 0, 0, 0));
    opacity: 0.9;
    z-index: 9;
    margin-top: -60px;
    font-weight: 700;
    font-size: 22px;
    color: white;
    line-height: 60px;
    padding-left: 20px;
    border-bottom-right-radius: 7px;
    border-bottom-left-radius: 7px;
}
.new-list {
    width: 100%;
    background: #ffffff;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.07);
    border-radius: 7px;
    margin-top: 20px;
    padding: 20px;
}
.coverPicture {
    width: 180px;
    height: 106px;
    border-radius: 7px;
}
.new-list-li {
    border-bottom: 1px solid #f2f2f2;
    padding: 20px 0px;
}
.likeCount {
    text-align: right;
    padding-top: 68px;
    color: #a4a4a4;
}
.star {
    height: 637px;
    background: #ffffff;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.07);
    border-radius: 7px;
    margin-top: 20px;
}
.star-img {
    width: 63px;
    height: 63px;
    border-radius: 50%;
}
.star-list {
    margin: 10px;
    padding: 10px 0px;
    display: flex;
    border-bottom: 1px solid #f2f2f2;
}
.next-btn {
    width: 86px;
    height: 29px;
    border: 1px solid #f8413d;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #f8413d;
    cursor: pointer;
    margin-top: 10px;
}
</style>
