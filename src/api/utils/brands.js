import { API, endpoints } from "../endpoint";
import { request } from "../request";

export const getBrandSidebarBanner = () =>
  request("get", `${API}/${endpoints.brand.getAll}`);
