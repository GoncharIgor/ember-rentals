import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class RentalRoute extends Route {
  @service store;

  async model(params) {
    // takes a model type (rental - name of the file in 'models' folder) and a model ID from the URL
    // Ember Data uses an adapter (how and where get data) and serializer (converting data) architecture.
    // Out of the box, Ember Data provides a default JSON:API adapter and serializer
    return this.store.findRecord('rental', params.rental_id);
  }
}
