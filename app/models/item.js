import DS from 'ember-data';
import { computed } from '@ember/object';
import _ from 'lodash';

const BADGE_COLORS = {
  1: 'success',
  2: 'warning',
  3: 'danger'
};

export default DS.Model.extend({

  /*
   * Properties
   */
  location: DS.attr('string'),
  notes: DS.attr('string'),
  staffPick: DS.attr('boolean'),

  /*
   * Embeded records
   */
  game: DS.attr(),
  color: DS.attr(),
  category: DS.attr(),

  /*
   * Game properties
   */
  name: computed.reads('game.name'),
  description: computed.reads('game.description'),
  yearPublished: computed.reads('game.year_published'),
  minPlayers: computed.reads('game.min_players'),
  maxPlayers: computed.reads('game.max_players'),
  playingTime: computed.reads('game.playing_time'),
  minPlayTime: computed.reads('game.min_play_time'),
  maxPlayTime: computed.reads('game.max_play_time'),
  minAge: computed.reads('game.min_age'),
  thumbnail: computed.reads('game.thumbnail'),
  image: computed.reads('game.image'),
  bggAverageWeight: computed.reads('game.bgg_average_weight'),
  bggAverageRating: computed.reads('game.bgg_average_rating'),

  /*
   * Difficulty properties
   */
  difficultyId: computed.reads('color.id'),
  difficultyName: computed.reads('color.name'),
  difficultyDescription: computed.reads('color.description'),
  difficultyHex: computed.reads('color.hex'),

  /*
   * Category properties
   */
  categoryId: computed.reads('category.id'),
  categoryName: computed.reads('category.name'),

  /*
   * Computed properties
   */
  longDescription: computed('description', function() {
    const description = this.get('description');
    return description.split('&#10;').map(p => p.length ? _.unescape(p) : '');
  }),

  shortDescription: computed('longDescription', function() {
    const longDescription = this.get('longDescription');
    return _.truncate(longDescription[0], { length: 480, separator: '.', omission: '.' })
  }),

  numberOfPlayers: computed('minPlayers', 'maxPlayers', function() {
    const minPlayers = this.get('minPlayers');
    const maxPlayers = this.get('maxPlayers');

    return minPlayers < maxPlayers
      ? `${minPlayers}-${maxPlayers} players`
      : `${maxPlayers} players`;
  }),

  playTime: computed('minPlayTime', 'maxPlayTime', function() {
    const minPlayTime = this.get('minPlayTime');
    const maxPlayTime = this.get('maxPlayTime');

    return minPlayTime < maxPlayTime
      ? `${minPlayTime}-${maxPlayTime} minutes`
      : `${maxPlayTime} minutes`;
  }),

  badgeColor: computed('difficultyId', function() {
    const difficultyId = this.get('difficultyId');
    return BADGE_COLORS[difficultyId];
  })
});
