"use strict";
const Path = require("path");
const { Validator } = require("uu_appg01_server").Validation;
const { DaoFactory } = require("uu_appg01_server").ObjectStore;
const { ValidationHelper } = require("uu_appg01_server").AppServer;
const Errors = require("../api/errors/cart-error.js");

const WARNINGS = {};

class CartAbl {
  constructor() {
    this.validator = Validator.load();
    this.dao = DaoFactory.getDao("cart");
  }

  async update(awid, dtoIn) {
    // HDS 1
    let validationResult = this.validator.validate("cartUpdateDtoInType", dtoIn);
    // A1, A2
    let uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      WARNINGS.initUnsupportedKeys.code,
      Errors.Update.InvalidDtoIn
    );

    let dtoOut;
    try {
      dtoOut = this.dao.update();
    } catch (e) {
      throw new Errors.Update.DaoCreateFailed({ uuAppErrorMap }, e);
    }

    return {
      ...dtoOut,
      uuAppErrorMap,
    };
  }
}

module.exports = new CartAbl();
