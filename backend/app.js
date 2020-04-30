const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

//bodyParser Middleware:
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Setting Basic Headers for CORS:
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-with,Content-Type,Accept"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
  next();
});

//Connection to Mongoose:

//Routes:
app.get('/',(req,res)=>{
    res.send("<h1>Hello from Yuvi");
})
module.exports = app;