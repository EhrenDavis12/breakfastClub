var express = require("express");
var app = express();
var path = require("path");

app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

const PORT = process.env.PORT || 8080;

