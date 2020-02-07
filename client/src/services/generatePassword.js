import cryptorandomstring from "crypto-random-string";

export function generatePassword() {
  const password = cryptorandomstring({ length: 7, type: "url-safe" }); // Generate random string for password
  return password;
}

export default {
  generatePassword
};
