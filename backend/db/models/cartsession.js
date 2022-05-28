'use strict';
module.exports = (sequelize, DataTypes) => {
  const CartSession = sequelize.define('CartSession', {
    user_id: DataTypes.INTEGER,
    total: DataTypes.DECIMAL
  }, {});
  CartSession.associate = function(models) {
    // associations can be defined here
    CartSession.hasMany(models.CartItem, {
      as: 'items',
      foreignKey: 'session_id'
    })
  };
  return CartSession;
};
