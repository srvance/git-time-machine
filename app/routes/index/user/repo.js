import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Route.extend({
  model(params) {
    let user_id = this.paramsFor('index.user').user_id;
    return RSVP.hash({
      targetUser: user_id,
      defaultUser: this.modelFor('index'),
      selectedUser: this.get('store').findRecord('github-user', user_id),
      selectedRepo: this.get('store').findRecord('github-repository', `${user_id}/${params.repo_id}`)
    });
  }
});
