import { inject as service } from '@ember/service';
import Controller from '@ember/controller';

export default Controller.extend({
  session: service(),

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
