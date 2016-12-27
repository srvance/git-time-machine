import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('login');
  this.route('index', { path: '/' }, function() {
    this.route('-');
    this.route('user', { path: ':user_id' } );
    this.route('repo', { path: ':user_id/:repo_id' } );
    this.route('branch', { path: ':user_id/:repo_id/:branch_id' } );
  });
});

export default Router;
