const knex = require('$src/db');

class CRUD {
  constructor(table, model) {
    this.table = table;
    this.model = model;
  }

  async query(query, toArray = false) {
    const { rows } = await knex.raw(query);
    return toArray
      ? rows.map((row) => new this.model(row))
      : new this.model(rows[0]);
  }

  create(payload) {
    return this.query(`
      INSERT INTO ${this.table} (${Object.keys(payload).join()})
      VALUES (${Object.values(payload).map((v) => `'${v}'`).join()})
      RETURNING *
    `);
  }

  get(id) {
    return this.query(`SELECT * FROM ${this.table} WHERE id = ${id}`);
  }

  getAll(params = {}) {
    return this.query(`SELECT * FROM ${this.table}`, true);
  }

  update(id, payload) {
    return this.query(`
      UPDATE ${this.table}
      SET ${Object.entries(payload).map(([key, value]) => `${key} = '${value}'`).join()}
      WHERE id = ${id}
      RETURNING *
    `);
  }

  delete(id) {
    return this.query(`DELETE FROM ${this.table} WHERE id = ${id} RETURNING *`);
  }
}

module.exports = CRUD;