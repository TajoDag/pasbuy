import { API, endpoints } from "../endpoint";
import { request } from "../request";

export const getLogoHeader = (id) =>
    request("get", `${API}/${endpoints.logoHeader.get}/${id}`);

export const getLogoFooter = (id) =>
    request("get", `${API}/${endpoints.logoFooter.get}/${id}`);
  