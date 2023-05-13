const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/blog", { useNewUrlParser: true });

const app = new express();
const ejs = require("ejs");
const { resourceUsage } = require("process");

const fileUpload = require("express-fileupload");

const BlogPost = require("./models/BlogPost");

app.set("view engine", "ejs");

const validateMiddleWare = (req, res, next) => {
  if (req.files == null || req.body.title == null) {
    return res.redirect("/posts/new");
  }
  next();
};

app.use(express.static("public")); //With this  we specify that any request that ask for assets should get it from the ‘ public ’ directory.
app.use(express.json());
app.use(express.urlencoded());
app.use(fileUpload()); //adds the files property to the req object so that we can access the uploaded files using req.files.
app.use("/posts/store", validateMiddleWare);

app.listen(4000, () => {
  console.log("App listening on port 4000");
});

app.get("/", async (req, res) => {
  const blogposts = await BlogPost.find({});
  console.log(blogposts);
  res.render("index", {
    blogposts,
  });
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.get("/post/:id", async (req, res) => {
  const blogpost = await BlogPost.findById(req.params.id);
  res.render("post", {
    blogpost,
  });
});

app.get("/posts/new", (req, res) => {
  res.render("create");
});

//path.resolve() helps us get the full absolute path which otherwise changes based on different Operating Systems
app.post("/posts/store", async (req, res) => {
  let image = req.files.image;
  image.mv(path.resolve(__dirname, "public/img", image.name), async (error) => {
    //image.mv moves the uploaded file to public/img directory with the name from image.name.
    await BlogPost.create({
      ...req.body,
      image: "/img/" + image.name,
    });
    res.redirect("/");
  });
});
