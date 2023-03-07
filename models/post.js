const { DataTypes } = require('sequelize');
const { sequelize } = require('../connectDatabase');

const Post = sequelize.define("post", {
    name: {
        type:DataTypes.STRING,
    },
    title: {
        type:DataTypes.STRING,
    },
    content: {
        type:DataTypes.STRING,
    },
    userId: {
        type:DataTypes.INTEGER,
        unique:true
    }
},
    {
        timestamps: true,
        paranoid: true,
        updatedAt: false,
        createdAt: 'create-at',
        tableName: 'posts'
    })

module.exports = Post