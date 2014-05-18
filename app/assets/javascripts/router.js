// For more information see: http://emberjs.com/guides/routing/

App.Router.map(function() {
  // Make `/` go to `todos` resource
  this.resource('todos', { path: '/' }, function() {

    // In general routes, as opposed to resources, might be good candidates
    // for store.filter or store.filterBy.
    this.route('active');
    this.route('completed');

    // We get `todos.index` for free when use the callback
  });
});
