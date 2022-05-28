'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserAddress = sequelize.define('UserAddress', {
    user_id: DataTypes.INTEGER,
    address_line1: DataTypes.STRING,
    address_line2: DataTypes.STRING,
    city: DataTypes.STRING,
    postal_code: DataTypes.INTEGER,
    phone: DataTypes.INTEGER
  }, {});
  UserAddress.associate = function(models) {
    // associations can be defined here
  };
  return UserAddress;
};