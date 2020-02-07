import http from "./httpServices";
import { apiUrl } from "../config.json";

const connectApiEndpoint = apiUrl + "/connect";

export async function connect(db) {
  try {
    const data = await http.post(connectApiEndpoint, { db });
    return data;
  } catch (error) {
    return null;
  }
}
