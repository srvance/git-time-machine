import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('repo-details', 'Integration | Component | repo details', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });
  const repo = {
    fullName: 'user/repo',
    name: 'repo',
    language: 'JavaScript',
    description: 'A repo',
    fork: false,
    private: false,
    createdAt: 'dawn'
  };

  this.set('selectedRepo', repo);

  this.render(hbs`{{repo-details repo=selectedRepo}}`);

  assert.equal(this.$().text().trim(),
`Repository: ${repo.fullName}


    Name: ${repo.name}
    Language: ${repo.language}
    Description: ${repo.description}
    Fork: ${repo.fork}
    Private: ${repo.private}
    Created: ${repo.createdAt}`
  );
});
