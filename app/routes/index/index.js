import Ember from 'ember';

export default Ember.Route.extend({
  redirect() {
    this.transitionTo('index.user', this.modelFor('index').get('login'));
  }
});
