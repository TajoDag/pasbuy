import { API, endpoints } from "../../../api/endpoint";
import { request } from "../../../api/request";

export const getAllBrands = () =>
  request("get", `${API}/${endpoints.brand.getAll}`);
