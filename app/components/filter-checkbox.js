import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  text: null,
  color: null,

  checkboxId: null,
  selectedId: null,

  isSelected: computed('checkboxId', 'selectedId', function() {
    const checkboxId = this.get('checkboxId');
    const selectedId = this.get('selectedId');

    return Number(checkboxId) === Number(selectedId);
  }),

  clickAction() {},
});
