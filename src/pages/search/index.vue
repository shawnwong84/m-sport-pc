<template>
    <div>
        <div class="search-header">
            <div class="search-input search-popover-container">
                <input
                    type="text"
                    v-model="searchName"
                    maxlength="10"
                    placeholder="请输入搜索内容"
                    autocomplete="off"
                />
                <button class="search-button" @click="roomByNameSearch">
                    搜索
                </button>
            </div>
        </div>
        <div class="bd-search"></div>
        <div class="match-box">
            <div class="fx flex-wrap" v-if="matchList.length !== 0">
                <div
                    class="hot-content"
                    v-for="(item, index) in matchList"
                    :key="index"
                    @click="toPage('room', item.roomId)"
                >
                    <div class="fx justify-between jian">
                        <div v-if="item.recommend === 1">
                            <img
                                src="../../assets/image/jian.png"
                                width="40px"
                            />
                        </div>
                        <div class="living" v-if="item.roomStatus === 1">
                            <div>
                                <img
                                    src="../../assets/image/living.gif"
                                    width="10px"
                                />
                            </div>
                            <div class="live-gif">直播中</div>
                        </div>
                    </div>
                    <div
                        class="matchCutImg"
                        v-lazy:background-image="item.matchCutImg"
                    >
                        <img
                            src="../../assets/image/icon-open@2x.png"
                            width="25px"
                            class="imgvideo"
                        />
                    </div>
                    <div class="bg-fff">
                        <div class="roomName">{{ item.roomName }}</div>
                        <div class="fx align-items justify-between">
                            <div class="fs-12 c-9">
                                <img
                                    :src="item.anchorAvatar"
                                    class="anchorAvatar"
                                />{{ item.anchorName }}
                            </div>
                            <div class="fs-12 c-9">
                                <img
                                    src="../../assets/image/icon-hot-gray.png"
                                    width="12px"
                                />{{ item.hotNum }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                class="fx align-items justify-center"
                style="margin-top: 10%; margin-bottom: 50px"
                v-if="matchList.length === 0"
            >
                <div>
                    <div><img src="../../assets/image/null.png" /></div>
                    <div class="ta-c mt-10">列表空空如也!</div>
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
            searchName: '',
            pageNum: 1,
            matchList: [],
        };
    },
    mounted() {
        this.searchName = this.$route.query.name;
        this.roomByNameSearch();
    },
    methods: {
        roomByNameSearch() {
            let param = {
                pageNum: this.pageNum,
                pageSize: 60,
                roomName: this.searchName,
            };
            this.$axios('post', '/live/roomByNameSearch', param).then((res) => {
                if (res.code === 200) {
                    this.matchList = res.data.dataList;
                }
            });
        },
    },
};
</script>

<style scoped>
.search-header {
    height: 60px;
    padding-top: 22px;
    padding-bottom: 4px;
}
.search-header .search-input {
    width: 410px;
    height: 34px;
    border-radius: 17px;
    margin-right: auto;
    margin-left: auto;
    background: #fff;
    border: 1px solid #efeeec;
    position: relative;
}
.search-header .search-input input[type='text'] {
    caret-color: #f8413d;
    width: 100%;
    height: 100%;
    color: #666;
    font-size: 12px;
    padding-left: 18px;
    padding-right: 60px;
    border-radius: 17px;
    background-color: transparent;
    outline: none;
}
.search-header .search-input .search-button {
    width: 60px;
    height: 34px;
    font-size: 12px;
    color: #fff;
    position: absolute;
    top: -1px;
    right: 0;
    border-top-right-radius: 17px;
    border-bottom-right-radius: 17px;
    background: linear-gradient(132deg, #fbcfa1 0%, #ce9e6c 100%);
    outline: none;
    cursor: pointer;
}
.bd-search {
    border: 1px solid #ededed;
    margin-top: 20px;
}
.hot-content {
    width: 15.5%;
    margin: 10px 5px;
    z-index: 9;
}
.hot-content:hover {
    /*margin-top: -0.5px;*/
    /*transition: transform .5s*/
    transform: translate(0, -1px);
    -webkit-transform: translate(0, -1px);
    -moz-transform: translate(0, -1px);
    -o-transform: translate(0, -1px);
    -ms-transform: translate(0, -1px);
}
.anchorAvatar {
    width: 26px;
    height: 26px;
    border-radius: 100%;
    margin-right: 5px;
}
.living {
    background: #fa3434;
    border-radius: 2px;
    vertical-align: middle;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 12px;
    padding: 0 5px;
}
.jian {
    position: relative;
    top: 25px;
    padding-left: 10px;
    padding-right: 10px;
}
.roomName {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.bg-fff {
    background: white;
    padding: 8px 10px;
    margin-top: 1px;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
}
.live-gif {
    margin-top: 3px;
    margin-left: 2px;
}
.match-box {
    padding: 0 4%;
}
</style>
