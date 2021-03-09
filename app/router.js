import EmberRouter from '@ember/routing/router';
import config from 'super-rentals/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('about'); // adds a route named "about", which is served at the "/about" URL by default
  this.route('contact', {path: '/getting-in-touch'});
  // added the contact route, but explicitly specified a path for the route.
  // This allows us to keep the legacy URL, but use the new, shorter name for the route, as well as the TEMPLATE FILENAME
  // here: 1) file = templates/contact.hbs 2) route = /getting-in-touch
  this.route('rental', { path: '/rentals/:rental_id' });
});
