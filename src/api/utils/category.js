import { API, endpoints } from "../endpoint";
import { request } from "../request";

export const getCateSidebarBanner = () =>
  request("get", `${API}/${endpoints.category.getAll}`);
