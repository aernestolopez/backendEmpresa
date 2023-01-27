import mysql = require("mysql");

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "usuario",
    database: "devices"
});
con.connect();
