const db = require('../lib/db');

const response = () => memory.get('response');

class User {
  static #_table = 'users';

  static async getAll() {
    try {
      const { rows } = await db.query(`SELECT * FROM ${this.#_table}`);
      return rows;
    } catch(e) {
      response().status(500).end(e.message);
      throw e;
    }
  }

  static async getUser(id) {
    try {
      const { rowCount, rows } = await db.query(`SELECT * FROM ${this.#_table} WHERE id = $1`, [id]);
      if (rowCount > 0) {
        return rows;
      }
      response().status(404).end('User not found');
    } catch(e) {
      response().status(500).end(e.message);
    }
  }
}

module.exports = User;
