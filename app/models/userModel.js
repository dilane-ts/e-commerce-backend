
module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
        first_name: {
            type: Sequelize.STRING
        },
        last_name:  {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING,
            required: true,
            unique: true,
        },
        password: {
            type: Sequelize.STRING,
        },
        status: {
            type: Sequelize.STRING
        }
    })

    return User
}