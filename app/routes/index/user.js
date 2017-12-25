import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model(params) {
    return this.get('store').findRecord('github-user', params.user_id);
  },

  setupController(controller, model) {
    controller.set('targetUser', this.paramsFor('index.user').user_id);
    controller.set('defaultUser', this.modelFor('index'));
    controller.set('currentUser', model);
    controller.set('currentRepo', null);
  },

  actions: {
    changeUser(newUser) {
      this.transitionTo('index.user', newUser);
    }
  }
});
