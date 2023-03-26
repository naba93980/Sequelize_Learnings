const { DataTypes } = require('sequelize');
const { sequelize } = require('../connectDatabase')
const queryInterface = sequelize.getQueryInterface();
const {StatusCodes} = require('http-status-codes')

// create column
const queryInterfaceCreateTable = async (req, res) => {
    await queryInterface.createTable('vehicles', {
        name: DataTypes.STRING
    });
    res.status(StatusCodes.OK).json({ status: 'success' });
}

// add column
const queryInterfaceAddCol = async (req, res) => {
    await queryInterface.addColumn('vehicles', 'age', {
        type: DataTypes.INTEGER,
    });
    res.status(StatusCodes.OK).json({ status: 'success' });
}

// alter column
const queryInterfaceAlterCol = async (req, res) => {
    await queryInterface.changeColumn('vehicles', 'age', {
        type: DataTypes.INTEGER,
        defaultValue: 10,
        unique: true,
        allowNull: false
    });
    res.status(StatusCodes.OK).json({ status: 'success' });
}

// delete column
const queryInterfaceDeleteCol = async (req, res) => {
    await queryInterface.removeColumn('vehicles', 'age');
    res.status(StatusCodes.OK).json({ status: 'success' });
}

// drop table
const queryInterfaceDropTable = async (req, res) => {
    await queryInterface.dropTable('vehicles');
    res.status(StatusCodes.OK).json({ status: 'success' });
}

module.exports = {
    queryInterfaceCreateTable,
    queryInterfaceAddCol,
    queryInterfaceAlterCol,
    queryInterfaceDeleteCol,
    queryInterfaceDropTable
}