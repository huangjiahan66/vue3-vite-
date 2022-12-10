<template>
  <div class="city top-page">
    <div class="top">
      <van-search
        v-model="searchValue"
        placeholder="城市/区域/位置"
        shape="round"
        show-action
        @cancel="cancelClick"
      ></van-search>

      <!-- tabs切换 -->
      <van-tabs v-model:active="tabActive" color="#ff9854" line-height="3">
        <template v-for="(value, key, index) in allCities" :key="key">
          <van-tab :title="value.title" :name="key"></van-tab>
        </template>
      </van-tabs>
    </div>
    <div class="content">
      <cityGroup :groupData="currentGroup"></cityGroup>
    </div>
  </div>
</template>

<script setup>
import useCityStore from "@/stores/modules/city";
import cityGroup from "./cpns/city-group-item.vue";
import { computed, ref } from "vue";
import { useRouter } from "vue-router";
import { storeToRefs } from "pinia";

const router = useRouter();
const searchValue = ref("");
const cancelClick = () => {
  router.back();
};

// tab切换
const tabActive = ref();

const cityStore = useCityStore();
cityStore.fetchAllcitiesData();
const { allCities } = storeToRefs(cityStore);

const currentGroup = computed(() => allCities.value[tabActive.value]);
</script>

<style lang="less" scoped>
.city {
  .content {
    height: calc(100vh - 98px);
    overflow: auto;
  }
}
</style>
