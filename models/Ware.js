const Sequelize = require('sequelize')
const sequelize = require('../controllers/database')

const Category = require('./Category')
const Providor = require('./Providor')

const Ware = sequelize.define('ware', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },

    label: {
        type: Sequelize.STRING,
        allowNull: false,
    },

    price: {
        type: Sequelize.FLOAT,
        allowNull: false,
    },

    expires: {
        type: Sequelize.DATE,
        allowNull: false,
    },

    dimantion: {
        type: Sequelize.FLOAT,
        allowNull: false,
    },

    quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },

    categoryID: {
        type: Sequelize.INTEGER,
        references: 'categories',
        references: {
            model: Category,
            key: 'id'
        }
    },

    providerID: {
        type: Sequelize.INTEGER,
        references: {
            model: Providor,
            key: 'id'
        }
    },
})

Ware.associate = function(models) {
    Ware.hasMany(models.Category, {
        foreignKey: 'categoryID'
    })

    Ware.hasMany(models.Providor, {
        foreignKey: 'providerID'
    })
}

module.exports = Ware