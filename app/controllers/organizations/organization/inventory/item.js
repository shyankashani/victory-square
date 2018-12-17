import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    updateItem(item, property, value) {
      item.set(property, value);
      item.save();
    }
  }
});
