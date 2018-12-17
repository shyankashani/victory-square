import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
  queryParams: {
    players: {
      refreshModel: true
    },
    playTime: {
      refreshModel: true
    }
  },

  model(params, transition) {
    const items = _getItemsForOrganization(
        this.store,
        transition.params['organizations.organization'].organization_id,
        params
      );

    const difficulties = this.store.peekAll('difficulty').length
      ? this.store.peekAll('difficulty')
      : this.store.findAll('difficulty');

    const categories = this.store.peekAll('category').length
      ? this.store.peekAll('category')
      : this.store.findAll('category');

    const organization = this.store.peekRecord('organization', transition.params['organizations.organization'].organization_id)
      ? this.store.peekRecord('organization', transition.params['organizations.organization'].organization_id)
      : this.store.findRecord('organization', transition.params['organizations.organization'].organization_id);

    return RSVP.hash({
      items,
      difficulties,
      categories,
      organization
    });

  }
});

function _getItemsForOrganization(store, organizationId, params) {
  const queryObject = {
    'filter{organization}': organizationId,
    'include[]': 'game.*'
  };

  if (params.players) {
    queryObject['filter{game.min_players.lte}'] = params.players;
    queryObject['filter{game.max_players.gte}'] = params.players;
  }

  if (params.playTime) {
    queryObject['filter{game.min_play_time.lte}'] = params.playTime;
    queryObject['filter{game.max_play_time.gte}'] = params.playTime;
  }

  console.log('queryObject', queryObject)

  return store.query('item', queryObject);
}
