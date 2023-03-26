const { sequelize } = require('../connectDatabase')
const User = require('../models/user');
const Post = require('../models/post');
const { LOCK } = require('sequelize');

const transaction = async (req, res) => {

    const { userName, email, gender, postName, title, content } = req.body;
    const transaction = await sequelize.transaction();
    try {
        const user = await User.create({ name: userName, email, gender }, {
            transaction
        });
        const post = await Post.create({ name: postName, title, content, userId: user.id }, {
            transaction
        });
        transaction.commit();
        return res.status(200).json({ user, post })
    } catch (error) {
        console.log(error);
        transaction.rollback();
        return res.status(500).json({ status: "failed" })
    }
}

const getTransaction = async (req,res) => {
    const transaction = await sequelize.transaction();
    const user = await User.findOne({
        transaction,
        lock : {
            level: transaction.LOCK.UPDATE
        }
    })
    res.status(200).json(user)
}
module.exports = {
    transaction,
    getTransaction
}