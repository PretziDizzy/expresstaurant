const {sequelize} = require('../db')
const {DataTypes, Model} = require('sequelize')

class Menu extends Model {}

Menu.init({
    food_name: DataTypes.STRING,
    chef_id: DataTypes.INTEGER,
    price: DataTypes.INTEGER
}, {
    sequelize,
    timestamps: false
})

module.exports = {Menu}

class Menu extends Model {}

Menu.init({
    food_name: DataTypes.STRING,
    chef_id: DataTypes.INTEGER,
    price: DataTypes.INTEGER
}, {
    sequelize,
    timestamps: false
})

module.exports = {Menu}