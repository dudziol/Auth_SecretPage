var express = require("express"),
	app = express(),
	mongoose = require("mongoose"),
	passport = require("passport"),
	bodyParser = require("body-parser"),
	LocalStrategy = require("passport-local"),
	passportLocalMongoose = require("passport-local-mongoose"),
	User = require("./models/user");

mongoose.connect("mongodb://localhost/auth_demo");
app.set("view engine", "ejs");

app.get("/", function(req, res){
	res.render("home");
});

app.get("/secret", function(req, res){
	res.render("secret");
})

app.listen(3000, function(){
	console.log("Server started");
});