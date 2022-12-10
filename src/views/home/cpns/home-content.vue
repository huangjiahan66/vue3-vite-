<template>
  <div class="content">
    <h2 class="ttitle">热门精选</h2>
    <div class="list">
      <template v-for="(item, index) in houselist" :key="item.data.houseId">
        <HouseItemV9
          v-if="item.discoveryContentType === 9"
          :item-data="item.data"
          @click="itemClick(item.data)"
        />
        <HouseItemV3
          v-else-if="item.discoveryContentType === 3"
          :item-data="item.data"
          @click="itemClick(item.data)"
        />
      </template>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import useHomeStore from "@/stores/modules/home";
import { storeToRefs } from "pinia";
import HouseItemV9 from "@/components/house-item-v9/house-item-v9.vue";
import HouseItemV3 from "@/components/house-item-v3/house-item-v3.vue";
const homeStore = useHomeStore();
const router = useRouter();
const { houselist } = storeToRefs(homeStore);

// 组件点击
const itemClick = (item) => {
  console.log("组件点击了", item.houseId);
  router.push("/detail/" + item.houseId);
};
</script>

<style lang="less" scoped>
.content {
  padding: 10px 8px;
  .title {
    font-size: 22px;
    padding: 10px;
  }
  .list {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>
