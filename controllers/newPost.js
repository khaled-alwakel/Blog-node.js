const path = require("path");

module.exports = (req, res) => {
  if (req.session.userId) {
    let title = "";
    let body = "";

    const data = req.flash("data")[0];
    if (typeof data != "undefined") {
      title = data.title;
      body = data.body;
    }
    return res.render("create", {
      errors: req.flash("validationErrors"),
      title: title,
      body: body,
      // default image
    });
  }
  res.redirect("/auth/login");
};
