import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  items: null,
  colors: null,
  categories: null,

  selectedColorId: null,
  selectedCategoryId: null,
  searchQuery: 'catan',

  filteredItems: computed(
    'items.@each.(colorId,categoryId)',
    'selectedColorId',
    'selectedCategoryId',
    'searchQuery',
    function() {
      const selectedColorId = Number(this.get('selectedColorId'));
      const selectedCategoryId = Number(this.get('selectedCategoryId'));
      const searchQuery = this.get('searchQuery');
      let filteredItems;

      if (selectedColorId && selectedCategoryId) {
        filteredItems = this.get('items').filter(function(item) {
          const isSelectedColor = item.get('colorId') === selectedColorId;
          const isSelectedCategory = item.get('categoryId') === selectedCategoryId;
          return isSelectedColor && isSelectedCategory;
        });
      } else if (selectedColorId) {
        filteredItems = this.get('items').filter(function(item) {
          const isSelectedColor = item.get('colorId') === selectedColorId;
          return isSelectedColor;
        });
      } else if (selectedCategoryId) {
        filteredItems = this.get('items').filter(function(item) {
          const isSelectedCategory = item.get('categoryId') === selectedCategoryId;
          return isSelectedCategory;
        });
      } else {
        filteredItems = this.get('items');
      }

      if (searchQuery.length) {
        filteredItems = filteredItems.filter(function(item) {
          const isNameMatch = _isStringMatch(searchQuery, item.get('name'));
          const isDescriptionMatch = _isStringMatch(searchQuery, item.get('shortDescription'));

          return isNameMatch || isDescriptionMatch;
        });
      }

      return filteredItems;
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

function _isStringMatch(a, b) {
  a = a.toLowerCase();
  b = b.toLowerCase();
  return a.includes(b) || b.includes(a);
}
