const { sequelize } = require('./connectDatabase');

const syncDatabase = async () => {
    try {
        await sequelize.sync({ force: false, match: /sequelize_learnings/ });
        console.log("synced");
    } catch (err) {
        console.log(err);
    }
}

module.exports.syncDatabase = syncDatabase;