function playController(req, res) {
  res.status(200);
  res.render("play");
}

module.exports = {
  playController,
};
