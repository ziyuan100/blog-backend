const express = require("express");
const app = express();

// To deal with CORS protocol issue for localhost
const cors = require("cors");
app.use(cors());

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

// GET all posts
app.get('/posts', async (req, res) => {
    const posts = await Post.find({});
    res.send(posts);
})

// GET posts with tag
app.get('/posts/:tag', async (req, res) => {
    const { tag } = req.params; 
    const posts = await Post.find({tags: tag})
    res.send(posts);
})

app.listen(3000, () => {
    console.log("LISTENING ON 3000");
})