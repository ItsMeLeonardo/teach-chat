import * as http from "node:http";
import * as https from "node:https";

export function createServer(callback: any) {
  if (process.env.NODE_ENV === "production") {
    return https.createServer(callback);
  } else {
    return http.createServer(callback);
  }
}
