const express = require('express')
const { createMenu, addMenuItem, getMenuItems } = require('../Controllers/menuController')
const menuRouter = express.Router()

menuRouter.post('/createMenu', createMenu)
menuRouter.post('/addMenuItem/:menuId', addMenuItem)
menuRouter.get('/getMenuItems/:menuId', getMenuItems)

module.exports = menuRouter