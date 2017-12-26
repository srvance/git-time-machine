import Route from '@ember/routing/route';

export default Route.extend({
  setupController(controller) {
    controller.set('currentUser', this.modelFor('index.user'));
    controller.set('currentRepo', this.modelFor('index.user.repo'));
    controller.set('currentBranch', null);
  }
});
