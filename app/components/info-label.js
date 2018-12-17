import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  classNames: ['cursor-pointer'],

  /*
   * The property being labeled.
   *
   * {String}
   */
  property: null,

  /*
   * The value of the property being labeled.
   *
   * {String}
   */
  value: null,

  /*
   * The icon to show in the label.
   *
   * {String}
   */
  icon: null,

  /*
   * The size of the label.
   *
   * {String}
   */
  size: 'small',

  model: null,

  showEditIcon: false,

  isEditing: false,

  /*
   * The call back to update the value.
   *
   * {String}
   */
  update: null,

  isEditable: computed.notEmpty('update'),

  mouseEnter() {
    if (this.get('isEditable')) {
      this.set('showEditIcon', true);
    }
  },

  mouseLeave() {
    this.set('showEditIcon', false);
  },

  actions: {
    edit() {
      this.set('isEditing', true);
    },

    save() {
      const update = this.get('update');
      const property = this.get('property');
      const value = this.get('value');
      console.log('value', value);

      update(property, value);
      this.set('isEditing', false);
    },

    discard() {
      this.set('isEditing', false);
    }
  }
});
