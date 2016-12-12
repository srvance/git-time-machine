import DS from 'ember-data';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

export default DS.RESTAdapter.extend(DataAdapterMixin, {
  authorizer: 'authorizer:github',

  host: 'https://api.github.com',

  urlForFindRecord(id, modelName, snapshot) {
    let builtURL = this._super(id, modelName, snapshot);
    if (id === '#') {
      builtURL = builtURL.replace('users/%23', 'user');
    }
    return builtURL;
  }
});
