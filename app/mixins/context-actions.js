import Ember from 'ember';

export default Ember.Mixin.create({
  actions: {
    specifyUser(newUser) {
      this.transitionToRoute('index.user', newUser);
    },
    specifyRepo(repo) {
      console.log(`Controller action: ${repo.get('fullName')}`);
      this.transitionToRoute('index.repo', repo.get('owner.login'), repo.get('name'));
    }
  }
});
