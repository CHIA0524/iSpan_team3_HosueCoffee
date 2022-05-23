const mysql=require("mysql2")
// connect MySQL
var connection  = mysql.createConnection ({
    host:'localhost',
    user: "root",
    password: "Passw0rd!",
    database: "team3",
});
module.exports = connection ;

