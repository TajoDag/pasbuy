import { API, endpoints } from "../endpoint";
import { request } from "../request";

export const getAgencyByHomeAgentId = (id) =>
  request("get", `${API}/${endpoints.agency.get}/${id}`);

export const getListNotSuccess = (id) =>
  request("post", `${API}/${endpoints.agency.getNotSuccess}/${id}`);

export const changePriceAgency = (body) =>
  request("put", `${API}/${endpoints.agency.updatePrice}`, body);

export const createOrder = (body) =>
  request("post", `${API}/${endpoints.agency.createOrder}`, body);

export const listOrderAgency = (body) =>
  request("post", `${API}/${endpoints.agency.getListOrder}`, body);

export const updateStatusOrders = (id, body) =>
  request("put", `${API}/${endpoints.agency.changeStatus}/${id}`, body);
