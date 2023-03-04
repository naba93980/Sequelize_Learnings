const User = require('../models/user');
const { StatusCodes } = require('http-status-codes');
const { sequelize } = require('../connectDatabase');
const { Op } = require('sequelize');

const query = async (req,res) => {
    // const data = await User.findAll({
    //     attributes:[
    //         'name',
    //         ['email','EmailID'],
    //         'gender'
    //     ]
    // })

    // const data = await User.findAll({
    //     group:['name','gender'],
    //     attributes:[
    //         'name','gender',
    //      [sequelize.fn('COUNT',sequelize.col('name')), 'nameCount'],
    //     ]
    // })

    const data = await User.findAll({
        attributes:{
            exclude:['create-at','deletedAt']
        },
        where:{
            id:{
                [Op.gt]:2
            },
            email: {
                [Op.like]:'%gmail.com'
            }
        },
        order:[
            ['name','DESC'],
            ['email','DESC']
        ],
        limit:2,
        offset:1
    })
    res.status(StatusCodes.CREATED).json({ status: 'success', data })
}

module.exports=query;
