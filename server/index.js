const { Server } = require("socket.io");

const io = new Server(8000);

io.on("connection", (socket) => {
  console.log(`socket ${socket.id} connected`);

  // send an event to the client
  socket.emit("foo", "bar");

  socket.on("foobar", () => {
    // an event was received from the client
  });
});
