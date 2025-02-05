import { Server } from "socket.io";
import http from "http";
import express from "express";
import { Socket } from "dgram";

const app = express();

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
  },
});

export const getReceiverSocketId = (receiverId) => {
  return userSocketMap[receiverId];
}

const userSocketMap = {}; // user ids
io.on("connection", (socket) => {
  // console.log("a user connect", socket.id);
  const userId = socket.handshake.query.userId;
  if (userId != "undefined") {
    userSocketMap[userId] = socket.id;
  }
  // io.emit() is usedt to send events to all the connected clients
  io.emit("getOnlineUsers", Object.keys(userSocketMap));
  // socket.on() is used to listen to the events and can be used both on client  and server side
  socket.on("disconnect", () => {
    delete userSocketMap[userId];
    io.emit("getOnlineUsers", Object.keys(userSocketMap));
  });
});

export { app, io, server };
