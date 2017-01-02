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
    controller.set('currentUser', this.modelFor('index.user'));
    controller.set('currentBranch', this.modelFor('index.user.branch'));
    controller.set('currentBranch', model);
  }
});
