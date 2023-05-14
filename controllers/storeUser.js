const User = require("../models/User.js");
const path = require("path");

module.exports = (req, res) => {
  const user = User.create(req.body);
  if (!user) {
    return res.redirect("/auth/register");
  } else {
    res.redirect("/");
  }
};
