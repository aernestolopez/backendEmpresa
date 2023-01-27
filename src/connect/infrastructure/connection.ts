import mysql = require("mysql");

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "usuario",
    database: "Estados"
});

con.connect();