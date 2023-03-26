const { StatusCodes } = require('http-status-codes');
const { Op } = require('sequelize');
const User = require('../models/user');
const Post = require('../models/post');
const Tag = require('../models/tag');
const { sequelize } = require('../connectDatabase');

const One2OneGet = async (req, res) => {
    const users = await User.findAll({
        attributes: ['name', 'email', 'gender'],
        include: [
            {
                model: Post,
                attributes: ['name', 'title', 'content', 'userId'],
                where: {
                    userId: {
                        [Op.gt]: 80
                    },
                }
            }
        ]
    });
    res.status(StatusCodes.OK).json({ status: 'success', data: users });
}

const BelongsToOne2OneGet = async (req, res) => {
    const posts = await Post.findAll({
        attributes: ['name', 'title', 'content'],
        include: [
            {
                model: User,
                attributes: ['name', 'email', 'gender'],
            }
        ]
    });
    res.status(StatusCodes.OK).json({ status: 'success', data: posts });
}

const One2ManyGet = async (req, res) => {
    const users = await Post.findAll({
        attributes: ['name', 'email', 'gender'],
        include: [
            {
                model: Post,
                attributes: ['name', 'title', 'content', 'userId'],
            }
        ],
        where: {
            id: 76
        }
    });
    res.status(StatusCodes.OK).json({ status: 'success', data: users });
}

const Many2ManyGet = async (req, res) => {

    let data = await Tag.findAll({
        include:[
            {
                model: Post,
            }
        ]
    })
    res.status(200).json(data);
}

module.exports = {
    One2OneGet,
    BelongsToOne2OneGet,
    One2ManyGet,
    Many2ManyGet,
}