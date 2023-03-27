module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
  },{
    tableName: 'students'
  });
  Student.associate = (models)=>{

  };
  return User;
}