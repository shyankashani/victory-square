import DS from 'ember-data';
import { computed } from '@ember/object';

const BADGE_COLORS = {
  1: 'success',
  2: 'warning',
  3: 'danger'
};

export default DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),

  items: DS.attr(),

  color: computed('id', function() {
    const id = this.get('id');
    return BADGE_COLORS[id];
  })
});
