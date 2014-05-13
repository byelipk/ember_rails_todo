// For more information see: http://emberjs.com/guides/routing/

App.TodosIndexRoute = Ember.Route.extend({
  model: function() {
    return this.modelFor('todos');
  }
});
