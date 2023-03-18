const express = require("express");

const server = express();

server.use(express.json());

const data = require("./data.json");

server.get("/", (req, res) => {
    res.send("This is the root response");
})

server.get("/api/users", (req, res) => {
    res.json(data);
})

module.exports = server;