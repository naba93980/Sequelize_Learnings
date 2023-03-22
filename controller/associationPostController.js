const { StatusCodes } = require('http-status-codes');
const { Op } = require('sequelize');
const User = require('../models/user');
const Post = require('../models/post');
const Tag = require('../models/tag');
const { sequelize } = require('../connectDatabase');

const One2OnePost = async (req, res) => {
    const { name, title, content, userId } = req.body;
    const user = await Post.create({ name, title, content, userId });
    res.status(StatusCodes.OK).json({ status: 'success', data: user });
}

const BelongsToOne2OnePost = async (req, res) => { }

const One2ManyPost = async (req, res) => {
    const { name, title, content, userId } = req.body;
    const users = await Post.create({ name, title, content, userId });
    res.status(StatusCodes.OK).json({ status: 'success', data: users });
}

const Many2ManyPost = async (req, res) => {

    // const Post_Tag = sequelize.models.Post_Tag;

    let { name, title, content, userId, tags: tagsSent } = req.body;
    tagsSent = tagsSent.map(tag => {
        return { name: tag }
    })

    /*
    // creating the post to get the id of post
    const { dataValues: { id: postId } } = await Post.create({ name, title, content, userId });

    let tagsPresent = new Set();
    let tagsNotPresent = []
    let data = [];

    // find if the tag exists
    let tagsFound = await Tag.findAll({
        attributes: ['id', 'name'],
        where: {
            name: tagsSent
        },
    });

    // adding all tags present to tagsPresent Set
    if (tagsFound) {
        tagsFound.forEach(tag => {
            tagsPresent.add(tag.dataValues.name);
        })
        data = data.concat(tagsFound.map(tag => { return { TagId: tag.dataValues.id, postId } }
        ))
    }

    // if tag doesnot exist, push the tag in tagNotPresent array
    tagsSent.forEach(tag => {
        if (!(tagsPresent.has(tag))) {
            tagsNotPresent.push({ name: tag })
        }
    })

    if (tagsNotPresent) {
        tagsCreated = await Tag.bulkCreate(tagsNotPresent);
        data = data.concat(tagsCreated.map(tag => {
            return { TagId: tag.dataValues.id, postId }
        }))
    }
    console.log(data);

    const dataPostTag = await Post_Tag.bulkCreate(data)
    res.status(StatusCodes.OK).json({ status: 'success', data: dataPostTag });
    */
    const post = await Post.create({ name, title, content, userId });
    const tag = await Tag.bulkCreate(tagsSent)
    const data = post.addTag(tag);
    res.status(StatusCodes.OK).json({ status: 'success', data });
}

module.exports = {
    One2OnePost,
    BelongsToOne2OnePost,
    One2ManyPost,
    Many2ManyPost,
}