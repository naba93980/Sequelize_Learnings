'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const process = require('process');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
    );
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;


/*

This code is a JS module that sets up a database connection using the Sequelize ORM (Object Relational Mapper) in a node.js application.

First, it requires several dependencies like `fs`, `path`, `Sequelize`, and `process`. 
It then gets the base filename using the `path.basename()` function, and sets the environment variable to the global process environment variable `NODE_ENV` or 'development' if not provided.

It then retrieves the database configuration settings from the `config/config.json` file, and creates a Sequelize instance based on the configuration options. 
It then uses the file system module `fs` to read the current directory, and filters to find all JavaScript files except those ending with `.test.js`. 

For each found file, it requires the model into Sequelize using the `require()` statement and passes the instance of Sequelize and data types as arguments to the model for connection with the database.
Adding each model into the `db` object with the name of the model as the key.

Lastly, it loops through each model and invokes the associate method on them if it is present, before exporting the `db` object. This makes it easier to use the models in other parts of the application.

*/