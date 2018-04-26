const express = require("express");
const app = express();
const router = express.Router();
const path = require("path");
const pdf = require("./pdfGenerator");
const html = require("./htmlGenerator");

app.get("/file-composer", (req, res) => {
  if (typeof req.query.name !== "undefined") {
    html.createHtml(req.query, function(htmlresp) {
      pdf.createPdf(req.query, function(pdfResp) {
        console.log('====================================');
        console.log('Html has been created',htmlresp);
        console.log('PDF has been created', pdfResp);
        console.log('====================================');
      });
    });
  }
});

app.listen(8000);

console.log("Running at Port 8000");
