module.exports = (req, res) => {
  let username = ""; //This is to avoid the form from throwing an error saying that the value is null or undefined.
  let password = "";
  const data = req.flash("data")[0];
  if (typeof data != "undefined") {
    username = data.username; //check if req.flash('data') is undefined which will be the case whenever we first visit the new user form. If it ’ s not undefined, only then we assign the username and password fields.
    password = data.password;
  }
  res.render("register", {
    errors: req.flash("validationErrors"),
    username: username,
    password: password,
  });
};
