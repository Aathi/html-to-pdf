const express = require("express");
const app = express();
const router = express.Router();
const path = require("path");
const converter = require("./pdfGenerator");

app.get("/pdf", (req, res) => {
  if (typeof req.query.name !== "undefined") {
    converter.createpdf(req.query, function(data) {
      console.log('====================================');
      console.log(data);
      console.log('====================================');
    });
  }
});

app.listen(8000);

console.log("Running at Port 8000");
