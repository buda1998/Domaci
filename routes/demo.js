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

router.get("/home", function (req, res) {
  res.render("home");
});

router.get("/create-gallery", function (req, res) {
  res.render("create-gallery");
});

router.get("/your-gallery", async function (req, res) {
  const foldername = await db.getDb().collection("foldername").find().toArray();
  res.render("your-gallery", { foldersname: foldername });
});

router.post("/your-gallery", upload.array("image"), async function (req, res) {
  const uploadImageFiles = req.files;
  const fileData = req.body;

  await db.getDb().collection("filename").insertOne({
    name: fileData.foldername,
    imagePath: uploadImageFiles[0].path,
  });
  res.redirect("your-gallery");
});

module.exports = router;
