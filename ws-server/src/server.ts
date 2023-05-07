import * as Koa from "koa";
import { createServer } from "./config/createServer";

const app = new Koa();

const server = createServer(app.callback());

app.use(async (ctx) => {
  ctx.body = "Hello ---";
});

/* app.listen(3000, () => {
  console.log("server is running at http://localhost:4000");
});
 */

server.listen(3000, () => {
  console.log("server is running at http://localhost:3000");
});
