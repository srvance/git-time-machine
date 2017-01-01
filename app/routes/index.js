import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model() {
    return this.get('store').findRecord('github-user', '#');
  },

  redirect(model) {
    // TODO: How can I make sure this only happens when there are no child routes?
    this.transitionTo('index.user', model.get('login'));
  }
});
