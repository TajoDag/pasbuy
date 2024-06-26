import { API, endpoints } from "../endpoint";
import { request } from "../request";

export const loginUser = (body) =>
  request("post", `${API}/${endpoints.auth.login}`, body);

export const registerUser = (body) =>
  request("post", `${API}/${endpoints.auth.register}`, body);

export const getListUserAll = () =>
  request("get", `${API}/${endpoints.user.all}`);

export const updateUser = (body) =>
  request("put", `${API}/${endpoints.user.update}`, body);
export const getUser = () => request("get", `${API}/${endpoints.user.detail}`);

export const updatePassword = (body) =>
  request("put", `${API}/${endpoints.user.updatePassword}`, body);

export const getListCustomer = (body) =>
  request("post", `${API}/${endpoints.user.getCustomers}`, body);
