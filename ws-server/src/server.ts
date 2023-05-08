import * as Koa from "koa";
import { createServer } from "./config/createServer";
import { Server } from "socket.io";
import { SOCKET_EVENTS } from "./entities/SocketsEvents";

const PORT = process.env.PORT || 3003;

const app = new Koa();

const server = createServer(app.callback());

const users = new Map();

const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log("a user connected");

  //NOTE: replace this with a database and get the user data from a middleware
  users.set(socket.id, socket);

  socket.emit(SOCKET_EVENTS.USER_CONNECTED, {
    socketId: socket.id,
    list: Array.from(users.keys()),
  });

  socket.on(SOCKET_EVENTS.START_CONVERSATION, (data) => {
    console.log(data);
  });
});

server.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});
