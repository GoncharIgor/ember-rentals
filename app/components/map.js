import Component from '@glimmer/component';
import ENV from 'super-rentals/config/environment';

const MAPBOX_API = 'https://api.mapbox.com/styles/v1/mapbox/streets-v11/static';

export default class MapComponent extends Component {
  get src() {
    // access to our component's arguments
    // this.args is an API provided by the Glimmer component superclass
    // But if values ${lng},${lat},${zoom} change, then component will be re-rendered
    // Ember does this by automatically tracking any variables that were accessed while computing a getter's value
    // All arguments that can be accessed from this.args (in other words, this.args.*) are implicitly marked as @tracked
    let { lng, lat, width, height, zoom } = this.args;

    let coordinates = `${lng},${lat},${zoom}`;
    let dimensions = `${width}x${height}`;
    let accessToken = `access_token=${this.token}`;

    return `${MAPBOX_API}/${coordinates}/${dimensions}@2x?${accessToken}`;
  }

  // NO @tracked
  // Unlike instance variables, getters cannot be "assigned" a new value directly,
  // so it does not make sense to monitor them for changes.
  get token() {
    return encodeURIComponent(ENV.MAPBOX_ACCESS_TOKEN);
  }
}
