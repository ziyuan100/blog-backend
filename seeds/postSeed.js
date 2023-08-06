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
                content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dolore sint expedita quibusdam eaque repellat dolorem adipisci minus nisi! Facere aperiam iusto nihil quaerat architecto, ipsa non voluptatem nemo assumenda!
                Illum molestiae fugiat corporis? Provident voluptates nisi amet deserunt asperiores adipisci nam debitis in perferendis rerum ducimus ratione, perspiciatis libero aliquam nulla voluptas, molestiae hic placeat. Magni labore molestiae consectetur?
                Minus nobis similique modi dolores saepe aliquid vel autem quam esse, tempora repudiandae? Laborum qui, rem quisquam quae odio excepturi nam reprehenderit fugiat, quis veritatis ea sapiente numquam, blanditiis placeat?
                Ex illum mollitia, reprehenderit a, molestiae alias, asperiores debitis est quia provident possimus vel. Necessitatibus sed, cumque deleniti, delectus, soluta illo impedit reprehenderit consequuntur nihil sapiente numquam. Perferendis, in vero.
                Quam qui enim iste ratione perspiciatis repellat, iure accusantium ducimus impedit aut illo? Eaque, aliquid ut quis temporibus impedit quam non consectetur iusto fugiat quas ad accusamus mollitia rem placeat?`,
                tags: ["a", "b", "c"],
                
            },
            {
                title: "post #2",
                content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dolore sint expedita quibusdam eaque repellat dolorem adipisci minus nisi! Facere aperiam iusto nihil quaerat architecto, ipsa non voluptatem nemo assumenda!
                Illum molestiae fugiat corporis? Provident voluptates nisi amet deserunt asperiores adipisci nam debitis in perferendis rerum ducimus ratione, perspiciatis libero aliquam nulla voluptas, molestiae hic placeat. Magni labore molestiae consectetur?
                Minus nobis similique modi dolores saepe aliquid vel autem quam esse, tempora repudiandae? Laborum qui, rem quisquam quae odio excepturi nam reprehenderit fugiat, quis veritatis ea sapiente numquam, blanditiis placeat?
                Ex illum mollitia, reprehenderit a, molestiae alias, asperiores debitis est quia provident possimus vel. Necessitatibus sed, cumque deleniti, delectus, soluta illo impedit reprehenderit consequuntur nihil sapiente numquam. Perferendis, in vero.
                Quam qui enim iste ratione perspiciatis repellat, iure accusantium ducimus impedit aut illo? Eaque, aliquid ut quis temporibus impedit quam non consectetur iusto fugiat quas ad accusamus mollitia rem placeat?`,
                tags: ["a"]
            },
            {
                title: "post #3",
                content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dolore sint expedita quibusdam eaque repellat dolorem adipisci minus nisi! Facere aperiam iusto nihil quaerat architecto, ipsa non voluptatem nemo assumenda!
                Illum molestiae fugiat corporis? Provident voluptates nisi amet deserunt asperiores adipisci nam debitis in perferendis rerum ducimus ratione, perspiciatis libero aliquam nulla voluptas, molestiae hic placeat. Magni labore molestiae consectetur?
                Minus nobis similique modi dolores saepe aliquid vel autem quam esse, tempora repudiandae? Laborum qui, rem quisquam quae odio excepturi nam reprehenderit fugiat, quis veritatis ea sapiente numquam, blanditiis placeat?
                Ex illum mollitia, reprehenderit a, molestiae alias, asperiores debitis est quia provident possimus vel. Necessitatibus sed, cumque deleniti, delectus, soluta illo impedit reprehenderit consequuntur nihil sapiente numquam. Perferendis, in vero.
                Quam qui enim iste ratione perspiciatis repellat, iure accusantium ducimus impedit aut illo? Eaque, aliquid ut quis temporibus impedit quam non consectetur iusto fugiat quas ad accusamus mollitia rem placeat?`,
                tags: ["b"]
            },
            {
                title: "post #4",
                content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dolore sint expedita quibusdam eaque repellat dolorem adipisci minus nisi! Facere aperiam iusto nihil quaerat architecto, ipsa non voluptatem nemo assumenda!
                Illum molestiae fugiat corporis? Provident voluptates nisi amet deserunt asperiores adipisci nam debitis in perferendis rerum ducimus ratione, perspiciatis libero aliquam nulla voluptas, molestiae hic placeat. Magni labore molestiae consectetur?
                Minus nobis similique modi dolores saepe aliquid vel autem quam esse, tempora repudiandae? Laborum qui, rem quisquam quae odio excepturi nam reprehenderit fugiat, quis veritatis ea sapiente numquam, blanditiis placeat?
                Ex illum mollitia, reprehenderit a, molestiae alias, asperiores debitis est quia provident possimus vel. Necessitatibus sed, cumque deleniti, delectus, soluta illo impedit reprehenderit consequuntur nihil sapiente numquam. Perferendis, in vero.
                Quam qui enim iste ratione perspiciatis repellat, iure accusantium ducimus impedit aut illo? Eaque, aliquid ut quis temporibus impedit quam non consectetur iusto fugiat quas ad accusamus mollitia rem placeat?`,
                tags: ["c"]
            },
            {
                title: "post #5",
                content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dolore sint expedita quibusdam eaque repellat dolorem adipisci minus nisi! Facere aperiam iusto nihil quaerat architecto, ipsa non voluptatem nemo assumenda!
                Illum molestiae fugiat corporis? Provident voluptates nisi amet deserunt asperiores adipisci nam debitis in perferendis rerum ducimus ratione, perspiciatis libero aliquam nulla voluptas, molestiae hic placeat. Magni labore molestiae consectetur?
                Minus nobis similique modi dolores saepe aliquid vel autem quam esse, tempora repudiandae? Laborum qui, rem quisquam quae odio excepturi nam reprehenderit fugiat, quis veritatis ea sapiente numquam, blanditiis placeat?
                Ex illum mollitia, reprehenderit a, molestiae alias, asperiores debitis est quia provident possimus vel. Necessitatibus sed, cumque deleniti, delectus, soluta illo impedit reprehenderit consequuntur nihil sapiente numquam. Perferendis, in vero.
                Quam qui enim iste ratione perspiciatis repellat, iure accusantium ducimus impedit aut illo? Eaque, aliquid ut quis temporibus impedit quam non consectetur iusto fugiat quas ad accusamus mollitia rem placeat?`,
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