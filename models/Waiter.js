const {sequelize} = require('../db')
const {DataTypes, Model} = require('sequelize')

class Waiter extends Model {}

Waiter.init({
    Waiter_name: DataTypes.STRING,
    waiter_salary: DataTypes.INTEGER,
    
}, {
    sequelize,
    timestamps: false
})

module.exports = {Waiter}