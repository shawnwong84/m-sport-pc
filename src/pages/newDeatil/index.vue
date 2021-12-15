<template>
    <div class="fx justify-center">
        <div class="new">
            <div class="new-deatil">
                <h1>{{ newData.title }}</h1>
                <div class="mt-10 fs-12">
                    <span class="c-9">作者：</span>{{ newData.authorName }}
                    <span class="ml-10 c-9 fs-12"
                        >发布时间：{{ newData.releaseTime }}</span
                    >
                    <span class="ml-10 c-9 fs-12"
                        >阅读数量：{{ newData.readNum }}</span
                    >
                </div>
                <div class="new-html" v-html="newData.content"></div>
                <div class="fx align-items mt-20">
                    <div>标签：</div>
                    <div
                        v-for="(item, index) in newData.tags"
                        :key="index"
                        class="new-tags"
                    >
                        {{ item.name }}
                    </div>
                </div>
            </div>
            <div class="fx align-items mt-20 mb-15">
                <div><img src="../../assets/image/Pad.png" /></div>
                <div class="ml-10 fs-22">推荐资讯</div>
            </div>
            <div class="new-list">
                <div
                    class="fx new-list-li"
                    v-for="(item, index) in newData.associateArticle"
                    @click="toPage('newDeatil', item.id)"
                >
                    <div>
                        <img :src="item.coverPicture" class="coverPicture" />
                    </div>
                    <div class="ml-20" style="width: 100%">
                        <div class="fs-18 fw-700">{{ item.title }}</div>
                        <!--          <div class="likeCount">阅读量：{{item.likeCount}}</div>-->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'index',
    data() {
        return {
            newData: [],
        };
    },
    mounted() {
        this.getInfo();
    },
    methods: {
        // toPage (name, id) {
        //   this.$router.replace({name: name, query: {id: id}})
        //   location.reload()
        // },
        toPage(name, id) {
            let routeData = this.$router.resolve({
                path: name,
                query: {
                    id: id,
                },
            });
            window.open(routeData.href, '_blank');
        },
        getInfo() {
            let param = {
                id: this.$route.query.id,
            };
            this.$axios('post', '/article/getArticleInfoById', param).then(
                (res) => {
                    if (res.code === 200) {
                        this.newData = res.data;
                    }
                },
            );
        },
    },
};
</script>

<style scoped>
.new {
    width: 1200px;
    min-height: 100vh;
}
.new-deatil {
    background: #ffffff;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.07);
    border-radius: 7px;
    padding: 20px;
    margin-top: 40px;
}
.new-tags {
    padding: 5px 10px;
    background: linear-gradient(115deg, #eecfb5 -2%, #f8413d 100%);
    border-radius: 5px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    font-size: 12px;
    font-weight: 700;
}
.new-list {
    background: #ffffff;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.07);
    border-radius: 7px;
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
    cursor: pointer;
}
</style>
<style>
.new-html p {
    margin-top: 13px;
    font-size: 15px;
    text-indent: 50px;
}
.title {
    display: none;
}
.new-html img {
    margin-left: 25%;
}
</style>
