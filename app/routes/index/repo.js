import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Route.extend({
  model(params) {
    return RSVP.hash({
      targetUser: params.user_id,
      defaultUser: this.get('context.defaultUser'),
      selectedUser: this.get('store').findRecord('github-user', params.user_id),
      selectedRepo: this.get('store').findRecord('github-repository', `${params.user_id}/${params.repo_id}`)
    });
  }
});
