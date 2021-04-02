const sqlite3 = require("sqlite3");
import IUser from "../interface/user";

export default class UserRepository {
  async initDB() {
    return new sqlite3.Database("./src/joblac.db");
  }

  async create(user: IUser) {
    const sql =
      "INSERT INTO user (email, password, username, firstname, lastname, adress, city, zipcode) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
    const db = await this.initDB();

    return new Promise((resolve, reject) => {
      resolve(db.run(sql, [user.email, user.password, user.username]));
    }).finally(db.close());
  }

  async getByEmail(email: string) {
    const sql = `SELECT * from user WHERE email = "${email}"`;
    const db = await this.initDB();
    return new Promise((resolve, reject) => {
      db.all(sql, (err: Error, row: JSON) => {
        if (err) {
          throw err;
        }
        resolve(row);
      });
    }).finally(db.close());
  }

  async getAll() {
    const sql = "SELECT * from user";
    const db = await this.initDB();

    return new Promise((resolve, reject) => {
      db.all(sql, (err: Error, rows: JSON) => {
        if (err) {
          throw err;
        }
        resolve(rows);
      });
    }).finally(() => db.close());
  }
}
