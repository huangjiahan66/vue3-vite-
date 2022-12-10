import request from "../request";

export const getHomeHotSuggests = () => {
  return request.get("/home/hotSuggests");
};

export const getHomeCategories = () => {
  return request.get("/home/categories");
};

export const getHomeHouselist = (currentPage = 1) => {
  return request.get("/home/houselist", {
    params: {
      page: currentPage,
    },
  });
};
