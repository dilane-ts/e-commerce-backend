
module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
        first_name: {
            type: Sequelize.STRING
        },
        last_name:  {
            type: Sequelize.STRING
        },
        email: {
            type: sequelize.EMAIL,
            required: true,
            unique: true,
        } 
    })

    return User
}