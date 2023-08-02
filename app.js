const express = require("express");
const app = express();

const mongoose = require("mongoose");
const url = "mongodb://127.0.0.1:27017/blog"
const Post = require("./models/post");

mongoose.connect(url)
    .then(() => {
        console.log("Mongo connection opened")
    })
    .catch((e) => {
        console.error(e);
    })

app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.send("GET / CALLED")
})

app.get('/posts', async (req, res) => {
    const posts = await Post.find({});
    res.send(posts);
})

app.listen(3000, () => {
    console.log("LISTENING ON 3000");
})