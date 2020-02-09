import http from "./httpServices";
import config from "../config";

const apiUrlToRegisterSenior = config.authApiUrl + "/register"; // Link to create database

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
