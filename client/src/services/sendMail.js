import http from "./httpServices";
import { apiUrl } from "../config.json";

const sendMailUrl = apiUrl + "/sendMail";

export async function sendMail(email, password) {
  await http.post(sendMailUrl, { email, password });
}

export default {
  sendMail
};
