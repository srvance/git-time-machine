import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    let user_id = this.paramsFor('index.user').user_id;
    return this.get('store').findRecord('github-repository', `${user_id}/${params.repo_id}`);
  },

  setupController(controller, model) {
    controller.set('currentUser', this.modelFor('index.user'));
    controller.set('currentRepo', model);
    controller.set('selectedBranch', model.get('defaultBranch'));
    // Set this for the user-branch selector state
    this.controllerFor('index.user').set('currentRepo', model);
  }
});
