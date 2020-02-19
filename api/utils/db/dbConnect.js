//Base de datos

const { MongoClient, ObjectId } = require("mongodb");

const { MONGO_URL_STRING: uri, MONGO_DB_NAME: dbName } = process.env;

const config = { useUnifiedTopology: true };

const client = MongoClient(uri, config);

const connect = () =>
  new Promise((resolve, reject) => {
    try {
      client.connect((err, clientConnected) => {
        if (err) throw err;
        resolve(clientConnected);
      });
    } catch (e) {
      reject(e);
    }
  });

let connection;

const _connection = async () => {
  if (!connection) {
    connection = await connect();
  }

  return connection;
};

const getCollection = async collectionName => {
  const client = await _connection();
  const db = client.db(dbName);
  return await db.collection(collectionName);
};

module.exports = {
  getCollection,
  connection,
  ObjectId
};
