import http from "./httpServices";
import config from "../config";

const urlToGetUsers = config.authApiUrl + "/getUsers";
const urlToGetTenants = config.authApiUrl + "/getAllTenants";

export function getUsers(db) {
  const result = http.post(urlToGetUsers, { db });
  return result;
}

export function getAllTenants() {
  const result = http.get(urlToGetTenants);
  return result;
}

export default {
  getUsers,
  getAllTenants
};
