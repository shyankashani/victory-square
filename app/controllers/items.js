import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  queryParams: ['difficulty', 'category', 'search'],
  difficulty: null,
  category: null,
  search: null,

  filteredItems: computed('difficulty', 'category', 'search', 'model.items', function() {
    let difficulty = this.difficulty;
    let category = this.category;
    let search = this.search;
    let items = this.model.items;

    if (difficulty) {
      items = items.filter(function(item) {
        return _isStringMatch(difficulty, item.difficultyName);
      });
    }

    if (category) {
      items = items.filter(function(item) {
        return _isStringMatch(category, item.categoryName);
      });
    }

    if (search) {
      items = items.filter(function(item) {
        return _isStringMatch(search, item.name) || _isStringMatch(search, item.shortDescription);
      });
    }

    return items;
  })
});


function _isStringMatch(a, b) {
  a = a.toLowerCase();
  b = b.toLowerCase();
  return a.includes(b) || b.includes(a);
}
