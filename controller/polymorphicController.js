const Image = require('../models/image');
const Video = require('../models/video')
const Comment = require('../models/comment')

const polymorphicGetImage = async (req, res) => {
    let data = await Image.findAll({
        include: [{
            model: Comment
        }]
    });
    res.status(200).json(data)
}

const polymorphicGetVideo = async (req, res) => {
    let data = await Video.findAll({
        include: [{
            model: Comment
        }]
    });
    res.status(200).json(data)
}

const polymorphicPost = async (req, res) => {

    const { title, commentableId, commentableType } = req.body;

    if (commentableType === 'image') {
        let image = await Image.findOne({
            where: {
                id: Number(commentableId)
            }
        });

        let comment = await image.createComment({ title })
        // let comments = await image.getComments();
        res.status(200).json(comment)
    }

    if (commentableType === 'video') {
        let video = await Video.findOne({
            where: {
                id: Number(commentableId)
            }
        });

        let comment = await video.createComment({ title })
        // let comments = await video.getComments();
        res.status(200).json(comment)
    }

}

const getComments = async(req,res)=>{
    let comments = await Comment.findOne({
        include: [Image,Video]
    });
    res.status(200).json(comments)
}

module.exports = {
    polymorphicGetImage,
    polymorphicGetVideo,
    polymorphicPost,
    getComments
}