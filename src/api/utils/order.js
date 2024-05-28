import { API, endpoints } from "../endpoint";
import { request } from "../request";

export const getListOrders = (id) =>
  request("post", `${API}/${endpoints.orders.getListOrders}/${id}`);