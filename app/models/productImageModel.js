module.exports = (sequelize, Sequelize) => {
    const productImage = sequelize.define("product_images", {
        path: {
            type: Sequelize.STRING,
        },
        is_default: {
            type: Sequelize.BOOLEAN,
        },
    })

    return productImage
}