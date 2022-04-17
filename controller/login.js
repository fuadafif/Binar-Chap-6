let posts = require("../db/users.json"); // import json

function get(req, res) {
  res.status(200).json(posts);
}

function getById(req, res) {
  const data = posts.find((item) => {
    return item.id == req.params.id;
  });
  if (data == -1) {
    res.status(404).json({ message: "User tidak terdaftar!" });
  }
  res.status(200).json(data);
}

function index(req, res) {
  res.render("login");
}

function login(req, res) {
  const email = req.body.email;
  const password = req.body.password;
  const data = posts.find((item) => {
    return item.id == req.params.id;
  });

  if (data == -1) {
    res.status(403).json({ message: "Username tidak ada!" });
  } else {
    if (posts[data].password != password) {
      res.status(403).json({ message: "Password salah!" });
    } else {
      res.status(200).json({ message: "Login berhasil!" });
    }
  }
}

module.exports = {
  get,
  getById,
  index,
  login,
};
