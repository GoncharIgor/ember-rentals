import Model, { attr } from '@ember-data/model';

const COMMUNITY_CATEGORIES = ['Condo', 'Townhouse', 'Apartment'];

export default class RentalModel extends Model {
  // Attributes declared with the @attr decorator work with the auto-track feature
  @attr title;
  @attr owner;
  @attr city;
  @attr location;
  @attr category;
  @attr image;
  @attr bedrooms;
  @attr description;

  get type() {
    if (COMMUNITY_CATEGORIES.includes(this.category)) {
      return 'Community';
    } else {
      return 'Standalone';
    }
  }
}
