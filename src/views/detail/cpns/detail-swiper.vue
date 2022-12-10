<template>
  <div class="swiper">
    <van-swipe class="swiper-list" :autoplay="3000" indicator-color="white">
      <template v-for="(item, index) in swiperData" :key="index">
        <van-swipe-item class="item">
          <img :src="item.url" alt="" />
        </van-swipe-item>
      </template>
      <template #indicator="{ active, total }">
        <div class="custom-indicator">
          <template v-for="(value, key, index) in swiperGroup" :key="key">
            <span class="item">{{ value[0].title }} </span>
          </template>
        </div>
      </template>
    </van-swipe>
  </div>
</template>

<script setup>
const props = defineProps({
  swiperData: {
    type: Array,
    default: () => [],
  },
});

// 对数据进行处理
const swiperGroup = {};
for (const item of props.swiperData) {
  swiperGroup[item.enumPictureCategory] = [];
  //{1: Array(0), 2: Array(0), 3: Array(0), 4: Array(0), 9: Array(0)}
}

for (const item of props.swiperData) {
  const valueArray = swiperGroup[item.enumPictureCategory];
  valueArray.push(item);
}
</script>

<style lang="less" scoped>
.swiper {
  .swiper-list {
    .item {
      img {
        width: 100%;
      }
    }
  }
  .custom-indicator {
    position: absolute;
    right: 5px;
    bottom: 5px;
    padding: 2px 5px;
    font-size: 12px;
    background: rgba(0, 0, 0, 0.1);
  }
}
</style>
