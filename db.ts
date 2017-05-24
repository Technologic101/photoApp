import * as mongodb from 'mongodb';

const connectionString:string = "mongodb://dev:dev@ds149551.mlab.com:49551/photos";

export default class Database {
  public static db:mongodb.Db;

  public static connect() {
    return mongodb.MongoClient.connect(connectionString).then((db) => {
        this.db = db;
    }).catch((err) => {
        console.error(err);
    });
  }
}
