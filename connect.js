// run using node connect.js
// type in browser: localhost:5000/

const mysql = require("mysql");
const express = require("express");
const bodyParser = require("bosy-parser");
const encoder = bodyParser.urlencoded();

const app = express();
app.use("/assets",express.static("assets"));

const connection = mysql ({
    host: "localhost",
    user: "root",
    password:"",
    database:"fitness"
});

// db connection
connection.connect(function(error){
    if (error) throw error
    else console.log("connected to  the database sucessfuly!")
})

app.get("/",function(req,res) {
    res.sendFile(__dirname + "/index.html");    
})

app.post("/",encoder,function(req,res){
var username = req.body.username;
var password = req.body.password;

    connection.query("select * from user where username = ? and password = ?",[username,password],function(error,results,fields){
        if(results.length>0){
            // if login=sucessfull send to index
            res.redirect("/home");
        }
        else{
            res.redirect("/");
        }
        res.end();
    } )
})

app.get("/home", function(req,res){
    res.sendFile(__dirname + "/index.html")
})

app.listen(4000);