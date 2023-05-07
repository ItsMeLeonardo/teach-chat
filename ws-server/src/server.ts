import * as Koa from "koa";
import { createServer } from "./config/createServer";
import { Server } from "socket.io";

const PORT = process.env.PORT || 3003;

const app = new Koa();

const server = createServer(app.callback());

const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {});

server.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});
