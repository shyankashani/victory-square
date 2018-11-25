import Route from '@ember/routing/route';

export default Route.extend({
  model(params, transition) {
    return this.store.query('item', {
      'filter{organization}': transition.params['organizations.organization'].organization_id
    });
  }
});
