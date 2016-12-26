import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model() {
    return this.modelFor('index');
  },

  afterModel(model) {
    this.transitionTo('index.user', model.get('login'));
  }
});
