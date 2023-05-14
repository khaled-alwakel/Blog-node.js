// Now that we have authentication, we will protect pages that we don't want
// assessed by users not logged in. For example, we only want logged in users
// to access the "post new" page.
const User = require("../models/User");
module.exports = async (req, res, next) => {
  const user = await User.findById(req.session.userId);
  if (!user) return res.redirect("/");
  next();
};
