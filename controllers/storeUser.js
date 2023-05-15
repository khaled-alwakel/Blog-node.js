const User = require("../models/User.js");
module.exports = async (req, res) => {
  try {
    await User.create(req.body);
    return res.redirect("/");
  } catch (error) {
    const validationErrors = Object.keys(error.errors).map(
      (key) => error.errors[key].message
    );
    req.flash("validationErrors", validationErrors);
    req.flash("data", req.body); //Persist Request Data on Form
    res.redirect("/auth/register");
  }
};
