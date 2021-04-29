const sqlite3 = require("sqlite3");
import IUser from "../interface/user";

export default class UserRepository {
  async initDB() {
    return new sqlite3.Database("./dist/joblac.db");
  }

  async create(user: IUser) {
    const sql =
      "INSERT INTO user (email, password, username, adress, city, zipcode) VALUES (?, ?, ?, ?, ?, ?)";
    const db = await this.initDB();

    return new Promise((resolve, reject) => {
      resolve(
        db.run(sql, [
          user.email,
          user.password,
          user.username,
          user.adress,
          user.city,
          user.zipcode,
        ])
      );
    }).finally(db.close());
  }

  async getByEmail(email: string) {
    const sql = `SELECT rowid, * from user WHERE email = "${email}" LIMIT 1`;
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

  async updateToken(token: string, email: string) {
    const sql = `UPDATE user SET token = ? WHERE email = ?`;
    const db = await this.initDB();

    return new Promise((resolve, reject) => {
      resolve(db.run(sql, [token, email]));
    }).finally(db.close());
  }

  async getById(id: any) {
    console.log("iddd", id);
    const sql = `SELECT * FROM user WHERE rowid = "${id}" LIMIT 1`;
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

  async getByUsername(username: string) {
    const sql = `SELECT * from user WHERE username = "${username}"`;
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
