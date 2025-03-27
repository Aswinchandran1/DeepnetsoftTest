const MenuItem = require("../Models/menuItemSchema");
const Menu = require("../Models/menuSchema")

exports.createMenu = async (req, res) => {
    const { menuName, description } = req.body
    try {
        const menu = await Menu.findOne({ menuName })
        if (menu) {
            return res.status(409).json("Menu Already Exist");
        }

        const newMenu = new Menu({
            menuName,
            description
        })

        const result = await newMenu.save()
        res.status(201).json({ message: "Menu Added successfully", menu: result });
    } catch (error) {
        console.log(error);
        res.status(500).json("Internal Server error")
    }
}

exports.addMenuItem = async (req, res) => {
    const { itemName, description, price } = req.body
    const { menuId } = req.params

    try {
        const menuItem = await MenuItem.findOne({ itemName })
        if (menuItem) {
            return res.status(409).json("Menu Item Already Exist");
        }

        const newMenuItem = new MenuItem({
            itemName,
            description,
            price,
            menuId
        })

        const result = await newMenuItem.save()
        res.status(201).json({ message: "Menu Item Added successfully", menuItem: result });
    } catch (error) {
        console.log(error);
        res.status(500).json("Internal Server error")
    }
}

exports.getMenuItems = async (req, res) => {
    const { menuId } = req.params
    try {
        const result = await MenuItem.find({ menuId: menuId }).populate('menuId')
        if (!result) {
            return res.status(404).json({ message: "No menu items found for this menu" });
        }
        res.status(200).json(result)
    } catch (error) {
        console.log(error);
        res.status(500).json("Internal Server error")
    }
}

exports.getAllMenu = async (req, res) => {
    try {
        const result = await Menu.find()
        if (!result) {
            return res.status(404).json({ message: "No menu found " });
        }
        res.status(200).json(result)
    } catch (error) {
        console.log(error);
        res.status(500).json("Internal Server error")
    }
}