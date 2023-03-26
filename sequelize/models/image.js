const { DataTypes } = require('sequelize');
const { sequelize } = require('../connectDatabase');

const Image = sequelize.define("image", {
    title: {
        type:DataTypes.STRING,
    },
    url: {
        type:DataTypes.STRING,
    }
},
    {
        timestamps: true,
        paranoid: true,
        updatedAt: false,
        createdAt: 'create-at',
        tableName: 'images'
    })

module.exports = Image