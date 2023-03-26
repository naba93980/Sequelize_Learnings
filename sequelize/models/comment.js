const { DataTypes } = require('sequelize');
const { sequelize } = require('../connectDatabase');

const Comment = sequelize.define("comment", {
    title: {
        type:DataTypes.STRING,
    },
    commentableId: {
        type: DataTypes.INTEGER
    },
    commentableType: {
        type:DataTypes.STRING,
    }
},
    {
        timestamps: true,
        paranoid: true,
        updatedAt: false,
        createdAt: 'create-at',
        tableName: 'comments'
    })

module.exports = Comment