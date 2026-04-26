module.exports = (sequelize, Sequelize) => { 
    const ProductTrack = sequelize.define("product_tracks", {
        rank: {
            type: Sequelize.INTEGER,
        },
        comment: {
            type: Sequelize.STRING,
        },
    })

    return ProductTrack
}