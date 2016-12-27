import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('user-details', 'Integration | Component | user details', {
  integration: true
});

test('it renders', function(assert) {
  const user = {
    name: 'Stephen Vance',
    login: 'srvance',
    type: 'User',
    publicRepos: 17,
    publicGists: 5,
    followers: 3,
    following: 11,
    createdAt: 'tomorrow',
    url: 'https://github.com/srvance'
  };

  this.set('selectedUser', user);

  this.render(hbs`{{user-details user=selectedUser}}`);

  assert.equal(this.$().text().trim(),
`Name: ${user.name}
    Login: ${user.login}
    Type: ${user.type}
    Public repos: ${user.publicRepos}
    Public gists: ${user.publicGists}
    Followers: ${user.followers}
    Following: ${user.following}
    Created: ${user.createdAt}
    Profile URL: ${user.url}`);
});
