import { moduleFor, test } from 'ember-qunit';

moduleFor('adapter:github-user', 'Unit | Adapter | github user', {
  // Specify the other units that are required for this test.
  // needs: ['serializer:foo']
});

// Replace this with your real tests.
test('it exists and has the right properties', function(assert) {
  let adapter = this.subject();
  assert.ok(adapter);
  assert.ok(adapter.get('authorizer'));
});
