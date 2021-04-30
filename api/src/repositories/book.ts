const sqlite3 = require("sqlite3");

export default class BookRepository {
  async initDB() {
    return new sqlite3.Database("./dist/joblac.db");
  }

  async getAll() {
    const sql = "SELECT rowid, * from book";
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

  async getById(id: number) {
    const sql = `SELECT * FROM book WHERE rowid=${id}`;
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

  async add(data: any) {
    const sql =
      "INSERT INTO user (titre, auteur, parution, editeur, genre, prix) VALUES (?, ?, ?, ?, ?, ?)";
    const db = await this.initDB();

    return new Promise((resolve, reject) => {
      resolve(
        db.run(sql, [
          data.titre,
          data.auteur,
          data.parution,
          data.editeur,
          data.genre,
          data.prix,
        ])
      );
    }).finally(db.close());
  }
}
