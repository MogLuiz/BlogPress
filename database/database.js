const Sequelize = require("sequelize")

const connection = new Sequelize('guiapress', 'root', '35117423', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = connection