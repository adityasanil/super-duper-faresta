import http from "./httpServices";
import { apiUrl } from "../config.json";

const apiUrlToGetAllAssets = apiUrl + "/getAssets";
const apiUrlToGetDistinctAssets = apiUrl + "/getAssets/distinctAssets";
const apiUrlToGetAssetsCategory = apiUrl + "/getAssets/assetlist/";

export function getAllAssets() {
  const result = http.get(apiUrlToGetAllAssets);
  return result;
}

export function getDistinctAssets() {
  const result = http.get(apiUrlToGetDistinctAssets);
  return result;
}

export function getAssetsCategory(category) {
  const result = http.get(apiUrlToGetAssetsCategory + category);
  return result;
}

export function getAssetById(category, id) {
  const result = http.get(apiUrlToGetAssetsCategory + category + "/" + id);
  return result;
}

export function getAssetImage() {
  const result = http.get(`http://localhost:3001/getImage`);
  return result;
}

export default {
  getAllAssets,
  getDistinctAssets,
  getAssetsCategory,
  getAssetById,
  getAssetImage
};
