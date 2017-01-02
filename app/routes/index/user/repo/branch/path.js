import Ember from 'ember';

export default Ember.Route.extend({
  setupController(controller /* , model */) {
    controller.set('path', this.paramsFor(this.routeName).path);
  }
});
