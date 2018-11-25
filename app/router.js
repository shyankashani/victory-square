import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('items', { path: 'inventory' });
  this.route('organizations', function() {
    this.route('organization', { path: '/:organization_id' }, function() {
      this.route('inventory', function() {
        this.route('item', { path: '/:item_id' });
      });
    });
  });
});

export default Router;
