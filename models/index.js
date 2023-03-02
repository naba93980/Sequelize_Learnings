const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('sequelize_learnings', 'root', 'password', {
  dialect: 'mysql',
  dialectOptions: {
    connectTimeout: 5000,
    charset: 'utf8mb4'
  },
  host: 'localhost',
  port: 3306,
  pool: {
    max: 10
  }
})

async function connectDB() {
  try {
    await sequelize.authenticate();
    console.log("succesfully connected to database");
    // sequelize.close();
    // console.log("succesfully closed to database");
  } catch (error) {
    console.log(`cannot connect to database bcoz of ${error}`);
  }
}
connectDB();