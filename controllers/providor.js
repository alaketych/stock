const Providor = require('../models/Providor')

async function getProvidors(request, response) {
    try {
        const providors = await Providor.findAll()
            .then(providor => response.send(providor))
    }
    catch(error) {
        response.status(500)
            .send(error)
    }
}

async function getProvidor(request, response) {
    try {
        const providorItem = await Providor.findOne({
                where: {
                    id: request.params.id
                }
            })
            .then(providor => response.send(providor))
    }
    catch(error) {
        response.status(500)
            .send(error)
    }
}

async function createProvidor(request, response) {
    try {
        const providor = await Providor({
            name: request.body.name
        })

        response.status(201)
            .send(providor)
    }
    catch(error) {
        response.status(500)
            .send(error)
    }
}

async function updateProvidor(request, response) {
    try {
        const providorItem = await Category.findOne({
            id: request.params.id
        })

        if(providorItem) {
            const updateProvidor = await providorItem.update({
                id: request.body.id
            })

            response.status(200).send(updateProvidor)
        }

        else{
            response.status(404)
                .send('Providor has not been found.')
        }
    }
    catch(error) {
        response.status(400).send(error)
    }
}


async function deleteProvidor(request, response) {
    try {
        const providorItem = await Category.findOne({
            id: request.params.id
        })

        if(providorItem) {
            const deleteProvidor = await providorItem.delete({
                name: request.body.name
            })

            response.status(200).send(deleteProvidor)
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
    getProvidors,
    getProvidor,

    createProvidor,
    updateProvidor,

    deleteProvidor,
}