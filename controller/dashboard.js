const { User, User_Profiles, User_History } = require("../models");

function listUser(req, res) {
  User.findAll({
    include: User_Profiles,
  })
    .then((allUser) => res.status(200).send(user).render("dashboard", { allUser }))
    .catch((error) => {
      res.status(400).send(error);
    });
}

function getByIdUser(req, res) {
  User.findOne({
    where: {
      id: req.params.id,
    },
    include: {
      model: User_Profiles,
    },
  })
    .then((user) => {
      if (!user) {
        return res.status(404).send({
          message: "User tidak ditemukan",
        });
      }
      return res.status(200).send(user);
    })
    .catch((error) => res.status(404).send(error));
}

function addUser(req, res) {
  User.create({
    email: req.body.email,
    password: req.body.password,
  })
    .then((user) => res.status(201).send(user))
    .catch((error) => res.status(400).send(error));
}

function updateUser(req, res) {
  User.findByPk(req.params.id)
    .then((user) => {
      if (!user) {
        return res.status(404).send({
          message: "User tidak ditemukan",
        });
      }
      return user
        .update({
          email: req.body.email || user.email,
          password: req.body.password || user.password,
        })
        .then(() => res.status(200).send(user))
        .catch((error) => res.status(400).send(error));
    })
    .catch((error) => res.status(400).send(error));
}

function delUser(req, res) {
  User_Profiles.destroy({
    where: {
      id: req.params.id,
    },
  });
  users
    .destroy({
      where: {
        id: req.params.id,
      },
    })
    .then(() => {
      res.redirect(req.baseUrl + "/dashboard");
    });
}

function addUserIndex(req, res) {
  res.render("create");
}

//Export Module to route.js
module.exports = {
  listUser,
  getByIdUser,
  addUser,
  updateUser,
  delUser,
  addUserIndex,
};
