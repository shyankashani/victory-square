import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    update(property, value) {
      this.get('model.item').set(property, value);
      this.get('model.item').save();
    }
  }
});
