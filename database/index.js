const mongoClient = require("mongodb").MongoClient;

var _db = null;

module.exports = {
  connect: function () {
    try {
      var connectionString = 'mongodb://localhost:27017/thamizh';

      mongoClient.connect(
        connectionString,
        {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        },
        function (err, client) {
          var dbName = 'thamizh';
          _db = client.db(dbName);

          if (err) {
            //Handle connection error
            console.log("Mongo Error! connecting with DB: " + err);
            process.exit();
          } else console.log("Mongo DB Connected Successfully.");
        }
      );
    } catch (err) {
      console.log("Mongo Error! connecting with DB: " + err);
      process.exit();
    }
  },
  get: function () {
    return _db;
  },
};
