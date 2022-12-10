<template>
  <div class="home">
    <home-nav-bar></home-nav-bar>
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="" />
    </div>

    <home-search-box></home-search-box>
    <home-categories></home-categories>

    <div class="search-bar" v-if="isShowSearchBar">
      <home-search-bar></home-search-bar>
    </div>
    <home-content></home-content>

    <!-- <button @click="handleMoreData">加载更多</button> -->
  </div>
</template>

<script setup>
import { watch, ref } from "vue";
import homeNavBar from "./cpns/home-nav-bar.vue";
import homeSearchBox from "./cpns/home-search-box.vue";
import useHomeStore from "@/stores/modules/home";
import HomeCategories from "./cpns/home-categories.vue";
import homeContent from "./cpns/home-content.vue";
import homeSearchBar from "@/components/search-bar/search-bar.vue";
import useScroll from "@/hooks/useScroll";

const homeStore = useHomeStore();
homeStore.fetchHotSuggestData(); //别忘记  掉用action的方法请求数据
homeStore.fetchCategoriesData();
homeStore.fetchHouseListData();

const { isReachBottom, srollTop } = useScroll();

watch(isReachBottom, (newValue) => {
  if (newValue) {
    homeStore.fetchHouseListData().then(() => {
      // 等数据都回来了在设置成False
      isReachBottom.value = false;
    });
  }
});

// 搜索框的显示的控制
const isShowSearchBar = ref(false);
watch(srollTop, (newTop) => {
  isShowSearchBar.value = newTop > 100;
});
</script>

<style lang="less" scoped>
.home {
  padding-bottom: 60px;
  .banner {
    img {
      width: 100%;
    }
  }
  .search-bar {
    position: fixed;
    z-index: 9;
    top: 0;
    left: 0;
    right: 0;
    height: 45px;
    padding: 16px 16px 10px;
    background-color: #fff;
  }
}
</style>
