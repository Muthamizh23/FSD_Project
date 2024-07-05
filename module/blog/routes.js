var express = require("express"),
  router = express.Router(),
  controller = require("./index");

router.get("/authors", controller.authors);
router.get("/posts", controller.posts);
router.get("/comments", controller.comments);

module.exports = router;