//models  are objects that represent collections in our database.
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BlogPostSchema = new Schema({
  title: String,
  body: String,
  username: String,
  datePosted: {
    type: Date,
    default: new Date(),
  },
  image: String,
});

// We access the database via mongoose.model.

//The first argument is the singular name of the collection your model is for. Mongoose automatically looks for the plural version of your model name.
const BlogPost = mongoose.model("BlogPost", BlogPostSchema);
module.exports = BlogPost;
