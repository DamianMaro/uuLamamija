"use strict";
const { UuObjectDao } = require("uu_appg01_server").ObjectStore;

class CartMongo extends UuObjectDao {
  async createSchema() {
    await super.createIndex({ awid: 1, id: 1 }, { unique: true });
  }

  async create(uuObject) {
    return await super.insertOne(uuObject);
  }
}

module.exports = CartMongo;
