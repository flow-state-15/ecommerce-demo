'use strict';

const { faker } = require('@faker-js/faker')

function generate(faker_func, quantity, unique=false){
  const loop = (faker_func, quantity) => {
    const _ = []
      for(let i=0; i<quantity; ++i){
        _.push(faker_func())
      }
    return _
  }
  if(unique) return [...new Set(loop(faker_func, quantity))]
  return loop(faker_func, quantity)
}

const dept_set = generate(faker.commerce.department, 100, true)
const prod_names = generate(faker.commerce.product, 20, false)

// const product_data = [
//   {
//     name: faker.commerce.product(),
//     description: faker.commerce.productDescription,
//     price: faker.commerce.pord
//   },
// ]



// const dept_array = [...dept_set].sort()

console.log(prod_names, prod_names.length)

// module.exports = {
//   up: (queryInterface, Sequelize) => {
//     /*
//       Add altering commands here.
//       Return a promise to correctly handle asynchronicity.

//       Example:
//       return queryInterface.bulkInsert('People', [{
//         name: 'John Doe',
//         isBetaMember: false
//       }], {});
//     */
//     return queryInterface.bulkInsert('Products', product_data, {});
//   },

//   down: (queryInterface, Sequelize) => {
//     /*
//       Add reverting commands here.
//       Return a promise to correctly handle asynchronicity.

//       Example:
//       return queryInterface.bulkDelete('People', null, {});
//     */
//   }
// };
