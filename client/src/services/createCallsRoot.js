import http from "./httpServices";
import { apiUrl } from "../config.json";
import { getUser, getAuth0MgntToken } from "./getToken";
// import { sendMail } from "./sendMail";
import { generatePassword } from "./generatePassword";

const apiUrlToRegisterSenior = apiUrl + "/regsiter"; // Link to create database

// Function to register a Senior User on the platform, can be called only by the Root user
export async function registerSenior({
  companyName,
  panNumber,
  orgEmail,
  contact,
  designation,
  address,
  name,
  email,
  userType,
  role
}) {
  const data = http.post(apiUrlToRegisterSenior, {
    companyName,
    panNumber,
    orgEmail,
    contact,
    designation,
    address,
    name,
    email,
    userType,
    role
  });

  return data;
  // sendMail(email, password);
}
