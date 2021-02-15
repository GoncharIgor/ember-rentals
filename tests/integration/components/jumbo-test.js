import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

// Rendering test. These are used to render and test a single component at a time.
// This is in contrast to the acceptance tests, which have to navigate and render entire pages worth of content.

module('Integration | Component | jumbo', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders the content inside a jumbo header with a tomster', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function (val) { ... });
    await render(hbs`<Jumbo>Hello World</Jumbo>`);

    assert.dom('.jumbo').exists();
    assert.dom('.jumbo').hasText('Hello World');
    assert.dom('.jumbo .tomster').exists();
  });
});
