import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model(params) {
    return this.get('store').findRecord('github-user', params.user_id);
  },
  actions: {
    specifyRepo(repo) {
      console.log(`Application action: ${repo.fullName}`);
    }
  }
});
