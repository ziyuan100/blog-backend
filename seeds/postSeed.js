const mongoose = require("mongoose");
const url = "mongodb://127.0.0.1:27017/blog";
const Post = require("../models/post");

mongoose.connect(url)
    .then(() => {
        console.log("Mongo connection opened");
    })
    .catch((e) => {
        console.error(e);
    })
const seedDB = async () => {
    await Post.deleteMany({});
    await Post.insertMany(
        [
            {
                title: "post #1",
                content: "test post blash",
                tags: ["a", "b", "c"],
                
            },
            {
                title: "post #2",
                content: "test post blash epawofoipsdcc",
                tags: ["a"]
            },
            {
                title: "post #3",
                content: "test post blash xcvwersdvc sedfcxvgver",
                tags: ["b"]
            },
            {
                title: "post #4",
                content: "test post blash wercv cw23232f",
                tags: ["c"]
            },
            {
                title: "post #5",
                content: "test post blash axzcxzc",
                tags: ["b", "c"]
            },
        ]
    )
}

seedDB().then(async () => {
    console.log("Successfully seeded Posts")
    const posts = await Post.find({})
    console.log(posts)
    mongoose.connection.close();
})