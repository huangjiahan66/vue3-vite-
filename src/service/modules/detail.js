import request from "../request";

export const getDetailInfos = (houseId) => {
  return request.get("/detail/infos", {
    params: {
      houseId: houseId,
    },
  });
};
