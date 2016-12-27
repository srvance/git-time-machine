import GitHubRepoAdapter from 'ember-data-github/adapters/github-repository';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

export default GitHubRepoAdapter.extend(DataAdapterMixin, {
  authorizer: 'authorizer:github'
});
