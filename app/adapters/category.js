import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  host: 'http://localhost:8000',

  pathForType() {
    return 'categories';
  },

  init() {
    this._super(...arguments);

    this.set('headers', {
      'Accept': 'application/json'
    })
  }
});
