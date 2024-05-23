import { API, endpoints } from "../endpoint";
import { request } from "../request";

export const loginUser = (body) =>
  request("post", `${API}/${endpoints.auth.login}`, body);
