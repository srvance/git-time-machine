import Ember from 'ember';

export default Ember.Component.extend({
  selected: null,
  actions: {
    selectRepo(repo) {
      console.log(Ember.inspect(repo));
      this.set('selected', repo);
      this.sendAction('specifyRepo', repo);
    }
  }
});
