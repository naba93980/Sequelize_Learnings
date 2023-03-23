const { DataTypes } = require('sequelize');
const { sequelize } = require('../connectDatabase');

const Video = sequelize.define("video", {
    title: {
        type:DataTypes.STRING,
    },
    text: {
        type:DataTypes.STRING,
    }
},
    {
        timestamps: true,
        paranoid: true,
        updatedAt: false,
        createdAt: 'create-at',
        tableName: 'videos'
    })

module.exports = Video