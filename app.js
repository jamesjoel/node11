var express = require('express');
var app = express();

var category = require('./model/category');
var product = require('./model/product');

app.set("view engine", "ejs");
app.set("views", "view");

app.use(express.static(__dirname+"/public"));


app.get('/', function(req, res){
	var pagedata = { title : "Home Page", pagename : 'home/index', cateData : category.getAll, product : product.getAll};
	res.render('layout', pagedata);
});

app.get('/signup', function(req, res){
	var pagedata = { title : "Signup Page", pagename : 'signup/index'};
	res.render('layout', pagedata);
});

app.get('/about', function(req, res){
	var pagedata = { title : "About Page", pagename : 'about/index'};
	res.render('layout', pagedata);
});	


app.get('/test', function(req, res){
	// var city = ["indore", "ujjain", "bhopal"]
	var city = [{x : "indore"}, {x : "ujjain"}, {x : "bhopal"}];

	var obj = { a : "rohit", b: city };
	res.render('test', obj);
});

app.listen(3000, function(){
	console.log("Running");
});