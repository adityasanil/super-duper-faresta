// Packages
const express = require("express");
const app = express();
const cors = require("cors");
const config = require("config");
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json({ limit: "50mb" }));

//Local imports
const auth = require("./routes/auth");
const getAllTenants = require("./routes/getTenants");
const registerTenant = require("./routes/registerTenants");
const regsiterClient = require("./routes/registerClientUser");
const { dbUriFuncAuth } = require("./services/dbConnectionAuth/dbUri");

// DB connection to authentication database
mongoose.set("useNewUrlParser", true);
mongoose.set("useUnifiedTopology", true);
mongoose.set("useCreateIndex", true);

const dbName = config.get("dbName");
const uri = dbUriFuncAuth(dbName);

mongoose
  .connect(uri)
  .then(() => console.log(`Connected to database: ${uri}..`))
  .catch(err => console.log("Could not connect to MongoDB: ", err));

// Routes
app.use("/auth", auth);
app.use("/register", registerTenant);
app.use("/getAllTenants", getAllTenants);
app.use("/regsiterClient", regsiterClient);

// Port
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Auth app listening on port ${PORT}...`));

module.exports = app;
