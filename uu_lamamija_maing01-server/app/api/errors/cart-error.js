"use strict";

const LamamijaMainUseCaseError = require("./lamamija-main-use-case-error.js");
const CART_ERROR_PREFIX = `${LamamijaMainUseCaseError.ERROR_PREFIX}cart/`;

const Update = {
  UC_CODE: `${CART_ERROR_PREFIX}update/`,
  InvalidDtoIn: class extends LamamijaMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Update.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },

  DaoCreateFailed: class extends LamamijaMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Update.UC_CODE}daoCreateFailed`;
      this.message = "Creating update by dao create has failed.";
    }
  },
};

module.exports = {
  Update,
};
