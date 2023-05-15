module.exports = (req, res) => {
  if (req.session.userId) {
    let title = "";
    let body = "";
    let files = "";
    const data = req.flash("data")[0];
    if (typeof data != "undefined") {
      title = data.title;
      body = data.body;
      files = data.files;
    }
    return res.render("create", {
      errors: req.flash("validationErrors"),
      title: title,
      body: body,
      files: files,
    });
  }
  res.redirect("/auth/login");
};
