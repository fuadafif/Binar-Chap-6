require("dotenv").config();
const express = require("express");
const app = express(); // inisiasi express
const port = process.env.PORT; // konfigurasi port

// jlnkan server express
app.listen(port, (start) => {
  console.log("Server berjalan pada port: " + port);
});

app.set("view engine", "ejs"); // atur ejs sebagai view engine

// konfigurasi middleware
app.use(express.static("public"));
app.use(express.json()); // middleware pembaca body, diletakkan seblm route
app.use(express.urlencoded({ extended: false }));

// konfigurasi controller
const indexController = require("./controller/index");
const playController = require("./controller/play");
const userController = require("./controller/login");

// terapkan route
app.get("/", indexController.index);
app.get("/play", playController.index);
app.get("/users", userController.get);
app.get("/users/:id", userController.getById);
app.get("/login", userController.index);
app.post("/login", userController.login);
