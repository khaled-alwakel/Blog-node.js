const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var uniqueValidator = require("mongoose-unique-validator");
const BlogPostSchema = new Schema({
  title: {
    type: String,
    required: [true, "please Provide Title"],
    unique: true,
  },
  body: {
    type: String,
    required: [true, "please Provide Body"],
  },
  username: String, // todo populate
  datePosted: {
    type: Date,
    default: new Date(),
  },
  image: {
    type: String,
    required: [true, "Please Provide Image"],
  },
});
BlogPostSchema.plugin(uniqueValidator);
const BlogPost = mongoose.model("BlogPost", BlogPostSchema);
module.exports = BlogPost;
