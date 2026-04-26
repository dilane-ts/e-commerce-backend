module.exports = (sequelize, Sequelize)=> {
    const Product = sequelize.define("products", {
        name: {
            type: Sequelize.STRING,
        },
        price: {
            type: Sequelize.FLOAT,
        },
        stock: {
            type: Sequelize.INTEGER,
        },
    })

    return Product
}