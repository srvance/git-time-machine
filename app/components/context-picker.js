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
    }
  }
});