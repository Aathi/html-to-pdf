const express = require("express");
const app = express();
const router = express.Router();
const path = require("path");
const converter = require("./pdfGenerator");

app.get("/pdf", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  if (typeof req.query.name !== "undefined") {
      console.log('==============req.query======================');
      console.log(req.query);
      console.log('====================================');
      converter.createpdf(req.query);
  }
});

app.listen(8000);

console.log("Running at Port 8000");


