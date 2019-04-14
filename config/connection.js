var mysql = require("mysql");

connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"C0d3b00tc4mp2016#@",
    database:"pambazo_db"
});

connection.connect(function(err) {
    if (err) {
        console.log("error Connecting: " + err.stack );
        return;
    }
    console.log("connected as id " + connection.threadId);

});

module.exports = connection;