'use strict';
module.exports = (sequelize, DataTypes) => {
  const ProductDepartment = sequelize.define('ProductDepartment', {
    name: DataTypes.STRING,
    desc: DataTypes.TEXT
  }, {});
  ProductDepartment.associate = function(models) {
    // associations can be defined here
    ProductDepartment.hasMany(models.Product, {
      as: 'products',
      foreignKey: 'dept_id'
    })
  };
  return ProductDepartment;
};
