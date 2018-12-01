import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
  model(params, transition) {

    const items = this.store.peekAll('item').length
      ? this.store.peekAll('item')
      : this.store.query('item', {
          'filter{organization}': transition.params['organizations.organization'].organization_id,
          'include[]': 'game.*'
        });

    const difficulties = this.store.peekAll('difficulty').length
      ? this.store.peekAll('difficulty')
      : this.store.findAll('difficulty');

    const categories = this.store.peekAll('category').length
      ? this.store.peekAll('category')
      : this.store.findAll('category');

    const organization = this.store.peekRecord('organization', transition.params['organizations.organization'].organization_id)
      ? this.store.peekRecord('organization', transition.params['organizations.organization'].organization_id)
      : this.store.findRecord('organization', transition.params['organizations.organization'].organization_id);

    return RSVP.hash({
      items,
      difficulties,
      categories,
      organization
    });

  }
});
