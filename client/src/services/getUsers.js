import http from "./httpServices";
import config from "../config";

const urlToGetUsers = config.authApiUrl + "/getUsers";

export function getUsers(db) {
  const result = http.post(urlToGetUsers, { db });
  return result;
}

export default {
  getUsers
};
