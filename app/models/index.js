const dbConfig = require("../config/db.config.js")
const Sequelize = require("sequelize")

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    port: dbConfig.PORT,
    dialect: dbConfig.dialect,
    operatorsAliases: false,
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
})

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

// model registry
db.user = require("./userModel.js")(sequelize, Sequelize)
db.role = require("./roleModel.js")(sequelize, Sequelize)
db.product = require("./productModel.js")(sequelize, Sequelize)
db.productImage = require("./productImageModel.js")(sequelize, Sequelize)
db.productTrack = require("./productTrackModel.js")(sequelize, Sequelize)
db.order = require("./orderModel.js")(sequelize, Sequelize)
db.orderItem = require("./orderItemsModel.js")(sequelize, Sequelize)
db.payment = require("./paymentModel.js")(sequelize, Sequelize)

// relationship between model
db.role.belongsToMany(db.user, {
    through: "user_roles",
    foreignKey: "role_id",
    otherKey: "user_id"
})
db.user.belongsToMany(db.role, {
    through: "user_roles",
    foreignKey: "user_id",
    otherKey: "role_id"
})

// images of products
db.productImage.belongsTo(db.product, {
    foreignKey: "product_id"
})
db.product.hasMany(db.productImage, {
    foreignKey: "product_id",
    as: "images"
})

// user product track
db.productTrack.belongsTo(db.user, {
    foreignKey: "user_id"
})
db.productTrack.belongsTo(db.product, {
    foreignKey: "product_id"
})
db.product.hasMany(db.productTrack, {
    foreignKey: "product_id",
    as: "tracks"
})

// order relationships
db.orderItem.belongsTo(db.order, {
    foreignKey: "order_id"
})
db.orderItem.belongsTo(db.product, {
    foreignKey: "order_id"
})
db.order.hasMany(db.orderItem, {
    foreignKey: "order_id",
    as: "orderLines"
})
db.order.belongsTo(db.user, {
    foreignKey: "user_id"
})
db.payment.belongsTo(db.order, {
    foreignKey: "order_id"
})

module.exports = db