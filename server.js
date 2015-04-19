var express = require('express');
var app = express();
var cookieParser = require('cookie-parser');
var session = require('express-session');
var MongoClient = require('mongodb').MongoClient;

app.engine('html',require('ejs').__express)
app.set('view engine','html');
app.set('views',__dirname + '/public/views');
app.use(express.static(__dirname + '/public'));

//MongoClient.connect('mongodb://localhost:27017/cardDB',function(err,db){
//    var cards = db.collection('cards');
//    cards.find().toArray(function(err,docs){
//
//    });
//});
app.get('/',function(req,res){
    res.render('index');
});
app.listen(3000);