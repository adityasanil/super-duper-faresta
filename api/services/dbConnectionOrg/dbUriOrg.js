const config = require("config");

const dbUsername = config.get("dbUsername");
const dbPassword = config.get("dbPassword");

function dbUriFunc(dbName) {
  const uri = `mongodb+srv://${dbUsername}:${dbPassword}@far-cluster-rjeer.mongodb.net/${dbName}?retryWrites=true&w=majority`;
  return uri;
}

exports.dbUriFunc = dbUriFunc;
