const express = require("express")
const cors = require("cors")
const db = require("./app/models")

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// database sync
const Role = db.role
db.sequelize.sync({force: true}).then(() => {
    console.log("Drop and re-sync db")
    initialize_db()
})
.catch((err) => {
    console.log("Failed to sync db: " + err.message)
})

function initialize_db() {
     Role.create({
        id: 1,
        name: "customer"
    });
    Role.create({
        id: 2,
        name: "admin"
    })
}

app.listen(8080, () => {
    console.log('Server running at `http://127.0.0.1:8080`')
})