import Controller from '@ember/controller';

export default Controller.extend({
  queryParams: ['players', 'playTime'],
  players: null,
  playTime: null,

  actions: {
    togglePlayers(players) {
      if (Number(this.get('players')) === players) {
        this.transitionToRoute({ queryParams: { players: null } })
      } else {
        this.transitionToRoute({ queryParams: { players } })
      }
    },

    togglePlayTime(playTime) {
      if (Number(this.get('playTime')) === playTime) {
        this.transitionToRoute({ queryParams: { playTime: null } })
      } else {
        this.transitionToRoute({ queryParams: { playTime }})
      }
    }
  }
});
