const express = require('express');
const mongojs = require('mongojs');
var ObjectId = mongojs.ObjectID;
const bodyParser = require('body-parser');
var db = mongojs('bank', ['clients']);
var app = express();

app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"));

app.get('/api/clients', function (req,res) {
  db.clients.find({}, function (err,docs) {
    res.send(docs);
  });
});

app.post('/api/clients', function (req,res) {
  db.clients.insert(req.body, function (err,docs) {
    res.send(docs);
  });
});

app.get('/api/clients/:id', function (req,res) {
  db.clients.findOne({_id: ObjectId(req.params.id)}, function (err,docs) {
    res.send(docs);
  });
});

app.put('/api/clients/:id', function (req,res) {
  var newClient = {
    name: req.body.name,
    deposit: req.body.deposit,
    cCard: req.body.cCard,
  }
  db.clients.update({_id: ObjectId(req.body._id)}, {$set: newClient}, function (err,docs) {
    res.send(docs);
  });
});

app.delete('/api/clients/:id', function (req,res) {
  db.clients.remove({_id: ObjectId(req.params.id)}, function (err,docs) {
    res.send(docs);
  });
});

app.listen(3000, function () {
  console.log("Listening on port 27017 !!!");
});
