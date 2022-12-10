<template>
  <div class="city-group">
    <van-index-bar :sticky="false" :index-list="indexList">
      <van-index-anchor index="热门"></van-index-anchor>
      <div class="list">
        <template v-for="(city, index) in groupData.hotCities" :key="index">
          <div class="city" @click="handleCityClick(city)">
            {{ city.cityName }}
          </div> </template
        >``
      </div>
      <template v-for="(group, index) in groupData?.cities" :key="index">
        <van-index-anchor :index="group.group" />
        <template v-for="(city, indey) in group.cities" :key="indey">
          <van-cell
            :title="city.cityName"
            @click="handleCityClick(city)"
          ></van-cell>
        </template>
      </template>
    </van-index-bar>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRouter } from "vue-router";
import useCityStore from "@/stores/modules/city";
const cityStore = useCityStore();
const router = useRouter();
const props = defineProps({
  groupData: {
    type: Object,
    default: () => ({}),
  },
});

console.log("props", props);

// 动态索引
const indexList = computed(() => {
  const list = props.groupData.cities?.map((item) => item.group);
  console.log(props.groupData);
  list?.unshift("#");
  return list;
});

const handleCityClick = (city) => {
  // console.log(city);
  cityStore.currentCity = city;
  // 选中当前城市  返回上一级
  router.back();
};
</script>

<style lang="less" scoped>
.list {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  padding: 10px;
  padding-right: 25px;
  .city {
    width: 70px;
    height: 28px;
    border-radius: 13px;
    background-color: #fff4ec;
    font-size: 12px;
    color: #000;
    text-align: center;
    line-height: 28px;
    margin: 8px 0;
  }
}
</style>
