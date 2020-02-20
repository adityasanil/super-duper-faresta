import http from "./httpServices";
import config from "../config";

const apiUrlToVerifyAsset = config.apiUrl + "/verifyAsset";

export function verifyAsset(data, id) {
  const url = apiUrlToVerifyAsset + "/" + id;
  const result = http.put(url, { data });
  return result;
}

export default {
  verifyAsset
};
