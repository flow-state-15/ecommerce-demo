const express = require("express");
const asyncHandler = require("express-async-handler");
const { User, Product, Favorite, ProductDepartment, Order } = require("../../db/models");

const router = express.Router();

router.get(
  "/user-test",
  asyncHandler(async (req, res) => {
    const new_user = await User.findAll({ where: { id: 1 } });
    const new_product = await Product.create({ name: "test", desc: "testing" });
    console.log("\n\n", new_user.favorites, "\n\n");
    return res.json({
      user: new_user,
      product: new_product,
    });
  })
);

router.get(
  "/favorites",
  asyncHandler(async (req, res) => {

    console.log('\n\n *****  Padding for route logic start  *****')

    const user = await User.findByPk(1)

    // const product = await Product.findOne({ where: { id: 1 } })

    // const dept = await ProductDepartment.findOne({ where: { id: 1 } })

    // const order = await Order.create({ where: { id: 1 } })

    // const dept_children = await dept.getProducts()

    // console.log("\n\n", dept_children, "\n\n")

    // const fav = await User.addFavorite(Favorite, { user_id: 1, product_id:1 })
    // console.log("\n\n", fav, "\n\n");

    // User.findByPk(1)
    //   .then(data => {
    //     console.log("\n\n", data, "\n\n")
    //     console.log("\n\n", data.getFavorites().then(data => data).catch(err => err), "\n\n")
    //     return data
    //   })
    //   .catch(err => {
    //     console.log(err)
    //     return err
    //   })

    await user.setFavorites([20,35,888])
    const test = await user.getFavorites({ raw: true })

    // const fav_products = await Product.findAll({
    //   through: { where: { user_id: 1 } }
    // })


    console.log('\n\n', test, '\n\n')

    await user.removeFavorite(888)

    await user.addFavorites([3,4,5])

    await user.removeFavorite([3,4])

    // await user.setFavorites([])

    const test2 = await user.getFavorites({ raw: true, nest: true })

    console.log('\n\n', test2, '\n\n')

    console.log(' *****  Padding for route logic end  *****\n\n')

    return res.json(
      test2
    );
  })
  );


router.get(
  "/cart",
  asyncHandler(async (req, res) => {

    console.log('\n\n *****  Padding for route logic start  *****')

    const user = await User.findByPk(1)

    await user.setFavorites([20,35,888])
    const test = await user.getFavorites({ raw: true })

    // const fav_products = await Product.findAll({
    //   through: { where: { user_id: 1 } }
    // })


    console.log('\n\n', test, '\n\n')

    await user.removeFavorite(888)

    await user.addFavorites([3,4,5])

    await user.removeFavorite([3,4])

    await user.setFavorites([])

    const test2 = await user.getFavorites({ raw: true, nest: true })

    console.log('\n\n', test2, '\n\n')

    console.log(' *****  Padding for route logic end  *****\n\n')

    return res.json(
      test2
    );
  })
  );



module.exports = router;
