<template>
  <div class="app">
    <router-view></router-view>
    <Tabbar v-if="!route.meta.hideTabBar"></Tabbar>
    <loading />
  </div>
</template>
<script setup>
import Tabbar from "@/components/tab-bar/tabbar.vue";
import Loading from "@/components/loading/loading.vue";
import { useRoute } from "vue-router";
const route = useRoute();
</script>

<style scoped></style>
