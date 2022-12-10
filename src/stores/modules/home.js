import { defineStore } from "pinia";
import {
  getHomeHotSuggests,
  getHomeCategories,
  getHomeHouselist,
} from "@/service/modules/home";
const useHomeStore = defineStore("home", {
  state: () => ({
    hotSuggests: [], //热门数据
    categories: [], //管理分类数据
    currentPage: 1,
    houselist: [],
  }),
  actions: {
    async fetchHotSuggestData() {
      const res = await getHomeHotSuggests();
      this.hotSuggests = res.data;
      // console.log("res", res);
    },

    async fetchCategoriesData() {
      const res = await getHomeCategories();
      this.categories = res.data;
    },
    async fetchHouseListData() {
      const res = await getHomeHouselist(this.currentPage);
      this.houselist.push(...res.data); //追加新数据
      this.currentPage++; // page++
    },
  },
});

export default useHomeStore;
