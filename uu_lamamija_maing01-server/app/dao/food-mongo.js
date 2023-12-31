"use strict";
const { UuObjectDao } = require("uu_appg01_server").ObjectStore;

class FoodMongo extends UuObjectDao {
  async createSchema() {
    await super.createIndex({ awid: 1, name: 1 }, { unique: true });
  }

  async create(uuObject) {
    return await super.insertOne(uuObject);
  }
}

module.exports = FoodMongo;
