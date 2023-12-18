"use strict";

const LamamijaMainUseCaseError = require("./lamamija-main-use-case-error.js");
const CART_ERROR_PREFIX = `${LamamijaMainUseCaseError.ERROR_PREFIX}cart/`;

const Cart = {
  UC_CODE: `${CART_ERROR_PREFIX}update/`,
  InvalidDtoIn: class extends LamamijaMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Cart.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },

  DaoUpdateFailed: class extends LamamijaMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Cart.UC_CODE}daoUpdateFailed`;
      this.message = "Update?.";
    }
  },
};

module.exports = {
  Cart,
};
