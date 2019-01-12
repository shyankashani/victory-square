import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | manage/item', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:manage/item');
    assert.ok(route);
  });
});
