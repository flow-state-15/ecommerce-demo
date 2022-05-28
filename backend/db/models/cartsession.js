'use strict';
module.exports = (sequelize, DataTypes) => {
  const CartSession = sequelize.define('CartSession', {
    user_id: DataTypes.INTEGER,
    total: DataTypes.DECIMAL
  }, {});
  CartSession.associate = function(models) {
    // associations can be defined here
  };
  return CartSession;
};