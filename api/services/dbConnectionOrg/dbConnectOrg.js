const mongoose = require("mongoose");
const { dbUriFunc } = require("./dbUriOrg");

function connect(dbName) {
  const uri = dbUriFunc(dbName);

  mongoose.set("useNewUrlParser", true);
  mongoose.set("useUnifiedTopology", true);
  mongoose.set("useCreateIndex", true);
  mongoose.set("useFindAndModify", false);

  mongoose
    .connect(uri)
    .then(() =>
      console.log(
        `Connected to tenant's organisation database (api): ${dbName}..`
      )
    )
    .catch(err => console.log("Could not connect to MongoDB api: ", err));
}

module.exports = {
  connect
};
