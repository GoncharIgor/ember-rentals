import JSONAPIAdapter from '@ember-data/adapter/json-api';

export default class ApplicationAdapter extends JSONAPIAdapter {
  namespace = 'api';

  // overriding Ember Data's buildURL method in order to add .json extension
  buildURL(...args) {
    return `${super.buildURL(...args)}.json`;
  }
}
