const express = require("express"),
  router = express.Router();

router.use(require("../module/blog/routes"));

module.exports = router;
