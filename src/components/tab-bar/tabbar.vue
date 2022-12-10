<template>
  <van-tabbar v-model="active" active-color="#ff9854" route>
    <van-tabbar-item to="/">
      <span>首页</span>
      <template #icon>
        <van-icon name="wap-home-o" />
      </template>
    </van-tabbar-item>
    <van-tabbar-item to="/favor">
      <span>收藏</span>
      <template #icon>
        <van-icon name="like-o" />
      </template>
    </van-tabbar-item>
    <van-tabbar-item to="/order">
      <span>订单</span>
      <template #icon>
        <van-icon name="orders-o" />
      </template>
    </van-tabbar-item>
    <van-tabbar-item to="/message">
      <span>消息</span>
      <template #icon>
        <van-icon name="other-pay" />
      </template>
    </van-tabbar-item>
  </van-tabbar>
</template>

<script setup>
import { ref } from "vue";
const active = ref(0);
</script>

<style lang="scss" scoped></style>
