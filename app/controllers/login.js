import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),

  actions: {
    authenticateWithGithub() {
      this.set('loading', true);
      this.get('session')
        .authenticate('authenticator:torii', 'github')
        .then( () => {
          this.set('loading', false);
        })
        .catch( (reason) => {
          this.set('errorMessage', reason.error);
          this.set('loading', false);
        });
    }
  }
});
