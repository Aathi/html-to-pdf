var AWS = require("aws-sdk");
var Blob = require('blob');

process.env["PATH"] =
  process.env["PATH"] + ":" + process.env["LAMBDA_TASK_ROOT"];

module.exports = {
  createHtml: function(data, callback) {
    var html = obituaryTemplate(data);
    var htmlBlob = new Buffer(html, "utf-8")
    var s3 = new AWS.S3();
    var fileName = `${data.name}.html`;
    var params = {
      Bucket: "obituary-files/html",
      Key: fileName,
      Body: htmlBlob,
      ContentType: 'text/html'
    };
    s3.putObject(params, function(err, data) {
      if (err) console.log("Function Error: ", err);
      return callback(data);
    });
  }
};

var obituaryTemplate = params => {
    return `<!doctype html>
      <html class="no-js">
      
      <head>
        <meta charset="utf-8">
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width,initial-scale=1">
        <title>${params.title}</title>
        <link rel="apple-touch-icon" href="apple-touch-icon.png">
        <script src="https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.4/TweenMax.min.js"></script>
        <style>
          @import url(//fonts.googleapis.com/earlyaccess/notosanstamil.css);
          html {
            line-height: 1.15;
            -webkit-text-size-adjust: 100%;
          }
      
          body {
            margin: 0;
          }
      
          h1 {
            font-size: 2em;
            margin: 0.67em 0;
          }
      
          hr {
            box-sizing: content-box;
            height: 0;
            overflow: visible;
          }
      
          pre {
            font-family: monospace, monospace;
            font-size: 1em;
          }
      
          a {
            background-color: transparent;
          }
      
          abbr[title] {
            border-bottom: none;
            text-decoration: underline;
            text-decoration: underline dotted;
          }
      
          b,
          strong {
            font-weight: bolder;
          }
      
          code,
          kbd,
          samp {
            font-family: monospace, monospace;
            font-size: 1em;
          }
      
          small {
            font-size: 80%;
          }
      
          sub,
          sup {
            font-size: 75%;
            line-height: 0;
            position: relative;
            vertical-align: baseline;
          }
      
          sub {
            bottom: -0.25em;
          }
      
          sup {
            top: -0.5em;
          }
      
          img {
            border-style: none;
          }
      
          button,
          input,
          optgroup,
          select,
          textarea {
            font-family: inherit;
            font-size: 100%;
            line-height: 1.15;
            margin: 0;
          }
      
          button,
          input {
            overflow: visible;
          }
      
          button,
          select {
            text-transform: none;
          }
      
          [type="button"],
          [type="reset"],
          [type="submit"],
          button {
            -webkit-appearance: button;
          }
      
          [type="button"]::-moz-focus-inner,
          [type="reset"]::-moz-focus-inner,
          [type="submit"]::-moz-focus-inner,
          button::-moz-focus-inner {
            border-style: none;
            padding: 0;
          }
      
          [type="button"]:-moz-focusring,
          [type="reset"]:-moz-focusring,
          [type="submit"]:-moz-focusring,
          button:-moz-focusring {
            outline: 1px dotted ButtonText;
          }
      
          fieldset {
            padding: 0.35em 0.75em 0.625em;
          }
      
          legend {
            box-sizing: border-box;
            color: inherit;
            display: table;
            max-width: 100%;
            padding: 0;
            white-space: normal;
          }
      
          progress {
            vertical-align: baseline;
          }
      
          textarea {
            overflow: auto;
          }
      
          [type="checkbox"],
          [type="radio"] {
            box-sizing: border-box;
            padding: 0;
          }
      
          [type="number"]::-webkit-inner-spin-button,
          [type="number"]::-webkit-outer-spin-button {
            height: auto;
          }
      
          [type="search"] {
            -webkit-appearance: textfield;
            outline-offset: -2px;
          }
      
          [type="search"]::-webkit-search-decoration {
            -webkit-appearance: none;
          }
      
          ::-webkit-file-upload-button {
            -webkit-appearance: button;
            font: inherit;
          }
      
          details {
            display: block;
          }
      
          summary {
            display: list-item;
          }
      
          [hidden],
          template {
            display: none;
          }
      
          body,
          html {
            height: 100%;
            background: #000;
            color: #fff;
          }
      
          * {
            box-sizing: border-box;
          }
      
          html {
            font-size: 62.5%;
          }
      
          h1 {
            font-size: 2rem;
          }
      
          body {
            font-family: Noto Sans Tamil, sans-serif;
            font-size: 10px;
            line-height: 1.4;
          }
      
          .container,
          aside,
          header,
          main,
          section {
            display: -ms-flexbox;
            display: flex;
          }
      
          header {
            font-size: 2rem;
          }
      
          .container,
          header,
          header .container {
            -ms-flex-pack: center;
            justify-content: center;
          }
      
          .container {
            width: 100%;
            padding: 1.5rem;
            margin: 0 auto;
          }
      
          @media only screen and (min-width: 992px) {
            .container {
              max-width: 90%;
            }
          }
      
          @media only screen and (min-width: 1200px) {
            .container {
              max-width: 1200px;
            }
          }
      
          .promotion {
            background: rgba(28, 179, 20, 0.5);
            position: relative;
          }
      
          .promotion .container {
            -ms-flex-direction: column;
            flex-direction: column;
          }
      
          @media only screen and (min-width: 680px) {
            .promotion .container {
              -ms-flex-direction: row;
              flex-direction: row;
              -ms-flex-align: center;
              align-items: center;
            }
          }
      
          .promotion .container .copy {
            font-size: 1.5rem;
            text-align: center;
            text-transform: uppercase;
            margin-bottom: 1.3rem;
          }
      
          @media only screen and (min-width: 680px) {
            .promotion .container .copy {
              margin-bottom: 0;
              margin-right: 1.5rem;
            }
          }
      
          @media only screen and (min-width: 768px) {
            .promotion .container .copy {
              margin-right: 2rem;
            }
          }
      
          @media only screen and (min-width: 992px) {
            .promotion .container .copy {
              margin-right: 3rem;
            }
          }
      
          .promotion .container a {
            display: inline-block;
            padding: 1rem 2rem;
            color: #000;
            background: #1cb314;
            background-image: linear-gradient(180deg, #1cb314, #128c16);
            -webkit-border-radius: 28;
            -moz-border-radius: 28;
            font-family: Arial;
            color: #fff;
            text-decoration: none;
            font-size: 1.5rem;
            text-align: center;
            text-transform: uppercase;
          }
      
          .promotion .container a svg {
            height: 1.8rem;
            width: auto;
            fill: #fff;
            margin-bottom: -3px;
            margin-left: 5px;
          }
      
          .promotion .share {
            text-align: center;
            text-transform: uppercase;
            display: -ms-flexbox;
            display: flex;
            -ms-flex-direction: column;
            flex-direction: column;
            color: hsla(0, 0%, 100%, 0.5);
            padding-bottom: 1.5rem;
          }
      
          @media only screen and (min-width: 992px) {
            .promotion .share {
              position: absolute;
              top: 1.5rem;
              right: 3rem;
            }
          }
      
          .promotion .share a {
            display: inline-block;
            width: 2.5rem;
            height: auto;
            margin: 0 0.2rem;
          }
      
          @media only screen and (min-width: 992px) {
            .promotion .share a {
              width: 2rem;
            }
          }
      
          .promotion .share a svg {
            width: 100%;
            height: auto;
            fill: #fff;
            opacity: 0.5;
            display: block;
          }
      
          header {
            display: -ms-flexbox;
            display: flex;
            background: transparent url("https://user-images.githubusercontent.com/5355180/38059659-95e545ae-32e7-11e8-9985-f849f94af901.png") top repeat-x;
          }
      
          header .container {
            padding-top: 7.5rem;
          }
      
          header .container h1 {
            margin-bottom: 0;
          }
      
          main {
            -ms-flex-pack: center;
            justify-content: center;
          }
      
          main,
          main .container {
            -ms-flex-direction: column;
            flex-direction: column;
          }
      
          main .container {
            position: relative;
            -ms-flex-align: center;
            align-items: center;
          }
      
          main .container .birth {
            -ms-flex-order: 2;
            order: 2;
            margin-bottom: 4rem;
          }
      
          main .container .avatar {
            -ms-flex-order: 1;
            order: 1;
            margin-bottom: 5rem;
          }
      
          main .container .death {
            -ms-flex-order: 3;
            order: 3;
          }
      
          @media only screen and (min-width: 768px) {
            main .container {
              -ms-flex-direction: row;
              flex-direction: row;
              -ms-flex-pack: justify;
              justify-content: space-between;
            }
            main .container .birth {
              -ms-flex-order: 1;
              order: 1;
              margin-bottom: 0;
            }
            main .container .avatar {
              -ms-flex-order: 2;
              order: 2;
            }
            main .container .death {
              -ms-flex-order: 3;
              order: 3;
            }
          }
      
          @media only screen and (min-width: 992px) {
            main .container {
              max-width: 60%;
            }
          }
      
          @media only screen and (min-width: 1200px) {
            main .container {
              max-width: 50%;
            }
          }
      
          main .container:first-of-type .vilaku {
            position: absolute;
            left: 50%;
            top: 50%;
            z-index: 1;
            width: 20rem;
           
            /*  */
            top: 190px;
            margin-left: -100px;
            transform: matrix(0.9, 0, 0, 0.9, 0, 0);
          }
      
          main .container:first-of-type .vilaku img {
            width: 100%;
            margin-top: -16rem;
          }
      
          main .container:last-of-type {
            -ms-flex-pack: center;
            justify-content: center;
            padding-top: 0;
            padding-bottom: 3rem;
            z-index: 2;
          }
      
          @media only screen and (min-width: 480px) {
            main .container:last-of-type {
              padding-top: 4rem;
              padding-bottom: 4rem;
            }
          }
      
          @media only screen and (min-width: 992px) {
            main .container:last-of-type {
              padding-top: 5rem;
              padding-bottom: 5rem;
            }
          }
      
          main .container:last-of-type h1 {
            color: #ff6;
          }
      
          @media only screen and (min-width: 992px) {
            main .container:last-of-type h1 {
              font-size: 3rem;
            }
          }
      
          main .container:last-of-type .name p {
            margin: 0;
            font-size: 1rem;
          }
      
          main .dates,
          main .name {
            text-align: center;
          }
      
          main .dates {
            width: 20%;
            display: -ms-flexbox;
            display: flex;
            -ms-flex-direction: column;
            flex-direction: column;
            -ms-flex-pack: center;
            justify-content: center;
          }
      
          main .dates p {
            font-size: 1.5rem;
            margin: 0;
          }
      
          main .dates p:first-of-type {
            margin-bottom: 1rem;
            border-bottom: 1px dashed #fff;
            line-height: 1;
            padding-bottom: 1rem;
          }
      
          main .avatar {
            position: relative;
          }
      
          main .avatar:after {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: #ccc;
            mix-blend-mode: color;
            transition: background-color 0.2s ease-in-out;
          }
      
          main .avatar img {
            position: relative;
            border-radius: 50%;
            width: 100%;
            height: auto;
            background: #fff;
            max-width: 25rem;
          }
      
          @media only screen and (min-width: 480px) {
            main .avatar img {
              max-width: 30rem;
            }
          }
      
          @media only screen and (min-width: 768px) {
            main .avatar img {
              max-width: 27rem;
            }
          }
      
          @media only screen and (min-width: 992px) {
            main .avatar img {
              max-width: 28rem;
            }
          }
      
          @media only screen and (min-width: 1200px) {
            main .avatar img {
              max-width: 30rem;
            }
          }
      
          .details {
            display: -ms-flexbox;
            display: flex;
            background: hsla(0, 0%, 100%, 0.05) url("https://user-images.githubusercontent.com/5355180/38059638-7a147430-32e7-11e8-9edb-48fda89eab54.png") top repeat-x;
          }
      
          .details .container {
            -ms-flex-direction: column;
            flex-direction: column;
            padding-top: 7.9rem;
            padding-bottom: 3rem;
            font-size: 1.4rem;
            color: hsla(0, 0%, 100%, 0.7);
          }
      
          @media only screen and (min-width: 480px) {
            .details .container {
              padding-top: 7.9rem;
              padding-bottom: 4rem;
            }
          }
      
          @media only screen and (min-width: 768px) {
            .details .container {
              -ms-flex-direction: row;
              flex-direction: row;
              padding-top: 9.9rem;
              padding-bottom: 5rem;
            }
          }
      
          .details .container aside {
            display: -ms-flexbox;
            display: flex;
            -ms-flex-direction: column;
            flex-direction: column;
            padding-bottom: 2rem;
            padding-top: 3rem;
            -ms-flex-order: 2;
            order: 2;
          }
      
          @media only screen and (min-width: 480px) {
            .details .container aside {
              padding-bottom: 4rem;
            }
          }
      
          @media only screen and (min-width: 768px) {
            .details .container aside {
              padding-right: 3rem;
              width: 33.33%;
              -ms-flex-order: 1;
              order: 1;
              padding-top: 0;
            }
          }
      
          @media only screen and (min-width: 992px) {
            .details .container aside {
              padding-bottom: 5rem;
            }
          }
      
          .details .container aside .contacts.events ul li p a {
            margin-left: 0;
          }
      
          .details .container aside .contacts.events ul li p a svg {
            height: 1.4rem;
            margin-left: 0.5rem;
            margin-bottom: -0.2rem;
            width: auto;
            fill: #fff;
          }
      
          .details .container aside .contacts.events ul li p a:after,
          .details .container aside .download {
            display: none;
          }
      
          @media only screen and (min-width: 768px) {
            .details .container aside .download {
              display: block;
            }
          }
      
          .details .container aside .download a {
            display: inline-block;
            padding: 1rem 2rem;
            color: #000;
            background: #1cb314;
            background-image: linear-gradient(180deg, #1cb314, #128c16);
            border-radius: 28px;
            font-family: Arial;
            color: #fff;
            text-decoration: none;
            font-size: 1.8rem;
            margin: 0 auto;
            width: 100%;
            text-align: center;
          }
      
          @media only screen and (min-width: 992px) {
            .details .container aside .download a {
              font-size: 2rem;
              padding: 1.5rem;
            }
          }
      
          @media only screen and (min-width: 1200px) {
            .details .container aside .download a {
              font-size: 2.5rem;
              padding: 1.5rem;
            }
          }
      
          .details .container aside .download a svg {
            height: 1.8rem;
            width: auto;
            fill: #fff;
            margin-bottom: -3px;
            margin-left: 5px;
          }
      
          @media only screen and (min-width: 992px) {
            .details .container aside .download a svg {
              height: 2rem;
            }
          }
      
          @media only screen and (min-width: 1200px) {
            .details .container aside .download a svg {
              height: 2.5rem;
              margin-bottom: -5px;
            }
          }
      
          .details .container aside .contacts {
            background: hsla(0, 0%, 100%, 0.07);
          }
      
          .details .container aside .contacts.contact {
            margin-bottom: calc(3rem + 1em);
          }
      
          @media only screen and (min-width: 992px) {
            .details .container aside .contacts.contact {
              margin-bottom: 0;
            }
          }
      
          @media only screen and (min-width: 992px) {
            .details .container aside .contacts {
              margin-top: 5rem;
            }
          }
      
          .details .container aside .contacts h3 {
            margin: 0;
            padding: 2rem;
            color: #ff6;
          }
      
          .details .container aside .contacts ul {
            margin: 0;
            padding: 0;
          }
      
          .details .container aside .contacts ul li {
            list-style: none;
            padding: 2rem;
          }
      
          .details .container aside .contacts ul li:nth-child(odd) {
            background: hsla(0, 0%, 100%, 0.08);
          }
      
          .details .container aside .contacts ul li p {
            margin: 0 0 0.7rem;
          }
      
          .details .container aside .contacts ul li p a {
            display: inline-block;
            padding: 0.7rem 2rem;
            color: #000;
            background: #1cb314;
            background-image: linear-gradient(180deg, #1cb314, #128c16);
            font-family: Arial;
            color: #fff;
            text-decoration: none;
            margin: 0 auto;
            border-radius: 2.6rem;
            text-align: center;
            margin-left: 0.5rem;
            position: relative;
          }
      
          .details .container aside .contacts ul li p a:after {
            content: " ";
            width: 1.4rem;
            height: 1.4rem;
            margin-left: 0.8rem;
            margin-bottom: -0.3rem;
            background: red;
            display: inline-block;
            background: transparent url(../images/phone.svg) 50% no-repeat;
            background-size: 100% auto;
          }
      
          .details .container aside .contacts ul li p:last-of-type {
            margin-bottom: 0;
          }
      
          .details .container aside .contacts ul li p:first-of-type {
            color: hsla(0, 0%, 100%, 0.9);
            font-weight: 700;
          }
      
          .details .container section {
            -ms-flex-order: 1;
            order: 1;
          }
      
          .details .container section .download {
            display: block;
            margin-bottom: 3rem;
          }
      
          @media only screen and (min-width: 480px) {
            .details .container section .download {
              margin-bottom: 4rem;
            }
          }
      
          @media only screen and (min-width: 768px) {
            .details .container section .download {
              display: none;
            }
          }
      
          .details .container section .download a {
            display: inline-block;
            padding: 1rem 2rem;
            color: #000;
            background: #1cb314;
            background-image: linear-gradient(180deg, #1cb314, #128c16);
            border-radius: 28px;
            font-family: Arial;
            color: #fff;
            text-decoration: none;
            font-size: 1.8rem;
            margin: 0 auto;
            width: 100%;
            text-align: center;
          }
      
          @media only screen and (min-width: 992px) {
            .details .container section .download a {
              font-size: 2rem;
              padding: 1.5rem;
            }
          }
      
          @media only screen and (min-width: 1200px) {
            .details .container section .download a {
              font-size: 2.5rem;
              padding: 1.5rem;
            }
          }
      
          .details .container section .download a svg {
            height: 1.8rem;
            width: auto;
            fill: #fff;
            margin-bottom: -3px;
            margin-left: 5px;
          }
      
          @media only screen and (min-width: 992px) {
            .details .container section .download a svg {
              height: 2rem;
            }
          }
      
          @media only screen and (min-width: 1200px) {
            .details .container section .download a svg {
              height: 2.5rem;
              margin-bottom: -5px;
            }
          }
      
          .details .container section p:first-of-type {
            margin-top: 0;
          }
      
          @media only screen and (min-width: 768px) {
            .details .container section {
              width: 66.66%;
              -ms-flex-order: 2;
              order: 2;
            }
          }
      
          .details section {
            -ms-flex-direction: column;
            flex-direction: column;
          }
      
          footer .container {
            font-size: 1.2rem;
            color: hsla(0, 0%, 100%, 0.7);
          }
      
          @media only screen and (min-width: 768px) {
            footer .container {
              padding: 2rem 0;
            }
          }
      
          .candle {
            width: 34px;
            margin: 30px auto 0;
            position: relative;
            height: 80%;
            -ms-flex-item-align: end;
            align-self: flex-end;
            animation: blink 0.1s infinite;
          }
      
          .wick {
            width: 6px;
            height: 50px;
            background: #23161a;
            top: 110px;
            transform: translateX(-50%) skewX(2deg);
            border-radius: 10%;
            box-shadow: 0 0 2px 0 #000;
          }
      
          .wick,
          .wick:before {
            position: absolute;
            left: 50%;
          }
      
          .wick:before {
            content: "";
            width: 0;
            height: 10px;
            box-shadow: 0 -14px 10px 8px #fff, 0 -10px 10px 8px rgba(255, 215, 0, 0.7),
            0 -3px 10px 8px rgba(255, 106, 0, 0.7), 0 6px 3px 4px #000;
          }
      
          .flame {
            width: 20px;
            height: 150px;
            margin: 0 auto;
            position: relative;
            animation: move 3s infinite, move-left 3s infinite;
            transform-origin: 50% 90%;
          }
      
          .flame .top {
            width: 20px;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            background: #fff;
            border-top-left-radius: 500%;
            border-bottom-left-radius: 50px;
            border-top-right-radius: 500%;
            border-bottom-right-radius: 50px;
            transform: skewY(-10deg);
            box-shadow: 0 0 0 3px #fff, 0 -20px 1px 4px #fff, 0 -25px 2px 3px gold,
            0 -30px 5px 4px #ff6a00, 0 0 150px 10px #ff6a00, 0 -10px 2px 4px #fff,
            0 -5px 3px 3px #fff;
            animation: flame-up 4s infinite;
          }
      
          .flame .shadows {
            position: absolute;
            left: 50%;
            top: 0;
            width: 1px;
            height: 60px;
            border-radius: 50%;
            box-shadow: 0 5px 20px 15px gold, 0 0 100px 20px #ff6a00,
            0 15px 50px 15px #ff6a00, 5px 30px 5px 13px #ff6a00,
            5px 50px 5px 13px #ff6a00, 0 75px 50px 30px #000;
          }
      
          .flame .bottom {
            transform: scale(0.9);
            position: absolute;
            bottom: 6px;
            left: 9px;
            width: 1px;
            height: 8px;
            border-radius: 1%;
            background: #2c2b39;
            box-shadow: 0 6px 10px 12px rgba(60, 76, 125, 0.3), 0 0 4px 8px #2c2b39,
            0 -12px 10px 8px rgba(255, 106, 0, 0.5), 0 5px 7px 12px #2c2b39,
            0 -3px 10px 12px #2c2b39, 5px -10px 10px 5px red, 0 -15px 10px 10px gold,
            5px -25px 10px 5px gold, 0 2px 5px 10px #30537d, 0 -2px 2px 14px #76daff,
            0 2px 10px 12px #76daff;
          }
      
          .wax {
            position: relative;
            top: 15px;
            width: 100%;
            height: 100%;
            background: #ff9224;
            background: linear-gradient(180deg, #ff9224 0, #ff9224 20px, #58523a 50px);
            filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ff9224", endColorstr="#58523a", GradientType=0);
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
            box-shadow: inset 0 7px 12px -2px #fbf348,
            inset 0 9px 57px -3px rgba(255, 0, 0, 0.4), inset 0 -5px 8px 2px #000,
            0 0 3px 0 #ff6a00;
          }
      
          @keyframes move {
            0% {
              transform: skewX(2deg) skewY(5deg);
            }
            50% {
              transform: skewX(-2deg) skewY(0deg);
            }
            to {
              transform: skewX(2deg) skewY(5deg);
            }
          }
      
          @keyframes move-left {
            50% {
              transform: skewX(3deg);
            }
          }
      
          @keyframes flame-up {
            50% {
              box-shadow: 0 0 0 3px #fff, 0 -38px 1px 2px #fff, 0 -41px 2px 3px gold,
              0 -50px 5px 4px #ff6a00, 0 0 150px 10px #ff6a00, 0 -10px 2px 4px #fff,
              0 -5px 3px 3px #fff;
            }
          }
      
          @keyframes blink {
            50% {
              opacity: 0.95;
            }
          }
          
        </style>
      </head>
      
      <body>
        <!--[if IE]><p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p><![endif]-->
        <div class="promotion">
          <div class="container">
            <div class="copy">Want a custom tribute?</div>
            <a href="tel:+44786743209" title="Call us now on +44 786 7432 09">Call us now: +44 786 7432 09
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M493.397 24.615l-104-23.997c-11.314-2.611-22.879 3.252-27.456 13.931l-48 111.997a24 24 0 0 0 6.862 28.029l60.617 49.596c-35.973 76.675-98.938 140.508-177.249 177.248l-49.596-60.616a24 24 0 0 0-28.029-6.862l-111.997 48C3.873 366.516-1.994 378.08.618 389.397l23.997 104C27.109 504.204 36.748 512 48 512c256.087 0 464-207.532 464-464 0-11.176-7.714-20.873-18.603-23.385z"
                />
              </svg>
            </a>
          </div>
          <div class="share">Share this on
            <div>
              <a href="#" id="shareThis" title="Share on Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M448 80v352c0 26.5-21.5 48-48 48h-85.3V302.8h60.6l8.7-67.6h-69.3V192c0-19.6 5.4-32.9 33.5-32.9H384V98.7c-6.2-.8-27.4-2.7-52.2-2.7-51.6 0-87 31.5-87 89.4v49.9H184v67.6h60.9V480H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48z"
                  />
                </svg>
              </a>
              <a href="#" id="shareThis" title="Share on Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-48.9 158.8c.2 2.8.2 5.7.2 8.5 0 86.7-66 186.6-186.6 186.6-37.2 0-71.7-10.8-100.7-29.4 5.3.6 10.4.8 15.8.8 30.7 0 58.9-10.4 81.4-28-28.8-.6-53-19.5-61.3-45.5 10.1 1.5 19.2 1.5 29.6-1.2-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3a65.447 65.447 0 0 1-29.2-54.6c0-12.2 3.2-23.4 8.9-33.1 32.3 39.8 80.8 65.8 135.2 68.6-9.3-44.5 24-80.6 64-80.6 18.9 0 35.9 7.9 47.9 20.7 14.8-2.8 29-8.3 41.6-15.8-4.9 15.2-15.2 28-28.8 36.1 13.2-1.4 26-5.1 37.8-10.2-8.9 13.1-20.1 24.7-32.9 34z"
                  />
                </svg>
              </a>
              <a href="#" id="shareThis" title="Share on Google+">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM164 356c-55.3 0-100-44.7-100-100s44.7-100 100-100c27 0 49.5 9.8 67 26.2l-27.1 26.1c-7.4-7.1-20.3-15.4-39.8-15.4-34.1 0-61.9 28.2-61.9 63.2 0 34.9 27.8 63.2 61.9 63.2 39.6 0 54.4-28.5 56.8-43.1H164v-34.4h94.4c1 5 1.6 10.1 1.6 16.6 0 57.1-38.3 97.6-96 97.6zm220-81.8h-29v29h-29.2v-29h-29V245h29v-29H355v29h29v29.2z"
                  />
                </svg>
              </a>
              <a href="#" id="shareThis" title="Share this">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M448 80v352c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48zM304 296c-14.562 0-27.823 5.561-37.783 14.671l-67.958-40.775a56.339 56.339 0 0 0 0-27.793l67.958-40.775C276.177 210.439 289.438 216 304 216c30.928 0 56-25.072 56-56s-25.072-56-56-56-56 25.072-56 56c0 4.797.605 9.453 1.74 13.897l-67.958 40.775C171.823 205.561 158.562 200 144 200c-30.928 0-56 25.072-56 56s25.072 56 56 56c14.562 0 27.823-5.561 37.783-14.671l67.958 40.775a56.088 56.088 0 0 0-1.74 13.897c0 30.928 25.072 56 56 56s56-25.072 56-56C360 321.072 334.928 296 304 296z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <header>
          <div class="container">
            <h1>${params.title}</h1>
          </div>
        </header>
        <main>
          <div class="container">
            <div class="vilaku">
              <div class="candle">
                <div class="flame">
                  <div class="shadows"></div>
                  <div class="top"></div>
                  <div class="middle"></div>
                  <div class="bottom"></div>
                </div>
                <div class="wick"></div>
              </div>
              <img src="https://user-images.githubusercontent.com/5355180/38059516-046cbc06-32e7-11e8-8ddb-bbbd7a1e4cf1.png" alt="Vilaku">
            </div>
            <div class="dates birth">
              <p>பிறப்பு</p>
              <p>${params.born}</p>
            </div>
            <div class="avatar">
              <img src="${params.avatar}" alt="${params.name}">
            </div>
            <div class="dates death">
              <p>இறப்பு</p>
              <p>${params.death}</p>
            </div>
          </div>
          <div class="container">
            <div class="name">
              <h1>${params.name}</h1>
              ${params.job ? `<p>${params.job}</p>`: ''}
            </div>
          </div>
        </main>
        <div class="details">
          <div class="container">
            <aside>
              <div class="download">
                <a href="${params.pdfUrl}">அன்று காலமானார்
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"
                    />
                  </svg>
                </a>
              </div>
              <div class="contacts contact">
                <h3>தொடர்புகளுக்கு</h3>
                <ul>
                  ${params.contacts.map(
                    d =>
                      `<li>
                        <p class="name">${d.name}</p>
                        ${d.phone1 ? ` <p class="number"><span>தொலைபேசி:</span> ${d.phone1}</p>`:''}
                        ${d.phone2 ? ` <p class="number"><span>தொலைபேசி:</span> ${d.phone2}</p>`: ''}
                      </li>
                    `
                  ).join(' ')}
                </ul>
              </div>
              <div class="contacts events">
                <h3>நிகழ்வுகள்</h3>
                <ul>
                ${params.events.map(
                  s => `
                <li>
                    <p class="name">${s.title}</p>
                    <p class="number">
                      <span>திகதி:</span>${s.date}</p>
                    <p class="number">
                      <span>முகவரி:</span> ${s.address}</p>
                    <p class="number map">
                      <a href="#">இருப்பிடத்தைக் காண்பி
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                          <path d="M576 56.015v335.97a23.998 23.998 0 0 1-13.267 21.466l-128 64C418.948 485.344 400 473.992 400 455.985v-335.97a23.998 23.998 0 0 1 13.267-21.466l128-64C557.052 26.656 576 38.008 576 56.015zm-206.253 42.07l-144-64c-15.751-7-33.747 4.461-33.747 21.932v335.967a24 24 0 0 0 14.253 21.931l144 64c15.751 7 33.747-4.461 33.747-21.931V120.017a24 24 0 0 0-14.253-21.932zm-228.48-63.536l-128 63.985A23.998 23.998 0 0 0 0 120v335.985c0 18.007 18.948 29.359 34.733 21.466l128-63.985A23.998 23.998 0 0 0 176 392V56.015c0-18.007-18.948-29.359-34.733-21.466z"
                          />
                        </svg>
                      </a>
                    </p>
                  </li>`
                ).join(' ')}
                </ul>
              </div>
            </aside>
            <section>
              <div class="download">
                <a href="#">அன்று காலமானார்
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"
                    />
                  </svg>
                </a>
              </div>
              <p>
              ${params.message}
              </p>
            </section>
          </div>
        </div>
        <footer>
          <div class="container">© Oru Group Ltd 2018 – Contact us on +44 786 7432 09</div>
        </footer>
        <script>
         TweenMax.set(".candle", {
          scale: 0.6
        }),
          $(document).ready(function() {
            function w() {
              $(window).width() > 0 &&
                $(window).width() < 479 &&
                TweenMax.set(".vilaku", { scale: 0.8, marginLeft: -100, top: 150 }),
                $(window).width() > 480 &&
                  $(window).width() < 767 &&
                  TweenMax.set(".vilaku", { scale: 0.9, marginLeft: -100, top: 190 }),
                $(window).width() > 768 &&
                  $(window).width() < 991 &&
                  TweenMax.set(".vilaku", { scale: 1, marginLeft: -100, top: 180 }),
                $(window).width() > 992 &&
                  $(window).width() < 1199 &&
                  TweenMax.set(".vilaku", { scale: 1.2, marginLeft: -100, top: 200 }),
                $(window).width() > 1200 &&
                  $(window).width() < 6e3 &&
                  TweenMax.set(".vilaku", { scale: 1.2, marginLeft: -100, top: 240 });
            }
            w(), $(window).resize(w);
          });  
        </script>
  
        <script>
          var shareButton = document.getElementById('shareThis');
          var supported = document.getElementById('support');
  
          // Listen for any clicks
          shareButton.addEventListener('click', function (ev) {
            // Check if the current browser supports the Web Share API
            if (navigator.share !== undefined) {
  
              // Get the canonical URL from the link tag
              // var shareUrl = document.querySelector('link[rel=canonical]') ? document.querySelector('link[rel=canonical]').href : window.location.href;
              var shareUrl = document.location.href;
              navigator.share({
                title: document.title,
                url: shareUrl
              }).then(() => console.log('Successful share'))
                .catch((error) => console.log('Error sharing:', error));
  
              ev.preventDefault();
            } else {
                alert('Unfortunately, this feature is not supported on your browser');
              // supported.innerHTML = "Unfortunately, this feature is not supported on your browser";
            }
          });
        </script>
  
      </body>
      </html>
      `;
  };
  
