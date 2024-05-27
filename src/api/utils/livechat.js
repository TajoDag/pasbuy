import { API, endpoints } from "../endpoint";
import { request } from "../request";

export const getLiveChat = (id) =>
    request("get", `${API}/${endpoints.livechat.get}/${id}`);