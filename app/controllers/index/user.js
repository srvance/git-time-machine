import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    specifyUser(newUser) {
      this.transitionToRoute('index.user', newUser);
    },
    specifyRepo(repo) {
      console.log(`Controller action: ${repo.get('fullName')}`);
      this.transitionToRoute('index.user.repo', repo.get('owner.login'), repo.get('name'));
    }
  }
});
