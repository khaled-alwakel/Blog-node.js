const mongoose = require("mongoose");
const BlogPost = require("./models/BlogPost"); //BlogPost represents the BlogPosts collection in the database.
mongoose.connect("mongodb://localhost:27017/blog", { useNewUrlParser: true });

async function create() {
  try {
    // const user = new User({ firstName: "alice", age: 44 });
    // await user.save();

    // better way to create user
    const post = await BlogPost.create({
      title: "The Mythbuster’s Guide to Saving Money on Energy Bills",
      body: "If you have been here a long time, you might remember when I went on ITV Tonight to dispense a masterclass in saving money on energy bills. Energy-saving is one of my favourite money topics, because once you get past the boring bullet-point lists, a whole new world of thrifty nerdery opens up. You know those bullet-point lists. You start spotting them everything at this time of year. They go like this:",
    });

    console.log(post);
  } catch (e) {
    console.log(e.message);
  }
}
create();
