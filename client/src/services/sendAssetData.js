import http from "./httpServices";
import { apiUrl } from "../config.json";

const apiUrlToSaveAssets = apiUrl + "/saveAssets";

export function saveAssetsData(data) {
  const result = http.post(apiUrlToSaveAssets, data);
  return result;
}

export function sendEditedData(data) {
  // const result = http.post(apiUrlToSaveAssets, data);
  console.log(data);
  // return result;
}


export default {
  saveAssetsData
};
