const express = require('express');
const bodyParser = require('body-parser');
var mongoose = require('mongoose');

var db = require('./models/dbconnect');
var User = require('./models/users');



var app = express();

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended : true}));

//pushing data into db

app.post('/', function(req, res) {
    var user = new User();
    user.username = req.body.username;
    user.email = req.body.email;

    user.save(function(err) {
        if(err){
            throw err;
        }
        res.json({"Status" : "Succeeded"});
    });
});

//reading data from db

app.get('/', function(req, res) {
    User.find({}, function(err, users){
        if(err) {
            throw err;
        }
        res.json(users);
    });
});

//deleting data from db

app.delete('/:id', function(err, users){
    User.remove({email : req.params.id}, function(err) {
        if(err) {
            throw err;
        }
        res.json("Data deleted from db");
    });
});

//modifying data in db

app.put('/:id', function(req, res) {
    User.findById(req.params.id, function(err, user) {
        if(err) {
            throw err;
        }
        user.username = req.body.name;
        user.email = req.body.email;

        user.save(function(err) {
            if(err) {
                throw err;
            }

            res.json(user);
        });
    });
});

app.listen(5000, function(err) {
    if(err) {
        throw err;
    }
    console.log("App is running on 5000");
})