"use strict";
const CartAbl = require("../../abl/cart-abl.js");

class CartController {
  update(ucEnv) {
    return CartAbl.update(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }
}

module.exports = new CartController();
