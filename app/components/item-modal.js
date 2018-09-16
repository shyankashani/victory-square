import Component from '@ember/component';

export default Component.extend({
  item: null,
  isOpen: false,
  isEditing: false,
  difficulties: null,
  categories: null,

  actions: {
    toggleIsEditing() {
      if (this.get('isEditing')) {
        this.set('isEditing', false);
      } else {
        this.set('isEditing', true);
      }
    }
  }
});
