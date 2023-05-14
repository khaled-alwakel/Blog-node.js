const express = require("express");
const app = new express();

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/blog", { useNewUrlParser: true });

const fileUpload = require("express-fileupload");
const validateMiddleWare = require("./middleware/validationMiddleware");

const ejs = require("ejs");
app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(express.json());

app.use(fileUpload());
app.use("/posts/store", validateMiddleWare);

// const newPostController = require("./controllers/newPost");
const homeController = require("./controllers/home");
const storePostController = require("./controllers/storePost");
const getPostController = require("./controllers/getPost");
const newUserController = require("./controllers/newUser");
const storeUserController = require("./controllers/storeUser");
const loginController = require("./controllers/login");
const loginUserController = require("./controllers/loginUser");

app.get("/", homeController);

app.get("/post/:id", getPostController);

// app.get("/posts/new", newPostController);

app.post("/posts/store", storePostController);

app.get("/auth/register", newUserController);

app.post("/users/register", storeUserController);

app.get("/auth/login", loginController);

app.post("/users/login", loginUserController);

app.listen(4000, () => {
  console.log("App listening on port 4000");
});
