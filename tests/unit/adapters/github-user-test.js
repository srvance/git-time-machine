import { moduleFor, test } from 'ember-qunit';

moduleFor('adapter:github-user', 'Unit | Adapter | github user', {
  needs: ['service:session']
});

// Replace this with your real tests.
test('it exists and has the right properties', function(assert) {
  let adapter = this.subject();
  assert.ok(adapter);
  assert.ok(adapter.get('authorizer'));
});
