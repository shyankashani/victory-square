import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | organizations/index', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:organizations/index');
    assert.ok(route);
  });
});
