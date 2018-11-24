import DS from 'ember-data';
import { normalize } from 'victory-square/utilities/serializers';

export default DS.JSONAPISerializer.extend({
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    payload = normalize(payload, primaryModelClass.modelName, 'items');
    console.log('payload', payload);
    return this._super(store, primaryModelClass, payload, id, requestType);
  }
});
