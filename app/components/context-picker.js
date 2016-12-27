import Ember from 'ember';

export default Ember.Component.extend({
  session: Ember.inject.service(),
  tagName: 'nav',

  actions: {
    logout() {
      this.get('session').invalidate();
    },
    changeUser(newUser) {
      this.get('onChangeUser')(newUser);
    },
    changeRepo(newRepo) {
      this.set('selected', newRepo);
      this.get('onChangeRepo')(newRepo);
    },
    changeBranch(newBranch) {
      console.log(`Branch change to ${newBranch.get('name')}`);
      this.set('selectedBranch', newBranch);
      this.get('onChangeBranch')(newBranch);
    }
  }
});
