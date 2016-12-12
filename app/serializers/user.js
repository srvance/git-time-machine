import DS from 'ember-data';
import Ember from 'ember';

const { isArray, String:Str } = Ember;

export default DS.RESTSerializer.extend({
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    if (id === '#') {
      payload.repos_url = payload.repos_url.replace(`users/${payload.login}`, 'user');
    }
    payload.recordId = id;
    let wrappedPayload = {};
    let fieldName = primaryModelClass.modelName;
    if (isArray(payload)) {
      fieldName = Str.pluralize(fieldName);
    }
    wrappedPayload[fieldName] = payload;
    return this._super(store, primaryModelClass, wrappedPayload, id, requestType);
  },

  normalize(modelClass, resourceHash, prop) {
    let normalizedHash = {
      id: resourceHash.recordId || resourceHash.login,
      login: resourceHash.login,
      name: resourceHash.name,
      type: resourceHash.type,
      avatarUrl: resourceHash.avatar_url,
      publicRepos: resourceHash.public_repos,
      publicGists: resourceHash.public_gists,
      followers: resourceHash.followers,
      following: resourceHash.following,
      createdAt: resourceHash.created_at,
      updatedAt: resourceHash.updated_at,
      url: resourceHash.url,
      links: {
        githubRepositories: resourceHash.repos_url
      }
    };
    return this._super(modelClass, normalizedHash, prop);
  }

});
