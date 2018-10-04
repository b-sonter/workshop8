const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/mydb";

const express = require('express');
const app = express();

const bodyParser = require('body-parser')
app.use(bodyParser.json());

//connect to server
console.log("Setting up initial db state... ");
MongoClient.connect(url, function(err, db){
  if(err) throw err;

  my_database = "mydb"
  let dbo = db.db(my_database);
  console.log("Succesfully connected to " + my_database);
  db.close();
});

require('./create.js')(MongoClient, url);
require('./add.js')(MongoClient, url);
