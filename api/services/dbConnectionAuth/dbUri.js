const config = require("config");

const dbUsername = config.get("dbUsername");
const dbPassword = config.get("dbPassword");
const dbName = config.get("dbName");

function dbUriFuncAuth() {
  const uri = `mongodb+srv://${dbUsername}:${dbPassword}@cluster0-lbkhq.mongodb.net/${dbName}?retryWrites=true&w=majority`;
  return uri;
}

exports.dbUriFuncAuth = dbUriFuncAuth;
