import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  items: null,
  colors: null,
  categories: null,

  selectedColorId: null,
  selectedCategoryId: null,

  filteredItems: computed(
    'items.@each.(colorId,categoryId)',
    'selectedColorId',
    'selectedCategoryId',
    function() {
      const selectedColorId = Number(this.get('selectedColorId'));
      const selectedCategoryId = Number(this.get('selectedCategoryId'));

      if (selectedColorId && selectedCategoryId) {
        return this.get('items').filter(function(item) {
          const isSelectedColor = item.get('colorId') === selectedColorId;
          const isSelectedCategory = item.get('categoryId') === selectedCategoryId;
          return isSelectedColor && isSelectedCategory;
        });
      } else if (selectedColorId) {
        return this.get('items').filter(function(item) {
          const isSelectedColor = item.get('colorId') === selectedColorId;
          return isSelectedColor;
        });
      } else if (selectedCategoryId) {
        return this.get('items').filter(function(item) {
          const isSelectedCategory = item.get('categoryId') === selectedCategoryId;
          return isSelectedCategory;
        });
      }

      return this.get('items');
    }
  ),

  actions: {
    toggleColorId(colorId) {
      if (Number(colorId) === Number(this.get('selectedColorId'))) {
        this.set('selectedColorId', null);
      } else {
        this.set('selectedColorId', colorId);
      }
    },
    toggleCategoryId(categoryId) {
      if (Number(categoryId) === Number(this.get('selectedCategoryId'))) {
        this.set('selectedCategoryId', null);
      } else {
        this.set('selectedCategoryId', categoryId);
      }
    }
  }
});
