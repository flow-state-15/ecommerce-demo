'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    name: DataTypes.STRING,
    desc: DataTypes.TEXT,
    price: DataTypes.DECIMAL,
    dept_id: DataTypes.INTEGER,
    inv_id: DataTypes.INTEGER,
    discount_id: DataTypes.INTEGER
  }, {});
  Product.associate = function(models) {
    // associations can be defined here
    Product.belongsToMany(models.User, {
      through: 'favorite_products',
      foreignKey: 'product_id'
    })
  };
  return Product;
};
