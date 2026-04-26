module.exports = (sequelize, Sequelize) => {
    const Payment = sequelize.define("payments", {
        amount: {
            type: Sequelize.FLOAT,
        },
        reference: {
            type: Sequelize.STRING,
        },
        status: {
            type: Sequelize.STRING,
        },
        payment_date: {
            type: Sequelize.DATE,
        }
    })

    return Payment
}