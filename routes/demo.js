const express = require("express");
const multer = require("multer");

const db = require("../data/database");

const storageConfig = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "images");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storageConfig });
const router = express.Router();

router.get("/", function (req, res) {
  res.render("home");
});

router.get("/create-gallery", function (req, res) {
  res.render("create-gallery");
});

router.get("/your-gallery", function (req, res) {
  res.render("your-gallery");
});

router.get("/home", function (req, res) {
  res.render("home");
});

module.exports = router;
