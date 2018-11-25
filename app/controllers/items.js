import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  queryParams: ['difficulty', 'category', 'search', 'gameId'],
  difficulty: null,
  category: null,
  search: null,
  gameId: null,

  filteredItems: computed('difficulty', 'category', 'search', 'model.items', function() {
    let difficulty = this.difficulty;
    let category = this.category;
    let search = this.search;
    let items = this.model.items;

    if (difficulty) {
      items = items.filter(function(item) {
        return _isStringMatch(difficulty, item.difficulty.name);
      });
    }

    if (category) {
      items = items.filter(function(item) {
        return _isStringMatch(category, item.category.name);
      });
    }

    if (search) {
      items = items.filter(function(item) {
        const name = item.get('game.name');
        const shortDescription = item.get('game.shortDescription');
        return name && _isStringMatch(search, name) ||
          shortDescription && _isStringMatch(search, shortDescription);
      });
    }

    return items;
  }),

  selectedItem: computed('gameId', 'model.items', function() {
    let gameId = this.gameId;
    let items = this.model.items;

    if (gameId) {
      return items.filterBy('id', gameId).get('firstObject');
    }

    return null;
  }),

  actions: {
    clearSelectedItem() {
      this.set('gameId', null);
    }
  }
});


function _isStringMatch(a, b) {
  a = a.toLowerCase();
  b = b.toLowerCase();
  return a.includes(b) || b.includes(a);
}
