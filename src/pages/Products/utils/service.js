import { API, endpoints } from "../../../api/endpoint";
import { request } from "../../../api/request";

export const getAllCategory = () =>
  request("get", `${API}/${endpoints.category.getAll}`);

export const getAllBrands = () =>
  request("get", `${API}/${endpoints.brand.getAll}`);
export const getAllSizes = () =>
  request("get", `${API}/${endpoints.size.getAll}`);

export const getAllProducts = (body) =>
  request("post", `${API}/${endpoints.product.list}`, body);
