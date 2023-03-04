const { DataTypes } = require('sequelize');
const { sequelize } = require('../connectDatabase');

const User = sequelize.define("user", {
    name: {
        type: DataTypes.STRING,
        set(value) {
            this.setDataValue('name', value + 'OK POPO');
        },
        get() {
            return this.getDataValue('name') + this.email
        }
    },
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
        paranoid: true,
        updatedAt: false,
        createdAt: 'create-at',
        tableName: 'users'
    })

module.exports = User