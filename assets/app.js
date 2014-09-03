window.App = Ember.Application.create({
  LOG_ACTIVE_GENERATION: true,
  LOG_MODULE_RESOLVER: true,
  LOG_TRANSITIONS: true,
  LOG_TRANSITIONS_INTERNAL: true,
  LOG_VIEW_LOOKUPS: true
});

Ember.RSVP.configure('onerror', function(error) {
  if (error instanceof Error) {
    Ember.Logger.assert(false, error);
    return Ember.Logger.error(error.stack);
  }
});

App.Router = Ember.Router.extend();

App.Router.map(function() {
  this.route('application');
  this.route('blog');
  this.route('gallery');
  this.route('about');
  this.resource('catalogue', function() {
    return this.route('index', {
      path: '/bags'
    });
  });
  this.route('bag');
  this.resource('custom', function() {
    this.route('index', {
      path: '/colors'
    });
    this.route('features');
    return this.route('extras');
  });
  this.route('instock');
  this.route('instockitem');
  return this.route('cart');
});

App.ApplicationFixture = DS.FixtureAdapter.extend();
