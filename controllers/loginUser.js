const bcrypt = require("bcryptjs");
const User = require("../models/User");

module.exports = async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username: username });
  if (user) {
    bcrypt.compare(password, user.password, (error, same) => {
      if (same) {
        req.session.userId = user._id;
        res.redirect("/");
      } else {
        res.redirect("/auth/login");
      }
    });
  } else {
    console.log("/auth/login::", user);
    res.redirect("/auth/login");
  }
};
