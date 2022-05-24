require("dotenv").config();
const express = require("express");
const app = express(); // inisiasi express
const route = require("./route");
const port = process.env.PORT; // konfigurasi port

// baca data users
const users = require("./db/users.json");

// jlnkan server express
app.listen(port, (start) => {
  console.log("Server berjalan pada port: " + port);
});

app.set("view engine", "ejs"); // atur ejs sebagai view engine

// konfigurasi middleware
app.use(express.static("public"));
app.use(express.json()); // middleware pembaca body, diletakkan seblm route
app.use(express.urlencoded({ extended: false }));

// routing
app.use("/", route);
