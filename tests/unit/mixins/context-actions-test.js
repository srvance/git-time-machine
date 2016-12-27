import Ember from 'ember';
import ContextActionsMixin from 'git-time-machine/mixins/context-actions';
import { module, test } from 'qunit';

module('Unit | Mixin | context actions');

// Replace this with your real tests.
test('it works', function(assert) {
  let ContextActionsObject = Ember.Object.extend(ContextActionsMixin);
  let subject = ContextActionsObject.create();
  assert.ok(subject);
});
