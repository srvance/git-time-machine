import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('login');
  this.route('index', { path: '/' }, function () {
    this.route('user', { path: ':user_id' }, function() {
      this.route('repo', { path: ':repo_id' }, function() {
        this.route('branch', { path: ':branch_id' }, function() {
          this.route('path', { path: '*path'});
        });
      });
    });
  });
});

export default Router;
