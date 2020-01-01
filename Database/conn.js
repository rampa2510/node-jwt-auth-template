const { MongoClient } = require("mongodb");

let connection = null;

const option = { useNewUrlParser: true, useUnifiedTopology: true };

/**
 * @description This will be used to connect to the db at the app start
 *
 * @author      Ram Pandey
 */
module.exports.connect = () =>
  new Promise((resolve, reject) => {
    MongoClient.connect(process.env.DB_URI, option, (err, client) => {
      if (err) {
        reject(err);
        return;
      }
      const db = client.db(process.env.DB_NAME);
      resolve(db);
      connection = db;
    });
  });

/**
 * @description This method will be used to a connection to the db
 *
 * @returns     A connection object of mongodb
 *
 * @author      Ram Pandey
 */
module.exports.getConn = () => {
  if (!connection) {
    throw new Error("Call connect first!");
  }

  return connection;
};
