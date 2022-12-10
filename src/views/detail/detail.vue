<template>
  <div class="detail top-page">
    <van-nav-bar
      title="房屋详情"
      left-text="旅途"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="main" v-if="mainPart">
      <detail-swiper :swiper-data="mainPart.topModule.housePicture.housePics" />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRouter, useRoute } from "vue-router";
import { getDetailInfos } from "@/service/modules/detail";
import DetailSwiper from "./cpns/detail-swiper.vue";
const router = useRouter();
const route = useRoute();
const onClickLeft = () => {
  router.back();
};

getDetailInfos(route.params.id).then((res) => {
  console.log("res.data", res.data);
  detailInfos.value = res.data;
});
const detailInfos = ref({}); //房屋详情总
const mainPart = computed(() => detailInfos.value.mainPart);

// console.log("mainPart", mainPart.value);
</script>

<style lang="less" scoped>
.a {
  .b {
  }
}
</style>
