import http from "./httpServices";
import config from "../config";

const apiUrlToSaveAssets = config.apiUrl + "/saveAssets";

export function saveAssetsData(data) {
  const result = http.post(apiUrlToSaveAssets, data);
  return result;
}

export function sendEditedData(data, id) {
  const url = apiUrlToSaveAssets + "/edit/" + id;
  const result = http.put(url, data);
  return result;
}

export default {
  saveAssetsData,
  sendEditedData
};
