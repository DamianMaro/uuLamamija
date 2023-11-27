"use strict";
const Path = require("path");
const { Validator } = require("uu_appg01_server").Validation;
const { DaoFactory } = require("uu_appg01_server").ObjectStore;
const { ValidationHelper } = require("uu_appg01_server").AppServer;
const Errors = require("../api/errors/food-error.js");

const WARNINGS = {};

class FoodAbl {
  constructor() {
    this.validator = Validator.load();
    this.dao = DaoFactory.getDao("food");
  }

  async create(awid, dtoIn) {
    // HDS 1
    let validationResult = this.validator.validate("FoodCreateDtoInType", dtoIn);
    // A1, A2
    let uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      WARNINGS.initUnsupportedKeys.code,
      Errors.Create.InvalidDtoIn
    );

    let dtoOut;

    try {
      dtoOut = await this.dao.create(dtoIn);
    } catch (e) {
      throw new Errors.Create.DaoCreateFailed({ uuAppErrorMap }, e);
    }

    return {
      ...dtoOut,
      uuAppErrorMap,
    };
  }
}

module.exports = new FoodAbl();
