const isEmpty = require("lodash.isempty");

const getCollection = require("../utils/db/mongoConnect.js").getCollection;

const get = _id =>
  new Promise(async (resolve, reject) => {
    const collection = await getCollection("mongoTest");

    let query = {};

    if (!isEmpty(_id)) {
      query = { ...query, _id: ObjectId(_id) };
    }

    try {
      collection.find(query).toArray((err, result) => {
        if (err) throw err;
        resolve(result);
      });
    } catch (e) {
      reject(e);
    }
  });

module.exports = { get };