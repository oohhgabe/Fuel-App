const mysql = require("mysql");

const config = {
    host: "localhost",
    user: "root",
    password: "password",
    database: "fueldb"
};

const db = mysql.createConnection(config);

db.connect((error) => {
    if (error) throw error;
    console.log("MySQL successfully connected!");
});
module.exports = {
    db: mysql.createConnection(config)
}