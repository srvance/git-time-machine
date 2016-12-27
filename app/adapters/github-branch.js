import GitHubBranchAdapter from 'ember-data-github/adapters/github-branch';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

export default GitHubBranchAdapter.extend(DataAdapterMixin, {
  authorizer: 'authorizer:github'
});
