"use strict";

const LamamijaMainUseCaseError = require("./lamamija-main-use-case-error.js");
const FOOD_ERROR_PREFIX = `${LamamijaMainUseCaseError.ERROR_PREFIX}food/`;

const Create = {
  UC_CODE: `${FOOD_ERROR_PREFIX}create/`,

  InvalidDtoIn: class extends LamamijaMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Create.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },

  DaoCreateFailed: class extends LamamijaMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Create.UC_CODE}daoCreateFailed`;
      this.message = "Creating joke by dao create has failed.";
    }
  }
};

module.exports = {
  Create
};
