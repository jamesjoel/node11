var express = require('express');
var app = express();

app.set("view engine", "ejs");
app.set("views", "view");

app.use(express.static(__dirname+"/public"));
var cate= [
			{
				category : "Mobile"
				
			},
			{
				category : "Home Applicane"

			},
			{
				category : "Fashion"
			},
			{
				category : "Electronics"
			}
		];

var pro = [
		{
			productName : "Sony",
			productPrice : 25000,
			imgUrl : "images/2.jpg"
		},
		{
			productName : "HTC",
			productPrice : 22000,
			imgUrl : "images/2.jpg"
		},
		{
			productName : "Iphone",
			productPrice : 55000,
			imgUrl : "images/4.png"
		},
		{
			productName : "Samsung TV",
			productPrice : 36500,
			imgUrl : "images/3.jpg"
		}
	];

app.get('/', function(req, res){
	var pagedata = { title : "Home Page", pagename : 'home/index', cateData : cate, product : pro};
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