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
    Order.hasMany(models.OrderItem, {
      as: 'items',
      foreignKey: 'order_id'
    }),
    Order.belongsTo(models.UserPayment, {
      as: 'payment_method',
      foreignKey: 'payment_id'
    })
  };
  return Order;
};
