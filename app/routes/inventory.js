import Ember from 'ember';
import Route from '@ember/routing/route';

export default Route.extend({
  ajax: Ember.inject.service(),
  model() {
    return this.get('ajax').request('http://localhost:3000/inventory')
  }
});
