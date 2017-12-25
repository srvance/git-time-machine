import { moduleFor, test } from 'ember-qunit';

moduleFor('route:index/user', 'Unit | Route | index/user', {
  needs: ['service:session']
});

test('it exists', function(assert) {
  let route = this.subject();
  assert.ok(route);
});
