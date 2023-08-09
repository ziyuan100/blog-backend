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
    const posts = await Post.find({}).sort({_id: -1});
    res.send(posts);
})

// GET posts with tag
app.get('/posts/:tag', async (req, res) => {
    const { tag } = req.params; 
    const posts = await Post.find({tags: tag})
    res.send(posts);
})

app.post('/new', async (req, res) => {
    const {title, content} = req.body;
    try{
        await Post.create({
            title,
            content,
            // Tags not done yet, TODO
            tags: ['a'],
        })
        // NOTE: res.status only sets the HTTP status for the response, it does not send anything!! Use res.sendStatus instead
        res.sendStatus(200);
    } catch (err) {
        console.error(err);
        res.sendStatus(500)
    }

})

app.listen(3000, () => {
    console.log("LISTENING ON 3000");
})