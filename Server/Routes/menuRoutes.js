const express = require('express')
const { createMenu, addMenuItem, getMenuItems, getAllMenu } = require('../Controllers/menuController')
const menuRouter = express.Router()

menuRouter.post('/createMenu', createMenu)
menuRouter.post('/addMenuItem/:menuId', addMenuItem)
menuRouter.get('/getMenuItems/:menuId', getMenuItems)
menuRouter.get('/getAllMenu', getAllMenu)

module.exports = menuRouter