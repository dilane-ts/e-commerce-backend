require("dotenv").config()

module.exports = {
    HOST: process.env.MYSQL_HOST || "localhost",
    PORT: process.env.MYSQL_PORT || 3306,
    USER: process.env.MYSQL_USER || "root",
    PASSWORD: process.env.MYSQL_PASSWORD || "root",
    DB: process.env.MYSQL_DATABASE || "e_commerce_db",
    dialect: "mysql",
    pool: { max: 5, min: 0, acquire: 30000, idle: 10000 } 
}