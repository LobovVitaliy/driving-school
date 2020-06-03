class Service {
  constructor(model) {
    this.model = model;
  }

  create(payload) {
    return this.model.query().insert(payload);
  }

  update(id, payload) {
    return this.model.query().patchAndFetchById(id, payload);
  }

  delete(id) {
    return this.model.query().deleteById(id).returning('*');
  }

  get(id) {
    return this.model.query().findById(id);
  }

  getAll(params = {}) {
    return this.model.query();
  }
}

module.exports = Service;