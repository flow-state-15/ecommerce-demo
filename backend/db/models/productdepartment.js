'use strict';
module.exports = (sequelize, DataTypes) => {
  const ProductDepartment = sequelize.define('ProductDepartment', {
    name: DataTypes.STRING,
    desc: DataTypes.TEXT
  }, {});
  ProductDepartment.associate = function(models) {
    // associations can be defined here
  };
  return ProductDepartment;
};