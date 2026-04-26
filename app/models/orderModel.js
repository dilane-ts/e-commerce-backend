module.exports = (sequelize, Sequelize) => {
    const Order = sequelize.define("orders", {
        status: {
            type: Sequelize.STRING,
        },
        approved_at: {
            type: Sequelize.DATE
        }
    })

    return Order;
}