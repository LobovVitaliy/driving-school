class Service {
  static create(payload) {
    return this.model.query().insert(payload);
  }

  static update(id, payload) {
    return this.model.query().patchAndFetchById(id, payload);
  }

  static delete(id) {
    return this.model.query().deleteById(id).returning('*');
  }

  static get(id) {
    return this.model.query().findById(id);
  }

  static getAll(params = {}) {
    return this.model.query();
  }
}

module.exports = Service;