<!--
 * @version:  ;
 * @description:  ;
 * @autor: Full
 * @date: Do not edit
-->
<template>
    <div class="criterion-detail">
        <div class="detail-title">
            {{ content.title }}
        </div>
        <div class="detail-des" v-html="content.des"></div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    name: 'criterionDetail',
    data() {
        return {
            id: this.$route.params.id,
            content: {},
        };
    },
    components: {},
    computed: {
        ...mapGetters({
            getCriterionDetailList: 'getCriterionDetailList',
        }),
    },
    watch: {
        getCriterionDetailList: {
            handler(val) {
                if (val.length > 0) {
                    this.content = val.filter(
                        (item) => item.id == this.id,
                    )[0].content;
                }
            },
            immediate: true,
        },
    },
    mounted() {},
    methods: {},
};
</script>

<style scoped lang="scss">
.criterion-detail {
    width: 100%;
    padding: 30px 16px;
    .detail-title {
        font-size: 24px;
        line-height: 26px;
        font-weight: 600;
        color: #292b33;
        margin-bottom: 22px;
    }
    .detail-des {
        font-size: 14px;
        ::v-deep p {
            line-height: 22px;
        }
    }
}
</style>
