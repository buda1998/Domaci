const path = require("path");

const express = require("express");

const blogRoutes = require("./routes/demo.js");
const db = require("./data/database");
const { json } = require("express");

const app = express();

// Activate EJS view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: false })); // Parse incoming request bodies
app.use(express.static("public")); // Serve static files (e.g. CSS files)
app.use("/images", express.static("images"));

app.use(blogRoutes);

db.connectToDatabase().then(function () {
  app.listen(3000);
});
