import { API, endpoints } from "../../../api/endpoint";
import { request } from "../../../api/request";

export const getDetailProduct = (id) =>
  request("get", `${API}/${endpoints.product.getDetail}/${id}`);
