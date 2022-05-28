'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    user_id: DataTypes.INTEGER,
    total: DataTypes.DECIMAL,
    payment_id: DataTypes.INTEGER,
    transaction_status: DataTypes.BOOLEAN
  }, {});
  Order.associate = function(models) {
    // associations can be defined here
  };
  return Order;
};