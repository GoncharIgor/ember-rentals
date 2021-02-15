import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class IndexRoute extends Route {
  @service store;

  // hook f() - fetching and preparing any data that you need for your route
  // automatically called when entering a route
  async model() {
    // will make request to:
    // http://localhost:4200/api/rentals.json.
    // let response = await fetch('/api/rentals.json');
    // let { data } = await response.json();
    // ... .map(...)
    // return { id, type, ...attributes };

    return this.store.findAll('rental');
  }
}
