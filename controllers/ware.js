const Ware = require('../models/Ware')

async function getWares(request, response) {
    try {
        const wares = await Ware.findAll()
            .then(ware => response.send(ware))
    }
    catch(error) {
        response.status(500)
            .send(error)
    }
}

async function getWare(request, response) {
    try {
        const wareItem = await Ware.findOne({
                where: {
                    id: request.params.id
                }
            })
            .then(ware => response.send(ware))
    }
    catch(error) {
        response.status(500)
            .send(error)
    }
}

async function createWare(request, response) {
    try {
        const ware = await Ware.create({
            name: request.body.name
        })

        response.status(400)
            .send(ware)
    }
    catch(error) {
        response.status(500)
            .send(error)
    }
}

async function updateWare(request, response) {
    try {
        const wareItem = await Category.findOne({
            id: request.params.id
        })

        if(wareItem) {
            const updateWare = await wareItem.update({
                id: request.params.id
            })

            response.status(200).send(updateWare)
        }

        else{
            response.status(404)
                .send('Category has not been found.')
        }
    }
    catch(error) {
        response.status(400).send(error)
    }
}

async function deleteWare(request, response) {
    try {
        const wareItem = await Category.findOne({
            id: request.params.id
        })

        if(wareItem) {
            const deleteWare = await wareItem.delete({
                name: request.body.name
            })

            response.status(200).send(deleteWare)
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
    getWares,
    getWare,

    createWare,
    updateWare,

    deleteWare,
}