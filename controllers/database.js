const Sequelize = require('sequelize')
const sequelize = new Sequelize(`${process.env.MYSQL_DATABASE}`,
                                `${process.env.MYSQL_DATABASE}`,
                                `${process.env.MYSQL_DATABASE}`, {
    host: 'localhost',
    dialect: 'mysql'
})

sequelize.authenticate()
    .then(error => {
        console.log('Connection has been estanblished successfully')
    })
    .catch(error => {
        console.log('Unable to connect to the database')
    })

module.exports = sequelize