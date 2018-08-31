import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  queryParams: ['difficulty', 'category'],
  difficulty: null,
  category: null,

  filteredItems: computed('difficulty', 'category', 'model.items', function() {
    let difficulty = this.difficulty;
    let category = this.category;
    let items = this.model.items;

    if (difficulty) {
      items = items.filterBy('difficultyName', difficulty);
    }

    if (category) {
      items = items.filterBy('categoryName', category);
    }

    return items;
  })
});
