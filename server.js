var express = require('express');
var bodyParser = require("body-parser")
var expressHandlebars = require("express-handlebars");
var app = express();
var PORT = process.env.PORT || 7777;

app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());



app.engine("handlebars", expressHandlebars({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

var routes = require("./controllers/pambazo_controller");

app.use(routes);

app.listen(PORT, function(){
    console.log("App listening on port:%s ", PORT);

})