import GitHubContentAdapter from 'ember-data-github/adapters/github-content';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

export default GitHubContentAdapter.extend(DataAdapterMixin, {
  authorizer: 'authorizer:github'
});
