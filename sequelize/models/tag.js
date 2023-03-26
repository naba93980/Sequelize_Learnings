const { DataTypes } = require('sequelize');
const { sequelize } = require('../connectDatabase');

const Tag = sequelize.define("Tag", {
    name: {
        type:DataTypes.STRING,
    }
},
    {
        timestamps: true,
        paranoid: true,
        updatedAt: false,
        createdAt: 'create-at',
        tableName: 'tags'
    })

module.exports = Tag;