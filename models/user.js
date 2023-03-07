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
        allowNull: false,
        unique: true,
    },
    gender: {
        type: DataTypes.STRING,
        // validate: {
        //     equals: 'male',
        //     isIn: {
        //         args:  [['males', 'male']],
        //         msg: 'please enter males or male'
        //     }
        // }
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