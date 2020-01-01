//========================================================================================
/*                                                                                      *
 *                                import helper functions                               *
 *                                                                                      */
//========================================================================================
const { getConn } = require("../Database/conn");
//########################################################################################

module.exports = {
  /**
   * @description This function is an abstraction of mongoDB findOne
   *
   * @params      collection = the collection in the db on which you want to perform query
   *              query = the query you want to perform
   *
   * @return      if err it will thow the err object otherwise response
   *
   * @author      Ram Pandey
   */
  findOne: (collection, query) => {
    return new Promise((resolve, reject) => {
      const DB = getConn();

      DB.collection(collection).findOne(query, (err, resp) => {
        if (err) {
          reject(err);
        }

        resolve(resp);
      });
    });
  },

    /**
   * @description This function is an abstraction of mongoDB insertOne
   *
   * @params      collection = the collection in the db on which you want to perform query
   *              query = the query you want to perform
   *
   * @return      if err it will thow the err object otherwise response
   *
   * @author      Ram Pandey
   */
  insertOne: (collection, query) => {
    return new Promise((resolve, reject) => {
      const DB = getConn();

      DB.collection(collection).insertOne(query, (err, resp) => {
        if (err) {
          reject(err);
        }

        resolve(resp.ops[0]);
      });
    });
  }
};
