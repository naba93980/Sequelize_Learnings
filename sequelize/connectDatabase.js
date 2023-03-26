const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('sequelize_learnings', 'root', 'password', {
  dialect: 'mysql',
  dialectOptions: {
    connectTimeout: 5000,
    charset: 'utf8mb4'
  },
  // logging:false,
  host: 'localhost',
  port: 3306,
  pool: {
    max: 10
  }
})

const connectDB = () => {
  return sequelize.authenticate();
}

module.exports.connectDB = connectDB;
module.exports.sequelize = sequelize;
