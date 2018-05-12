var express = require('express');
var app = express();

app.set("view engine", "ejs");
app.set("views", "view");

app.use(express.static(__dirname+"/public"));



app.get('/', function(req, res){
	res.render('layout');
});

app.get('/signup', function(req, res){
	var pagedata = { title : "Signup Page", pagename : 'signup/index'};
	res.render('layout', pagedata);
});

app.get('/about', function(req, res){
	var pagedata = { title : "About Page", pagename : 'about/index'};
	res.render('layout', pagedata);
});	


app.listen(3000, function(){
	console.log("Running");
});