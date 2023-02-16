const { addPost } = require("../controllers/posts");

const router = require("express").Router();

router.get('/test', addPost)

module.exports = router;