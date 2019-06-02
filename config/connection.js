var mysql = require("mysql");

connection = mysql.createConnection({
    host:"jsftj8ez0cevjz8v.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user:"rootrvqugi4dny1oys1f",
    password:"d9ryu7o647kvam69",
    port: "3306",
    database:"wqqshpqxd45ud6va"
});

connection.connect(function(err) {
    if (err) {
        console.log("error Connecting: " + err.stack );
        return;
    }
    console.log("connected as id " + connection.threadId);

});

module.exports = connection;