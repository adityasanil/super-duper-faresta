import http from "./httpServices";
import { apiUrl } from "../config.json";

const sendImageApiUrl = apiUrl + "/imageUpload";

export function sendImage(data) {
  const result = http.post(sendImageApiUrl, data);
  return result;
}

export default {
  sendImage
};
