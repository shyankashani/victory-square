import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: 'http://localhost:8000',

  pathForType() {
    return 'items';
  },

  init() {
    this._super(...arguments);

    this.set('headers', {
      'Accept': 'application/json'
    })
  }
});
