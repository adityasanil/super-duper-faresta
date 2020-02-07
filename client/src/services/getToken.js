// import http from "./httpServices";

const userKey = "User";

// http.setToken(getToken());

export function getUser() {
  return localStorage.getItem(userKey);
}

export default {
  getUser
};
