import http from "./httpServices";
import config from "../config";

const sendMailUrl = config.apiUrl + "/sendMail";

export async function sendMail(email, password) {
  await http.post(sendMailUrl, { email, password });
}

export default {
  sendMail
};
