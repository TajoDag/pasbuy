import { API, endpoints } from "../../../api/endpoint";
import { request } from "../../../api/request";

export const getAllCategory = () =>
  request("get", `${API}/${endpoints.category.getAll}`);
