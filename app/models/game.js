import DS from 'ember-data';
import { computed } from '@ember/object';
import _ from 'lodash';

export default DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  yearPublished: DS.attr('number'),
  min_players: DS.attr('number'),
  max_players: DS.attr('number'),
  playing_time: DS.attr('number'),
  min_play_time: DS.attr('number'),
  max_play_time: DS.attr('number'),
  min_age: DS.attr('number'),
  thumbnail: DS.attr('string'),
  image: DS.attr('string'),
  bgg_average_weight: DS.attr('number'),
  bgg_average_rating: DS.attr('number'),

  items: DS.attr(),

  longDescription: computed('description', function() {
    const description = this.get('description');
    return description.split('&#10;').map(p => p.length ? _.unescape(p) : '');
  }),

  shortDescription: computed('longDescription', function() {
    const longDescription = this.get('longDescription');
    return _.truncate(longDescription[0], { length: 480, separator: '.', omission: '.' })
  }),

  numberOfPlayers: computed('min_players', 'max_players', function() {
    const min_players = this.get('min_players');
    const max_players = this.get('max_players');

    return min_players < max_players
      ? `${min_players}-${max_players} players`
      : `${max_players} players`;
  }),

  playTime: computed('min_play_time', 'max_play_time', function() {
    const min_play_time = this.get('min_play_time');
    const max_play_time = this.get('max_play_time');

    return min_play_time < max_play_time
      ? `${min_play_time}-${max_play_time} minutes`
      : `${max_play_time} minutes`;
  }),

  minimumAge: computed('min_age', function() {
    const min_age = this.get('min_age');
    return `${min_age} and up`;
  }),
});
