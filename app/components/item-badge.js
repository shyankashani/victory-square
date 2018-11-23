import Component from '@ember/component';

export default Component.extend({
  color: null,
  icon: null,
  image: null,
  text: null,
  borderColor: null,
  isEditing: null,
  options: null,
  selected: null,
  property: null,
  item: null,

  updateItem(value) {
    const property = this.get('property');
    const item = this.get('item');

    item.set(property, value);
    item.save();
  },

  actions: {
    chooseOption(value) {
      this.set('selected', value);
      this.updateItem(value);
    }
  }
});
