const { StatusCodes } = require('http-status-codes');
const Post = require('../models/post');

const createPost = async (req, res) => {
    const { name, title, content, userId } = req.body;
    const post = await Post.create({ name, title, content, userId });
    res.status(StatusCodes.CREATED).json({ status: 'success', data: post })
}

const getAllposts = async (req, res) => {
    const posts = await Post.findAll();
    res.status(StatusCodes.OK).json({ status: 'success', data: posts });
}

const getOnepost = async (req, res) => {
    const id = Number(req.params.id);
    const post = await Post.findByPk(id);
    res.status(StatusCodes.OK).json({ status: 'success', data: post });
}

const updatepost = async (req, res) => {
    const id = Number(req.params.id);
    const post = await Post.findByPk(id);
    const updatedpost = await post.set(req.body).save();
    res.status(StatusCodes.OK).json({ status: 'success', data: updatedpost });
}

const deletepost = async (req, res) => {
    const id = Number(req.params.id);
    await Post.destroy({
        where:{
            id
        }
    })
    res.status(StatusCodes.OK).json({ status: 'success' });
}

module.exports = {
    createPost,
    getAllposts,
    getOnepost,
    updatepost,
    deletepost
}