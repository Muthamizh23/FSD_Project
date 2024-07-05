var _collection = require("../../constants.json").collections,
  dataAccess = require("../../DAL/");

var blogs = {
  authors: function (req, res) {
    dataAccess
      .get(_collection.authors)
      .then(function (result) {
        return res.status(200).json(result);
      })
      .catch(function (err) {
        console.log("Error while getting existing authors: " + err);
        return res.status(400).json({ statusText: "Something went wrong" });
      });
  },
  posts: function (req, res) {
    dataAccess
      .get(_collection.posts)
      .then(function (result) {
        return res.status(200).json(result);
      })
      .catch(function (err) {
        console.log("Error while getting existing posts: " + err);
        return res.status(400).json({ statusText: "Something went wrong" });
      });
  },
  comments: function (req, res) {
    dataAccess
      .get(_collection.posts)
      .then(function (result) {
        return res.status(200).json(result);
      })
      .catch(function (err) {
        console.log("Error while getting existing comments: " + err);
        return res.status(400).json({ statusText: "Something went wrong" });
      });
  },
};

module.exports = blogs;
