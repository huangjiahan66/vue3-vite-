import request from "../request";

export const getCityAll = () => {
  return request.get("/city/all");
};
