var express = require('express');
var router = express.Router();
const mongo = require("mongodb");
const mongoose = require("mongoose");
const cors = require("cors");
// import dotenv
const dotenv = require("dotenv");
dotenv.config();

mongoose.connect(process.env.MONGO_URI,{ useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });

router.use(cors());

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

// create a new message Schema that allows to create an instance of objects
const messageSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    message: String
  }
);

const messageModel = mongoose.model("siteMessage", messageSchema);

router.post('/new', function(req, res){
new messageModel({
  name: req.body.name,
  email: req.body.email,
  message: req.body.message				
}).save(function(err, doc){
  if(err) res.json(err);
  else    res.send('thank you!');
});
});


module.exports = router;
