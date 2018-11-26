import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
  model(params) {
    return RSVP.hash({
      item: this.store.findRecord('item', params.item_id)
    });
  }
});
