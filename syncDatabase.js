const { sequelize } = require('./connectDatabase');
const Post = require('./models/post');
const User = require('./models/user');
const Tag = require('./models/tag');
const Image = require('./models/image');
const Video = require('./models/video');
const Comment = require('./models/comment');

// Creating one -to-one relation

// User.hasOne(Post,{
//     foreignKey: 'userId'
// });
// Post.belongsTo(User);

// Creating one -to-many relation

// User.hasMany(Post,{
//     foreignKey: 'userId'
// });
// Post.belongsTo(User);

// Creating many-to-many relation

Tag.belongsToMany(Post, { through: 'Post_Tag' });
Post.belongsToMany(Tag, { through: 'Post_Tag' });


//------------------------polymorphic one to many--------------------

Image.hasMany(Comment,{
    foreignKey: 'commentableId',
    constraints: false,
    scope:{
        commentableType: 'image'
    }
})

Comment.belongsTo(Image,{
    foreignKey: 'commentableId',
    constraints: false
});

Video.hasMany(Comment,{
    foreignKey: 'commentableId',
    constraints: false,
    scope:{
        commentableType: 'video'
    }
})
Comment.belongsTo(Video, {
    foreignKey: 'commentableId',
    constraints: false
});


const syncDatabase = async () => {
    try {
        await sequelize.sync({ force: false, match: /sequelize_learnings/ });
        console.log("synced");
    } catch (err) {
        console.log(err);
    }
}

module.exports.syncDatabase = syncDatabase;