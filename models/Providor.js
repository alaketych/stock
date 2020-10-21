const Sequelize = require('sequelize')
const sequelize = require('../controllers/database')

const Providor =  sequelize.define('providor', {
    id: {
        type: Sequelize.INTEGER,
        autoInrement: true,
        allowNull: false,
        primaryKey: true,
    },

    name: {
        type: Sequelize.STRING,
        allowNull: false,
    }
})

module.exports = Providor