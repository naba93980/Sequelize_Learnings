const { StatusCodes } = require('http-status-codes');
const User = require('../models/user');

const createUser = async (req, res) => {
    const { name, email, gender } = req.body;
    const user = await User.create({ name, email, gender });
    // const users = await User.bulkCreate({ name, email, gender },{ name, email, gender });
    // const user = await User.build({ name, email, gender }).save();
    // user.name="nabajyoti"
    // console.log(user);
    // await user.reload()
    // console.log(user);
    res.status(StatusCodes.CREATED).json({ status: 'success', data: user })
}

const getAllUsers = async (req, res) => {
    const users = await User.findAll();
    res.status(StatusCodes.OK).json({ status: 'success', data: users });
}

const getOneUser = async (req, res) => {
    const id = Number(req.params.id);
    const user = await User.findByPk(id);
    res.status(StatusCodes.OK).json({ status: 'success', data: user });
}

const updateUser = async (req, res) => {
    const id = Number(req.params.id);
    const user = await User.findByPk(id);
    const updatedUser = await user.set(req.body).save();
    res.status(StatusCodes.OK).json({ status: 'success', data: updatedUser });
}

const deleteUser = async (req, res) => {
    const id = Number(req.params.id);
    await User.destroy({
        where:{
            id
        }
    })
    res.status(StatusCodes.OK).json({ status: 'success' });
}

module.exports = {
    createUser,
    getAllUsers,
    getOneUser,
    updateUser,
    deleteUser
}