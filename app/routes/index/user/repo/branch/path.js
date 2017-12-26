import Route from '@ember/routing/route';

export default Route.extend({
  setupController(controller /* , model */) {
    controller.set('path', this.paramsFor(this.routeName).path);
  }
});
