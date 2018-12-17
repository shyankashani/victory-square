import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  tagName: '',
  value: null,
  color: null,
  selectedValue: null,
  takeAction() {},

  isSelected: computed('selectedValue', 'value', function() {
    return Number(this.get('selectedValue')) === this.get('value');
  })
});
