import { API, endpoints } from "../endpoint";
import { request } from "../request";

export const getProductTodayDeal = (body) =>
  request("post", `${API}/${endpoints.product.list}`, body);

export const getProductNew = () =>
  request("post", `${API}/${endpoints.product.list}`, { isNew: true });

export const getProductFeatured = () =>
  request("post", `${API}/${endpoints.product.list}`, { featured: true });

export const getProductByIdC = (idC) =>
  request("post", `${API}/${endpoints.product.list}`, { category: idC });

// export const getProductTodayDeal = (body) =>
//   request("post", `${API}/${endpoints.product.list}`, body);
