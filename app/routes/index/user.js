import Ember from 'ember';
import RSVP from 'rsvp';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model(params) {
    return RSVP.hash({
      targetUser: params.user_id,
      defaultUser: this.get('context.defaultUser'),
      selectedUser: this.get('store').findRecord('github-user', params.user_id)
    });
  },

  afterModel(model) {
    this.set('context.user', model);
  }
});
