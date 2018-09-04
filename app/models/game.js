import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  yearPublished: DS.attr('number'),
  minPlayers: DS.attr('number'),
  maxPlayers: DS.attr('number'),
  playingTime: DS.attr('number'),
  minPlayTime: DS.attr('number'),
  maxPlayTime: DS.attr('number'),
  minAge: DS.attr('number'),
  thumbnail: DS.attr('string'),
  image: DS.attr('string'),
  bggAverageWeight: DS.attr('number'),
  bggAverageRating: DS.attr('number'),

  items: DS.hasMany('items')
});
