const express = require("express");

const server = express();

server.use(express.json());

const data = require("./users/data.json");

const Users = require("./users/helpers")

server.get("/", (req, res) => {
    res.send("This is the root response");
})

server.get("/api/users", (req, res, next) => {
    Users.get()
        .then( users => res.json(users))
        .catch(next);
})

server.post("/api/register", (req, res) => {
    Users.register(req.body)
        .then( newUser => res.json(newUser))
})

server.use( (err, req, res, next) => {
    res.staus(err.status || 500).json({
        message: err.message
    })
});

module.exports = server;