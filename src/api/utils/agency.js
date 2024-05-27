import { API, endpoints } from "../endpoint";
import { request } from "../request";

export const getAgencyByHomeAgentId = (id) =>
  request("get", `${API}/${endpoints.agency.get}/${id}`);
