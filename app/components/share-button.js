import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

const TWEET_INTENT = 'https://twitter.com/intent/tweet';

// A major difference between services and global variables is that services are scoped to your app

export default class ShareButtonComponent extends Component {
  @service router;
  // to give another name to service:
  // @service('router') emberRouter;

  get currentURL() {
    // Instead of: return window.location.href;
    return new URL(this.router.currentURL, window.location.origin);
    // currentURL - a relative URL, so we would have to join it with window.location.origin to get an absolute URL
  }

  get shareURL() {
    let url = new URL(TWEET_INTENT);

    url.searchParams.set('url', this.currentURL);

    if (this.args.text) {
      url.searchParams.set('text', this.args.text);
    }

    if (this.args.hashtags) {
      url.searchParams.set('hashtags', this.args.hashtags);
    }

    if (this.args.via) {
      url.searchParams.set('via', this.args.via);
    }

    return url;
  }
}
