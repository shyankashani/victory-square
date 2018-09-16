import Component from '@ember/component';

export default Component.extend({
  color: null,
  icon: null,
  image: null,
  text: null,
  borderColor: null,

  isEditing: null,
  inputType: null,

  options: null,
  selected: null,

  actions: {
    onChange() {}
  }
});
