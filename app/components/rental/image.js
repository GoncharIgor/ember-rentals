import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class RentalImageComponent extends Component {
  // tells Ember to monitor this variable for updates
  // when this value changes, Ember will automatically re-render any templates that depend on its value.
  @tracked isLarge = false;

  // we intend to use this method from our template
  @action toggleSize() {
    this.isLarge = !this.isLarge;
  }
}
