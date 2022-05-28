'use strict';
module.exports = (sequelize, DataTypes) => {
  const CartItem = sequelize.define('CartItem', {
    session_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER
  }, {});
  CartItem.associate = function(models) {
    // associations can be defined here
    CartItem.belongsTo(models.Product, {
      foreignKey: 'product_id'
    })
  };
  return CartItem;
};
