import http from "./httpServices";
import config from "../config";

const apiUrlToGetReportsData = config.apiUrl + "/reports";

export function getReportsData() {
  const result = http.get(apiUrlToGetReportsData + "/all");
  return result;
}

export function getReportsDataVerifiedOnly() {
  const result = http.get(apiUrlToGetReportsData + "/verifiedStatus");
  return result;
}

export default {
  getReportsData,
  getReportsDataVerifiedOnly
};
