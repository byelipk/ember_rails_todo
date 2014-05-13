// For more information see: http://emberjs.com/guides/routing/

App.TodosRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('todo');
  }
});
