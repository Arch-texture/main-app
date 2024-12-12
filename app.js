require("dotenv").config();

const Server = require("./src/models/serverModel");

const server = new Server();

server.listen();
