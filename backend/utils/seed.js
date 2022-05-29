const { faker } = require("@faker-js/faker");

function getRandomIntInclusive(min, max) {
  //The maximum is inclusive and the minimum is inclusive
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRandomFloatInclusive(min, max, decimals) {
  const str = (Math.random() * (max - min + 1) + min).toFixed(decimals);
  return parseFloat(str);
}

function generate(faker_func, quantity, unique = false) {
  const loop = (faker_func, quantity) => {
    const _ = [];
    for (let i = 0; i < quantity; ++i) {
      _.push(faker_func());
    }
    return _;
  };
  if (unique) return [...new Set(loop(faker_func, quantity))];
  return loop(faker_func, quantity);
}

module.exports = {
  generate,
  getRandomIntInclusive,
  getRandomFloatInclusive
};
