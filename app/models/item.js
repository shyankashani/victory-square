import DS from 'ember-data';

export default DS.Model.extend({
  location: DS.attr('string'),
  notes: DS.attr('string'),
  staffPick: DS.attr('boolean'),

  organization: DS.belongsTo('organization'),
  game: DS.belongsTo('game'),
  difficulty: DS.belongsTo('difficulty'),
  category: DS.belongsTo('category')
});
