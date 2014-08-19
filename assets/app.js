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
  this.route('catalogue');
  this.route('custom');
  return this.route('instock');
});

App.ApplicationFixture = DS.FixtureAdapter.extend();
