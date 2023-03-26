const Image = require('../models/image');
const Comment = require('../models/comment')

const eager = async (req, res) =>{
    const image=await Image.findOne({
        where:{
            id:2
        },
        include:Comment
    });
    res.status(200).json(image)
}

const lazy = async (req,res) =>{
    const image=await Image.findOne({
        where:{
            id:2
        },
    });
    const comments = await image.getComments();
    res.status(200).json({image,comments})
}

module.exports = {
    eager,
    lazy
}