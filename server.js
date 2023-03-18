const express = require("express");

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
    res.send("This is the root response");
})

module.exports = server;