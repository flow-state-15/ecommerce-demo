'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserPayment = sequelize.define('UserPayment', {
    name: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
    provider: DataTypes.STRING,
    card_number: DataTypes.INTEGER,
    expiry: DataTypes.DATE,
    sec_code: DataTypes.INTEGER
  }, {});
  UserPayment.associate = function(models) {
    // associations can be defined here
  };
  return UserPayment;
};