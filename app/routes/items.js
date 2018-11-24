import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
  model() {
    return RSVP.hash({
      items: this.store.findAll('item'),
      categories: this.store.findAll('category'),
      difficulties: this.store.findAll('difficulty'),
      games: this.store.findAll('game')
    })
  }
});
