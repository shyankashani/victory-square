import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  items: null,
  colors: null,

  selectedColorId: null,
  selectedCategoryId: null,

  filteredItems: computed('items.@each.(colorId,categoryId)', 'selectedColorId', 'selectedCategoryId', function() {
    const items = this.get('items');
    const selectedColorId = this.get('selectedColorId');
    const selectedCategoryId = this.get('selectedCategoryId');

    if (selectedColorId || selectedCategoryId) {
      const results = items.filter(function(item) {
        const colorId = item.get('colorId');
        return colorId === Number(selectedColorId);
      });
      console.log('results', results);
      return results;
    }

    return items;
  }),

  actions: {
    toggleColorId(colorId) {
      const selectedColorId = this.get('selectedColorId');
      if (colorId === selectedColorId) {
        this.set('selectedColorId', null);
      }
      this.set('selectedColorId', colorId);
    }
  }
});
