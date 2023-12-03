var express = require('express');
var bodyParser = require("body-parser");
var cors = require('cors');
var app = express();

app.use(cors());
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.get("/hello", function(req,res){
    res.send("Hello World");
})

var server = app.listen(1508, function () {
var host = server.address().address
var port = server.address().port

console.log("Server is listening at http://%s:%s", host, port)
})