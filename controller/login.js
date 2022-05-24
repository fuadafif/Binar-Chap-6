const user = require("../db/users.json"); // import json

function loginController(req, res) {
  res.status(200);
  res.render("login");
}

function loginProcessController(req, res) {
  const email = req.body.email;
  const password = req.body.password;

  const emailData = user[0].email;
  const passData = user[0].password;

  if (email == emailData && password == passData) {
    res.json({ message: "login berhasil" });
  } else {
    res.json({ message: "email tidak terdaftar" });
  }
}

module.exports = {
  loginController,
  loginProcessController,
};
