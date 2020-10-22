const express = require('express')
const router =  express.Router()

const wareController = require('../controllers/ware')
const providorController = require('../controllers/providor')
const categoryController = require('../controllers/category')

//display all items
router.get('/', wareController.getWares)
router.get('/providors', providorController.getProvidors)
router.get('/categories', categoryController.getCategories)

//display particularly item
router.get('/ware/:id', wareController.getWare)
router.get('/providor/:id', providorController.getProvidor)
router.get('/category/:id', categoryController.getCategory)

//create new item
router.post('/ware/create', wareController.createWare)
router.post('/providor/create', providorController.createProvidor)
router.post('/category/create', categoryController.createCategory)

//update existing item
router.put('/ware/:id', wareController.updateWare)
router.put('/providor/:id', providorController.updateProvidor)
router.put('/category/:id', categoryController.updateCategory)

//delete item
router.delete('/ware/:id', wareController.deleteWare)
router.delete('/providor/:id', providorController.deleteProvidor)
router.delete('/category/delete/:id', categoryController.deleteCategory)

module.exports = router