const knex = require('$src/db');

class CRUD {
  constructor(table, model) {
    this.table = table;
    this.model = model;
  }

  async create(payload) {
    const [data] = await knex(this.table).insert(payload).returning('*');
    return new this.model(data);
  }

  async get(id) {
    const data = await knex(this.table).first('*').where({ id });
    return new this.model(data);
  }

  async getAll(params = {}) {
    const list = await knex(this.table).select('*').where(params).orderBy('id');
    return list.map((data) => new this.model(data));
  }

  async update(id, payload) {
    const [data] = await knex(this.table).update(payload).where({ id }).returning('*');
    return new this.model(data);
  }

  async delete(id) {
    const [data] = await knex(this.table).del().where({ id }).returning('*');
    return new this.model(data);
  }
}

module.exports = CRUD;