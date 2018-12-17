import Component from '@ember/component';

export default Component.extend({
  classNames: ['cursor-pointer'],
  header: null,
  value: null,
  icon: null,
  size: 'small',
  model: null,

  showEditIcon: false,

  isEditable: false,

  updateItem() {},

  mouseEnter() {
    this.set('showEditIcon', true);
  },

  mouseLeave() {
    this.set('showEditIcon', false);
  },

  actions: {
    makeEditable() {
      this.set('isEditable', true);
    },

    check() {
      this.get('updateItem')(
        this.get('item'),
        this.get('property'),
        this.get('value')
      )
    }
  }
});
