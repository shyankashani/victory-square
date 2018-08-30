import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
  model() {
    return RSVP.hash({
      items: this.store.findAll('item'),
      colors: this.store.findAll('color'),
      categories: this.store.findAll('category')
    })
  }
});
