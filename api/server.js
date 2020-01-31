const express = require("express");

const Users = require("../Users/usersModel");

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).json({ api: "up" });
});

server.get("/users", (req, res) => {
  Users.getAll()
    .then(user => {
      res.status(200).json(user);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

server.post('/', (req, res) => {
    const userData = req.body
    Users.insert(userData)
    .then(id => {
        res.status(201).json({ created: id });
    })
    .catch(err => {
        res.status(500).json({ err: 'Failed to create new user' });
      });
})





module.exports = server;