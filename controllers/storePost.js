const BlogPost = require("../models/BlogPost");
const path = require("path");

module.exports = async (req, res) => {
  try {
    // let image = req.files.image;
    // image.mv(path.resolve(__dirname, "..", "public/img", image.name));
    await BlogPost.create(
      req.body
      //   image: "/img/" + image.name,
    );
    res.redirect("/");
  } catch (error) {
    const validationErrors = Object.keys(error.errors).map(
      (key) => error.errors[key].message
    );

    req.flash("validationErrors", validationErrors);
    req.flash("data", req.body); //Persist Request Data on Form
    res.redirect("/posts/new");
  }
};
