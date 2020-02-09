import http from "./httpServices";
import config from "../config";
import jwtDecode from "jwt-decode";

const authApiEndpoint = config.authApiUrl + "/login";
const token = "token";
const userDetails = "User";

export async function login(email, password) {
  try {
    const data = await http.post(authApiEndpoint, { email, password });
    localStorage.setItem(token, data.data);
    const user = JSON.stringify(jwtDecode(data.data));
    localStorage.setItem(userDetails, user);
    return data;
  } catch (error) {
    return null;
  }
}

export function logoutUser() {
  localStorage.removeItem(token);
  localStorage.removeItem(userDetails);
}

export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem(token);
    if (jwt) {
      return jwtDecode(jwt);
    } else {
      return null;
    }
  } catch (ex) {
    return null;
  }
}
