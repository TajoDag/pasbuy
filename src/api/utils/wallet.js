import { API, endpoints } from "../endpoint";
import { request } from "../request";

export const getDeposit = (id) =>
  request("get", `${API}/${endpoints.wallet.getDeposit}/${id}`);

export const getWithdraw = (id) =>
  request("get", `${API}/${endpoints.wallet.getWithdraw}/${id}`);

export const postRequestWithdraw = (body) =>
  request("post", `${API}/${endpoints.wallet.postRequest}`, body);
