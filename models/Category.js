const { sequelize, Sequelize } = require('../controllers/database')

const Category = sequelize.define('category', {
    label: {
        type: Sequelize.STRING
    }
})

Category.sync({force: true})
        .then(() => {
            return Category.create({
                label: 'Metal'
            })
        })