import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  items: null,
  colors: null,

  selectedColorId: null,
  selectedCategoryId: null,

  filteredItems: computed(
    'items.@each.(colorId,categoryId)',
    'selectedColorId',
    'selectedCategoryId',
    function() {
      const selectedColorId = this.get('selectedColorId');
      const selectedCategoryId = this.get('selectedCategoryId');

      if (selectedColorId || selectedCategoryId) {
        return this.get('items').filter(function(item) {
          return Number(item.get('colorId')) === Number(selectedColorId);
        });
      }
      return this.get('items');
    }
  ),

  actions: {
    toggleColorId(colorId) {
      const selectedColorId = this.get('selectedColorId');
      if (Number(colorId) === Number(selectedColorId)) {
        this.set('selectedColorId', null);
      }
      this.set('selectedColorId', colorId);
    }
  }
});
