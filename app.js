var express = require('express');
var bodyparser = require('body-parser');
var session = require('express-session');

var app = express();


app.use(express.static(__dirname + "/public"));

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));

app.use(session({secret : 'My_city', resave : true, saveUninitialized : false}));

var routes = require('./routes/routes.js');
app.set('view engin', 'ejs');

app.get('/',routes.loginPageHandler);
app.get('/interest',routes.interestPageHandler);
app.post('/place',routes.placePageHandler);

var port = process.env.PORT || 8080;
app.listen(port, function(req, res){
  console.log("Server has been started on port: " +port);
});
