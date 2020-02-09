import http from "./httpServices";
import config from "../config";

const sendImageApiUrl = config.apiUrl + "/imageUpload";

export function sendImage(data) {
  const result = http.post(sendImageApiUrl, data);
  return result;
}

export default {
  sendImage
};
