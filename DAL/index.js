var db = require("../database/index"),
  config = require("../constants.json");

var dataAccess = {
  get: function (collectionName) {
      return new Promise(function (resolve, reject) {
        var _db = db.get();
        _db
          .collection(collectionName)
          .find({})
          .toArray(function (err, docs) {
            if (err) reject(err);
            if (docs) resolve(docs);
          });
      });
  },
};

module.exports = dataAccess;
