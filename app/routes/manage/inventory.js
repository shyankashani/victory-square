import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
  model() {
    return RSVP.hash({
      items: _getItemsForOrganization(this.store, 1)
    })
  }
});

function _getItemsForOrganization(store, organizationId, params) {
  const queryObject = {
    'filter{organization}': organizationId,
    'include[]': 'game.*'
  };

  if (params && params.players) {
    queryObject['filter{game.min_players.lte}'] = params.players;
    queryObject['filter{game.max_players.gte}'] = params.players;
  }

  if (params && params.playTime) {
    queryObject['filter{game.min_play_time.lte}'] = params.playTime;
    queryObject['filter{game.max_play_time.gte}'] = params.playTime;
  }

  return store.query('item', queryObject);
}
