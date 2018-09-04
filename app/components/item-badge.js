import Component from '@ember/component';

export default Component.extend({
  color: null,
  icon: null,
  image: null,
  text: null,
  borderColor: null,

  isEditing: true,
  inputType: null,
  options: null,

  actions: {
    onChange() {}
  }
});
