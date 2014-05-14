// For more information see: http://emberjs.com/guides/routing/

App.Router.map(function() {
  // Make `/` go to `todos` resource
  this.resource('todos', { path: '/' }, function() {
    this.route('active');
    this.route('completed');

    // We get `todos.index` for free when use the callback
  });
});
