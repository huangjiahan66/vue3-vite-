<template>
  <div>search页面</div>
  <!-- todo代做 -->
  <p>开始时间 {{ route.query.startDate }}</p>
  <p>结束时间{{ route.query.endDate }}</p>
  <p>当前城市 {{ route.query.currentCity }}</p>
</template>

<script setup>
import { useRoute } from "vue-router";
const route = useRoute();
</script>

<style lang="less" scoped></style>
