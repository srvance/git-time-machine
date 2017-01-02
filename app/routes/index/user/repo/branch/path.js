import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    console.log(`Params for path: ${Ember.inspect(params)}`);
  },

  setupController(controller /* , model */) {
    controller.set('path', this.paramsFor(this.routeName).path);
  }
});
