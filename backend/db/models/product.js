'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    name: DataTypes.STRING,
    desc: DataTypes.TEXT,
    price: DataTypes.DECIMAL,
    brand: DataTypes.STRING,
    dept_id: DataTypes.INTEGER,
    inv_id: DataTypes.INTEGER,
    discount_id: DataTypes.INTEGER
  }, {});
  Product.associate = function(models) {
    // associations can be defined here
  };
  return Product;
};