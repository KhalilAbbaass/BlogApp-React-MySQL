const express = require('express');

const postRoute = require("./routes/posts");

const app = express();

app.use(express.json());

app.use("/api/posts" , postRoute)

app.listen(8800, () => {
    console.log("Server is Running")
})
