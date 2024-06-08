import { API, endpoints } from "../endpoint";
import { request } from "../request";

export const createChat = (body) =>
    request("post", `${API}/${endpoints.chat.createChat}`, body, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });
  
  export const addMessageToChat = (body) =>
    request("post", `${API}/${endpoints.chat.addMessage}`, body, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });
  
  export const getUserChats = (userId) =>
    request("get", `${API}/${endpoints.chat.getUserChats}/${userId}`);
  
  export const findUserInChat = (chatId, userId) =>
    request("get", `${API}/${endpoints.chat.findUserInChat}`, {
      params: { chatId, userId },
    });