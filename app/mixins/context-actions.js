import Ember from 'ember';

export default Ember.Mixin.create({
  actions: {
    specifyUser(newUser) {
      this.transitionToRoute('index.user', newUser);
    },
    specifyRepo(repo) {
      console.log(`Change to repo ${repo.get('fullName')}`);
      this.transitionToRoute('index.repo', repo.get('owner.login'), repo.get('name'));
    },
    specifyBranch(branch) {
      let user = this.get('model.selectedUser');
      let repo = this.get('model.selectedRepo');
      console.log(`With user ${user.get('login')} and repo ${repo.get('name')}`);
      console.log(`Change to branch ${branch.get('name')}`);
      this.transitionToRoute('index.branch', user.get('login'), repo.get('name'), branch.get('name'));
    }
  }
});
