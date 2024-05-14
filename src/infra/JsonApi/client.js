import { HttpClient } from "../../lib/HttpClient.js";
import { jsonApiConfig } from "./config.js";

export const jsonApiHttpClient = new HttpClient(jsonApiConfig.baseUrl, { 'Content-Type': 'application/json' })
