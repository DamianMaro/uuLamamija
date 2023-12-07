"use strict";
const LamamijaMainAbl = require("../../abl/lamamija-main-abl.js");

class LamamijaMainController {
  init(ucEnv) {
    return LamamijaMainAbl.init(ucEnv.getUri(), ucEnv.getDtoIn(), ucEnv.getSession());
  }

  load(ucEnv) {
    return LamamijaMainAbl.load(ucEnv.getUri(), ucEnv.getSession());
  }

  loadBasicData(ucEnv) {
    return LamamijaMainAbl.loadBasicData(ucEnv.getUri(), ucEnv.getSession());
  }
}

module.exports = new LamamijaMainController();
