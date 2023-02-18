const { db } = require("../db");

const getPosts = (req , res) => {
    const q = req.query.cat ? "SELECT * FROM posts WHERE cat=?" : "SELECT * FROM posts";

    db.query(q, [req.query.cat], (err, data) => {
        if(err) return res.send(err);

        return res.status(200).json(data);
    });
}

const getPost = (req , res) => {
    res.json("Hi")
}

const addPost = (req , res) => {
    res.json("Hi")
}

const deletePost = (req , res) => {
    res.json("Hi")
}

const updatePost = (req , res) => {
    res.json("Hi")
}

module.exports = {getPosts, getPost, addPost , deletePost , updatePost}