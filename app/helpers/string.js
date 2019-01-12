import { helper } from '@ember/component/helper';

const STRINGS = {
  'header:location': 'House Location',
  'header:category': 'House Category',
  'header:difficulty': 'House Difficulty',
  'header:description': 'Description',
  'header:numberOfPlayers': 'Players',
  'header:playTime': 'Duration',
  'header:minimumAge': 'Ages',
  'header:bgg_average_rating': 'BGG Avg. Rating',
  'header:bgg_average_weight': 'BGG Avg. Weight',
  'header:year_published': 'Year Published',
  'header:game': 'Game',
  'header:name': 'Name'
}

export function string(params) {
  return STRINGS[params[0]];
}

export default helper(string);
