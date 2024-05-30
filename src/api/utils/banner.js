import { API, endpoints } from "../endpoint";
import { request } from "../request";


export const getBanner = (id) =>
    request("get", `${API}/${endpoints.banner.get}/${id}`);
  