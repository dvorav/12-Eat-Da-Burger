//Requiring mysql
let mysql = require("mysql")

//Assigning connection
let connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Dillon123",
    database: "burgers_db",
  });
  
  connection.connect(function (err) {
    if (err) throw err;
    console.log("The local server has been created!")
  });
//Exporting connection
  module.exports = connection