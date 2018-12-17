import Component from '@ember/component';

const PLAYER_OPTIONS = [1,2,3,4,5,6,7,8];
const DURATION_OPTIONS = [15, 30, 60, 90];

export default Component.extend({
  tagName: '',
  playerOptions: PLAYER_OPTIONS,
  durationOptions: DURATION_OPTIONS
});
