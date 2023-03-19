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

server.post("/api/register", (req, res, next) => {
    Users.register(req.body)
        .then( newUser => res.status(201).json(newUser))
        .catch(next);
})

server.post("/api/login", (req, res, next) => {
    Users.login(req.body)
        .then( resFromLogin => res.json(resFromLogin))
        .catch(next);
})

server.use( (err, req, res, next) => {
    res.status(err.status || 500).json({
        message: err.message
    })
});

module.exports = server;