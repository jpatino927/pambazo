var mysql = require("mysql");

connection = mysql.createConnection('mysql://rvqugi4dny1oys1f:d9ryu7o647kvam69@jsftj8ez0cevjz8v.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/wqqshpqxd45ud6va');

connection.connect(function(err) {
    if (err) {
        console.log("error Connecting: " + err.stack );
        return;
    }
    console.log("connected as id " + connection.threadId);

});

module.exports = connection;