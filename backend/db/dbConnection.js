const mysql = require("mysql2")
const con = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "Abcd1234",
    database: "tutorial"
});

con.connect(function(err) {
    if (err) throw err;
    //console.log("Connected!")
});

module.exports = con;