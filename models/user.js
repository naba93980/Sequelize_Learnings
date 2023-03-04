const { DataTypes } = require('sequelize');
const { sequelize } = require('../connectDatabase');

const User = sequelize.define("user", {
    name: DataTypes.STRING,
    email: {
        type: DataTypes.STRING,
        defaultValue: 'test@gmail.com',
    },
    gender: {
        type: DataTypes.STRING,
    },
},
    {
        timestamps: true,
        paranoid:true,
        updatedAt: false,
        createdAt: 'create-at',
        tableName: 'users'
    })

module.exports = User