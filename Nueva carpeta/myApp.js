var express = require('express');
var app = express();
var response = "/json MESSAGE_STYLE".toUpperCase()
if (process.env.VAR_NAME === "allCaps") {
  response = "/json MESSAGE_STYLE".toUpperCase();
} else {
  response = "/json MESSAGE_STYLE";
}


































 module.exports = app;
