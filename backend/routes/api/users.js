const express = require("express");
const asyncHandler = require("express-async-handler");
const { check } = require('express-validator');

const { handleValidationErrors } = require('../../utils/validation');
const { setTokenCookie, requireAuth } = require("../../utils/auth");
const { User, Product } = require("../../db/models");

const router = express.Router();


const validateSignup = [
  check('email')
    .exists({ checkFalsy: true })
    .isEmail()
    .withMessage('Please provide a valid email.'),
  check('username')
    .exists({ checkFalsy: true })
    .isLength({ min: 4 })
    .withMessage('Please provide a username with at least 4 characters.'),
  check('username')
    .not()
    .isEmail()
    .withMessage('Username cannot be an email.'),
  check('password')
    .exists({ checkFalsy: true })
    .isLength({ min: 6 })
    .withMessage('Password must be 6 characters or more.'),
  handleValidationErrors
];

// Sign up
router.post(
  '/',
  validateSignup,
  asyncHandler(async (req, res) => {
    const { email, password, username } = req.body;
    const user = await User.signup({ email, username, password });

    await setTokenCookie(res, user);

    return res.json({
      user,
    });
  }),
);

router.get('/user-test', asyncHandler(async (req, res) => {
  const new_user = await User.findAll({ where: { id: 1 } })
  const new_product = await Product.create({ name: 'test', desc: 'testing' })
  console.log('\n\n', new_user.favorites, '\n\n')
  return res.json({
    user: new_user,
    product: new_product
  })
}))

module.exports = router;
