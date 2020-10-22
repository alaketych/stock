const Category = require('../models/Category')

async function getCategories(request, response) {
    try {
        const categories = await Category.findAll()
            .then(category => response.send(category))
    }
    catch(error) {
        response.status(500)
            .send(error)
    }
}

async function getCategory(request, response) {
    try {
        const categoryItem = await Category.findOne({
                where: {
                    id: request.params.id
                }
            })
            .then(category => response.send(category))
    }
    catch(error) {
        response.status(500)
            .send(error)
    }
}

async function createCategory(request, response) {
    try {
        const category = await Category.create({
            name: request.body.name
        })
        .then(category => response.status(201).send(category))
    }
    catch(error) {
        response.status(400)
            .send(error)
    }
}

async function updateCategory(request, response) {
    try {
        const categoryItem = await Category.find({
            id: request.params.id
        })

        if(categoryItem) {
            const updateCategory = await categoryItem.update({
                name: request.params.name
            })

            response.status(200).send(updateCategory)
        }

        else{
            response.status(404)
                .send('Category has not been found.')
        }
    }
    catch(error) {
        response.status(400)
            .send(error)
    }
}


async function deleteCategory(request, response) {
    try {
        const categoryItem = await Category.findOne({
            id: request.params.id
        })

        if(categoryItem) {
            const deleteCategory = await categoryItem.destory({
                where: {
                    id: request.params.id
                }
            })

            response.status(200).send(deleteCategory)
        }

        else{
            response.status(404)
                .send('Category has not been found.')
        }
    }
    catch(error) {
        response.status(400)
            .send(error)
    }
}

module.exports = {
    getCategories,
    getCategory,

    createCategory,
    updateCategory,

    deleteCategory,
}