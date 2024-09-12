const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const actionRouter = require("./routers/actionRouter")
const projectRouter = require("./routers/projectRouter")

const server = express();

server.use(express.json());
server.use(cors());
server.use(helmet());
server.use(logger);

server.use("/api/actions", actionRouter);
server.use("/api/projects", projectRouter);

function logger(req, res, next) {
  console.log(`A ${req.method} request to '${req.url}' at '${Date.now()}`);
  next();
}

module.exports = server;