import { moduleFor, test } from 'ember-qunit';

moduleFor('adapter:github-branch', 'Unit | Adapter | github branch', {
  needs: ['service:session']
});

// Replace this with your real tests.
test('it exists', function(assert) {
  let adapter = this.subject();
  assert.ok(adapter);
});
