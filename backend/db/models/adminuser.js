'use strict';
module.exports = (sequelize, DataTypes) => {
  const AdminUser = sequelize.define('AdminUser', {
    username: DataTypes.STRING,
    hashed_pw: DataTypes.TEXT,
    f_name: DataTypes.STRING,
    l_name: DataTypes.STRING,
    level: DataTypes.INTEGER,
    last_login: DataTypes.DATE
  }, {});
  AdminUser.associate = function(models) {
    // associations can be defined here
  };
  return AdminUser;
};