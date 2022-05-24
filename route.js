// import modules
const express = require("express");
const router = express.Router();

// konfigurasi controller
const { indexController } = require("./controller/index");
const { playController } = require("./controller/play");
const { loginController, loginProcessController } = require("./controller/login");
const { listUser, getByIdUser, addUser, updateUser, delUser, addUserIndex } = require("./controller/dashboard");

// terapkan route
router.get("/", indexController);
router.get("/play", playController);

router.get("/login", loginController);
router.post("/login", loginProcessController);

router.get("/dashboard", listUser);
router.get("/dashboard/create", addUserIndex);
router.get("/dashboard/show/:id", getByIdUser);
router.get("/dashboard/update/:id", updateUser);
router.get("/dashboard/delete/:id", delUser);

router.post("/dashboard/create", addUser);
router.post("/dashboard/update/:id", updateUser);

module.exports = router;
