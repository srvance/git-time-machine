import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    let repo = this.modelFor('index.user.repo').get('fullName');
    return this.get('store').queryRecord('github-branch', {
        repo: repo,
        branch: params.branch_id
      });
  },

  setupController(controller, model) {
    controller.set('currentBranch', model);
    this.controllerFor('index.user.repo').set('selectedBranch', model);
  }
});
