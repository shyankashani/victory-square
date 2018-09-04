import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
  model() {
    return RSVP.hash({
      items: this.store.findAll('item'),
      categories: this.store.findAll('category'),
      difficulties: this.store.findAll('difficulty')
    })
  },
  updateItem(id) {
    return this.store.findRecord('item', id).then(function(item) {
      item.set()
    });
  }
});
