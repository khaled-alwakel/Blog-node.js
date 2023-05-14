const User = require("../models/User.js");

module.exports = (req, res) => {
  const user = User.create(req.body);
  if (!user) {
    return res.redirect("/auth/register");
  } else {
    res.redirect("/");
  }
};
